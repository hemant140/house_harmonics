import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signInState, signInError, signInSuccess } from '../redux/user/userSlice'
import OAuth from '../components/OAuth';
const SignIn = () => {
  const dispatch = useDispatch();
  const [formData, setFromData] = useState({})
  const { loading, error } = useSelector((state) => state.user)
  // const [loading ,setLoading]= useState()
  // const [error ,setError]= useState()
  const navigate = useNavigate();
  const handleChange = (e) => {
    const fname = e.target.id;
    const fvalue = e.target.value;
    setFromData({
      ...formData,
      [fname]: fvalue
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInState());
      const res = await fetch('/api/auth/Signin', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if (data.success === 0) {
        dispatch(signInError(data.message))
        return
      }
      dispatch(signInSuccess(data));
      navigate('/');

    } catch (error) {
      dispatch(signInError(data.message))

    }
  }
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign In</h1>

      <form className='flex flex-col gap-4' onSubmit={handleSubmit}>

        <input type="email" placeholder='email' required
          className='border p-3 rounded-lg' id='email' onChange={handleChange} />

        <input type="password" placeholder='password' required
          className='border p-3 rounded-lg' id='password' onChange={handleChange} />

        <button disabled={loading} className='bg-slate-700 text-white p-3 
                    rounded-lg uppercase hover:opacity-95 
                    disabled:opacity-80'>
          {loading ? 'Loading....' : 'Sign up'}
        </button>
        <OAuth />
      </form>

      <div className='flex gap-2 mt-5'>
        <p>Don't have an account?</p>
        <Link to="/sign-up">
          <span className='text-blue-700'>Sign Up</span>
        </Link>

      </div>

      {error && <p className='text-red-500'>{error}</p>}
    </div>
  )
}

export default SignIn

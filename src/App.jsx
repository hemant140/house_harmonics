import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../src/pages/Home'
import SignIn from '../src/pages/SignIn'
import SignOut from '../src/pages/SignOut'
import Profile from '../src/pages/Profile'
import About from '../src/pages/About'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignOut />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<About />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App

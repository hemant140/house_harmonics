import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import userReducer from './user/userSlice';
import { persistStore, persistReducer } from 'redux-persist' // Change to persistReducer
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
    user: userReducer,
});

const persistConfig = {
    key: 'root',
    storage,
    version: 1
}

const persistedReducer = persistReducer(persistConfig, rootReducer); // Corrected the variable name

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

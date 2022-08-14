import React, {useCallback} from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import Contacts from './components/Contacts';
import './App.css';
import Login from "./components/Login/Login";
import useToken from "./customHooks/useToken";


function App() {
    const {token, setToken} = useToken();
    const setTokenCallback = useCallback((token: { token: string }) => {
        setToken(token)
    }, [token])

    return (
        <>
            <Routes>
                <Route path="/login" element={<Login token={token} setToken={setTokenCallback}/>}/>
                <Route path="/dashboard" element={<Contacts/>}/>
                <Route path="/" element={(!token)
                    ? <Navigate to="/login"/>
                    : <Navigate to="/dashboard"/>}/>
                <Route path="/404" element={<h1>404: Page not found</h1>}/>
                <Route path="*" element={<Navigate to="/404"/>}/>
            </Routes>
        </>
    );
}

export default App;



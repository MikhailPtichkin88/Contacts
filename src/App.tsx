import React from 'react';
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
import Contacts from './components/Contacts';
import './App.css';
import Login from "./components/Login/Login";
import useToken from "./customHooks/useToken";


function App() {
    const {token, setToken} = useToken();

    if (!token) {
        return <Login setToken={setToken}/>
    }
    console.log(token)

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={(!token)
                        ? <Login setToken={setToken}/>
                        : <Navigate to="/dashboard"/>}/>

                    <Route path="/login" element={(!token)
                        ?<Login setToken={setToken}/>
                        : <Navigate to="/dashboard"/>}/>

                    <Route path="/dashboard" element={<Contacts/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;



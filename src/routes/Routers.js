import { Routes, Route } from "react-router-dom";
import React from 'react';
import Home from "../page/home/Home";

function Routers(props) {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    );
}

export default Routers;
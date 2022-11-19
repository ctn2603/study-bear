import React, { Component } from "react";
import NavbarExample from '../components/Navbar'
import MapContainer from '../components/mapGoogle.jsx'
function HomePage() {

    return (
        <>
            <NavbarExample />
            <MapContainer height='50vh' width='50%'/>
        </>
    )
}

export default HomePage
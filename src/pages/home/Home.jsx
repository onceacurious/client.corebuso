import React, { useEffect, useContext, useState } from 'react'
import { Navbar } from '../../components'

import MainContext from '../../context/MainContext'
import "./home.scss"
const Home = () => {
    const { dark } = useContext(MainContext);

    return (
        <div id="home" className={dark ? 'gradient-bg-dark' : 'gradient-bg-light'}>
            <Navbar />
            <div className='container'>
                <h1>Home</h1>
            </div>
        </div>
    )
}

export default Home
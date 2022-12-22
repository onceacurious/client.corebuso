import React from 'react'
import {GiGems} from 'react-icons/gi'
import {MdDevices} from 'react-icons/md'
import {GrTechnology} from 'react-icons/gr'


import "./whyCBS.scss"
const WhyCBS = () => {
    return (
        <div id='whyCBS' className='container'>
            <ul>
                <li>
                    <GiGems/>
                    <p>Bring value to your business</p>
                </li>
                <li>
                    <MdDevices/>
                    <p>Device compatibility</p>
                </li>
                <li>
                    <GrTechnology/>
                    <p>Modern, responsive and reactive</p>
                </li>
            </ul>
        </div>
    )
}

export default WhyCBS
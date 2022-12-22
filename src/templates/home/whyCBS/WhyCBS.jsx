import React from 'react'
import {GiGems} from 'react-icons/gi'
import {MdDevices} from 'react-icons/md'
import {SiAtom} from 'react-icons/si'


import "./whyCBS.scss"
const WhyCBS = () => {
    return (
        <div id='whyCBS' className='container'>
            <ul className='cbs-item display-flex'>
                <li className='cbs-list'>
                    <GiGems/>
                    <p>Bring value to your business</p>
                </li>
                <li className='cbs-list'>
                    <MdDevices/>
                    <p>Device compatibility</p>
                </li>
                <li className='cbs-list'>
                    <SiAtom/>
                    <p>Modern, responsive and reactive</p>
                </li >
            </ul>
        </div>
    )
}

export default WhyCBS
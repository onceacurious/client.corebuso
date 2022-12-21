import React from 'react'
import { ImSearch } from 'react-icons/im'

import './searchbar.scss'
const Searchbar = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
    };
    return (
        <div className='container p-block-2'>
            <form className='searchbar-form bg-primary-75' onSubmit={handleSubmit}>
                <input className='searchbar-input' type="text" placeholder='Search...' />
                <button className='searchbar-btn btn' type="submit">
                    <ImSearch />
                </button>
            </form>
        </div>
    )
}

export default Searchbar
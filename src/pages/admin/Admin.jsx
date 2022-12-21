import React from 'react'
import { Link } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import { Inquiry, Product } from '../../templates'


import "./admin.scss"
const Admin = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/admin/">Inquiry</Link>
                </li>
                <li>
                    <Link to="/admin/product">Product</Link>
                </li>
            </ul>
            <hr />
            <br />
            <h1>admin</h1>
            <br />
            <hr />
            <Routes>
                <Route index path="/" element={<Inquiry />} />
                <Route path="/product" element={<Product />} />
            </Routes>
        </div>
    )
}

export default Admin
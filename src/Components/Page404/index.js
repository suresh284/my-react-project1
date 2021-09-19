import React from 'react'
import './index.css'
import { Link } from 'react-router-dom'
const imgURL = 'https://images.unsplash.com/photo-1532382147828-96bdb28b7b04?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80'
export default function Page404() {
    return (
        <div className="not-found-page">
            <img 
                src={imgURL}
                alt='404.png'
                width={500}
                height={500}
            />
            <div className="page-content">
            <p> Page not Found </p>
            <Link to='/'> Go Back </Link>
            </div>
        </div>
    )
}

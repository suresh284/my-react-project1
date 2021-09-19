// import React from 'react'
// import { Link } from 'react-router-dom'
// export default function MainPage() {
//     return (
//         <div>
//             <h1>Welcome to React App - 18th Sept 2021 </h1>
//             <ul>
//                 <li> 
//                     <a href='/'> Home Page </a>
//                 </li>  
//                 <li> 
//                     <a href='/dashboard'> Dashboard </a>
//                 </li>  
//             </ul>
//         </div>
//     )
// }


import React from 'react'
import { Link } from 'react-router-dom'
export default function MainPage() {
    return (
        <div>
            <h1>Welcome to React App - 18th Sept 2021 </h1>
            <ul>
                <li> 
                    <Link to='/'> Home Page </Link>
                </li>  
                <li> 
                    <Link to='/dashboard'> Dashboard </Link>
                </li>  
                <li>
                    <Link to='/news/business'> Business News </Link>
                </li>
                <li>
                <Link to='/news/tech'> Techology News </Link>
                </li>
                <li>
                <Link to='/news/sports'> Sports News </Link>
                </li>
            </ul>
        </div>
    )
}

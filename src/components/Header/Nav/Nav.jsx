import React from 'react'
import icon1 from '@/assets/images/icon1.png'
import icon2 from '@/assets/images/icon2.png'
import icon3 from '@/assets/images/icon3.png'
import icon4 from '@/assets/images/icon4.png'
import icon5 from '@/assets/images/icon5.png'
import { Notifications } from './Notifications'
import { Messages } from './Messages'
import { Link } from 'react-router-dom'

export const Nav = ({ user }) => {
  return (
    <nav style={{float: user ? "left" : "right"}}>
    <ul>
        <li>
            <a href="index.html" title="">
                <span><img src={icon1} alt="" /></span>
                Home
            </a>
        </li>
        <li>
            <a href="companies.html" title="">
                <span><img src={icon2} alt="" /></span>
                Companies
            </a>
            <ul>
                <li><a href="companies.html" title="">Companies</a></li>
                <li><a href="company-profile.html" title="">Company Profile</a></li>
            </ul>
        </li>
        <li>
            <a href="projects.html" title="">
                <span><img src={icon3} alt="" /></span>
                Projects
            </a>
        </li>
        {user && (
         <li>
         <a href="profiles.html" title="">
             <span><img src={icon4} alt="" /></span>
             Profiles
         </a>
         <ul>
             <li><a href="user-profile.html" title="">User Profile</a></li>
             <li><Link to="/my-profile-feed" title="">my-profile-feed</Link></li>
         </ul>
     </li>
        )}
        <li>
            <a href="jobs.html" title="">
                <span><img src={icon5} alt="" /></span>
                Jobs
            </a>
        </li>        
        {user && (
            <>
              <Messages />
              <Notifications />
            </>
        )}
    </ul>
</nav>
  )
}

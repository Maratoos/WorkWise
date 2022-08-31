import React from 'react'
import { useSelector } from "react-redux"
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { Suggestions } from '../Widgets/Suggestions/Suggestions';
import logo2Img from '../../assets/images/logo2.png'
import cpImg from '../../assets/images/cp.png'

export const UserProfileSidebar = () => {
    const { user, isLoading } = useSelector(state => state.authReducer)
return (
<div className="col-lg-3 col-md-4 pd-left-none no-pd">
    <div className="main-left-sidebar no-margin">
        {user && <div className="user-data full-width">
            <div className="user-profile">
                <div className="username-dt">
                    <div className="usr-pic">
                        <img src={user.photoURL} alt="" />
                    </div>
                </div>
                <div className="user-specs">
                    <h3>{user.displayName}</h3>
                    <span>{user.role}</span>
                </div>
            </div>
            <ul className="user-fw-status">
                <li>
                    <h4>Following</h4>
                    <span>{user.following}</span>
                </li>
                <li>
                    <h4>Followers</h4>
                    <span>{user.followers}</span>
                </li>
                <li>
                    <a href="my-profile.html" title="">View Profile</a>
                </li>
            </ul>
        </div>}
        {isLoading &&
        <Box py={4} display="flex" alignItems="center" justifyContent="center">
            <CircularProgress />
        </Box>}
        <Suggestions />
        <div className="tags-sec full-width">
            <ul>
                <li><a href="#" title="">Help Center</a></li>
                <li><a href="#" title="">About</a></li>
                <li><a href="#" title="">Privacy Policy</a></li>
                <li><a href="#" title="">Community Guidelines</a></li>
                <li><a href="#" title="">Cookies Policy</a></li>
                <li><a href="#" title="">Career</a></li>
                <li><a href="#" title="">Language</a></li>
                <li><a href="#" title="">Copyright Policy</a></li>
            </ul>
            <div className="cp-sec">
                <img src={logo2Img} alt="" />
                <p><img src={cpImg} alt="" />Copyright 2019</p>
            </div>
        </div>
    </div>
</div>
  )
}


//сохранять айдишники постов в коллекции юзеров через массив скорее всего и выводить их туда

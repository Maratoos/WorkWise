import React from 'react'
import { useSelector } from "react-redux"
import logoImg from '@/assets/images/logo.png'
import { UserAccount } from './UserAccount/UserAccount'
import { Nav } from './Nav/Nav'

export const Header = () => {
  const { user } = useSelector(({ authReducer }) => authReducer)
  return (
    <header>
    <div className="container">
        <div className="header-data">
            <div className="logo">
                <a href="index.html" title=""><img src={logoImg} alt="" /></a>
            </div>
            <div className="search-bar">
                <form>
                    <input type="text" name="search" placeholder="Search..." />
                    <button type="submit"><i className="la la-search"></i></button>
                </form>
            </div>
            <Nav user={user} />
            <div className="menu-btn">
                <a href="#" title=""><i className="fa fa-bars"></i></a>
            </div>
            {user && <UserAccount />}
        </div>
    </div>
</header>
  )
}
import { Box } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React, { useState } from 'react'
import { Login } from '../../components/Login/Login'
import cmLogo from '@/assets/images/cm-logo.png'
import copyIcon from '@/assets/images/copy-icon.png'
import cmMain from '@/assets/images/cm-main-img.png'
import { SignUp } from '../../components/SignUp.jsx/SignUp'

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.secondary.main,
    height: "100vh" 
  }
}))

export const Auth = () => {
  const [showLogin, setShowLogin] = useState(true)
  const classes = useStyles()

  const AuthTagsController = () => (
    <ul className="sign-control">
      <li onClick={() => setShowLogin(true)} className={showLogin ? "current" : ""}><a href="#">Sign in</a></li>				
      <li onClick={() => setShowLogin(false)} className={!showLogin ? "current" : ""}><a href="#">Sign up</a></li>				
    </ul>
  )

  return (
    <Box className={classes.root}>
    <Box className="sign-in-page">
			<Box className="signin-popup">
				<Box className="signin-pop">
					<Box className="row">
            <Box className="col-lg-6">
							<Box className="cmp-info">
								<Box className="cm-logo">
									<img src={cmLogo} alt="" />
									<p>Workwise, is a global freelancing platform and social networking where businesses and independent professionals connect and collaborate remotely</p>
								</Box>
								<img src={cmMain} alt="" />			
							</Box>
						</Box>
            <Box className="col-lg-6">
            {showLogin && (<Login><AuthTagsController /></Login>)}
            {!showLogin && (<SignUp><AuthTagsController /></SignUp>)}
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className="footy-sec">
				<Box className="container">
					<ul>
						<li><a href="help-center.html" title="">Help Center</a></li>
						<li><a href="about.html" title="">About</a></li>
						<li><a href="#" title="">Privacy Policy</a></li>
						<li><a href="#" title="">Community Guidelines</a></li>
						<li><a href="#" title="">Cookies Policy</a></li>
						<li><a href="#" title="">Career</a></li>
						<li><a href="forum.html" title="">Forum</a></li>
						<li><a href="#" title="">Language</a></li>
						<li><a href="#" title="">Copyright Policy</a></li>
					</ul>
					<p><img src={copyIcon} alt="" />Copyright 2019</p>
				</Box>
			</Box>
    </Box>    
    </Box>
  )
}

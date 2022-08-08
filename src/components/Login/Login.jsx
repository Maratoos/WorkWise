import React, { useState } from 'react'
import { Box, Typography } from '@mui/material'

export const Login = ({ children }) => {
	const [username, setUsername] = useState("")
	const [password, setPassword] = useState("")

	const handleSubmit = (e) => {
		e.preventDefault()
	}

return (
<Box className="login-sec">
  {children && children}
	<Box className="sign_in_sec current">
		<Typography variant="h3">Sign in</Typography>
		<form onSubmit={handleSubmit}>
			<Box className="row">
				<Box className="col-lg-12 no-pdd">
					<Box className="sn-field">
						<input onChange={(e) => setUsername(e.target.value)} value={username} type="text" name="username" placeholder="Username" />
						<i className="la la-user"></i>
					</Box>
				</Box>
				<Box className="col-lg-12 no-pdd">
					<Box className="sn-field">
						<input onChange={(e) => setPassword(e.target.value)} value={password} type="password" name="password" placeholder="Password" />
						<i className="la la-lock"></i>
					</Box>
				</Box>
				<Box className="col-lg-12 no-pdd">
					<Box className="checky-sec">
						<Box className="fgt-sec">
							<input type="checkbox" name="cc" id="c1" />
							<label htmlFor="c1">
								<span></span>
							</label>
							<small>Remember me</small>
						</Box>
						<a href="#" title="">Forgot Password?</a>
					</Box>
				</Box>
				<Box className="col-lg-12 no-pdd">
					<button type="submit" value="submit">Sign in</button>
				</Box>
			</Box>
		</form>
		<Box className="login-resources">
			<h4>Login Via Social Account</h4>
			<ul>
				<li><a href="#" title="" className="fb"><i className="fa fa-facebook"></i>Login Via Facebook</a></li>
				<li><a href="#" title="" className="tw"><i className="fa fa-twitter"></i>Login Via Twitter</a></li>
			</ul>
		</Box>
	</Box>
</Box>
  )
}

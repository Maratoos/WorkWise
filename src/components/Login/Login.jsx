import React, { useState } from 'react'
import { Box, Typography } from '@mui/material'
import { useLogin } from '../../hooks/useLogin'
import { useNavigate } from 'react-router-dom'

export const Login = ({ children }) => {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const { login, error } = useLogin()
	const navigate = useNavigate()

	const handleSubmit = async (e) => {
		e.preventDefault()

		await login(email, password)

		if(!error) return navigate("/")
		console.log(error)
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
						<input onChange={(e) => setEmail(e.target.value)} value={email} type="text" name="email" placeholder="Email" />
						<i className="fa"><img style={{width: "20px"}} src="https://illustoon.com/photo/thum/2755.png" alt="" /></i>
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

import React, { useState } from 'react'
import { Box } from '@mui/material'
import { useSignup } from '../../hooks/useSignup'

export const SignUp = ({ children }) => {
  const { signup } = useSignup()
  const [form, setForm] = useState({
    username: "",
    category: "",
    country: "", 
    password: "", 
    confirmPassword: ""
  })

  const [confirmed, setConfirmed] = useState(false)

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [event.target.name]: event.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if(!confirmed) return

    await signup(form)
  }
  return (
  <Box className="login-sec">
    {children && children}
    <Box className="sign_in_sec current">
      <Box className="signup-tab">
        <i className="fa fa-long-arrow-left"></i>
        <h2>johndoe@example.com</h2>
        <ul>
          <li className="current"><a href="#" title="">User</a></li>
          <li><a href="#" title="">Company</a></li>
        </ul>
      </Box> 
      <Box className="dff-tab current">
        <form onSubmit={handleSubmit}>
          <Box className="row">
            <Box className="col-lg-12 no-pdd">
              <Box className="sn-field">
                <input onChange={handleChange} type="text" name="username" placeholder="Full Name" />
                <i className="la la-user"></i>
              </Box>
            </Box>
            <Box className="col-lg-12 no-pdd">
              <Box className="sn-field">
                <input onChange={handleChange} type="text" name="country" placeholder="Country" />
                <i className="la la-globe"></i>
              </Box>
            </Box>
            <Box className="col-lg-12 no-pdd">
              <Box className="sn-field">
                <select onChange={handleChange} name="category">
                  <option>Category</option>
                  <option>Category 1</option>
                  <option>Category 2</option>
                  <option>Category 3</option>
                  <option>Category 4</option>
                </select>
                <i className="la la-dropbox"></i>
                <span><i className="fa fa-ellipsis-h"></i></span>
              </Box>
            </Box>
            <Box className="col-lg-12 no-pdd">
              <Box className="sn-field">
                <input onChange={handleChange} type="password" name="password" placeholder="Password" />
                <i className="la la-lock"></i>
              </Box>
            </Box>
            <Box className="col-lg-12 no-pdd">
              <Box className="sn-field">
                <input onChange={handleChange} type="password" name="repeat-password" placeholder="Repeat Password" />
                <i className="la la-lock"></i>
              </Box>
            </Box>
            <Box className="col-lg-12 no-pdd">
              <Box className="checky-sec st2">
                <Box className="fgt-sec">
                  <input onChange={(e) => setConfirmed(e.target.value)} value={confirmed} type="checkbox" name="cc" id="c2" />
                  <label htmlFor="c2">
                    <span></span>
                  </label>
                  <small>Yes, I understand and agree to the workwise Terms & Conditions.</small>
                </Box> 
              </Box>
            </Box>
            <Box className="col-lg-12 no-pdd">
              <button type="submit" value="submit">Get Started</button>
            </Box>
          </Box>
        </form>
      </Box> 
      {/* <Box className="dff-tab" id="tab-4">
        <form>
          <Box className="row">
            <Box className="col-lg-12 no-pdd">
              <Box className="sn-field">
                <input onChange={handleChange} type="text" name="company-name" placeholder="Company Name" />
                <i className="la la-building"></i>
              </Box>
            </Box>
            <Box className="col-lg-12 no-pdd">
              <Box className="sn-field">
                <input onChange={handleChange} type="text" name="country" placeholder="Country" />
                <i className="la la-globe"></i>
              </Box>
            </Box>
            <Box className="col-lg-12 no-pdd">
              <Box className="sn-field">
                <input onChange={handleChange} type="password" name="password" placeholder="Password" />
                <i className="la la-lock"></i>
              </Box>
            </Box>
            <Box className="col-lg-12 no-pdd">
              <Box className="sn-field">
                <input onChange={handleChange} type="password" name="confirmPassword" placeholder="Repeat Password" />
                <i className="la la-lock"></i>
              </Box>
            </Box>
            <Box className="col-lg-12 no-pdd">
              <Box className="checky-sec st2">
                <Box className="fgt-sec">
                  <input type="checkbox" name="cc" id="c3" />
                  <label htmlFor="c3">
                    <span></span>
                  </label>
                  <small>Yes, I understand and agree to the workwise Terms & Conditions.</small>
                </Box>
              </Box>
            </Box>
            <Box className="col-lg-12 no-pdd">
              <button type="submit" value="submit">Get Started</button>
            </Box>
          </Box>
        </form>
      </Box>  */}
    </Box>		
  </Box>
  )
}

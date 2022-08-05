import React from 'react'
import { Box } from '@mui/material'

export const SignUp = () => {
  return (
  <Box className="login-sec">
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
        <form>
          <Box className="row">
            <Box className="col-lg-12 no-pdd">
              <Box className="sn-field">
                <input type="text" name="name" placeholder="Full Name" />
                <i className="la la-user"></i>
              </Box>
            </Box>
            <Box className="col-lg-12 no-pdd">
              <Box className="sn-field">
                <input type="text" name="country" placeholder="Country" />
                <i className="la la-globe"></i>
              </Box>
            </Box>
            <Box className="col-lg-12 no-pdd">
              <Box className="sn-field">
                <select>
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
                <input type="password" name="password" placeholder="Password" />
                <i className="la la-lock"></i>
              </Box>
            </Box>
            <Box className="col-lg-12 no-pdd">
              <Box className="sn-field">
                <input type="password" name="repeat-password" placeholder="Repeat Password" />
                <i className="la la-lock"></i>
              </Box>
            </Box>
            <Box className="col-lg-12 no-pdd">
              <Box className="checky-sec st2">
                <Box className="fgt-sec">
                  <input type="checkbox" name="cc" id="c2" />
                  <label for="c2">
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
      <Box className="dff-tab" id="tab-4">
        <form>
          <Box className="row">
            <Box className="col-lg-12 no-pdd">
              <Box className="sn-field">
                <input type="text" name="company-name" placeholder="Company Name" />
                <i className="la la-building"></i>
              </Box>
            </Box>
            <Box className="col-lg-12 no-pdd">
              <Box className="sn-field">
                <input type="text" name="country" placeholder="Country" />
                <i className="la la-globe"></i>
              </Box>
            </Box>
            <Box className="col-lg-12 no-pdd">
              <Box className="sn-field">
                <input type="password" name="password" placeholder="Password" />
                <i className="la la-lock"></i>
              </Box>
            </Box>
            <Box className="col-lg-12 no-pdd">
              <Box className="sn-field">
                <input type="password" name="repeat-password" placeholder="Repeat Password" />
                <i className="la la-lock"></i>
              </Box>
            </Box>
            <Box className="col-lg-12 no-pdd">
              <Box className="checky-sec st2">
                <Box className="fgt-sec">
                  <input type="checkbox" name="cc" id="c3" />
                  <label for="c3">
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
    </Box>		
  </Box>
  )
}

import React from 'react'
import icon6 from '@/assets/images/icon6.png'
import nyImg1 from '@/assets/images/resources/ny-img1.png'
import nyImg2 from '@/assets/images/resources/ny-img2.png'
import nyImg3 from '@/assets/images/resources/ny-img3.png'

export const Messages = () => {
  return (
<li>
    <a href="#" title="" className="not-box-openm">
        <span><img src={icon6} alt="" /></span>
        Messages
    </a>
    <div className="notification-box msg" id="message">
        <div className="nt-title">
            <h4>Setting</h4>
            <a href="#" title="">Clear all</a>
        </div>
        <div className="nott-list">
            <div className="notfication-details">
                  <div className="noty-user-img">
                      <img src={nyImg1} alt="" />
                  </div>
                  <div className="notification-info">
                      <h3><a href="messages.html" title="">Jassica William</a> </h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do.</p>
                      <span>2 min ago</span>
                  </div>
              </div>
              <div className="notfication-details">
                  <div className="noty-user-img">
                      <img src={nyImg2} alt="" />
                  </div>
                  <div className="notification-info">
                      <h3><a href="messages.html" title="">Jassica William</a></h3>
                      <p>Lorem ipsum dolor sit amet.</p>
                      <span>2 min ago</span>
                  </div>
              </div>
              <div className="notfication-details">
                  <div className="noty-user-img">
                      <img src={nyImg3} alt="" />
                  </div>
                  <div className="notification-info">
                      <h3><a href="messages.html" title="">Jassica William</a></h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempo incididunt ut labore et dolore magna aliqua.</p>
                      <span>2 min ago</span>
                  </div>
              </div>
              <div className="view-all-nots">
                  <a href="messages.html" title="">View All Messsages</a>
              </div>
        </div>
    </div>
</li>
  )
}

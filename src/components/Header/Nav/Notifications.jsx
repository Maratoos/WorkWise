import React from 'react'
import icon7 from '@/assets/images/icon7.png'
import nyImg1 from '@/assets/images/resources/ny-img1.png'
import nyImg2 from '@/assets/images/resources/ny-img2.png'
import nyImg3 from '@/assets/images/resources/ny-img3.png'

export const Notifications = () => {
  return (
<li>
    <a href="#" title="" className="not-box-open">
        <span><img src={icon7} alt="" /></span>
        Notification
    </a>
    <div className="notification-box noti" id="notification">
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
                      <h3><a href="#" title="">Jassica William</a> Comment on your project.</h3>
                      <span>2 min ago</span>
                  </div>
              </div>
              <div className="notfication-details">
                  <div className="noty-user-img">
                  <img src={nyImg2} alt="" />
                  </div>
                  <div className="notification-info">
                      <h3><a href="#" title="">Jassica William</a> Comment on your project.</h3>
                      <span>2 min ago</span>
                  </div>
              </div>
              <div className="notfication-details">
                  <div className="noty-user-img">
                  <img src={nyImg3} alt="" />
                  </div>
                  <div className="notification-info">
                      <h3><a href="#" title="">Jassica William</a> Comment on your project.</h3>
                      <span>2 min ago</span>
                  </div>
              </div>
              <div className="notfication-details">
                  <div className="noty-user-img">
                  <img src={nyImg2} alt="" />
                  </div>
                  <div className="notification-info">
                      <h3><a href="#" title="">Jassica William</a> Comment on your project.</h3>
                      <span>2 min ago</span>
                  </div>
              </div>
              <div className="view-all-nots">
                  <a href="#" title="">View All Notification</a>
              </div>
        </div>
    </div>
</li>
  )
}

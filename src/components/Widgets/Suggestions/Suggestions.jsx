import React from 'react'
import s1Img from '../../../assets/images/resources/s1.png'
import s2Img from '../../../assets/images/resources/s2.png'
import s3Img from '../../../assets/images/resources/s3.png'
import s4Img from '../../../assets/images/resources/s4.png'
import s5Img from '../../../assets/images/resources/s5.png'
import s6Img from '../../../assets/images/resources/s6.png'

export const Suggestions = () => {
  return (
<div className="suggestions full-width">
    <div className="sd-title">
        <h3>Suggestions</h3>
        <i className="la la-ellipsis-v"></i>
    </div>
    <div className="suggestions-list">
        <div className="suggestion-usd">
            <img src={s1Img} alt="" />
            <div className="sgt-text">
                <h4>Jessica William</h4>
                <span>Graphic Designer</span>
            </div>
            <span><i className="la la-plus"></i></span>
        </div>
        <div className="suggestion-usd">
            <img src={s2Img} alt="" />
            <div className="sgt-text">
                <h4>John Doe</h4>
                <span>PHP Developer</span>
            </div>
            <span><i className="la la-plus"></i></span>
        </div>
        <div className="suggestion-usd">
            <img src={s3Img} alt="" />
            <div className="sgt-text">
                <h4>Poonam</h4>
                <span>Wordpress Developer</span>
            </div>
            <span><i className="la la-plus"></i></span>
        </div>
        <div className="suggestion-usd">
            <img src={s4Img} alt="" />
            <div className="sgt-text">
                <h4>Bill Gates</h4>
                <span>C & C++ Developer</span>
            </div>
            <span><i className="la la-plus"></i></span>
        </div>
        <div className="suggestion-usd">
            <img src={s5Img} alt="" />
            <div className="sgt-text">
                <h4>Jessica William</h4>
                <span>Graphic Designer</span>
            </div>
            <span><i className="la la-plus"></i></span>
        </div>
        <div className="suggestion-usd">
            <img src={s6Img} alt="" />
            <div className="sgt-text">
                <h4>John Doe</h4>
                <span>PHP Developer</span>
            </div>
            <span><i className="la la-plus"></i></span>
        </div>
        <div className="view-more">
            <a href="#" title="">View More</a>
        </div>
    </div>
</div>
  )
}

import React, { useState, useEffect } from 'react'
import { Posts } from '../../components/Posts/Posts'
import { Info } from './Tabs/Info'
import { Portfolio } from './Tabs/Portfolio'
import ic1Png from '../../assets/images/ic1.png'
import ic2Png from '../../assets/images/ic2.png'
import ic3Png from '../../assets/images/ic3.png'
import ic4Png from '../../assets/images/ic4.png'
import ic5Png from '../../assets/images/ic5.png'
import ic6Png from '../../assets/images/ic6.png'
import reviewPng from '../../assets/images/review.png'

const dataTabItems = [
    {
        src: ic1Png,
        text: "Feed"
    },
    {
        src: ic2Png,
        text: "Info"
    },
    {
        src: ic4Png,
        text: "Jobs"
    },
    {
        src: reviewPng,
        text: "Reviews"
    },
    {
        src: ic5Png,
        text: "Bids"
    },
    {
        src: ic3Png,
        text: "Portfolio"
    },
    {
        src: ic6Png,
        text: "Payment"
    }
]

const feedTabItems = [<Posts />, <Info />, "Jobs", "Reviews", "Bids", <Portfolio />, "Payment"]

export const Tabs = () => {
    const [activeTab, setActiveTab] = useState(0)
    return (
        <div>
            <div className="user-tab-sec rewivew">
                <h3>John Doe</h3>
                <div className="star-descp">
                    <span>Graphic Designer at Self Employed</span>
                    <ul>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star-half-o"></i></li>
                    </ul>
                    <a href="#" title="">Status</a>
                </div>
                <div className="tab-feed st2 settingjb">
                    <ul>
                        {dataTabItems.map((item, index) => (
                            <li onClick={() => setActiveTab(index)} key={item.text} style={{ cursor: 'pointer' }} className={index === activeTab ? "active" : ""} >
                                <a>
                                    <img src={item.src} alt="" />
                                    <span>{item.text}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {feedTabItems[activeTab]}
        </div>
    )
}

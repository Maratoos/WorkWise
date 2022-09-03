import React, { useState }  from 'react'
import coverImg from '../../assets/images/resources/cover-img.jpg'
import userPro from '../../assets/images/resources/user-pro-img.png'
import s1Png from '../../assets/images/resources/s1.png'
import s2Png from '../../assets/images/resources/s2.png'
import s3Png from '../../assets/images/resources/s3.png'
import s4Png from '../../assets/images/resources/s4.png'
import s5Png from '../../assets/images/resources/s5.png'
import s6Png from '../../assets/images/resources/s6.png'
import { useStorage } from '../../hooks/useStorage'
import { useSelector } from 'react-redux'

export const MyProfileFeed = () => {
    const { user } = useSelector(({ authReducer }) => authReducer)
    const [fileUrl, setFileUrl] = useState()
	const [bgFileUrl, setBgFileUrl] = useState()
    const { updateProfileImage, updateProfileBackgroundImage } = useStorage()

    const handleChangeImage = async (e) => {
        const file = e.target.files[0]
		if(user && file) {
			const res = await updateProfileImage(file)
			setFileUrl(res)
		}
    }

	const handleChangeBgImage = async (e) => {
        const file = e.target.files[0]
		if(user && file) {
			const res = await updateProfileBackgroundImage(file)
			setBgFileUrl(res)
		}
    }

  return (
    <div>
        <section className="cover-sec">
			<img width={1367} height={342} src={bgFileUrl ?? user?.profileBg} alt="" />
			<div className="add-pic-box">
				<div className="container">
					<div className="row no-gutters">
						<div className="col-lg-12 col-sm-12">					
							<input onChange={handleChangeBgImage} type="file" id="bg-image" />
							<label htmlFor="bg-image">Change Image</label>				
						</div>
					</div>
				</div>
			</div>
		</section>
        <div className="main-section">
            <div className="container">
                <div className="main-section-data">
                    <div className="row">
                        <div className="col-lg-3">
							<div className="main-left-sidebar">
								<div className="user_profile">
									<div className="user-pro-img">
                                        <label htmlFor="profile-image">
										<img width={180} height={180} src={fileUrl ?? user?.photoURL} alt="" />
                                        </label>
										<div className="add-dp" id="OpenImgUpload">
											<input type="file" id="profile-image" onChange={handleChangeImage}/>
											<label htmlFor="profile-image"><i className="fa fa-camera"></i></label>												
										</div>
									</div>
									<div className="user_pro_status">
										<ul className="flw-status">
											<li>
												<span>Following</span>
												<b>34</b>
											</li>
											<li>
												<span>Followers</span>
												<b>155</b>
											</li>
										</ul>
									</div>
									<ul className="social_links">
										<li><a href="#" title=""><i className="la la-globe"></i> www.example.com</a></li>
										<li><a href="#" title=""><i className="fa fa-facebook-square"></i> Http://www.facebook.com/john...</a></li>
										<li><a href="#" title=""><i className="fa fa-twitter"></i> Http://www.Twitter.com/john...</a></li>
										<li><a href="#" title=""><i className="fa fa-google-plus-square"></i> Http://www.googleplus.com/john...</a></li>
										<li><a href="#" title=""><i className="fa fa-behance-square"></i> Http://www.behance.com/john...</a></li>
										<li><a href="#" title=""><i className="fa fa-pinterest"></i> Http://www.pinterest.com/john...</a></li>
										<li><a href="#" title=""><i className="fa fa-instagram"></i> Http://www.instagram.com/john...</a></li>
										<li><a href="#" title=""><i className="fa fa-youtube"></i> Http://www.youtube.com/john...</a></li>
									</ul>
								</div>
								<div className="suggestions full-width">
									<div className="sd-title">
										<h3>People Viewed Profile</h3>
										<i className="la la-ellipsis-v"></i>
									</div>
									<div className="suggestions-list">
										<div className="suggestion-usd">
											<img src={s1Png} alt="" />
											<div className="sgt-text">
												<h4>Jessica William</h4>
												<span>Graphic Designer</span>
											</div>
											<span><i className="la la-plus"></i></span>
										</div>
										<div className="suggestion-usd">
											<img src={s2Png} alt="" />
											<div className="sgt-text">
												<h4>John Doe</h4>
												<span>PHP Developer</span>
											</div>
											<span><i className="la la-plus"></i></span>
										</div>
										<div className="suggestion-usd">
											<img src={s3Png} alt="" />
											<div className="sgt-text">
												<h4>Poonam</h4>
												<span>Wordpress Developer</span>
											</div>
											<span><i className="la la-plus"></i></span>
										</div>
										<div className="suggestion-usd">
											<img src={s4Png} alt="" />
											<div className="sgt-text">
												<h4>Bill Gates</h4>
												<span>C & C++ Developer</span>
											</div>
											<span><i className="la la-plus"></i></span>
										</div>
										<div className="suggestion-usd">
											<img src={s5Png} alt=""/>
											<div className="sgt-text">
												<h4>Jessica William</h4>
												<span>Graphic Designer</span>
											</div>
											<span><i className="la la-plus"></i></span>
										</div>
										<div className="suggestion-usd">
											<img src={s6Png} alt="" />
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
							</div>
						</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

import React, { useState }  from 'react'
import coverImg from '../../assets/images/resources/cover-img.jpg'
import s1Png from '../../assets/images/resources/s1.png'
import s2Png from '../../assets/images/resources/s2.png'
import s3Png from '../../assets/images/resources/s3.png'
import s4Png from '../../assets/images/resources/s4.png'
import s5Png from '../../assets/images/resources/s5.png'
import s6Png from '../../assets/images/resources/s6.png'
import { useStorage } from '../../hooks/useStorage'
import { useSelector } from 'react-redux'
import { Box, CircularProgress } from '@mui/material'
import { Tabs } from './Tabs'

export const MyProfileFeed = () => {
    const { user } = useSelector(({ authReducer }) => authReducer)
    const [fileUrl, setFileUrl] = useState()
	const [coverFileUrl, setCoverFileUrl] = useState()
	const [coverisLoading, setCoverIsLoading] = useState(false)
	const [avatarisLoading, setAvatarIsLoading] = useState(false)
    const { updateProfileImage, updateProfileBackgroundImage } = useStorage()

    const handleChangeImage = async (e) => {
        const file = e.target.files[0]
		setAvatarIsLoading(true)
		if(user && file) {
			const res = await updateProfileImage(file)
			setFileUrl(res)
		}
		setAvatarIsLoading(false)
    }

	const handleChangeBgImage = async (e) => {
        const file = e.target.files[0]
		setCoverIsLoading(true)
		if(user && file) {
			const res = await updateProfileBackgroundImage(file)
			setCoverFileUrl(res)
		}
		setCoverIsLoading(false)
    }



  return (
    <div>
        <section className="cover-sec">
			<Box 
			component="img" 
			width={1367} 
			height={400} 
			src={coverFileUrl ?? user?.profileBg} 
			alt="" 
			/>
			{coverisLoading && 
			<>
			<CircularProgress
			size={80}
			sx={{
			  position: "absolute",
			  zIndex: 2,
			  left: "46%",
			  top: "40%",
			  transform: "translate(-50%, -50%)"
			}}
			/>
			<Box 
			component="span"
			height="100%"
			width="100%"
			sx={{
			  position: "absolute",
			  left: 0, 
			  top: 0, 
			  background: "rgba(0,0,0,0.7)"
			}}
			/>
			</>
			}
			<div className="add-pic-box">
				<div className="container">
					<div className="row no-gutters">
						<div className="col-lg-12 col-sm-12">					
							<input disabled={coverisLoading} onChange={handleChangeBgImage} type="file" id="bg-image" />
							<label htmlFor="bg-image">Change Image</label>				
						</div>
					</div>
				</div>
			</div>
		</section>
      <main>
		<div className="main-section">
            <div className="container">
                <div className="main-section-data">
                    <div className="row">
                        <div className="col-lg-3">
							<div className="main-left-sidebar">
								<Box className="user_profile">
									<Box  className="user-pro-img">
                                        <label htmlFor="profile-image">
										<Box 
										component="img" 
										sx={{
										  height: "calc(180 / 1440 * 100vw)", 
										  width: "calc(180 / 1440 * 100vw)", 
										  maxWidth: 180, 
										  maxHeight: 180, 
										  minHeight: 140, 
										  minWidth: 140
										}}
										src={fileUrl ?? user?.photoURL} 
										alt="" 
										/>
										{avatarisLoading && "Ваше фото грузится"}
                                        </label>
										<div className="add-dp" id="OpenImgUpload">
											<input disabled={avatarisLoading} type="file" id="profile-image" onChange={handleChangeImage}/>
											<label htmlFor="profile-image"><i className="fa fa-camera"></i></label>												
										</div>
									</Box>
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
										<li><a href="#"><i className="la la-globe"></i> www.example.com</a></li>
										<li><a href="#"><i className="fa fa-facebook-square"></i> Http://www.facebook.com/john...</a></li>
										<li><a href="#"><i className="fa fa-twitter"></i> Http://www.Twitter.com/john...</a></li>
										<li><a href="#"><i className="fa fa-google-plus-square"></i> Http://www.googleplus.com/john...</a></li>
										<li><a href="#"><i className="fa fa-behance-square"></i> Http://www.behance.com/john...</a></li>
										<li><a href="#"><i className="fa fa-pinterest"></i> Http://www.pinterest.com/john...</a></li>
										<li><a href="#"><i className="fa fa-instagram"></i> Http://www.instagram.com/john...</a></li>
										<li><a href="#"><i className="fa fa-youtube"></i> Http://www.youtube.com/john...</a></li>
									</ul>
								</Box>
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
						<div className="col-lg-6">
							<div className="main-ws-sec">
								<Tabs />
							</div>
						</div>
                    </div>
                </div>
            </div>
        </div>
	  </main>
    </div>
  )
}
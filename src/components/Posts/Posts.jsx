import React from 'react'
import usPic from '@/assets/images/resources/us-pic.png'
import clock from '@/assets/images/clock.png'
import icon8 from '@/assets/images/icon8.png'
import icon9 from '@/assets/images/icon9.png'
import likedImg from '@/assets/images/liked-img.png'
import usPic2 from '@/assets/images/resources/us-pc2.png'
import bgImg1 from '@/assets/images/resources/bg-img1.png'
import bgImg2 from '@/assets/images/resources/bg-img2.png'
import bgImg3 from '@/assets/images/resources/bg-img3.png'
import bgImg4 from '@/assets/images/resources/bg-img4.png'

export const Posts = () => {
  return (
  <div class="posts-section">
    <div class="post-bar">
      <div class="post_topbar">
        <div class="usy-dt">
          <img src={usPic} alt="" />
          <div class="usy-name">
            <h3>John Doe</h3>
            <span><img src={clock} alt="" />3 min ago</span>
          </div>
        </div>
        <div class="ed-opts">
          <a href="#" title="" class="ed-opts-open"><i class="la la-ellipsis-v"></i></a>
          <ul class="ed-options">
            <li><a href="#" title="">Edit Post</a></li>
            <li><a href="#" title="">Unsaved</a></li>
            <li><a href="#" title="">Unbid</a></li>
            <li><a href="#" title="">Close</a></li>
            <li><a href="#" title="">Hide</a></li>
          </ul>
        </div>
      </div>
      <div class="epi-sec">
        <ul class="descp">
          <li><img src={icon8} alt="" /><span>Epic Coder</span></li>
          <li><img src={icon9} alt="" /><span>India</span></li>
        </ul>
        <ul class="bk-links">
          <li><a href="#" title=""><i class="la la-bookmark"></i></a></li>
          <li><a href="#" title=""><i class="la la-envelope"></i></a></li>
        </ul>
      </div>
      <div class="job_descp">
        <h3>Senior Wordpress Developer</h3>
        <ul class="job-dt">
          <li><a href="#" title="">Full Time</a></li>
          <li><span>$30 / hr</span></li>
        </ul>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus hendrerit metus, ut ullamcorper quam finibus at. Etiam id magna sit amet... <a href="#" title="">view more</a></p>
        <ul class="skill-tags">
          <li><a href="#" title="">HTML</a></li>
          <li><a href="#" title="">PHP</a></li>
          <li><a href="#" title="">CSS</a></li>
          <li><a href="#" title="">Javascript</a></li>
          <li><a href="#" title="">Wordpress</a></li> 	
        </ul>
      </div>
      <div class="job-status-bar">
        <ul class="like-com">
          <li>
            <a href="#"><i class="fas fa-heart"></i> Like</a>
            <img src={likedImg} alt="" />
            <span>25</span>
          </li> 
          <li><a href="#" class="com"><i class="fas fa-comment-alt"></i> Comment 15</a></li>
        </ul>
        <a href="#"><i class="fas fa-eye"></i>Views 50</a>
      </div>
    </div>
    {/* <div class="top-profiles">
      <div class="pf-hd">
        <h3>Top Profiles</h3>
        <i class="la la-ellipsis-v"></i>
      </div>
      <div class="profiles-slider">
        <div class="user-profy">
          <img src="images/resources/user1.png" alt="" />
          <h3>John Doe</h3>
          <span>Graphic Designer</span>
          <ul>
            <li><a href="#" title="" class="followw">Follow</a></li>
            <li><a href="#" title="" class="envlp"><img src="images/envelop.png" alt="" /></a></li>
            <li><a href="#" title="" class="hire">hire</a></li>
          </ul>
          <a href="#" title="">View Profile</a>
        </div>
        <div class="user-profy">
          <img src="images/resources/user2.png" alt="" />
          <h3>John Doe</h3>
          <span>Graphic Designer</span>
          <ul>
            <li><a href="#" title="" class="followw">Follow</a></li>
            <li><a href="#" title="" class="envlp"><img src="images/envelop.png" alt="" /></a></li>
            <li><a href="#" title="" class="hire">hire</a></li>
          </ul>
          <a href="#" title="">View Profile</a>
        </div>
        <div class="user-profy">
          <img src="images/resources/user3.png" alt="" />
          <h3>John Doe</h3>
          <span>Graphic Designer</span>
          <ul>
            <li><a href="#" title="" class="followw">Follow</a></li>
            <li><a href="#" title="" class="envlp"><img src="images/envelop.png" alt="" /></a></li>
            <li><a href="#" title="" class="hire">hire</a></li>
          </ul>
          <a href="#" title="">View Profile</a>
        </div>
        <div class="user-profy">
          <img src="images/resources/user1.png" alt="" />
          <h3>John Doe</h3>
          <span>Graphic Designer</span>
          <ul>
            <li><a href="#" title="" class="followw">Follow</a></li>
            <li><a href="#" title="" class="envlp"><img src="images/envelop.png" alt="" /></a></li>
            <li><a href="#" title="" class="hire">hire</a></li>
          </ul>
          <a href="#" title="">View Profile</a>
        </div>
        <div class="user-profy">
          <img src="images/resources/user2.png" alt="" />
          <h3>John Doe</h3>
          <span>Graphic Designer</span>
          <ul>
            <li><a href="#" title="" class="followw">Follow</a></li>
            <li><a href="#" title="" class="envlp"><img src="images/envelop.png" alt="" /></a></li>
            <li><a href="#" title="" class="hire">hire</a></li>
          </ul>
          <a href="#" title="">View Profile</a>
        </div>
        <div class="user-profy">
          <img src="images/resources/user3.png" alt="" />
          <h3>John Doe</h3>
          <span>Graphic Designer</span>
          <ul>
            <li><a href="#" title="" class="followw">Follow</a></li>
            <li><a href="#" title="" class="envlp"><img src="images/envelop.png" alt="" /></a></li>
            <li><a href="#" title="" class="hire">hire</a></li>
          </ul>
          <a href="#" title="">View Profile</a>
        </div>
      </div>
    </div> */}
    <div class="post-bar">
      <div class="post_topbar">
        <div class="usy-dt">
          <img src={usPic} alt="" />
          <div class="usy-name">
            <h3>John Doe</h3>
            <span><img src={clock} alt="" />3 min ago</span>
          </div>
        </div>
        <div class="ed-opts">
          <a href="#" title="" class="ed-opts-open"><i class="la la-ellipsis-v"></i></a>
          <ul class="ed-options">
            <li><a href="#" title="">Edit Post</a></li>
            <li><a href="#" title="">Unsaved</a></li>
            <li><a href="#" title="">Unbid</a></li>
            <li><a href="#" title="">Close</a></li>
            <li><a href="#" title="">Hide</a></li>
          </ul>
        </div>
      </div>
      <div class="epi-sec">
        <ul class="descp">
          <li><img src={icon8} alt="" /><span>Epic Coder</span></li>
          <li><img src={icon9} alt="" /><span>India</span></li>
        </ul>
        <ul class="bk-links">
          <li><a href="#" title=""><i class="la la-bookmark"></i></a></li>
          <li><a href="#" title=""><i class="la la-envelope"></i></a></li>
          <li><a href="#" title="" class="bid_now">Bid Now</a></li>
        </ul>
      </div>
      <div class="job_descp">
        <h3>Senior Wordpress Developer</h3>
        <ul class="job-dt">
          <li><a href="#" title="">Full Time</a></li>
          <li><span>$30 / hr</span></li>
        </ul>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus hendrerit metus, ut ullamcorper quam finibus at. Etiam id magna sit amet... <a href="#" title="">view more</a></p>
        <ul class="skill-tags">
          <li><a href="#" title="">HTML</a></li>
          <li><a href="#" title="">PHP</a></li>
          <li><a href="#" title="">CSS</a></li>
          <li><a href="#" title="">Javascript</a></li>
          <li><a href="#" title="">Wordpress</a></li> 	
        </ul>
      </div>
      <div class="job-status-bar">
        <ul class="like-com">
          <li>
            <a href="#"><i class="fas fa-heart"></i> Like</a>
            <img src={likedImg} alt="" />
            <span>25</span>
          </li> 
          <li><a href="#" class="com"><i class="fas fa-comment-alt"></i> Comment 15</a></li>
        </ul>
        <a href="#"><i class="fas fa-eye"></i>Views 50</a>
      </div>
    </div>
    <div class="posty">
      <div class="post-bar no-margin">
        <div class="post_topbar">
          <div class="usy-dt">
            <img src={usPic2} alt="" />
            <div class="usy-name">
              <h3>John Doe</h3>
              <span><img src={clock} alt="" />3 min ago</span>
            </div>
          </div>
          <div class="ed-opts">
            <a href="#" title="" class="ed-opts-open"><i class="la la-ellipsis-v"></i></a>
            <ul class="ed-options">
              <li><a href="#" title="">Edit Post</a></li>
              <li><a href="#" title="">Unsaved</a></li>
              <li><a href="#" title="">Unbid</a></li>
              <li><a href="#" title="">Close</a></li>
              <li><a href="#" title="">Hide</a></li>
            </ul>
          </div>
        </div>
        <div class="epi-sec">
          <ul class="descp">
            <li><img src={icon8} alt="" /><span>Epic Coder</span></li>
            <li><img src={icon9} alt="" /><span>India</span></li>
          </ul>
          <ul class="bk-links">
            <li><a href="#" title=""><i class="la la-bookmark"></i></a></li>
            <li><a href="#" title=""><i class="la la-envelope"></i></a></li>
          </ul>
        </div>
        <div class="job_descp">
          <h3>Senior Wordpress Developer</h3>
          <ul class="job-dt">
            <li><a href="#" title="">Full Time</a></li>
            <li><span>$30 / hr</span></li>
          </ul>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus hendrerit metus, ut ullamcorper quam finibus at. Etiam id magna sit amet... <a href="#" title="">view more</a></p>
          <ul class="skill-tags">
            <li><a href="#" title="">HTML</a></li>
            <li><a href="#" title="">PHP</a></li>
            <li><a href="#" title="">CSS</a></li>
            <li><a href="#" title="">Javascript</a></li>
            <li><a href="#" title="">Wordpress</a></li> 	
          </ul>
        </div>
        <div class="job-status-bar">
          <ul class="like-com">
            <li>
              <a href="#"><i class="fas fa-heart"></i> Like</a>
              <img src={likedImg} alt="" />
              <span>25</span>
            </li> 
            <li><a href="#" class="com"><i class="fas fa-comment-alt"></i> Comment 15</a></li>
          </ul>
          <a href="#"><i class="fas fa-eye"></i>Views 50</a>
        </div>
      </div>
      <div class="comment-section">
        <a href="#" class="plus-ic">
          <i class="la la-plus"></i>
        </a>
        <div class="comment-sec">
          <ul>
            <li>
              <div class="comment-list">
                <div class="bg-img">
                  <img src={bgImg1} alt="" />
                </div>
                <div class="comment">
                  <h3>John Doe</h3>
                  <span><img src="images/clock.png" alt="" /> 3 min ago</span>
                  <p>Lorem ipsum dolor sit amet, </p>
                  <a href="#" title="" class="active"><i class="fa fa-reply-all"></i>Reply</a>
                </div>
              </div>
              <ul>
                <li>
                  <div class="comment-list">
                    <div class="bg-img">
                      <img src={bgImg2} alt="" />
                    </div>
                    <div class="comment">
                      <h3>John Doe</h3>
                      <span><img src={clock} alt="" /> 3 min ago</span>
                      <p>Hi John </p>
                      <a href="#" title=""><i class="fa fa-reply-all"></i>Reply</a>
                    </div>
                  </div>
                </li>
              </ul>
            </li>
            <li>
              <div class="comment-list">
                <div class="bg-img">
                  <img src={bgImg3} alt="" />
                </div>
                <div class="comment">
                  <h3>John Doe</h3>
                  <span><img src={clock} alt="" /> 3 min ago</span>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus hendrerit metus, ut ullamcorper quam finibus at.</p>
                  <a href="#" title=""><i class="fa fa-reply-all"></i>Reply</a>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="post-comment">
          <div class="cm_img">
            <img src={bgImg4} alt="" />
          </div>
          <div class="comment_box">
            <form>
              <input type="text" placeholder="Post a comment" />
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="process-comm">
      <div class="spinner">
        <div class="bounce1"></div>
        <div class="bounce2"></div>
        <div class="bounce3"></div>
      </div>
    </div>
</div>
  )
}

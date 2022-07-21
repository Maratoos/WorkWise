import React from 'react'
import clock from '@/assets/images/clock.png'
import icon8 from '@/assets/images/icon8.png'
import icon9 from '@/assets/images/icon9.png'
import likedImg from '@/assets/images/liked-img.png'
import { getCollection } from '../../hooks/getCollection'

export const Posts = () => {
  const { documents:posts, error } = getCollection('posts')
  return (
  <div className="posts-section">
    {posts.length > 0 && posts.map((post) => (
    <div className="post-bar"  key={post.id}>
      <div className="post_topbar">
        <div className="usy-dt">
          <img src={post.author.photoURL} alt="" width={50} height={50} style={{objectFit: "cover"}}/>
          <div className="usy-name">
            <h3>{post.author.name}</h3>
            <span><img src={clock} alt="" />{post.createdAt.toDate().toDateString()}</span>
          </div>
        </div>
        <div className="ed-opts">
          <a href="#" title="" className="ed-opts-open"><i className="la la-ellipsis-v"></i></a>
          <ul className="ed-options">
            <li><a href="#" title="">Edit Post</a></li>
            <li><a href="#" title="">Unsaved</a></li>
            <li><a href="#" title="">Unbid</a></li>
            <li><a href="#" title="">Close</a></li>
            <li><a href="#" title="">Hide</a></li>
          </ul>
        </div>
      </div>
      <div className="epi-sec">
        <ul className="descp">
          <li><img src={icon8} alt="" /><span>{post.role}</span></li>
          <li><img src={icon9} alt="" /><span>{post.location}</span></li>
        </ul>
        <ul className="bk-links">
          <li><a href="#" title=""><i className="la la-bookmark"></i></a></li>
          <li><a href="#" title=""><i className="la la-envelope"></i></a></li>
        </ul>
      </div>
      <div className="job_descp">
        <h3>{post.title}</h3>
        <ul className="job-dt">
          <li><a href="#" title="">{post.jobType}</a></li>
          <li><span>${post.rate} / hr</span></li>
        </ul>
        <p>{post.description}... <a href="#" title="">view more</a></p>
        <ul className="skill-tags">
          {post.tags.map((tag) => (
            <li key={tag}>
              <a href="#" title="">{tag}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="job-status-bar">
        <ul className="like-com">
          <li>
            <a href="#"><i className="fa fa-heart"></i> Like</a>
            <img src={likedImg} alt="" />
            <span>{post.likes.length}</span>
          </li> 
          <li><a href="#" className="com"><i className="fa fa-comment"></i> Comment {post.comments.length}</a></li>
        </ul>
        <a href="#"><i className="fa fa-eye"></i>Views {post.views}</a>
      </div>
    </div>      
    ))}
</div>
  )
}

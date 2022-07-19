import React from 'react'
import { CreatePost } from '../../components/Posts/CreatePost'
import { Posts } from '../../components/Posts/Posts'

export const Home = () => {
  return (
  <main>
    <div className="container">
      <div className="main-section">
        <div className="main-section-data">
          <div className="row">
            <div className="main-ws-sec">
              <CreatePost />
              <Posts />
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  )
}

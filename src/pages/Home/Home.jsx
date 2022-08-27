import React from 'react'
import { CreateBar } from '../../components/Posts/CreateBar'
import { Posts } from '../../components/Posts/Posts'
import { UserProfileSidebar } from '../../components/UserProfileSidebar/UserProfileSidebar'

export const Home = () => {
  return (
  <main>
    <div className="container">
      <div className="main-section">
        <div className="main-section-data">
          <div className="row">
            <UserProfileSidebar />
            <div className='col-lg-6 col-md-8 no-pd'>
              <div className="main-ws-sec">
                <CreateBar />
                <Posts />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  )
}

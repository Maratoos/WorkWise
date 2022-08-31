import React from 'react'
import { CreateBar } from '../../components/Posts/CreateBar'
import { Posts } from '../../components/Posts/Posts'
import { UserProfileSidebar } from '../../components/UserProfileSidebar/UserProfileSidebar'
import { About } from '../../components/Widgets/About/About'
import { Jobs } from '../../components/Widgets/Jobs/Jobs'
import { Suggestions } from '../../components/Widgets/Suggestions/Suggestions'

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
            <div className="col-lg-3 pd-right-none no-pd">
              <div className="right-sidebar">
                <About />
                <Jobs title="Top Jobs" items={[]} />
                <Jobs title="Most Viewed This Week" items={[]} />
                <Suggestions />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  )
}

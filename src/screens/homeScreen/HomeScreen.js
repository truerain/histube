import React from 'react'
import CategoryBar from '../../components/categorybar/CategoryBar'
import Video from '../../components/video/Video'

import './_homeScreen.scss'

const HomeScreen = () => {
  return (
    <div className="homeScreen">
      <CategoryBar />
      <div className="row">
        {[...new Array(20)].map(() => (
          <div className="item">
            <Video />
          </div>
        ))
        }
      </div>
    </div>
  )
}

export default HomeScreen

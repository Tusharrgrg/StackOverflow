import React from 'react'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import RightSidebar from '../../components/RightSidebar/RightSidebar'
import QuestionsDetails from './QuestionsDetails'

const DispalyQuestions = () => {
  return (
    <div className='home-container-1'>
      <LeftSidebar/>
      <div className="home-container-2">
        <QuestionsDetails/>
        <RightSidebar/>
      </div>
      
    </div>
  )
}

export default DispalyQuestions

import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import './HomeMainbar.css'
import QuestionList from './QuestionList'

const HomeMainbar = () => {

  var questionList = [{
    id: 1,
    votes: 2,
    noOfAnswers: 2,
    questionTitle: 'What is function',
    questionTag: ['java', 'node js', 'react js'],
    userPosted: 'diku',
    askedOn: 'dec 2'
  }, {
    id: 1,
    votes: 2,
    noOfAnswers: 2,
    questionTitle: 'What is function',
    questionTag: ['java', 'node js', 'react js'],
    userPosted: 'diku',
    askedOn: 'dec 2'
  }, {
    id: 1,
    votes: 2,
    noOfAnswers: 2,
    questionTitle: 'What is function',
    questionTag: ['java', 'node js', 'react js'],
    userPosted: 'diku',
    askedOn: 'dec 2'
  }]

  const user = 7;
  const navigate = useNavigate();

  const checkAuth = () =>{
    if(user === null){
      alert("login or signup to ask a question");
      navigate('/Auth');
    }else{
      navigate('/AskQuestion')
    }
  }
  const location = useLocation();

  return (
    <div className='main-bar'>
      <div className='main-bar-header'>
        {
          location.pathname === '/' ? <h1>Top Questions</h1> : <h1>All Questions</h1>
        }
        <button onClick={checkAuth} className='ask-btn'>Ask Question</button>
      </div>
      <div>
        {
          questionList === null ?
            <h1>Loading...</h1> :
            <>
              <p>{questionList.length} questions</p>
              <QuestionList questionList = {questionList}/>
            </>
        }
      </div>
    </div>
  )
}

export default HomeMainbar

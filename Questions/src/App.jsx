

import { useState } from 'react'
import './App.css'


const questions = [{
  "question" : "question 1",
  "answer1" : ["answer A", true],
  "answer2" : ["answer B", false],
  "answer3" : ["answer C", false],
},
{
  "question" : "question 2",
  "answer1" : ["answer A", false],
  "answer2" : ["answer B", false],
  "answer3" : ["answer C", true],
},
{
  "question" : "question 3",
  "answer1" : ["answer A", false],
  "answer2" : ["answer B", true],
  "answer3" : ["answer C", false],
},
]

 

// eslint-disable-next-line react/prop-types
function Card({quizStatus, setQuizStatus, handleMore}) {
  let question = questions[quizStatus];
  return (
      <>
        <h1>The Questions Game</h1>
        <h2>Question Nº{quizStatus + 1}</h2>
        <h3>{question.question}</h3>
        <ul>
          <AnsList
          handleMore= {handleMore}
          ans1={question.answer1}
          ans2={question.answer2}
          ans3={question.answer3}
          >
          </AnsList>
          <button onClick={()=>setQuizStatus(quizStatus + 1)}>NEXT</button>
        </ul>
    </>
  )
}
// eslint-disable-next-line react/prop-types
function AnsList({ ans1, ans2, ans3, handleMore}) {

  return(
    <> 
    <li>{ans1[1] ? (<button className='correct' onClick={handleMore}>{ans1}</button>):(<button className='incorrect'onClick={()=> alert("bad choice")}>{ans1}</button>)}</li>
    <li>{ans2[1] ? (<button className='correct' onClick={handleMore}>{ans2}</button>):(<button className='incorrect'onClick={()=> alert("bad choice")}>{ans2}</button>)}</li>
    <li>{ans3[1] ? (<button className='correct' onClick={handleMore}>{ans3}</button>):(<button className='incorrect'onClick={()=> alert("bad choice")}>{ans3}</button>)}</li>
    </>
    
  )
}
  

function Title(){
  return(
    <>
    <h1>Game Over</h1>
    <p>Thanks for playing</p>
    </>
  )
}
function App() {
  const [quizStatus , setQuizStatus] = useState(0);
  const [point , setPoint] = useState(0)
  function handleMore() {
    setPoint( point + 1)
    
  }
  return (
    <>
    <div>
     {(quizStatus < questions.length ) ?(
     <Card
     quizStatus={quizStatus}
     setQuizStatus={setQuizStatus}
     handleMore={handleMore}
     ></Card>
     ) : (<Title></Title>)}
    </div>
    <h2> Your score {point}</h2>
    </>
    
    
  )
}

export default App

import {Container} from './styled-components/Welcome-styles'
import Start from './components/Start'
import React, {useState, useEffect} from 'react'
import Quizz from './components/Quizz'



function App() {
  const [start, setStart] = useState(true)
  const [quizzData, setQuizzData] = useState({})
  const [answers, setAnswers] = useState([])


  useEffect(function(){
    fetch("https://opentdb.com/api.php?amount=5")
    .then(res=>res.json())
    .then(data=>setQuizzData(data.results))
},[])

  function toggle(answerId, questionId){
    
    setAnswers(prevAnswers => [...prevAnswers, [questionId, answerId]])
    
  }
  console.log(answers)
  return (
    <Container>
        {start && <Start setStart={setStart}/>}
        {!start && <Quizz quizzData={quizzData} toggle={toggle}/>}
    </Container>
  );
}

export default App;

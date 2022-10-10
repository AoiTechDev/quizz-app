import {Container} from './styled-components/Welcome-styles'
import Start from './components/Start'
import React, {useState, useEffect} from 'react'
import Quizz from './components/Quizz'



function App() {
  const [start, setStart] = useState(true)
  const [quizzData, setQuizzData] = useState({})

  useEffect(function(){
    fetch("https://opentdb.com/api.php?amount=5")
    .then(res=>res.json())
    .then(data=>setQuizzData(data.results))
},[])



  console.log(quizzData)
  return (
    <Container>
        {start && <Start setStart={setStart}/>}
        {!start && <Quizz quizzData={quizzData}/>}
    </Container>
  );
}

export default App;

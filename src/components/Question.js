import {Container, Buttons, Hr, AnswerButton} from '../styled-components/Question-styles'
import React, {useState, useEffect} from 'react'


function Question({question, iAnswers, cAnswer, toggle, parentId}) {

    const [sortedArray, setSortedArray] = useState([])


    useEffect(() => {
        iAnswers.push(cAnswer)
        iAnswers.sort((a,b) => 0.5 - Math.random());
        setSortedArray(iAnswers)
    },[])
    

    const iButtons = sortedArray.map((item, index) => 
        <AnswerButton key={index} onClick={() => toggle(index, parentId)}>{item}</AnswerButton>
    )
    return ( 
    <Container>
       {question}
       <Buttons>
        {iButtons}
       </Buttons>
       <Hr/>
    </Container> 
    );
}

export default Question;
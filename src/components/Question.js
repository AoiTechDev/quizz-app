import {Container, Buttons, Hr, AnswerButton} from '../styled-components/Question-styles'
import React, {useState, useEffect} from 'react'


function Question({question, iAnswers, cAnswer}) {

    iAnswers.push(cAnswer)
    const shuffleArray = iAnswers.sort((a,b) => 0.5 - Math.random());
    console.log(cAnswer)
    const iButtons = shuffleArray.map((item, index) => 
        <AnswerButton key={index}>{item}</AnswerButton>
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
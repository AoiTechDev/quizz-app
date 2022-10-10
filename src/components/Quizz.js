import {Container} from '../styled-components/Quizz-styles'
import React,{useState,useEffect} from 'react'
import Question from './Question'

function Quizz(props) {

   
    const res = props.quizzData.map((item, index) =>
        <Question key={index} question={item.question} iAnswers={item.incorrect_answers} cAnswer={item.correct_answer}/>
    )
    
    return ( 
    <Container>
       {res}
       
    </Container> 
    );
}

export default Quizz;
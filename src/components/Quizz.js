import {Container} from '../styled-components/Quizz-styles'
import React,{useState,useEffect} from 'react'


function Quizz(props) {

   
   

    const res = props.quizzData.map((item) =>
        <p> {JSON.stringify(item)}</p>
    )
    
    return ( 
    <Container>
       {res}
        

    </Container> 
    );
}

export default Quizz;
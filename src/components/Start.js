import {StartContainer} from '../styled-components/Welcome-styles'
import {Button} from '../styled-components/Button-styles'


function Start(props) {

    function startQuizz(){
        props.setStart(prevState => !prevState)
    }
    return (
        <StartContainer>
            <h1>
                Quizzical
            </h1>
            <p>
                It's cool quizz! TRUST
            </p>
            <Button onClick={startQuizz}>Start quizz</Button>

        </StartContainer> 
    );
}

export default Start;
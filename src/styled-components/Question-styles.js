import styled from 'styled-components';

export const Container = styled.div`
    margin: 2rem;
    font-size: 1.6rem;
    display:flex;
    flex-direction: column;

`

export const Buttons = styled.div`
    width:100%;
    display: flex;
    flex-direction: row;
    margin-top: 1rem;
`

export const Hr = styled.div`
    width: 90%;
    height: 2px;
    background: #DBDEF0;
    margin-top: 1.5rem;

`

export const AnswerButton = styled.button`
    margin-right: 2rem;
    border: none;
    border: 1px solid #293264;
    background: #ffffff;
    height: 2rem;
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    cursor: pointer;
`
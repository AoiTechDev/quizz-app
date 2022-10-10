import styled from 'styled-components';

export const Button = styled.button`
    width: 10rem;
    height: 3rem;
    background: #4D5B9E;
    color: #F5F7FB;
    border: none;
    border-radius: 15px;
    position: relative;
    -webkit-transition-duration: 0.4s; /* Safari */
    transition-duration: 0.4s;
    text-decoration: none;
    overflow: hidden;
    cursor: pointer;
    &:after{
        content: "";
        background: #85ADBD;
        display: block;
        position: absolute;
        padding-top: 300%;
        padding-left: 350%;
        margin-left: -20px!important;
        margin-top: -120%;
        opacity: 0;
        transition: all 0.8s
    }
    &:active:after{
        padding: 0;
        margin: 0;
        opacity: 1;
        transition: 0s
    }
`
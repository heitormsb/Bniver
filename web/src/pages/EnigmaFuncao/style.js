import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    body {
        background: #E5DDDD;
        overflow-x: hidden; /* Hide horizontal scrollbar */
        overflow-y: hidden; 
    }
    `

export const Planta2 = styled.img` 
    width: 25%;
    /* margin-right: 2vw; */
    -moz-user-select: none;
    -webkit-user-select: none;
    user-select: none; 
    /* justify-self: end; */
    align-self: end;
`; 

export const Planta3 = styled.img` 
    width: 35%;
    margin-left: -1vw;
    transform: scaleX(-1) rotate(-90deg);
    -moz-user-select: none;
    -webkit-user-select: none;
    user-select: none;
    /* justify-self: end; */
    align-self: end;
`; 
export const Planta4 = styled.img` 
    width: 32%;
    margin-right: 1.6vw;
    margin-bottom: -1vw;
    -moz-user-select: none;
    -webkit-user-select: none;
    user-select: none;
    justify-self: end;
    align-self: end;
`; 

export const Center = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

export const GridTop = styled.div` 
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin: auto;
`; 

export const GridBottom = styled.div` 
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
    position: absolute;
    bottom: 0;
    z-index:-1;
`; 

export const MidFunc = styled.div` 
    width: 60vw;
    display: flex;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    justify-content:center;
`; 

export const Braille = styled.img` 
    width: 8%;
    padding: 0.1vw;
    -moz-user-select: none;
    -webkit-user-select: none;
    user-select: none;
`; 

export const Braille2 = styled.img` 
    width: 8%;
    padding: 0.1vw;
    -moz-user-select: none;
    -webkit-user-select: none;
    user-select: none;
`; 

export const BrailleNum1 = styled.img` 
    width: 8%;
    margin-right: -0.4vw;
    -moz-user-select: none;
    -webkit-user-select: none;
    user-select: none;
`; 
export const BrailleNum2 = styled.img` 
    width: 8%;
    margin-left: -0.4vw;
    -moz-user-select: none;
    -webkit-user-select: none;
    user-select: none;
`; 

export const TextFunc = styled.div` 
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Math&display=swap');
    font-style: normal;
    font-weight: 400;
    font-size: 4vw;
    width:4vw;
    margin-top:0.4vw;
    margin-left: -2.5vw;
    -moz-user-select: none;
    -webkit-user-select: none;
    user-select: none;
    /* float: right; */
`; 

export const TextFuncPar = styled.div` 
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Math&display=swap');
    font-style: normal;
    font-weight: 400;
    font-size: 5.5vw;
    /* width:4vw; */
    margin-top: -0.95vw;
    -moz-user-select: none;
    -webkit-user-select: none;
    user-select: none;
    /* float: right; */
`; 

export const Morse = styled.div` 
    @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@100&display=swap');
    font-style: normal;
    font-weight: 300;
    font-size: 3vw;
    /* width:4vw; */
    margin-top: -3.8vw;
    margin-left: -2vw;
    letter-spacing: 0.2vw;
    -moz-user-select: none;
    -webkit-user-select: none;
    user-select: none;
    /* float: right; */
`; 

export const Form = styled.form`
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50vw;
`;

export const Input = styled.input`
    /* width: 50vw; */
    display: block;
    margin-left: auto;
    margin-right: auto;
    padding: 0.8vw 3vw;
    padding-left: 0.8vw;
    margin-top: 5vw;
    border: none;
    outline: none;
    text-decoration: none;
    border-radius: 5px;
    border: 1px solid;
    background-color: #F4EBEB;
    @import url('https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&family=Zen+Kaku+Gothic+Antique&display=swap');
    font-style: normal;
    font-weight: 400;
    font-size: 1vw;
`;

export const Button = styled.button`
    width: 6vw;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 1vw;
    padding: 0.8vw;
    border: 1px solid;
    border-radius: 5px;
    background-color: #F4EBEB;
    cursor: pointer;
    text-align: center;
    @import url('https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&family=Zen+Kaku+Gothic+Antique&display=swap');
    font-style: normal;
    font-weight: 400;
    font-size: 1vw;
`;
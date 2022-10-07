import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    body {
        background: #E5DDDD;
        overflow-x: hidden; /* Hide horizontal scrollbar */
        overflow-y: hidden; 
    }
    `

export const Planta1 = styled.img` 
    width: 45%;
    margin-left: 1vw;
    -moz-user-select: none;
    -webkit-user-select: none;
    user-select: none;
`; 

export const Planta2 = styled.img` 
    width: 25%;
    /* margin-top: -32vw; */
    -moz-user-select: none;
    -webkit-user-select: none;
    user-select: none; 
    justify-self: bottom;
    align-self: end;
`; 

export const Planta3 = styled.img` 
    width: 35%;
    transform: rotate(-90deg);
    margin-right: -1vw;
    -moz-user-select: none;
    -webkit-user-select: none;
    user-select: none;
    justify-self: end;
    align-self: end;
`; 
export const Planta3V2 = styled.img` 
    width: 40%;
    margin-bottom: -0.8vw;
    -moz-user-select: none;
    -webkit-user-select: none;
    user-select: none;
    justify-self: end;
    align-self: end;
`; 

export const GridTop = styled.div` 
    display: grid;
    /* grid-template-rows: 75px auto; */
    grid-template-columns: repeat(2, 1fr);
    margin: auto;
`; 

export const Center = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width:100vw;
`;

export const MapaC = styled.img` 
    width: 35%;
    display: flex;
    margin-left: auto;
    margin-right: auto;
    /* margin-top: -14vw; */
    justify-content:center;
    -moz-user-select: none;
    -webkit-user-select: none;
    transform: rotate(12deg);
    user-select: none;
`; 

export const TextEvang = styled.div` 
    width: 50vw;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 2vw;
    margin-top: 2vw;

    @import url('https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&family=Zen+Kaku+Gothic+Antique&display=swap');
    font-style: normal;
    font-weight: 400;
    font-size: 1.8vw;

    text-align: center;
`; 

export const GridBottom = styled.div` 
    position: absolute;
    bottom: 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
    z-index:-1;
    /* grid-template-rows: 75px auto; */
    
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
    /* margin-top: 5vw; */
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
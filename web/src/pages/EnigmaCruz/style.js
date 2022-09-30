import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    body {
        background: #E5DDDD;
        overflow-x: hidden; /* Hide horizontal scrollbar */
        overflow-y: hidden; 
    }
    `

export const Planta5 = styled.img` 
    width: 28%;
    margin-right: 2vw;
    -moz-user-select: none;
    -webkit-user-select: none;
    user-select: none; 
    justify-self: end;
    align-self: end;
`; 

export const Planta3 = styled.img` 
    width: 20%;
    margin-top: -0.8vw;
    /* transform: rotate(-180deg); */
    transform: scaleY(-1);
    -moz-user-select: none;
    -webkit-user-select: none;
    user-select: none;
    justify-self: end;
    align-self: end;
`; 
export const Planta4 = styled.img` 
    width: 32%;
    margin-left: 1.8vw;
    transform: scaleX(-1);
    /* margin-bottom: -1vw; */
    -moz-user-select: none;
    -webkit-user-select: none;
    user-select: none;
`; 

export const TextSiga = styled.div` 
    width: 50vw;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 2vw;
    margin-top: -5vw;

    @import url('https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&family=Zen+Kaku+Gothic+Antique&display=swap');
    font-style: normal;
    font-weight: 400;
    font-size: 1.2vw;

    text-align: center;
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

export const MidSetas = styled.div` 
    width: 50vw;
    display: block;
    margin-left: auto;
    margin-right: auto;

    text-align: center;
`; 

export const SetaEsq = styled.img` 
    width: 8%;
    padding: 0.1vw;
    -moz-user-select: none;
    -webkit-user-select: none;
    user-select: none;
`; 
export const SetaDir = styled.img` 
    width: 8%;
    transform: rotate(-180deg);
    padding: 0.1vw;
    -moz-user-select: none;
    -webkit-user-select: none;
    user-select: none;
`;  
export const SetaCima = styled.img` 
    width: 8%;
    transform: rotate(90deg);
    padding: 0.1vw;
    -moz-user-select: none;
    -webkit-user-select: none;
    user-select: none;
`;
export const SetaBaixo = styled.img` 
    width: 8%;
    transform: rotate(-90deg);
    padding: 0.1vw;
    -moz-user-select: none;
    -webkit-user-select: none;
    user-select: none;
`;

export const GridTop = styled.div` 
    display: grid;
    grid-template-columns: repeat(1, 1fr);
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

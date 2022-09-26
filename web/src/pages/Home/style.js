import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    body {
        background: #E5DDDD;
    }
    `
export const TextDegrade = styled.div` 
    width: 50vw;
    font-family: 'Inter', sans-serif;
    margin-left: 6.2vw;

    /* identical to box height */
    font-style: normal;

    background: linear-gradient(244.91deg, #CF3838 -5.61%, #9A2CC1 109.68%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    background-blend-mode: multiply;

    mix-blend-mode: normal; 

`; 

export const TextFino = styled.div`
    margin-top: 20px;
    letter-spacing: 0.3em;
    font-weight: 500;
    font-size: 2vw;
    line-height: 5vw;

`; 

export const TextNegrito = styled.div` 
    font-weight: 900;
    font-size: 5vw;
    line-height: 5vw;

`; 

export const divRelative = styled.div` 
    position: relative;
    top: 0;
    left: 0;
`; 

export const CoracaoHeader = styled.div` 
    position: relative;
    /* top: 140px; */
    top: 10vw;
    left: 0;
    width: 100%;
`; 

export const Image = styled.img` 
    position: absolute;
    margin-left: 60%;
    width: 30%;
    /* top: 70px; */
    top: 6vw;
    /* bottom: 1vw; */
    /* left: 30px;  */
    /* margin-left: 15%; */
    /* margin-top: 20%; */
`; 

export const TextDegradeData = styled.div` 
    width: 300px;
    margin: auto;
    font-family: 'Inter', sans-serif;
    font-weight: 300;
    font-size: 6.5vw;
    /* line-height: 121px; */
    /* identical to box height */
    font-style: normal;
    text-align: center;
    margin-top: 25vw;
    margin-bottom: 10vw;

    background: linear-gradient(244.91deg, #CF3838 -5.61%, #9A2CC1 109.68%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    background-blend-mode: multiply;

    mix-blend-mode: normal; 

`; 

export const TextComemora = styled.div` 
    width: 35vw;
    margin: left;
    font-family: 'Inter', sans-serif;
    font-weight: 700;
    /* font-size: 60px; */
    font-size: 4vw;
    /* line-height: 121px; */
    /* identical to box height */
    font-style: normal;
    /* text-align: center; */
    /* margin-top: 25vw; */

    background: linear-gradient(244.91deg, #CF3838 -5.61%, #9A2CC1 109.68%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    background-blend-mode: multiply;

    mix-blend-mode: normal; 
`; 

export const TextComemoraData = styled.div` 
    width: 35vw;
    margin: left;
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 400;
    /* font-size: 30px; */
    font-size: 2vw;
    line-height: 5vw;

    color: #4E4650;
`; 

export const GridAno = styled.div` 
    display: grid;
    grid-template-rows: 75px auto;
    grid-template-columns: 50% auto;
`; 

export const IntoGridAno = styled.div` 
    grid-column: 1;
`; 
export const IntoGridAno2 = styled.div` 
    grid-column: 2;
`; 

export const ImagePolaro = styled.img` 
    /* position: absolute; */
    /* margin-left: 60%; */
    width: 135%;
    /* top: 70px; */
    /* top: 6vw; */
    /* bottom: 1vw; */
    /* left: 30px;  */
    /* margin-left: 15%; */
    margin-top: -32vw;
`; 

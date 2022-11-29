import React, { useState } from 'react';
import * as S from "./style";
import { setIcon, TabTitle } from "../../utils/GeneralFuntions";

import { useNavigate } from "react-router-dom";

import planta2 from "../../img/plantas/planta2.png"
import planta3 from "../../img/plantas/planta3.png"
import planta4 from "../../img/plantas/planta4.png"

import BrailleA1 from "../../img/braille/Braille_A1.png"
import BrailleX from "../../img/braille/Braille_X.png"
import BrailleY from "../../img/braille/Braille_Y.png"
import BrailleNumSig from "../../img/braille/Braille_NumberSign.png"

import icon from "../../img/icons/interroga.ico"

function EnigmaFuncao() {
    TabTitle("Forma");
    setIcon(icon)

    let navigate = useNavigate();
    const [anwser, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        let text = anwser.toLowerCase();
        text = text.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        console.log(`Form submitted, ${anwser}`);  
        if(text=="coracao"){
            navigate("/coord"); 
        }
    }

    return (
        <section>
            <S.GlobalStyle />
            <S.GridTop>
                    <S.Planta3 src={planta3} alt="planta3" />
            </S.GridTop>

            <S.Center>

                <S.MidFunc>
                    <S.TextFuncPar>(</S.TextFuncPar>
                    <S.Braille src={BrailleX} alt="brailex"/>
                    <S.Morse>..___</S.Morse>
                    <S.TextFunc>+</S.TextFunc>
                    <S.Braille src={BrailleY} alt="brailex"/>
                    <S.Morse>..___</S.Morse>
                    <S.TextFunc>-</S.TextFunc>
                    <S.BrailleNum1 src={BrailleNumSig} alt="brailex"/>
                    <S.BrailleNum2 src={BrailleA1} alt="brailex"/>
                    <S.TextFuncPar>)</S.TextFuncPar>
                    <S.Morse>...__</S.Morse>
                    <S.TextFunc>=</S.TextFunc>
                    <S.Braille2 src={BrailleX} alt="brailex"/>
                    <S.Morse>..___</S.Morse>
                    <S.Braille2 src={BrailleY} alt="brailex"/>
                    <S.Morse>...__</S.Morse>
                </S.MidFunc>

                <S.Form onSubmit = {handleSubmit}>
                    <S.Input type="text" placeholder='Resposta' onChange = {(e) => setName(e.target.value)} value = {anwser} />
                    <S.Button type="submit">Submit</S.Button>
                </S.Form>

            </S.Center>

            <S.GridBottom>
                    <S.Planta2 src={planta2} alt="planta5" />   
                    <S.Planta4 src={planta4} alt="planta4" />
            </S.GridBottom>
            


        </section>
    );
}

export default EnigmaFuncao;
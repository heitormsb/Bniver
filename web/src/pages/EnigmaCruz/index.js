import React, { useState } from 'react';
import * as S from "./style";
import { setIcon, TabTitle } from "../../utils/GeneralFuntions";

import { useNavigate } from "react-router-dom";

import planta3 from "../../img/plantas/planta3.png"
import planta4 from "../../img/plantas/planta4.png"
import planta5 from "../../img/plantas/planta5.png"
import Seta from "../../img/seta.png"

import icon from "../../img/icons/interroga.ico"

function EnigmaCruz() {
    TabTitle("Forma");
    setIcon(icon)

    let navigate = useNavigate();
    const [anwser, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        let text = anwser.toLowerCase();
        text = text.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        console.log(`Form submitted, ${anwser}`);  
        if(text=="cruz"){
            navigate("/home"); 
        }
    }

    return (
        <section>
            <S.GlobalStyle />
            <S.GridTop>
                    <S.Planta3 src={planta3} alt="planta3" />
            </S.GridTop>

            <S.Center>

                <S.TextSiga>
                    Siga as instruções:
                </S.TextSiga>

                <S.MidSetas>
                    <S.SetaCima src={Seta} alt="seta" />
                    <S.SetaCima src={Seta} alt="seta" />
                    <S.SetaCima src={Seta} alt="seta" />

                    <S.SetaEsq src={Seta} alt="seta" />
                    <S.SetaEsq src={Seta} alt="seta" />

                    <S.SetaCima src={Seta} alt="seta" />

                    <S.SetaDir src={Seta} alt="seta" />
                    <S.SetaDir src={Seta} alt="seta" />

                    <S.SetaCima src={Seta} alt="seta" />
                    <S.SetaCima src={Seta} alt="seta" />

                    <S.SetaDir src={Seta} alt="seta" />
                    
                    <S.SetaBaixo src={Seta} alt="seta" />
                    <S.SetaBaixo src={Seta} alt="seta" />

                    <S.SetaDir src={Seta} alt="seta" />
                    <S.SetaDir src={Seta} alt="seta" />

                    <S.SetaBaixo src={Seta} alt="seta" />

                    <S.SetaEsq src={Seta} alt="seta" />
                    <S.SetaEsq src={Seta} alt="seta" />

                    <S.SetaBaixo src={Seta} alt="seta" />
                    <S.SetaBaixo src={Seta} alt="seta" />
                    <S.SetaBaixo src={Seta} alt="seta" />

                    <S.SetaEsq src={Seta} alt="seta" />
                </S.MidSetas>
                
                <S.TextEvang>
                    {/* Evangelho de João */}
                </S.TextEvang>
        
                <S.Form onSubmit = {handleSubmit}>
                    <S.Input type="text" placeholder='Resposta' onChange = {(e) => setName(e.target.value)} value = {anwser} />
                    <S.Button type="submit">Submit</S.Button>
                </S.Form>
            </S.Center>

            <S.GridBottom>
                    <S.Planta4 src={planta4} alt="planta4" />
                    <S.Planta5 src={planta5} alt="planta5" />   
            </S.GridBottom>


        </section>
    );
}

export default EnigmaCruz;
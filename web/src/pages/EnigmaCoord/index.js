import React, { useState } from 'react';
import * as S from "./style";
import { setIcon, TabTitle } from "../../utils/GeneralFuntions";

import { useNavigate } from "react-router-dom";

import planta1 from "../../img/plantas/planta1.png"
import planta2 from "../../img/plantas/planta2.png"
import planta3 from "../../img/plantas/planta3.png"
import mapaC from "../../img/mapaC.png"

import icon from "../../img/icons/interroga.ico"

function EnigmaCoord() {
    TabTitle("Cordenadas");
    setIcon(icon)

    let navigate = useNavigate();
    const [anwser, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        var text = anwser.toLowerCase();
        text = text.split(",")
        var cord1, cord2
        cord1 = parseFloat(text[0]);
        cord2 = parseFloat(text[1]);
        console.log(`Form submitted, ${anwser}`);  
        console.log(`Form submitted, ${text[0]}`); 
        console.log(`c1, ${cord1}`); 
        console.log(`c2, ${cord2}`); 
        if(cord1<=-15.82767337790177 && cord1>=-15.830501608491003){
            // console.log("Passou1")
                if(cord2>=-47.907211904558345 && cord2<=-47.90301694403722){
                    // console.log("Passou2")
                    navigate("/tau"); 
                }
        }
    }

    return (
        <section>
            <S.GlobalStyle />
            <S.GridTop>
                    <S.Planta1 src={planta1} alt="planta1" />
                    <S.Planta3 src={planta3} alt="planta3" />
            </S.GridTop>

            <S.Center>
                <S.MapaC src={mapaC} alt="mapaC" />

                <S.TextEvang>
                    O primeiro dia
                </S.TextEvang>

                <S.Form onSubmit = {handleSubmit}>
                    <S.Input type="text" placeholder='Resposta' onChange = {(e) => setName(e.target.value)} value = {anwser} />
                    <S.Button type="submit">Submit</S.Button>
                </S.Form>
            </S.Center>

            <S.GridBottom>
                    <S.Planta2 src={planta2} alt="planta2" />

                    <S.Planta3V2 src={planta3} alt="planta3" />
            </S.GridBottom>


        </section>
    );
}

export default EnigmaCoord;
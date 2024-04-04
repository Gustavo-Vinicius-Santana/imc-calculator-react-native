import react, { useState } from "react";
import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";

import Result from "../Result";
import styles from "./style";


export default function Form() {

    const [heigth, setHight] = useState(null)
    const [weigth, setWeigth] = useState(null)
    const [mensagem, setMensagem] = useState("preencha o peso e a altura.")
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState("calcular")

    function calculoImc(){
        return setImc((weigth/(heigth*heigth)).toFixed(2))
    }

    function validation(){
        if(weigth != null && heigth != null){
            calculoImc()
            setHight(null)
            setWeigth(null)
            setMensagem("seu imc é igual a:")
            setTextButton("calcular novamente.")
        }else{
            setImc(null)
            setTextButton("calcular")
            setMensagem("preencha o peso e altura")
        }
    }

    return(
        <View style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>ALTURA</Text>
                <TextInput style={styles.input} onChangeText={setHight} value={heigth} placeholder="EX.: 1.75" keyboardType="numeric"></TextInput>

                <Text style={styles.formLabel}>PESO</Text>
                <TextInput style={styles.input} onChangeText={setWeigth} value={weigth} placeholder="EX.: 50.75" keyboardType="numeric"></TextInput>

                <TouchableOpacity style={styles.btn} onPress={() => validation()} >
                    <Text style={styles.textBtn}>{textButton}</Text>
                </TouchableOpacity>

            </View>

            <Result MensageImc={mensagem} ResultImc={imc}/>
        </View>
    )
}
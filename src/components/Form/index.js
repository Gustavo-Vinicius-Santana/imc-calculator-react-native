import react, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Vibration, Pressable, Keyboard } from "react-native";

import Result from "../Result";
import styles from "./style";


export default function Form() {

    const [heigth, setHight] = useState(null)
    const [weigth, setWeigth] = useState(null)
    const [mensagem, setMensagem] = useState("preencha o peso e a altura.")
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState("calcular")
    const [errorMensage, setErrorMensage] = useState(null)

    function calculoImc(){
        let heightFormat = heigth.replace(",",".")
        let weigthFormat = weigth.replace(",",".")
        return setImc((weigthFormat/(heightFormat*heightFormat)).toFixed(2))
    }

    function verificationImc(){
        if(imc == null){
            Vibration.vibrate()
            setErrorMensage("campo obrigatorio*")
        }
    }

    function validation(){
        if(weigth != null && heigth != null){
            calculoImc()
            setHight(null)
            setWeigth(null)
            setMensagem("seu imc é igual a:")
            setTextButton("calcular novamente.")
            setErrorMensage(null)
        }else{
            verificationImc()
            setImc(null)
            setTextButton("calcular")
            setMensagem("preencha o peso e altura")
        }
    }

    return(
        <Pressable onPress={Keyboard.dismiss} style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>ALTURA</Text>
                <Text style={styles.errorMensage}>{errorMensage}</Text>
                <TextInput style={styles.input} onChangeText={setHight} value={heigth} placeholder="EX.: 1.75" keyboardType="numeric"></TextInput>

                <Text style={styles.formLabel}>PESO</Text>
                <Text style={styles.errorMensage}>{errorMensage}</Text>
                <TextInput style={styles.input} onChangeText={setWeigth} value={weigth} placeholder="EX.: 50.75" keyboardType="numeric"></TextInput>

                <TouchableOpacity style={styles.btn} onPress={() => validation()} >
                    <Text style={styles.textBtn}>{textButton}</Text>
                </TouchableOpacity>

            </View>

            <Result MensageImc={mensagem} ResultImc={imc}/>
        </Pressable>
    )
}
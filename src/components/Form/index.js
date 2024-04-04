import react, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Vibration, Pressable, Keyboard, Share } from "react-native";

import Result from "../Result";
import ListaImc from "../ListaImc";
import styles from "./style";


export default function Form() {

    const [name, setName] = useState(null)
    const [heigth, setHight] = useState(null)
    const [weigth, setWeigth] = useState(null)
    const [mensagem, setMensagem] = useState("preencha o peso e a altura.")
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState("calcular")
    const [errorMensage, setErrorMensage] = useState(null)
    const [imcList, setImcList] = useState([])

    function verificationImc(){
        if(imc == null){
            Vibration.vibrate()
            setErrorMensage("campo obrigatorio*")
        }
    }

    function calculoImc(){
        let heightFormat = heigth.replace(",",".")
        let weigthFormat = weigth.replace(",",".")
        let totalImc = (weigthFormat/(heightFormat*heightFormat)).toFixed(2)
        setImcList ((arr) => [...arr, {id: new Date().getTime(), imc:totalImc, nome: name}])
        setImc(totalImc)
    }

    function validation(){
        if(weigth != null && heigth != null && name != null){
            calculoImc()
            setHight(null)
            setWeigth(null)
            setMensagem(`o imc de ${name} é igual a:`)
            setTextButton("retornar")
            setErrorMensage(null)
            setName(null)
        }else{
            verificationImc()
            setImc(null)
            setTextButton("calcular")
            setMensagem("preencha o peso e altura")
        }
    }

    const onShareList = async () => {
        const messages = imcList.map(item => `O IMC de ${item.nome} = ${item.imc}`);

        const result = await Share.share({
            message: `LISTA DE IMC:\n${messages.join('\n')}`
        })
    }

    return(
        <View style={styles.formContext}>
            {imc == null ?
                <Pressable onPress={Keyboard.dismiss} style={styles.form}>
                    <View>
                        <Text style={styles.formLabel}>NOME</Text>
                        <Text style={styles.errorMensage}>{errorMensage}</Text>
                        <TextInput style={styles.input} onChangeText={setName} value={name} placeholder="EX.: Maria"></TextInput>
                    </View>

                    <View>
                        <Text style={styles.formLabel}>ALTURA</Text>
                        <Text style={styles.errorMensage}>{errorMensage}</Text>
                        <TextInput style={styles.input} onChangeText={setHight} value={heigth} placeholder="EX.: 1.75" keyboardType="numeric"></TextInput>
                    </View>

                    <View>
                        <Text style={styles.formLabel}>PESO</Text>
                        <Text style={styles.errorMensage}>{errorMensage}</Text>
                        <TextInput style={styles.input} onChangeText={setWeigth} value={weigth} placeholder="EX.: 50.75" keyboardType="numeric"></TextInput>
                    </View>

                    <TouchableOpacity style={styles.btn} onPress={() => validation()} >
                        <Text style={styles.textBtn}>{textButton}</Text>
                    </TouchableOpacity>
                </Pressable>
            :
                <View style={styles.boxResult}>
                    <Result MensageImc={mensagem} ResultImc={imc}/>
                    <TouchableOpacity style={styles.btnRetorno} onPress={() => validation()} >
                        <Text style={styles.textBtn}>{textButton}</Text>
                    </TouchableOpacity>
                </View>
            }
            {imcList.length != 0 ? <ListaImc lista={imcList}/> : <View></View>}
            {imc == null ? <View></View>
            :
            <View style={styles.boxShareButton}>
                <TouchableOpacity style={styles.shareBtn} onPress={onShareList}>
                    <Text style={styles.textShare}>Share List</Text>
                </TouchableOpacity>
            </View>
            }
        </View>
    )
}
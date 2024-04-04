import react from "react";
import { View, Text, Share, TouchableOpacity } from "react-native";

import styles from "./style";

export default function Result(props) {

    const onShare = async () => {
        const result = await Share.share({
            message: "Meu imc hoje é: " +props.ResultImc,
        })
    }

    return(
        <View style={styles.resultImc}>
            <View style={styles.boxShareButton}>
                {
                    props.ResultImc != null ?
                    <TouchableOpacity style={styles.shareBtn} onPress={onShare}>
                        <Text style={styles.textShare}>Share</Text>
                    </TouchableOpacity>
                    : <View/>
                }
            </View>


            <Text style={styles.information}>{props.MensageImc}</Text>
            <Text style={styles.numberImc}>{props.ResultImc}</Text>
        </View>
    )
}
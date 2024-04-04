import react from "react";
import { View, Text, Share, TouchableOpacity } from "react-native";

import styles from "./style";

export default function Result(props) {

    const onShare = async () => {
        const result = await Share.share({
            message: `${props.MensageImc} ${props.ResultImc}`,
        })
    }

    return(
        <View style={styles.resultImc}>
            <Text style={styles.information}>{props.MensageImc}</Text>
            <Text style={styles.numberImc}>{props.ResultImc}</Text>

            <View style={styles.boxShareButton}>
                <TouchableOpacity style={styles.shareBtn} onPress={onShare}>
                    <Text style={styles.textShare}>Share</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
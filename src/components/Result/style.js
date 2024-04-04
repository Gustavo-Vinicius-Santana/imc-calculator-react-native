import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    resultImc:{
        flex:1,
        marginTop: 1,
        paddingTop:4,
        borderRadius: 50,
        alignItems:"center",
        width: "100%",

    },
    numberImc: {
        fontSize: 48,
        color: "#ff0033",
        fontWeight: "bold"
    },
    information:{
        fontSize: 18,
        color: "#ff0033",
        fontWeight: "bold"
    },boxShareButton:{
        width:"100%",
        alignItems: "center",
        marginBottom: 10,
    },shareBtn:{
        backgroundColor:"#1817f2",
        borderRadius:50,
        paddingBottom: 14,
        paddingTop:14,
        width: "45%"

    },textShare:{
        color: "#ffffff",
        fontWeight:"bold",
        paddingHorizontal: 30,
        textAlign: "center",
    }
})

export default styles
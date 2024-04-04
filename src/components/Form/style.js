import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    formContext:{
        width:"100%",
        height:"100%",
        backgroundColor: "#ffffff",
        alignItems: "center",
        borderTopRightRadius:30,
        borderTopLeftRadius:30,
        paddingTop: 5,
        marginTop: 5,
    },
    form: {
        width: "100%",
        marginTop: 10,
        padding: 1,

    },
    formLabel: {
        color:"#000000",
        fontSize: 18,
        paddingLeft: 20,
    },
    input: {
        width:"90%",
        borderRadius:50,
        backgroundColor: "#f6f6f6",
        height:40,
        margin:12,
        paddingLeft:10,
    },
    btn:{
        borderRadius:50,
        alignItems:"center",
        justifyContent:"center",
        width:"90%",
        backgroundColor:"#FF0043",
        paddingTop:14,
        paddingBottom:14,
        marginLeft:14,
        margin:30,
    },
    textBtn:{
        fontSize: 20,
        color:"#ffffff",

    },errorMensage:{
        fontSize:12,
        color: "red",
        fontWeight:"bold",
        paddingLeft:20,
    },boxResult:{
        width:"100%",
        alignItems:"center",
    },btnRetorno:{
        borderRadius:50,
        alignItems:"center",
        justifyContent:"center",
        width:"90%",
        backgroundColor:"#FF0043",
        paddingTop:14,
        paddingBottom:14,
    },boxShareButton:{
        width:"100%",
        alignItems: "center",
        marginBottom: 10,
    },shareBtn:{
        backgroundColor:"#1817f2",
        borderRadius:50,
        paddingBottom: 14,
        paddingTop:14,
        width: "45%",
        marginTop:10,

    },textShare:{
        color: "#ffffff",
        fontWeight:"bold",
        paddingHorizontal: 30,
        textAlign: "center",
    }
})

export default styles
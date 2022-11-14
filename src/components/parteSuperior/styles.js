import { StyleSheet } from "react-native"

const styles = StyleSheet.create({

    viewSuperior: {
        width: "100%",
        height: "50%",
        backgroundColor: "#00FFFF",
        
        justifyContent: "space-between"

    },


    viewQuadrado: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#F1F1F1",
        width: '100%',
        height: '81%',
        marginTop: 10
    },

    quadrado: {
        width: 90,
        height: 90,
        backgroundColor: "#DAA520"

    },

    retangulo: {
        width: 150,
        height: 30,
        backgroundColor: "#DAA520",
        marginTop: 10
    },


    viewBlocos: {
        flexDirection: "row",
        backgroundColor: "#FFF",
        alignItems: "flex-end",
        justifyContent: "center",
        height: 60,
        marginBottom: 10
    },

    blocoRoxo: {
        backgroundColor: "#FF00FF",
        width: "50%",
        height: "100%"
    },

    blocoAzul:{
        backgroundColor:"#4682B4",
        width: "50%",
        height: "100%"
    }




})

 export default styles
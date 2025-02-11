import { StyleSheet } from "react-native"
import { PRIMARY_COLOR, SECUNDARY_COLOR } from '../commons/constants';

export const styles = StyleSheet.create({
    title:{
        color:PRIMARY_COLOR,
        fontSize:29,
        paddingHorizontal:30,
        paddingVertical:30,
        fontWeight:'bold'
    },
    iconPassword:{
        position:'absolute',
        right:20
    },
    contentBody:{
        backgroundColor:PRIMARY_COLOR,
        borderRadius:30,
        paddingHorizontal:30,
        paddingTop:30
    },
    titleBody:{
        fontSize:20,
        paddingBottom:10,
        color:SECUNDARY_COLOR
    },
    fontBody:{
        paddingBottom:50,
        color:SECUNDARY_COLOR
    },
    button:{
        backgroundColor:SECUNDARY_COLOR,
        paddingVertical:15,
        borderRadius:15,
    },
    buttonText:{
        color:PRIMARY_COLOR,
        fontSize:15,
        fontWeight:'bold',
        textAlign:'center'
    }
})
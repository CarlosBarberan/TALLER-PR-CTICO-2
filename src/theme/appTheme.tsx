import { StyleSheet } from "react-native"
import { PRIMARY_COLOR, SECUNDARY_COLOR } from '../commons/constants';

export const styles = StyleSheet.create({
    title: {
        color: PRIMARY_COLOR,
        fontSize: 29,
        paddingHorizontal: 30,
        paddingVertical: 30,
        fontWeight: 'bold'
    },
    iconPassword: {
        position: 'absolute',
        right: 20
    },
    contentBody: {
        backgroundColor: PRIMARY_COLOR,
        borderRadius: 30,
        paddingHorizontal: 30,
        paddingTop: 30
    },
    titleBody: {
        fontSize: 20,
        paddingBottom: 10,
        color: SECUNDARY_COLOR
    },
    fontBody: {
        paddingBottom: 50,
        color: SECUNDARY_COLOR
    },
    button: {
        backgroundColor: SECUNDARY_COLOR,
        paddingVertical: 15,
        borderRadius: 15,
    },
    buttonText: {
        color: PRIMARY_COLOR,
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    image: {
        width: 80,
        height: 80,
        resizeMode: 'contain',
    },
    texturl: {
        paddingTop: 30,
        color: SECUNDARY_COLOR,
        textAlign: 'center'
    },
    itemContainer: {
        backgroundColor: '#fff',
        marginVertical: 10,
        padding: 10,
        alignItems: 'center',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    itemName: {
        fontWeight: 'bold',
    },
    modalContent: {
        width: 300,
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10
    },
    modal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    modalBody: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonQuantity: {
        width: 40,
        height: 30,
        backgroundColor: SECUNDARY_COLOR,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5
    },
    textButtonQuantity: {
        fontSize:15,
    },
    textQuantity:{
        fontSize:20
    },
    rightContainer: {
        flexDirection: 'column', 
        alignItems: 'center',
        marginLeft: 20,
    },
    quantityRow: {
        flexDirection: 'row', 
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom:10
    },
    outOfStockText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'red',
        marginTop: 10,
    },
    headerHome:{
        flexDirection:'row',
        alignItems:'center',
        paddingTop:20
    },
    iconCart:{
        flex:1,
        alignItems:'flex-end',
        marginRight:30
    },
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalContainer: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        width: '85%',
        marginBottom:90,
        marginTop:100
    },
    modalTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    cartItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        borderBottomWidth: 1,
        paddingBottom: 10,
        borderBottomColor: '#ddd',
    },
    productImage: {
        width: 60,
        height: 60,
        borderRadius: 5,
        marginRight: 10,
    },
    productInfo: {
        flex: 1,
    },
    productName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    productDetail: {
        fontSize: 14,
        color: '#555',
    },
    totalPrice: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'green',
    },
    emptyCartText: {
        textAlign: 'center',
        fontSize: 16,
        marginBottom: 10,
    },
    modalTitleCard:{
        fontSize:15,
        textAlign:'center'
    },
    cartTotalContainer: {
        marginTop: 20,
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderTopWidth: 1,
        borderTopColor: '#ddd',
        alignItems: 'flex-end',
    },
    cartTotalText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'green',
        textAlign:'center'
    },
})
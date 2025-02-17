import React, { useState } from 'react'
import { Dimensions, FlatList, Text, View, Image } from 'react-native'
import { styles } from '../../theme/appTheme';
import { BodyComponent } from '../../components/BodyComponent';
import { CardProduct } from './CardProduct';
// @ts-ignore
import Icon from 'react-native-vector-icons/MaterialIcons'
import { ModalCar } from './ModalCar';

export interface Product {
    id: string;
    name: string;
    price: number;
    stock: number;
    image: string;
}

export interface Car {
    id: string;
    name: string;
    price: number;
    total: number;
    image: string;
}

const products: Product[] = [
    { id: '1', name: 'Samsung S25', price: 1200, stock: 21, image: 'https://mobilestore.ec/wp-content/uploads/2025/01/Samsung-Galaxy-S25-Icy-Blue-Mobile-Store-Ecuador.jpg' },
    { id: '2', name: 'Iphone 16', price: 1400, stock: 12, image: 'https://tienda.movistar.com.ec/media/catalog/product/cache/d730591e49ae7d4a1adb9133c8cae915/i/p/iphone-16-negro-doble-movistar.png' },
    { id: '3', name: 'RTX 4090', price: 1400, stock: 4, image: 'https://cdn.wccftech.com/wp-content/uploads/2025/01/RTX-5090-Front-Custom-1456x1092.png' },
    { id: '4', name: 'Ryzen 7 7600x', price: 320, stock: 19, image: 'https://www.fpcstore.com/www/tienda/articulos/imagenes/PROAMDR57600X/PROAMDR57600X_0_big.jpg' },
    { id: '5', name: 'Airpods 4', price: 200, stock: 0, image: 'https://mobilestore.ec/wp-content/uploads/2024/10/AirPods-4-Mobile-Store-Ecuador2.jpg' },
    { id: '6', name: 'irok fe87/104 rgb', price: 50, stock: 31, image: 'https://m.media-amazon.com/images/I/61L9VNxZOJL.jpg' }
]

const numColumns = 2;
const margin = 10;
const screenWidth = Dimensions.get('window').width;
const itemWidth = (screenWidth / numColumns) - (margin * 2);

export const HomeScreen = () => {

    const [productState, setProductState] = useState(products)

    const [car, setCar] = useState<Car[]>([])

    const [showCar, setShowCar] = useState<boolean>(false)

    const handleChangeStock = (idProduct: string, quantity: number) => {
        const updateStock = productState.map(item => item.id == idProduct
            ? {
                ...item,
                stock: item.stock - quantity
            }
            : item)

        setProductState(updateStock)

        addProduct(idProduct, quantity)
    }

    const addProduct = (idProduct: string, quantity: number) => {
        const product = productState.find(item => item.id === idProduct);

        if (!product) {
            return;
        }

        const newCarProduct: Car = {
            id: product.id,
            name: product.name,
            price: product.price,
            total: quantity,
            image: product.image
        }

        setCar([...car, newCarProduct])
    }

    return (
        <View>
            <View style={styles.headerHome}>
                <Text style={styles.title}>Productos</Text>
                <View style={styles.iconCart}>
                    <Text>{car.length}</Text>
                    <Icon name='shopping-cart' size={40} 
                    onPress={()=> setShowCar(!showCar)}
                    />
                </View>
            </View>

            <BodyComponent noPadding>
                <FlatList
                    data={productState}
                    keyExtractor={(item) => item.id}
                    numColumns={numColumns}
                    contentContainerStyle={{ paddingHorizontal: margin }}
                    columnWrapperStyle={{ justifyContent: 'space-between' }}
                    renderItem={({ item }) =>
                        <CardProduct product={item} itemWidth={itemWidth} handleChangeStock={handleChangeStock} />}
                />
            </BodyComponent>
            <ModalCar isVisible={showCar} car={car}  onClose={() => setShowCar(false)}/>
        </View>
    )
}

import React from 'react'
import { BodyComponent } from '../components/BodyComponent';
import { Dimensions, FlatList, Text, View, Image } from 'react-native'
import { styles } from '../theme/appTheme'

interface Product {
    id: string;
    name: string;
    image: string;
}

const products: Product[] = [
    { id: '1', name: 'Telefono Samsung S25', image: 'https://mobilestore.ec/wp-content/uploads/2025/01/Samsung-Galaxy-S25-Icy-Blue-Mobile-Store-Ecuador.jpg' },
    {id: '2', name: 'Iphone 16', image: 'https://tienda.movistar.com.ec/media/catalog/product/cache/d730591e49ae7d4a1adb9133c8cae915/i/p/iphone-16-negro-doble-movistar.png'},
    {id: '3', name:'RTX 4090', image:'https://cdn.wccftech.com/wp-content/uploads/2025/01/RTX-5090-Front-Custom-1456x1092.png'},
    {id:'4', name:'Ryzen 9 9950x', image:'https://ryans.com/storage/products/main/amd-ryzen-9-9950x-43ghz-57ghz-6-core-processor-11727415201.webp'}
]

const numColumns = 2;
const screenWidth = Dimensions.get('window').width;
const itemWidth = screenWidth / numColumns - 20;

export const ProductsScreen = () => {
    return (
        <View>
            <Text style={styles.title}>Productos</Text>
            <BodyComponent>
                <FlatList
                    data={products}
                    keyExtractor={(item) => item.id}
                    numColumns={numColumns}
                    renderItem={({ item }) => (
                        <View style={styles.itemContainer}>
                            <Image source={{ uri: item.image }} style={styles.image}/>
                            <Text >{item.name}</Text>
                        </View>
                    )}
                />
            </BodyComponent>
        </View>
    )
}

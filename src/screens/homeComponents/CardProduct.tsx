import React, { useState } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { Product } from './HomeScreen';
import { styles } from '../../theme/appTheme';
import { ModalProduct } from './ModalProduct';

interface Props {
    product: Product;
    itemWidth: number;
    handleChangeStock: (idProduct:string, quantity:number)=>void;
}

export const CardProduct = ({ product, itemWidth, handleChangeStock }: Props) => {
    const [showModal, setShowModal] = useState<boolean>(false)
    return (
        <View>
            <TouchableOpacity onPress={()=>setShowModal(!showModal)}>
                <View style={[styles.itemContainer, { width: itemWidth }]}>
                    <Image source={{ uri: product.image }} style={styles.image} />
                    <Text style={styles.itemName}>{product.name}</Text>
                    <Text>${product.price.toFixed(2)}</Text>
                </View>
            </TouchableOpacity>

            <ModalProduct 
            isVisible={showModal} 
            onClose={() => setShowModal(false)}
            product={product} 
            handleChangeStock={handleChangeStock}/>
        </View>
    )
}

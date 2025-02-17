import React, { useEffect, useState } from 'react'
import { Image, Modal, Text, View, TouchableOpacity } from 'react-native';
import { styles } from '../../theme/appTheme';
import { Product } from './HomeScreen';
import { ButtonComponent } from '../../components/ButtonComponent';

interface Props {
    isVisible: boolean;
    onClose: () => void;
    product: Product;
    handleChangeStock: (idProduct:string, quantity:number)=>void;
}

export const ModalProduct = ({ isVisible, onClose, product, handleChangeStock}: Props) => {

    const [quantity, setQuantity] = useState<number>(1)

    useEffect(() => {
        if (!isVisible) {
            setQuantity(1);
        }
    }, [isVisible]);

    const handleChangeQuality = (value: number) => {
        setQuantity(quantity + value);
    }

const handleAddProduct =()=>{
    handleChangeStock(product.id, quantity)
    onClose();
}

    return (
        <Modal visible={isVisible} transparent animationType="fade">
            <View style={styles.modal}>
                <View style={styles.modalContent}>
                    <View style={styles.modalBody}>
                        <Image style={styles.image} source={{ uri: product.image }} />

                        {product.stock > 0 ? (
                        <View style={styles.rightContainer}>
                            <View style={styles.quantityRow}>
                                <TouchableOpacity style={styles.buttonQuantity} onPress={() => handleChangeQuality(1)}
                                    disabled={quantity === product.stock}>
                                    <Text style={styles.textButtonQuantity}>+</Text>
                                </TouchableOpacity>
                                <Text style={styles.textQuantity}>{quantity}</Text>
                                <TouchableOpacity style={styles.buttonQuantity} onPress={() => handleChangeQuality(-1)}
                                    disabled={quantity === 1}>
                                    <Text style={styles.textButtonQuantity}>-</Text>
                                </TouchableOpacity>
                            </View>

                            <ButtonComponent textButton='Agregar al carrito' onPress={handleAddProduct} />
                        </View>
                        ):(<Text style={styles.outOfStockText}>Producto Agotado</Text>
                        )}
                    </View>
                    <Text style={styles.modalTitleCard}>Total: ${(product.price * quantity).toFixed(2)}</Text>
                    <Text style={styles.modalTitleCard}>{product.name} - ${product.price.toFixed(2)}</Text>
                    <ButtonComponent textButton='Cerrar' onPress={onClose} />
                </View>
            </View>
        </Modal>
    );
};
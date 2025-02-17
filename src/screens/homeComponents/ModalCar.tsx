import React from 'react'
import { FlatList, Image, Modal, Text, View } from 'react-native'
import { Car } from './HomeScreen';
import { ButtonComponent } from '../../components/ButtonComponent';
import { styles } from '../../theme/appTheme';


interface Props {
    isVisible: boolean;
    car: Car[];
    onClose: () => void;
}

export const ModalCar = ({ isVisible, car, onClose }: Props) => {

    const totalCar = car.reduce((total, item) => total + (item.price * item.total), 0).toFixed(2);

    return (
        <Modal visible={isVisible} transparent animationType="slide">
            <View style={styles.modalOverlay}>
                <View style={styles.modalContainer}>
                    <Text style={styles.modalTitle}>Carrito de Compras</Text>

                    {car.length > 0 ? (
                        <FlatList
                            data={car}
                            keyExtractor={(item, index) => `${item.id}-${index}`}
                            renderItem={({ item }) => (
                                <View style={styles.cartItem}>
                                    <Image style={styles.image} source={{ uri: item.image }} />

                                    <View style={styles.productInfo}>
                                        <Text style={styles.productName}>{item.name}</Text>
                                        <Text style={styles.productDetail}>Precio unitario: ${item.price.toFixed(2)}</Text>
                                        <Text style={styles.productDetail}>Cantidad: {item.total}</Text>
                                        <Text style={styles.totalPrice}>Total: ${(item.price * item.total).toFixed(2)}</Text>
                                    </View>
                                </View>
                            )}
                        />
                    ) : (
                        <Text style={styles.emptyCartText}>🛒 No hay productos en el carrito</Text>
                    )}

                    <View style={styles.cartTotalContainer}>
                        <Text style={styles.cartTotalText}>Total del carrito: ${totalCar}</Text>
                    </View>

                    <ButtonComponent textButton='Cerrar' onPress={onClose} />
                </View>
            </View>
        </Modal>
    );
};

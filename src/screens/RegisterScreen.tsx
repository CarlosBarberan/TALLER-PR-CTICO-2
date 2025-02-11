import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { BodyComponent } from '../components/BodyComponent';
import { styles } from '../theme/appTheme';
import { InputComponent } from '../components/InputComponent';
import { ButtonComponent } from '../components/ButtonComponent';

export const RegisterScreen = () => {
    const [email, setEmail] = useState<string>('');
    const [user, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [hiddenPassword, setHiddenPassword] = useState<boolean>(true);

    const validateEmail = (email: string) => /\S+@\S+\.\S+/.test(email);
    const validatePassword = (password: string) => /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(password);

    const handleRegister = () => {
        if (!validateEmail(email)) {
            Alert.alert('Error', 'Correo electrónico inválido');
            return;
        }
        if (!validatePassword(password)) {
            Alert.alert('Error', 'La contraseña debe tener al menos 6 caracteres, una mayúscula y una minúscula');
            return;
        }
        Alert.alert('Registro exitoso');
    };

    return (
        <View>
            <Text style={styles.title}>Registro</Text>
            <BodyComponent>
            <InputComponent
                                placeholder="Usuario"
                                handleSetValues={setUsername}
                                fieldKey="user"
                            />
            <InputComponent
                                placeholder="Email"
                                handleSetValues={setEmail}
                                fieldKey="email"
                            />
            <InputComponent
                                placeholder="Contraseña"
                                handleSetValues={setPassword}
                                fieldKey="password"
                                isPassword={hiddenPassword}
                                hasIcon={true}
                                accionIcon={() => setHiddenPassword(!hiddenPassword)}
                            />
            <ButtonComponent textButton='Registrate' onPress={handleRegister




            }/>
            <Text>¿Ya tienes una cuenta? Inicia sesión ahora</Text>
            </BodyComponent>
            
        </View>
    );
};



export default RegisterScreen;
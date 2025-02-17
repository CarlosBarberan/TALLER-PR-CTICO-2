import React, { useCallback, useReducer, useState } from 'react';
import { Text, View, Alert, TouchableOpacity } from 'react-native';
import { styles } from '../theme/appTheme';
import { InputComponent } from '../components/InputComponent';
import { BodyComponent } from '../components/BodyComponent';
import { ButtonComponent } from '../components/ButtonComponent';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList, User } from '../navigator/DrawerNavigator';

export interface FormLogin {
    user: string;
    email: string;
    password: string;
    phoneNumber: string;
    confirmPassword: string;
}

interface Props{
    users: User[];
}

const initialState: FormLogin = {
    user: '',
    email: '',
    password: '',
    phoneNumber: '',
    confirmPassword: '',
};

const formReducer = (state: FormLogin, action: { type: keyof FormLogin; value: string }) => {
    return { ...state, [action.type]: action.value };
};



export const LoginScreen = ({ users}:Props) => {
    const [formLogin, dispatch] = useReducer(formReducer, initialState);
    const [hiddenPassword, setHiddenPassword] = useState<boolean>(true);
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    const handleSetValues = useCallback((fieldKey: keyof FormLogin, value: string) => {
        dispatch({ type: fieldKey, value });
    }, []);


    const verifyUser = useCallback(() => {
        return users.some(
            (user) => user.email === formLogin.email && user.password === formLogin.password && user.user === formLogin.user
        );
    }, [formLogin]);

    const handleLogin = useCallback(() => {
        const { user, password, email } = formLogin;

        if (!user.trim() || !password.trim() || !email.trim()) {
            Alert.alert('Error', 'Todos los campos son obligatorios');
            return;
        }

        if (!verifyUser()) {
            Alert.alert('Error', 'Datos Incorrectos');
            return;
        }

        Alert.alert('Inicio de sesión exitoso', `Bienvenido, ${user}!`);
        navigation.navigate('Home')
    }, [formLogin, verifyUser]);

    return (
        <View>
            <Text style={styles.title}>Iniciar Sesión</Text>
            <BodyComponent>
                <Text style={styles.titleBody}>Bienvenido de nuevo!</Text>
                <Text style={styles.fontBody}>El mejor lugar para comprar componenetes de electronica</Text>
                <InputComponent
                    placeholder="Usuario"
                    handleSetValues={handleSetValues}
                    fieldKey="user"
                />
                <InputComponent
                    placeholder="Email"
                    handleSetValues={handleSetValues}
                    fieldKey="email"
                />
                <InputComponent
                    placeholder="Contraseña"
                    handleSetValues={handleSetValues}
                    fieldKey="password"
                    isPassword={hiddenPassword}
                    hasIcon={true}
                    accionIcon={() => setHiddenPassword(!hiddenPassword)}
                />
                <ButtonComponent textButton='Iniciar Sesion' onPress={handleLogin} />
                <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                    <Text style={[styles.texturl]}>
                        ¿No tienes una cuenta? Regístrate ahora
                    </Text>
                </TouchableOpacity>
            </BodyComponent>
        </View>
    );
};

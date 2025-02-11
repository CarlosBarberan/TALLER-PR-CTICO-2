import React, { useState } from 'react';
import { Text, View, Alert, Button, TextComponent } from 'react-native';
import { styles } from '../theme/appTheme';
import { InputComponent } from '../components/InputComponent';
import { BodyComponent } from '../components/BodyComponent';
import { ButtonComponent } from '../components/ButtonComponent';

export interface FormLogin {
    user: string;
    email: string;
    password: string;
}

export const LoginScreen = () => {
    const [formLogin, setFormLogin] = useState<FormLogin>({
        user: '',
        password: '',
        email: '',
    });

    const [hiddenPassword, setHiddenPassword] = useState<boolean>(true);

    const handleSetValues = (fieldKey: keyof FormLogin, value: string) => {
        console.log(fieldKey)
        console.log(value)
        setFormLogin(prevState => ({
            ...prevState,
            [fieldKey]: value,
        })
        );
    };

    interface User {
        id: number,
        user: string,
        password: string,
        email: string
    }

    const users: User[] = [
        { id: 1, password: 'asd', user: 'asd', email: 'asd' }
    ]

    const verifyUser = () => {
        const existUser = users.filter(
            user => user.email == formLogin.email && user.password == formLogin.password && user.user == formLogin.user
        );
        return existUser;
    }

    const handleLogin = () => {
        const { user, password, email } = formLogin;
    
        if (user.trim() === '' || password.trim() === '' || email.trim() === '') {
            Alert.alert('Error', 'Todos los campos son obligatorios');
            return;
        } else {
            const existUser = verifyUser();
            if (existUser.length === 0) {
                Alert.alert('Error', 'Datos Incorrectos');
                return;
            } else {
                Alert.alert('Inicio de sesión exitoso', `Bienvenido, ${user}!`);
            }
        }
    }

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
                <Text style={styles.texturl}>¿No tienes una cuenta? Regístrate ahora</Text>
            </BodyComponent>
        </View>
    );
};

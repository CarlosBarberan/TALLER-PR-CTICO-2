import React, { useReducer, useState, useCallback } from 'react';
import { View, Text, Alert, TouchableOpacity, Image } from 'react-native';
import { BodyComponent } from '../components/BodyComponent';
import { styles } from '../theme/appTheme';
import { InputComponent } from '../components/InputComponent';
import { ButtonComponent } from '../components/ButtonComponent';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList, User } from '../navigator/DrawerNavigator';

interface FormRegister {
    user: string;
    email: string;
    phoneNumber: string;
    password: string;
    confirmPassword: string;
}

interface Props {
    users: User[];
    handleAddUser: (user: User) => void;
}

const initialState: FormRegister = {
    user: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
};

const formReducer = (state: FormRegister, action: { type: keyof FormRegister; value: string }) => {
    return { ...state, [action.type]: action.value };
};

export const RegisterScreen = ({ users, handleAddUser }: Props) => {
    const [formRegister, dispatch] = useReducer(formReducer, initialState);
    const [hiddenPassword, setHiddenPassword] = useState<boolean>(true);
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    const handleSetValues = useCallback((fieldKey: keyof FormRegister, value: string) => {
        dispatch({ type: fieldKey, value });
    }, []);

    const validateEmail = (email: string) => /\S+@\S+\.\S+/.test(email);
    const validatePassword = (password: string) => /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(password);
    const validatePhoneNumber = (phone: string) => /^\d{10}$/.test(phone);

    const verifyUser = useCallback(() => {
        return users.some(
            (user) => user.email === formRegister.email
        );
    }, [formRegister]);

    const handleRegister = () => {
        const { user, email, password, phoneNumber, confirmPassword } = formRegister;

        if (!user.trim()) {
            Alert.alert('Error', 'El nombre de usuario es obligatorio');
            return;
        }

        if (!validateEmail(email)) {
            Alert.alert('Error', 'Correo electrónico inválido');
            return;
        }

        if (!validatePhoneNumber(phoneNumber)) {
            Alert.alert('Error', 'Número de teléfono inválido (debe contener 10 dígitos)');
            return;
        }

        if (!validatePassword(password)) {
            Alert.alert('Error', 'La contraseña debe tener al menos 6 caracteres, una mayúscula y una minúscula');
            return;
        }

        if (password !== confirmPassword) { // Validación para las contraseñas coincidan
            Alert.alert('Error', 'Las contraseñas no coinciden');
            return;
        }

        if (verifyUser()) {
            Alert.alert(
                'Error',
                'El correo ya esta registrado'
            )
            return;
        }

        const getIdUser = users.map(user => user.id)
        const getNewId = Math.max(...getIdUser, 0) + 1;

        const newUser: User = {
            id: getNewId,
            user: formRegister.user,
            email: formRegister.email,
            password: formRegister.password,
        };

        Alert.alert('Registro exitoso', `Bienvenido, ${user}!`);
        handleAddUser(newUser);
        navigation.navigate('Login')
    };

    return (
        <View>
            <Text style={styles.title}>Registro</Text>
            <BodyComponent>
                <Text style={styles.titleBody}>Crea una cuenta</Text>
                <Text style={styles.fontBody}>y aprovecha los muchos beneficios de comprar en nuestro sitio</Text>
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
                    placeholder="Número de Teléfono"
                    handleSetValues={handleSetValues}
                    fieldKey="phoneNumber"
                />
                <InputComponent
                    placeholder="Contraseña"
                    handleSetValues={handleSetValues}
                    fieldKey="password"
                    isPassword={hiddenPassword}
                    hasIcon={true}
                    accionIcon={() => setHiddenPassword(!hiddenPassword)}
                />
                <InputComponent
                    placeholder="Confirmar Contraseña"
                    handleSetValues={handleSetValues}
                    fieldKey="confirmPassword"
                    isPassword={hiddenPassword}
                    hasIcon={true}
                    accionIcon={() => setHiddenPassword(!hiddenPassword)}
                />
                <ButtonComponent textButton='Registrate' onPress={handleRegister} />
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={[styles.texturl]}>
                        ¿Ya tienes una cuenta? Inicia sesión ahora
                    </Text>
                </TouchableOpacity>
            </BodyComponent>

        </View>
    );
};



export default RegisterScreen;
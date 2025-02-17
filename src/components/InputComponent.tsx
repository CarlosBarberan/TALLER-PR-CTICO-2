import React from 'react';
import { TextInput, View } from 'react-native';
import { FormLogin } from '../screens/LoginScreen';
// @ts-ignore
import Icon from 'react-native-vector-icons/MaterialIcons'
import { styles } from '../theme/appTheme';



interface Props {
    placeholder: string;
    handleSetValues: (key: keyof FormLogin, value: string) => void;
    fieldKey: keyof FormLogin;
    isPassword?: boolean;
    hasIcon?: boolean;
    accionIcon?: ()=>void;
}

export const InputComponent = ({ placeholder, handleSetValues, fieldKey, isPassword = false, hasIcon = false, accionIcon }: Props) => {
    return (
        <View>
            <TextInput
                placeholder={placeholder}
                keyboardType="default"
                onChangeText={(value) => handleSetValues(fieldKey, value)}
                secureTextEntry={isPassword}
            />
            {
                (hasIcon)
                ?
                <Icon
                name='visibility'
                size={23}
                onPress={accionIcon}
                style={styles.iconPassword} />
                :null
            }
            
        </View>
    );
};

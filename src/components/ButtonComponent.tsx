import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { styles } from '../theme/appTheme'

interface Props {
    textButton: string;
    onPress:()=>void;
}

export const ButtonComponent = ({ textButton, onPress }: Props) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>{textButton}</Text>
        </TouchableOpacity>
    )
}

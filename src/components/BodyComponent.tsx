import React from 'react'
import { useWindowDimensions, View, Text } from 'react-native';
import { styles } from '../theme/appTheme';

export const BodyComponent = (props: any) => {
    const { height } = useWindowDimensions();
    return (
        <View style={{
            ...styles.contentBody,
            height: height * 0.76,
            paddingHorizontal: props.noPadding ? 0 : styles.contentBody.paddingHorizontal
        }}>
            {props.children}
        </View>
    )
}

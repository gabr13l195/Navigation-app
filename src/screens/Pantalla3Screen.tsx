import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../themes/appThemes'

interface Props extends StackScreenProps<any,any>{};

export const Pantalla3Screen = ({navigation}: Props) => {
    return (
        <View style={styles.globalMargin}>
            <Text>Pantalla 3</Text>
            <Button
                title='Regresar'
                onPress={()=>navigation.pop()}
            />
            <Button
                title='Ir a Principal'
                onPress={()=>navigation.popToTop()}/>
                
        </View>
    )
}

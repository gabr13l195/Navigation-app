import React from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../themes/appThemes'
import { CommonActions, useNavigation } from '@react-navigation/native'

export const Pantalla2Screen = () => {
    //Hook useNavigation: navegar de una pagina a otra

    const navigation= useNavigation();
    return (
        <View style={styles.globalMargin}>
            <Text>Pantalla 2</Text>
            <Button
            title='Ir pagina 3'
            onPress={()=>navigation.dispatch(CommonActions.navigate({name:'Pantalla 3'}))}
            />
        </View>
    )
}

import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../themes/appThemes';

interface Props extends StackScreenProps<any, any>{};

export const Pantalla1Screen = ({navigation}:Props) => {

    return (
        <View style={styles.globalMargin}>
            <Text>Pantalla 1</Text>
            <Button
                title="Ir pagina 2"
                onPress={()=>navigation.navigate('Pantalla 2')}
            />
        </View>
    )
}

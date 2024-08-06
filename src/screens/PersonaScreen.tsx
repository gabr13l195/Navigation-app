import React from 'react'
import { Text, View } from 'react-native'
import { styles } from '../themes/appThemes';
import { StackScreenProps } from '@react-navigation/stack';

//Interface -- Props navegacions
interface Props extends StackScreenProps<any, any>{}

export const PersonaScreen = ({route}: Props) => {
    const params = route.params;

    return (
        <View>
            <Text>
                {JSON.stringify(params, null, 2)}
            </Text>
        </View>
    )
}

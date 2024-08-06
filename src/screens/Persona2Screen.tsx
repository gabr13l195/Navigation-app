import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Text, View } from 'react-native'

interface Props extends StackScreenProps<any, any>{}

export const Persona2Screen = ({route}: Props) => {
    const params = route.params;

    return (
        <View>
            <Text>
                {JSON.stringify(params, null, 2)}
            </Text>
        </View>
    )
}

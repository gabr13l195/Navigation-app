import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { Button, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { styles } from '../themes/appThemes';

//Interface -- Props de navegacion
interface Persona{
    id: number,
    nombre: string,
    correo: string,
}

interface Props extends StackScreenProps<any, any>{};

export const Pantalla1Screen = ({navigation}:Props) => {
    
    //Objeto
    const persona1: Persona={
        id: 1,
        nombre: 'Gabriel',
        correo: 'gaby@gmail.com'
    }

    const persona2: Persona={
        id: 2,
        nombre: 'Wilmer',
        correo: 'wilmer@gmail.com'
    }

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Pantalla 1</Text>
            <Button
                title="Ir pagina 2"
                onPress={()=>navigation.navigate('Pantalla 2')}
            />
            {/* <Button 
                title="Persona Screen"
                onPress={()=>navigation.navigate('Pantalla Screen')}
            /> */}
            <Text style={styles.title}>Navegacion con parámetros</Text>
            <TouchableOpacity onPress={()=>navigation.navigate('Pantalla Gabriel', persona1)}>
                <Text>Gabriel</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('Pantalla Wilmer', persona2)}>
                <Text>Wilmer</Text>
            </TouchableOpacity>
        </View>
    )
}

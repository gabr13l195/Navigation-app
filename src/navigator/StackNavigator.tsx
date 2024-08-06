import { createStackNavigator } from '@react-navigation/stack';
import { Pantalla1Screen } from '../screens/Pantalla1Screen';
import { Pantalla2Screen } from '../screens/Pantalla2Screen';
import { Pantalla3Screen } from '../screens/Pantalla3Screen';
import { styles } from '../themes/appThemes';
import { PersonaScreen } from '../screens/PersonaScreen';
import { Persona2Screen } from '../screens/Persona2Screen';

const Stack = createStackNavigator();

export const StackNavigator = () => {
    return (
        <Stack.Navigator
            //initialRoutName define el screen principal
            // initialRouteName='Pantalla 1'
            // screenOptions={{
                // headerShown: false, --- ocualta la cabecera
            //     cardStyle:{
            //         backgroundColor:'white'
            //     }
            // }}
            >
            <Stack.Screen name="Pantalla 1" options={{title:'Home'}} component={Pantalla1Screen}/>
            <Stack.Screen name="Pantalla 2" options={{title:'Screen2'}}component={Pantalla2Screen} />
            <Stack.Screen name="Pantalla 3" options={{title:'La 3'}}component={Pantalla3Screen} />
            <Stack.Screen name="Pantalla Gabriel" options={{title:'SCREEN'}}component={PersonaScreen} />
            <Stack.Screen name="Pantalla Wilmer" options={{title:'SCREEN'}}component={Persona2Screen} />
        </Stack.Navigator>
    );
}

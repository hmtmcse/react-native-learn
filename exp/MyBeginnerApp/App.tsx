import React from 'react';
import {View, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from './screens/SplashScreen';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import {RootStackParamList} from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
    return (
        <View style={styles.appContainer}>
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName="Splash"
                    screenOptions={{
                        contentStyle: {backgroundColor: '#fff'}, // fixes flicker
                    }}
                >
                    <Stack.Screen
                        name="Splash"
                        component={SplashScreen}
                        options={{headerShown: false, animation: 'none'}}
                    />
                    <Stack.Screen name="Home" component={HomeScreen}/>
                    <Stack.Screen name="About" component={AboutScreen}/>
                </Stack.Navigator>
            </NavigationContainer>
        </View>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        backgroundColor: '#fff', // ensures no right-side blink
    },
});
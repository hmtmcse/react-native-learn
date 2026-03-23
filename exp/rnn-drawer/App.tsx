import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import DrawerNavigator from './app/DrawerNavigator';
import {StatusBar} from 'expo-status-bar';

export default function App() {
    return (
        <GestureHandlerRootView style={{flex: 1}}>
            <StatusBar style="dark"/>
            <DrawerNavigator/>
        </GestureHandlerRootView>
    );
}
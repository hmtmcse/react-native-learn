import { StatusBar } from 'expo-status-bar';
import {Button, StyleSheet, Text, View} from 'react-native';
import Toast from "react-native-toast-message";

export default function App() {

    const showToast = () => {
        console.log("Tap")
        Toast.show({
            type: 'success',
            text1: 'This is a success message This is a success message This is a success message',
            topOffset: 35,
            position: "bottom"
        });
        // Toast.show({
        //     type: 'error',
        //     text1: 'Hello',
        //     text2: 'This is some something 👋'
        // });
    }

    return (
        <>
            <View style={styles.container}>
                <StatusBar style="auto"/>
                <Button
                    title='Show toast'
                    onPress={showToast}
                />
                <Text>Open up App.tsx to start working on your app!</Text>
                <Toast/>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

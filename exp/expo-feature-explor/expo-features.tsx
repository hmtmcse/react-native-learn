import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import {View, Text, Button, Image, ScrollView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import * as Camera from 'expo-camera';
import * as Sharing from 'expo-sharing';
import * as WebBrowser from 'expo-web-browser';
import * as FileSystem from 'expo-file-system';
import * as ImagePicker from 'expo-image-picker';
import * as Localization from 'expo-localization';
import * as Notifications from 'expo-notifications';
import * as Audio from 'expo-av';
import * as Calendar from 'expo-calendar';
import * as Clipboard from 'expo-clipboard';
import * as Contacts from 'expo-contacts';
import * as Linking from 'expo-linking';
import * as MediaLibrary from 'expo-media-library';

import CameraScreen from './screen/camera-screen';

const Drawer = createDrawerNavigator();

function HomeScreen() {
    return (
        <ScrollView>
            <Text style={{fontSize: 20}}>Expo All Features Demo</Text>
        </ScrollView>
    );
}

function ImagePickerScreen() {
    const [image, setImage] = useState<string | null>(null);

    const pickImage = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({});
        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    return (
        <View>
            <Button title="Pick Image" onPress={pickImage}/>
            {image && <Image source={{uri: image}} style={{width: 200, height: 200}}/>}
        </View>
    );
}

function FileSystemScreen() {
    const writeFile = async () => {
        const fileUri = FileSystem.Paths.document + 'test.txt';
        await FileSystem.writeAsStringAsync(fileUri, 'Hello Expo');
        alert('Saved: ' + fileUri);
    };
    return <Button title="Write File" onPress={writeFile}/>;
}

function ShareScreen() {
    const share = async () => {
        const path = FileSystem.Paths.document + 'test.txt';
        const file = new FileSystem.File(path);
        await file.write('Hello from Expo');
        await Sharing.shareAsync(file.uri);
    };
    return <Button title="Share File" onPress={share}/>;
}

function BrowserScreen() {
    return (
        <Button title="Open Web" onPress={() => WebBrowser.openBrowserAsync('https://expo.dev')}/>
    );
}

function NotificationScreen() {
    useEffect(() => {
        Notifications.requestPermissionsAsync();
    }, []);

    const sendNotification = async () => {
        await Notifications.scheduleNotificationAsync({
            content: {title: 'Hello', body: 'Expo Notification'},
            trigger: null,
        });
    };

    return <Button title="Notify" onPress={sendNotification}/>;
}

function AudioScreen() {
    const playSound = async () => {
        const {sound} = await Audio.Audio.Sound.createAsync(
            {uri: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'}
        );
        await sound.playAsync();
    };
    return <Button title="Play Audio" onPress={playSound}/>;
}

function ClipboardScreen() {
    return (
        <Button title="Copy" onPress={() => Clipboard.setStringAsync('Copied!')}/>
    );
}

function LinkingScreen() {
    return (
        <Button title="Open Link" onPress={() => Linking.openURL('https://google.com')}/>
    );
}

function LocalizationScreen() {
    const locales = Localization.getLocales();
    return (
        <Text>
            Locale: {locales[0]?.languageTag}
        </Text>
    );
}

function ContactsScreen() {
    const getContacts = async () => {
        const {data} = await Contacts.getContactsAsync();
        alert(data.length + ' contacts');
    };
    return <Button title="Get Contacts" onPress={getContacts}/>;
}

function CalendarScreen() {
    const getCalendars = async () => {
        const calendars = await Calendar.getCalendarsAsync();
        alert(calendars.length + ' calendars');
    };
    return <Button title="Calendars" onPress={getCalendars}/>;
}

function MediaLibraryScreen() {
    const getMedia = async () => {
        const media = await MediaLibrary.getAssetsAsync();
        alert(media.totalCount + ' media');
    };
    return <Button title="Media" onPress={getMedia}/>;
}

export default function ExpoFeatures() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Home" component={HomeScreen}/>
                <Drawer.Screen name="Camera" component={CameraScreen}/>
                <Drawer.Screen name="Browser" component={BrowserScreen}/>
                <Drawer.Screen name="Notification" component={NotificationScreen}/>
                <Drawer.Screen name="Audio" component={AudioScreen}/>
                <Drawer.Screen name="ImagePicker" component={ImagePickerScreen}/>
                <Drawer.Screen name="FileSystem" component={FileSystemScreen}/>
                <Drawer.Screen name="Share" component={ShareScreen}/>
                <Drawer.Screen name="Clipboard" component={ClipboardScreen}/>
                <Drawer.Screen name="Linking" component={LinkingScreen}/>
                <Drawer.Screen name="Localization" component={LocalizationScreen}/>
                <Drawer.Screen name="Contacts" component={ContactsScreen}/>
                <Drawer.Screen name="Calendar" component={CalendarScreen}/>
                <Drawer.Screen name="Media" component={MediaLibraryScreen}/>
            </Drawer.Navigator>
        </NavigationContainer>
    );
}
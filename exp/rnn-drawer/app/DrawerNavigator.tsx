import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import SettingsScreen from './screens/SettingsScreen';

export type DrawerItem = {
  name: string;
  component: React.ComponentType<any>;
};

export const drawerItems: DrawerItem[] = [
  { name: 'Home', component: HomeScreen },
  { name: 'Profile', component: ProfileScreen },
  { name: 'Settings', component: SettingsScreen },
];

// export type DrawerParamList = {
//   Home: undefined;
//   Profile: undefined;
//   Settings: undefined;
// };
//
// const Drawer = createDrawerNavigator<DrawerParamList>();
//
// export default function DrawerNavigator() {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator initialRouteName="Home">
//         <Drawer.Screen name="Home" component={HomeScreen} />
//         <Drawer.Screen name="Profile" component={ProfileScreen} />
//         <Drawer.Screen name="Settings" component={SettingsScreen} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }


export type DrawerParamList = {
  [key: string]: undefined; // allows dynamic keys
};

const Drawer = createDrawerNavigator<DrawerParamList>();

export default function DrawerNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        {drawerItems.map((item: DrawerItem) => (
          <Drawer.Screen
            key={item.name}
            name={item.name}
            component={item.component}
          />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
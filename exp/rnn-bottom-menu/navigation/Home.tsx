import { View, Text, Button } from 'react-native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { TabParamList } from './BottomTabs';

type Props = BottomTabScreenProps<TabParamList, 'Home'>;

export default function Home({ navigation }: Props) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home Screen</Text>
      <Button title="Go to Profile" onPress={() => navigation.navigate('Profile')} />
    </View>
  );
}

import 'react-native-gesture-handler';
import { Pressable, Text } from 'react-native';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import AboutScreen from './screens/AboutScreen';

const Stack = createNativeStackNavigator();
const AboutStackNav = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

// Drawer menu button
const menuButton = (navigation) => (
  <Pressable
    onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
  >
    <Text style={{ fontSize: 24, color: '#4B286D', marginRight: 16 }}>
      ☰
    </Text>
  </Pressable>
);

// Home and Profile navigation
function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#FFFFFF' },
        headerTintColor: '#4B286D',
        headerTitleStyle: { fontWeight: 'bold' },
      }}
    >
      <Stack.Screen
        name="HomeMain"
        component={HomeScreen}
        options={({ navigation }) => ({
          title: 'Home',
          headerLeft: () => menuButton(navigation),
        })}
      />

      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ title: 'Profile' }}
      />
    </Stack.Navigator>
  );
}

// About navigation
function AboutStack() {
  return (
    <AboutStackNav.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#FFFFFF' },
        headerTintColor: '#4B286D',
        headerTitleStyle: { fontWeight: 'bold' },
      }}
    >
      <AboutStackNav.Screen
        name="AboutMain"
        component={AboutScreen}
        options={({ navigation }) => ({
          title: 'About',
          headerLeft: () => menuButton(navigation),
        })}
      />
    </AboutStackNav.Navigator>
  );
}

// Main app
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerShown: false,
          drawerStyle: {
            backgroundColor: '#F7F2FC',
          },
          drawerActiveTintColor: '#8052B8',
          drawerInactiveTintColor: '#654783',
          drawerActiveBackgroundColor: '#E6D8F2',
          drawerLabelStyle: {
            fontSize: 15,
          },
        }}
      >
        <Drawer.Screen name="Home" component={HomeStack} />
        <Drawer.Screen name="About" component={AboutStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

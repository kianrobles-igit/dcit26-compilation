
import 'react-native-gesture-handler';

import { Pressable, Text } from 'react-native';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#FFFFFF',
        },
        headerTintColor: '#4B286D',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen
        name="HomeMain"
        component={HomeScreen}
        options={({ navigation }) => ({
          title: 'Home',
          headerLeft: () => (
            <Pressable
              onPress={() =>
                navigation.dispatch(DrawerActions.openDrawer())
              }
            >
              <Text style={{ fontSize: 24, color: '#4B286D', marginRight: 16 }}>
                ☰
              </Text>
            </Pressable>
          ),
        })}
      />

      <Stack.Screen
        name="Product"
        component={ProductScreen}
        options={{ title: 'Product Details' }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerShown: false,
          drawerStyle: {
            backgroundColor: '#F7F2FC',
          },
          drawerActiveTintColor: '#4B286D',
          drawerInactiveTintColor: '#654783',
          drawerActiveBackgroundColor: '#E6D8F2',
          drawerLabelStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Drawer.Screen
          name="Home"
          component={HomeStack}
          options={{ title: 'Home' }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from './pages/loginPage';
import HomePage from './pages/homePage/homePage';
import Sheduling from './pages/schedulingPage/sheduling';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginPage} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomePage} options={{ headerShown: false }} />
        <Stack.Screen name="Sheduling" component={Sheduling} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
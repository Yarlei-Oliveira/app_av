import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import LoginPage from './pages/loginPage';
import HomePage from './pages/homePage/homePage';
import Sheduling from './pages/schedulingPage/sheduling';
import ShedulingList from './pages/homePage/components/drawer/shedulingList';
import { auth } from './firebase';
import { signOut } from 'firebase/auth';




const Drawer = createDrawerNavigator();

const Stack = createNativeStackNavigator();

function logOut(){
  signOut(auth)
}

function Root() {
  return (
    <Drawer.Navigator initialRouteName='Home'>
      <Drawer.Screen name="Home" component={HomePage} options={{ headerTitleAlign: "center", }} />
      <Drawer.Screen name="ShedulingList" component={ShedulingList} options={{ headerTitleAlign: "center", title:"Agendados" }}/>
      <Drawer.Screen name="Sair" component={logOut}/>
    </Drawer.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginPage} options={{ headerShown: false }} />
        <Stack.Screen name="Root" component={Root} options={{ headerShown: false }} />
        <Stack.Screen name="Sheduling" component={Sheduling} options={{ title: "Agendamento" , headerTitleAlign: "center"}} />
      </Stack.Navigator>


    </NavigationContainer>
  );
}

export default App;
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import LoginPage, { user } from './pages/loginPage';
import HomePage from './pages/homePage/homePage';
import Sheduling from './pages/schedulingPage/sheduling';
import ShedulingList from './pages/homePage/components/drawer/shedulingList/shedulingList';
import { auth } from './firebase';
import { signOut } from 'firebase/auth';
import { ref, onValue } from "firebase/database";
import { database } from './firebase';
import AuthorizationPage from './pages/homePage/components/drawer/authorization/authorizationPage';


const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function LogOut() {
  signOut(auth)
}

function Root() {
  const [isSuperAdmin, setIsSuperAdmin] = React.useState(false)

  let isSuperAdminAux = true

  const dbRef = ref(database, "users/");

  onValue(dbRef, (data) => {
    if (!data.exists()) {
    }
    data.forEach((element) => {
      if (element.val().id === user.uid) {
        console.log(element.val().superAdmin)
        isSuperAdminAux = element.val().superAdmin
      }
    })
    setIsSuperAdmin(isSuperAdminAux)
  }, { onlyOnce: true });
  
  return (
    <Drawer.Navigator initialRouteName='Home'>
      <Drawer.Screen name="Home" component={HomePage} options={{ headerTitleAlign: "center", }} />
      <Drawer.Screen name="ShedulingList" component={ShedulingList} options={{ headerTitleAlign: "center", title: "Agendados" }} />
      {isSuperAdmin && <Drawer.Screen name="Authorization" component={AuthorizationPage} options={{ headerTitleAlign: "center", title: "Authorization" }} />}
      <Drawer.Screen name="Sair" component={LogOut} />
    </Drawer.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginPage} options={{ headerShown: false }} />
        <Stack.Screen name="Root" component={Root} options={{ headerShown: false }} />
        <Stack.Screen name="Sheduling" component={Sheduling} options={{ title: "Agendamento", headerTitleAlign: "center" }} />
      </Stack.Navigator>


    </NavigationContainer>
  );
}

export default App;
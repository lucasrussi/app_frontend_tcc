import React from 'react';
import AppLoading from 'expo-app-loading';
import {ThemeProvider} from 'styled-components';
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins'

import theme from './src/global/styles/theme'
import { Home } from './src/screens/Home';
import { RegisterAudio } from './src/screens/RegisterAudio';
import { Login } from './src/screens/Login';
import { MenuPrincipal } from './src/screens/menuPrincipal';
import { ListarAudio } from './src/screens/ListarAudio';
import { ReadNfc } from './src/screens/ReadNfc';
import { WriteNfc } from './src/screens/WriteNfc';
import { PlayAudio } from './src/screens/PlayAudio';

const Stack = createNativeStackNavigator();
const App = () => {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  });

  if(!fontsLoaded){
    return <AppLoading/>
  }
  
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home">
              {(props) => <Home {...props} />}
            </Stack.Screen>
            <Stack.Screen name="Login">
              {(props) => <Login {...props}/>}
            </Stack.Screen>
            <Stack.Screen name="MenuPrincipal">
              {(props) => <MenuPrincipal {...props}/>}
            </Stack.Screen>
            <Stack.Screen name="ListarAudio">
              {(props) => <ListarAudio {...props}/>}
            </Stack.Screen>
            <Stack.Screen name="RegisterAudio">
              {(props) => <RegisterAudio {...props}/>}
            </Stack.Screen>
            <Stack.Screen name="ReadNfc">
              {(props) => <ReadNfc {...props}/>}
            </Stack.Screen>
            <Stack.Screen name="WriteNfc">
              {(props) => <WriteNfc {...props}/>}
            </Stack.Screen>
            <Stack.Screen name="PlayAudio">
              {(props) => <PlayAudio {...props}/>}
            </Stack.Screen>

            {/* <RegisterAudio/> */}
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  )
};


export default App;

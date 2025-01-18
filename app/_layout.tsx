import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerTitle: 'Назад', headerShown: false }} />
        <Stack.Screen name="[topic]" options={{headerTitle: 'QA'}}/>
        <Stack.Screen name="+not-found" />
      </Stack>
    </ThemeProvider>
  );
}

// import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native'
// import { useFonts } from 'expo-font'
// import { Stack } from 'expo-router'
// import * as SplashScreen from 'expo-splash-screen'
// import { useEffect, useState } from 'react'; // Добавлено useState
// import 'react-native-reanimated'

// import { useColorScheme } from '@/hooks/useColorScheme'
// import { Text, TouchableOpacity } from 'react-native'

// // Prevent the splash screen from auto-hiding before asset loading is complete.
// SplashScreen.preventAutoHideAsync();

// export default function RootLayout() {
//   const colorScheme = useColorScheme();
//   const [loaded] = useFonts({
//     SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
//   });
  
//   // Добавлено состояние для хранения текущей темы
//   const [theme, setTheme] = useState(colorScheme === 'dark' ? DarkTheme : DefaultTheme);

//   useEffect(() => {
//     if (loaded) {
//       SplashScreen.hideAsync();
//     }
//   }, [loaded]);

//   // Обработчик для переключения темы
//   const toggleTheme = () => {
//     setTheme(prevTheme => (prevTheme === DarkTheme ? DefaultTheme : DarkTheme));
//   };

//   if (!loaded) {
//     return null;
//   }

//   return (
//     <ThemeProvider value={theme}>         
//       <TouchableOpacity style={{ backgroundColor: '#A1CEDC' }} onPress={toggleTheme} ><Text>Сменить тему</Text></TouchableOpacity>
//       <Stack>
//         <Stack.Screen name="(tabs)" options={{ headerTitle: 'Назад', headerShown: false }} />
//         <Stack.Screen name="[topic]" options={{headerTitle: 'QA'}}/>
//         <Stack.Screen name="+not-found" />
//       </Stack>
//     </ThemeProvider>
//   );
// }

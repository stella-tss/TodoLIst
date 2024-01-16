import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import { HomeScreen } from './src/screens';
import {useFonts, Inter_400Regular, Inter_600SemiBold} from '@expo-google-fonts/inter';
import { theme } from './src/themes';
import { Loading } from './src/components/Loading';


export default function App() {

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold: Inter_600SemiBold
  });
  return (
    <View style={styles.container}>
      {fontsLoaded? <HomeScreen/> : < Loading/>} 
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.base.gray600,
    alignItems: 'center',
    justifyContent: 'center',
  },
});




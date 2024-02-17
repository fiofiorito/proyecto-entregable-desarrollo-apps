import { StatusBar, StyleSheet } from 'react-native'
import Home from './src/screens/Home'
import ProductsByCategory from './src/screens/ProductsByCategory'
import { useFonts } from 'expo-font'
import fonts, { fontsCollection } from './src/utils/global/fonts'
import ProductDetail from './src/components/ProductDetail'
import colors from './src/utils/global/colors'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from './src/components/Header'



const Stack = createNativeStackNavigator();

const App = () => {
  const [fontsLoaded] = useFonts(fontsCollection)

  if (!fontsLoaded) return null

  return (
    <>
      <StatusBar style={styles.status} />
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home' screenOptions={({ route }) => {
          return {
            header: () => {
              return <Header title={route.name === 'Home' ? 'Inicio' : route.name === 'ProductsByCategory' ? route.params.selectedCategory : 'Detalle'} />
            }
          }
        }}>
          <Stack.Screen name='Home' component={Home} />
          <Stack.Screen name='ProductsByCategory' component={ProductsByCategory} />
          <Stack.Screen name='ProductDetail' component={ProductDetail} />
        </Stack.Navigator>
      </NavigationContainer>


    </>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  text: {
    fontFamily: fonts.RalewayRegular
  },
  status: {
    backgroundColor: colors.primaryBgColor
  }
})
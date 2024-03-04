import { StatusBar, StyleSheet } from 'react-native'
import { useFonts } from 'expo-font'
import fonts, { fontsCollection } from './src/utils/global/fonts'
import colors from './src/utils/global/colors'
import MainNavigation from './src/navigation/MainNavigation'
import { store } from './src/app/store'
import { Provider } from 'react-redux'

const App = () => {
  const [fontsLoaded] = useFonts(fontsCollection)

  if (!fontsLoaded) return null

  return (
    <>
      <StatusBar style={styles.status} />
      <Provider store={store}>
        <MainNavigation />
      </Provider>



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

import { StatusBar, StyleSheet } from 'react-native'
import { useFonts } from 'expo-font'
import fonts, { fontsCollection } from './src/utils/global/fonts'
import colors from './src/utils/global/colors'
import MainNavigation from './src/navigation/MainNavigation'


const App = () => {
  const [fontsLoaded] = useFonts(fontsCollection)

  if (!fontsLoaded) return null

  return (
    <>
      <StatusBar style={styles.status} />
      <MainNavigation />


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
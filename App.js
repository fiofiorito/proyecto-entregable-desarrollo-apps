import { Pressable, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import Home from './src/screens/Home'
import { useState } from 'react'
import ProductsByCategory from './src/screens/ProductsByCategory'
import { useFonts } from 'expo-font'
import fonts, { fontsCollection } from './src/utils/global/fonts'
import ProductDetail from './src/components/ProductDetail'
import colors from './src/utils/global/colors'

const App = () => {
  const [fontsLoaded] = useFonts(fontsCollection)

  const [selectedCategory, setSelectedCategory] = useState('');
  const [productId, setProductId] = useState(0)

  if (!fontsLoaded) return null

  const handleCategory = (category) => {
    setSelectedCategory(category)
  }

  const handleProductId = (id) => {
    setProductId(id)
  }

  const goBack = () => {
    if (productId) {
      setProductId(0)
      setSelectedCategory(selectedCategory)
    }
    else if (selectedCategory) {
      setSelectedCategory('')
    }

  }

  return (
    <>
      <StatusBar style={styles.status} />
      <View style={styles.container}>

        {
          selectedCategory ?
            productId ? <ProductDetail goBack={goBack} productId={productId} /> :
              <ProductsByCategory goBack={goBack} selectedCategory={selectedCategory} handleProductId={handleProductId} /> :
            <Home handleCategory={handleCategory} />
        }

      </View>

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
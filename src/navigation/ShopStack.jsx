import { StyleSheet } from 'react-native'
import Home from '../screens/Home'
import ProductsByCategory from '../screens/ProductsByCategory'
import ProductDetail from '../components/ProductDetail'
import Header from '../components/Header'
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();


const ShopStack = () => {
    return (
        <Stack.Navigator initialRouteName='Home' screenOptions={({ route, navigation }) => {
            return {
                header: () => {
                    return <Header navigation={navigation} title={route.name === 'Home' ? 'Home' : route.name === 'ProductsByCategory' ? route.params.selectedCategory : 'Product Detail'} />
                }
            }
        }}>
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='ProductsByCategory' component={ProductsByCategory} />
            <Stack.Screen name='ProductDetail' component={ProductDetail} />
        </Stack.Navigator>
    )
}

export default ShopStack

const styles = StyleSheet.create({})
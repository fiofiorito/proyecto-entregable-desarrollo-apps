import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from '../components/Header';
import Orders from '../screens/Orders';


const Stack = createNativeStackNavigator();

const OrderStack = () => {
    return (
        <Stack.Navigator
            initialRouteName='Orders'
            screenOptions={({ navigation }) => {
                return {
                    header: () => {
                        return <Header title='Tu orden' navigation={navigation} />
                    }
                }
            }}
        >
            <Stack.Screen name='orders' component={Orders} />
        </Stack.Navigator>
    )
}

export default OrderStack

// const styles = StyleSheet.create({})
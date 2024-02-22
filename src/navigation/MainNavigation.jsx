import { NavigationContainer } from '@react-navigation/native';
import ShopStack from './ShopStack';
import CartStack from './CartStack';
import OrderStack from './OrderStack';
import { StyleSheet, View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import colors from '../utils/global/colors';
import TabBarIcon from '../components/TabBarIcon';

const Tab = createBottomTabNavigator();


const MainNavigation = () => {
    return <NavigationContainer>
        <Tab.Navigator
            initialRouteName='ShopStack'
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: styles.tab,

            }}
        >
            <Tab.Screen options={{
                tabBarIcon: ({ focused }) => { return <TabBarIcon focused={focused} title='Home' /> }
            }} name='ShopStack' component={ShopStack} />
            <Tab.Screen options={{
                tabBarIcon: ({ focused }) => { return <TabBarIcon focused={focused} title='Cart' /> }
            }} name='CartStack' component={CartStack} />
            <Tab.Screen options={{
                tabBarIcon: ({ focused }) => { return <TabBarIcon focused={focused} title='Order' /> }
            }} name='OrderStack' component={OrderStack} />
        </Tab.Navigator>
    </NavigationContainer>
}

export default MainNavigation;

const styles = StyleSheet.create({
    tab: {
        backgroundColor: colors.primaryBgColor,
        color: colors.mainFontColor
    }
})
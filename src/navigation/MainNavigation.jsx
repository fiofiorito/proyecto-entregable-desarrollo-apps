import { NavigationContainer } from '@react-navigation/native';

import { StyleSheet, View, Text } from 'react-native';
import TabNavigator from './TabNavigator';
import AuthStack from './AuthStack'
import { useState } from 'react';



const MainNavigation = () => {
    const [idToken, setIdToken] = useState('')

    return <NavigationContainer>
        {idToken ? <TabNavigator /> : <AuthStack />}
    </NavigationContainer>
}

export default MainNavigation;

const styles = StyleSheet.create({

})
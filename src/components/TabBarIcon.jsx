import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../utils/global/colors'

const TabBarIcon = ({ title, focused }) => {
    return (
        <View>
            {/* AGREGAR ICONO */}
            <Text style={{ color: focused ? colors.contrastBgColor : colors.mainFontColor }}>{title}</Text>
        </View>
    )
}

export default TabBarIcon

const styles = StyleSheet.create({})
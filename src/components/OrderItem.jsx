import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const OrderItem = ({ item }) => {
    return (
        <View>
            <Text>{item.total}</Text>
        </View>
    )
}

export default OrderItem

const styles = StyleSheet.create({})
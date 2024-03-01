import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import orders from '../utils/data/orders.json'
import OrderItem from '../components/OrderItem'
import Counter from '../components/Counter'

const Orders = () => {
    return (
        <View>
            <FlatList
                data={orders}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <OrderItem item={item} />}
            />
            {/* <Counter /> */}
        </View>
    )
}

export default Orders

const styles = StyleSheet.create({})
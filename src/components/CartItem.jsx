import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteCartItem } from '../features/cart/cartSlice'

const CartItem = ({ item }) => {
    const dispatch = useDispatch()
    const cart = useSelector((state) => state.cart)
    return (
        <View>
            <Text>{item.title}</Text>
            <Text>{item.brand}</Text>
            <Text>Cantidad: {item.quantity}</Text>
            <Text>${item.price}</Text>
            <Pressable onPress={() => dispatch(deleteCartItem(item.id))}>
                <Text>Eliminar</Text>
            </Pressable>
        </View>
    )
}

export default CartItem

const styles = StyleSheet.create({})
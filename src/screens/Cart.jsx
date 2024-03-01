import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import cart from '../utils/data/cart.json'
import CartItem from '../components/CartItem'
import Counter from '../components/Counter'

const Cart = () => {
    return (
        <View style={styles.container}>
            <FlatList
                data={cart.items}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <CartItem item={item} />}
            />
            <View>
                <Pressable>
                    <Text>Confirmar</Text>
                    <Text>Total: ${cart.total}</Text>
                </Pressable>
            </View>
            {/* <Counter /> */}
        </View>
    )
}

export default Cart

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start'
    }
})
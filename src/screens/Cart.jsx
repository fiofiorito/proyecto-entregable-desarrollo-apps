import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import CartItem from '../components/CartItem'
import { useSelector } from 'react-redux'
import fonts from '../utils/global/fonts'

const Cart = () => {
    const cart = useSelector((state) => state.cart)

    return (
        <View style={styles.container}>
            <FlatList
                data={cart.items}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <CartItem item={item} />}
            />
            <View>
                <View style={styles.totalContainer}>
                    {/* <Pressable> */}
                    <Text style={styles.text}>Confirmar</Text>
                    <Text style={styles.text}>Total: ${cart.total}</Text>
                    {/* </Pressable> */}
                </View>

            </View>
        </View>
    )
}

export default Cart

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        fontFamily: fonts.RalewayReg,
        fontSize: 16
    },
    totalContainer: {
        marginHorizontal: 20,
        marginVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})
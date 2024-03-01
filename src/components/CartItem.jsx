import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteCartItem } from '../features/cart/cartSlice'
import colors from '../utils/global/colors'
import fonts from '../utils/global/fonts'

const CartItem = ({ item }) => {
    const dispatch = useDispatch()
    const cart = useSelector((state) => state.cart)
    return (
        <ScrollView>
            <View style={styles.cardContainer}>
                <View style={styles.detailsContainer}>
                    <Text style={[styles.text, styles.title]}>{item.title}</Text>
                    <Text style={[styles.text, styles.brand]}>{item.brand}</Text>
                    <View style={styles.priceContainer}>
                        <Text style={styles.text}>Cantidad: {item.quantity}</Text>
                        <Text style={styles.text}>${item.price}</Text>
                    </View>
                </View>
                <View>
                    <Pressable onPress={() => dispatch(deleteCartItem(item.id))}>
                        <Text style={styles.text}>Eliminar</Text>
                    </Pressable>
                </View>

            </View>
        </ScrollView>
    )
}

export default CartItem

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: colors.secondaryBgColor,
        margin: 16,
        padding: 16,
        borderRadius: 10,
        shadowColor: colors.shadow,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    text: {
        fontFamily: fonts.RalewayReg,
        fontSize: 16
    },
    title: {
        fontFamily: fonts.RalewayBld,
        marginBottom: 6
    },
    brand: {
        color: colors.contrastBgColor,
        fontSize: 14
    },
    detailsContainer: {
    },
    priceContainer: {
        flexDirection: 'row',
        gap: 35,
        marginTop: 6
    }
})
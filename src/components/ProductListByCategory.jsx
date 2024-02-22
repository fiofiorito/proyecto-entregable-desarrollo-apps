import { Image, Pressable, StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React from 'react'
import colors from '../utils/global/colors'
import fonts from '../utils/global/fonts'

const ProductListByCategory = ({ item, navigation }) => {
    return (
        <View style={styles.container}>
            <Pressable onPress={() => navigation.navigate('ProductDetail', { productId: item.id })} style={styles.card}>
                <Image style={styles.img} source={{ uri: item.thumbnail }} />
                <View style={styles.textCont}>
                    <Text style={styles.text}>{item.title}</Text>
                </View>
            </Pressable>
        </View>
    )
}

export default ProductListByCategory;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    card: {
        backgroundColor: colors.secondaryBgColor,
        width: '90%',
        padding: 10,
        marginVertical: 10,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
        shadowColor: colors.shadow,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    img: {
        width: '30%',
        height: '30%',
        minWidth: 50,
        minHeight: 50,
    },
    textCont: {
        width: '60%'
    },
    text: {
        fontFamily: fonts.RalewayReg
    }
})
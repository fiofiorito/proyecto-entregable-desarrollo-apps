import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import colors from '../utils/global/colors';
import fonts from '../utils/global/fonts';
import { useSelector, useDispatch } from 'react-redux'
import { addCartItem } from '../features/cart/cartSlice'
import { useGetProductQuery } from '../app/services/shop';

const ProductDetail = ({ route }) => {
    const dispatch = useDispatch()
    const cart = useSelector((state) => state.cart)

    const { productId } = route.params;
    const [productTitle, setProductTitle] = useState('');
    const [modalVisibility, setModalVisibility] = useState(false);
    const { data: product, isLoading } = useGetProductQuery(productId)

    const handleModal = (productTitle) => {
        setProductTitle(productTitle);
        setModalVisibility(!modalVisibility);
    }

    if (isLoading) return <View><Text>Loading...</Text></View>

    return (
        <View style={styles.container}>
            <View style={styles.imgBox}>
                <Image style={styles.img} source={product ? { uri: product.images ? product.images[0] : null } : null} />
            </View>
            <View style={styles.texts}>
                <Text style={styles.brand}>{product.brand}</Text>
                <Text style={styles.desc}>{product.description}</Text>
                <Text style={styles.price}>${product.price}</Text>
            </View>

            <Pressable onPress={() => dispatch(addCartItem(product))} style={styles.btn}>
                <Text style={styles.btnText}>Buy Now</Text>
            </Pressable>

            {/* <ModalBuyProduct goBack={goBack} modalVisibility={modalVisibility} productTitle={product.title} handleModal={handleModal} /> */}
        </View>
    )
}

export default ProductDetail

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 20
    },
    imgBox: {
        borderRadius: 10,
        shadowColor: colors.shadow,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    img: {
        width: 200,
        height: 200,
        borderRadius: 10,
    },
    btn: {
        backgroundColor: colors.secondaryBgColor,
        paddingVertical: 14,
        paddingHorizontal: 28,
        borderRadius: 5,
        shadowColor: colors.shadow,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    btnText: {
        fontFamily: fonts.RalewayReg,
        fontSize: 16,
        color: colors.mainFontColor
    },
    texts: {
        width: '90%',
        marginVertical: 20,
    },
    brand: {
        color: colors.shadowyTexts,
        fontFamily: fonts.RalewayReg,
        fontSize: 14,
        marginTop: 4
    },
    desc: {
        color: colors.mainFontColor,
        fontSize: 18,
        fontFamily: fonts.RalewaySmBld,
        marginVertical: 5
    },
    price: {
        fontFamily: fonts.RalewayMed,
        fontSize: 18,
        color: colors.mainFontColor,
        marginBottom: 4
    }
})
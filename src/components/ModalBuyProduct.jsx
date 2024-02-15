import { Modal, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../utils/global/colors'
import fonts from '../utils/global/fonts'

const ModalBuyProduct = ({ modalVisibility, handleModal, productTitle, goBack }) => {
    return (
        <Modal
            visible={modalVisibility}
            transparent={true}
            animationType='slide'
            onRequestClose={() => { handleModal('') }}
        >
            <View style={styles.container}>
                <View style={styles.modalBox}>
                    <Text style={[styles.text, styles.modalTitle]}>Your purchase of {productTitle} was successful!</Text>
                    <Pressable onPress={goBack}>
                        <View style={styles.modalBtnContainer}>
                            <Text style={[styles.text, styles.modalBtn]}>Go back</Text>
                        </View>
                    </Pressable>
                </View>
            </View>
        </Modal>
    )
}

export default ModalBuyProduct

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primaryBgColor,
        // opacity: 0.9,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalBox: {
        opacity: 1,
        backgroundColor: colors.secondaryBgColor,
        paddingHorizontal: 20,
        paddingVertical: 30,
        alignItems: 'center',
        gap: 25,
        borderRadius: 16,
        shadowColor: colors.shadow,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        width: '80%'
    },
    text: {
        fontFamily: fonts.RalewayReg,
        fontSize: 16,
        color: colors.mainFontColor
    },
    modalTitle: {
        fontFamily: fonts.RalewayMed
    },
    modalBtnContainer: {
        borderRadius: 8,
        backgroundColor: colors.contrastBgColor,
    },
    modalBtn: {
        padding: 10,
        color: colors.contrastFontColor
    }
})
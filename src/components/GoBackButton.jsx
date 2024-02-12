import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import fonts from '../utils/global/fonts'
import colors from '../utils/global/colors'

const GoBackButton = ({ goBack }) => {
    return (
        <View style={styles.container}>
            <Pressable style={styles.btn} onPress={goBack}>
                <Text style={styles.btnTxt}>Go back</Text>
            </Pressable>
        </View>
    )
}

export default GoBackButton

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    btn: {
        backgroundColor: colors.primaryBgColor,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,
        margin: 30,
        shadowColor: colors.shadow,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
    },
    btnTxt: {
        fontFamily: fonts.RalewayReg,
        color: colors.mainFontColor
    }
})
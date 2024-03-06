import { StyleSheet, Text, Pressable } from 'react-native'
import React from 'react'
import colors from '../utils/global/colors'
import fonts from '../utils/global/fonts'

const SumbitButton = ({ onPress, title }) => {
    return (
        <Pressable style={styles.btn} onPress={onPress}>
            <Text style={styles.txt}>{title}</Text>
        </Pressable>
    )
}

export default SumbitButton

const styles = StyleSheet.create({
    btn: {
        alignItems: 'center',
        backgroundColor: colors.secondaryBgColor,
        paddingVertical: 8,
        borderRadius: 8
    },
    txt: {
        fontFamily: fonts.RalewayMed,
        fontSize: 16,
        color: colors.contrastBgColor
    }
})
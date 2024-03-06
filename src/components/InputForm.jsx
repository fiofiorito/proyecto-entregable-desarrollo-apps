import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import colors from '../utils/global/colors'
import fonts from '../utils/global/fonts'

const InputForm = ({ label, value, onChangeText, isSecure, error }) => {
    return (
        <View>
            <Text style={styles.txt}>{label}</Text>
            <View style={styles.inputContainer}>
                <TextInput style={styles.txt} value={value} onChangeText={onChangeText} secureTextEntry={isSecure} />
            </View>
            {error ? <View><Text style={styles.error}>{error}</Text></View> : null}
        </View>
    )
}

export default InputForm

const styles = StyleSheet.create({
    inputContainer: {
        paddingVertical: 12,
        paddingHorizontal: 6,
        borderWidth: 1,
        borderBlockColor: colors.contrastBgColor,
        borderRadius: 8,
    },
    txt: {
        fontFamily: fonts.RalewayReg
    },
    error: {
        color: 'red',
        marginTop: 2,
        fontFamily: fonts.RalewayReg
    }
})
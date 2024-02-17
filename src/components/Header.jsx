import { SafeAreaView, StyleSheet, Text } from 'react-native'
import colors from '../utils/global/colors'
import fonts from '../utils/global/fonts'

const Header = ({ title = 'Ecommerce' }) => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>{title}</Text>
        </SafeAreaView>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.contrastBgColor,
        height: 80,
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',

    },
    text: {
        fontSize: 20,
        padding: 10,
        fontFamily: fonts.RalewaySmBld,
        color: colors.contrastFontColor,
        textTransform: 'capitalize'
    }
})
import { StyleSheet, Text, View } from 'react-native'
import colors from '../utils/global/colors'
import fonts from '../utils/global/fonts'

const Header = ({ title }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{title}</Text>
        </View>
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
        marginBottom: 20
    },
    text: {
        fontSize: 20,
        padding: 10,
        fontFamily: fonts.RalewaySmBld,
        color: colors.contrastFontColor,
        textTransform: 'capitalize'
    }
})
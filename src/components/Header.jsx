import { Pressable, SafeAreaView, StyleSheet, Text } from 'react-native'
import colors from '../utils/global/colors'
import fonts from '../utils/global/fonts'
import { AntDesign } from '@expo/vector-icons'

const Header = ({ title = 'Ecommerce', navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            {
                navigation.canGoBack() &&
                <Pressable style={styles.btn} onPress={() => navigation.goBack()}>
                    <AntDesign name='left' size={20} color={colors.contrastFontColor} />
                </Pressable>
            }
            <Text style={styles.text}>{title}</Text>
        </SafeAreaView>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.contrastBgColor,
        height: 90,
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
    },
    btn: {
        position: 'absolute',
        left: 10,
        bottom: 10

    }
})
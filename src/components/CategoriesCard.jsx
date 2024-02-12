import { Pressable, StyleSheet, Text, View } from 'react-native'
import colors from '../utils/global/colors'
import fonts from '../utils/global/fonts'

const CategoriesCard = ({ item, handleCategory }) => {
    return (
        <Pressable style={styles.pressCont} onPress={() => handleCategory(item)}>
            <View style={styles.container}>
                <Text style={styles.text}>{item}</Text>
            </View>
        </Pressable>
    )
}

export default CategoriesCard

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.secondaryBgColor,
        marginVertical: 10,
        paddingHorizontal: 16,
        paddingVertical: 20,
        borderRadius: 10,
        shadowColor: colors.shadow,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    text: {
        color: '#000000',
        fontSize: 16,
        fontFamily: fonts.RalewayReg,
        textTransform: 'capitalize'
    }
})
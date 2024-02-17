import { Image, StyleSheet, Text, View } from 'react-native'
import Categories from '../components/Categories';
import fonts from '../utils/global/fonts';

const Home = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <View style={styles.container2}>
                <View style={styles.hero}>
                    <View>
                        <Text style={styles.title} >Welcome back!</Text>
                        <Text style={styles.heroText}>Need a coffee?</Text>
                        <Text style={styles.heroText}>We are happy to have you here!</Text>
                    </View>
                    <Image style={styles.img} source={require('../images/coffee.png')} />
                </View>
                <Categories navigation={navigation} />
            </View>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    container2: {
        width: '90%',
    },
    hero: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        gap: 40
    },
    title: {
        fontSize: 20,
        fontFamily: fonts.RalewayBld,
        paddingVertical: 20
    },
    heroText: {
        fontFamily: fonts.RalewayReg,
        fontSize: 16,
        marginBottom: 2
    },
    img: {
        width: 120,
        height: 120,
        marginTop: 30,
        marginBottom: 10
    }
})
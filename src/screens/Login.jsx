import { Pressable, StyleSheet, Text, View } from 'react-native'
import { useState } from 'react'
import colors from '../utils/global/colors'
import InputForm from '../components/InputForm'
import SumbitButton from '../components/SumbitButton'
import fonts from '../utils/global/fonts'

const Login = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onSumbit = () => {
        console.log('se envio')
        setEmail('')
        setPassword('')
    }
    return (
        <View style={styles.main}>
            <Text style={styles.title}>Login to start</Text>
            <View style={styles.container}>

                <InputForm
                    label='Email'
                    value={email}
                    onChangeText={(t) => setEmail(t)}
                    isSecure={false}
                    error=''
                />
                <InputForm
                    label='Password'
                    value={password}
                    onChangeText={(t) => setPassword(t)}
                    isSecure={true}
                    error=''
                />
                <SumbitButton onPress={onSumbit} title='Log in' />
            </View>
            <View>
                <Text style={styles.smTxt}>Dont have an account?</Text>
                <Pressable onPress={() => navigation.navigate('Register')}>
                    <Text style={[styles.smTxt, styles.underline]}>Sign up</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        width: '90%',
        backgroundColor: colors.primaryBgColor,
        gap: 15,
        padding: 20,
        borderRadius: 16,
        marginVertical: 16,
        shadowColor: colors.shadow,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    title: {
        fontFamily: fonts.RalewayBld,
        fontSize: 20
    },
    smTxt: {
        textAlign: 'center',
        marginBottom: 4,
        fontFamily: fonts.RalewayReg
    },
    underline: {
        textDecorationLine: 'underline'
    }
})
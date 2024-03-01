import { Button, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import fonts from '../utils/global/fonts'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementByAmount } from '../features/counter/counterSlice'


const Counter = () => {
    const dispatch = useDispatch()
    const count = useSelector((state) => state.counter.value)
    const [number, setNumber] = useState(0)

    return (
        <View style={styles.container}>
            <Pressable onPress={() => dispatch(decrement())}>
                <Text style={styles.text}>menos</Text>
            </Pressable>
            <Text style={styles.text}>{count}</Text>
            <Pressable onPress={() => dispatch(increment())}>
                <Text style={styles.text}>mas</Text>
            </Pressable>
            <TextInput onChangeText={(t) => setNumber(parseInt(t))} />
            <Button title='monto' onPress={() => dispatch(incrementByAmount(number))} />
        </View>
    )
}

export default Counter

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        gap: 30,
        margin: 10,
        paddingVertical: 10,
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#000'
    },
    text: {
        fontFamily: fonts.RalewayReg,
        fontSize: 18
    }
})
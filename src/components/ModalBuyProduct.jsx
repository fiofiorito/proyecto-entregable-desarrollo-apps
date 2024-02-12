import { Modal, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ModalBuyProduct = ({ modalVisibility }) => {
    return (
        <Modal
            visible={modalVisibility}
            transparent={true}
            animationType='slide'
            onRequestClose={() => { }}
        >
            <View>
                <Text>Your purchase was successful!</Text>
                <Pressable>
                    <Text>Go back</Text>
                </Pressable>
            </View>
        </Modal>
    )
}

export default ModalBuyProduct

const styles = StyleSheet.create({})
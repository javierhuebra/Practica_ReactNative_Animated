import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Animated, Pressable } from "react-native";

const Animacion1 = () => {

    const [animacion] = useState(new Animated.Value(0)) //para animaciones se planta un state pero con una sola variable porque la fc que modifica no hace falta, animated lo modifica ya



    const fadeIn = () => {
        Animated.timing(
            animacion, {
            toValue: 1, //valor al que llega
            duration: 500, //cantidad de tiempo en llegar
            useNativeDriver: true
        }
        ).start() //inicia la animacion el metodo start()
    }

    const fadeOut = () => {
        Animated.timing(
            animacion, {
            toValue: 0, //valor al que llega
            duration: 500, //cantidad de tiempo en llegar
            useNativeDriver: true
        }
        ).start() //inicia la animacion el metodo start()
    }



    useEffect(() => {
        /*    Animated.timing(
               animacion, {
                   toValue: 1, //valor al que llega
                   duration: 500, //cantidad de tiempo en llegar
                   useNativeDriver: true
               }
           ).start() //inicia la animacion el metodo start() */

        fadeIn()
    }, [])


    return (
        <>
            <Animated.View
                style={{ opacity: animacion }}
            >
                <Text style={styles.texto}>Animacion #1 - Timing</Text>
            </Animated.View>
            <View style={styles.btnContainer}>
                <Pressable
                    style={styles.btn}
                    onPress={() => fadeIn()}
                >
                    <Text style={styles.texto}>Fade IN</Text>
                </Pressable>
                <Pressable
                    style={styles.btn}
                    onPress={() => fadeOut()}
                >
                    <Text style={styles.texto}>Fade OUT</Text>
                </Pressable>
            </View>
        </>
    )
}

export default Animacion1

const styles = StyleSheet.create({
    texto: {
        color: 'white',
        fontSize: 30,
        textAlign: 'center'
    },
    btn: {
        backgroundColor: 'blue',
        marginHorizontal: '25%',
        marginBottom: 5

    },
    btnContainer:{
        marginBottom: 30
    }

});
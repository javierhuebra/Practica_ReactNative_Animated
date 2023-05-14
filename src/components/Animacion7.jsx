import React, { useEffect, useState } from "react";

import { StyleSheet, View, Animated, Text, Pressable } from 'react-native'

const Animacion7 = () => {

    const [animacion1] = useState(new Animated.Value(0))
    const [animacion2] = useState(new Animated.Value(1))

    const resetear = () => {
        animacion1.setValue(0)
        animacion2.setValue(1)

    }





    const empezar = () => {
        Animated.sequence([  //ACA PUEDO USAR .parallel para hacer todas las animaciones al mismo tiempo
            Animated.timing(animacion1, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: false
            }),
            Animated.spring(animacion2, {
                toValue: 4,
                friction: 1,
                tension: 30,
                useNativeDriver: false
            }),

        ]).start()
    }

    useEffect(() => {
        empezar()
    }, [])

    const estiloAnimacion = {
        transform: [

            { scale: animacion2 }
        ],
        opacity: animacion1
    }



    return (
        <View style={styles.cont}>
            <Animated.View
                style={[styles.caja, estiloAnimacion]}
            >

            </Animated.View>

            <Pressable onPress={() => resetear()}>
                <Text>Reset Animation</Text>
            </Pressable>
            <Pressable onPress={() => empezar()}>
                <Text>Start Animation</Text>
            </Pressable>

        </View>
    )
}

const styles = StyleSheet.create({
    caja: {
        width: 100,
        height: 100,
        backgroundColor: 'purple'
    },
    cont: {
        backgroundColor: '#FFF',
        height: 500,
        justifyContent: 'center',
        alignItems: 'center'
    }

})

export default Animacion7
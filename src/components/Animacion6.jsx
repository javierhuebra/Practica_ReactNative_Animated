import React, { useEffect, useState } from "react";

import { StyleSheet, View, Animated, Text, Pressable } from 'react-native'

const Animacion6 = () => {

    const [animacion1] = useState(new Animated.Value(0))
    const [animacion2] = useState(new Animated.Value(0))

    

    const animar = () => {
        Animated.loop(                               //al englobar la secuencia en Animated.loop() hago que la secuencia se repita infinitamente
            Animated.sequence([                     //dentro de este arreglo todo lo que coloque se va ejecutando en secuencia
                Animated.timing(animacion2, {
                    toValue: 180,
                    duration: 500,
                    useNativeDriver: false
                }),
                Animated.timing(animacion1, {
                    toValue: 80,
                    duration: 500,
                    useNativeDriver: false
                }),
                Animated.timing(animacion2, {
                    toValue: 0,
                    duration: 500,
                    useNativeDriver: false
                }),
                Animated.timing(animacion1, {
                    toValue: 0,
                    duration: 500,
                    useNativeDriver: false
                }),
            ])
        ).start()
    }

    useEffect(() => {
        animar()
    }, [])


    const estiloAnimacion = {
        transform: [
            { translateY: animacion1 },
            { translateX: animacion2 }
        ]
    }


    return (
        <>
            <View style={styles.area}>
                <Text style={styles.texto}>Animacion  6# - Sequence</Text>
                <View style={styles.area2}>
                    <Animated.View style={[styles.caja, estiloAnimacion]}>

                    </Animated.View>
                </View>


            </View>

            <View style={styles.btnContainer}>
                <Pressable
                    style={styles.btn}
                    onPress={() => animar()}
                >
                    <Text style={[styles.texto,styles.blanco ]}>Correr</Text>
                </Pressable>
                
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    area: {
        backgroundColor: 'violet',

        alignItems: 'center',
        marginHorizontal: 10,
        height: 150,
        
    },
    area2: {
        width: 200,
        height: 100,
        backgroundColor: '#FFF',
        
    },
    caja: {
        height: 20,
        width: 20,
        backgroundColor: 'green'
    },

    texto: {
        textAlign: 'center',
        color: '#000',
        fontSize: 30
    },
    btn: {
        backgroundColor: 'blue',
        marginHorizontal: '25%',
        marginBottom: 5,
        

    },
    btnContainer:{
        marginBottom: 30
    },
    blanco:{
        color: '#FFF'
    }

})

export default Animacion6
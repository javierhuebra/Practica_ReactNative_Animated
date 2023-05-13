import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Animated, Pressable } from "react-native";

const Animacion4 = () => {

    const [animacion] = useState(new Animated.Value(0)) //para animaciones se planta un state pero con una sola variable porque la fc que modifica no hace falta, animated lo modifica ya


    const giroHorario = () => {
        Animated.timing(
            animacion, {
            toValue: 360, //valor al que llega
            duration: 1500, //cantidad de tiempo en llegar
            useNativeDriver: true
        }
        ).start(({finished}) => console.log(finished)) //inicia la animacion el metodo start() EN ESTE CALLBACK PUEDO EJECUTAR UNA FUNCION CUANDO TERMINA LA ANIMACION :) finished en true me marca que termino bien la animacion, en false fue interrumpida
        console.log("giro horario")
    }

    const giroAntiHorario = () => {
        Animated.timing(
            animacion, {
            toValue: 0, //valor al que llega
            duration: 1500, //cantidad de tiempo en llegar
            useNativeDriver: true
        }
        ).start() //inicia la animacion el metodo start()
        console.log("giro anti horario")
    }


    const interpolacion = animacion.interpolate({ //Esto seria como una caja negra que trasnforma los numeros en grados
        inputRange: [0, 360],
        outputRange: ['0deg', '360deg']
    })

    const estiloAnimacion = {
        transform: [{rotate: interpolacion}] //aca se utiliza la salida de interpolacion
    }

    useEffect(() => {
        giroHorario()
        
    }, [])


    return (
        <>
            <View style={styles.area}>
                <Text style={styles.texto}>Animacion #4 - Interpolate</Text>
                <Animated.View
                    style={[styles.caja, estiloAnimacion]}
                >

                </Animated.View>
            </View>
            <View style={styles.btnContainer}>
                <Pressable
                    style={styles.btn}
                    onPress={() => giroHorario()}
                >
                    <Text style={styles.texto}>Giro Horario</Text>
                </Pressable>
                <Pressable
                    style={styles.btn}
                    onPress={() => giroAntiHorario()}
                >
                    <Text style={styles.texto}>Anti Horario</Text>
                </Pressable>
            </View>
        </>
    )
}

export default Animacion4

const styles = StyleSheet.create({
    texto: {
        color: 'white',
        fontSize: 30,
        textAlign: 'center',
        
    },
    caja:{
        width: 100,
        height: 100,
        backgroundColor: '#FFF',
        marginBottom: 10
    },
    
    area: {
        
        backgroundColor: 'green',
        marginHorizontal: 10,
        justifyContent:'flex-start',
        alignItems:'center',
        
    },
   
    btn: {
        backgroundColor: 'blue',
        marginHorizontal: '25%',
        marginBottom: 5,
        

    },
    btnContainer:{
        marginBottom: 30
    }

});
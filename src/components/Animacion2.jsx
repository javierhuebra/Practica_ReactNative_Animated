import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Animated, Pressable } from "react-native";

const Animacion2 = () => {

    const [animacion] = useState(new Animated.Value(30)) //para animaciones se planta un state pero con una sola variable porque la fc que modifica no hace falta, animated lo modifica ya


    const agrandar = () => {
        Animated.timing(
            animacion, {
            toValue: 200, //valor al que llega
            duration: 500, //cantidad de tiempo en llegar
            useNativeDriver: false
        }
        ).start() //inicia la animacion el metodo start()
    }

    const achicar = () => {
        Animated.timing(
            animacion, {
            toValue: 30, //valor al que llega
            duration: 500, //cantidad de tiempo en llegar
            useNativeDriver: false
        }
        ).start() //inicia la animacion el metodo start()
    }



    useEffect(() => {
        agrandar()
        
    }, [])


    return (
        <>
            <View style={styles.area}>
                <Text style={styles.texto}>Animacion #2 - Timing</Text>
                <Animated.View style={[
                    styles.caja,
                    {
                        width: animacion,
                        height: animacion
                    }
                ]}>

                </Animated.View>
            </View>
            <View style={styles.btnContainer}>
                <Pressable
                    style={styles.btn}
                    onPress={() => agrandar()}
                >
                    <Text style={styles.texto}>Agrandar</Text>
                </Pressable>
                <Pressable
                    style={styles.btn}
                    onPress={() => achicar()}
                >
                    <Text style={styles.texto}>Achicar</Text>
                </Pressable>
            </View>
        </>
    )
}

export default Animacion2

const styles = StyleSheet.create({
    texto: {
        color: 'white',
        fontSize: 30,
        textAlign: 'center',
        
    },
    area: {
        
        backgroundColor: 'red',
        marginHorizontal: 10,
        justifyContent:'flex-start',
        alignItems:'center',
        
    },
    caja: {
        width: 50,
        height: 50,
        backgroundColor: '#FFF',
        borderRadius:20,
        marginBottom: 5
        
        
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
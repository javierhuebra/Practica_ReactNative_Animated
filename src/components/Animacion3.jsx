import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Animated, Pressable } from "react-native";

const Animacion3 = () => {

    const [animacion] = useState(new Animated.Value(14)) //para animaciones se planta un state pero con una sola variable porque la fc que modifica no hace falta, animated lo modifica ya


    const agrandar = () => {
        Animated.timing(
            animacion, {
            toValue: 40, //valor al que llega
            duration: 500, //cantidad de tiempo en llegar
            useNativeDriver: false
        }
        ).start() //inicia la animacion el metodo start()
    }

    const achicar = () => {
        Animated.timing(
            animacion, {
            toValue: 14, //valor al que llega
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
                <Text style={styles.texto}>Animacion #3 - Timing</Text>
                <Animated.Text 
                style={[
                    styles.cambioColor,
                    {fontSize: animacion}
                    ]}>
                        Aumenta la fuente</Animated.Text>
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

export default Animacion3

const styles = StyleSheet.create({
    texto: {
        color: 'white',
        fontSize: 30,
        textAlign: 'center',
        
    },
    cambioColor:{
        color: '#000'
    },
    area: {
        
        backgroundColor: 'yellowgreen',
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
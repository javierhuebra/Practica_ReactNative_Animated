import Reac, { useState } from "react";

import { StyleSheet, View, Text, TouchableWithoutFeedback, Animated } from 'react-native'

const Animacion5 = () => {

    const [ animacion ] = useState( new Animated.Value(1))

    const presionarBoton = () => {
        Animated.spring( animacion, {
            toValue: .8 ,//se le pasa el valor pero no se le pasa duration porque se encarga spring
            useNativeDriver: false,
        }).start()
    }

    const soltarBoton = () => {
        Animated.spring( animacion, {
            toValue: 1 ,//se le pasa el valor pero no se le pasa duration porque se encarga spring
            friction: 1, //Mas bajo mas grande es el rebote
            tension: 100, //Mas bajo menor tension
            useNativeDriver: false
        }).start()
    }


    const estiloAnimacion = {
        transform: [{scale: animacion}]
    }

    return (
        <View style={styles.area}>
            <Text style={styles.texto}>Animacion #5 - Spring</Text>

            <TouchableWithoutFeedback
                onPressIn={() => presionarBoton()}
                onPressOut={() => soltarBoton()}
            >
                <Animated.View style={[styles.btn, estiloAnimacion]}>
                    <Text style={[styles.texto, styles.btnText]}>Iniciar Sesión</Text>
                </Animated.View>
            </TouchableWithoutFeedback>


        </View>
    )
}

const styles = StyleSheet.create({
    area: {
        backgroundColor: 'yellow',
        justifyContent:'center',
        alignItems: 'center',
        marginHorizontal: 10
    },

    texto: {
        textAlign: 'center',
        color: '#000',
        fontSize: 30
    },
    btn: {
        backgroundColor: 'cornflowerblue',
        width: 280,
        height: 80,
        justifyContent:'center',
        margin: 10
    },
    btnText:{
        color: '#FFF',
        fontWeight: 'bold',
        textTransform: 'uppercase'
    }
})

export default Animacion5
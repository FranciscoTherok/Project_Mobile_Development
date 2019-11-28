import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';

const ComponentScreen = () => {

    const myName = 'By:';
    const nama = <Text>Therok Francisco Agung</Text>;

    return (
        <View style={styles.tentangAplikasiLayout}>
            <View style={styles.column}>
                <Image 
                    style={{width: 400, height: 400}}
                    source={require('../assets/logo_Bengkel.jpg')}
                />
            </View>
            <View style={styles.column}>
                <Text style={styles.textStyle}> 
                    Project Final Mobile Programming
                </Text>
                <Text style={styles.textStyle2}>
                    {myName}
                </Text>
                {nama}

            </View>
        </View> 
    );
};

const styles = StyleSheet.create({
    tentangAplikasiLayout: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    column: {
        flex: 1,
        width: "100%",
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textStyle: {
        fontSize: 26,
        color: 'green'
    },
    textStyle2: {
        fontSize: 24,
        color: 'black'
    }
});

export default ComponentScreen;



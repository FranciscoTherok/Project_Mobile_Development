import React from 'react';
import { View, Text, Button, ImageBackground, StyleSheet, TouchableOpacity, Image} from 'react-native';

const HomeScreen = ({ navigation }) => {
    
    return (
        <ImageBackground source={require('../assets/image_background.jpg')} style={{width: "100%", height: "100%"}}>
        <View style={styles.homeLayout}> 
          <View style={styles.column}>
            <TouchableOpacity style={[styles.buttonContainer, styles.MobilButton]} onPress={() => navigation.navigate('Mobil')}>
              <Text style={styles.textCentered}>Bengkel Mobil</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={[styles.buttonContainer, styles.MotorButton]} onPress={() => navigation.navigate('Motor')}>
              <Text style={styles.textCentered}>Bengkel Motor</Text>
            </TouchableOpacity>
          </View>
  
          <View style={styles.column}>
            <TouchableOpacity style={[styles.buttonContainer, styles.buttonButton]} onPress={() => navigation.navigate('TentangAplikasi')}>
              <Text style={styles.textCentered}>Tentang Aplikasi</Text>
            </TouchableOpacity>
          </View>
        </View>
        </ImageBackground>
        
    );
};
const resizeMode = 'center';

const styles = StyleSheet.create({
    homeLayout: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    },
    column: {
      flex: 1,
      width: 100,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonContainer: {
      height:150,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 50,
      marginHorizontal: 10,
      marginBottom:50,
      width:150,
      borderRadius:100,
    },
    MotorButton: {
      backgroundColor: "#FFD700",
        justifyContent: 'center',
        alignItems: 'center',
      shadowColor: "#0000FF",
      shadowOffset: {
        width: 0,
        height: 9,
      },
      
      shadowOpacity: 0.50,
      shadowRadius: 12.35,
  
      elevation: 19,
    },
    MobilButton: {
        backgroundColor: "#964B00",
          justifyContent: 'center',
          alignItems: 'center',
        shadowColor: "#FF007F",
        shadowOffset: {
          width: 0,
          height: 9,
        },
        
        shadowOpacity: 0.50,
        shadowRadius: 12.35,
    
        elevation: 19,
      },
      buttonButton: {
        backgroundColor: "#778899",
          justifyContent: 'center',
          alignItems: 'center',
        shadowColor: "#FF007F",
        shadowOffset: {
          width: 0,
          height: 9,
        },
        
        shadowOpacity: 0.50,
        shadowRadius: 12.35,
    
        elevation: 19,
      },
      
  }); 

export default HomeScreen;
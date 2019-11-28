import React from 'react';
import { View, Text, Button,  StyleSheet} from 'react-native';

class Thanks extends React.Component {
  
    constructor(props) {
        super(props);

      }

    render() {
        return (
        
        <View style={{alignItems: 'center',flex: 1,flexDirection : "row"}}> 
            <Text style={{fontSize:30,color: '#000000',textAlign:'center'}}>Selamat Anda Telah Memesan Barang !!! Semoga Bermanfaat.</Text>        
        </View>
     
        
       );
    }
}


export default Thanks;
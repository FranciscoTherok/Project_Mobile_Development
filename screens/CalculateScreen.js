import React from 'react';
import { View, Text, Button,  StyleSheet} from 'react-native';

class CalculateScreen extends React.Component {
  
    constructor(props) {
        super(props);

      }

    render() {
        return (
        
        <View> 
            <Text>harga Barang : Rp.{this.props.navigation.getParam('Harga')}/jumlah barang</Text>
            <Text>-------------------------------------------------------------------------------</Text>
            <Text>-------------------------------------------------------------------------------</Text>
            <Text>-------------------------------------------------------------------------------</Text>
            <Text >total harga berapa banyak yang di ambil : Rp{this.props.navigation.getParam('Harga') * 3}</Text>  
            <Button title="BELI" onPress={() => this.props.navigation.navigate('trims')}/>
  
            
        </View>
     
        
       );
    }
}


export default CalculateScreen;
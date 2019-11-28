import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
  Dimensions
} from 'react-native';

var {height, width} = Dimensions.get('window');

export default class Menu extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        {nama:"Velg", harga:  5000000,    color:"#FF4500", image:"https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//91/MTA-2278260/jf-luxury_jf-luxury-pallas-ring-17x7-5-pcd-5x100-paket-velg-dan-ban-mobil--pasang-di-tempat-_full03.jpg"},
        {nama:"Knalpot", harga: 3500000,      color:"#87CEEB", image:"https://s3.bukalapak.com/img/8557955791/w-300/Full_Set_ORD_Exhaust_Jazz_Mobilio.jpg.webp"},
        {nama:"Setir", harga:  800000,      color:"#4682B4", image:"http://www.elevopst.com/assets/db/products/479_photo_media.jpg"} ,
        {nama:"Head Lamp", harga:  750000 ,     color:"#6A5ACD", image:"https://tokoonline88.com/wp-content/uploads/2019/09/42768739_760136980993573_8722653512327759690_n.jpg.webp"} ,
        {nama:"Jok",harga: 1500000 ,   color:"#FF69B4", image:"https://sr20.driftworks.com/forum/attachments/29716036_2052684244984038_8858566778976993280_n-jpg.275412/"} ,
        {nama:"Indikator", harga:  500000,    color:"#00BFFF", image:"https://doktermobil.com/wp-content/uploads/2016/10/indicator-greedy-2-1.jpg"} ,
        {nama:"Ban", harga: 400.000,    color:"#00FFFF", image:"https://dapurotomotif.com/wp-content/uploads/2016/08/Daftar-Harga-Ban-Mobil-Terbaru-Lengkap-Semua-Merk-1.jpg"} ,
      ]
    };
  }

  clickEventListener(item) {
    this.props.navigation.navigate('Calculate',{Harga: item.harga})
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList style={styles.list}
          contentContainerStyle={styles.listContainer}
          data={this.state.data}
          horizontal={false}
          keyExtractor= {(item) => {
            return item.nama;
          }}
          renderItem={({item}) => {
            return (
              <TouchableOpacity style={[styles.card, {backgroundColor:item.color}]} onPress={() => {this.clickEventListener(item)}}>
                <Image style={styles.cardImage} source={{uri:item.image}}/>
                <Text style={styles.title}>{item.nama}</Text>
                <Text>{item.jarak}</Text>
              </TouchableOpacity>
            )
          }}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:20,
  },
  list: {
    //paddingHorizontal: 5,
    backgroundColor:"#E6E6E6",
  },

  /******** card **************/
  card:{
    width: width,
    height:150,
    flexDirection:'row',
    padding:20,

    justifyContent: 'center', 
    alignItems: 'center' 
  },
  cardImage:{
    height: 70,
    width: 70,
  },
  title:{
    fontSize:20,
    flex:1,
    color:"#FFFFFF",
    fontWeight:'bold',
    marginLeft:40
  },
  subTitle:{
    fontSize:12,
    flex:1,
    color:"#FFFFFF",
  },
  khusus:{
    fontSize:4,
    color:"#FFFFFF",
  },
  icon:{
    height: 20,
    width: 20, 
  }
});     
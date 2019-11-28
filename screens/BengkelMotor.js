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
        {nama:"Ban Motor", harga: 350000,      color:"#FF4500", image:"https://s2.bukalapak.com/img/70418493101/w-300/Ban_Luar_FDR_Tubeless_Racing_Sport_MP76_90_80_Ring_17_Ban_De.png.webp"},
        {nama:"Velg Motor", harga: 2000000,     color:"#FFC0CB", image:"https://www.otoinfo.id/wp-content/uploads/2019/08/velg-forged-RCB-siap-Bersain-dengan-OZ-dan-Marchesini-696x421.jpg"},
        {nama:"Lampu Utama", harga: 200000,     color:"#4682B4", image:"https://s3.bukalapak.com/img/3168336901/w-300/Projector_AES_HID___Lampu_Projie_Ninja_250_FI.jpeg.webp"} ,
        {nama:"Knalpot", harga: 75000,   color:"#6A5ACD", image:"https://scontent-frx5-1.cdninstagram.com/v/t51.2885-15/e35/s480x480/69667594_238691387101050_4128244545100855337_n.jpg?_nc_ht=scontent-frx5-1.cdninstagram.com&_nc_cat=106&oh=677bb3b43b059002164750cbe4287920&oe=5E72409B&ig_cache_key=MjE4NDgwNTAxMDgyMTQ5MDI1Mw%3D%3D.2"} ,
        {nama:"Jok",harga: 50000,   color:"#000000", image:"https://www.mbtech.info/wp-content/uploads/2019/02/FB-W175-MBtech-Inspiration-4.jpg"} ,
        {nama:"Karburator",  harga: 1200000,   color:"#00BFFF", image:"http://www.sudco.com/images/PWK_38.png"} ,
        {nama:"Oli", harga: 60000,   color:"#FFD700", image:"https://www.otomaniac.com/wp-content/uploads/2019/03/Daftar-Harga-Oli-Motul-Terbaru-dan-Terlengkap-min.jpg"} ,
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
  icon:{
    height: 20,
    width: 20, 
  }
});     
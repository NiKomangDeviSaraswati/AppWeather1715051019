import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight } from 'react-native';
import Header from "./Header";
import Footer from "./Footer";

export default class Cuaca1 extends React.Component {
constructor(props) {
    super(props);
    this.state = {
      city: '',
      forecast: {
        main: '',
        description: '',
        temp: 0,

      }
    };
  }
getWeather= () => {
  let url =
    "http://api.openweathermap.org/data/2.5/weather?q=" +this.state.city +"&appid=d569c0b5743a2739a2bd8fad901cbfad&units=metric";
  fetch(url)
  .then((response) => response.json())
  .then((responseJson) => {
    console.log(responseJson);
    this.setState({
      forecast : {
        main: responseJson.weather[0].main,
        description: responseJson.weather[0].description,
        temp: responseJson.main.temp,
      }
    });
  }
  );

}
  render() {
    return (
    <View style={styles.container}>
       <Header judul={"Prakiraan Cuaca"}/>
       <View style={styles.box1}>
         <Text style={styles.textKota}> Masukan Nama Kota</Text>
         <TextInput
                style={styles.textInput}
                onChangeText={(city) => this.setState({ city })}
            />
            <TouchableHighlight
            underlayColor={'#fff'}

             style={styles.buttonStyle}
                 onPress={() => this.getWeather()}
            >
             <Text>Cari</Text>
            </TouchableHighlight>
       </View>
       <View style={styles.box2}>
        <View style={styles.boxHasil}>
          <Text> City : {this.state.city} </Text>
        </View>
        <View style={styles.boxHasil}>
          <Text> Suhu : { this.state.forecast.temp} </Text>
        </View>
      </View>
      <View style={styles.box2}>
        <View style={styles.boxHasil}>
          <Text> Cuaca : { this.state.forecast.main} </Text>
        </View>
        <View style={styles.boxHasil}>
          <Text> Deskripsi : { this.state.forecast.description} </Text>
        </View>
      </View>
            <Footer judul={"Copyright @deviSaraswati"} />

    </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
      flex:1,
      backgroundColor: '#FFCCCC',
      flexDirection: 'column'
  },
  buttonStyle:{
      width: 150,
      alignItems:'center',
      justifyContent: 'center',
      backgroundColor: '#FFCCCC',
      height: 40,
      margin: 20,
  },
  box1:{
      flex:0.6,
      padding: 20,
      backgroundColor: '#FF0066',
    margin : 20,
      flexDirection :"column",
      alignItems: 'center',
  },
  box2: {
    flex:0.3,
    backgroundColor: '#FF0066',
    marginLeft: 20,
    marginRight: 20,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'column',
  },
  textInput: {
    borderWidth: 1,
    margin: 20,
    width: 200,
    paddingLeft: 15,
  },
  boxHasil: {
    width: 200,
    height: 30,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    paddingRight: 20,
  },

});
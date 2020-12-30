import React, { useState,useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import { Text, View, StyleSheet,TextInput,TouchableOpacity,ImageBackground,SafeAreaView,FlatList} from 'react-native';


export default function main ({navigation}) {
    const url="https://covid-19-data.p.rapidapi.com/totals";
    const [loading,setLoading]=useState(true);
    const [name,setName]=useState([]);

    useEffect(()=>{
      fetch(url,{
       method: 'GET',
       headers: {
        "x-rapidapi-key": "e6ec4d9cc8msh8f02556e9228049p15eca5jsn557448124a65",
        "x-rapidapi-host": "covid-19-data.p.rapidapi.com"
       }, 
      }).then((response)=> response.json())
      .then((json)=> setName(json))
      .catch((error)=> alert(error))
      .finally(()=> setLoading(false))
    },[]);
    
    return ( 
      <ImageBackground style={styles.container}  source={require("../assets/images/covid.jpg")}>
        <SafeAreaView>{loading ? (<ActivityIndicator size={'large'} color="#90EE90" paddingTop={300}/>) : (
          <FlatList 
          data={name}
          keyExtractor={ (item,index)=> index.toString()}
          onpress={()=>navigation.navigate('')}
          renderItem={({item,index})=>(
          <View>
          <View style={{flexDirection:"row"}}>
            <Text style={styles.text}>Confirmed:</Text>  
            <Text style={styles.text}>{item.confirmed}</Text>
          </View>
          <View style={{flexDirection:"row"}}>
            <Text style={styles.text}>Recovered:</Text>
            <Text style={styles.text}>{item.recovered}</Text>
          </View>
          <View style={{flexDirection:"row"}}>
            <Text style={styles.text}>Critical:</Text>
            <Text style={styles.text}>{item.critical}</Text>
          </View>
          <View style={{flexDirection:"row"}}>
            <Text style={styles.text}>Deaths:</Text>
            <Text style={styles.text}>{item.deaths}</Text>
          </View>
            <Text style={styles.text1}>Last Updated:</Text>
            <Text style={styles.text1}>{item.lastUpdate}</Text>
          </View>
          )}
          />
        )}</SafeAreaView>
      </ImageBackground>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignSelf: "auto",
      width: "auto",
      opacity: 0.9
    },
    input: {
      borderWidth: 1.5,
      borderColor: "black",
      width: 350,
      height: 50,
      fontSize: 30,
      paddingLeft: 20
    },
    text:{
      paddingLeft:20,
      marginTop: 30,
      fontSize: 31,
      fontWeight: "bold",
      color: "#90EE90",
    },
    text1:{
      marginTop: 30,
      fontSize: 31,
      fontWeight: "bold",
      color: "#90EE90",
      alignItems: "center",
      justifyContent:"center",
      alignSelf: "center",
      padding:20,
      paddingTop: 0,
    },
    button:{
      margin: 30,
      width:350,
      backgroundColor: "#90EE90",
      alignItems: "center",
      justifyContent: "center",
      opacity: 0.9,
      borderRadius: 5
    },
    btntext: {
      fontSize: 30,
      padding: 20,
      fontWeight: "bold",
      color: "black"
      
    },
    section: {
      paddingLeft: 10,
      paddingTop: 40,
    },
  });
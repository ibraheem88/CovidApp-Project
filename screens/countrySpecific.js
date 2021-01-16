import React, { useState,useEffect } from 'react';
import {MaterialIcons} from '@expo/vector-icons';
import AsyncStorage from '@react-native-community/async-storage';
import { Text, View, StyleSheet,ActivityIndicator,ImageBackground,SafeAreaView,FlatList} from 'react-native';


export default function main ({navigation}) {
    const Country=navigation.getParam('item');
    const index=navigation.getParam('index');
    const url="https://covid-19-data.p.rapidapi.com/country?name="+Country;
    const [loading,setLoading]=useState(true);
    const [color,setColor]=useState("gray");
    const [name,setName]=useState([]);
    const [favourite,setFavourite]=useState([]);
    global.isStar=false;

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


    const saveState=async (index)=>{
      await AsyncStorage.setItem(JSON.stringify(index),'true');
    }

    const getState=async ()=>{
      const value=await AsyncStorage.getItem(JSON.stringify(index));
      if(value!==null){
      isStar=JSON.parse(value)}
      if(isStar==true){
        setColor("#90EE90") 
      }
    }

    useEffect(() => {
      if(index!=undefined){
      getState();}
    }, []);
    
    const style=(item,index)=>{
      if(isStar===false || isStar===undefined){
      saveState(index);
      setColor("#90EE90");}
      const newFavourite=()=>{
      return([...favourite,item])
      }
       const newList=newFavourite();
       setFavourite([...favourite,item]);
        //navigation.navigate('Favourites',{favourite})
        navigation.navigate('Favourites',{newList,index})
      }
      //else{

      //}
    

    return ( 
      <ImageBackground style={styles.container}  source={require("../assets/images/covid.jpg")}>
        <View style={{flexDirection: "row",justifyContent:"center"}}>
        <Text style={styles.text1}>{Country}</Text>
        <MaterialIcons name="star" size={30} style={[styles.text1,{color: color}]} onPress={() =>style(Country,index)} />
        </View>
        <SafeAreaView>{loading ? (<ActivityIndicator size={'large'} color="#90EE90" paddingTop={300}/>) : (
          <FlatList 
          data={name}
          keyExtractor={ (index)=> index.toString()}
          onpress={()=>navigation.navigate('')}
          renderItem={({item,index})=>(
          <View style={{marginBottom: 60}}>
          <View style={{flexDirection:"row"},styles.list}>
            <Text style={styles.text}>Confirmed:</Text>  
            <Text style={styles.text}>{item.confirmed}</Text>
          </View>
          <View style={{flexDirection:"row"},styles.list}>
            <Text style={styles.text}>Recovered:</Text>
            <Text style={styles.text}>{item.recovered}</Text>
          </View>
          <View style={{flexDirection:"row"},styles.list}>
            <Text style={styles.text}>Critical:</Text>
            <Text style={styles.text}>{item.critical}</Text>
          </View>
          <View style={{flexDirection:"row"},styles.list}>
            <Text style={styles.text}>Deaths:</Text>
            <Text style={styles.text}>{item.deaths}</Text>
          </View>
          <View style={{flexDirection:"row"},styles.list}>
            <Text style={styles.text1}>Last Updated:</Text>
            <Text style={styles.text1}>{item.lastUpdate}</Text>
          </View>
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
      color: "black",
    },
    text1:{
      marginTop: 30,
      fontSize: 31,
      fontWeight: "bold",
      color: "black",
      alignItems: "center",
      justifyContent:"center",
      alignSelf: "center",
      paddingLeft: 10,
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
    list: {
      backgroundColor: "#90EE90",
      margin: 10,
      opacity:0.8,
      paddingBottom: 15,
      paddingTop: 0,
      paddingRight: 10,
      width:"80%",
      borderRadius: 7,
    }
  });
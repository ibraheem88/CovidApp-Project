import React, { useState,useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { Text, View, StyleSheet,FlatList,TouchableOpacity,ImageBackground} from 'react-native';


export default function main ({navigation}) {
const [favourites,setFavourites]=useState([]) 
const list=navigation.getParam('newList');
const index=navigation.getParam('index');


const getData = async () =>{
  const value= await AsyncStorage.getItem('list');
  if(value!==null){
    setFavourites(JSON.parse(value));
  }
    
}

const clearAll = async() =>{
  try{
      await AsyncStorage.clear();
      }
  catch(error){
        alert(error)
      }
  await AsyncStorage.setItem('list',JSON.stringify([]));    

}

const setData =async (n) =>{
  const value= await AsyncStorage.getItem('list');
  if(n!==undefined){
  try{
  const newFavourite=()=>{
    return([...JSON.parse(value),n])
    }
  await AsyncStorage.setItem('list',JSON.stringify(newFavourite()));
  }
  catch(error){
    alert(error)
  }
}
}

useEffect(() => {
  setData(list);
  getData()
}, []);


    return (
      
      <ImageBackground style={styles.container}  source={require("../assets/images/covid.jpg")}>
        <TouchableOpacity style={styles.button} onPress={()=>clearAll()}><Text style={styles.btntext}>Clear All</Text></TouchableOpacity>
        <View style={styles.section}>
        <FlatList 
          data={favourites}
          keyExtractor={ (item,index)=> index.toString()}
          renderItem={({item,index})=>(
            <View style={{flexDirection: "row"}}>
            <TouchableOpacity onPress={()=>navigation.navigate('specific',{item})} style={styles.list}>
                <Text style={styles.text}>{item}</Text>
            </TouchableOpacity>
            </View>
          )}
          />
        </View>
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
    text:{
      paddingLeft:20,
      marginTop: 30,
      fontSize: 31,
      fontWeight: "bold",
      color: "black"
    },
    button:{
      margin: 30,
      marginBottom: 15,
      width:350,
      height:"10%",
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
    },
    list: {
      backgroundColor: "#90EE90",
      margin: 10,
      opacity:0.8,
      paddingBottom: 15,
      paddingTop: 0,
      paddingRight: 10,
      marginLeft: 20,
      width:"80%",
      borderRadius: 7,
    }
  });
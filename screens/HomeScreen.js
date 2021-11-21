import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet,Image } from 'react-native';
import db from '../config';
import AppHeader from '../components/AppHeader'
export default class HomeScreen extends React.Component {
 constructor(){
   super()
   this.state={
      like:0,
      dislike:0
   }
 }
 likeCount=()=>{ 
    this.setState({like:this.state.like+1})
  }
  dislikeCount=()=>{
    this.setState({dislike:this.state.dislike+1})
  }
  likePressed(){
  var like=db.ref('Rating/'+'/')
  like.update({
    'likePressed':1
  })
}

dislikePressed(){
  var dislike = db.ref('Rating/'+'/')
  dislike.update({
    'dislikePressed':1
  })
}
  render(){
    return(
      <View>
        <AppHeader/>
        
        <TouchableOpacity 
            style={[styles.button,{backgroundColor:"orange"}]} 
            onPress={()=>this.props.navigation.navigate("Joke")}>
            <Text style={styles.buttonText}>Joke</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.button,{backgroundColor:"purple"}]} 
            onPress={()=>this.props.navigation.navigate("Horoscope")}>
            <Text style={styles.buttonText}>Horoscope</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.button,{backgroundColor:"pink"}]} 
            onPress={()=>this.props.navigation.navigate("TopNews")}>
            <Text style={styles.buttonText}>News</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.button,{backgroundColor:"cyan"}]} 
            onPress={()=>this.props.navigation.navigate("Weather")}>
            <Text style={styles.buttonText}>Weather</Text>
          </TouchableOpacity>

     
     

      <Text style={{ textAlign:'center',margin:25, fontSize:25, color:"orange"}}>Rate Us</Text>
      <TouchableOpacity
      onPress={()=>{
          this.likeCount();
        this.likePressed();
      
      }}>
       <Text style={{marginLeft:90, marginTop:-10}}>{this.state.like}</Text>
      <Image
      style={{width:50, height:50,marginLeft:70}}
      source={require('../assets/thumbsup.png')}
      />
      </TouchableOpacity>
      <TouchableOpacity 
       
       
      onPress={()=>{
        this.dislikeCount();
        this.dislikePressed();
         
      }}>
      <Text style={{marginLeft:220, marginTop:-60}}>{this.state.dislike}</Text>
      <Image
      style={{width:50, height:50,marginLeft:200}}
      source={require('../assets/thumbsdown.png')}
      />
      </TouchableOpacity>
       
      </View>
    
    )
  }
}


const styles = StyleSheet.create({
  button:{
    justifyContent : 'center',
    alignSelf : 'center',
    borderWidth : 2,
    borderRadius : 15,
    marginTop:50,
    width : 200,
    height:50,
  },
  buttonText : {
    textAlign : 'center',
    color : 'white'
  }
})
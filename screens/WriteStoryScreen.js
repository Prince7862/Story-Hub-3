import React from 'react';
import { Text, View, TouchableOpacity, TextInput, Image, StyleSheet, ToastAndroid, KeyboardAvoidingView} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import {Header} from 'react-native-elements';
import db from '../Config';
 
export default class WriteStoryScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            author: '',
            storyText: '',
        }
    }

    submitStory = () => {
        db.collection('stories').add({
            author:this.state.author,
            storyText: this.state.storyText,
            title: this.state.title,
        });
        this.setState({
            author: '',
            storyText: '',
            title:'',
        });
        ToastAndroid.show('STORY HAS BEEN SUBMITTED', ToastAndroid.SHORT);
    }



    render(){
        return(
            <View style={styles.container}>
                <Header 
                    backgroundColor = {'#ffbfcb'}
                    centerComponent = {{
                        text : 'Story Hub',
                        style : { color: '#000', fontSize: 30}
                    }}
                />
                <KeyboardAvoidingView>
                <TextInput 
                    placeholder="Type Your Story Title"
                    onChangeText= {(text)=>{
                        this.setState({
                            title: text
                        })
                    }}
                    value={this.state.title}
                    style={styles.title}
                    placeholderTextColor='#000'/>
                    </KeyboardAvoidingView>
                    <KeyboardAvoidingView>
                <TextInput
                    placeholder="Type The Author Name"
                    onChangeText= {(text)=>{
                        this.setState({
                            author: text
                        })
                    }}
                    placeholderTextColor='#000'
                    value={this.state.author}
                    style={styles.author} />
                    </KeyboardAvoidingView>
                    <KeyboardAvoidingView>
                <TextInput 
                    placeholder="Type Your Story Here"
                    onChangeText= {(text)=>{
                        this.setState({
                            storyText: text
                        })
                    }}
                    placeholderTextColor='#000'
                    value={this.state.storyText}
                    style={styles.storyText}
                    multiline={true}/>
                    </KeyboardAvoidingView>
                
                <TouchableOpacity
                    style={styles.submitButton}
                    onPress={this.submitStory}>
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title:{
      height: 40,
      borderWidth: 2,
      marginTop: 40,
      margin: 10,
      color:'#000',
      padding: 6,

  },
  author: {
      height: 40,
      borderWidth: 2,
      margin: 10,
       padding: 6,
  },
  storyText: {
      height: 250,
      borderWidth: 2,
      margin: 10, 
      padding: 6,
  },
  submitButton:{
      justifyContent: 'center',
      alignSelf: 'center',
      backgroundColor: '#ffbfcb',
      width: 80,
      height: 40,color:'#000',
  },
  buttonText: {
      textAlign: 'center',
      color: '#000',
      fontWeight: 'bold'
  }
});
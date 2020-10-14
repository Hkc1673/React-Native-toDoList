
import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Note from "./Note";



export default class Main extends React.Component  {

    constructor(props){
      super(props);

      this.state = {
        noteArray:[],
        noteText:"",
        // counter:0,
      }
    }

    // myFunction() {
    //   let myVariable = 0;

    //   myVariable++;
    // }

    render(){

        let notes = this.state.noteArray.map((val,key)=>{
          return <Note key={key} keyval={key} val={val}
                  deleteMethod={()=> this.deleteNote(key)}/>
        });

        return (
            <View style= {styles.container}>
              <View style={styles.header}>
                <Text style={styles.headerText}>TODO</Text>
                <Text style={{ fontSize: 50 }}>{this.state.counter}</Text>
              </View>

              <ScrollView style={styles.scrollContainer}>
                {notes}
              </ScrollView> 

              <View style={styles.footer}>
                <TextInput
                 style={styles.textInput}
                 onChangeText={(noteText)=> this.setState({noteText})}
                 value={this.state.noteText}
                 placeholder="Write New Task"
                 placeholderTextColor="black"
                 underlineColorAndroid="transparent">
                </TextInput>
              </View>

                <TouchableOpacity onPress={this.addNote.bind(this)}
                style={styles.addButton}>
                  <Text style={styles.addButtonText}>ADD TO DO</Text>
                </TouchableOpacity>
              
            </View>
          );
    }
    addNote() {
      if (this.state.noteText) {

        this.state.noteArray.push({
          "note":this.state.noteText
        });

        this.setState({noteArray: this.state.noteArray});
        this.setState({noteText: ""});
      }
    }

    deleteNote(key){
        this.state.noteArray.splice(key,1);
        this.setState({noteArray: this.state.noteArray});
    }
};




const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#37474F',
    justifyContent: 'center',
    borderBottomWidth: 10,
    borderBottomColor: '#ddd',
  },
  headerText: {
    color: '#FFA726',
    fontWeight:"bold",
    fontSize: 30,
    padding: 26,
  },
  scrollContainer: {
    flex: 1,
    backgroundColor: "#37474F",
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    backgroundColor: "#B0BEC5",
    margin:10,
    borderRadius: 20,

  },
  textInput: {
    alignSelf: 'stretch',
    color: 'black',
    padding: 20,
    backgroundColor: '#ECEFF1',
    borderTopWidth: 2,
    borderTopColor: '#ededed',
    borderRadius: 20,
    margin: 20,
    marginBottom: 100,
  },
  addButton: {
    position: 'absolute',
    zIndex: 11,
    right: 180,
    bottom: 25,
    backgroundColor: '#546E7A',
    width: 250,
    height: 60,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 24,
  },
});



import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Note from "./Note";



export default class Main extends React.Component  {

    constructor(props){
      super(props);

      this.state = {
        noteArray:[],
        noteText:"",
      }
    }

   

    render(){

        let notes = this.state.noteArray.map((val,key)=>{
          return <Note key={key} keyval={key} val={val}
                  deleteMethod={()=> this.deleteNote(key)}/>
        });

        return (
            <View style= {styles.container}>
              <View style={styles.header}>
                <Text style={styles.headerText}>TODO</Text>
                <Text style={{ fontSize: 50, color: '#FFA726'  }}>{notes.length}</Text>
              </View>

              <ScrollView style={styles.scrollContainer}>
                {notes}
              </ScrollView> 

              <View style={styles.footer}>
                <TextInput
                 style={styles.textInput}
                 onChangeText={(noteText)=> this.setState({noteText})}
                 value={this.state.noteText}
                 placeholder="Write New Task..."
                 underlineColorAndroid="transparent">
                </TextInput>
              

                <TouchableOpacity onPress={this.addNote.bind(this)}
                style={styles.addButton}>
                  <Text style={styles.addButtonText}>ADD TO DO</Text>
                </TouchableOpacity>
                </View>
              
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
    backgroundColor: "#37474F",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
  },
  headerText: {
    color: '#FFA726',
    fontWeight:"bold",
    fontSize: 50,
  },
  scrollContainer: {
    flex: 1,
  },
  footer: {
    height:180,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#B0BEC5",
    margin:10,
    borderRadius: 20,

  },
  textInput: {
    color: 'black',
    padding: 20,
    backgroundColor: '#ECEFF1',
    borderRadius: 20,
    margin: 20,
    marginBottom: 10,
    width: Dimensions.get("window").width*0.85,
  },
  addButton: {
    backgroundColor: '#546E7A',
    width: 250,
    height: 60,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 24,
  },
});


import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

export default class Note extends React.Component {
    render() {
        return (
            <View key={this.props.keyval} style={styles.note}>
                <Text style={styles.noteText}>{this.props.val.note}</Text>
                

                <TouchableOpacity onPress={this.props.deleteMethod} style={styles.noteDelete}>
                    <Text style={styles.noteDeleteText}>Del</Text>
                </TouchableOpacity>

            </View>
        );
    }
};

const styles = StyleSheet.create({
    note: {
        position: 'relative',
        padding: 20,
        paddingRight:100,
    },
    noteText: {
        padding: 20,
        backgroundColor: "#546E7A",
        color: "white",
        borderRadius: 10,
        fontSize: 20,
    },
    noteDelete: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2980b9',
        padding: 10,
        top: 10,
        bottom: 10,
        right: 10,
        borderRadius: 10,
    },
    noteDeleteText: {
        color: 'white',
    }
  });

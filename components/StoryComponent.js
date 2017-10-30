import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class StoryComponent extends React.Component {
  render() {
    return (
      <View style={styles.card}> 
          <Text style={styles.title}>{this.props.title}</Text>
          <Text style={styles.caption}>City — {this.props.city}</Text>
          <Text numberOfLines={3} style={styles.description}>{this.props.story}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    title: {
        fontSize: 22,
        color: 'black', 

    },

    caption: {
        fontSize: 18,
        color: 'gray',
    },
    description: {
      fontSize: 18,
    },
    card: {
      margin: 6,
      borderWidth: 0.5,
      borderColor: '#CDCDCD',
      backgroundColor: 'white',
      padding: 12
    }
  });
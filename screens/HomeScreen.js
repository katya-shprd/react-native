import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import StoryComponent from '../components/StoryComponent'

export default class HomeScreen extends React.Component {
  static route = {
    navigationBar: {
      title: 'Home',
    },
  };

  render() {
    return (
      <View style={styles.container}>
       <Text>This is home screen</Text>
       <Text> New Text</Text>
       
      <StoryComponent
        title="title 1"
        city="Tornio"
        story="Lorem ipsum"/>
      <StoryComponent
        title="title 2"
        city="Kemi"
        story="Lorem ipsum"/>
      <StoryComponent
        title="title 3"
        city="Westeros"
        story="Lorem ipsum"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
}); 


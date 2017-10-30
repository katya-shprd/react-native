import React from 'react';
import { View, Text, Image } from "react-native";

class StoryContainer extends React.Component {
    render() {
        return (
            <View>
                <Text> Some other text </Text>
                <Image 
                    source={require('../assets/images/ourstories.png')}
                /> 
            </View>

        );
    }
}

export default StoryContainer; 
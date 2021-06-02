import React, { useEffect } from 'react';
import {
    View,
    StatusBar, TouchableOpacity, Text
} from 'react-native';
import * as Utils from '../../utility'

const WelComePage = ({ navigation }) => {


    useEffect(() => {


    })
    return (


        <View style={{ flex: 1, backgroundColor: 'green' }}>
            <StatusBar hidden></StatusBar>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 10 }}>



                <View style={{ flex: 1, marginRight: 5 }}>
                    <TouchableOpacity style={{ backgroundColor: 'red', height: 60, justifyContent: 'center', alignItems: 'center', padding: 10 }}
                        onPress={() => {

                            navigation.navigate(Utils.Constants.KEY_APP);

                        }}
                    >
                        <Text >{"Assigmment"}</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
        // </ImageBackground>

    );
}

export default WelComePage;
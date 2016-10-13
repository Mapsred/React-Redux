/**
 * Created by maps_red on 11/10/16.
 */
import React, {Component} from 'react';
import {AppRegistry, Navigator, Text, View} from 'react-native';

import MyScene from './MyScene';

class AwesomeProject extends Component {
    render() {
        return (
            <Navigator initialRoute={{title: 'My Initial Scene', index: 0}} renderScene={(route, navigator) =>
                <MyScene title={route.title}
                         onForward={ () => {
                             const nextIndex = route.index + 1;
                             navigator.push({
                                 title: 'Scene ' + nextIndex,
                                 index: nextIndex,
                             });
                         }}
                    // Function to call to go back to the previous scene
                         onBack={() => {

                             if (route.index == 3) {
                                 navigator.push({
                                     title: 'Scene ' + 1,
                                     index: 1,
                                 });
                             }else if (route.index > 0) {
                                 navigator.pop();
                             }
                         }}
                />
            }
            />
        )
    }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
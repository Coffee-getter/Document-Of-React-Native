/*
 * @Author: heye heye@ewell.cc
 * @Date: 2022-06-22 17:25:02
 * @LastEditors: heye
 * @LastEditTime: 2022-07-13 16:55:38
 * @FilePath: \new-project\App.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home';
import RestaurantDetail from './screens/RestaurantDetail';
import RootNavigation from './navigation';
import React from 'react';
export default function App() {
    return <RootNavigation />;
}

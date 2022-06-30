/*
 * @Author: heye
 * @Date: 2022-06-24 14:50:51
 * @LastEditors: heye
 * @LastEditTime: 2022-06-30 10:37:01
 * @FilePath: \speed-up-cli\new-project\screens\Home.js
 * @Description:
 *
 */
import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image, ScrollView, Platform, StatusBar } from 'react-native';
import { Divider } from 'react-native-elements';
import Categorys from '../components/home/Categorys';
import HeaderTabs from '../components/home/HeaderTabs';
import Restaurants from '../components/home/Restaurants';
import SearchBar from '../components/home/SearchBar';
import ButtomTabs from '../components/home/ButtomTabs';
//状态栏高度
const statusBarHeight = StatusBar.currentHeight;
//是否为IOS系统
const isIOS = Platform.OS === 'ios';

export default function Home() {
    return (
        <View
            style={{
                paddingTop: isIOS ? 0 : statusBarHeight,
                height: '100%',
                backgroundColor: '#eee',
            }}
        >
            <HeaderTabs />
            <SearchBar />
            {/* <ScrollView showsVerticalScrollIndicator={false}> */}
            <Categorys />
            {/* </ScrollView> */}
            <Restaurants />
            <Divider width={1} />
            <ButtomTabs />
        </View>
    );
}

/*
 * @Author: heye
 * @Date: 2022-06-30 10:37:49
 * @LastEditors: heye
 * @LastEditTime: 2022-06-30 16:59:31
 * @FilePath: \speed-up-cli\new-project\screens\RestaurantDetail.js
 * @Description: 餐厅详情页
 *
 */
import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, Image, StatusBar } from 'react-native';
import { Divider } from 'react-native-elements';
import About from '../components/restaurantDetail/About';
import MenuItems from '../components/restaurantDetail/MenuItems';
//状态栏高度
const statusBarHeight = StatusBar.currentHeight;
export default function RestaurantDetail() {
    return (
        <View style={{ height: '100%' }}>
            <About />
            <Divider width={1.8} />
            <MenuItems />
        </View>
    );
}

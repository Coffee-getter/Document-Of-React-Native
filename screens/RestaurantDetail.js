/*
 * @Author: heye
 * @Date: 2022-06-30 10:37:49
 * @LastEditors: heye
 * @LastEditTime: 2022-07-14 14:32:00
 * @FilePath: \new-project\screens\RestaurantDetail.js
 * @Description: 餐厅详情页
 *
 */
import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, Image, StatusBar } from 'react-native';
import { Divider } from 'react-native-elements';
import About from '../components/restaurantDetail/About';
import MenuItems from '../components/restaurantDetail/MenuItems';
import ViewCart from '../components/restaurantDetail/ViewCart';
//状态栏高度
const statusBarHeight = StatusBar.currentHeight;
export default function RestaurantDetail({ route, navigation }) {
    console.log(route, navigation);
    return (
        <View style={{ height: '100%' }}>
            <About navigation={navigation} restaurantItem={route.params.item} />
            <Divider width={1} style={{ marginVertical: 20 }} />
            <MenuItems restaurantName={route.params.item.name} />
            <ViewCart navigation={navigation} restaurantName={route.params.item.name} />
        </View>
    );
}

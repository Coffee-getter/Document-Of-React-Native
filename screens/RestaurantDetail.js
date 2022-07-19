/*
 * @Author: heye
 * @Date: 2022-06-30 10:37:49
 * @LastEditors: heye
 * @LastEditTime: 2022-07-19 10:29:32
 * @FilePath: \new-project\screens\RestaurantDetail.js
 * @Description: 餐厅详情页
 *
 */
import React, { useState, useEffect } from 'react'
import { Text, View, TouchableOpacity, Image, StatusBar } from 'react-native'
import { Divider } from 'react-native-elements'
import About from '../components/restaurantDetail/About'
import MenuItems from '../components/restaurantDetail/MenuItems'
import ViewCart from '../components/restaurantDetail/ViewCart'
const base = '../assets/images'
const menus = [
    {
        title: 'Pizza',
        description: 'Desktop and Mobile Backgrounds',
        price: '$48.0',
        image: require(`${base}/menu-pizza.jpg`),
    },
    {
        title: 'Hamberger',
        description: 'Junk Food HD Wallpapers',
        price: '$19.0',
        image: require(`${base}/menu-hamberger.jpg`),
    },
    {
        title: 'India Food',
        description: 'A must-try chinese food at the best chainses restaurant',
        price: '$30.0',
        image: require(`${base}/menu-india.jpg`),
    },
    {
        title: 'Beef',
        description: 'Desktop and Mobile Backgrounds',
        price: '$57.0',
        image: require(`${base}/menu-beef.jpg`),
    },
    {
        title: 'vergetable',
        description: 'Desktop and Mobile Backgrounds',
        price: '$50.0',
        image: require(`${base}/menu-vergetable.jpg`),
    },
]
//状态栏高度
const statusBarHeight = StatusBar.currentHeight
export default function RestaurantDetail({ route, navigation }) {
    console.log(route, navigation)
    return (
        <View style={{ height: '100%' }}>
            <About navigation={navigation} restaurantItem={route.params.item} />
            <Divider width={1} style={{ marginBottom: 20 }} />
            <MenuItems restaurantName={route.params.item.name} menus={menus} padding={10} />
            <ViewCart navigation={navigation} restaurantName={route.params.item.name} />
        </View>
    )
}

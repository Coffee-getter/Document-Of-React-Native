/*
 * @Author: heye
 * @Date: 2022-07-19 09:55:00
 * @LastEditors: heye
 * @LastEditTime: 2022-07-19 10:12:51
 * @FilePath: \new-project\screens\OrderFinish.js
 * @Description:
 *
 */
import React, { useState, useEffect } from 'react'
import { Text, View, TouchableOpacity, Image } from 'react-native'
import LottieView from 'lottie-react-native'
import MenuItems from '../components/restaurantDetail/MenuItems'
import { useSelector } from 'react-redux'

export default function OrderFinish({ route, navigation }) {
    const checkList = useSelector((state) => state.cartReducer.selectedItems.items)
    const restaurantName = useSelector((state) => state.cartReducer.selectedItems.restaurantName)
    return (
        <View>
            {/**check-mark */}
            <LottieView
                style={{}}
                source={require('../assets/animations/check-mark.json')}
                autoPlay
                loop={false}
                speed={0.5}
            />
            {/**order-list */}
            <MenuItems restaurantName={restaurantName} menus={checkList} padding={20} />
            {/**cooking */}
            <LottieView
                style={{}}
                source={require('../assets/animations/cooking.json')}
                autoPlay
                loop={false}
                speed={0.5}
            />
        </View>
    )
}

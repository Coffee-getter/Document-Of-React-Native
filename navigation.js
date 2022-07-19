/*
 * @Author: heye
 * @Date: 2022-07-01 10:59:41
 * @LastEditors: heye
 * @LastEditTime: 2022-07-19 10:12:08
 * @FilePath: \new-project\navigation.js
 * @Description: 导航路由切换页面
 *
 */
import React, { useState, useEffect } from 'react'
import { Text, View, TouchableOpacity, Image } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Home from './screens/Home'
import RestaurantDetail from './screens/RestaurantDetail'
import { Provider as ReduxProvider } from 'react-redux'
import configureStore from './redux/store'
import OrderFinish from './screens/OrderFinish'
const store = configureStore()

export default function RootNavigation() {
    const Stack = createStackNavigator()
    const screenOptions = {
        headerShown: false,
    }
    return (
        <ReduxProvider store={store}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="OrderFinish" screenOptions={screenOptions}>
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="RestaurantDetail" component={RestaurantDetail} />
                    <Stack.Screen name="OrderFinish" component={OrderFinish} />
                </Stack.Navigator>
            </NavigationContainer>
        </ReduxProvider>
    )
}

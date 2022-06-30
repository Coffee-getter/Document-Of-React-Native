/*
 * @Author: heye
 * @Date: 2022-06-22 17:47:49
 * @LastEditors: heye
 * @LastEditTime: 2022-06-30 10:22:36
 * @FilePath: \speed-up-cli\new-project\components\HeaderTabs.js
 * @Description: 头部tab栏
 *
 */
import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Platform, StatusBar } from 'react-native';
import SafeAreaView, { SafeAreaProvider } from 'react-native-safe-area-view';

export default function HeaderTabs() {
    const [activeTab, setActiveTab] = useState('Delivery');
    return (
        <View
            style={{
                flexDirection: 'row',
                justifyContent: 'center',
                padding: 15,
                backgroundColor: '#fff',
            }}
        >
            <HeaderTab name="Delivery" activeTab={activeTab} setActiveTab={setActiveTab} />
            <HeaderTab name="PickUp" activeTab={activeTab} setActiveTab={setActiveTab} />
        </View>
    );
}
const HeaderTab = (props) => {
    const { name, activeTab, setActiveTab } = props;
    const bgColor = activeTab == name ? 'black' : 'white';
    const color = activeTab == name ? 'white' : 'black';
    return (
        <TouchableOpacity
            onPress={() => setActiveTab(name)}
            style={{
                backgroundColor: bgColor,
                borderRadius: 50,
                width: 90,
                height: 30,
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Text
                style={{
                    fontWeight: '700',
                    color: color,
                }}
            >
                {name}
            </Text>
        </TouchableOpacity>
    );
};

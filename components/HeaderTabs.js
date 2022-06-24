/*
 * @Author: heye
 * @Date: 2022-06-22 17:47:49
 * @LastEditors: heye
 * @LastEditTime: 2022-06-24 15:51:57
 * @FilePath: \speed-up-cli\new-project\components\HeaderTabs.js
 * @Description: 头部tab栏
 *
 */
import React, { useState } from 'react';
import { Text, View, TouchableOpacity, SafeAreaView, Platform, StatusBar } from 'react-native';
//状态栏高度
const statusBarHeight = StatusBar.currentHeight;
//是否为IOS系统
const isIOS = Platform.OS === 'ios';

export default function HeaderTabs() {
    const [activeTab, setActiveTab] = useState('Delivery');
    return (
        <SafeAreaView>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    padding: 15,
                    backgroundColor: '#fff',
                    marginTop: isIOS ? 0 : statusBarHeight,
                }}
            >
                <HeaderTab name="Delivery" activeTab={activeTab} setActiveTab={setActiveTab} />
                <HeaderTab name="PickUp" activeTab={activeTab} setActiveTab={setActiveTab} />
            </View>
        </SafeAreaView>
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

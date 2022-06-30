/*
 * @Author: heye
 * @Date: 2022-06-27 13:11:32
 * @LastEditors: heye
 * @LastEditTime: 2022-06-30 10:34:30
 * @FilePath: \speed-up-cli\new-project\components\ButtomTabs.js
 * @Description:
 *
 */
import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const icons = [
    {
        icon: 'home',
        text: 'Home',
    },
    {
        icon: 'search',
        text: 'Browse',
    },
    {
        icon: 'shopping-bag',
        text: 'Grocery',
    },
    {
        icon: 'receipt',
        text: 'Orders',
    },
    {
        icon: 'user',
        text: 'Account',
    },
];
export default function ButtomTabs() {
    const [activeBottom, setActiveBottom] = useState('Home');
    return (
        <View
            style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                padding: 8,
            }}
        >
            {icons.map((item, index) => {
                return (
                    <TouchableOpacity onPress={() => setActiveBottom(item.text)}>
                        <Icon key={index} icon={item.icon} text={item.text} activeBottom={activeBottom} />
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}
const Icon = (props) => {
    const { key, icon, text, activeBottom } = props;
    const checkedColor = '#222';
    const commonColor = '#aaa';
    const color = text == activeBottom ? checkedColor : commonColor;

    return (
        <View
            key={key}
            style={{
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <FontAwesome5
                name={icon}
                size={24}
                style={{
                    marginBottom: 3,
                    color: color,
                }}
            />
            <Text
                style={{
                    fontWeight: '700',
                    fontSize: 14,
                    color: color,
                }}
            >
                {text}
            </Text>
        </View>
    );
};

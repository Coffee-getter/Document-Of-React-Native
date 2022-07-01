/*
 * @Author: heye
 * @Date: 2022-06-30 16:01:51
 * @LastEditors: heye
 * @LastEditTime: 2022-06-30 17:03:37
 * @FilePath: \speed-up-cli\new-project\components\restaurantDetail\MenuItems.js
 * @Description:
 *
 */
import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
const base = '../../assets/images';
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
        price: '$50.0+',
        image: require(`${base}/menu-vergetable.jpg`),
    },
];
export default function MenuItems() {
    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            horizontal={false}
            style={styles.scrollViewStyle}
        >
            {menus.map((item, index) => (
                <View key={index} style={styles.menuItemStyle}>
                    <FoodInfo
                        title={item.title}
                        description={item.description}
                        price={item.price}
                    />
                    <FoodImage image={item.image} />
                </View>
            ))}
            <Ending />
        </ScrollView>
    );
}
const FoodInfo = (props) => {
    return (
        <View style={styles.foodInfo}>
            <Text style={{ fontWeight: '700', fontSize: 19, padding: 3 }}>{props.title}</Text>
            <Text style={{ fontSize: 14, padding: 3 }}>{props.description}</Text>
            <Text style={{ fontSize: 14, padding: 3 }}>{props.price}</Text>
        </View>
    );
};
const FoodImage = (props) => {
    return <Image source={props.image} style={styles.foodImage} />;
};
const Ending = () => {
    return (
        <View style={styles.ending}>
            <Text style={{ fontWeight: '700', fontSize: 12, color: '#aaa' }}>ending</Text>
        </View>
    );
};
const styles = StyleSheet.create({
    scrollViewStyle: {
        flex: 1,
    },
    menuItemStyle: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    foodInfo: {
        flex: 2,
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'space-around',
    },
    foodImage: {
        flex: 1,
        width: 50,
        height: 80,
        borderRadius: 10,
    },
    ending: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

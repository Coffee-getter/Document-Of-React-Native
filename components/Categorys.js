/*
 * @Author: heye
 * @Date: 2022-06-22 17:46:25
 * @LastEditors: heye
 * @LastEditTime: 2022-06-24 15:48:41
 * @FilePath: \speed-up-cli\new-project\components\Categorys.js
 * @Description: 食品菜单栏
 *
 */
import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
const base = '../assets/images/';
const menus = [
    {
        image_url: require(`${base}shopping-bag.png`),
        name: 'Pick-up',
    },
    {
        image_url: require(`${base}soft-drink.png`),
        name: 'Soft Drinks',
    },
    {
        image_url: require(`${base}bread.png`),
        name: 'Bakery Items',
    },
    {
        image_url: require(`${base}fast-food.png`),
        name: 'Fast Food',
    },
    {
        image_url: require(`${base}deals.png`),
        name: 'Deals',
    },
];
export default function Categorys() {
    return (
        <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{
                flexDirection: 'row',
                backgroundColor: '#fff',
                marginTop: 5,
                paddingLeft: 5,
            }}
        >
            {menus.map((item, index) => {
                return (
                    <TouchableOpacity
                        key={index}
                        style={{
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: 15,
                            paddingRight: 20,
                        }}
                    >
                        <Image
                            // source={require(item.image_url)} //这样不生效
                            source={item.image_url}
                            style={{ width: 40, height: 40 }}
                        ></Image>
                        <Text
                            style={{
                                fontWeight: '700',
                            }}
                        >
                            {item.name}
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </ScrollView>
    );
}

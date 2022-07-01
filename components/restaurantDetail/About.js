/*
 * @Author: heye
 * @Date: 2022-06-30 10:40:52
 * @LastEditors: heye
 * @LastEditTime: 2022-07-01 10:38:11
 * @FilePath: \speed-up-cli\new-project\components\restaurantDetail\About.js
 * @Description: 餐厅相关页
 * @argu
 * [base]图片基地址
 * [yelpRestautantInfo] 异步获取的餐厅信息
 * [formattedCategonies] 格式化的菜单片段
 * [description] 格式化的餐厅描述
 *
 */
import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';

const base = '../../assets/images';
const yelpRestautantInfo = {
    name: 'Farmhouse Kitchen Thai Cuisine',
    image: require(`${base}/about.jpg`),
    price: '$$',
    reviews: '1500',
    nating: 4.5,
    categonies: [{ title: 'Thai' }, { title: 'Comfort Food' }],
};
export default function About() {
    const { name, image, price, reviews, nating, categonies } = yelpRestautantInfo;
    const formattedCategonies = categonies.map((cat) => cat.title).join(' · ');
    const description = `${formattedCategonies} ${
        price ? ' · ' + price : null
    }  ·  🎫  ·  ${nating}⭐(${reviews})+`;
    return (
        <View>
            <RestaurantImage image={image} />
            <RestaurantTitle name={name} />
            <RestaurantDes description={description} />
        </View>
    );
}
const RestaurantImage = (props) => {
    return <Image source={props.image} style={{ width: '100%', height: 180 }} />;
};
const RestaurantTitle = (props) => {
    return (
        <View
            style={{
                marginTop: 10,
                paddingHorizontal: 15,
            }}
        >
            <Text
                style={{
                    fontWeight: '700',
                    fontSize: 29,
                }}
            >
                {props.name}
            </Text>
        </View>
    );
};
const RestaurantDes = (props) => {
    return (
        <View
            style={{
                paddingHorizontal: 18,
                marginVertical: 10,
            }}
        >
            <Text style={{ fontWeight: '500', color: '#555' }}>{props.description}</Text>
        </View>
    );
};

/*
 * @Author: heye
 * @Date: 2022-06-30 10:40:52
 * @LastEditors: heye
 * @LastEditTime: 2022-07-14 14:32:39
 * @FilePath: \new-project\components\restaurantDetail\About.js
 * @Description: 餐厅相关页
 * @argu
 * [base]图片基地址
 * [yelpRestautantInfo] 异步获取的餐厅信息
 * [formattedCategonies] 格式化的菜单片段
 * [description] 格式化的餐厅描述
 *
 */
import { PinDropSharp } from '@material-ui/icons';
import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, Image, Button } from 'react-native';

const base = '../../assets/images';
const yelpRestautantInfo = {
    name: 'Farmhouse Kitchen Thai Cuisine',
    image_url: require(`${base}/about.jpg`),
    price: '$$',
    reviews: '1500',
    rating: 4.5,
    categories: [{ title: 'Thai' }, { title: 'Comfort Food' }],
};
export default function About({ restaurantItem, navigation }) {
    let { name, image_url, price, review_count, rating, categories } = restaurantItem;
    const formattedCategonies = categories?.map((cat) => cat.title).join(' · ');
    const description = `${formattedCategonies} ${
        price ? ' · ' + price : null
    }  ·  🎫  ·  ${rating}⭐(${review_count})+`;

    const backToHome = () => {
        navigation.navigate('Home');
    };

    return (
        <View>
            <BackButton backToHome={backToHome} />
            <RestaurantImage image={yelpRestautantInfo.image_url} />
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

const BackButton = (props) => {
    return (
        <TouchableOpacity
            style={{
                position: 'absolute',
                top: 40,
                left: 10,
                backgroundColor: '#777',
                borderRadius: 20,
                zIndex: 999,
                paddingVertical: 5,
                paddingHorizontal: 15,
            }}
            onPress={props.backToHome}
        >
            <Text style={{ color: 'white' }}>返回</Text>
        </TouchableOpacity>
    );
};

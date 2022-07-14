/*
 * @Author: heye
 * @Date: 2022-06-22 17:47:49
 * @LastEditors: heye
 * @LastEditTime: 2022-07-14 11:20:30
 * @FilePath: \new-project\components\home\Restaurants.js
 * @Description: 滑动餐厅卡片
 *
 */
import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
const YELP_API_KEY =
    'grFvm1UgHJ4wPdtuP5vHuggdo9NYpEOAa0Vti6I-xz_g7iH-VjvNQhqHdnrNTf_r5YZf0OQ2NK9tshDtygyQIKMjkJRwc3tYnafG-R86ACVL51MhW4lJlOk8HziwYnYx';
export default function Restaurants({ navigation }) {
    const [restaurants, setRestaurants] = useState([]);
    const getRestaurantFromYelp = () => {
        const apiUrl =
            'https://api.yelp.com/v3/businesses/search?term=restaurant&&location=SanDiego';
        const apiOption = {
            headers: {
                Authorization: `Bearer ${YELP_API_KEY}`,
            },
        };
        return fetch(apiUrl, apiOption)
            .then((res) => res.json())
            .then((json) => {
                console.log(json.businesses);
                setRestaurants(json.businesses);
            })
            .catch((err) => console.log(err));
    };
    useEffect(() => {
        getRestaurantFromYelp();
    }, []);
    return (
        <ScrollView horizontal={false} showsVerticalScrollIndicator={false}>
            {restaurants &&
                restaurants.map((item, index) => {
                    return (
                        <TouchableOpacity
                            key={index}
                            style={{
                                marginTop: 5,
                                padding: 10,
                                paddingHorizontal: 15,
                                backgroundColor: '#fff',
                            }}
                            onPress={() => {
                                navigation.navigate('RestaurantDetail', { item: item });
                            }}
                        >
                            <RestaurantImage item={item} />
                            <RestaurantInfo item={item} />
                        </TouchableOpacity>
                    );
                })}
        </ScrollView>
    );
}

const RestaurantImage = (props) => {
    const { item } = props;
    return (
        <View
            style={{
                flexDirection: 'row',
                paddingVertical: 5,
            }}
        >
            <Image
                source={{ uri: item.image_url }}
                //注意：网络图片要设置宽高
                style={{
                    width: '100%',
                    height: 180,
                }}
            ></Image>
            <TouchableOpacity
                style={{
                    position: 'absolute',
                    right: 10,
                    top: 10,
                }}
            >
                <Ionicon name="heart-outline" style={{ color: '#fff' }} size={24}></Ionicon>
            </TouchableOpacity>
        </View>
    );
};
const RestaurantInfo = (props) => {
    const { item } = props;
    return (
        <View
            style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}
        >
            <View
                style={{
                    flexDirection: 'column',
                }}
            >
                <Text
                    style={{
                        fontSize: 15,
                        fontWeight: '700',
                    }}
                >
                    {item.name}
                </Text>
                <Text
                    style={{
                        fontSize: 12,
                        color: '#aaa',
                        fontWeight: '700',
                    }}
                >
                    {item.location.address1}
                </Text>
            </View>
            <View
                style={{
                    backgroundColor: '#eee',
                    height: 30,
                    width: 30,
                    borderRadius: 20,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Text
                    style={{
                        fontSize: 13,
                        fontWeight: '700',
                    }}
                >
                    {item.rating}
                </Text>
            </View>
        </View>
    );
};

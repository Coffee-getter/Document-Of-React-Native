/*
 * @Author: heye
 * @Date: 2022-06-30 16:01:51
 * @LastEditors: heye
 * @LastEditTime: 2022-07-19 10:27:33
 * @FilePath: \new-project\components\restaurantDetail\MenuItems.js
 * @Description:
 *
 */
import React, { useState, useEffect } from 'react'
import { Text, View, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native'
import BouncyCheckbox from 'react-native-bouncy-checkbox' //勾选框
import { useDispatch, useSelector } from 'react-redux'

export default function MenuItems({ restaurantName, menus, padding }) {
    const dispatch = useDispatch()
    //勾选菜单
    const selectedItems = (item, checkboxValue) => {
        if (checkboxValue) {
            dispatch({
                type: 'ADD_TO_CART',
                payload: { item: item, restaurantName: restaurantName },
            })
        } else {
            dispatch({
                type: 'REMOVE_FROM_CART',
                payload: { item: item, restaurantName: restaurantName },
            })
        }
    }
    //初始是否勾选
    const checkedItems = useSelector((state) => state.cartReducer.selectedItems.items)
    const isCheckedInCart = (food, checkedItems) => {
        return Boolean(checkedItems.findIndex((item) => item.title == food.title) > -1)
    }
    //菜单项目信息
    const FoodInfo = (props) => {
        const { title, description, price } = props.food
        return (
            <View style={styles.foodInfo}>
                <Text style={{ fontWeight: '700', fontSize: 19, padding: 3 }}>{title}</Text>
                <Text style={{ fontSize: 14, padding: 3 }}>{description}</Text>
                <Text style={{ fontSize: 14, padding: 3 }}>{price}</Text>
            </View>
        )
    }
    //菜单项目图片
    const FoodImage = (props) => {
        const { image } = props.food
        return <Image source={image} style={styles.foodImage} />
    }
    //滑动ending
    const Ending = () => {
        return (
            <View style={styles.ending}>
                <Text style={{ fontWeight: '700', fontSize: 12, color: '#aaa' }}>ending</Text>
            </View>
        )
    }
    const styles = StyleSheet.create({
        scrollViewStyle: {
            flex: 1,
        },
        menuItemStyle: {
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            padding: padding,
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
            height: 60,
            borderRadius: 10,
        },
        ending: {
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
        },
    })
    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            horizontal={false}
            style={styles.scrollViewStyle}
        >
            {menus.map((food, index) => (
                <View key={index} style={styles.menuItemStyle}>
                    <BouncyCheckbox
                        iconStyle={{
                            // borderColor: 'lightgray',
                            borderRadius: 0,
                            width: 22,
                            height: 22,
                        }}
                        // fillColor=""
                        onPress={(checkboxValue) => selectedItems(food, checkboxValue)}
                        isChecked={isCheckedInCart(food, checkedItems)}
                    />
                    <FoodInfo food={food} />
                    <FoodImage food={food} />
                </View>
            ))}
            <Ending />
        </ScrollView>
    )
}

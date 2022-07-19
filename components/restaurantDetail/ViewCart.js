/*
 * @Author: heye
 * @Date: 2022-07-13 16:41:45
 * @LastEditors: heye
 * @LastEditTime: 2022-07-15 16:56:42
 * @FilePath: \new-project\components\restaurantDetail\ViewCart.js
 * @Description: 支付页面
 *
 */
import React, { useState, useEffect } from 'react'
import { Text, View, TouchableOpacity, Image, Modal, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'
import { useSelector } from 'react-redux'
import app from '../../firebase'
import { getFirestore, collection, addDoc } from 'firebase/firestore'
import OrderItem from './OrderItem'

export default function ViewCart() {
    const [modalVisible, setModalVisible] = useState(false)
    const checkedItems = useSelector((state) => state.cartReducer.selectedItems.items)
    const restaurantName = useSelector((state) => state.cartReducer.selectedItems.restaurantName)
    //计算总价
    const total = checkedItems
        .map((item) => Number(item.price.replace('$', '')))
        .reduce((pre, curr) => pre + curr, 0)
    //价格转换成货币美元格式
    const totalUSD = total.toLocaleString('en', {
        style: 'currency',
        currency: 'USD',
    })
    // //发送订单到数据库
    // const addOrderToFirebase = () => {
    //     const db = firebase.firestore()
    //     db.collection('orders')
    //     console.log(db.collection('orders'), 'orders')
    //     // .add({
    //     //     items: checkedItems,
    //     //     restaurantName: restaurantName,
    //     //     // createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    //     // })
    //     console.log(db, 'afterdb')
    //     setModalVisible(false)
    // }
    //发送订单到数据库
    const addOrderToFirebase = async () => {
        const db = getFirestore(app)
        const docRef = await addDoc(collection(db, 'orders'), {
            items: checkedItems,
            restaurantName: restaurantName,
            //createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        })
        console.log('Document written with ID: ', docRef.id)
    }
    const checkoutModalContent = () => {
        return (
            <>
                <View style={styles.modalContainer}>
                    <View style={styles.modalCheckoutContent}>
                        <Text style={styles.restaurantName}>{restaurantName}</Text>
                        {checkedItems.map((item, index) => {
                            return <OrderItem item={item} key={index} />
                        })}
                        <View style={styles.subtotalContainer}>
                            <Text style={styles.subtotalText}>Subtotal</Text>
                            <Text style={styles.subtotalText}>{totalUSD}</Text>
                        </View>
                        <TouchableOpacity
                            style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                            onPress={() => {
                                addOrderToFirebase()
                            }}
                        >
                            <View style={styles.modalCheckoutButton}>
                                <Text
                                    style={{
                                        color: 'white',
                                        fontSize: 17,
                                        fontWeight: '600',
                                        paddingRight: 50,
                                    }}
                                >
                                    Checkout
                                </Text>
                                <Text style={{ color: 'white' }}>{totalUSD}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </>
        )
    }
    return (
        <>
            <Modal
                animationType="slide"
                statusBarTranslucent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                {checkoutModalContent()}
            </Modal>
            {total ? (
                <View
                    style={{
                        flex: 1,
                        alignItems: 'center',
                        flexDirection: 'row',
                        position: 'absolute',
                        bottom: 50,
                    }}
                >
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                            width: '100%',
                        }}
                    >
                        <TouchableOpacity
                            style={{
                                backgroundColor: 'black',
                                flexDirection: 'row',
                                justifyContent: 'flex-end',
                                borderRadius: 30,
                                width: 280,
                                padding: 13,
                                alignItems: 'center',
                                position: 'relative',
                            }}
                            onPress={() => setModalVisible(true)}
                        >
                            <Text
                                style={{
                                    color: 'white',
                                    fontSize: 18,
                                    paddingRight: 30,
                                }}
                            >
                                View Cart
                            </Text>
                            <Text
                                style={{
                                    color: '#999',
                                    fontSize: 16,
                                }}
                            >
                                {totalUSD}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            ) : (
                <></>
            )}
        </>
    )
}
const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        // marginTop: -50,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0,0,0,0.7)',
    },
    modalCheckoutContent: {
        height: 500,
        backgroundColor: '#fff',
        borderWidth: 1,
        padding: 20,
    },
    modalCheckoutButton: {
        backgroundColor: '#000',
        borderRadius: 30,
        width: 280,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    restaurantName: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '700',
        marginBottom: 10,
    },
    subtotalContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        marginBottom: 20,
    },
    subtotalText: {
        fontSize: 18,
        fontWeight: '600',
    },
})

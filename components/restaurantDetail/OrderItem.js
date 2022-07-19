import { InsertEmoticon } from '@material-ui/icons'
import React, { useState, useEffect } from 'react'
import { Text, View, TouchableOpacity, Image } from 'react-native'

export default function OrderItem({ item }) {
    console.log(item, 'item')
    const { title, price } = item
    return (
        <View
            style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: 10,
                borderBottomColor: '#999',
                borderBottomWidth: 1,
            }}
        >
            <Text style={{ fontSize: 15, fontWeight: '700' }}>{title}</Text>
            <Text style={{ opacity: 0.7, fontSize: 16 }}>{price}</Text>
        </View>
    )
}

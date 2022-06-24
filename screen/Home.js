import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import Categorys from '../components/Categorys';
import HeaderTabs from '../components/HeaderTabs';
import Restaurants from '../components/Restaurants';
import SearchBar from '../components/SearchBar';

export default function Home() {
    return (
        <View
            style={{
                backgroundColor: '#eee',
            }}
        >
            <HeaderTabs />
            <SearchBar />
            {/* <ScrollView
                horizontal={false}
                showsVerticalScrollIndicator={false}
            > */}
            <Categorys />
            {/* </ScrollView> */}
            <Restaurants />
        </View>
    );
}

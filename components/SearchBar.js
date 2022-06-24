import React from 'react';
import { Text, View, TouchableOpacity, Image, Button } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Ionicon from 'react-native-vector-icons/Ionicons';
export default function SearchBar() {
    return (
        <View
            style={{
                flexDirection: 'row',
                backgroundColor: '#fff',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 15,
                paddingTop: 0,
            }}
        >
            <GooglePlacesAutocomplete
                query={'INPUT'}
                styles={{
                    textInputContainer: {
                        padding: 5,
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#eee',
                        borderRadius: 50,
                    },
                    textInput: {
                        paddingTop: 10,
                        backgroundColor: '#eee',
                        color: '#000',
                        fontSize: 16,
                    },
                    poweredContainer: {
                        backgroundColor: '#eee',
                    },
                }}
                placeholder="Search"
                onPress={(data, details = null) => {
                    // 'details' is provided when fetchDetails = true
                    console.log(data, details);
                }}
                renderLeftButton={() => {
                    return (
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center',
                                paddingLeft: 5,
                            }}
                        >
                            <Ionicon name="location-sharp" size={24}></Ionicon>
                        </View>
                    );
                }}
                renderRightButton={() => {
                    return (
                        <View
                            style={{
                                flexDirection: 'row',
                                padding: 10,
                                marginRight: 5,
                                borderRadius: 50,
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: '#fff',
                            }}
                        >
                            <Ionicon name="time-sharp" size={14}></Ionicon>
                            <Text style={{ marginLeft: 5 }}>Search</Text>
                        </View>
                    );
                }}
            />
            <TouchableOpacity
                style={{
                    flexDirection: 'row',
                    paddingLeft: 10,
                    marginTop: -10,
                }}
            >
                <Ionicon name="funnel-sharp" size={22}></Ionicon>
            </TouchableOpacity>
        </View>
    );
}

import React from 'react'
import {SafeAreaView, ImageBackground, Text, StyleSheet} from 'react-native'

export default function Header() {
    const now = new Date()
    const hour = now.getHours()
    let currentlyBackground
    
    if(hour >= 6 && hour < 12) {
        currentlyBackground = 'https://i.ytimg.com/vi/wuLKvcn-c7A/maxresdefault.jpg'
    } else if(hour >= 12 && hour < 18) {
        currentlyBackground = 'https://images.pexels.com/photos/2386144/pexels-photo-2386144.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    } else {
        currentlyBackground = 'https://images.pexels.com/photos/355465/pexels-photo-355465.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    }
    return (
        <SafeAreaView>
            <ImageBackground
                source={{uri: currentlyBackground}}
                style={styles.background}
            >
                <Text style={styles.todoText}>To-Do</Text>
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    background: {
        width: '100%',
        height: 200,
        alignItems: 'center',
        justifyContent: 'center'
    },
    todoText: {
        fontSize: 30,
        color: '#fff',
        backgroundColor: 'rgba(0, 0, 0, 0.61)',
        borderRadius: 4,
        padding: 10,
    }
})
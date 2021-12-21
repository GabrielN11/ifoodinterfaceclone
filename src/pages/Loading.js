import React from 'react'
import { StyleSheet, Text, View, Animated } from 'react-native'

const Loading = () => {
    const firstDot = React.useState(new Animated.Value(1))
    const secondDot = React.useState(new Animated.Value(1))
    const thirdDot = React.useState(new Animated.Value(1))

    Animated.loop(
        Animated.sequence([
            Animated.timing(firstDot[0], {
                toValue: 1.3,
                duration: 200,
                useNativeDriver: true
            }),
            Animated.timing(firstDot[0], {
                toValue: 1,
                duration: 200,
                useNativeDriver: true
            }),
            Animated.timing(secondDot[0], {
                toValue: 1.3,
                duration: 200,
                useNativeDriver: true
            }),
            Animated.timing(secondDot[0], {
                toValue: 1,
                duration: 200,
                useNativeDriver: true
            }),
            Animated.timing(thirdDot[0], {
                toValue: 1.3,
                duration: 200,
                useNativeDriver: true
            }),
            Animated.timing(thirdDot[0], {
                toValue: 1,
                duration: 200,
                useNativeDriver: true
            })
        ])
    ).start()
    return (
        <View style={styles.loading}>
            <Dot scale={firstDot[0]} />
            <Dot scale={secondDot[0]} />
            <Dot scale={thirdDot[0]} />
        </View>
    )
}

const Dot = ({ scale }) => {
    return (
        <Animated.View style={{
            width: 10,
            height: 10,
            borderRadius: 10 / 2,
            backgroundColor: '#ea1d2c',
            marginRight: 10,
            transform: [{ scale: scale }]
        }} />
    )
}

const styles = StyleSheet.create({
    loading: {
        marginTop: 150,
        alignSelf: 'center',
        flexDirection: 'row'
    }
})

export default Loading

import React, { useRef } from 'react'
import {
  SafeAreaView,
  ScrollView,
  Text,
  StyleSheet,
  View,
  ImageBackground,
  Animated,
  useWindowDimensions,
} from 'react-native'

import { TapGestureHandler, State } from 'react-native-gesture-handler'

const images = [
  'https://i.ibb.co/rbxRL1D/undraw-smart-home-re-orvn.png',
  'https://i.ibb.co/XxXHh4y/undraw-Internet-on-the-go-re-vben.png',
  'https://i.ibb.co/CPYdvvW/undraw-Time-management-re-tk5w-1.png',
  'https://i.ibb.co/8BT9RFR/undraw-Savings-re-eq4w-1.png',
  'https://i.ibb.co/xLzSLbZ/undraw-Order-confirmed-re-g0if.png',
]
const imageText = [
  'Control Your House',
  'Fast and Easy',
  'Gain Time',
  'Save Money',
  'Double tap to make your life simpler !!',
]
const Swiper = ({ navigation }) => {
  const scrollX = useRef(new Animated.Value(0)).current

  const { width: windowWidth } = useWindowDimensions()
  const doubleTapRef = useRef(null)

  const _onDoubleTap = (event) => {
    if (event.nativeEvent.state === State.ACTIVE) {
      navigation.navigate('Login')
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.scrollContainer}>
        <TapGestureHandler
          ref={doubleTapRef}
          onHandlerStateChange={_onDoubleTap}
          numberOfTaps={2}
        >
          <ScrollView
            horizontal={true}
            pagingEnabled 
            showsHorizontalScrollIndicator={false}
            onScroll={Animated.event([
              {
                nativeEvent: {
                  contentOffset: {
                    x: scrollX,
                  },
                },
              },
            ])}
            scrollEventThrottle={1}
          >
            {images.map((image, imageIndex) => {
              return (
                <View style={{ width: windowWidth }} key={imageIndex}>
                  <ImageBackground source={{ uri: image }} style={styles.card}>
                    <View style={styles.textContainer}>
                      <Text style={styles.infoText}>
                        {imageText[imageIndex]}
                      </Text>
                    </View>
                  </ImageBackground>
                </View>
              )
            })}
          </ScrollView>
        </TapGestureHandler>
        <View style={styles.indicatorContainer}>
          {images.map((image, imageIndex) => {
            const width = scrollX.interpolate({
              inputRange: [
                windowWidth * (imageIndex - 1),
                windowWidth * imageIndex,
                windowWidth * (imageIndex + 1),
              ],
              outputRange: [8, 16, 8],
              extrapolate: 'clamp',
            })
            return (
              <Animated.View
                key={imageIndex}
                style={[styles.normalDot, { width }]}
              />
            )
          })}
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollContainer: {
    height: 400,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    flex: 1,
    marginVertical: 30,
    marginHorizontal: 16,
    borderRadius: 5,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  textContainer: {
    backgroundColor: 'rgba(0,0,0, 0.7)',
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 5,
  },
  infoText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  normalDot: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: 'silver',
    marginHorizontal: 4,
  },
  indicatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default Swiper

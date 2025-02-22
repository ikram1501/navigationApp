import React from 'react'
import { Image, StyleSheet } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ProgateService from './progateService'
import ProgateEvent from './progateEvent'
import HomeIcon from '../assets/home.png'
import ProgateIcon from '../assets/user.png'

const Tab = createBottomTabNavigator()

const Progate = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Progate Service"
        component={ProgateService}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => (
            <Image source={HomeIcon} style={styles.homeIcon} />
          ),
        }}
      />
      <Tab.Screen
        name="Progate Event"
        component={ProgateEvent}
        options={{
          tabBarLabel: 'Progate',
          tabBarIcon: () => (
            <Image source={ProgateIcon} style={styles.progateIcon} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  homeIcon: {
    width: 20,
    height: 20,
  },
  progateIcon: {
    width: 20,
    height: 20,
  },
})

export default Progate
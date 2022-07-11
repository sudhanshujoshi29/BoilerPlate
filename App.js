/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
const App = () => {
  return (
    <View style={styles.main_container}>
      <Text>Github Actions</Text>
    </View>
  )
}
export default App
const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})
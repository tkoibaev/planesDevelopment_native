import React from "react"
import { View, Text, TouchableOpacity, StyleSheet } from "react-native"

const NavigationBar = () => {
  const handleNavigation = (routeName: string) => {
    console.log("Navigating to:", routeName)
  }

  return (
    <View style={styles.navBar}>
      <TouchableOpacity
        style={[styles.navItem, { backgroundColor: "#33cccc" }]}
      >
        <Text style={styles.navText}>Planes Development</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  navBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#33cccc",
    width: "100%",
    paddingVertical: 20,
  },
  navItem: {
    flex: 1,
    alignItems: "center",
  },
  navText: {
    color: "white",
    fontSize: 18,
    marginTop: 50,
    textAlign: "center",
    backgroundColor: "#33cccc",
  },
})

export default NavigationBar

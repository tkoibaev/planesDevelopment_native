import React, { useState } from "react"
import axios from "axios"
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native"

export type OptionData = {
  id: number
  title: string
  category: string
  description: string
  price: string
  image: string
  // category: string
}

interface ObjectCardProps {
  option: OptionData
  onDetailsPress: () => void
}

const ObjectCard: React.FC<ObjectCardProps> = ({ option }) => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image source={{ uri: option?.image }} style={styles.image} />
        <View style={styles.details}>
          <Text style={styles.title}>{option?.title}</Text>
          <Text style={styles.info}>{option?.category}</Text>
          <Text style={styles.info}>{option?.price} $</Text>

          {/* <Text style={styles.price}>{object.price}</Text> */}
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
  },
  card: {
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#33cccc",
    color: "#fff",
    borderRadius: 8,
    // padding: 40,
    marginVertical: 8,
    elevation: 2,
    width: "100%",
    height: 300,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 8,
    // marginRight: 12,
  },
  details: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  info: {
    fontSize: 16,
    color: "#fff",
  },
  price: {
    fontSize: 14,
    color: "#fff",
  },
})

export default ObjectCard

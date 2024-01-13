import React, { useState } from "react"
import { View, Text, Button, Pressable, StyleSheet, Image } from "react-native"
import axios from "axios"
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native"
import { OptionData } from "./OptionCard"
import NavigationBar from "./navbar"

type SubscriptionDetailsRouteProp = RouteProp<
  {
    subscriptionDetailsScreen: { subscription: OptionData }
  },
  "subscriptionDetailsScreen"
>

const ObjectDetailsScreen: React.FC = () => {
  const navigation = useNavigation()
  const route = useRoute<SubscriptionDetailsRouteProp>()
  const [currentSubscription, setSubscription] = useState<OptionData>()
  const { subscription } = route.params
  const getSubscription = async () => {
    try {
      const response = await axios(
        `http://192.168.0.101:8000/options/${subscription.id}`,
        {
          method: "GET",
        }
      )
      setSubscription({
        id: response.data.id,
        title: response.data.title,
        price: response.data.price,
        description: response.data.description,
        image: response.data.image,
        category: response.data.category,
      })
    } catch (e) {
      throw e
    }
  }

  React.useEffect(() => {
    getSubscription()
  }, [])

  return (
    <View style={styles.container}>
      <NavigationBar />
      <View style={styles.content}>
        <Image source={{ uri: subscription?.image }} style={styles.image} />
        <Text style={styles.title}>{subscription?.title} </Text>
        <Text style={styles.info}> {subscription?.price}$</Text>
        <Text style={styles.info}>{subscription?.description}</Text>
        {/* Дополнительная информация о объекте */}
      </View>
      <Pressable style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.text}>Назад</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: "100%", // Пример задания ширины изображения
    aspectRatio: 1,
    borderRadius: 10,
    marginBottom: 10, // Добавляем отступ снизу для текста
  },
  content: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  info: {
    fontSize: 18,
    marginBottom: 5,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "#33cccc",
    marginTop: 10,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
})

export default ObjectDetailsScreen

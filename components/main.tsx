import React, { useEffect, useState } from "react"
import { View, FlatList, TextInput, StyleSheet } from "react-native"
import axios from "axios"
import OptionCard, { OptionData } from "./OptionCard"
import NavigationBar from "./navbar"
import { TouchableOpacity, Text } from "react-native"
import { StackNavigationProp } from "@react-navigation/stack"

export type ReceivedOptionData = {
  id: number
  title: string
  category: string
  description: string
  price: string
  image: string
  // category: string
}

type RootStackParamList = {
  MainScreen: undefined
  SubscriptionDetailsScreen: { subscription: OptionData }
}

type MainScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "MainScreen"
>

interface MainScreenProps {
  navigation: MainScreenNavigationProp
}

const MainScreen: React.FC<MainScreenProps> = ({ navigation }) => {
  const [options, setOptions] = useState<OptionData[]>([])
  const [filteredOptions, setFilteredOptions] = useState<OptionData[]>([])
  const [searchQuery, setSearchQuery] = useState<string>("")

  const getOptions = async () => {
    try {
      const response = await axios(
        `http://172.20.10.3:8000/options/?search=${searchQuery}`,
        {
          method: "GET",
        }
      )
      const options = response.data.options
      const newArr = options.map((raw: ReceivedOptionData) => ({
        id: raw.id,
        title: raw.title,
        price: raw.price,
        description: raw.description,
        image: raw.image ? raw.image.replace("localhost", "172.20.10.3") : "dd",
        category: raw.category,
      }))
      setFilteredOptions(newArr)
    } catch (e) {
      throw e
    }
  }

  useEffect(() => {
    getOptions()
  }, [searchQuery, options])

  const handleDetailsPress = (subscription: OptionData) => {
    console.log("Details Pressed:", subscription.title)
    navigation.navigate("SubscriptionDetailsScreen", { subscription })
  }

  const renderSubscriptionCard = ({ item }: { item: OptionData }) => {
    return (
      <TouchableOpacity
        style={styles.cardContainer}
        onPress={() => handleDetailsPress(item)}
      >
        <View>
          <OptionCard option={item} onDetailsPress={() => {}} />
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <View style={styles.container}>
      <NavigationBar />
      <TextInput
        style={styles.input}
        placeholder="Поиск по категории"
        onChangeText={(text) => setSearchQuery(text)}
        value={searchQuery}
      />
      <View style={{ flex: 1 }}>
        <FlatList
          contentContainerStyle={styles.aaa}
          // style={styles.aaa}
          data={filteredOptions}
          renderItem={renderSubscriptionCard}
          keyExtractor={(item) => item.id.toString()}
        ></FlatList>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
  },
  aaa: {
    // flex: 1,
    flexDirection: "row",
    // justifyContent: "space-between",
    gap: 2.5,
    flexWrap: "wrap",
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
    marginTop: 10,
  },
  cardContainer: {
    // width: "100%",
    width: 190,
    height: 300,
  },
})

export default MainScreen

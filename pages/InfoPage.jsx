import React from "react"
import styled from "styled-components/native"
import { Text, View, ActivityIndicator } from "react-native"
import { axiosInstance } from "../API"
const PostImage = styled.Image`
  border-radius: 10px;
  width: 100%;
  height: 250px;
  margin-bottom: 20px;
`

const PostTitle = styled.Text`
  font-size: 30px;
  font-weight: 700;
  line-height: 34px;
`
const PostDescription = styled.Text`
  font-size: 18px;
  line-height: 24px;
  color: grey;
`
const PostPrice = styled.Text`
  color: #33cccc;
  margin-top: 10px;
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: 600;
  line-height: 24px;
`

const OptionsMock = [
  {
    id: 1,
    title: "Салон эконом-класса",
    category: "Салоны",
    description:
      "Салон эконом-класса воздушного самолета предназначен для пассажиров, которые выбирают более доступные билеты. В салоне эконом-класса обычно предлагается комфортное пространство для пассажиров, с достаточным количеством мест для сидения. Хотя расстояние между рядами может быть немного меньше, чем в других классах, пассажиры все равно могут наслаждаться относительным комфортом и удобствами.",
    features: [""],
    available: true,
    price: 1000,
    image: "src/assets/mockImg/cabin.png",
  },
  {
    id: 2,
    title: "Двигатель ПД-8",
    category: "Двигатели",
    description:
      "Двигатель ПД-8 является двухконтурным турбовентилятором с высоким удельным импульсом и большой тягой. Он оснащен современной системой управления и контроля, обеспечивающей оптимальную эффективность работы и надежность.",
    features: [""],
    available: true,
    price: 2000,
    image: "src/assets/mockImg/engine.png",
  },
  {
    id: 3,
    title: "Салон бизнес-класса",
    category: "Салоны",
    description:
      "Салон бизнес-класса воздушного самолета предлагает роскошную обстановку и дополнительные удобства для пассажиров, которые ценят комфорт во время полета. В этом классе предоставляется просторное пространство с комфортабельными креслами, которые могут раскладываться в полностью горизонтальную позицию, обеспечивая возможность отдыха и сна.",
    features: [""],
    available: true,
    price: 3000,
    image: "src/assets/mockImg/cabin.png",
  },
  {
    id: 4,
    title: "Двигатель ПД-14",
    category: "Двигатели",
    description:
      "Двигатель ПД-14 (Паровой Двигатель-14) - это современный российский двухконтурный турбовентиляторный авиационный двигатель, разработанный для использования в пассажирских самолетах средней и дальней дальности, таких как МС-21. Двигатель ПД-14 является важным компонентом развития отечественной авиационной промышленности и призван обеспечить надежность, эффективность и экологическую безопасность воздушных перевозок.",
    features: [""],
    available: true,
    price: 4000,
    image: "src/assets/mockImg/engine.png",
  },
  {
    id: 5,
    title: "Навигационная РЛС",
    category: "Авионика",
    description:
      "Французская компания Thales производит бортовые РЛС, которые обеспечивают навигационную поддержку самолетам в условиях низкой видимости, плохой погоды и ночного времени. Эти системы обнаруживают и отслеживают земные препятствия, а также помогают определить точное положение самолета в режиме реального времени.",
    features: [""],
    available: true,
    price: 5000,
    image: "src/assets/mockImg/control.png",
  },
  {
    id: 6,
    title: "Двигатель ПД-35",
    category: "Двигатели",
    description:
      'ПД-35 (Паровый Двигатель-35) - это предполагаемый российский двухконтурный турбовентиляторный авиационный двигатель разработки компании "Первое Двигательное Бюро" (ПДБ), предназначенный для использования на широкофюзеляжных пассажирских самолетах дальней дальности.',
    features: [""],
    available: true,
    price: 6000,
    image: "src/assets/mockImg/engine.png",
  },
]

export const InfoPage = ({ route, navigation }) => {
  const [isLoading, setIsLoading] = React.useState(true)
  const [data, setData] = React.useState()
  const { id, title } = route.params

  const fetchOption = () => {
    navigation.setOptions({
      title,
    })

    axiosInstance
      .get(`/options/` + `${id}`)
      .then(({ data }) => {
        setData(data)
      })
      .catch((err) => {
        console.log(err)
        alert("Ошибка, не удалось получить статью")
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  React.useEffect(() => {
    fetchOption()
  }, [])

  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ActivityIndicator size="large" />
        <Text>Loading...</Text>
      </View>
    )
  }

  return (
    <View style={{ padding: 20 }}>
      <PostImage
        source={{
          uri: data.image.replace("localhost", "172.20.10.3"),
        }}
      />
      <PostTitle>{data.title}</PostTitle>
      <PostPrice>{data.price} $</PostPrice>
      <PostDescription>{data.description}</PostDescription>
    </View>
  )
}

export default InfoPage

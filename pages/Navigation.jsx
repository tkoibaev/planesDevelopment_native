import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer } from "@react-navigation/native"
import { InfoPage } from "./InfoPage"
import { MainPage } from "./MainPage"

const Stack = createNativeStackNavigator()

// <Routes>....</Routes> => Stack.Navigator

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MainPage"
          component={MainPage}
          options={{ title: "Опции" }}
        />
        <Stack.Screen
          name="InfoPage"
          component={InfoPage}
          options={{ title: "Опция" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

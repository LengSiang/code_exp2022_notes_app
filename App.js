import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as SQlite from "expo-sqlite";
import NotesStack from "./screens/NotesStack";
import AddScreen from "./screens/AddScreen";

const db = SQlite.openDatabase("notes.db");

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator mode="modal" headerMode="none">
        <Stack.Screen
          name="Notes Stack"
          component={NotesStack}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Add note" component={AddScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

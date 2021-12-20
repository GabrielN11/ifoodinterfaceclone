import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabRoutes from "./pages/TabRoutes";
import Login from './pages/Login'
import { StatusBar } from "expo-status-bar";


const Stack = createNativeStackNavigator()

const Routes = () => {
    return (
        <NavigationContainer>
            <StatusBar/>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
                <Stack.Screen name="TabRoutes" component={TabRoutes} options={{headerShown: false}} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes
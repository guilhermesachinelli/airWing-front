import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/Home";
import Category from "../screens/Category";
import Hoteis from "../screens/Home";

const Stack = createNativeStackNavigator();

const StackRoutes = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Category" component={Category} />
    </Stack.Navigator>
  );
};

export default StackRoutes;

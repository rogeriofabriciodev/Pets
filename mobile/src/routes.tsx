import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from './pages/Home';
import LocateAdoption from './pages/LocateAdoption';
import Donate from './pages/Donate';
import Adoption from './pages/Adoption';
import SubmitDonateConfirm from './pages/SubmitDonateConfirm';

const AppStack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        headerMode="none"
        screenOptions={{
          cardStyle: {
            backgroundColor: '#f0f0f5'
          }
        }}
      >
        <AppStack.Screen name="Home" component={Home} />
        <AppStack.Screen name="LocateAdoption" component={LocateAdoption} />
        <AppStack.Screen name="Donate" component={Donate} />
        <AppStack.Screen name="Adoption" component={Adoption} />
        <AppStack.Screen name="SubmitDonateConfirm" component={SubmitDonateConfirm} />
      </AppStack.Navigator>
    </NavigationContainer>
  )
}

export default Routes;
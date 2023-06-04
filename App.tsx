import React, { useLayoutEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ROUTES } from "./utils/routes";
import FilterScreen from "./src/screens/Home/Home";
import { COLORS } from "./src/styles/styles";
import Details from "./src/screens/Details/Details";
import DetailsHeader from "./src/components/DetailsHeader/DetailsHeader";
import { FILTER_TYPE } from "./src/components/FiltersList/FiltersList";
import moment from "moment";
import "moment/locale/ru";

export interface IDetailsParams {
  readonly orderNumber: string;
  readonly created_at: string;
  readonly views: number;
  readonly type: Omit<FILTER_TYPE, "ALL">;
  readonly orderId: number;
}

export type RootStackParamList = {
  [ROUTES.HOME]: undefined;
  [ROUTES.DETAILS]: IDetailsParams;
};

const Stack = createStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  useLayoutEffect(() => {
    moment.locale("ru");
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#fff",
          },
          cardStyle: { backgroundColor: COLORS.lightGrey },
          headerTitleAlign: "left",
          headerTitleStyle: {
            fontSize: 20,
            fontWeight: "600",
            color: COLORS.black,
          },
        }}
      >
        <Stack.Screen
          name={ROUTES.HOME}
          component={FilterScreen}
          options={{
            title: "Заявки на перевозки",
          }}
        />
        <Stack.Screen
          name={ROUTES.DETAILS}
          component={Details}
          options={{
            header: props => <DetailsHeader stackProps={props} />,
            headerStyle: {
              backgroundColor: "#fff",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

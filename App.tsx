import * as React from 'react';
import { NavigationContainer, createNavigationContainerRef } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import EpisodeDetails from './src/screens/EpisodeDetails';
import Character from './src/screens/Character';
import Fav from './src/screens/Fav';
import SplashScreen from './src/screens/SplashScreen';
import { Provider } from 'react-redux';
import store from './redux/store';
import {
  HomeHeader,
  EpisodeDetailsHeader,
  CharacterHeader,
  FavHeader,
  SplashScreenHeader,
} from './compenents/Header';

const Stack = createNativeStackNavigator();
export const navigationRef = createNavigationContainerRef();


const App = () => {

  const [routeName, setRouteName] = React.useState<string | undefined>();

  return (
    <Provider store={store}>
      <NavigationContainer
         ref={navigationRef}
         onReady={() => {
          setRouteName(navigationRef.getCurrentRoute()?.name);
        }}
        onStateChange={async () => {
          const previousRouteName = routeName;
          const currentRouteName = navigationRef.getCurrentRoute()?.name;
          console.log('Previous Route:', previousRouteName); 
          console.log('Current Route:', currentRouteName);
          setRouteName(currentRouteName);
  
          await analytics().logScreenView({
            screen_name: currentRouteName,
            screen_class: currentRouteName,
            previous_screen_name: previousRouteName,
          });
        }}>
        <Stack.Navigator initialRouteName="Splash">
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              header: HomeHeader,
            }}
          />
          <Stack.Screen
            name="EpisodeDetails"
            component={EpisodeDetails}
            options={({ route }) => ({
              header: () => <EpisodeDetailsHeader route={route} />,
            })}
          />
          <Stack.Screen
            name="Character"
            component={Character}
            options={({ route }) => ({
              header: () => <CharacterHeader route={route} />,
            })}
          />
          <Stack.Screen
            name="Fav"
            component={Fav}
            options={{
              header: FavHeader,
            }}
            initialParams={{ favorites: [] }}
          />
          <Stack.Screen
            name="Splash"
            component={SplashScreen}
            options={{
              header: SplashScreenHeader,
            }}
            initialParams={{ favorites: [] }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;

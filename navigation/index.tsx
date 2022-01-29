
import {Octicons, MaterialCommunityIcons, Fontisto, MaterialIcons, FontAwesome5} from '@expo/vector-icons'
import {NavigationContainer, DefaultTheme, DarkTheme} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {ColorSchemeName, View as DefaultView} from 'react-native'

import Colors from '../constants/Colors'
import useColorScheme from '../hooks/useColorScheme'
import {RootStackParamList, RootTabParamList} from '../types'
import LinkingConfiguration from './LinkingConfiguration'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import {View} from '../components/Themed'

import {
  ChatsListScreen,
  StatusScreen,
  NotFoundScreen,
  CallsScreen,
  CameraScreen,
  // ModalScreen,
} from '../screens'


export default function Navigation({colorScheme}: {colorScheme: ColorSchemeName}) {
  return (
      <NavigationContainer
          linking={LinkingConfiguration}
          theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <RootNavigator/>
      </NavigationContainer>
  )
}

const Stack = createNativeStackNavigator<RootStackParamList>()

function RootNavigator() {
  return (
      <Stack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: Colors.light.tint,
        },
        headerTintColor: Colors.light.background,
        headerTitleAlign: 'left',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
        <Stack.Screen name="Root" component={TopTabNavigator} options={{
          headerShadowVisible: false,
          title: 'WhatsApp',
          headerRight: HeaderRight,
        }}/>
        <Stack.Screen name="NotFound" component={NotFoundScreen} options={{title: 'Oops!'}}/>
        {/*<Stack.Group screenOptions={{ presentation: 'modal' }}>*/}
        {/*  <Stack.Screen name="Modal" component={ModalScreen} />*/}
        {/*</Stack.Group>*/}
        <Stack.Screen name={'ChatScreen'} component={ChatsListScreen} options={({route}) => ({
          title: route.params.name,
          headerRight: () => (
              <View style={{flexDirection: 'row', width: 120, justifyContent: 'space-between'}}>
                <FontAwesome5 name="video" size={22} color={Colors.light.background}/>
                <MaterialIcons name="call" size={22} color={Colors.light.background}/>
                <MaterialCommunityIcons name="dots-vertical" size={22} color={Colors.light.background}/>
              </View>
          ),
        })}/>
      </Stack.Navigator>
  )
}

const TopTab = createMaterialTopTabNavigator<RootTabParamList>()

function TopTabNavigator() {
  const colorScheme = useColorScheme()

  return (
      <TopTab.Navigator initialRouteName="Chats"
                        screenOptions={{
                          tabBarActiveTintColor: Colors[colorScheme].background,
                          tabBarStyle: {
                            backgroundColor: Colors[colorScheme].tint,
                          },
                          tabBarIndicatorStyle: {
                            backgroundColor: Colors[colorScheme].background,
                            height: 4,
                          },
                          tabBarLabelStyle: {
                            fontWeight: 'bold',
                          },
                          tabBarShowIcon: true,
                        }}>
        <TopTab.Screen name="Camera" component={CameraScreen}
                       options={{
                         tabBarIcon: () => <Fontisto name="camera" color={Colors[colorScheme].tabIconDefault}
                                                     size={18}/>,
                         tabBarShowLabel: false,
                       }}
        />
        <TopTab.Screen name="Chats" component={ChatsListScreen}/>
        <TopTab.Screen name="Status" component={StatusScreen}/>
        <TopTab.Screen name="Calls" component={CallsScreen}/>

      </TopTab.Navigator>
  )
}

const HeaderRight = () => {
  return (
      <DefaultView style={{flexDirection: 'row', width: 60, justifyContent: 'space-between', marginRight: -4}}>
        <Octicons name="search" size={20} color={Colors.light.background}/>
        <MaterialCommunityIcons name="dots-vertical" size={20} color={Colors.light.background}/>
      </DefaultView>
  )
}

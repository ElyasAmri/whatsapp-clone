import {CompositeScreenProps, NavigatorScreenParams} from '@react-navigation/native'
import {NativeStackScreenProps} from '@react-navigation/native-stack'
import {MaterialTopTabScreenProps} from '@react-navigation/material-top-tabs'

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {
    }
  }
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined
  ChatScreen: {
    id: string
    name: string
  }
  NotFound: undefined
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
    NativeStackScreenProps<RootStackParamList, Screen>;

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
    CompositeScreenProps<MaterialTopTabScreenProps<RootTabParamList, Screen>,
        NativeStackScreenProps<RootStackParamList>>;

export type RootTabParamList = {
  Camera: undefined
  Chats: undefined
  Status: undefined
  Calls: undefined
}

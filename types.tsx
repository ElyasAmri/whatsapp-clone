import {CompositeScreenProps, NavigatorScreenParams} from '@react-navigation/native'
import {NativeStackScreenProps} from '@react-navigation/native-stack'
import {MaterialTopTabScreenProps} from '@react-navigation/material-top-tabs'

// -- Screen types & Props

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

// Main Tabs
export type RootTabParamList = {
  Camera: undefined
  Chats: undefined
  Status: undefined
  Calls: undefined
}

export type ChatListItemProps = {
  id: string
  name: string
  image: string
  lastMessage: Message | undefined
}

// -- Functionality Data Types

export type User = {
  id: string
  name: string
  avatar: string
}

export type Chat = {
  id: string
  name: string
  image: string
  members: string[]
  messages: Message[]
}

export type Message = {
  id: string
  content: string
  timestamp: number
  sender: string
}

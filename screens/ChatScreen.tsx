import {FlatList, StyleSheet} from 'react-native'
import {useRoute} from '@react-navigation/native'
import type {RouteProp} from '@react-navigation/native'

import {useFetchChatData} from '../hooks/data'
import ChatMessage from '../components/ChatMessage'
import type {RootStackParamList} from '../types'

export default function ChatScreen() {
  const route = useRoute<RouteProp<RootStackParamList, 'ChatScreen'>>()
  const chat = useFetchChatData(route.params.id)

  if (!chat) {
    return null
  }

  const {messages} = chat

  return (
      <FlatList data={messages}
                renderItem={({item: message}) => <ChatMessage {...message}/>}
                keyExtractor={(item) => item.id}
                style={styles.screen}
      />
  )
};

const styles = StyleSheet.create({
  screen: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    flex: 1,
  },
})

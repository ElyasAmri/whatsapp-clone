import {FlatList, ListRenderItem} from 'react-native'
import _ from 'lodash'

import {useFetchChatList} from '../hooks/data'
import ChatListItem from '../components/ChatListItem'
import type {Chat} from '../types'

export default function ChatsListScreen() {
  const chatList = useFetchChatList('u1')

  const renderItem: ListRenderItem<Chat> = ({item: chat}) => (
      <ChatListItem {...chat} lastMessage={_.last(chat.messages)}/>
  )

  const keyExtractor = (item: Chat) => item.id

  return (
      <FlatList
          data={chatList}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
      />
  )
}

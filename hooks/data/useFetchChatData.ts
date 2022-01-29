import {useEffect, useState} from 'react'
import {Chat} from '../../types'
import {chats as data} from '../../data'

export default function useFetchChatData(id: string) {
  const [chat, setChat] = useState<Chat>()

  useEffect(() => {
    // TODO: fetch actual data from database data
    const res = data.find(c => c.id === id)

    if (!res) {
      throw new Error('Chat does not exist')
    }

    setChat(res)
  }, [])

  return chat
}

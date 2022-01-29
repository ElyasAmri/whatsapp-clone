import {useState, useEffect} from 'react'
import {chats as data} from '../../data'
import type {Chat} from '../../types'

export default function useFetchChatList(user: string): Chat[] {
  const [chats, setChats] = useState<Chat[]>([])

  useEffect(() => {
    // TODO: fetch actual data from database data
    setChats(data.filter(chat => chat.members.includes(user)))
  }, [])

  return chats
}

import type {Chat, User} from './types'

const chats : Chat[] = [
  {
    id: 'c1',
    name: 'Chat 1',
    image: 'https://picsum.photos/400/400',
    members: [
      'u1',
      'u2',
    ],
    messages: [
      {
        id: 'c1m1',
        content: 'Message 1 in Chat 1 from User 1',
        timestamp: '1632215318910',
        sender: 'u1',
      },
      {
        id: 'c1m2',
        content: 'Message 2 in Chat 1 from User 2',
        timestamp: '1632215318944',
        sender: 'u2',
      },
    ],
  },
  {
    id: 'c2',
    name: 'Chat 2',
    image: 'https://picsum.photos/400/400',
    members: [
      'u1',
      'u3',
    ],
    messages: [
      {
        id: 'c2m1',
        content: 'Message 1 in Chat 1 from User 1',
        timestamp: '1632215319910',
        sender: 'u1',
      },
      {
        id: 'c2m2',
        content: 'Message 2 in Chat 1 from User 3',
        timestamp: '1632215319944',
        sender: 'u3',
      },
    ],
  },
]

const users: User[] = [
  {
    id: 'u1',
    name: 'User 1',
    avatar: 'https://picsum.photos/400/400'
  },
  {
    id: 'u2',
    name: 'User 2',
    avatar: 'https://picsum.photos/400/400'
  },
  {
    id: 'u3',
    name: 'User 3',
    avatar: 'https://picsum.photos/400/400'
  },
]

export {chats, users}


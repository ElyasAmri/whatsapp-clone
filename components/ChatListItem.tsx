import {
  Image, Platform,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import moment from 'moment'
import type {ChatListItemProps} from '../types'

export default function ChatListItem({id, name, image, lastMessage}: ChatListItemProps) {
  const navigation = useNavigation()

  const content = (
      <View style={styles.container}>
        <Image source={{uri: image}} style={styles.image}/>
        <View style={styles.data}>
          {/*<Text>{id}</Text>*/}
          <Text style={styles.name}>{name}</Text>
          {lastMessage &&
              <>
                <Text style={styles.lastMessage}>{lastMessage.content}</Text>
                <Text style={styles.timestamp}>{moment(lastMessage.timestamp).format('DD/MM/YYYY')}</Text>
              </>
          }
        </View>
      </View>
  )

  const chatPressed = () => {
    navigation.navigate('ChatScreen', {id: id, name: name})
  }

  return Platform.OS === 'android'
      ? <TouchableNativeFeedback onPress={chatPressed} children={content}/>
      : <TouchableOpacity onPress={chatPressed} children={content}/>
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 80,
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 100,
    marginRight: 15,
  },
  data: {
    position: 'relative',
    flex: 1,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  lastMessage: {
    color: '#ababab',
    fontSize: 16,
  },
  timestamp: {
    position: 'absolute',
    top: 4,
    right: 0,
    fontSize: 12,
  },
})

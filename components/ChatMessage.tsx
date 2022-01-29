import {StyleSheet, Text, View} from 'react-native'
import {Message} from '../types'
import Colors from '../constants/Colors'
import moment from 'moment'

export default function ChatMessage({sender, content, timestamp}: Message) {
  const left = sender !== 'u1'

  return (
      <View style={[styles.container, left ? styles.containerLeft : styles.containerRight]}>
        <Text>{left ? sender : 'You'}</Text>
        <Text>{content}</Text>
        {/*TODO: fix moment date format issue*/}
        <Text style={styles.timestamp}>{moment(timestamp).format('HH:MM')}</Text>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    minHeight: 60,
    minWidth: '35%',
    maxWidth: '90%',
    overflow: 'hidden',
    paddingHorizontal: 4,
    paddingTop: 4,
    paddingBottom: 20,
    position: 'relative',
    marginVertical: 5,
  },
  containerLeft: {
    backgroundColor: Colors.light.background,
    borderBottomLeftRadius: 10,
    borderTopRightRadius: 10,
    alignSelf: 'flex-start',
  },
  containerRight: {
    backgroundColor: '#5be163',
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    alignSelf: 'flex-end',
  },
  timestamp: {
    color: '#808080',
    fontSize: 12,
    position: 'absolute',
    bottom: 2,
    right: 4,
  },
})

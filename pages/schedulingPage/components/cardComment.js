import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { IconButton } from 'react-native-paper'

const CardComment = (props) => {
  return (
    <View key={props.key} style={styles.commentCardContainer}>
      <View key={props.key} style={styles.commentCardHearder}>
        <Text key={props.key}>{props.email}</Text>
        <View key={props.key} style={styles.likeAndDislike}>
          <IconButton
            key={props.key}
            icon={props.isLike
              ? "thumb-up"
              : "thumb-up-outline"
            }
          />
          <IconButton
            key={props.key}
            icon={props.isDisLike
              ? "thumb-down"
              : "thumb-down-outline"
            }
          />
        </View>
      </View>
      <View key={props.key}>
        <Text key={props.key}>{props.comment}</Text>
      </View>
    </View>
  )
}

export default CardComment

const styles = StyleSheet.create({
  commentCardContainer: {
    padding: 10
  },
  commentCardHearder: {
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'space-between'
  },
  likeAndDislike:{
    flexDirection:'row'
  }
})
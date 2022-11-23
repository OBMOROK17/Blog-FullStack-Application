import React, { useEffect, useCallback } from "react";
import {
  View,
  Image,
  Text,
  ScrollView,
  StyleSheet,
  Button,
  Alert,
  Platform
} from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { HeaderButtons, Item } from "react-navigation-header-buttons";

import { THEME } from "../theme";
import { AppHeaderIcon } from "../components/AppHeaderIcon";
import { bookedPost, deletePost } from "../store/actions/post";

export const PostScreen = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const postId = route.params.postId;
  const post = useSelector(state =>
    state.post.allPosts.find(post => post.id === postId)
  );

  const bookedToggle = useCallback(() => {
    dispatch(bookedPost(post));
  }, [dispatch, post]);

  useEffect(() => {
    navigation.setParams({ bookedToggle });
  }, [bookedToggle]);

  const booked = useSelector(state =>
    state.post.bookedPosts.some(post => post.id === postId)
  );

  useEffect(() => {
    navigation.setParams({ booked });
  }, [booked]);

  const removeHandler = () => {
    Alert.alert(
      "Удаление поста",
      "Вы уверены?",
      [
        {
          text: "Отменить",
          style: "cancel"
        },
        {
          text: "Удалить",
          style: "destructive",
          onPress: () => {
            navigation.navigate("Main");
            dispatch(deletePost(postId));
          }
        }
      ],
      { cancelable: false }
    );
  };

  if (!post) {
    return null;
  }

  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: post.img }} />
      <View style={styles.textWrapper}>
        <Text>{post.text}</Text>
      </View>
      <Button title="Удалить" color={THEME.DANGER_COLOR} onPress={removeHandler} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200
  },
  textWrapper: {
    paddingVertical: 20,
    paddingHorizontal: 10
  }
});

PostScreen.navigationOptions = ({ route }) => {
  const date = route.params.date;
  const booked = route.params.booked;
  const bookedToggle = route.params.bookedToggle;

  return {
    title: date,
    headerStyle: {
      backgroundColor: THEME.ORANGE_COLOR
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontFamily: "nunito-bold"
    },
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
        <Item
          title="star"
          iconName={booked ? "star" : "staro"}
          onPress={() => bookedToggle()}
        />
      </HeaderButtons>
    )
  };
};

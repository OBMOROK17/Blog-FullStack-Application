import React from "react";
import { useSelector } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import { AppHeaderIcon } from "../components/AppHeaderIcon";
import { PostList } from "../components/PostList";

export const BookScreen = ({ navigation }) => {
  const openPostHandler = post => {
    navigation.navigate("Post", {
      postId: post.id,
      date: new Date(post.date).toLocaleDateString(),
      booked: post.booked
    });
  };

  const data = useSelector(state => state.post.bookedPosts);

  return <PostList data={data} onOpen={openPostHandler} />;
};

BookScreen.navigationOptions = ({ navigation }) => {
  return {
    title: "Избранное",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
        <Item
          title="bars"
          iconName="bars"
          onPress={() => navigation.toggleDrawer()}
        />
      </HeaderButtons>
    )
  };
};

import React, { useEffect, useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { likePost, unLikePost, getPost } from "../../../actions/postActions";
import {
  LayOut,
  ActiveLikeButton,
  NotActiveLikeButton,
  LikeCount,
  CommentButton,
  CommentCount,
} from "./index.style";

export default function PostIconBox({ like, comment, postId, hearted }) {
  const [isLikeAction, setIsLikeAction] = useState(hearted);

  const [likeCount, setLikeCount] = useState(like);

  const dispatch = useDispatch();

  const likeAction = postId => {
    dispatch(likePost(postId));
    setIsLikeAction(true);
    setLikeCount(current => current + 1);
  };

  const unLikeAction = () => {
    dispatch(unLikePost(postId));
    setIsLikeAction(false);
    setLikeCount(current => current - 1);
  };

  return (
    <LayOut>
      {isLikeAction ? (
        <ActiveLikeButton onClick={() => unLikeAction(postId)}>
          <LikeCount>{likeCount}</LikeCount>
        </ActiveLikeButton>
      ) : (
        <NotActiveLikeButton onClick={() => likeAction(postId)}>
          <LikeCount>{likeCount}</LikeCount>
        </NotActiveLikeButton>
      )}

      <CommentButton>
        <CommentCount>{comment}</CommentCount>
      </CommentButton>
    </LayOut>
  );
}

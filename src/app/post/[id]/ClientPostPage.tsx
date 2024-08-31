"use client";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSpecificPost } from "@/lib/Redux/PostsSlice";
import { reduxStore } from "@/lib/Redux/ReduxStore";
import Post from "@/app/_components/Post/Post";
import Loading from "@/app/loading";
import { Grid } from "@mui/material";

  

export default function ClientPostPage({ specificPost: initialPost }:any) {
  const dispatch = useDispatch<typeof reduxStore.dispatch>();
  const { specificPost } = useSelector(
    (store: ReturnType<typeof reduxStore.getState>) => store.posts
  );

  useEffect(() => {
    if (!specificPost) {
      dispatch(getSpecificPost(initialPost.id));
    }
  }, [initialPost.id]);

  return specificPost ? (
    <Grid container>
      <Grid item md={6} xs={12} sx={{ marginInline: "auto" }}>
        <Post postObj={specificPost} isAllComments />
      </Grid>
    </Grid>
  ) : (
    <Loading />
  );
}

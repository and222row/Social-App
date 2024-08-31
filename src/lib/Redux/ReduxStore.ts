import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./AuthSlice";
import postsSlice from "./PostsSlice";
export const reduxStore = configureStore({
  reducer: {
    auth: authReducer,
    posts: postsSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: [
          "posts/getPosts/fulfilled",
          "posts/getUserPosts/fulfilled",
          "posts/getPost/fulfilled",
        ],
        // Ignore these field paths in all actions
        ignoredActionPaths: ["meta.arg", "payload.timestamp"],
        // Ignore these paths in the state
        ignoredPaths: ["items.dates"],
      },
    }),
});

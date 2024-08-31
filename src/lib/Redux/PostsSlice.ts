import { PostType } from "@/app/_interfaces/home.types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState: {
  allPosts: PostType[] | null;
  specificPost: PostType | null;
  userPosts: PostType[] | null;
} = {
  allPosts: null,
  specificPost: null,
  userPosts: null,
};

// Define an interface for the thunk payload
interface AddPostPayload {
  body: string;
  image: File | null;
}

export const getSpecificPost = createAsyncThunk(
  "posts/getPost",
  async function (id: string) {
    return await axios.get<{ post: PostType }>(
      `https://linked-posts.routemisr.com/posts/${id}`,
      {
        headers: {
          token: localStorage.getItem("loggedUser"),
        },
      }
    );
  }
);
export const addComment = createAsyncThunk(
  "posts/addComment",
  async function (payload: { content: string; post: string } | unknown) {
    return await axios.post(
      `https://linked-posts.routemisr.com/comments`,
      payload,
      {
        headers: {
          token: localStorage.getItem("loggedUser"),
        },
      }
    );
  }
);

// Adding new Post
export const addPost = createAsyncThunk(
  "posts/addPost",
  async function ({ body, image }: AddPostPayload) {
    try {
      const formData = new FormData();
      formData.append("body", body);
      if (image) {
        formData.append("image", image);
      }

      // Debugging FormData content
      // formData.forEach((value, key) => {
      //   console.log(`${key}:`, value);
      // });

      const res = await axios.post(
        "https://linked-posts.routemisr.com/posts",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            token: localStorage.getItem("loggedUser") || "",
          },
        }
      );
      console.log("actual response ====> ", res);
      return res.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);
export const getAllPosts = createAsyncThunk(
  "posts/getPosts",
  async function () {
    return await axios
      .get<{ posts: PostType[] }>(
        `https://linked-posts.routemisr.com/posts?limit=40`,
        {
          headers: {
            token: localStorage.getItem("loggedUser"),
          },
        }
      )
      .then((res) => res);
  }
);
export const getUserPosts = createAsyncThunk(
  "posts/getUserPosts",
  async function (userId: any) {
    return await axios.get<{ posts: PostType[] }>(
      `https://linked-posts.routemisr.com/users/${userId}/posts?limit=30`,
      {
        headers: {
          token: localStorage.getItem("loggedUser"),
        },
      }
    );
  }
);
export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: function (builder) {
    builder.addCase(getAllPosts.fulfilled, function (state, action) {
      console.log("action", action.payload.data.posts);
      state.allPosts = action.payload.data.posts;
    });

    builder.addCase(getSpecificPost.fulfilled, function (state, action) {
      state.specificPost = action.payload.data.post;
    });
    builder.addCase(addComment.fulfilled, function (state, action) {
      console.log(action);
    });
    builder.addCase(addPost.fulfilled, function (state, action) {
      console.log("Post Added => ", action.payload);
    });
    builder.addCase(getUserPosts.fulfilled, function (state, action) {
      console.log("user posts ", action.payload.data.posts);
      state.userPosts = action.payload.data.posts;
    });
  },
});

export default postsSlice.reducer;

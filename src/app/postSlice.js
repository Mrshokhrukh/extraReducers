import { createSlice, createAsyncThunk, nanoid } from "@reduxjs/toolkit";

let baseUrl = `https://jsonplaceholder.org/posts/`;

const initialState = {
  posts: [],
  status: "",
  isLoading: true,
  error: null,
};

export const getPostsAsync = createAsyncThunk(
  `posts/getPostsAsync`,
  async () => {
    const resp = await fetch(baseUrl)
      .then((res) => res.json())
      .catch((err) => console.log(err));
    return resp;
  }
);

let { pending, fulfilled, rejected } = getPostsAsync;

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.posts.push(action.payload);
    },
    deletePost: (state, action) => {
      state.posts = state.posts.filter((item) => item.id !== action.payload);
    },
    // commentPost: (state, action) => {
    //   let id = action.payload.id;
    //   let comment = action.payload.comment;
    //   let findPost = state.posts.find((item) => item.id == id);
    //   findPost.reactions.comments.push(comment);
    // },
    // likePost: (state, action) => {
    //   let id = action.payload.id;
    //   let findPost = state.posts.find((item) => item.id == id);
    //   findPost.reactions.likes++;
    // },
    // savePost: (state, action) => {},
  },
  extraReducers: {
    [pending]: (state, action) => {
      state.isLoading = true;
    },
    [fulfilled]: (state, action) => {
      state.posts = action.payload;
      state.isLoading = false;
    },
    [rejected]: (state, action) => {
      state.isLoading = false;
    },
  },
});
export const { addPost, deletePost, commentPost, likePost } = postSlice.actions;
export default postSlice.reducer;

import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  images: [],
  isLoading: false,
  error: null,
  likedImages: [],
  count: null,
};

const gallerySlice = createSlice({
  name: 'gallery',
  initialState,
  reducers: {
    getImagesPending: state => {
      state.isLoading = true;
      state.error = null;
    },
    getImagesFulfilled: (state, action) => {
      state.isLoading = false;
      state.images = action.payload;
    },
    getImagesRejected: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    handleLike: (state, action) => {
      const data = action.payload;
      const {id} = data;
      let list = [...state.likedImages];

      const exits = list.some(item => item?.id === id);
      if (exits) list = list.filter(item => item.id != id);
      else {
        list.push(data);
      }
      state.likedImages = list;
    },
  },
});

export const {
  getImagesPending,
  getImagesFulfilled,
  getImagesRejected,
  handleLike,
} = gallerySlice.actions;
export default gallerySlice.reducer;

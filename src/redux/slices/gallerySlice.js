import {createSlice} from '@reduxjs/toolkit';

// defining states in store
const initialState = {
  images: [],
  isLoading: false,
  likedImages: [],
  count: null,
};

const gallerySlice = createSlice({
  name: 'gallery',
  initialState,
  reducers: {
    // api controlling functions
    getImagesPending: state => {
      state.isLoading = true;
    },
    getImagesFulfilled: (state, action) => {
      state.isLoading = false;
      action?.payload?.map(item => state.images.push(item));
      // state.images=[...state.images , ...action.payload];
    },
    getImagesRejected: (state, action) => {
      state.isLoading = false;
    },
    // app controlling functions
    handleLike: (state, action) => {
      // getting data from payload
      const data = action.payload;
      const {id} = data;
      let list = [...state.likedImages];

      // to check if the data is already in likedImages if not then add
      let limit = 3;

      const exits = list.some(item => item?.id === id);
      if (exits) list = list.filter(item => item.id != id);
      else if (list?.length < limit) {
        list.push(data);
      }

      // adding list back to likedImages
      state.likedImages = list;
    },
  },
});

//exporting to make accessable to dispatch
export const {
  getImagesPending,
  getImagesFulfilled,
  getImagesRejected,
  handleLike,
} = gallerySlice.actions;
export default gallerySlice.reducer;

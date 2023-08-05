import {configureStore, combineReducers} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import galleryReducer from './slices/gallerySlice';
import {watcherSaga} from './saga/gallery';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    gallery: galleryReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({thunk: false}).concat(sagaMiddleware),
});
sagaMiddleware.run(watcherSaga);

export default store;

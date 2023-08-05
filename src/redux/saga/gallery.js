// gallerySaga.js
import {put, takeLatest, call} from 'redux-saga/effects';
import {
  getImagesPending,
  getImagesFulfilled,
  getImagesRejected,
} from '../slices/gallerySlice';
import {getImagesApi} from '../../api/apiConstants';

function* fetchImages({payload}) {
  try {
    // console.log('---------------', getImagesApi + payload);
    const response = yield call(fetch, getImagesApi + payload);
    if (!response.ok) {
      throw new Error('Error fetching images.');
    }
    const data = yield response.json();
    yield put(getImagesFulfilled(data?.photos));
  } catch (error) {
    yield put(getImagesRejected(error.message));
  }
}

export function* watcherSaga() {
  yield takeLatest(getImagesPending.type, fetchImages);
}

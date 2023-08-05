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
    // using saga to api calls
    // i would have used axios but that would take more memory for such small task/project
    const response = yield call(fetch, getImagesApi + payload);
    if (!response.ok) {
      throw new Error('Error fetching images.');
    }
    // adding data to redux store
    const data = yield response.json();
    yield put(getImagesFulfilled(data?.photos));
  } catch (error) {
    // handling failed api res
    yield put(getImagesRejected(error.message));
  }
}

export function* watcherSaga() {
  yield takeLatest(getImagesPending.type, fetchImages);
}

// // sagas.js
//
// import { takeEvery, put, call } from 'redux-saga/effects'; // Import call from redux-saga/effects
// import { FETCH_DATA, receiveData } from '..action'; // Update the import path for actions
//
// // Define your API function here or import it from another file
// const api = {
//     fetchData: () => {
//         // Logic to fetch data asynchronously
//         return fetch('your-api-endpoint')
//             .then(response => response.json())
//             .catch(error => { throw error; });
//     }
// };
//
// function* fetchDataSaga() {
//     try {
//         const data = yield call(api.fetchData); // Use call effect to call the API function
//         yield put(receiveData(data));
//     } catch (error) {
//         // Handle errors if necessary
//     }
// }
//
// export default function* rootSaga() {
//     yield takeEvery(FETCH_DATA, fetchDataSaga);
// }

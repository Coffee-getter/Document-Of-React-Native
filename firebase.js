/*
 * @Author: heye
 * @Date: 2022-07-15 11:20:35
 * @LastEditors: heye
 * @LastEditTime: 2022-07-15 16:53:21
 * @FilePath: \new-project\firebase.js
 * @Description: 数据库
 *
 */
//import firebase from 'firebase'
// const firebaseConfig = {
//     databaseURL: 'https://uber-eats-rn-59ceb.firebaseio.com',
//     apiKey: 'AIzaSyDuzZcmN3BGr1lzaOIX4FAyYyET-jn5nY4',
//     authDomain: 'uber-eats-rn-59ceb.firebaseapp.com',
//     projectId: 'uber-eats-rn-59ceb',
//     storageBucket: 'uber-eats-rn-59ceb.appspot.com',
//     messagingSenderId: '660366621543',
//     appId: '1:660366621543:web:544db9fd93a0c20cf00dc2',
// }

// // console.log(firebase.app(), 'app')
// try {
//     !firebase.apps?.length ? firebase.initializeApp(firebaseConfig) : firebase.app()
// } catch (e) {
//     console.log(e)
// }
// export default firebase
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: 'AIzaSyDuzZcmN3BGr1lzaOIX4FAyYyET-jn5nY4',
    authDomain: 'uber-eats-rn-59ceb.firebaseapp.com',
    projectId: 'uber-eats-rn-59ceb',
    storageBucket: 'uber-eats-rn-59ceb.appspot.com',
    messagingSenderId: '660366621543',
    appId: '1:660366621543:web:544db9fd93a0c20cf00dc2',
}
const app = initializeApp(firebaseConfig)
export default app

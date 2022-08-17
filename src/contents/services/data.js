import firebase from '../firebase';

const diary = firebase.ref('/user-data/user-diary');
const action = firebase.ref('/user-data/user-action');

class DataService {
  // getAll() {
  //   return db;
  // }

  sendDiary(key, item) {
    return diary.child(key).push(item);
  }

  sendAction(key, item) {
    return action.child(key).push(item);
  }

  // update(key, value) {
  //   return db.child(key).update(value);
  // }

  // delete(key) {
  //   return db.child(key).remove();
  // }

  // deleteAll() {
  //   return db.remove();
  // }
}

export default new DataService();

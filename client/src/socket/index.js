import io from 'socket.io-client';
import $C from '../constants';

const socket = io('http://localhost:8081');

export const syncWithStore = (store) => {
  socket.on($C.LOBBY.CONNECT, ({ success, connectedUsers, gameList, user }) => {
    if (success) {
      console.log(store);
      store.commit('auth/connected', {
        user,
        gameList,
        connectedUsers,
      });
    }
  });
};

export default socket;

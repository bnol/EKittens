<template>
  <div id="login">
    <form v-on:submit.prevent="onSubmit">
      <div>
        <img id="logo" alt="Logo" src="../assets/images/logo.png" />
      </div>
      <div>
        <input v-model="nickname" type="text" placeholder="Type your name">
      </div>
      <div>
        <button type="submit">Join</button>
      </div>
      <div class="error" style="display: none;"></div>
    </form>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import socket from '@/socket';
import $C from '@/constants';

export default {
  name: 'Rooms',
  data() {
    return {
      nickname: '',
    };
  },
  beforeUpdate() {
    if (this.connected) {
      const { $router } = this;
      $router.push('/games');
    }
  },
  computed: {
    ...mapState({
      connected: state => state.auth.connected,
    }),
  },
  methods: {
    onSubmit() {
      const { nickname } = this;
      socket.emit($C.LOBBY.CONNECT, { nickname });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
#login {
  display: flex;
  align-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  width: 100%;

  input {
    font-size: 35px;
    font-weight: 400;
    margin: 6px auto;
    padding: 8px 10px;
    width: 100%;
    border: none;
    outline: none;
    background: transparent;
    color: #fff;
    width: 35%;
    font-family: "bebas_neuebold";
    margin-left: 1.3em;
    &::placeholder {
      color: #fff;
    }
  }

  button {
    display: inline-block;
    position: relative;
    margin: 0;
    border: none;
    outline: none;
    padding: 1rem 2rem 1rem;
    font-size: 2.6rem;
    line-height: 1;
    color: #fafafa !important;
    font-family: "bebas_neuebold";
    cursor: pointer;
    background: #b40a1d;
    border-radius: .3rem;
    -webkit-transition: all 250ms ease;
    -o-transition: all 250ms ease;
    transition: all 250ms ease;
    -webkit-box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.45);
    box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.45);
    text-shadow: 0 1px 0 rgba(0, 0, 0, 0.2);
    background: #000;
  }
}

#logo {
  width: 50%;
}
</style>

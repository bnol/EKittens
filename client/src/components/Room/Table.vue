<template>
  <div class="table">
    <div class="container">
      <div class="info">
        <div>BnoL's turn</div>
        <div>Chance of Kitten: 20%</div>
      </div>
      <!-- card deck -->
      <div class="deck" v-on:click="draw()">
        <span>23 cards left</span>
      </div>
      <div class="pile">
        <ul>
          <!--
          <card type="attack" />
          <card type="attack" />
          <card type="attack" />
          <card type="attack" />
          -->
          <card type="nope" />
        </ul>
        <span>LAST PLAYED</span>
      </div>
    </div>
  </div>
</template>

<script>

import card from './Card';

export default {
  name: 'Table',
  components: {
    card,
  },
  props: ['draw'],
};
</script>

<style lang="scss" scoped>
.table {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex: 4;

  .container {
    position: fixed;
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: center;

    .deck {
      display: flex;
      width: 8em;
      height: 8em;
      border-radius: 10px;
      background: rgba(0, 0, 0, 0.5);
      align-items: center;
      justify-content: center;
      cursor: pointer;
      background: url('../../assets/cards/back.png');
      background-size: 100%;
      box-shadow: 3px 3px 8px -1px rgba(0, 0, 0, 1);
      margin-right: 5%;

      span {
        position: absolute;
        bottom: -2em;
        font-weight: 700;
      }
    }

    .pile {
      display: flex;
      justify-content: center;
      position: relative;
      ul {
        padding: 0;
        margin: 0;
        white-space: nowrap;

        .card {
          position: relative;
          width: 8em;
          height: 8em;
          margin-left: -6em;

          &:first-child {
            margin-left: 0;
          }
        }
      }
      span {
        position: absolute;
        bottom: -2em;
        font-weight: 700;
      }
    }

    .info {
      margin-right: 5%;
      font-size: 1.3em;
    }
  }
}
</style>

<template>
  <div class="room">
    <hand :cards="hand" :moveCard="moveCard" />
    <the-table :draw="draw" />
    <players />
  </div>
</template>

<script>

import players from './Players';
import table from './Table';
import hand from './Hand';

export default {
  name: 'Room',
  components: {
    hand,
    'the-table': table,
    players,
  },
  data() {
    /**
      id: this.id,
      title: this.title,
      status: this.status,
      players: this.getPlayers(),
      currentPlayerIndex: this.cUserIndex,
      drawPileLength: this.drawPile.length,
      nopeTime: this.nopeTime
     */
    const { $route } = this;
    return {
      id: $route.params.id,
      title: 'Game title',
      status: 'PLAYING',
      players: [],
      hand: ['attack', 'beard', 'cattermelon', 'defuse', 'favor', 'future', 'nope', 'potato', 'rainbow',
        'reverse',
        'shuffle',
        'skip'].map(type => ({
          id: Math.random(),
          type,
        })),
    };
  },
  methods: {
    randomIndex() {
      return Math.floor(Math.random() * this.hand.length);
    },
    draw() {
      this.hand.splice(this.randomIndex(), 0, {
        id: Math.random(),
        type: 'beard',
      });
    },
    remove() {
      this.hand.splice(this.randomIndex(), 1);
    },
    moveCard(oldIndex, newIndex) {
      const cards = [...this.hand];
      cards.splice(newIndex, 0, cards.splice(oldIndex, 1)[0]);
      this.hand = cards;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.room {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column-reverse;
  overflow: hidden;
  overflow-x: auto;
  justify-content: space-between;
}
</style>

<template>
  <div id="games">
    <ul>
      <li v-for="game in games" :key="game.id" class="game">
        <div class="title">{{ game.title }}</div>
        <div class="status">{{ game.status }}</div>
        <div class="players">Players: {{ game.players.length }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Games',
  data() {
    const games = [];

    for (let i = 1; i <= 10; i += 1) {
      games.push({
        id: i,
        title: `Game ${i}`,
        // Game status. WAITING or PLAYING.
        status: i % 3 ? 'WAITING' : 'PLAYING',
        // Array of connected players
        players: [{}, {}, {}, {}],
        // Current player index
        currentIndex: 0,
        // The amount of cards left in the draw pile
        drawPileLength: 52,
        // The amount of time to nope a card in milliseconds
        nopeTime: 5000,
      });
    }
    return {
      games,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  ul {
    list-style: none;
    margin: 0;
    padding: 1em;
  }
  .game {
    background: rgba(0, 0, 0, 0.5%);
    margin-bottom: 0.4em;
    padding: 0.4em;
    border-radius: 0.3em;
    & > div {
      display: inline-block;
      font-size: 1.6em;
    }
    .title {
      color: #fff;
      width: 15%;
    }
    .status {
      width: 15%;
    }
  }
</style>

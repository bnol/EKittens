import { GAME } from '../constants';

export default class Game {
  constructor(id, title, status, players, index, drawPileLength, nopeTime) {
    // Game id
    this.id = id;

    // Game title
    this.title = title;

    // Game status. WAITING or PLAYING.
    this.status = status;

    // Array of connected players
    this.players = players;

    // Current player index
    this.currentIndex = index;

    // The amount of cards left in the draw pile
    this.drawPileLength = drawPileLength;

    // The amount of time to nope a card in milliseconds
    this.nopeTime = nopeTime;
  }

  // Get a player in the game
  getPlayer(user) {
    return this.players.find(player => player.user === user.id) || null;
  }

  // Update a player in the game if they exist
  updatePlayer(data) {
    if (!data) {
      return;
    }
    const player = this.getPlayer(data.user);
    if (player) {
      player.user = data.user.id;
      player.alive = data.alive;
      player.ready = data.ready;
      player.drawAmount = data.drawAmount;
      player.cardCount = data.cardCount;
    }
  }

  // Get the current host
  getHost() {
    return this.players[0] || null;
  }

  // Check whether user is the host
  isGameHost(user) {
    const host = this.getHost();
    return host && host.user === user.id;
  }

  /**
   * Get the current player who's turn it is
   * @returns {Object} The current player or null
   */
  getCurrentPlayer() {
    return this.players[this.currentIndex] || null;
  }

  /**
   * Check if game can be started
   * @returns {Boolean} Whether game can be started
   */
  canStart() {
    return this.status === GAME.STATUS.WAITING && this.players.every(player => player.ready);
  }
}

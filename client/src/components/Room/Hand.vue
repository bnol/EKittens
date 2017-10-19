<template>
  <div class="hand">
    <transition-group name="card-transition" tag="ul" ref="cards">
      <card v-for="(card, index) in cards" :key="card.id" :type="card.type" :id="card.id" v-bind:style="{'z-index': index}" />
    </transition-group>
  </div>
</template>

<script>

import { Sortable } from '@shopify/draggable';
import card from './Card';

export default {
  name: 'Hand',
  components: {
    card,
  },
  props: ['cards', 'moveCard'],
  mounted() {
    new Sortable([this.$refs.cards.$el], {
      draggable: 'li',
    }).on('sortable:stop', ({ oldIndex, newIndex }) => {
      if (oldIndex === newIndex) {
        return;
      }
      // Weird bug from Sortable
      // if (newIndex > oldIndex) {
      //   newIndex -= 1;
      // }
      this.moveCard(oldIndex, newIndex > oldIndex ? newIndex - 1 : newIndex);
    });
  },
  beforeUpdate() {
    console.log('b4 update');
  },
  updated() {
    console.log('updated');
  },
};
</script>

<style lang="scss" scoped>
.hand {
  display: flex;
  margin-bottom: -3em;
  // width: 100%;
  flex: 4;

  ul {
    display: block;
    padding-top: 2em;
    list-style-type: none;
    white-space: nowrap;
    // overflow: hidden;
    // overflow-x: auto;
    width: 100%;
    -webkit-overflow-scrolling: touch;
    text-align: center;
    li {
      transition: all 1s;
      margin-left: -2em;
      position: relative;
      &:nth-child(even) {
        transform: translateY(-0.3em);
      }
    }
  }

  .card-transition-enter,
  .card-transition-leave-to {
    opacity: 0;
    transform: translateY(-50px) !important;
  }

  .card-transition-leave-active {
    position: absolute;
  }

  .draggable-source--is-dragging {
    opacity: 0.5;
  }
}
</style>

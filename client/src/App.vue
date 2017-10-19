<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style lang="scss">
html,
body,
#app {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
}

@font-face {
  font-family: "bebas_neuebold";
  src: url("assets/fonts/bebas-neue/bebasneue_bold-webfont.woff2") format("woff2"),
  url("assets/fonts/bebas-neue/bebasneue_bold-webfont.woff") format("woff");
  font-weight: bold;
  font-style: normal;
}

@font-face {
  font-family: "bebas_neueregular";
  src: url("assets/fonts/bebas-neue/bebasneue_regular-webfont.woff2") format("woff2"),
  url("assets/fonts/bebas-neue/bebasneue_regular-webfont.woff") format("woff");
  font-weight: normal;
  font-style: normal;
}

body {
  background-color: #b40a1d;
  background-image: -o-radial-gradient(circle, #b40a1d 10%, #48140f 100%);
  background-image: radial-gradient(circle, #b40a1d 10%, #48140f 100%);
  background-repeat: no-repeat;
  background-attachment: fixed;
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr="#b40a1d",
  endColorstr="#48140f",
  GradientType=1);
}

#app {
  font-family: 'bebas_neueregular', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fff;
}

.card {
  max-width: 100%;
  background-size: 100%;
  background: transparent;
  background-image: url('./assets/cards/sprite.png');
}

.card-attack {
  background-position: 0 0%;
  background-size: 100%;
}

.card-beard {
  background-position: 0 8.333333%;
  background-size: 100%;
}

.card-cattermelon {
  background-position: 0 16.666667%;
  background-size: 100%;
}

.card-defuse {
  background-position: 0 25%;
  background-size: 100%;
}

.card-favor {
  background-position: 0 33.333333%;
  background-size: 100%;
}

.card-future {
  background-position: 0 41.666667%;
  background-size: 100%;
}

.card-nope {
  background-position: 0 50%;
  background-size: 100%;
}

.card-potato {
  background-position: 0 58.333333%;
  background-size: 100%;
}

.card-rainbow {
  background-position: 0 66.666667%;
  background-size: 100%;
}

.card-reverse {
  background-position: 0 75%;
  background-size: 100%;
}

.card-shuffle {
  background-position: 0 83.333333%;
  background-size: 100%;
}

.card-skip {
  background-position: 0 91.666667%;
  background-size: 100%;
}

.card-tacocat {
  background-position: 0 100%;
  background-size: 100%;
}
</style>

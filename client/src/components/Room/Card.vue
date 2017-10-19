<template>
  <li :class="`card card-${type}`" />
</template>

<script>
export default {
  name: 'Card',
  props: ['id', 'type'],
};
</script>

<style lang="scss" scoped>
li {
  display: inline-block;
  width: 130px;
  height: 130px;
  cursor: pointer;
  box-shadow: 3px 3px 8px -1px rgba(0,0,0,1);
  border-radius: 8px;
}
</style>

<template>
  <div class="timeline">
    <div class="grid-container">
      <div class="grid-item" style="grid-column: span 5">1</div>
      <div class="grid-item" style="grid-column: span 20">2</div>
      <div class="grid-item" style="grid-column: span 1">3</div>
      <div class="grid-item" style="grid-column: span 5">4</div>
      <div class="grid-item" style="grid-column: span 5">5</div>
      <div class="grid-item" style="grid-column: span 10">6</div>
      <div class="grid-item" style="grid-column: span 50">7</div>
      <div class="grid-item" style="grid-column: span 2">8</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Timeline",
  props: {
    headline: String
  }
};
</script>

<style lang="scss" src="../assets/styles/timeline.scss" />

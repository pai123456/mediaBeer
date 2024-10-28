<template>
  <div  i-class="flex align-middle" class="score-column">
    <div

      i-class="mr-10 overflow-hidden"
      class="score-progress"
    >
      <div

        class="progress -enter-x"
        :style="{ width: percent * 100 + '%' }"
      ></div>
    </div>
    <span
      i-class="text-primary fz-16 fw-bold"
      class="score-txt"
      >{{ data }}</span
    >
  </div>
</template>

<script>
export default {
  props: {
    data: Number
  },
  computed:{
    percent() {
      return Math.min(this.data / 1000, 1);
    }
  }
}
</script>

<style>
.score-progress {
    width: 107px;
    height: 10px;
    background-color: #dbefff;
    border-radius: 10px;
}
.score-progress .progress {
    height: 10px;
    background: linear-gradient(90deg,#3176ff,#53dcff);
    border-radius: 10px;
}
</style>

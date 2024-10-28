<template>
  <div class="public-select" v-show="visible">
    <div class="s-item">
      <div class="s-item-title">
        <div class="text">{{ title }}</div>
      </div>
      <div class="s-item-wrapper">
        <div class="s-item-list">
          <div
            class="list-item"
            v-for="(item, index) in list"
            :class="{ active: activeIndex === index }"
            :data-index="index"
            @click="onClick(index)"
          >
            <span>{{ item }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import isEmptyObject from "../utils/index.js";
export default {
  props: {
    list: Object,
    title: String,
  },

  data() {
    return {
      visible: false,
      activeIndex: 0, // 用于跟踪激活项的索引
    };
  },
  watch: {
    // 使用 watch 监听 list 的变化
    list: {
      handler(newVal) {
        // 当 list 发生变化时，异步更新 visible 的值
        this.$nextTick(() => {
          this.visible = !isEmptyObject(newVal);
          this.activeIndex = 0;
        });
      },
      deep: true, // 深度观察对象内部的变化
      immediate: true, // 立即执行一次处理函数，以确保初始状态的正确性
    },
  },
  methods: {
    onClick(value) {
      const index = parseInt(value);
      this.activeIndex = index; // 更新激活项索引
      // const dataset = { index };
      this.$emit("itemClick", index);
    },
  },
};
</script>

<style>
.s-item {
  height: 47px;
  display: flex;
  flex-direction: row;
  transition: all 0.3s linear;
}
.s-item-title {
  position: relative;
  width: 92px;
  height: 47px;
  line-height: 47px;
  background-color: #f5f5f5;
  font-size: 16px;
  color: #9a9a9a;
  text-align: center;
  border-right: 1px solid #eaeaea;
  margin-right: 10px;
  transition: all 0.3s linear;
}
.s-item-title .text {
  position: absolute;
  overflow: hidden;
  height: 47px;
  width: 100%;
  top: 0;
  left: 0;
}
.s-item-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex: 1;
  padding: 5px 0;
  overflow: hidden;
}

.s-item-wrapper[data-v-31734b1a] {
  display: flex;
  flex: 1;
}
.list-item {
  height: 37px;
  line-height: 37px;
  max-width: 75px;
  margin: 0 10px;
  color: #343434;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
  font-size: 14px;
  font-weight: 700;
}
.s-item-list .list-item {
  max-width: unset;
}
.btn-all,
.list-item.active,
.list-item:hover {
  color: #1890ff;
}
</style>

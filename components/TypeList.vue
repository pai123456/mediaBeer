<template>
  <ul i-class="flex" class="type-list">
    <li
      class="type-item"
      :class="{ active: activeIndex === index }"
      v-for="(item, index) in typeList"
      i-class="spread-1 text-center relative pointer"
      data-isleap="0"
      :data-name="item.value"
      :data-index="index"
      @click="onListItemClick(index)"
    >
      {{ item.text }}
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      typeList: [
        { value: "news-rank", text: "新闻影响力榜单" },
        { value: "reporter-rank", text: "记者影响力榜单" },
        {
          value: "reporter-rank",
          text: "记者影响力跃升榜单",
          isActive: false,
        },
        { value: "media-rank", text: "媒体影响力榜单" },
        { value: "media-rank", text: "媒体影响力跃升榜单" },
      ],
      activeIndex: 0, // 用于跟踪激活项的索引
    };
  },
  methods: {
    onListItemClick(index) {
      this.activeIndex = index;
    },
  },
};
</script>

<style>
.type-list {
  height: 44px;
  line-height: 44px;
  background-color: #f5f5f5;
}
.type-list .type-item.active {
  background-color: #fff;
}
.type-list .type-item.active:before,
.type-list .type-item:hover:before {
  content: "";
  position: absolute;
  display: inline-block;
  height: 3px;
  width: 100%;
  top: -1px;
  left: 0;
  background-color: #0096ff;
}
</style>

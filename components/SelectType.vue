<template>
  <div>
    <section class="pulic-type">
      <List :list="list" title="领域" @itemClick="listClick"></List>
    </section>
    <div class="select-lines select-block top">
      <List :list="subList" title="线口" @itemClick="sublistClick"></List>
    </div>
  </div>
</template>

<script>
import List from "./List.vue";
export default {
  components: { List },
  data() {
    return {
      list: [
        "不限",
        "时政",
        "社会",
        "文化",
        "生活",
        "健康",
        "科技",
        "产业",
        "商业",
        "财经",
        "其他",
      ],
      lists: [
        [],
        [
          "不限",
          "政策",
          "军事",
          "政务",
          "政要",
          "宗教",
          "国内时政",
          "国外时政",
          "其他时政",
        ],
        [
          "不限",
          "职场",
          "情感",
          "政务",
          "政要",
          "宗教",
          "国内时政",
          "国外时政",
          "其他时政",
        ],
      ],
      subList: {},
    };
  },
  methods: {
    listClick(index) {
      console.log("listClick", index);

      this.subList = this.lists[index]

      console.log("this.subList", this.subList);
    },
    sublistClick(e) {
      console.log("sublistClick", e);
    },
  },
};
</script>

<style></style>

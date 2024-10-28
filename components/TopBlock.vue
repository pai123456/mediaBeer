<template>
  <div i-class="relative" class="top-block">
    <div class="button-group rank-cycle-tab">
      <button
        i-class="fz-14 pointer"
        class="el-tooltip button-item"
        v-for="(item, index) in btnList"
        :class="{ active: activeIndex === index }"
        :key="index"
        @click="onClick(index)"
      >
        {{ item }}
      </button>
    </div>
    <section class="sort-block">
      <el-select v-model="value" placeholder="请选择">
        <el-option
          v-for="item in hourSelect"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>

      <el-tooltip
        class="item"
        effect="dark"
        content="统计数据截止时间：2024-10-25 12:00:00"
        placement="top"
      >
        <i class="el-icon-question"></i>
      </el-tooltip>

      <el-select class="report-select" v-model="typeValue" placeholder="请选择">
        <el-option
          v-for="item in typeSelect"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      btnList: ["实时","日榜","周榜","月榜",],
      hourSelect: [
        {
          value: "3",
          label: "3小时之内",
        },
        {
          value: "6",
          label: "6小时之内",
        },
        {
          value: "9",
          label: "9小时之内",
        },
        {
          value: "12",
          label: "12小时之内",
        },
      ],

      typeSelect: [
        {
          value: "article",
          label: "文章",
        },
        {
          value: "video",
          label: "视频",
        },
      ],
      value: "3",
      typeValue: "article",
      activeIndex: 0,
    };
  },
  methods: {
    onClick(index) {
      this.activeIndex = index; // 更新激活项索引
      this.$emit("btnClick", index);
    },
  },
};
</script>

<style>
.rank-header .rank-cycle-tab {
  height: 44px !important;
  margin: 12px 20px 12px 0;
}
.button-group {
  height: 34px;
  font-size: 0;
  display: inline-block;
  background-color: #fff;
  border: 1px solid #ebeef5;
  box-shadow: 0 0 5px 0 #ebeef5;
  border-radius: 4px;
  overflow: hidden;
}
.button-group button {
  outline: none;
  margin: 0;
  padding: 0;
  width: 88px;
  height: 100%;
  color: #666;
  border: none;
  border-right: 1px solid #ebeef5;
  background: transparent;

  &:hover {
    color: #000;
  }
}
.button-group button.active {
  background: #f0f3f6;
  color: #000;
}

.sort-block {
  position: relative;
  flex: 1;
}

.report-select {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translate3d(0, -50%, 0);
  width: 120px;
}
</style>

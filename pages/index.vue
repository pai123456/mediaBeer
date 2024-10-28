<template>
  <div id="app">
    <header class="header">
      <div class="header-wrapper">
        <div class="logo">
          <div id="logo-inner" class="logo-inner">
            <a href="https://media.beer/" class="nuxt-link-active"
              ><img

                src="https://mediarank.oss-cn-shenzhen.aliyuncs.com/_nuxt/img/logo_black.1072b6f.png"
                alt="牛媒-blue"
                class="logo-img"
            /></a>
          </div>
        </div>
        <div class="clearfix header-menu-wrap">
          <div

            class="header-nav header-nav-left header-nav-menu"
          >
            <ul class="menu">
              <!---->
              <li class="menu-item">
                <a href="https://media.beer/login" class=""
                  ><span>工作台</span></a
                >
              </li>
              <li class="menu-item selected">
                <a href="https://media.beer/news/rank" class="nuxt-link-active"
                  ><span>影响力榜单</span>
                  <img

                    src="data:image/png;base64,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"
                    alt=""
                    class="hot-icon"
                /></a>
              </li>
              <li class="menu-item">
                <a href="https://media.beer/event/rank" class=""> 热点榜单 </a>
              </li>
              <li class="menu-item">
                <a href="https://media.beer/enterprises/rank" class="">
                  机构露出榜
                </a>
              </li>
              <li class="menu-item">
                <a href="https://media.beer/people/rank" class="">
                  人物关注榜
                </a>
              </li>
              <li class="menu-item">
                <a href="https://media.beer/institute" class="">
                  牛媒研究院
                </a>
              </li>
              <!---->
            </ul>
          </div>
          <!--  -->
        </div>
        <ul id="user-info-nav" class="user-info-nav normal">
          <li class="h-actions-item register">
            <div class="item-btn">
              <span class="item-btn-txt">登录</span>
            </div>
            <div class="item-btn register">
              <span class="item-btn-txt">注册</span>
            </div>
          </li>
        </ul>
      </div>
    </header>
    <section class="news-rank-page app-container main">
      <img
        src="https://mediarank.oss-cn-shenzhen.aliyuncs.com/_nuxt/img/rank_bg.b96017b.png"
        alt="新闻影响力榜单背景插图"
        class="background-iis animation-fadeIn"
      />
      <div class="rank-header">
        <section class="filter-block">
          <TypeList></TypeList>
          <TopBlock></TopBlock>
          <section class="f-type-block">
            <SelectType></SelectType>
          </section>
        </section>
      </div>
      <Table></Table>
      <section></section>
    </section>
  </div>
</template>

<script>
import SelectType from "../components/SelectType.vue";
import TopBlock from "../components/TopBlock.vue";
import TypeList from "../components/TypeList.vue";
import Table from "../components/Table.vue";

export default {
  name: "IndexPage",
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
    };
  },
  components: { TopBlock, SelectType, TypeList, Table },
};
</script>

<style>
body {
    margin: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: -apple-system,BlinkMacSystemFont,PingFang SC,Segoe UI,Helvetica Neue,Helvetica,Hiragino Sans GB,Microsoft YaHei,Arial,sans-serif;
    color: #111;
    font-size: 14px;
    background-color: #f5f5f5;
}
li,
ol,
ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
a {
    color: inherit;
    text-decoration: none;
}
#__layout,
#__nuxt,
#app,
body,
html {
  height: 100%;
  min-width: 1080px;
  position: relative;
}
.app-container {
  max-width: 1040px;
  margin-left: auto;
  margin-right: auto;
}
.app-container.main {
  /* padding-top: 80px; */
  min-height: calc(100vh - 375px);
}

.header {
    position: absolute;
    z-index: 999;
    width: 100%;
    height: 65px;
    background: #fff;
    box-shadow: 0 0 10px rgb(0 0 0 / 10%);
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
@media only screen and (max-width: 1300px)
.header-wrapper {
    width: 1040px;
}
.header-wrapper {
    display: flex;
    justify-content: center;
    width: 1240px;
    min-width: 1040px;
    margin: 0 auto;
    overflow: hidden;
    height: 65px;
    transition: width .3s;
}
.logo, .logo-inner {
    display: flex;
    align-items: center;
}

.logo {
    height: 100%;
}
header .header-menu-wrap {
    position: relative;
    max-width: 1040px;
    flex: 1;
    display: flex;
    align-content: center;
    margin: 0 20px 0 25px;
}

.clearfix {
    display: block;
    zoom: 1;
}
.user-info-nav {
    position: relative;
    height: 65px;
    display: flex;
    align-items: center;
}
@media only screen and (max-width: 1300px)
.logo-inner {
    width: inherit!important;
    justify-content: inherit;
}
.logo-inner {
    height: 65px;
    justify-content: flex-end;
}
.logo, .logo-inner {
    display: flex;
    align-items: center;
}
.header .header-nav {
    display: flex;
    align-items: center;
    height: 100%;
}
.header .menu {
    display: flex;
    align-items: center;
    width: 100%;
}
.header .h-actions-item {
    color: #595959;
    line-height: 35px;
}
.header .h-actions-item .item-btn.register {
    margin-right: 0;
}
.header .h-actions-item .item-btn {
    display: inline-block;
    margin-right: 10px;
    width: 70px;
    height: 35px;
    line-height: 34px;
    color: #1890ff;
    border: 1px solid #1890ff;
    border-radius: 4px;
    text-align: center;
    cursor: pointer;
    transition: all .3s ease;
}
.header .menu-item:first-child a {
    padding-left: 0;
}

.header .menu-item a {
    position: relative;
    line-height: 65px;
    padding: 0 12px;
    font-size: 16px;
    color: #555;
}
header .menu-item:first-child a {
    padding-left: 0;
}

.header .menu-item a {
    position: relative;
    line-height: 65px;
    padding: 0 12px;
    font-size: 16px;
    color: #555;
}
.header .menu-item.selected a {
    font-weight: 500;
    color: #111!important;
}
header .menu-item .hot-icon {
    position: absolute;
    top: -20px;
    right: -10px;
    height: 30px;
    width: auto;
    z-index: -1;
}

.logo-img {
    width: 133px;
    height: auto;
}

img {
    display: block;
    border: none;
}
.author-rank-page .rank-header .filter-block,
.city-hot-page .rank-header .filter-block,
.enterprise-rank-page .rank-header .filter-block,
.event-rank-page .rank-header .filter-block,
.media-rank-page .rank-header .filter-block,
.news-rank-page .rank-header .filter-block,
.people-rank-page .rank-header .filter-block,
.reporters-rank-page .rank-header .filter-block,
.set-industry .rank-header .filter-block,
.spokesman-page .rank-header .filter-block {
  background-color: #fff;
  border: 1px solid #ebeef5;
  border-radius: 4px;
  overflow: hidden;
  position: relative;
}
.author-rank-page .rank-header .filter-block .top-block,
.city-hot-page .rank-header .filter-block .top-block,
.enterprise-rank-page .rank-header .filter-block .top-block,
.event-rank-page .rank-header .filter-block .top-block,
.media-rank-page .rank-header .filter-block .top-block,
.news-rank-page .rank-header .filter-block .top-block,
.people-rank-page .rank-header .filter-block .top-block,
.reporters-rank-page .rank-header .filter-block .top-block,
.set-industry .rank-header .filter-block .top-block,
.spokesman-page .rank-header .filter-block .top-block {
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px;
}
.author-rank-page .background-iis,
.city-hot-page .background-iis,
.enterprise-rank-page .background-iis,
.event-rank-page .background-iis,
.media-rank-page .background-iis,
.news-rank-page .background-iis,
.people-rank-page .background-iis,
.reporters-rank-page .background-iis,
.set-industry .background-iis,
.spokesman-page .background-iis {
  min-width: 1040px;
  width: 100%;
  height: 180px;
  object-fit: cover;
  position: absolute;
  top: 65px;
  left: 0;
  z-index: -1;
}
.author-rank-page .rank-header,
.city-hot-page .rank-header,
.enterprise-rank-page .rank-header,
.event-rank-page .rank-header,
.media-rank-page .rank-header,
.news-rank-page .rank-header,
.people-rank-page .rank-header,
.reporters-rank-page .rank-header,
.set-industry .rank-header,
.spokesman-page .rank-header {
  margin-bottom: 24px;
  position: relative;
}

[i-class~="flex"] {
  display: flex;
}
[i-class~="pointer"] {
  cursor: pointer;
}

[i-class~="spread-1"] {
  flex: 1;
}
[i-class~="text-center"] {
  text-align: center;
}
[i-class~="relative"] {
  position: relative;
}
[i-class~=ml-15] {
    margin-left: 15px;
}
[i-class~=text-primary] {
    color: #1890ff!important;
}
[i-class~=fw-bold] {
    font-weight: 700;
}
[i-class~=fz-16] {
    font-size: 16px!important;
}
[i-class~=align-middle] {
    align-items: center;
}
[i-class~=mr-10] {
    margin-right: 10px;
}
.news-rank-page {
  padding-top: 200px;
}

body .el-table .cell {
    color: #111;
    font-weight: 400;
}

.author-rank-page .f-type-block, .city-hot-page .f-type-block, .enterprise-rank-page .f-type-block, .event-rank-page .f-type-block, .media-rank-page .f-type-block, .news-rank-page .f-type-block, .people-rank-page .f-type-block, .reporters-rank-page .f-type-block, .set-industry .f-type-block, .spokesman-page .f-type-block {
    width: calc(100% - 40px);
    border-radius: 4px;
    border: 1px solid #eaeaea;
    overflow: hidden;
    margin: 0 auto 20px;
}
.select-block.top {
    border-top: 1px solid #eaeaea;
}
</style>

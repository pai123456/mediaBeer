<template>
  <section class="list-block">
    <section class="skeleton-wrapper animation-fadeIn">

    </section>
    <div class="news-rank-table animation-fadeIn">
      <el-table :data="tableData" style="width: 100%" stripe>
        <el-table-column prop="rank" label="排名" width="80" align="center">
          <template v-slot="scope">
            <div  i-class="ml-15 lh-1" class="rank-image">
              <img
                v-if="scope.row.rank === 1"
                src="data:image/png;base64,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"
                alt="第一名"
                class="rank-img"
              />
              <img
                v-else-if="scope.row.rank === 2"
                src="data:image/png;base64,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"
                alt="第二名"
                class="rank-img"
              />
              <img
                v-else-if="scope.row.rank === 3"
                src="data:image/png;base64,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"
                alt="第三名"
                class="rank-img"
              />
            </div>
            <div
              v-if="scope.row.rank > 3"
              i-class="ml-15 text-black fw-5"
              class="rank-count"
            >
              {{ scope.row.rank }}
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="title" label="新闻" width="300" class-name="el-tooltip">
        </el-table-column>
        <el-table-column prop="score" label="牛媒指数" width="200">
          <template v-slot="scope">
            <RowProgress :data="scope.row.score"></RowProgress>
          </template>
        </el-table-column>
        <el-table-column prop="read_count" label="总阅读数" width="130">
        </el-table-column>
        <el-table-column prop="word_count" label="内容深度" width="130">
          <template v-slot="scope">
            {{ scope.row.word_count }} 字
          </template>

        </el-table-column>
        <el-table-column prop="comment_count" label="评论数" width="100">
        </el-table-column>
        <el-table-column prop="like_count" label="点赞数" width="100"> </el-table-column>
      </el-table>
    </div>
  </section>
</template>

<script>
// import TableData from '../mock/table';
import RowProgress from './table/RowProgress.vue';
export default {
  components: { RowProgress },
  methods: {
    deleteRow(index, rows) {
      rows.splice(index, 1);
    },
  },
  data() {
    return {
      tableData: [
        {
          rank: 1,
          score: 840,
          word_count: 322,
          read_count: 3417,
          like_count: 13,
          comment_count: 9,
          id: 104870629,
          title: "锅盔叔叔走红后每天睡三四个小时",
          cover_img: "",
          abstract:
            "【#锅盔叔叔走红后每天睡三四个小时#】最近，一条关于“锅盔叔叔”的短视频开启了一段爱心接力的暖心故事。故事的主人公是浙江丽水缙云人胡师傅。妻子病重，他努力经营自己的小摊，对学生们“加量不加价”。",
          medium: {
            id: 1229,
            name: "钱江晚报",
          },
          reporters: [],
          news_type: {
            id: 1210,
            name: "其他社会",
          },
          event_id: 28665760,
          published_at: "2024-10-27 16:52:26",
          data_type: "article",
          mp_type_name: "微博",
        },
        {
          rank: 2,
          score: 823,
          word_count: 135,
          read_count: 3474,
          like_count: 6,
          comment_count: 9,
          id: 104870706,
          title: "杭州的秋天不能没有菊花展",
          cover_img: "",
          abstract:
            "【#杭州的秋天不能没有菊花展#】桂花之后，西湖边的新顶流是菊花。一年一度，下周，“2024第四届长三角菊花精品展暨杭州第十届菊花艺术展”将正式启幕。这两天，杭州植物园里各色菊花、园林小品和大型装置已基本布置完毕，潮新闻带你先睹为快。",
          medium: {
            id: 1229,
            name: "钱江晚报",
          },
          reporters: [],
          news_type: {
            id: 1210,
            name: "其他社会",
          },
          event_id: 28665782,
          published_at: "2024-10-27 15:56:44",
          data_type: "article",
          mp_type_name: "微博",
        },
        {
          rank: 3,
          score: 722,
          word_count: 297,
          read_count: 2457,
          like_count: 16,
          comment_count: 7,
          id: 104870009,
          title: "#女儿胖瘦程度随妈妈#",
          cover_img: "",
          abstract:
            "【#女儿胖瘦程度随妈妈#】#肥胖会遗传且更易传给女性#胖是由多种因素造成的，饮食高盐高脂、熬夜、缺乏运动等，但也有人的确是“天生易胖”。美国《临床内分泌与代谢杂志》刊登一项研究发现，与儿子相比，母亲肥胖更倾向于将这种肥胖风险遗传给女儿。研究人员分析了1998年至2002年南安普顿妇女调查前瞻性母子队列研究中，3158名年龄在20～34岁之间产下活产婴儿的参与者数据。",
          medium: {
            id: 1522,
            name: "生命时报",
          },
          reporters: [],
          news_type: {
            id: 9999,
            name: "其他",
          },
          event_id: 28665630,
          published_at: "2024-10-27 15:00:00",
          data_type: "article",
          mp_type_name: "微博",
        },
        {
          rank: 4,
          score: 508,
          word_count: 269,
          read_count: 1870,
          like_count: 24,
          comment_count: 5,
          id: 104869933,
          title: "#身体里缺什么会大把掉头发#",
          cover_img: "",
          abstract:
            "【#身体里缺什么会大把掉头发#】除了遗传、压力等因素，饮食营养状况也会影响掉发情况。头发大把大把掉，或许和以下4种营养素缺乏有关系：[空星]蛋白质：缺乏蛋白质会导致头发合成缓慢，甚至使头发提前进入休止期。不仅容易脱落，发质还会变差，头发变细、发脆、枯干、颜色变浅。",
          medium: {
            id: 1522,
            name: "生命时报",
          },
          reporters: [],
          news_type: {
            id: 1501,
            name: "养生",
          },
          event_id: 28665620,
          published_at: "2024-10-27 16:00:00",
          data_type: "article",
          mp_type_name: "微博",
        },
        {
          rank: 5,
          score: 505,
          word_count: 3906,
          read_count: 2146,
          like_count: 1,
          comment_count: 1,
          id: 104867721,
          title: "聆听来自古蜀的千年回响",
          cover_img: "",
          abstract:
            "原标题：三星堆博物馆文保团队（引题）\r\n聆听来自古蜀的千年回响（主题）\r\n光明日报记者张文骁李晓东周洪双\r\n广汉城外，鸭子河畔，2023年开放的三星堆博物馆新馆曲线优美、连绵排列，复刻了三星堆遗址中的三座土堆外形，取“堆列三星”寓意。相较旧馆，新馆的展陈面积扩大5倍，只为迎接更多沉睡数千年的古蜀瑰宝。\r\n新馆对面曲径通幽，三星堆博物馆文物保护与修复馆坐落其间。",
          medium: {
            id: 1419,
            name: "中工网",
          },
          reporters: [],
          news_type: {
            id: 1313,
            name: "其他文化",
          },
          event_id: 28662156,
          published_at: "2024-10-27 14:52:24",
          data_type: "article",
          mp_type_name: "百家号",
        },
        {
          rank: 6,
          score: 498,
          word_count: 132,
          read_count: 2345,
          like_count: 5,
          comment_count: 7,
          id: 104864728,
          title: "以色列袭击伊朗后 哈里斯：我们支持以色列自卫 伊朗不能报复",
          cover_img: "",
          abstract:
            "#哈里斯说伊朗不能报复#【以色列袭击伊朗后哈里斯：我们支持以色列自卫伊朗不能报复】据美媒报道，10月26日，美国副总统哈里斯被问到以色列空袭伊朗一事时，回应称：我们一贯支持以色列自卫。针对伊朗可能采取的报复行动，她表示伊朗必须停止，其行为对该地区稳定安全造成威胁。",
          medium: {
            id: 1120,
            name: "参考消息",
          },
          reporters: [],
          news_type: {
            id: 9902,
            name: "国际",
          },
          event_id: 28664432,
          published_at: "2024-10-27 15:40:00",
          data_type: "article",
          mp_type_name: "微博",
        },
        {
          rank: 7,
          score: 496,
          word_count: 1503,
          read_count: 2638,
          like_count: 0,
          comment_count: 1,
          id: 104868085,
          title: "护航高铁的电力卫士",
          cover_img: "",
          abstract:
            "原标题：护航高铁的电力卫士\r\n经济日报记者童政\r\n高铁线路检修几乎都在夜间开展，供电设备也不例外。这是一场与时间赛跑的夜间战役，旨在确保铁路供电设备的安全稳定运行，为旅客的平安出行保驾护航。\r\n一个秋日的夜晚，22时30分左右，中国铁路南宁局集团有限公司南宁供电段扶绥南电配工区技师、副工长颜国峰和同事黄腾组成检修小组，去南凭高铁南崇段检修一个箱式变压器。",
          medium: {
            id: 1419,
            name: "中工网",
          },
          reporters: [],
          news_type: {
            id: 1210,
            name: "其他社会",
          },
          event_id: 28662135,
          published_at: "2024-10-27 14:52:19",
          data_type: "article",
          mp_type_name: "百家号",
        },
        {
          rank: 8,
          score: 494,
          word_count: 986,
          read_count: 1110,
          like_count: 112,
          comment_count: 0,
          id: 104869556,
          title: "万众期待！杭州又迎国际大赛",
          cover_img: "",
          abstract:
            "2024世界羽联世界巡回赛总决赛将于12月11日至15日在杭州奥体中心体育馆盛大启幕。此次总决赛作为世界羽联巡回赛体系中最高级别的赛事，自2023年起连续两年在杭州举办，成为杭州亚运会后首个落户杭州的世界级大赛。2023年的总决赛赛场上，全世界最为顶尖的羽毛球手上演了精彩激烈对决比拼；赛场下，全城为“羽”疯狂的盛景同样展示了后亚运时代，杭州打造“赛会之城”的决心。",
          medium: {
            id: 1185,
            name: "杭州日报",
          },
          reporters: [],
          news_type: {
            id: 9999,
            name: "其他",
          },
          event_id: 28665555,
          published_at: "2024-10-27 16:06:00",
          data_type: "article",
          mp_type_name: "其他",
        },
        {
          rank: 9,
          score: 494,
          word_count: 78,
          read_count: 1815,
          like_count: 28,
          comment_count: 5,
          id: 104870669,
          title: " #浙江9万多人冒雨赶考# ",
          cover_img: "",
          abstract:
            "【#浙江9万多人冒雨赶考#】10月26日，2024年10月高等教育自学考试拉开帷幕，浙江省9.1万考生冒雨踏入考场，将完成报考的19.1万课次考试。网页链接",
          medium: {
            id: 1229,
            name: "钱江晚报",
          },
          reporters: [
            {
              id: 2539484,
              name: "邱伊娜",
            },
          ],
          news_type: {
            id: 1210,
            name: "其他社会",
          },
          event_id: 28665769,
          published_at: "2024-10-27 16:26:39",
          data_type: "article",
          mp_type_name: "微博",
        },
        {
          rank: 10,
          score: 489,
          word_count: 1552,
          read_count: 867,
          like_count: 135,
          comment_count: 0,
          id: 104869052,
          title: "今天，杭州这里沸腾了！接下来，还有三场……",
          cover_img: "",
          abstract:
            "今天一早，2024国际（杭州）毅行大会、2024桐庐半程马拉松分别鸣枪开跑。来自全国各地的数万运动爱好者相聚杭州，体验这座国际“赛”“会”之城的独特魅力。下周日，2024年杭州马拉松也将开跑，接下来还有11月17日、12月1日的2024建德17℃新安江马拉松、2024千岛湖马拉松也将开跑。",
          medium: {
            id: 1185,
            name: "杭州日报",
          },
          reporters: [],
          news_type: {
            id: 9903,
            name: "体育",
          },
          event_id: 28665440,
          published_at: "2024-10-27 16:50:00",
          data_type: "article",
          mp_type_name: "其他",
        },
        {
          rank: 11,
          score: 487,
          word_count: 869,
          read_count: 1356,
          like_count: 5,
          comment_count: 4,
          id: 104867418,
          title: "#叫客户爸爸遭原配大闹的LV柜姐已离职#，疑似原配晒出离婚受",
          cover_img: "",
          abstract:
            "【#叫客户爸爸遭原配大闹的LV柜姐已离职#，疑似原配晒出离婚受理回执】近日，网传多段安徽合肥银泰中心LV女销售与男顾客暧昧聊天，被原配大闹商场的视频，引发网友热议。10月27日，潇湘晨报记者从LV官方了解到，上述事件中的女销售已离职。#LV柜姐事件原配辟谣#视频内容显示，一名女子抓住一位LV柜姐（女销售）的衣领，怒斥其与自己的老公暧昧，并不断朗读两人的聊天记录。",
          medium: {
            id: 1031,
            name: "新闻晨报",
          },
          reporters: [],
          news_type: {
            id: 1210,
            name: "其他社会",
          },
          event_id: 28665105,
          published_at: "2024-10-27 15:15:00",
          data_type: "article",
          mp_type_name: "微博",
        },
        {
          rank: 12,
          score: 485,
          word_count: 48,
          read_count: 1532,
          like_count: 56,
          comment_count: 4,
          id: 104870705,
          title: " #杭州的秋天不能没有菊花展# ",
          cover_img: "",
          abstract:
            "【#杭州的秋天不能没有菊花展#】桂花之后，西湖边的新顶流是菊花。#锅盔叔叔谢绝爱心捐赠#网页链接",
          medium: {
            id: 1229,
            name: "钱江晚报",
          },
          reporters: [],
          news_type: {
            id: 1210,
            name: "其他社会",
          },
          event_id: 28665781,
          published_at: "2024-10-27 16:02:41",
          data_type: "article",
          mp_type_name: "微博",
        },
        {
          rank: 13,
          score: 485,
          word_count: 116,
          read_count: 3070,
          like_count: 2,
          comment_count: 1,
          id: 104867801,
          title: "郑钦文，夺冠！",
          cover_img: "",
          abstract:
            "原标题：郑钦文，夺冠！\r\n郑钦文\r\nWTA500东京站\r\n冠军！\r\n27日\r\n在日本东京进行的\r\n女子网球选手协会（WTA）500\r\n东京站女单决赛中\r\n郑钦文击败肯宁\r\n职业生涯首次夺得该站冠军\r\n记者：岳晨星\r\n来源：新华社微博",
          medium: {
            id: 1419,
            name: "中工网",
          },
          reporters: [],
          news_type: {
            id: 9903,
            name: "体育",
          },
          event_id: 0,
          published_at: "2024-10-27 14:52:24",
          data_type: "article",
          mp_type_name: "百家号",
        },
        {
          rank: 14,
          score: 481,
          word_count: 424,
          read_count: 1292,
          like_count: 8,
          comment_count: 4,
          id: 104864777,
          title: "以军空袭伊朗后，拜登：希望到此为止",
          cover_img: "",
          abstract:
            "#拜登希望以色列到此为止#【以军空袭伊朗后，拜登：希望到此为止】据法新社10月26日报道，在以色列于凌晨空袭伊朗军事设施之后，美国总统拜登26日表示，他希望“到此为止”。报道称，美国总统对记者说：“我当时与情报部门人员在一起。看起来他们（以色列人）除了袭击军事目标外，并没有袭击其他目标。",
          medium: {
            id: 1120,
            name: "参考消息",
          },
          reporters: [],
          news_type: {
            id: 9902,
            name: "国际",
          },
          event_id: 28664438,
          published_at: "2024-10-27 15:10:00",
          data_type: "article",
          mp_type_name: "微博",
        },
        {
          rank: 15,
          score: 480,
          word_count: 301,
          read_count: 1420,
          like_count: 7,
          comment_count: 4,
          id: 104867434,
          title: "百万粉丝宠物博主疑似人设崩塌",
          cover_img: "",
          abstract:
            "【#百万粉丝宠物博主被质疑虐狗#】10月27日，有网友发文称发现拥有百万粉丝宠物博主“柴犬金宝”近日于深夜在社交平台发布一段视频，该视频疑似为未剪辑原视频。视频显示，该博主不断对狗进行大声喊叫，强硬地指挥它执行各种动作。还有网友在仔细观察“柴犬金宝”发布的多条视频后发现宠物“金宝”在视频中从未发出过叫声。",
          medium: {
            id: 1031,
            name: "新闻晨报",
          },
          reporters: [],
          news_type: {
            id: 1409,
            name: "宠物",
          },
          event_id: 28663016,
          published_at: "2024-10-27 15:00:00",
          data_type: "article",
          mp_type_name: "微博",
        },
        {
          rank: 16,
          score: 480,
          word_count: 1440,
          read_count: 2256,
          like_count: 0,
          comment_count: 0,
          id: 104867846,
          title: "余丹媛：严谨推断为破案提供证据支撑",
          cover_img: "",
          abstract:
            "原标题：\r\n余丹媛：严谨推断为破案提供证据支撑\r\n法治日报记者邓君通讯员清公宣\r\n胆大心细、淡定从容，是广东省清远市公安局刑事警察支队三大队同事对余丹媛的一致评价。\r\n从警12年，余丹媛参与侦破多起重大案件，共勘查800余起案件现场，活体检验680余人次，为侦查破案、诉讼审判提供了有力支持。目前为止，担任警务技术二级主管的余丹媛，先后荣获清远市级优秀教官、广东省刑事技术青年人才、广东省练兵先进个人、广东省“三八红旗手”等称号。",
          medium: {
            id: 1419,
            name: "中工网",
          },
          reporters: [],
          news_type: {
            id: 1210,
            name: "其他社会",
          },
          event_id: 28665183,
          published_at: "2024-10-27 14:52:21",
          data_type: "article",
          mp_type_name: "百家号",
        },
        {
          rank: 17,
          score: 470,
          word_count: 58,
          read_count: 1163,
          like_count: 54,
          comment_count: 3,
          id: 104870736,
          title: " #台州一地不带身份证也能办事# ，领跑全省！",
          cover_img: "",
          abstract:
            "【#台州一地不带身份证也能办事#，领跑全省！】“不带实体身份证也能办成政务服务领域42个部门的828个事项。网页链接",
          medium: {
            id: 1229,
            name: "钱江晚报",
          },
          reporters: [],
          news_type: {
            id: 1210,
            name: "其他社会",
          },
          event_id: 28665791,
          published_at: "2024-10-27 14:57:14",
          data_type: "article",
          mp_type_name: "微博",
        },
        {
          rank: 18,
          score: 465,
          word_count: 1230,
          read_count: 1740,
          like_count: 0,
          comment_count: 0,
          id: 104868011,
          title: "付江录：“金子般的心”感动着身边人",
          cover_img: "",
          abstract:
            "原标题：\r\n付江录：“金子般的心”感动着身边人\r\n兵团日报全媒体记者陈琼\r\n“他处处为别人着想，我们这里很多人都得到过他的帮助。”10月22日，望着付江录在农机合作社忙碌的背影，社员王长仲说，“这两天，他又带着我们为团场和周边地方乡村种植户提供采棉和秋翻等农机作业服务。”\r\n今年51岁的付江录，是十三师火箭农场哈密新星农业机械服务专业合作社理事长，也是一名共产党员。",
          medium: {
            id: 1419,
            name: "中工网",
          },
          reporters: [],
          news_type: {
            id: 1210,
            name: "其他社会",
          },
          event_id: 28665222,
          published_at: "2024-10-27 14:52:20",
          data_type: "article",
          mp_type_name: "百家号",
        },
        {
          rank: 19,
          score: 458,
          word_count: 2348,
          read_count: 1300,
          like_count: 0,
          comment_count: 0,
          id: 104868287,
          title: "楼仁斌：生死攸关时伸出援手的“泳者”",
          cover_img: "",
          abstract:
            "原标题：\r\n楼仁斌：生死攸关时伸出援手的“泳者”\r\n法治日报记者王春通讯员吴波锋冯丽敏\r\n“楼仁斌，又是你！”今年8月，义乌江上一位跳水救人的民警火了。9年间，他一人救起13人，参与救起118名落水者。",
          medium: {
            id: 1419,
            name: "中工网",
          },
          reporters: [],
          news_type: {
            id: 1210,
            name: "其他社会",
          },
          event_id: 28665276,
          published_at: "2024-10-27 14:52:18",
          data_type: "article",
          mp_type_name: "百家号",
        },
        {
          rank: 20,
          score: 457,
          word_count: 139,
          read_count: 1110,
          like_count: 8,
          comment_count: 3,
          id: 104867156,
          title: "华晨宇杭州演唱会开唱，“大莲花”首次搭建四面舞台",
          cover_img: "",
          abstract:
            "【#华晨宇杭州演唱会在大莲花开唱#，#杭州大莲花首次搭建四面舞台#】华晨宇10月26日晚，@华晨宇yu杭州演唱会在“大莲花”开唱，数万人在现场一起享受视听盛宴。值得一提的是，这是杭州“大莲花”首次搭建四面舞台。#华晨宇首个大莲花四面台演唱会#（视频编辑石擎擎）杭州日报的微博视频",
          medium: {
            id: 1185,
            name: "杭州日报",
          },
          reporters: [],
          news_type: {
            id: 1307,
            name: "娱乐",
          },
          event_id: 28665052,
          published_at: "2024-10-27 15:51:04",
          data_type: "article",
          mp_type_name: "微博",
        },
      ],
    };
  },
};
</script>

<style>
news-rank-table td.title-column {
    cursor: pointer;
    font-size: 15px;
}
body .el-table th>.cell {
    font-weight: 700;
    color: #555;
}
.news-rank-table .el-table__body .cell {
    font-weight: 700;
}

.el-table .cell.el-tooltip {
    white-space: nowrap;
    min-width: 50px;
}
.news-rank-page .list-block {
  background-color: #fff;
  border: 1px solid #ebeef5;
  border-radius: 4px;
  overflow: hidden;
}
.news-rank-table {
  position: relative;
  z-index: 10;
}
.rank-img {
    width: 32px;
    height: auto;
}
.rank-count {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border: 1px solid #ebeef5;
    border-radius: 50%;
    white-space: nowrap;
}
</style>

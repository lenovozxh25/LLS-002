<template>
  <div id="onlineAsk" style="background: #f5f5f7;padding-bottom: 20px;">
    <div class="onlineAsk_title">
      <div>
        <div>在线提问</div>
        <ul>
          <li>记录消息通知内容</li>
          <li>展示问题状态</li>
          <li>在线提问答疑</li>
        </ul>
      </div>
    </div>
    <div class="onlineAsk_main">
      <p class="ask top">
        <span class="redSquare"></span>
        <span>我要提问</span>
      </p>
      <div class="ask_content">
        <div>
          <span>*</span>问题
          <el-input v-model="input" style="margin-top:5px" placeholder="请在这里输入你的问题(120个字符内)" maxlength="120" show-word-limit></el-input>
        </div>
        <div class="text_box" style="width: 100%;height:auto">
          <span>*</span>问题说明
          <vue-egdit
            ref="editor"
            style="width: 100%;margin-top:5px"
            id="editor"
            v-model="initContent"
            :menus="meaus"
          ></vue-egdit>
        </div>
        <div>
          <p>问题标签</p>
          <el-input style="margin-top:5px;width:65%" v-model="inputTag" placeholder="html,css,javascript"></el-input>
          <span style="font-size:12px;margin-left:10px">* 用逗号分开，不超过五个，且每个标签长度不超过九个字符</span>
        </div>
        <div>当前标签</div>
        <div>
          <el-button type="primary">提交问题</el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import vueEgdit from "vue-wangeditor";
export default {
  name: "onlineAsk",
  data() {
    return {
      input: "",
      initContent: "",
      inputTag: "",
      meaus: [
        "source", // 源码模式
        "|",
        "bold", // 粗体
        "underline", // 下划线
        "italic", // 斜体
        "strikethrough", // 中线
        "eraser", // 清空格式
        "forecolor", // 文字颜色
        "bgcolor", // 背景颜色
        "|",
        "quote", // 引用
        "fontfamily", // 字体
        "fontsize", // 字号
        "head", // 标题
        "unorderlist", // 无序列表
        "orderlist", // 有序列表
        "alignleft", // 左对齐
        "aligncenter", // 居中
        "alignright", // 右对齐
        "|",
        "link", // 链接
        "unlink", // 取消链接
        "table", // 表格
        "emotion", // 表情
        "|",
        "img", // 图片
        "video", // 视频
        "insertcode", // 插入代码
        "|",
        "undo", // 撤销
        "redo", // 重做
        "fullscreen" // 全屏
      ]
    };
  },
  components: {
    vueEgdit
  }
};
</script>
<style scoped>
.onlineAsk_title {
  width: 100%;
  height: 144px;
  background: linear-gradient(60deg, rgb(83, 186, 245), rgb(54, 164, 228));
}

.onlineAsk_title > div {
  width: 1100px;
  height: 144px;
  margin: 0 auto;
  background: url(../../images/back03.png) no-repeat right 0px;
  background-size: 235px 140px;
}

.onlineAsk_title div div {
  min-width: 400px;
  color: #fff;
  font-size: 25px;
  margin-left: 40px;
  padding-top: 40px;
}

.onlineAsk_title div ul {
  overflow: hidden;
  margin-left: 40px;
  margin-top: 10px;
}

.onlineAsk_title ul li {
  float: left;
  padding-right: 10px;
  color: #fff;
  font-size: 14px;
}
.onlineAsk_main {
  background: white;
  width: 1100px;
  margin: 10px auto;
  overflow: hidden;
  padding: 0px 10px;
}
.ask {
  overflow: hidden;
  font-family: HiraginoSansGB-W6;
  color: rgba(64, 64, 64, 1);
  margin-bottom: 10px;
}
.top {
  margin: 30px 0;
}
.ask span {
  float: left;
  height: 24px;
}
.redSquare {
  width: 6px;
  background: skyblue;
  margin-right: 10px;
}
.ask_content{
    padding: 0px 20px;
}
.ask_content>div{
    font-size: 14px;
    margin: 15px 0px;
}
.ask_content>div span{
   color: red;
}
#editor{
    height: 200px !important;
}
.text_box>div{
    height: auto !important;
}
</style>

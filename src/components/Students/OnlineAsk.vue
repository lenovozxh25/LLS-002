<template>
  <div id="onStulineAsk" style="background: #f5f5f7;padding-bottom: 20px;">
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
          <el-input
            v-model="input"
            name="subject"
            style="margin-top:5px"
            placeholder="请在这里输入你的问题(120个字符内)"
            maxlength="120"
            show-word-limit
          ></el-input>
        </div>
        <div class="text_box" style="width: 100%;height:auto">
          <span>*</span>问题说明
          <div ref="editor" style="text-align:left;margin-top:5px"></div>
        </div>
        <div>
          <p>问题标签</p>
          <el-input style="width:65%" v-model="inputTag" placeholder="html,css,javascript"></el-input>
          <span style="font-size:12px;margin-left:10px">* 用逗号分开，不超过五个，且每个标签长度不超过九个字符</span>
        </div>
        <div>
          当前标签
          <el-badge :value="inputTag" class="item"></el-badge>
        </div>
        <div>
          <el-button type="primary" @click="submitAsk(inputTag,input,editorContent,103)">提交问题</el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import E from "wangeditor";
export default {
  name: "onStulineAsk",
  data() {
    return {
      input: "",    //问题标题
      editor: "",   //富文本编辑器
      editorContent: "",  //内容
      inputTag: ""   //问题标签
    };
  },
  components: {
    // vueEgdit
  },
  methods: {
    //提交问题
    submitAsk(typeName, subject, question, proposeStudentId) {
      var arr = typeName.split(",");
      for (var i = 0; i < arr.length; i++) {
        if (arr[i].length > 10 || arr.length > 5) {
          this.$message.error("请正确书写问题标签");
          return;
        }
      }
     question=question.replace(/<[^>]+>|&[^>]+;/g, "")
      typeName = arr.join(",");
      var app = this;
      if (!question || !subject) {
        debugger
        this.$message.error("请完整填写你的疑问？");
      } else {
        this.$http
          .post("/business/studentQuestion/submitQuestion", {
            typeName,
            subject,
            question,
            proposeStudentId
          })
          .then(res => {
            console.log(res);
            if (res.data == "") {
              this.$message.success("提交成功！");
              app.input = "";
              app.inputTag = "";
              this.editor.txt.clear();
            }
          });
      }
    }
  },
  mounted() {
    //富文本编辑器设置
    this.editor = new E(this.$refs.editor);
    this.editor.customConfig.onchange = html => {
      this.editorContent = html;
    };
    this.editor.create();
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
.ask_content {
  padding: 0px 20px;
}
.ask_content > div {
  font-size: 14px;
  margin: 15px 0px;
}
.ask_content > div span {
  color: red;
}
#editor {
  height: 200px !important;
}
.text_box > div {
  height: auto !important;
}
.item {
  opacity: 0.5;
  margin-left: 5px;
}
</style>

<style scoped>
  .container{
      height: 100%;
      width: 100%;
      position: fixed;
  }
  .left{
      top: 0;
      left: 0;
      width: 70px;
      background: #76b0ef;
      text-align: center;
      color: #FFF;
      /*padding: 8px;*/
      height: 100%;
  }
  .left-header{
      padding: 8px;
      cursor: pointer;
  }
  .left-menu{
      top:80px;
      position: absolute;
  }
  .left-menu-item{
      height: 70px;
      width: 70px;
      cursor: pointer;
  }
  .left-menu-item.active{
      background: #afb9ff;
  }
  .left-menu-item-icon{
      font-size: 36px;
  }
  .left-menu-item-title{
      line-height: 0;
  }
  .left-config{
      position: absolute;
      bottom: 5px;
      font-size: 30px;
      padding-left: 20px;
      cursor: pointer;
  }
  .top-img{
      border: 2px solid #ffffff;
      box-sizing: border-box;
      height: 54px;
      width: 54px;
      position: absolute;
      left: 8px;
      border-radius: 27px;
  }
  .content{
      top:0;
      left: 70px;
      padding: 25px 85px 15px 15px;
      width: 100%;
      position: absolute;
  }
  .top-tools{
      font-size: 24px;
      position: fixed;
      top: 0;
      right: 0;
      line-height: 24px;
      color: #5b5b5b;
      height: 25px;
  }
  .top-tools .top-tools-btn{
      float: left;
      width: 25px;
      text-align: center;
  }
  .top-tools .top-tools-btn:hover{
      cursor: pointer;
      background: #efefef;
      /*height: 25px;*/
  }
  .top-tools .top-tools-btn.close:hover{
      cursor: pointer;
      background: #ef2913;
      color: #FFF;
      /*height: 25px;*/
  }
  .content-search{
      width: 100%;
  }

   .task-box{
       padding-top: 10px;
       border-top:1px solid #efefef;
   }
   .task-item{
       margin-top: 5px;
       border-bottom: 1px solid #efefef;
   }
   .task-item-tags{
       padding: 10px 5px 10px 5px;
   }
   .task-item-title{
       font-size: 16px;
       /*background: #76b0ef;*/
       /*color: #FFFFFF;*/
       padding: 2px 5px 2px 5px;
   }
   .task-item-time{
       line-height: 0px;
       font-size: 16px;
   }
   .task-item-time i{
       font-size: 24px;
       color: #76b0ef;
   }

    .content-bottom{
        position: fixed;
        bottom: 24px;
        right: 18px;
        font-size: 36px;
        height: 36px;
        width: 36px;
        color: #2b85e4;
        cursor: pointer;
    }
    .content-bottom i:hover{
        color: #52cfe4;
    }
</style>
<style>
    .content-search .ivu-input{
        border: none;
    }
</style>
<template>
  <div class="container"  style="-webkit-app-region: drag">
      <div class="left">
          <div class="left-header">
              <img class="top-img" src="../assets/tx.jpg"/>
          </div>
          <div class="left-menu">
              <div class="left-menu-item active">
                  <div class="left-menu-item-icon"><Icon type="ios-calendar" /></div>
                  <div class="left-menu-item-title">待办</div>
              </div>
              <div class="left-menu-item">
                  <div class="left-menu-item-icon"><Icon type="ios-bookmarks-outline"/></div>
                  <div class="left-menu-item-title">完成</div>
              </div>
              <div class="left-menu-item">
                  <div class="left-menu-item-icon"><Icon type="ios-alert-outline" /></div>
                  <div class="left-menu-item-title">延期</div>
              </div>
              <div class="left-menu-item">
                  <div class="left-menu-item-icon"><Icon type="ios-help-buoy-outline" /></div>
                  <div class="left-menu-item-title">协同</div>
              </div>
          </div>
          <div class="left-config">
              <Icon type="ios-settings-outline" />
          </div>
      </div>
      <div class="content">
          <div class="top-tools">
              <div class="top-tools-btn">
                  <Icon type="ios-remove" style="font-size: 20px"/>
              </div>
              <div class="top-tools-btn close">
                  <Icon type="ios-close"/>
              </div>
          </div>
          <div class="search-header">
              <Input search class="content-search" suffix="ios-search" placeholder="关键字搜索……" @on-search="searchTask"/>
          </div>
          <div class="task-box">
              <div class="task-item">
                  <div class="task-item-title">任务面板前端页面设计</div>
                  <Row>
                      <i-col span="16">
                          <div class="task-item-tags">
                              <Tag border >任务面板</Tag>
                              <Tag border >桌面应用</Tag>
                              <Tag border >前端</Tag>
                          </div>
                      </i-col>
                      <i-col span="8">
                          <div class="task-item-time" style="color: red">
                              <Icon type="ios-alarm-outline" />&nbsp;&nbsp;&nbsp;&nbsp;01:33:44
                          </div>
                      </i-col>
                  </Row>
              </div>
              <div class="task-item">
                  <div class="task-item-title">任务面板后端接口开发</div>
                  <Row>
                      <i-col span="16">
                          <div class="task-item-tags">
                              <Tag border >任务面板</Tag>
                              <Tag border >后端</Tag>
                          </div>
                      </i-col>
                      <i-col span="8">
                          <div class="task-item-time">
                              <Icon type="ios-alarm-outline" />&nbsp;&nbsp;&nbsp;&nbsp;3天
                          </div>
                      </i-col>
                  </Row>
              </div>
              <div class="task-item">
                  <div class="task-item-title">学习python</div>
                  <Row>
                      <i-col span="16">
                          <div class="task-item-tags">
                              <Tag border >学习</Tag>
                          </div>
                      </i-col>
                      <i-col span="8">
                          <div class="task-item-time" style="color: green">
                              <Icon type="ios-alarm-outline" />&nbsp;&nbsp;&nbsp;&nbsp;15天
                          </div>
                      </i-col>
                  </Row>
              </div>
          </div>
          <div class="content-bottom">
              <Icon type="ios-add-circle-outline" />
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data() {
    return {
    };
  },
  created() {
  },
  methods: {
    searchTask() {
      console.log(123);
    },
  },
};
</script>


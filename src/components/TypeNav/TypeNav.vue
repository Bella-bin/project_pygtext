<template>
  <div>
    <!-- 商品分类导航 -->
    <div class="type-nav">
      <div class="container">
        <!-- 事件委派 goSearch -->
        <div @mouseleave="leaveShow" @mouseenter="inShow">
          <h2 class="all">全部商品分类</h2>
          <transition  name="animate__animated animate__bounce" enter-active-class="animate__swing" leave-active-class="animate__backOutUp" >
            <div class="sort" v-show="isCategory" @click="goSearch">
              <div class="all-sort-list2">
                <div
                  class="item bo"
                  v-for="(c1, index) in categroylist"
                  :key="c1.categoryId"
                  :class="{ cur: currentIndex == index }"
                >
                  <h3 @mouseenter="enterShow(index)" >
                    <a
                      href="javascript:;"
                      :data-categoryName="c1.categoryName"
                      :data-categoryId="c1.categoryId"
                      >{{ c1.categoryName }}</a
                    >
                  </h3>
                  <div
                    class="item-list clearfix"
                    :style="{
                      display: currentIndex === index ? 'block' : 'none',
                    }"
                  >
                    <div
                      class="subitem"
                      v-for="(c2, index) in c1.categoryChild"
                      :key="c2.categoryId"
                    >
                      <dl class="fore">
                        <dt>
                          <a
                            href="javascript:;"
                            :data-categoryName="c2.categoryName"
                            :data-category2Id="c2.categoryId"
                            >{{ c2.categoryName }}</a
                          >
                        </dt>
                        <dd>
                          <em
                            v-for="(c3, index) in c2.categoryChild"
                            :key="c3.categoryId"
                          >
                            <a
                              href="javascript:;"
                              :data-categoryName="c3.categoryName"
                              :data-category3Id="c1.categoryId"
                              >{{ c3.categoryName }}</a
                            >
                          </em>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </transition>
        </div>
        <nav class="nav">
          <a href="###">服装城</a>
          <a href="###">美妆馆</a>
          <a href="###">尚品汇超市</a>
          <a href="###">全球购</a>
          <a href="###">闪购</a>
          <a href="###">团购</a>
          <a href="###">有趣</a>
          <a href="###">秒杀</a>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import animate from 'animate.css'
import { mapState } from "vuex";
// 引入lodash 节流
import throttle from "lodash/throttle";
export default {
  name: "TypeNav",
  data() {
    return {
      currentIndex: -1,
      isCategory: true,
    };
  },
  // 通过vuex发送请求，存储数据
  mounted() {
    this.$store.dispatch("Home/categroylist");
    if (this.$route.path != "/home") {
      this.isCategory = false;
    }
  },
  computed: {
    ...mapState("Home", ["categroylist"]),
  },
  methods: {
    enterShow: throttle(function (index) {
      this.currentIndex = index;
    }, 50),
    leaveShow() {
      this.currentIndex = -1;
      if (this.$route.path != "/home") {
        this.isCategory = false;
      }
    },
    // 跳转到search路由组件
    goSearch(event) {
      // 鼠标点击触发的元素
      let element = event.target;
      let { categoryname, categoryid, category2id, category3id } =
        element.dataset; //获取自定义属性
      //  首先要判断点击的是否为a标签
      if (categoryname) {
        let location = { path: "/search" };
        let query = { categoryName: categoryname };
        if (categoryid) {
          query.categoryid = categoryid;
        } else if (category2id) {
          query.category2id = category2id;
        } else if (category3id) {
          query.category3id = category3id;
        }
        location.query = query;
        this.$router.push(location);
      }
    },
    inShow() {
      this.isCategory = true;
    },
  },
};
</script>

<style lang="less" scoped>
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .item-list {
            // display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }

          // &:hover {
          //     .item-list {
          //         display: block;
          //     }
          // }
        }
        .cur {
          background-color: skyblue;
        }
      }
    }

    //  .sort-enter,.sort-leave-to {
    //     height: 0;
    //   }
    //   .sort-enter-to,.sort-leave {
    //     height: 461px;
    //   }
    //   .sort-enter-active {
    //     transition: all 0.5 linear;
    //   }
    //   .sort-leave-active {
    //     transition: all  0.5s linear
    //   }
  }
}
</style>

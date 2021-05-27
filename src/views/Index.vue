<template>
  <div>
    <el-menu
      default-active="1"
      class="el-menu-demo menu-center"
      mode="horizontal"
      @select="countNext"
    >
      <el-menu-item index="1">Inicio</el-menu-item>
    </el-menu>
    <el-row type="flex" justify="center">
      <el-col :xs="24" :sm="20" :md="16" :lg="12">
        <div v-for="article in list" :key="article.id">
          <el-card class="box-card margin-top-20">
            <div slot="header" class="clearfix">
              <span>{{ article.title }}</span>
              <el-link
                class="margin-right"
                target="_blank"
                :href="article.url"
                type="primary"
                >Ver</el-link
              >
            </div>
            <el-col :xs="24" :sm="8" :md="8" :lg="8">
              <img :src="article.urlToImage" class="image image-new" />
            </el-col>
            <el-col :xs="24" :sm="16" :md="16" :lg="16">
              <div class="text item">
                {{ article.description.substring(0, 90) }}
              </div>
            </el-col>
            <el-col :span="24">
              <hr />
              <div class="footer-card">
                <time class="time">{{ article.publishedAt | formatDiff }}</time>
                <el-link
                  class="margin-right"
                  target="_blank"
                  :href="article.url"
                  type="primary"
                  >{{ article.source.name }}</el-link
                >
              </div>
            </el-col>
          </el-card>
        </div>
      </el-col>
    </el-row>
    <el-row type="flex" justify="center">
      <el-button
        class="margin-top-20 margin-bottom-40"
        type="primary"
        v-on:click="countNext"
        round
        v-loading.fullscreen.lock="loading"
        icon="el-icon-refresh"
        >Actualizar</el-button
      >
    </el-row>
  </div>
</template>

<script>
import { list } from "@/api/new";

export default {
  data() {
    return {
      list: null,
      counter: 1,
      loading: false,
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      this.loading = true;
      await list(this.counter)
        .then((response) => {
          this.list = response.data.articles;
          console.log(response);
        })
        .catch(this.responseCatch)
        .finally(() => (this.loading = false));
    },
    countNext() {
      this.counter++;
      this.fetchData();
    },
  },
};
</script>

<style lang="scss">
.margin-top-20 {
  margin-top: 20px !important;
}
.margin-bottom-40 {
  margin-bottom: 40px !important;
}
.margin-right {
  float: right;
}
hr {
  height: 0px;
  border-color: rgb(202, 202, 202);
  background-color: rgb(202, 202, 202);
}
.image-new {
  width: 180px;
}
@media (max-width: 768px) {
  .image-new {
    width: 250px;
  }
}
.menu-center {
  display: flex;
  text-align: center;
  justify-content: center;
}
.footer-card {
  padding-bottom: 10px;
}
</style>

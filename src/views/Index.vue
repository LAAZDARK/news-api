<template>
  <div>
    <el-row type="flex" justify="center">
      <el-col :xs="24" :sm="24" :md="24" :lg="24">
        <el-menu
          default-active="1"
          class="el-menu-demo menu-center"
          mode="horizontal"
          @select="countNext"
        >
          <el-menu-item index="1">Inicio</el-menu-item>
          <el-menu-item
            class="hidden-xs-only"
            @click="dialogFormVisible = true"
            index="2"
            >Entretenimiento</el-menu-item
          >
          <el-menu-item class="hidden-xs-only" index="3">Deportes</el-menu-item>
          <el-menu-item
            class="hidden-xs-only"
            @click="dialogFormVisible = true"
            index="4"
            >Tecnologia</el-menu-item
          >
          <el-menu-item class="hidden-xs-only" index="5">Negocios</el-menu-item>
          <el-menu-item
            @click="dialogFormVisible = true"
            class="hidden-xs-only"
            index="5"
            >Más</el-menu-item
          >
          <el-submenu class="hidden-sm-and-up" index="6">
            <template slot="title">Mas</template>
            <el-menu-item index="5-1">Entretenimiento</el-menu-item>
            <el-menu-item index="5-2">Deportes</el-menu-item>
            <el-menu-item index="5-3">Tecnologia</el-menu-item>
            <el-menu-item index="5-4">Negocios</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-col>
    </el-row>
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
              <img :src="article.image" class="image image-new" />
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
    <div>
      <el-dialog
        title="Recibe noticias cada semana"
        :visible.sync="dialogFormVisible"
      >
        <el-form :model="form">
          <el-form-item label="Correo electrónico" label-width="120">
            <el-input v-model="form.email" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="Pais" label-width="120">
            <el-select v-model="form.country" placeholder="Selecciona tu pais">
              <el-option label="Estados Unidos" value="us"></el-option>
              <el-option label="Mexico" value="mx"></el-option>
              <el-option label="Mexico" value="gt"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">Cancelar</el-button>
          <el-button type="primary" @click="dialogFormVisible = false"
            >Guardar</el-button
          >
        </span>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import { list } from "@/api/new";
import "element-ui/lib/theme-chalk/display.css";

export default {
  data() {
    return {
      list: null,
      counter: 1,
      loading: false,
      dialogFormVisible: false,
      form: {
        email: "",
        country: "",
      },
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
        })
        .catch(this.responseCatch)
        .finally(() => (this.loading = false));
    },
    countNext() {
      this.counter++;
      this.fetchData();
      window.scrollTo(0, 0);
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
  height: 100px;
}
@media (max-width: 768px) {
  .image-new {
    width: 250px;
    height: 140px;
    margin-bottom: 10px;
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

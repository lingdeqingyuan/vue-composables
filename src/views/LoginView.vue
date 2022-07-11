<script setup lang="ts">
import { computed, ref } from 'vue';
import { ElMessage } from 'element-plus'
import useUser from '@/composables/useUser.ts';

const { login, loginModel, loggedIn, logout, user } = useUser();
</script>

<template>
  <div class="about">
    <h1>login</h1>
    <p v-if="loggedIn">Welcome, {{ user?.username }}
      <a @click.prevent="logout" href="#">logout</a>
    </p>
    <el-form v-if="!loggedIn" :model="loginModel" ref="form" label-width="80px">
      <el-form-item label="username">
        <el-input v-model="loginModel.username" placeholder="username"></el-input>
      </el-form-item>
      <el-form-item label="password">
        <el-input v-model="loginModel.password" placeholder="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login">Login</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>

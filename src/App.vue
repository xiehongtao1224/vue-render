<template>
  <div id="app">
    <hello-world msg="Welcome to Your Vue.js App">
      <template v-slot:hello="{ text }">
        <div>{{ text }}</div>
      </template>
      <template v-slot:default>
        <div>默认插槽</div>
      </template>
    </hello-world>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style>
html, body{
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  text-align: center;
}
</style>

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
    <parent-component :list="list">
      <children-component prop="key"></children-component>
      <children-component>
        <template #[soltName]="{ item }">
          <button @click="handleClick(item)">{{ item.value }}</button>
        </template>
      </children-component>
    </parent-component>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import ParentComponent from './components/parent-component.vue';
import ChildrenComponent from './components/children-component.vue';

export default {
  name: 'app',
  components: {
    HelloWorld,
    ParentComponent,
    ChildrenComponent
  },
  data() {
    return {
      list: [{
          key: 1,
          value: 'one'
      }, {
          key: 2,
          value: 'two'
      }, {
          key: 3,
          value: 'three'
      }],
      soltName: 'default'
    }
  },
  methods: {
    handleClick(item) {
      console.log(item.value);
    }
  }
}
</script>

<style>
html, body{
  width: 100%;
  height: 100%;
  margin: 0;
}
</style>

<template>
    <div class="parent-component">
        <middle-component v-for="(item, i) in list" :key="i" :data="item">
            <slot></slot>
        </middle-component>
    </div>
</template>

<script>
import MiddleComponent from './middle-component.vue';
export default {
    name: 'parent-component',
    components: {
        MiddleComponent
    },
    props: ['list']
}
</script>
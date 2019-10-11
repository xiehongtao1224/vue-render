<template>
    <div class="middle-component">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'middle-component',
    props: ['data']
}
</script>
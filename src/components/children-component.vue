<template>
    <div class="children-component">
        <slot v-bind:item="$parent.data">
            {{ $parent.data[prop] }}
        </slot>
    </div>
</template>

<script>
export default {
    name: 'children-component',
    props: ['prop']
}
</script>
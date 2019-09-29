<template>
    <div class="slot">
        <slot :data="data">
            from slot
        </slot>
    </div>
</template>

<script>
export default {
    name: 'slot-data',
    data() {
        return {
            data: 'hahahhahahaha'
        }
    }
}
</script>
<template>
    <button 
        :style="{color: color}"
        @click="$emit('action')"
        :aria-label="label">
    <span>{{type}}</span>
    </button>
</template>

<script>
export default {
    name: 'IconButton',
    props: {
        type: String,
        color: String,
        label: String
    }
}
</script>

<style>

</style>
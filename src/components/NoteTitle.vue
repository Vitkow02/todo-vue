<template>
    <span>Note Title:</span>
    <br/>
    <div class="title-block" v-if="!editable">
        <span @click="editable = !editable" class="note-title">
            {{note.title}}
        </span>
        <IconButton
            color="orange"
            type="edit"
            label="Edit"
            @action="editable=!editable">
        </IconButton>
        <input 
            type="text"
            v-model="note.title"
            @keyup.enter="editable = !editable"
            placeholder="Enter title"
            v-click-outside="setEditFalse">
    </div>
</template>

<script>
import IconButton from "./IconButton.vue";

export default {
    name: 'NoteTitle',
    components: {
        'IconButton': IconButton
    },
    props: {
        note: Object
    },
    data() {
        return {
            editable: true
        }
    },
    methods: {
        setEditFalse() {
            this.editable = false
        }
    }
}
</script>

<style>

</style>
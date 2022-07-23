<template>
    <li>
        <div class="todo-body">
            <input v-model="todo.completed" type="checkbox">
        </div>
        <div>
            <span
                :class="{completed: (todo.completed&&todo.text)}"
                v-if='!editable'
                @click="editable =! editable">
                    {{todo.text ? todo.text : 'Click to edit Todo'}}
            </span>
            <input 
                v-else
                type="text"
                v-model="todo.text"
                v-on:keyup.enter="editable = !editable"
                v-click-outside="setEditFalse">
        </div>

        <div class="todo-actions">
            <IconButton
                @action="editable =! editable"
                :type="editable ? 'save_alt' : 'edit'"
                :color="editable ? 'green' : 'orange'"
                :label="editable ? 'Save' : 'Edit'">
            </IconButton>
            <IconButton
                color="red"
                type="delete-forever"
                @action="$emit('remove-todo', todo)"
                label="Delete">
            </IconButton>
        </div>
    </li>
</template>

<script>
import IconButton from './IconButton.vue';
export default {
    name: 'TodoItem',
    components: {
        'IconButton': IconButton
    },
    props: {
        todo: Object
    },
    data() {
        return {
            editable: false
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
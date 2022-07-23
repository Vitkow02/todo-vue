<template>
    <div class="note">
        <h1>{{note.title}}</h1>
        <ul>
            <li :class="todo.completed ? 'todo-complited' : ''" v-for="todo in note.todos" :key="todo.id">
               {{todo.text}} 
            </li>
        </ul>
        <div class="note-actions">
            <IconButton typeof="edit" color="orange" @action="goToNote" label="Edit Note">
            Edit Note
            </IconButton>
            <IconButton typeof="delete_outline" color="red" @action="$emit('delete-note', note.noteId)" label="Delete">
            Delete  
            </IconButton>
        </div>
        <hr/>
    </div>
</template>

<script>
import IconButton from '@/IconButton';

export default {
    name: 'NoteCard',
    props: {
        note: Object
    },
    components: {
        'IconButton': IconButton
    },
    methods: {
        goToNote() {
            this.$router.push(`/note/${this.note.noteId}`);
        }
    }
}
</script>

<style>

</style>
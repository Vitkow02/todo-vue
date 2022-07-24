<template>
    <div class="note">
        <h1>{{note.title}}</h1>
        <ul>
            <li :class="todo.completed ? 'todo-complited' : ''" v-for="todo in note.todos" :key="todo.id">
               {{todo.text}} 
            </li>
        </ul>
        <div class="note-actions">
            <IconButton type="edit" color="orange" @action="goToNote" label="Edit Note">
            Edit Note
            </IconButton>
            <IconButton type="delete_outline" color="red" @action="$emit('delete-note', note.noteId)" label="Delete">
            Delete  
            </IconButton>
        </div>
        <hr/>
    </div>
</template>

<script>
import IconButton from '../components/IconButton.vue';

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
.todo-completed{
  text-decoration: line-through;
  background-color: rgba(255, 255, 255, 0.3);
}
.note{
  text-align: center;
  
}
</style>
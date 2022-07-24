<template>
    <div class="note-page">
        <NoteTitle :note="note"/>
        <hr />
        <div>
            <IconButton
                @action="undo"
                type="undo"
                :disabled="!(this.historyIndex > 0)"
                label="Undo">
            </IconButton>
            <IconButton
                @action="redo"
                type="redo"
                :disabled="!(this.historyIndex < (this.noteHistory.length - 1))"
                label="Redo">
            </IconButton>
        </div>
        <ul>
            <TodoItem
            v-for="(todo, index) in note.todos"
            :todo="todo"
            :key="index"
            @remove-todo="onRemoveTodo">
            </TodoItem>
        </ul>
        <div class="new-todo">
            <IconButton 
            color="orange"
            type="add"
            @action="addTodo"
            label="Add">
            </IconButton>
            <span @click="addTodo">Add New Todo</span>
        </div>
        <hr/>
        <div>
            <IconButton 
                color="green"
                type="save"
                @action="saveNote"
                label="Save">   
            </IconButton>
            <IconButton 
                color="orange"
                type="cancel"
                @action="handleCancelEdit"
                label="Cancle">   
            </IconButton>
            <IconButton 
                color="red"
                type="delete"
                @action="handleDeleteEdit"
                label="Delete">   
            </IconButton>
        </div>
        <hr/>
    </div>
</template>

<script>
import NoteTitle from "../components/NoteTitle";
import IconButton from "../components/IconButton.vue";
import TodoItem from "../components/TodoItem.vue";
import { NoteService } from "../LocalStorage/NoteService";
import {random} from "../generator";
import {create} from "vue-modal-dialogs";



export default {
    name: 'Note',
    components: {
            'TodoItem': TodoItem,
            'IconButton': IconButton,
            'NoteTitle': NoteTitle
        },
    data() {
    return {
      noteHistory: [],
      histotyIndex: 0,
      watching: true,
      noteId: '',
      note: {},
    };
  },
  mounted() {
    this.noteId = this.$route.params.noteId
    if (this.noteId) {
      this.note = NoteService.getItemById(this.noteId)
    } else {
      
      this.note = {
        noteId: "",
        title: "",
        todos: [],
      }
      this.note.noteId = random()
    }
  },
  methods: {
    addTodo() {
      this.note.todos.push({
        text: "",
        completed: false,
      });
    },
    onRemoveTodo(todo) {
      let i = this.note.todos.indexOf(todo);
      this.note.todos.splice(i, 1);
    },
    saveNote() {
      NoteService.updateItem(this.note.noteId, this.note)
    },
    cancelEdit() {
      this.clearNote()
      this.$router.push("/");
    },
    deleteNote() {
      NoteService.removeItem(this.noteId)
      this.clearNote()
      this.$router.push("/");

    },
    clearNote(){
      this.note = {
        noteId: "",
        title: "",
        todos: [],
      }
    },
    undo() {
      this.watching = false;
      if (this.histotyIndex > 0) {
        this.histotyIndex -= 1;
        this.note = this.noteHistory[this.histotyIndex];
      }
    },
    redo() {
      this.watching = false;
      if (this.histotyIndex < (this.noteHistory.length - 1)) {
        this.histotyIndex += 1;
        this.note = this.noteHistory[this.histotyIndex];
      }
    },
    async handleDeleteNote(noteId){
      if (await confirm('Do you realy want to delete this note?', 'This data will be lost forever')) {
        this.deleteNote(noteId)
        } 
    },
    async handleCancelEdit(noteId){
      if (await confirm('Do you realy want to cancel editing and exit to the main page?',
       'All unsaved changes will be lost.')) {
        this.cancelEdit(noteId)
        } 
    },
  },
  watch: {
    note: {
      handler: function(val) {
        if (this.watching) {
          this.noteHistory.push(JSON.parse(JSON.stringify(val)));
          this.histotyIndex = this.noteHistory.length - 1;
        } else {
          this.watching = true;
        }
      },
      deep: true,
    },
  },
}
</script>

<style>
.new-todo{
  display: flex;
  justify-content: flex-start;
  background-color: rgba(255, 255, 255, 0.3);
  height: 36px;
  margin: 5px 0px;
  padding-top: 4px;
  padding-left: 10px;
  padding-right: 15px;
  border-radius: 5px;
}
</style>
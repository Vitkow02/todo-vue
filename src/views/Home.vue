<template>
  <div class="home">
    <div v-if="!notes.length">
      <h3>?</h3>
      <IconButton
        color="orange" 
        type="add" 
        @action="$router.push('/note')"
        label="Add">
      </IconButton>
      <hr/>
    </div>
    <div>
      <NoteCard
        v-for="note in notes"
        :note="note"
        :key="note.title"
        @delete-note="handleDeleteNote">
      </NoteCard>
    </div>
  </div>
</template>

<script>
import IconButton from "@/components/IconButton.vue";
import NoteCard from "@/components/NoteCard.vue";
import {create} from 'vue-modal-dialogs';
import Confirm from '@/components/Confirm.vue';

const confirm = create(Confirm, 'title', 'content')

export default {
  name: "Home",
  data() {
    return {
      notes: []
    };
  },
  components: {
    "NoteCard": NoteCard,
    "IconButton": IconButton
    
  },
  mounted () {
    this.fetchNotes()
  },
  methods: {
    deleteNote(noteId) {
      NoteService.removeItem(noteId)
      this.fetchNotes()
    },
    
    fetchNotes(){
      this.notes = NoteService.fetchNotes()
    },
    
    async handleDeleteNote(noteId){
      if (await confirm('Do you realy want to delete this note?', 'This data will be lost forever')) {
        this.deleteNote(noteId)
        } 
    }
  },
}
</script>

<style>

</style>
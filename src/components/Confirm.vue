<template>
    <div class="modal-backdrop" @click="$close(false)">
        <div class="modal-dialog">
            <span class="material-icon red nd-48">
                report  
            </span>
            <header class="modal-title">{{title}}</header>
            <div class="model-body">
                <p>{{content}}</p>
            </div>
            <footer class="modal-action">
                <IconButton
                    type="check-circle"
                    color="orange"
                    @action="$close(true)"
                    label="Confrim">
                </IconButton>
                <IconButton
                    type="cancel"
                    color="red"
                    @action="$close(false)"
                    label="Cancel">
                </IconButton>
            </footer>
        </div>    
    </div>
</template>

<script>
import IconButton from "@/IconButton.vue";

export default{
    name: 'Confirm',
    components: {
        'IconButton': IconButton
    },
}
</script>

<style>

</style>
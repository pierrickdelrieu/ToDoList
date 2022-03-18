<template>
    <div id="modal" @click.self="close">
        <div id="modal-content">
            <img  v-show="displayCloseIcon" id="modal-close-icon" src="../../assets/close.svg" alt="Close modal icon" @click="close">
            <div class="modal-item"><slot name="header"></slot></div>
            <div class="modal-item"><slot name="content">Empty PopUp</slot></div>
            <div class="modal-item"><slot name="footer"></slot></div>
        </div>
    </div>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Modal",
    props: {
        displayCloseIcon: {
            type: Boolean,
            default: true
        }
    },
    methods: {
        close() {
            this.$emit('close');
        },
    }
}
</script>

<style>
    #modal {
        position: fixed;
        left: 0;
        top: 0; 
        
        width: 100vw;
        height: 100vh;
        background-color: rgba(237, 237, 237, 0.2);
        z-index: 1;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    #modal-content {
        position: relative;

        z-index: 1;
        min-width: 200px;
        min-height: 10px;
        width: fit-content;
        /* height: min-content; */

        background-color: #FFFFFF;
        box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.25);
        border-radius: 10px;

        display: flex;
        flex-direction: column;
        justify-content: space-between;

        padding: 20px 40px;
    }

    #modal-close-icon {
        width: 24px;
        position: absolute;
        right: 10px;
        top: 10px;

        cursor: pointer;
    }
</style>
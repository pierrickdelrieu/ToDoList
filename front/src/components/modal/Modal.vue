<template>
    <div id="modal" @click.self="close">
        <div id="modal-content">
            <img src="../../assets/close.svg" alt="Close modal icon" @click="close">
            <template name="header" class="modal-item"></template>
            <template name="content" class="modal-item">Empty PopUp</template>
            <template name="footer" class="modal-item"></template>
        </div>
    </div>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Modal",
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
    }

    #modal-content {
        position: absolute;
        left: 50%;
        top: 30%;
        transform: translate(-50%, -30%);

        z-index: 1;
        min-width: 200px;
        min-height: 10px;

        background-color: #FFFFFF;
        box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.25);
        border-radius: 10px;

        display: flex;
        flex-direction: column;
        justify-content: space-between;

        padding: 20px;
    }

    #modal-content > img {
        width: 24px;
        position: absolute;
        right: 10px;
        top: 10px;

        cursor: pointer;
    }

    .modal-item {
        margin: 0 30px;
    }
</style>
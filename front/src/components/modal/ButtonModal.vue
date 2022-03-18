<template>
  <input type="submit" :value="content" @click="click"
        :class="[color === 'grey' ? 'button-modal-grey' : 'button-modal-red', 'button-modal']"/>
</template>

<script>
export default {
    name: "ButtonModal",
    props: {
        color: {
            type: String, // red or grey
            default: 'red'
        },
        content: {
            type: String,
            required: true
        }
    },
    methods: {
        click() {
            this.$emit('click')
        }
    },
}
</script>

<style>
    .button-modal {
        margin: 0 10px;
        /* width: 100px; */
        /* height: 35px; */

        font-weight: 600;
        font-size: 15px;
        color: #FFFFFF;

        display: flex;
        align-items: center;
        justify-content: space-around;

        border-radius: 10px;
        cursor: pointer;
        padding: 10px 30px;
        width: fit-content;
        border: unset;
    }

    .button-modal-red {
        background: #F25019;
    }

    .button-modal-red:hover{
        background: rgba(242, 80, 25, 0.8);
    }


    .button-modal-grey {
        background: #A5A5A5;
    }

    .button-modal-grey:hover{
        background: #BFBFBF;
    }
</style>
<template>
  <div>
    <input :id="'editable-' + name.toLowerCase()" class="editable" v-if="editing" v-model="inputValue"
            :style="'font-size: ' + size + 'px;' + 'font-weight: ' + weight + ';' + 'width: ' + ((this.inputValue.length) * this.size) + 'px;'"
            @keydown.enter="toggleEditing"
            @blur="toggleEditing"
            @input="resize"
            type="text"
            size="fit-content">

    <div v-else @click="toggleEditing" class="editable-content"
        :style="'font-size: ' + size + 'px;' + 'font-weight: ' + weight + ';'">
    {{ value }}</div>
    
  </div>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Editable",
    props:{
        name: {
            type: String,
            required: true
        },
        label: {
            type: String,
            default: ""
        },
        value: {
            type: String,
            default: "Undefined"
        },
        size: {
            type: Number,
            default: 16
        },
        weight: {
            type: Number,
            default: 400
        }
    },
    data(){
        return {
            editing: false,
            inputValue: this.value
        }
    },
    methods: {
        toggleEditing() {
            const input = document.getElementById('editable-' + this.name.toLowerCase());

            if((0 < this.inputValue.length) && (this.inputValue.length <= 30)) {
                this.editing = !this.editing;
            } else {
                input.setCustomValidity('The string must be between 1 and 30 characters');
                input.reportValidity()
            }

            if(!this.editing) {
                this.$emit('submit', this.inputValue)
            }
        },
        resize() {        
            const input = document.getElementById('editable-' + this.name.toLowerCase());
            input.style.width = ((this.inputValue.length) * this.size) + 'px'
        }
    },    
}
</script>

<style>
    .editable {
        padding: 0 10px;

        /* root/base - on dark */

        background: #FAFBFC;
        /* line/faint - on light */

        border: 1px solid rgba(156, 176, 197, 0.5);
        box-sizing: border-box;
        /* level -1 */

        box-shadow: inset 0px 1px 2px 1px rgba(38, 39, 40, 0.2);
        border-radius: 8px;

        min-width: 60px;
        display: flex;
        overflow-x: scroll;
        width: fit-content;
        block-size: fit-content;

    }

    .editable-content {
        margin: 0;
    }
</style>
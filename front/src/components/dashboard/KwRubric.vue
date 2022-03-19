<script>
import Editable from "@/components/Editable"

export default {
  name: "KwRubric",
  components: { Editable },
  props: {
    title: {
      type: String,
      default: "New rubrics"
    },
    id: {
      type: Number
    },
    tasks: [
      {
        id: 1
      }
    ]
  },
  methods: {
    showNewTaskModal() {
      this.$emit("showNewTaskModal")
    }
  },
  computed: {
    numberOfTask() {
      let sum = 0
      this.tasks.forEach(() => {
        sum ++
      })
      return sum
    }
  }
}
</script>

<template>
  <div class="kw-rubric">
    

    <div class="kw-rubric-header">
      <Editable :value="title" @submit="updateTitle" name="Title-rubric" :size='20' :weight='500'/>

<!--      <p>{{ numberOfTask }}</p>-->
      <img src="../../assets/plus-circle-grey.svg" alt="Plus circle" @click="showNewTaskModal">
    </div>
    <div class="kw-rubric-tasks">
      <slot name="tasks"></slot>
    </div>
  </div>
</template>

<style>
  .kw-rubric {
    position: relative;
    background: #F6F6F6;
    border-radius: 17px;
    width: 327px;
    min-height: 100px;
    height: fit-content;
    margin: 20px 10px;
  }
  .kw-rubric-header {
    margin-top: 10px;
    width: 90%;
    display: flex;
    justify-content: space-between;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }
  .kw-rubric-header > h1 {
    font-weight: 500;
    font-size: 20px;
  }
  .kw-rubric-header > img {
    width: 24px;
    cursor: pointer;
  }
  /* .kw-rubric-header > img:hover {
    mask: url("../../assets/plus-circle.svg");
    filter: invert(200%);
    fill-opacity: aqua;
  } */
  .kw-rubric-tasks {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
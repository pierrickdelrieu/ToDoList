<script>
/*eslint-disable*/
import Editable from "@/components/Editable"


export default {
  name: "KwRubric",
  components: { Editable },
  props: {
    
    rubric: {
      required: true
    }
  },
  methods: {
    showNewTaskModal() {
      this.$emit("showNewTaskModal")
    },
    updateTitle(e) {
      // call API
    },
    removeRubric() {
      this.$store.dispatch("removeRubric", {
        id_rubric: this.rubric.id
      }).then(() => {
        
        this.$router.go()
       
        
      })
      // CALL API
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
      <Editable :value="rubric.name" @submit="updateTitle" name="Title-rubric" :size='20' :weight='500'/>

      <div class="kw-rubric-header-logo">
        <img src="../../assets/bin.svg" alt="Bin" style="margin-right: 30px; cursor: pointer;" @click="removeRubric" />
        <img src="../../assets/plus-circle-grey.svg" alt="Plus circle" @click="showNewTaskModal">
      </div>

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


  .kw-rubric-header-logo {
    display: flex;
    align-items: center;
  }

</style>
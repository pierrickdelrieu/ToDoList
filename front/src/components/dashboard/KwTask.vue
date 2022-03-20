<script>
import moment from 'moment'

export default {
  name: "KwTask",
  props: {
    task: {
      type: Object,
      required: true
    }
  },
  computed: {
    membersReduce() {
      if (this.task.members != null) {
        if (this.task.members.length > 3) {
          let members = []
          for (let i = 0; i < 3; i++) {
            members.push(this.task.members[i])
          }
          return members
        }
      }
      return this.task.members;
    },
    datePerso() {
      return moment(this.task.date, "YYYY-MM-DD").format('MM/DD')
    }
  },
  methods: {
    click() {
      this.$emit('click')
    }
  },
}
</script>

<template>
  <div class="kw-task" @click="click">
    <h1>{{ task.name }}</h1>

      <div v-show="task.members" class="kw-task-members kw-task-element">
        <img src="../../assets/team.svg" alt="Team icon">
        <p v-for="(member, index) in membersReduce" :key="index">
          {{ member.firstname[0].toUpperCase() }}{{ member.lastname[0].toUpperCase() }}
        </p>
        <p>{{ this.task.members ? (this.task.members.length > 3) ? '...' : '' : ''}}</p>
      </div>

      <div v-show="task.date || task.priority"  :class="[ task.priority ? task.priority === 1 ? 'kw-task-date-lowPriority' : task.priority === 2 ? 'kw-task-date-mediumPriority' : 'kw-task-date-highPriority' : 'kw-task-date-emptyPriority', 'kw-task-date kw-task-element']">
        <div v-show="task.date" style="display: flex"><img src="../../assets/date.svg" alt="Date icon">
        <p>Due {{ datePerso }}</p></div>
      </div>
  </div>
</template>



<style>
  .kw-task {
    position: relative;
    width: 285px;
    height: 85px;
    margin: 15px 0;
    padding: 10px;
    background: #FFFFFF;
    border: 1px solid #DDDDDD;
    box-sizing: border-box;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
    border-radius: 8px;
  }
  .kw-task > h1 {
    font-weight: 500;
    font-size: 16px;
    color: #212121;
    width: 100%;
    margin: 0;
  }
  .kw-task-content {
    display: flex;
  }
  .kw-task-element {
    display: flex;
    align-items: center;
    margin: 0;
  }
  .kw-task-element p {
    margin: 0;
  }
  .kw-task-element img {
    width: 20px;
    margin-right: 10px;
  }
  .kw-task-date {
    position: absolute;
    right: 10px;
    bottom: 5px;
    padding: 4px 5px;
    border-radius: 10px;
    width: fit-content;

    min-width: 10px;
    min-height: 10px;
  }
  .kw-task-date-highPriority {
    background: #FFDCE0;
  }
  .kw-task-date-mediumPriority {
    background: #FFEBDC;
  }
  .kw-task-date-lowPriority {
    background: #DCFFDF;
  }
  .kw-task-date-emptyPriority {
    background: #F2F2F2;
  }
  .kw-task-members {
    position: absolute;
    left: 10px;
    bottom: 10px;
  }
  .kw-task-members > p {
    margin: 0 2px;
  }
</style>
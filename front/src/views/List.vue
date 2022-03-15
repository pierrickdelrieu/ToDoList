<script>
import DashboardContent from "@/components/dashboard/DashboardContent";
import KwRubric from "@/components/dashboard/KwRubric";
import KwTask from "@/components/dashboard/KwTask";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "List",
  components: {KwTask, KwRubric, DashboardContent},
  props:['id'],
  data() {
    return {
      title: "Kanban Model",
      is_favorite: false,
      members: ["Pierrick", "Meric", "Kais", "Guillaume"],
      rubrics: [
        {
          id: 1,
          name: "Todo",
          tasks: [
            {
              id: 1,
              name: "Has to be done",
              date: null,
              priority: 3,
              members: ["PD", "KZ", "MC", "GD", "RC", "CM"]
            }
          ]
        },
        {
          id: 2,
          name: "Doing",
          tasks: [
            {
              id: 2,
              name: "Title of task",
              date: "4/11",
              priority: 1,
              members: ["PD", "KZ", "MC"]
            },
            {
              id: 3,
              name: "Title of task",
              date: "4/11",
              priority: 2,
              members: null
            }
          ]
        },
        {
          id: 3,
          name: "Done",
          tasks: [
            {
              id: 4,
              name: "Title of task",
              date: "4/11",
              priority: 2,
              members: null
            },
            {
              id: 5,
              name: "Title of task",
              date: "4/11",
              priority: 2,
              members: null
            },
            {
              id: 6,
              name: "Title of task",
              date: "4/11",
              priority: 3,
              members: null
            }
          ]
        }
      ]
    }
  },
  computed: {
    numberOfTask() {
      let sum = 0
      this.rubrics.forEach((rubric) => {
        rubric.tasks.forEach(() => {
          sum ++
        })
      })
      return sum
    }
  }
}
</script>


<template>
  <DashboardContent>
    <template v-slot:title>{{ title }} {{ id }}</template>

    <template v-slot:logo>
      <img v-if="is_favorite" src="../assets/favorite_checked.svg" alt="Favorite checked">
      <img v-else src="../assets/favorite.svg" alt="Favorite checked">
      <img src="../assets/share.svg" alt="Share icon">
      <img src="../assets/plus-circle.svg" alt="Plus circle">
    </template>

    <template v-slot:info>
      <div class="dashboard-content-header-info-item"><h1>Number of tasks</h1><p>{{ numberOfTask }}</p></div>
      <div class="dashboard-content-header-info-item"><h1>Participants</h1>
        <p v-for="(member, index) in members" :key="index" style="margin: 0 4px">{{ member }}</p>
      </div>
    </template>

    <template v-slot:main>
      <KwRubric v-for="rubric in rubrics" :key="rubric.id" :title="rubric.name">
        <template v-slot:tasks>
          <KwTask v-for="task in rubric.tasks" :key="task.id" :task="task"/>
        </template>
      </KwRubric>
    </template>
  </DashboardContent>
</template>



<style>
</style>
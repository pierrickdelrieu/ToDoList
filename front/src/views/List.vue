<script>
import DashboardContent from "@/components/dashboard/DashboardContent";
import KwRubric from "@/components/dashboard/KwRubric";
import KwTask from "@/components/dashboard/KwTask";
import NewTaskModal from "@/components/modal/NewTaskModal";
import NewRubricModal from "@/components/modal/NewRubricModal";
import ConfirmModal from '@/components/modal/ConfirmModal';
import ShareModal from '@/components/modal/ShareModal';
import Loading from '@/components/Loading';


export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "List",
  components: { KwTask, KwRubric, DashboardContent, NewTaskModal, NewRubricModal, ConfirmModal, ShareModal, Loading },
  props:['id'],
  data() {
    return {
      isNewTaskModal: false,
      isNewRubricModal: false,
      isConfirmFavoriteModal: false,
      isShareModal: false,
      rubricForNewTask: null,

      title: "Kanban Model",
      is_favorite: false,
      members: [
        { id: 1, 
          firstname: "Pierrick",
          lastname:  "Delrieu",
          mail: "pierrick.delrieu@efrei.net"
        },
        { id: 2, 
          firstname: "Meric",
          lastname:  "Chenu",
          mail: "meric.chenu@efrei.net"
        },
        { id: 3, 
          firstname: "Kais",
          lastname:  "Zegdoud",
          mail: "kais.zegdoud@efrei.net"
        },
        { id: 4, 
          firstname: "Guillaume",
          lastname:  "Dumas",
          mail: "guillaume.dumas@efrei.net"
        }],
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
  },
  methods: {
    toggleNewTaskModal(rubric) {
      this.isNewTaskModal = !this.isNewTaskModal;

      if(this.isNewTaskModal) {
        this.rubricForNewTask = {
          id: rubric.id,
          name: rubric.name
        }
      } else {
        this.rubricForNewTask = null;
      }
    },
    toggleNewRubricModal() {
      this.isNewRubricModal = !this.isNewRubricModal;
    },
    toggleShareModal() {
      this.isShareModal = !this.isShareModal;
    },
    toggleConfirmFavoriteModal() {
      this.isConfirmFavoriteModal = !this.isConfirmFavoriteModal;
    },
    addToFavorite() {
      this.isConfirmFavoriteModal = !this.isConfirmFavoriteModal;
      // update database with api call
    }
  },
}
</script>


<template>
  <div>
    <Loading v-show="false"/>
    <NewTaskModal v-show="isNewTaskModal" @close="toggleNewTaskModal" :members="members" :rubric='rubricForNewTask'/>

    <NewRubricModal v-show="isNewRubricModal" @close="toggleNewRubricModal" :list="{id: id, name: title}"/>

    <ConfirmModal v-show="isConfirmFavoriteModal" 
    :content="'Are you sure you want to bookmark ' + title + ' list?'"
    @cancel="toggleConfirmFavoriteModal" @confirm="addToFavorite"/>

    <ShareModal v-show="isShareModal" @close="toggleShareModal" :list="{id: id, name: title, members: members}"/>

    <DashboardContent>
      <template v-slot:modal>
        
      </template>

      <template v-slot:title>{{ title }} {{ id }}</template>

      <template v-slot:logo>
        <img v-if="is_favorite" src="../assets/favorite_checked.svg" alt="Favorite checked" @click="toggleConfirmFavoriteModal" style="cursor: pointer;">
        <img v-else src="../assets/favorite.svg" alt="Favorite checked" @click="toggleConfirmFavoriteModal" style="cursor: pointer;">
        <img src="../assets/share.svg" alt="Share icon" @click="toggleShareModal" style="cursor: pointer;">
        <img src="../assets/plus-circle.svg" alt="Plus circle" @click="toggleNewRubricModal" style="cursor: pointer;">
      </template>

      <template v-slot:info>
        <div class="dashboard-content-header-info-item"><h1>Number of tasks</h1><p>{{ numberOfTask }}</p></div>
        <div class="dashboard-content-header-info-item"><h1>Participants</h1>
          <p v-for="(member, index) in members" :key="index" style="margin: 0 4px">{{ member.firstname }}</p>
        </div>
      </template>

      <template v-slot:main>
        <KwRubric v-for="rubric in rubrics" :key="rubric.id" :title="rubric.name" @showNewTaskModal="toggleNewTaskModal(rubric)">
          <template v-slot:tasks>
            <KwTask v-for="task in rubric.tasks" :key="task.id" :task="task"/>
          </template>
        </KwRubric>
      </template>
    </DashboardContent>
  </div>
</template>



<style>
</style>
<script>
import DashboardContent from "@/components/dashboard/DashboardContent";
import KwRubric from "@/components/dashboard/KwRubric";
import KwTask from "@/components/dashboard/KwTask";
import NewTaskModal from "@/components/modal/NewTaskModal";
import NewRubricModal from "@/components/modal/NewRubricModal";
import ConfirmModal from '@/components/modal/ConfirmModal';
import ShareModal from '@/components/modal/ShareModal';
import Loading from '@/components/Loading';
import Editable from '@/components/Editable';
import TaskModal from '@/components/modal/TaskModal';


export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "List",
  components: { KwTask, KwRubric, DashboardContent, NewTaskModal, NewRubricModal, ConfirmModal, ShareModal, Loading, Editable, TaskModal },
  props:['id'],
  data() {
    return {
      isNewTaskModal: false,
      isNewRubricModal: false,
      isConfirmFavoriteModal: false,
      isShareModal: false,
      isTaskModal: false,
      modalEvent: '',

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
              description: "Description de cette tache de merde",
              date: null,
              priority: 3,
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
              description: "Description de",
              date: '2022-04-03',
              priority: null,
              members:[
                { id: 1, 
                  firstname: "Pierrick",
                  lastname:  "Delrieu",
                  mail: "pierrick.delrieu@efrei.net"
                },
                { id: 2, 
                  firstname: "Meric",
                  lastname:  "Chenu",
                  mail: "meric.chenu@efrei.net"
                }],
            },
            {
              id: 3,
              name: "Title of task",
              description: "Description de cette tache de merde",
              date: '2022-04-03',
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
              description: "Description de cette tache de merde",
              date: "2022-04-03",
              priority: 2,
              members: null
            },
            {
              id: 5,
              name: "Title of task",
              description: "Description de cette tache de merde",
              date: "2022-04-03",
              priority: 2,
              members: null
            },
            {
              id: 6,
              name: "Title of task",
              description: "Description de cette tache de merde",
              date: "2022-04-03",
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
    },
    rubricsShare() {
      let rubrics = []

      this.rubrics.forEach((item) => {
        rubrics.push({
          id: item.id,
          name: item.name
        })
      })

      return rubrics;
    }
  },
  methods: {
    toggleNewTaskModal(rubric) {
      this.isNewTaskModal = !this.isNewTaskModal;

      if(this.isNewTaskModal) {
        this.modalEvent = {
          id: rubric.id,
          name: rubric.name
        }
      } else {
        this.modalEvent = null;
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
    toggleTaskModal(task, rubric) {
      this.isTaskModal = !this.isTaskModal;

      if(task && rubric) {
        this.modalEvent = {
          task: task,
          currentRubric: rubric
        }
      } else {
        this.modalEvent = null
      }
      // console.log("1- " + this.modalEvent)

      // if(task && rubric) {
      //   // let rubrics = []
      //   // this.rubrics.forEach((item) => {
      //   //   rubrics.push({
      //   //     id: item.id,
      //   //     name: item.name
      //   //   })
      //   // })

      //   // this.modalEvent = {
      //   //   task : task,
      //   //   currentRubric : {
      //   //     id: rubric.id,
      //   //     name: rubric.name
      //   //   }
      //   // }
      //   this.modalEvent = task
      // } else {
      //   this.modalEvent = null
      // }

      // console.log(this.modalEvent)
    },
    addToFavorite() {
      this.isConfirmFavoriteModal = !this.isConfirmFavoriteModal;
      // update database with api call
    },
    updateTitle(e) {
      this.title = e
      // console.log(this.title)
      // call API
    }
  },
}
</script>


<template>
  <div>
    <Loading v-show="false"/>
    <NewTaskModal v-show="isNewTaskModal" @close="toggleNewTaskModal" :members="members" :rubric='modalEvent'/>

    <NewRubricModal v-show="isNewRubricModal" @close="toggleNewRubricModal" :list="{id: id, name: title}"/>

    <TaskModal v-show="isTaskModal" @close="toggleTaskModal(null, null)" :members="members"
      :task="modalEvent ? modalEvent.task : null" :rubrics="rubricsShare" :currentRubric="modalEvent ? modalEvent.currentRubric : null"/>

    <ConfirmModal v-show="isConfirmFavoriteModal" 
    :content="'Are you sure you want to bookmark ' + title + ' list?'"
    @cancel="toggleConfirmFavoriteModal" @confirm="addToFavorite"/>

    <ShareModal v-show="isShareModal" @close="toggleShareModal" :list="{id: id, name: title, members: members}"/>

    <DashboardContent>
      <template v-slot:modal>
        
      </template>

      <template v-slot:title>
        <!-- {{ title }} {{ id }} -->
        <Editable :value="title" @submit="updateTitle" name="Title" :size='36' :weight='500'/>
      </template>

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
        <KwRubric v-for="rubric in rubrics" :key="rubric.id" :rubric="rubric" @showNewTaskModal="toggleNewTaskModal(rubric)">
          <template v-slot:tasks>
            <KwTask v-for="task in rubric.tasks" :key="task.id" :task="task" @click="toggleTaskModal(task, rubric.id)" style="cursor: pointer;"/>
          </template>
        </KwRubric>
      </template>
    </DashboardContent>
  </div>
</template>



<style>
</style>
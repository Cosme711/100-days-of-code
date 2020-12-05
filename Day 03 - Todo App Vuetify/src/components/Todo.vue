<template>
  <v-main>
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="6" class="ma-5">
          <h1 class="todo-title black--text">Todo App</h1>
          <v-card class="mt-10 card-view">
            <v-tabs
              v-model="tab"
              background-color="transparent"
              color="#5A5EE7"
              fixed-tabs
              class="mt-2"
            >
              <v-tab v-for="item in items" :key="item">
                <v-container v-if="item == 'Active' && remainingTasks ">
                  <v-badge color="#f57173" :content="remainingTasks">{{ item }}</v-badge>
                </v-container>
                <v-container v-else-if="item == 'Completed' && completedTasks">
                  <v-badge color="#8F8DA5" :content="completedTasks">{{ item }}</v-badge>
                </v-container>
                <v-container v-else>{{ item }}</v-container>
              </v-tab>
            </v-tabs>
            <v-divider></v-divider>
            <v-tabs-items v-model="tab">
              <v-tab-item v-for="(item,index) in items" :key="item">
                <!-- All -->
                <template v-if="index == 0">
                  <v-card color="basil" flat>
                    <v-text-field
                      v-model="task"
                      single-line
                      solo
                      :clear-icon="icons[0]"
                      clearable
                      label="Enter New Todo"
                      type="text"
                      @click:clear="clearMessage"
                      @keydown.enter="create"
                      class="my-text-style"
                    >
                      <template v-slot:append>
                        <v-btn depressed rounded color="secondary" class="ma-0" @click="create">Add</v-btn>
                      </template>
                    </v-text-field>
                    <v-card v-if="tasks.length > 0" flat>
                      <v-slide-y-transition class="py-0" group tag="v-list">
                        <template v-for="(task, i) in tasks">
                          <v-divider v-if="i !== 0" :key="`${i}-divider`"></v-divider>
                            <v-hover v-slot:default="{ hover }" :key="`${i}-hover`">
                              <v-list-item :key="`${i}-${task.text}`"  v-bind:class="[hover && 'on-hover']">
                                <v-list-item-action>
                                  <v-checkbox
                                    v-model="task.done"
                                    :color="task.done && 'accent' || 'secondary'"
                                  >
                                    <template v-slot:label>
                                      <div 
                                        v-bind:class="[task.done && 'text-decoration-line-through']"
                                        class="ml-4"
                                        v-text="task.text"
                                      ></div>
                                    </template>
                                  </v-checkbox>
                                </v-list-item-action>
                              </v-list-item>
                            </v-hover>
                        </template>
                      </v-slide-y-transition>
                    </v-card>
                  </v-card>
                </template>

                <!-- Active -->
                <template v-if="index == 1">
                  <v-card color="basil" flat>
                    <v-text-field
                      v-model="task"
                      single-line
                      solo
                      :clear-icon="icons[0]"
                      clearable
                      label="Enter New Todo"
                      type="text"
                      @click:clear="clearMessage"
                    >
                      <template v-slot:append>
                        <v-btn depressed rounded color="secondary" class="ma-0" @click="create">Add</v-btn>
                      </template>
                    </v-text-field>
                    <v-card v-if="remainingTasks" flat>
                      <v-slide-y-transition class="py-0" group tag="v-list">
                        <template v-for="(task, i) in tasks">
                          <template v-if="!task.done">
                            <v-divider v-if="i !== 0" :key="`${i}-divider`"></v-divider>
                            <v-hover v-slot:default="{ hover }" :key="`${i}-hover`">
                              <v-list-item :key="`${i}-${task.text}`"  v-bind:class="[hover && 'on-hover']">
                                <v-list-item-action>
                                  <v-checkbox
                                    v-model="task.done"
                                    :color="task.done && 'accent' || 'secondary'"
                                  >
                                    <template v-slot:label>
                                      <div
                                        :class="task.done && 'text-decoration-line-through'"
                                        class="ml-4"
                                        v-text="task.text"
                                      ></div>
                                    </template>
                                  </v-checkbox>
                                </v-list-item-action>
                              </v-list-item>
                            </v-hover>
                          </template>
                        </template>
                      </v-slide-y-transition>
                    </v-card>
                  </v-card>
                </template>

                <!-- Completed -->
                <template v-if="index == 2">
                  <v-card v-if="completedTasks" flat>
                    <v-slide-y-transition class="py-0" group tag="v-list">
                      <template v-for="(task, i) in tasks">
                        <template v-if="task.done">
                          <v-divider v-if="i !== 0" :key="`${i}-divider`"></v-divider>
                          <v-hover v-slot:default="{ hover }" :key="`${i}-hover`">
                            <v-list-item :key="`${i}-${task.text}`"  v-bind:class="[hover && 'on-hover']">
                              <v-list-item-action >
                                <v-checkbox
                                  v-model="task.done"
                                  :color="task.done && 'accent' || 'secondary'"
                                >
                                  <template v-slot:label>
                                    <div
                                      :class="task.done && 'text-decoration-line-through'"
                                      class="ml-4"
                                      v-text="task.text"
                                    ></div>
                                  </template>
                                </v-checkbox>
                              </v-list-item-action>
                              <v-spacer></v-spacer>
                              <v-scroll-x-transition>
                                <v-btn text color="accent"  @click="deleteItem(i)">
                                  <v-icon color="accent">delete_outline</v-icon>
                                </v-btn>
                              </v-scroll-x-transition>
                            </v-list-item>
                          </v-hover>
                        </template>
                      </template>
                    </v-slide-y-transition>
                    <v-btn
                      color="secondary"
                      class="ma-2 white--text float-right"
                      @click="deleteAll"
                      v-if="completedTasks"
                    >
                      <v-icon left>delete_outline</v-icon>delete all
                    </v-btn>
                  </v-card>
                </template>
              </v-tab-item>
            </v-tabs-items>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import { mdiClose } from "@mdi/js";
var moment = require("moment");

export default {
  name: "Todo",
  data() {
    return {
      moment: moment,
      tab: null,
      items: ["All", "Active", "Completed"],
      tasks: [],
      task: null,
      icons: [mdiClose],
      rules: {
          required: value => !!value || 'Required.'
      }
    };
  },
  watch: {
    tasks: {
      handler() { this.saveTasks() },
      deep: true,
    },
  },
  mounted() {
    if (localStorage.getItem('tasks')) {
      try {
        this.tasks = JSON.parse(localStorage.getItem('tasks'));
      } catch(e) {
        localStorage.removeItem('tasks');
      }
    }
  },
  computed: {
    completedTasks() {
      return this.tasks.filter((task) => task.done).length;
    },
    remainingTasks() {
      return this.tasks.length - this.completedTasks;
    },
  },

  methods: {
    create() {
      if(!this.task){
        return;
      }
      this.tasks.push({
        done: false,
        text: this.task,
      });
      this.task = null;
      this.saveTasks();
      
    },
    clearMessage() {
      this.message = "";
    },
    deleteAll(){
      const all_delete = this.tasks.filter((task) => task.done);
      all_delete.forEach(f => this.tasks.splice(this.tasks.findIndex(e => e.text === f.text),1));
      this.saveTasks();
    },
    deleteItem(i){
      this.tasks.splice(i,1);
      this.saveTasks();
    },
    saveTasks(){
      const parsed = JSON.stringify(this.tasks);
      localStorage.setItem('tasks', parsed);
    }
  },
};
</script>

<style scoped>
  .todo-title {
    font-family: 'Castoro', serif;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 42px;
    color: whitesmoke;
  }
  .card-view {
    display: block;
    width: 100%;
    /* background-color: rgb(254, 254, 255); */
    box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 150px;
    margin: auto;
    border-radius: 10px;
    overflow: hidden;
  }
  .card_title {
    font-size: 25px;
    color: rgb(102, 106, 251);
    letter-spacing: 0.8px;
  }
  .card-sub-title span {
    display: block;
    margin-top: 15px;
    font-size: 20px;
    color: rgb(168, 169, 202);
    letter-spacing: 0.4px;
    text-align: left;
  }
</style>

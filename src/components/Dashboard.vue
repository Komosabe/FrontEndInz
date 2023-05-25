<template>
    <div>
      <Sidebar />
      <h1>Dashboard</h1>
  
      <div class="kanban-board">
        <div class="column">
          <h2>To Do</h2>
          <div class="task-list" @drop="dropHandler('todo')" @dragover.prevent>
            <div
              class="task"
              v-for="task in columns.todo"
              :key="task.id"
              :draggable="true"
              @dragstart="dragStartHandler(task, 'todo')"
            >
              {{ task.title }}
            </div>
          </div>
          <div class="task-list">
            <input type="text" v-model="newTask.todo" placeholder="New Task" />
            <p>  
              <button class="buttonAddTask" @click="addTask('todo')">Add Task</button>
            </p>
          </div>
        </div>
  
        <div class="column">
          <h2>In Progress</h2>
          <div class="task-list" @drop="dropHandler('inProgress')" @dragover.prevent>
            <div
              class="task"
              v-for="task in columns.inProgress"
              :key="task.id"
              :draggable="true"
              @dragstart="dragStartHandler(task, 'inProgress')"
            >
              {{ task.title }}
            </div>
          </div>
          <div class="task-list">
            <input type="text" v-model="newTask.inProgress" placeholder="New Task" />
            <p>
              <button class="buttonAddTask" @click="addTask('inProgress')">Add Task</button>
            </p>
          </div>
        </div>
  
        <div class="column">
          <h2>Done</h2>
          <div class="task-list" @drop="dropHandler('done')" @dragover.prevent>
            <div
              class="task"
              v-for="task in columns.done"
              :key="task.id"
              :draggable="true"
              @dragstart="dragStartHandler(task, 'done')"
            >
              {{ task.title }}
            </div>
          </div>
          <div class="task-list">
            <input type="text" v-model="newTask.done" placeholder="New Task" />
            <p>
              <button class="buttonAddTask" @click="addTask('done')">Add Task</button>
            </p>
            </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Sidebar from './Sidebar.vue';
  import '@/assets/styles.css';
  export default {
    name: 'Dashboard',
    components: {
      Sidebar,
    },
    data() {
      return {
        columns: {
          todo: [],
          inProgress: [],
          done: [],
        },
        newTask: {
          todo: '',
          inProgress: '',
          done: '',
        },
      };
    },
    methods: {
      dragStartHandler(task, column) {
        event.dataTransfer.setData('task', JSON.stringify(task));
        event.dataTransfer.setData('column', column);
      },
      dropHandler(targetColumn) {
        const task = JSON.parse(event.dataTransfer.getData('task'));
        const sourceColumn = event.dataTransfer.getData('column');
  
        if (targetColumn !== sourceColumn) {
          this.columns[targetColumn].push(task);
  
          const index = this.columns[sourceColumn].findIndex(t => t.id === task.id);
          this.columns[sourceColumn].splice(index, 1);
        }
      },
      addTask(column) {
        if (this.newTask[column]) {
          const task = {
            id: Date.now(),
            title: this.newTask[column],
          };
          this.columns[column].push(task);
          this.newTask[column] = '';
        }
      },
    },
  };
  </script>
  
  <style>
  .kanban-board {
    margin-left: 4.2rem;
    margin-right: 0.2rem;
    display: flex;
    gap: 20px;
  }
  
  .column {
    flex: 1;
  }
  
  .task-list {
    min-height: 200px;
    padding: 10px;
    border: 1px solid #ccc;
    background-color: #f7f7f7;
  }
  
  .task {
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    background-color: #fff;
    cursor: move;
  }
  </style>
  
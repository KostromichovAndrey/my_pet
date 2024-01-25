<script setup>
import { onMounted, ref } from 'vue';

const taskName = ref("");
const tasks = ref([]);

function addTask() {
  // console.log(taskName.value, "taskName.value");
  if (taskName.value === "") {
    return console.error("task name is empty");
  } 

  const newTask = {
    id: Date.now(),
    name: taskName.value,
    status: false,
  };
  // console.log(newTask, "newTask");

  tasks.value.push(newTask);
  console.log(tasks.value, "tasks.value");

  taskName.value = "";
};

function toggleTask(task) {
  // console.log(task, "task");

  const selectedTask = tasks.value.find((el) => el.id === task.id) 
  // console.log(selectedTask, "selectedTask");

  selectedTask.status = !selectedTask.status
}

function deleteTask(taskForDel) {
  console.log(taskForDel, "taskForDel - del");
  tasks.value = tasks.value.filter((el) => el.id !== taskForDel.id)
}

</script>

<template>
  <div>
    <div class="header">
      <h1>To do list</h1>
      <input v-model="taskName" type="text" placeholder="New taskName" @keyup.enter="addTask">
      <button @click="addTask">Add task</button>
    </div>

    <div class="body">
      <ul>
        <li v-for="(item, index) in tasks" :key="item.id" :class="{ completed: item.status }">
          <span>{{ index + 1 }}: </span>
          <span>{{ item.name }}</span>
          <input type="checkbox" :checked="item.status" @click.stop="toggleTask(item)">
          <button @click.stop="deleteTask(item)">Delete</button>
        </li>
      </ul>
    </div>

  </div>
</template>

<style lang="scss">
  .completed {
    background-color: rgb(87, 116, 87);
    text-decoration: line-through;
  }
</style>

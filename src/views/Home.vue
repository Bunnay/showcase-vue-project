<template>
  <div class="border border-1 rounded-lg p-5">
    <!-- Search -->
    <el-input v-model="search" placeholder="Search..." class="mb-5"></el-input>

    <!-- Task table -->
    <el-table :data="displayTasks" class="w-full">
      <el-table-column prop="title" label="Title" width="180" />
      <el-table-column prop="text" label="Text" width="180" />
      <el-table-column prop="completed" label="Completed" width="100">
        <template #default="scope">
          <el-switch v-model="scope.row.completed" />
        </template>
      </el-table-column>
      <el-table-column label="Operations" width="200">
        <template #default="scope">
          <el-row>
            <el-button size="small" @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
            <el-button size="small" type="danger" @click="handleDelete(scope.$index)"
              >Delete</el-button
            >
          </el-row>
        </template>
      </el-table-column>
    </el-table>

    <!-- Add task -->
    <el-form class="flex mt-3 gap-2" v-if="!onAction.edit">
      <el-input v-model="newTask.title" placeholder="Title" size="small"></el-input>
      <el-input v-model="newTask.text" placeholder="Text"></el-input>
      <el-button type="primary" @click.prevent="handleAdd" :disabled="!newTask.title"
        >Add Task</el-button
      >
    </el-form>

    <!-- Edit task -->
    <el-form class="flex mt-3 gap-2" v-if="onAction.edit">
      <el-input v-model="editTask.data.title" placeholder="Title" size="small"></el-input>
      <el-input v-model="editTask.data.text" placeholder="Text"></el-input>
      <el-button type="primary" @click.prevent="saveTask" :disabled="!editTask.data.title"
        >Save</el-button
      >
      <el-button type="primary" @click.prevent="onAction.edit = false">Cancel</el-button>
    </el-form>

    <p class="text-black">{{ search }}</p>
    <p class="text-black">{{ tasks }}</p>
  </div>
</template>

<script setup lang="ts">
//@ts-ignore
import { DEFAULT_TASKS_DATA, DEFAULT_TASK_DATA } from '@/constants/task'
//@ts-ignore
import type { Task } from '@/types/task'
import type { ElTable } from 'element-plus'
import { ref, watch } from 'vue'
import Fuse from 'fuse.js'

const tasks = ref<Task[]>([...DEFAULT_TASKS_DATA])
const newTask = ref<Task>({ ...DEFAULT_TASK_DATA })
const search = ref<string>('')
const displayTasks = ref<Task[]>([...DEFAULT_TASKS_DATA])
const editTask = ref({
  data: { ...DEFAULT_TASK_DATA } as Task,
  index: 0
})

const onAction = ref({
  add: true,
  edit: false,
  delete: false
})

watch(search, (newVal) => {
  if (newVal) {
    displayTasks.value = new Fuse(tasks.value, {
      keys: ['title']
    }).search(newVal) as unknown as Task[]
  } else {
    displayTasks.value = tasks.value
  }
})

const handleEdit = (index: number, row: Task) => {
  editTask.value.data = { ...row }
  editTask.value.index = index
  onAction.value.edit = true
}

const saveTask = () => {
  tasks.value[editTask.value.index] = { ...editTask.value.data }
  onAction.value.edit = false
}

const handleDelete = (index: number) => {
  tasks.value.splice(index, 1)
}

const handleAdd = () => {
  tasks.value.push(newTask.value)
  newTask.value = { ...DEFAULT_TASK_DATA }
  onAction.value.add = true
}
</script>

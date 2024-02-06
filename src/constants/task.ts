import type { Task } from '@/types/task'

export const DEFAULT_TASK_DATA: Task = {
  title: '',
  text: '',
  completed: false
}

export const DEFAULT_TASKS_DATA: Task[] = [
  { title: 'Learn Vue.js', text: 'Want to learn Vue.js', completed: false },
  { title: 'Build a TODO app', text: 'Want to build a TODO app', completed: true }
]

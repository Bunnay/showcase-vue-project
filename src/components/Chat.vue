<template>
  <div>
    <h1>Chat Room</h1>
    <ul v-if="messages.length > 0">
      <li v-for="message in messages" :key="message.id">
        {{ message.text }}
      </li>
    </ul>
    <p v-else>No messages yet.</p>
  </div>
</template>

<script setup lang="ts">
import {
  ref,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted
} from 'vue'

interface Message {
  id: number
  text: string
}

const messages = ref<Message[]>([])

onBeforeMount(() => {
  console.log('Before mount: Chat component is about to be mounted.')
  messages.value.push({ id: 3, text: 'kaka' })
})

onMounted(() => {
  console.log('Mounted: Chat component is mounted.')

  // Simulating fetching initial messages from a chat server
  setTimeout(() => {
    messages.value = [
      { id: 1, text: 'Hello!' },
      { id: 2, text: 'How are you?' }
    ]
  }, 1000)

  // Simulating subscribing to real-time updates from the chat server
  subscribeToChatUpdates()
})

onBeforeUpdate(() => {
  console.log('Before update: Chat component is about to be updated.')
})

onUpdated(() => {
  console.log('Updated: Chat component is updated.')
})

onBeforeUnmount(() => {
  console.log('Before unmount: Chat component is about to be unmounted.')

  // Simulating cleanup tasks like unsubscribing from chat updates
  unsubscribeFromChatUpdates()
})

onUnmounted(() => {
  console.log('Unmounted: Chat component is unmounted.')
})

function subscribeToChatUpdates() {
  console.log('Subscribing to chat updates...')
  // Simulating subscribing to chat updates
}

function unsubscribeFromChatUpdates() {
  console.log('Unsubscribing from chat updates...')
  // Simulating unsubscribing from chat updates
}
</script>

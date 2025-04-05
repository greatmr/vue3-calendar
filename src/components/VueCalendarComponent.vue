<template>
  <button class="Vue3-Calendar-button">
    <slot />
  </button>
</template>

<script setup lang="ts"></script>

<style lang="postcss">
.Vue3-Calendar-button {
  @apply border-none
    bg-teal-500
    text-white
    font-bold
    px-4
    py-2
    rounded
    cursor-pointer

    transform
    duration-100
    ease-in-out

    hover:(bg-teal-600)
    active:(scale-90);
}
</style>

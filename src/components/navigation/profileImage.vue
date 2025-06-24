<template>
  <img
    :src="profileImage"
    class="h-8 w-8 rounded-3xl object-contain"
    alt="User profile image"
  />
</template>

<script lang="ts" setup>
import image from "@/images/profile-image.png";

const profileImage = image;
</script>

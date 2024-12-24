<template>
  <img
    v-bind:src="profileImage"
    class="h-8 w-8 rounded-3xl object-contain"
    alt="User profile image"
  />
</template>

<script>
import image from "../images/profile-image.png";
export default {
  name: "profileImage",
  data() {
    return {
      profileImage: image,
    };
  },
};
</script>

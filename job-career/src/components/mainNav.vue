<template>
  <header class="w-full text-sm">
    <div class="fixed left-0 top-0 h-16 w-full bg-white">
      <div
        class="border-brand-gray-1 mx-auto flex h-full flex-nowrap border-b border-solid px-8"
      >
        <a href="/" class="flex h-full items-center text-xl">{{ company }}</a>
        <h2 class="ml-5 flex h-full items-center">
          Developed by {{ author.firstName }} {{ author.lastName }}
        </h2>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "mainNav",
  data() {
    return {
      company: "Awesome website",
      author: {
        firstName: "Vedant",
        lastName: "Gonnade",
      },
    };
  },
};
</script>

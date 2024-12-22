<template>
  <header class="w-full text-sm">
    <div class="fixed left-0 top-0 h-16 w-full bg-white">
      <div
        class="mx-auto flex h-full flex-nowrap border-b border-solid border-brand-gray-1 px-8"
      >
        <a v-bind:href="url" class="flex h-full items-center text-xl">
          {{ company }}</a
        >
        <nav class="ml-12 h-full">
          <ul class="flex h-full">
            <li
              v-for="menuItem in menuItems"
              v-bind:key="menuItem"
              class="ml-9 flex h-full font-medium first:ml-0"
            >
              <a href="" class="flex h-full items-center py-2">{{
                menuItem
              }}</a>
            </li>
          </ul>
        </nav>
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
      url: "https://careers.google.com",
      menuItems: [
        "Teams",
        "Locations",
        "Life at Bobo Corp",
        "How we hire",
        "Students",
        "Jobs",
      ],
    };
  },
};
</script>

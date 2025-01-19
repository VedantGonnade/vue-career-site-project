<template>
  <li class="mb-7">
    <RouterLink
      to="/jobs/results/1"
      class="hover:shadow-gray mx-auto block rounded border border-solid border-brand-gray-2 bg-white"
    >
      <div class="mx-8 pb-2 pt-5">
        <h2 class="mb-2 text-2xl">
          Technical Program Manager, Perception, Augmentd Reality
        </h2>
        <div class="flex flex-row align-middle">
          <div class="mr-5">
            <span>Bobo</span>
          </div>
          <div>
            <span>San Francisco, CA, USA</span>
          </div>
        </div>
      </div>
      <div class="px-8 py-4">
        <h3 class="mb-2 mt-1">Qualifications</h3>
        <div>
          <ul class="list-disc pl-8">
            <li>Bachelors degree or equivalent practical experience.</li>
            <li>5 years of experience in program management</li>
            <li>
              Experience analyzing data through querying databse (e.g., SQL)
              using spreadsheet software, and creating statistical models.
            </li>
          </ul>
        </div>
      </div>
    </RouterLink>
  </li>
</template>

<script>
export default {
  name: "JobListing",
};
</script>

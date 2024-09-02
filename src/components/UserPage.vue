<template>
  <div class="flex flex-col p-8 bg-white shadow-md rounded-lg">
    <!-- Header -->
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-3xl font-bold text-purple-700">olaf pomfrey's Page</h1>
      <div class="space-x-2">
        <button
          class="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50"
        >
          Connect Instagram
        </button>
        <button
          class="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50"
        >
          YouTube
        </button>
      </div>
    </div>

    <!-- Automation Callout -->
    <div class="p-4 mb-6 bg-purple-100 rounded-md">
      <p class="font-semibold">Want to automate the entire flow?</p>
      <p class="text-sm text-gray-700">
        Try automated video creation and posting then sit back and relax.
      </p>
      <button
        class="mt-2 px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
      >
        Automate Now
      </button>
    </div>

    <!-- Videos Section -->
    <div>
      <h2 class="text-2xl font-bold mb-4">Videos</h2>
      <div class="flex justify-between items-center mb-6">
        <div class="flex items-center space-x-2 text-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 10l4.553-2.276A2 2 0 0122 9.618v4.764a2 2 0 01-2.447 1.894L15 14M4 6h16M4 18h16M7 8v8M11 12v4m4-8v8"
            />
          </svg>
          <span>No videos yet</span>
        </div>
        <button class="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300">
          New Video
        </button>
      </div>
      <div
        class="p-8 border-2 border-dashed border-gray-300 rounded-md text-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-12 w-12 mx-auto mb-4 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15 10l4.553-2.276A2 2 0 0122 9.618v4.764a2 2 0 01-2.447 1.894L15 14M4 6h16M4 18h16M7 8v8M11 12v4m4-8v8"
          />
        </svg>
        <p class="text-lg font-semibold text-gray-600">No videos yet</p>
        <p class="text-sm text-gray-500 mb-4">
          Get started by creating your first video or use the automation
          feature.
        </p>
        <div class="space-x-4">
          <button
            class="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
            @click="navigateToCreateVideo"
          >
            Create Video
          </button>
          <button class="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300">
            Learn More
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
export default {
  name: "UserPage",
  setup() {
    const router = useRouter();

    const navigateToCreateVideo = () => {
      router.push({ name: "CreateVideoPage" });
    };

    return {
      navigateToCreateVideo,
    };
  },
};
</script>

<style scoped>
/* Add any scoped styles here if needed */
</style>

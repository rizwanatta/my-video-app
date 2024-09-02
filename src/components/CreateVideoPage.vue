<template>
  <div class="p-8 max-w-4xl mx-auto">
    <!-- Header -->
    <div class="mb-8">
      <h1 class="text-2xl font-bold text-center">Create Your Video</h1>
      <p class="text-sm text-gray-600 text-center">
        Follow the steps to create and customize your video.
      </p>
    </div>

    <!-- Tabs -->
    <Tabs v-model="activeTab">
      <TabsList class="flex justify-center">
        <TabsTrigger value="language">Language</TabsTrigger>
        <TabsTrigger value="script">Script</TabsTrigger>
        <TabsTrigger value="settings">Video Settings</TabsTrigger>
        <TabsTrigger value="generate">Generate</TabsTrigger>
      </TabsList>

      <!-- Script Tab Content -->
      <TabsContent value="script">
        <div class="py-4 px-6 border border-gray-200 rounded-lg shadow-sm">
          <div class="mb-4">
            <FormField
              label="Choose script type"
              description="Select the type of script for your video."
              class="mb-4"
            >
              <Input v-model="scriptType" placeholder="Enter script type" />
            </FormField>
          </div>
          <!-- Topic Input -->
          <FormField
            label="Enter your topic"
            description="Specify the topic for your video script."
            class="mb-4 mt-4"
          >
            <Input v-model="topic" placeholder="Enter your topic" />
          </FormField>

          <!-- Generate Script Button -->
          <div class="flex flex-row justify-center">
            <Button
              class="w-1/3 mb-4 mt-2 px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
              variant="primary"
              @click="generateScript"
              >Generate Script</Button
            >
          </div>

          <!-- Generated Script Text Area -->
          <FormField
            label="Script"
            description="Generated script will appear here."
            class="mb-4"
          >
            <Textarea
              v-model="generatedScript"
              placeholder="Generated script will appear here"
              rows="5"
            />
          </FormField>
        </div>
      </TabsContent>
    </Tabs>

    <!-- Actions -->
    <div class="flex justify-between mt-8">
      <Button variant="secondary" @click="previousStep">Previous</Button>
      <Button variant="primary" @click="nextStep">Next</Button>
    </div>
  </div>
</template>

<script>
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FormField } from "@/components/ui/form";

export default {
  name: "CreateVideoPage",
  components: {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
    FormField,
    Input,
    Textarea,
    Button,
  },
  data() {
    return {
      activeTab: "script", // Default to script for demonstration purposes
      scriptType: "", // Placeholder for script type input
      topic: "", // Placeholder for topic input
      generatedScript: "", // Placeholder for the generated script
    };
  },
  methods: {
    previousStep() {
      if (this.activeTab === "script") this.activeTab = "language";
      else if (this.activeTab === "settings") this.activeTab = "script";
      else if (this.activeTab === "generate") this.activeTab = "settings";
    },
    nextStep() {
      if (this.activeTab === "language") this.activeTab = "script";
      else if (this.activeTab === "script") this.activeTab = "settings";
      else if (this.activeTab === "settings") this.activeTab = "generate";
    },
    generateScript() {
      // Logic for generating a script based on the input
      this.generatedScript = `Script generated for topic: ${this.topic}`;
    },
  },
};
</script>

<style scoped>
/* Add any scoped styles here if needed */
</style>

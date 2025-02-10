<script lang="ts" setup>
import { app } from "../../config/config";
import AddItem from "./components/project-board/AddItem.vue";
import ColorPalette from "./components/project-board/ColorPalette.vue";
import UndoRedo from "./components/project-board/UndoRedo.vue";
import { useDragStickyNote } from "./actions/project-board/stickyNote";
import { onMounted } from "vue";

const {dragStickyNote} = useDragStickyNote();

onMounted(()=>{
    setTimeout(() => dragStickyNote(), 2000)
})

</script>

<template>
  <div class="bg-slate-100">
    <div class="flex">
      <div class="bg-slate-200 h-screen w-[50px]">

        <AddItem />
        <ColorPalette />
        <UndoRedo />

      </div>

      <div class="bg-slate-200 w-screen">
        <div class="flex justify-between mt-2">
          <div
            class="flex flex-row bg-white py-2 gap-2 px-4 rounded-md shadow-md"
          >
            <img
              :src="app.baseUrl + '/img/logo.png'"
              alt="Avatar"
              width="25"
              class="rounded-full border-2 border-white"
            />
            <span class="text-slate-300">|</span>
            Build Smart AI
          </div>
          <div class="flex flex-row gap-2 bg-white p-2 rounded-md shadow-md">
            <img
              :src="app.baseUrl + '/img/avatar.webp'"
              alt="Avatar"
              width="30"
              class="rounded-full border-2 border-white"
            />
            <button
              class="flex gap-2 items-center bg-blue-500 py-1 px-2 rounded-md text-white"
            >
              <PersonPlusIcon />
              <span class="text-sm">Share</span>
            </button>
          </div>
        </div>

        <!-- main section -->
        <div class="grid md:grid-cols-4 gap-4 p-4">
          <div
            class="flex flex-col sticky-note bg-yellow-400 items-center min-h-60 shadow-md p-4 rounded-md cursor-pointer hover:bg-yellow-500"
          >
            <div class="card-header w-full flex items-center justify-between">
              <div class="hover:bg-slate-100 p-1 rounded-md">
                <TrashIcon />
              </div>
              <div  class="hover:bg-slate-100 sticky-note-handler p-1 rounded-md">
                <ArrowTopIcon />
              </div>
            </div>
            <div class="card-body w-full h-full p-4" contenteditable="true">
              Type your content here...
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

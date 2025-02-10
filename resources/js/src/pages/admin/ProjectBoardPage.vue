<script lang="ts" setup>
import { app } from "../../config/config";
import UndoRedo from "./components/project-board/UndoRedo.vue";
import { useDragStickyNote } from "./actions/project-board/stickyNote";
import { onMounted } from "vue";

const { dragStickyNote, createStickyNote, stickyNotes, deleteStickyNote } =
  useDragStickyNote();

  function changeStickyNoteColor(stickyNoteId: number, color: string){
    for(let i = 0; i< stickyNotes.value.length; i++){
       if(stickyNotes.value[i].id === stickyNoteId){
        stickyNotes.value[i].color = color
       }
    }
  }
// onMounted(() => {
//   setTimeout(() => dragStickyNote(), 2000);
// });
</script>

<template>
  <div class="bg-slate-100">
    <div class="flex">
      <div class="bg-slate-200 h-screen w-[50px]">
        <AddItem @createStickyNote="createStickyNote" />
        <ColorPalette :stickyNotes="stickyNotes" @changeStickyNoteColor="changeStickyNoteColor" />
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
          <stickyNote
            @deleteStickyNote="deleteStickyNote"
            :sticky-notes="stickyNotes"
          />
        </div>
      </div>
    </div>
  </div>
</template>

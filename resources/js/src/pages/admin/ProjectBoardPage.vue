<script lang="ts" setup>
import RedoIcon from "../../components/icons/RedoIcon.vue";
import StickyNoteIcon from "../../components/icons/StickyNoteIcon.vue";
import UndoIcon from "../../components/icons/UndoIcon.vue";
import { app } from "../../config/config";
import DocumentIcon from "../../components/icons/DocumentIcon.vue";
import PersonPlusIcon from "../../components/icons/PersonPlusIcon.vue";
import TrashIcon from "../../components/icons/TrashIcon.vue";
import ArrowTopIcon from "../../components/icons/ArrowTopIcon.vue";
</script>

<template>
  <div class="bg-slate-100">
    <div class="flex">
      <div class="bg-slate-200 h-screen w-[50px]">
        <ul
          class="flex flex-col px-2 bg-white mt-20 mb-2 gap-2 p-2 shadow-md rounded-md"
        >
          <li
            class="flex flex-row items-center cursor-pointer p-2 bg-slate-100"
          >
            <span class="icon">
              <StickyNoteIcon />
            </span>
          </li>

          <li
            class="flex flex-row items-center cursor-pointer p-2 hover:bg-slate-100"
          >
            <span class="icon">
              <DocumentIcon />
            </span>
          </li>
        </ul>

        <ul
          class="flex flex-col px-2 bg-white mb-2 rounded-md gap-2 p-2 shadow-md"
        >
          <li
            class="flex flex-row items-center rounded-md gap-2 bg-yellow-300 h-8 py-2 cursor-pointer"
          ></li>

          <li
            class="flex flex-row items-center rounded-md gap-2 bg-indigo-300 h-8 py-2 cursor-pointer"
          ></li>

          <li
            class="flex flex-row items-center rounded-md gap-2 bg-blue-300 h-8 py-2 cursor-pointer"
          ></li>

          <li
            class="flex flex-row items-center rounded-md gap-2 bg-pink-300 h-8 py-2 cursor-pointer"
          ></li>
        </ul>

        <ul
          class="flex flex-col px-2 bg-white mb-2 rounded-md gap-2 p-2 shadow-md"
        >
          <li
            class="flex flex-row items-center cursor-pointer p-2 hover:bg-slate-100"
          >
            <span class="icon">
              <RedoIcon />
            </span>
          </li>

          <li
            class="flex flex-row items-center cursor-pointer p-2 hover:bg-slate-100"
          >
            <span class="icon">
              <UndoIcon />
            </span>
          </li>
        </ul>
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
            class="flex flex-col bg-yellow-400 items-center min-h-60 shadow-md p-4 rounded-md cursor-pointer hover:bg-yellow-500"
          >
            <div class="card-header w-full flex items-center justify-between">
              <div class="hover:bg-slate-100 p-1 rounded-md">
                <TrashIcon />
              </div>
              <div  class="hover:bg-slate-100 p-1 rounded-md">
                <ArrowTopIcon />
              </div>
            </div>
            <div class="card-body w-full h-full" contenteditable="true">
              Type your content here...
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

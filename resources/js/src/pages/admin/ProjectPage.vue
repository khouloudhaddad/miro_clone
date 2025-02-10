<script lang="ts" setup>
import QueueListIcon from "../../components/icons/QueueListIcon.vue";
import LogoutIcon from "../../components/icons/LogoutIcon.vue";
import PlusIcon from "../../components/icons/PlusIcon.vue";
import { app } from "../../config/config";
</script>

<template>
  <div class="bg-slate-100">
    <div class="flex">
      <div class="bg-white h-screen w-[250px]">
        <div class="flex justify-center py-4 ">
            <img
            :src="app.baseUrl + '/img/logo.png'"
            alt="Avatar"
            width="50"
            class="rounded-full border-2 border-white"
          />
        </div>
        <div>
          <ul class="flex flex-col px-2 gap-2">
            <li
              class="flex flex-row p-2 bg-slate-200 items-center rounded-md gap-2 cursor-pointer"
            >
              <span class="icon">
                <QueueListIcon />
              </span>
              <span>Projects</span>
            </li>

            <li
              class="flex flex-row p-2 bg-slate-200 items-center rounded-md gap-2 cursor-pointer"
            >
              <span class="icon">
                <LogoutIcon />
              </span>
              <span>Logout</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="bg-slate-200 w-screen">
        <div class="flex justify-end py-2 px-4">
          <img
            :src="app.baseUrl + '/img/avatar.webp'"
            alt="Avatar"
            width="30"
            class="rounded-full border-2 border-white"
          />
        </div>
        <div class="flex px-4">
          <h1 class="text-2xl">Projects</h1>
        </div>
        <div class="grid md:grid-cols-4 gap-4 p-4">

          <div
            class="flex justify-center bg-white items-center min-h-60 shadow-md p-4 rounded-md cursor-pointer hover:bg-slate-100"
          >
            <div class="px-6 text-indigo-700">
              <div class="flex justify-center">
                <PlusIcon />
              </div>
              <div class="flex justify-center d">
                <span>New Board</span>
              </div>
            </div>
          </div>

          <div
            class="flex justify-center bg-white items-center min-h-60 shadow-md p-4 rounded-md cursor-pointer hover:bg-slate-100"
          >
            <div class="px-6 text-indigo-700">
              <div class="flex justify-center d">
                <span>Build smart AI</span>
              </div>
            </div>
          </div>

          <div
            class="flex justify-center bg-white items-center min-h-60 shadow-md p-4 rounded-md cursor-pointer hover:bg-slate-100"
          >
            <div class="px-6 text-indigo-700">
              <div class="flex justify-center d">
                <span>Clone Trello</span>
              </div>
            </div>
          </div>

          <div
            class="flex justify-center bg-white items-center min-h-60 shadow-md p-4 rounded-md cursor-pointer hover:bg-slate-100"
          >
            <div class="px-6 text-indigo-700">
              <div class="flex justify-center d">
                <span>Other staff</span>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  </div>
</template>

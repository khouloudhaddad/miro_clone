<script lang="ts" setup>
    import { app } from '../../config/config';
</script>

<template>
    <div class="bg-slate-50">
        <div class="flex flex-row justify-between mt-20">
            <div></div>
            <div>
                <button class="bg-slate-200 flex flex-row py-2 px-4 gap-4 rounded-md">
                    <img :src="app.baseUrl + '/img/google.svg'" alt="Google" width="20">
                    <span class="text-xs font-medium ps-2">Login with Google</span>
                </button>
            </div>
            <div></div>
        </div>
    </div>
</template>

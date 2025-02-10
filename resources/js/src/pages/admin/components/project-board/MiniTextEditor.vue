<script lang="ts" setup>
import LinkIcon from "../../../../components/icons/LinkIcon.vue";
import ListIcon from "../../../../components/icons/ListIcon.vue";
import { IMiniTextEditor } from "../../actions/project-board/MiniTextEditorTypes";

defineProps<{
  miniTextEditors: IMiniTextEditor[];
}>();

const emit = defineEmits<{
  (e: "deleteMiniTextEditor", miniTextEditor: IMiniTextEditor): void;
}>();
</script>

<template>
  <div
    v-for="miniTextEditor in miniTextEditors"
    :key="miniTextEditor.id"
    :class="'flex flex-col sticky-note min-h-40 w-[350px] shadow-md p-1 rounded-md cursor-pointer hover:bg-yellow-500 text-editor-' + miniTextEditor.id "
  >
    <div class="card-header w-full flex items-center justify-between">
      <div
        @click="emit('deleteMiniTextEditor', miniTextEditor)"
        class="hover:bg-slate-100 p-1 rounded-md"
      >
        <TrashIcon />
      </div>
      <div :class="'hover:bg-slate-100 p-1 rounded-md text-editor-handler-' + miniTextEditor.id">
        <ArrowTopIcon />
      </div>
    </div>

    <div
      class="bg-white flex justify-between p-2 border-b-2 border-slate-200 rounded-md"
    >
      <button class="">
        <BoldIcon />
      </button>
      <button class="">
        <ItalicIcon />
      </button>
      <button class="">
        <UnderLineIcon />
      </button>

      <button class="">
        <H1Icon />
      </button>
      <button class="">
        <H2Icon />
      </button>
      <button class="">
        <H3Icon />
      </button>

      <button class="">
        <AlignLeftIcon />
      </button>
      <button class="">
        <CenterIcon />
      </button>
      <button class="">
        <AlignRightIcon />
      </button>

      <button class="">
        <ListIcon />
      </button>
      <button class="">
        <LinkIcon />
      </button>
      <button class="">
        <ImageIcon />
      </button>
    </div>

    <div
      class="card-body w-full h-full p-2 bg-white rounded-md"
      contenteditable="true"
    >
      Type your content...
    </div>
    <div class="flex justify-end">
      <div :class="'cursor-nw-resize text-editor-resizer-'+ miniTextEditor.id">
        <ArrowDownIcon />
      </div>
    </div>
  </div>
</template>

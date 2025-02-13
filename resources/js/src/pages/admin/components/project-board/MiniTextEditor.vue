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
    :class="'flex flex-col sticky-note min-h-40 w-[340px] shadow-md p-1 rounded-md cursor-pointer hover:bg-yellow-500 text-editor-' + miniTextEditor.id "
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
      class="bg-white flex justify-between p-2 border-b-2 border-slate-200 rounded-md toolbar"
    >
      <button :class="'hover:bg-slate-100 rounded-md px-1 py-1 apply-bold-' + miniTextEditor.id">
        <BoldIcon />
      </button>
      <button :class="'hover:bg-slate-100 rounded-md px-1 py-1 apply-italic-' + miniTextEditor.id">
        <ItalicIcon />
      </button>
      <button :class="'hover:bg-slate-100 rounded-md px-1 py-1 apply-underline-' + miniTextEditor.id">
        <UnderLineIcon />
      </button>

      <button :class="'hover:bg-slate-100 rounded-md px-1 py-1 apply-h1-' + miniTextEditor.id">
        <H1Icon />
      </button>
      <button :class="'hover:bg-slate-100 rounded-md px-1 py-1 apply-h2-' + miniTextEditor.id">
        <H2Icon />
      </button>
      <button :class="'hover:bg-slate-100 rounded-md px-1 py-1 apply-h3-' + miniTextEditor.id">
        <H3Icon />
      </button>

      <button :class="'hover:bg-slate-100 rounded-md px-1 py-1 apply-align-left-' + miniTextEditor.id">
        <AlignLeftIcon />
      </button>
      <button :class="'hover:bg-slate-100 rounded-md px-1 py-1 apply-align-center -' + miniTextEditor.id">
        <CenterIcon />
      </button>
      <button :class="'hover:bg-slate-100 rounded-md px-1 py-1 apply-align-right-' + miniTextEditor.id">
        <AlignRightIcon />
      </button>

      <button :class="'hover:bg-slate-100 rounded-md px-1 py-1 apply-list-' + miniTextEditor.id">
        <ListIcon />
      </button>
      <button :class="'hover:bg-slate-100 rounded-md px-1 py-1 apply-link-' + miniTextEditor.id">
        <LinkIcon />
      </button>
      <button :class="'hover:bg-slate-100 rounded-md px-1 py-1 apply-image-' + miniTextEditor.id">
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

import "./bootstrap";

import { createApp } from "vue";
import App from "./src/App.vue";
import router from "./src/router";
import { createPinia } from "pinia";

import RedoIcon from "./src/components/icons/RedoIcon.vue";
import StickyNoteIcon from "./src/components/icons/StickyNoteIcon.vue";
import UndoIcon from "./src/components/icons/UndoIcon.vue";
import DocumentIcon from "./src/components/icons/DocumentIcon.vue";
import PersonPlusIcon from "./src/components/icons/PersonPlusIcon.vue";
import TrashIcon from "./src/components/icons/TrashIcon.vue";
import ArrowTopIcon from "./src/components/icons/ArrowTopIcon.vue";
import ArrowDownIcon from "./src/components/icons/ArrowDownIcon.vue";
import StickyNote from "./src/pages/admin/components/project-board/StickyNote.vue";
import AddItem from "./src/pages/admin/components/project-board/AddItem.vue";
import ColorPalette from "./src/pages/admin/components/project-board/ColorPalette.vue";
import { useStickyNoteStore } from "./src/store/stickyNote";

const pinia = createPinia();
const stickyNoteStore = useStickyNoteStore(pinia)

createApp(App)
    .use(router)
    .component("RedoIcon", RedoIcon)
    .component("StickyNoteIcon", StickyNoteIcon)
    .component("UndoIcon", UndoIcon)
    .component("DocumentIcon", DocumentIcon)
    .component("PersonPlusIcon", PersonPlusIcon)
    .component("TrashIcon", TrashIcon)
    .component("ArrowTopIcon", ArrowTopIcon)
    .component("ArrowDownIcon", ArrowDownIcon)
    .component("StickyNote", StickyNote)
    .component("AddItem", AddItem)
    .component("ColorPalette", ColorPalette)
    .use(pinia)
    .mount("#app");

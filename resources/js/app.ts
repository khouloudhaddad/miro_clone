import "./bootstrap";

import { createApp } from "vue";
import App from "./src/App.vue";
import router from "./src/router";
import { createPinia } from "pinia";

const importIcons = import.meta.glob("./src/components/icons/**/*.vue");
function registerIcons(app: any) {
    for (const filePath of Object.keys(importIcons)) {
        const fileArray = filePath.split("/");
        const fileName = fileArray.pop();
        const realFileName = fileName?.replace(".vue", "");

        importIcons[filePath]()
            .then(function (data) {
                app.component(realFileName, (data as any)?.default);
            })
            .catch((error) => console.log(error));
    }
}

import StickyNote from "./src/pages/admin/components/project-board/StickyNote.vue";
import AddItem from "./src/pages/admin/components/project-board/AddItem.vue";
import ColorPalette from "./src/pages/admin/components/project-board/ColorPalette.vue";
import { useStickyNoteStore } from "./src/store/stickyNote";
import { useMiniTextEditorStore } from "./src/store/miniTextEditor";
import MiniTextEditor from "./src/pages/admin/components/project-board/MiniTextEditor.vue";

const pinia = createPinia();
const stickyNoteStore = useStickyNoteStore(pinia);
const miniTextEditorStore = useMiniTextEditorStore(pinia);

const app = createApp(App);
app.use(router);
app.use(pinia);
registerIcons(app);

app.component("StickyNote", StickyNote);
app.component("AddItem", AddItem);
app.component("ColorPalette", ColorPalette);
app.component("MiniTextEditor", MiniTextEditor);

app.mount("#app");

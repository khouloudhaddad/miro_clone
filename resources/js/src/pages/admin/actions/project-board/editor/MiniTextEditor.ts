import { ref } from "vue";
import { IMiniTextEditor } from "../MiniTextEditorTypes";
import { useMiniTextEditorStore } from "../../../../../store/miniTextEditor";
import { useEditor } from "./editor";
const miniTextEditorStore = useMiniTextEditorStore();

export function useDragMiniTextEditor() {
    const { applyBold, applyItalic, applyUnderline } = useEditor();
    const miniTextEditors = ref<IMiniTextEditor[]>([] as IMiniTextEditor[]);
    let count = 0;

    function createMiniTextEditor() {
        count++;
        let color = getRandomColorClass();
        console.log(color);
        miniTextEditors.value.push({
            id: count,
            body: "",
            color: color,
            dragPosition: {
                x: 0,
                y: 0,
            },
            resizePosition: {
                x: 0,
                y: 0,
            },
        });

        miniTextEditorStore.miniTextEditor.id = count

        setTimeout(() => {
            dragMiniTextEditor(count);
        }, 200);
    }

    function deleteMiniTextEditor(miniTextEditor: IMiniTextEditor) {
        console.log("deleteMiniMiniTextEditor ", miniTextEditor);
    }

    function getRandomColorClass() {
        const colorClasses = [
            "bg-blue-300",
            "bg-indigo-300",
            "bg-yellow-300",
            "bg-pink-300",
        ];
        const randomIndex = Math.floor(Math.random() * colorClasses.length);
        return colorClasses[randomIndex];
    }

    function dragMiniTextEditor(id: number) {
        const miniTextEditor = document.querySelector(
            ".text-editor-" + id
        ) as HTMLElement;
        const miniTextEditorHandler = document.querySelector(
            ".text-editor-handler-" + id
        ) as HTMLElement;

        const miniTextEditorResizer = document.querySelector(
            ".text-editor-resizer-" + id
        ) as HTMLElement;
        let newX = 0,
            newY = 0,
            startX = 0,
            startY = 0;
        // Resize
        let startRX = 0,
            startRY = 0;

        // Resize
        let miniTextEditorstartWidth = 0,
            miniTextEditorstartHeight = 0;

        //Resize
        miniTextEditorResizer.addEventListener("mousedown", function (e: any) {
            miniTextEditorStore.miniTextEditor.id = id;
            startRX = e.clientX;
            startRY = e.clientY;

            // Resize
            miniTextEditorstartWidth = miniTextEditor.offsetWidth;
            miniTextEditorstartHeight = miniTextEditor.offsetHeight;

            miniTextEditor.style.position = "absolute";

            document.addEventListener("mousemove", mouseMove);
            document.addEventListener("mouseup", mouseUp);

            function mouseMove(e: any) {
                const newWidth = miniTextEditorstartWidth + e.clientX - startRX;
                const newHeight = miniTextEditorstartHeight + e.clientY - startRY;

                // Resize
                // miniTextEditor.style.width = Math.max(newWidth, 150) + "px";
                miniTextEditor.style.height = Math.max(newHeight, 150) + "px";
            }

            function mouseUp(e: any) {
                document.removeEventListener("mousemove", mouseMove);
            }
        });

        //Drag
        miniTextEditorHandler.addEventListener("mousedown", function (e: any) {
            miniTextEditorStore.miniTextEditor.id = id;
            startX = e.clientX;
            startY = e.clientY;

            miniTextEditor.style.position = "absolute";

            document.addEventListener("mousemove", mouseMove);
            document.addEventListener("mouseup", mouseUp);

            function mouseMove(e: any) {
                newX = startX - e.clientX;
                newY = startY - e.clientY;

                startX = e.clientX;
                startY = e.clientY;

                miniTextEditor.style.top = miniTextEditor.offsetTop - newY + "px";
                miniTextEditor.style.left = miniTextEditor.offsetLeft - newX + "px";
            }

            function mouseUp(e: any) {
                document.removeEventListener("mousemove", mouseMove);
            }
        });

        applyBold(id);
        applyItalic(id);
        applyUnderline(id);
    }

    return { dragMiniTextEditor, createMiniTextEditor, miniTextEditors, deleteMiniTextEditor };
}

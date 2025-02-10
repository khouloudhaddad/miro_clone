import { ref } from "vue";
import { IStickyNote } from "./StickyNoteTypes";

export function useDragStickyNote() {
    const stickyNotes = ref<IStickyNote[]>([] as IStickyNote[]);
    let count = 0;

    function createStickyNote() {
        count ++;
        stickyNotes.value.push({
            id: count,
            body: "",
            color: "#ccc",
            dragPosition: {
                x: 0,
                y: 0,
            },
            resizePosition: {
                x: 0,
                y: 0,
            },
        });

        setTimeout(()=>{
            dragStickyNote(count)
        }, 200)
    }

    function deleteStickyNote(stickyNote: IStickyNote){
        console.log('deleteStickyNote ', stickyNote)
    }

    function dragStickyNote(id: number) {
        const stickyNote = document.querySelector(
            ".sticky-note-" + id
        ) as HTMLElement;
        const stickyNoteHandler = document.querySelector(
            ".sticky-note-handler-" + id
        ) as HTMLElement;

        const stickyNoteResizer = document.querySelector(
            ".sticky-note-resizer-" + id
        ) as HTMLElement;
        let newX = 0,
            newY = 0,
            startX = 0,
            startY = 0;
        // Resize
        let startRX = 0,
            startRY = 0;

        // Resize
        let stickyNoteStartWidth = 0,
            stickyNoteStartHeight = 0;

        //Resize
        stickyNoteResizer.addEventListener("mousedown", function (e: any) {
            startRX = e.clientX;
            startRY = e.clientY;

            // Resize
            stickyNoteStartWidth = stickyNote.offsetWidth;
            stickyNoteStartHeight = stickyNote.offsetHeight;

            stickyNote.style.position = "absolute";

            document.addEventListener("mousemove", mouseMove);
            document.addEventListener("mouseup", mouseUp);

            function mouseMove(e: any) {
                const newWidth = stickyNoteStartWidth + e.clientX - startRX;
                const newHeight = stickyNoteStartHeight + e.clientY - startRY;

                // Resize
                stickyNote.style.width = Math.max(newWidth, 150) + "px";
                stickyNote.style.height = Math.max(newHeight, 150) + "px";
            }

            function mouseUp(e: any) {
                document.removeEventListener("mousemove", mouseMove);
            }
        });

        //Drag
        stickyNoteHandler.addEventListener("mousedown", function (e: any) {
            startX = e.clientX;
            startY = e.clientY;

            stickyNote.style.position = "absolute";

            document.addEventListener("mousemove", mouseMove);
            document.addEventListener("mouseup", mouseUp);

            function mouseMove(e: any) {
                newX = startX - e.clientX;
                newY = startY - e.clientY;

                startX = e.clientX;
                startY = e.clientY;

                stickyNote.style.top = stickyNote.offsetTop - newY + "px";
                stickyNote.style.left = stickyNote.offsetLeft - newX + "px";
            }

            function mouseUp(e: any) {
                document.removeEventListener("mousemove", mouseMove);
            }
        });
    }

    return { dragStickyNote, createStickyNote, stickyNotes, deleteStickyNote };
}

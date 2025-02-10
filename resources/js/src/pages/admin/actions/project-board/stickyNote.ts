export function useDragStickyNote() {
    function dragStickyNote() {
        const stickyNote = document.querySelector(
            ".sticky-note"
        ) as HTMLElement;
        const stickyNoteHandler = document.querySelector(
            ".sticky-note-handler"
        ) as HTMLElement;

        const stickyNoteResizer = document.querySelector(
            ".sticky-note-resizer"
        ) as HTMLElement;
        let newX = 0,
            newY = 0,
            startX = 0,
            startY = 0;
        // Resize
        let newRX = 0,
            newRY = 0,
            startRX = 0,
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
                const newWidth = stickyNoteStartWidth + e.clientX - startRX ;
                const newHeight = stickyNoteStartHeight + e.clientY - startRY;

                // Resize
                stickyNote.style.width = Math.max(newWidth, 150) + "px";
                stickyNote.style.height =  Math.max(newHeight , 150) + "px";

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

    return { dragStickyNote };
}

export function useDragStickyNote() {
    function dragStickyNote() {
        const stickyNote = document.querySelector(
            ".sticky-note"
        ) as HTMLElement;
        const stickyNoteHandler = document.querySelector(
            ".sticky-note-handler"
        ) as HTMLElement;

        let newX = 0,
            newY = 0,
            startX = 0,
            startY = 0;

        stickyNoteHandler.addEventListener("mousedown", function (e: any) {
            startX = e.clientX;
            startY = e.clientY;
            stickyNote.style.position = 'absolute';

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

    return { dragStickyNote }
}

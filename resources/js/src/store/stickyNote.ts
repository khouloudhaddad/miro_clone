import { defineStore } from 'pinia';

export const useStickyNoteStore = defineStore('stickyNote', {
    state: () => ({
        stickyNote: {} as {id: number}
    })
});

//export const stickyNoteStore = useStickyNoteStore();

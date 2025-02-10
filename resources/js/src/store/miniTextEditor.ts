import { defineStore } from 'pinia';

export const useMiniTextEditorStore = defineStore('miniTextEditor', {
    state: () => ({
        miniTextEditor: {} as {id: number}
    })
});

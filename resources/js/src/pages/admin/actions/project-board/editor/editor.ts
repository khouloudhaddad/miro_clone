export function useEditor() {
    /********* /Bold button *********************/
    function applyBold(id: number) {
        const bold = document.querySelector(".apply-bold-" + id) as HTMLElement;
        const selection = window.getSelection() as Selection;

        bold.addEventListener("click", function () {
            if (!selection.rangeCount) return;
            const range = selection.getRangeAt(0);
            const selectedText = range.cloneContents();
            //console.log(selectedText);

            const parentElement = range.commonAncestorContainer.parentElement;
            const isBold = parentElement?.closest("b");
            //console.log(isBold)

            if (isBold) {
                removeBold(range);
            } else {
                addBold(range, selectedText);
            }

            selection.removeAllRanges();
        });

        function addBold(range: Range, selectedText: DocumentFragment) {
            const boldText = document.createElement("b") as HTMLElement;
            boldText.appendChild(selectedText);
            range.deleteContents();
            range.insertNode(boldText);
        }

        function removeBold(range: Range) {
            const parentElement =
                range.commonAncestorContainer.parentElement?.closest("b");
            const docFragment = document.createDocumentFragment();
            if (parentElement?.firstChild) {
                docFragment.appendChild(parentElement?.firstChild);
            }
            console.log(docFragment);
            parentElement?.replaceWith(docFragment);
        }
    }
    /********* /Bold button *********************/

    /********* Italic button *********************/
    function applyItalic(id: number) {
        const italic = document.querySelector(
            ".apply-italic-" + id
        ) as HTMLElement;
        const selection = window.getSelection() as Selection;

        italic.addEventListener("click", function () {
            if (!selection.rangeCount) return;
            const range = selection.getRangeAt(0);
            const selectedText = range.cloneContents();
            //console.log(selectedText);

            const parentElement = range.commonAncestorContainer.parentElement;
            const isIalic = parentElement?.closest("i");
            //console.log(isIalic)

            if (isIalic) {
                removeItalic(range);
            } else {
                addItalic(range, selectedText);
            }

            selection.removeAllRanges();
        });

        function addItalic(range: Range, selectedText: DocumentFragment) {
            const italicText = document.createElement("i") as HTMLElement;
            italicText.appendChild(selectedText);
            range.deleteContents();
            range.insertNode(italicText);
        }

        function removeItalic(range: Range) {
            const parentElement =
                range.commonAncestorContainer.parentElement?.closest("i");
            const docFragment = document.createDocumentFragment();
            if (parentElement?.firstChild) {
                docFragment.appendChild(parentElement?.firstChild);
            }
            console.log(docFragment);
            parentElement?.replaceWith(docFragment);
        }
        /********* /Italic button *********************/
    }

    return {
        applyBold,
        applyItalic,
    };
}

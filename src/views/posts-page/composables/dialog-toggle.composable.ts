import { ref } from "vue";
import { UseToggleDialog } from "../types";

export function useToggleDialog(): UseToggleDialog {
    const isShowDialog = ref(false);

    const toggleDialog = () => isShowDialog.value = true;

    return {
        isShowDialog,
        toggleDialog,
    }
}
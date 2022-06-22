import { Ref } from "vue";

export interface UseToggleDialog {
    isShowDialog: Ref<boolean>;
    toggleDialog: () => void;
}
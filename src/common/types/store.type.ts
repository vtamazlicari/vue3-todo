import { Store } from 'pinia'

export type PiniaActionAdaptor<
    Actions extends Record<string, (...args: any) => any>,
    StoreUsed extends Store,
    > = {
        [Key in keyof Actions]: (
            this: StoreUsed,
            ...p: Parameters<Actions[Key]>
        ) => ReturnType<Actions[Key]>
    }

export type PiniaGetterAdaptor<
    Getters extends Record<string, (...args: any) => any>,
    StoreUsed extends Store,
    > = {
        [Key in keyof Getters]: (
            this: StoreUsed,
            ...p: Parameters<Getters[Key]>
        ) => ReturnType<Getters[Key]>
    }
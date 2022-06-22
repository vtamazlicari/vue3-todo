const apiHost = import.meta.env.VITE_APP_BASE_API;

export const Api = {
    posts: () => `${apiHost}/todos`
}

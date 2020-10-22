
export const state = () => ({
    current: ['home'],
});

export const mutations = {
    setCurrent(state, data) {
        state.current = Object.assign([], data);
    }
}

export default  {
    add(state, data) {
        state.desserts.push(data);
    },
    edit(state, data) {
        //Object.assign(state.desserts[data.index], data.data); cara singkat
        const index = state.desserts.findIndex((item, index) => index == data.index);
        state.desserts.splice(index, 1, data.data);
    },
    delete(state, index) {
        state.desserts.splice(index, 1);
    }
}
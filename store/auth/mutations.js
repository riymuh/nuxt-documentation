export default  {
    loggedIn(state, data) {
        console.log(data)
        state.token = data.token
    },
}
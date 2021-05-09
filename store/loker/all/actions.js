export default  {
    add(state, data) {
    //   state.list.push({
    //     text: data,
    //     done: false
    //   })
    console.log(state.state.list)
    },
    remove(state, { todo }) {
      state.list.splice(state.list.indexOf(todo), 1)
    },
    toggle(state, todo) {
      todo.done = !todo.done
    }
  }
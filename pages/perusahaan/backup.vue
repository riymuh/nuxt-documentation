<template>
  <v-row>
    <v-col cols="12" sm="12" md="12">
      <!-- <ul>
        {{
          todos
        }}
        <li v-for="todo in todos" :key="todo.text">
          <input :checked="todo.done" @change="toggle(todo)" type="checkbox" />
          <span :class="{ done: todo.done }">{{ todo.text }}</span>
        </li>
        <li>
          <input @keyup.enter="addTodo" placeholder="What needs to be done?" />
        </li>
      </ul> -->
      <v-data-table
        dense
        :headers="headers"
        :items="desserts"
        item-key="name"
        class="elevation-1"
      ></v-data-table>
    </v-col>
  </v-row>
</template>

<script>
import { mapMutations, mapGetters, mapState, mapActions } from "vuex";

export default {
  computed: {
    // todos() {
    //   return this.$store.state.todos.list;
    // },
    //  ...mapGetters([
    //   'some/nested/module/someGetter', // -> this['some/nested/module/someGetter']
    // ])
    ...mapState({
      desserts: (state) => state.dessert.desserts,
    }),
  },
  data: () => ({
    headers: [
      {
        text: "Dessert (100g serving)",
        align: "start",
        sortable: false,
        value: "name",
      },
      { text: "Calories", value: "calories" },
      { text: "Fat (g)", value: "fat" },
      { text: "Carbs (g)", value: "carbs" },
      { text: "Protein (g)", value: "protein" },
      { text: "Iron (%)", value: "iron" },
    ],
  }),
  methods: {
    // addTodo(e) {
    //   this.$store.commit("loker/all/add", e.target.value);
    //   e.target.value = "";
    // },
    // ...mapActions([
    //   "loker.all.add", // -> this['some/nested/module/foo']()
    // ]),
    ...mapMutations({
      toggle: "loker/all/toggle",
    }),
    addTodo(e) {
      // this.$store.dispatch("loker/all/add", e.target.value);
      this.$store.commit("loker/all/add", e.target.value);
      e.target.value = "";
    },
  },
};
</script>

<style>
.done {
  text-decoration: line-through;
}
</style>

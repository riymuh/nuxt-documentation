<template>
  <v-row>
    <v-col col="12" sm="6" md="6">
      <v-card outlined>
        <v-card-text>
          <form>
            <v-text-field
              v-model="email"
              :error-messages="emailErrors"
              label="E-mail"
              required
              @input="$v.email.$touch()"
              @blur="$v.email.$touch()"
            ></v-text-field>

            <v-text-field
              v-model="password"
              :error-messages="passwordErrors"
              type="password"
              label="Password"
              required
              @input="$v.password.$touch()"
              @blur="$v.password.$touch()"
            ></v-text-field>

            <v-btn class="mr-4" @click="submit"> Login </v-btn>
            <v-btn @click="clear"> clear </v-btn>
          </form>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { validationMixin } from "vuelidate";
import { mapMutations, mapGetters, mapState, mapActions } from "vuex";
import { required, maxLength, email } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],

  validations: {
    password: { required },
    email: { required, email },
  },

  data: () => ({
    password: "cityslicka",
    email: "eve.holt@reqres.in",
  }),

  computed: {
    passwordErrors() {
      const errors = [];
      if (!this.$v.password.$dirty) return errors;
      !this.$v.password.required && errors.push("Password is required.");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Must be valid e-mail");
      !this.$v.email.required && errors.push("E-mail is required");
      return errors;
    },
  },

  methods: {
    submit() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        this.$store.dispatch("auth/login", {
          email: this.email,
          password: this.password,
        });
      } else {
        console.log("gagal");
      }
    },
    clear() {
      this.$v.$reset();
      this.name = "";
      this.email = "";
      this.select = null;
      this.checkbox = false;
    },
  },
};
</script>
<template>
  <v-row>
    <v-col cols="12" sm="4" md="4">
      <filter-component />
    </v-col>
    <v-col cols="12" sm="8" md="8">
      <v-row>
        <v-col col="12" sm="6" md="6">
          <v-card outlined>
            <v-list-item three-line>
              <v-card-text>
                <div color="grey">Word of the Day</div>
                <p class="title">be•nev•o•lent</p>
              </v-card-text>

              <v-list-item-avatar tile size="80" color="grey">
                <v-img
                  :src="require('@/assets/images/logo_perusahaan/logo1.png')"
                ></v-img>
              </v-list-item-avatar>
            </v-list-item>

            <v-card-actions>
              <v-list-item class="grow">
                <v-icon class="mr-1"> mdi-clock-outline </v-icon>
                <span class="subheading mr-2">2 hari yang lalu</span>

                <v-row align="center" justify="end">
                  <span class="mr-1">·</span>
                  <v-icon class="mr-1"> mdi-bookmark-outline </v-icon>
                </v-row>
              </v-list-item>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import FilterComponent from "~/components/home/FilterComponent.vue";
export default {
  components: { FilterComponent },
};
</script>

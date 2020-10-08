<template>
  <div>
    <v-card>
      <v-card-title>
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="listdata"
        :items-per-page="5"
        :search="search"
        class="elevation-1"
      ></v-data-table>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: '',
      headers: [
        { text: "Name" ,align:"start" ,sortable:"false", value :"name"},
        { text: "Phone", value : "phone"},
        { text: "Price", value: "price"}
      ],
    }
  },
  computed: {
    listdata: {
      get() {
        return this.$nuxt.$store.state.list
      },
    },
  },
}
</script>

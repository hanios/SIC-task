<template>
  <div class="overflow-auto">
    <b-pagination
      v-model="currentPage"
      @change="onPageChanged"
      :total-rows="rows"
      :per-page="perPage"
      first-text="First"
      prev-text="Prev"
      next-text="Next"
      last-text="Last"
    >
      <!-- aria-controls="my-data" -->
      <!-- :link-gen="linkGen" -->
      <!--  use-router -->
    </b-pagination>
    <p class="mt-3">Current Page: {{ currentPage }}</p>

    <b-col :key="index" v-for="(element, index) in paginatedItem">
      <b-card>
        <!-- {{ element.image_link }} -->
        <!-- <li v-for="item in items" :key="item.id"> -->
        <img :src="element.image_link" />
        <p>{{ element.description }}</p>
        <!-- </li> -->
      </b-card>
    </b-col>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Makeup",

  data() {
    return {
      paginatedItem: [],
      perPage: 3,
      currentPage: 1,
      rows: null,
    };
  },

  async mounted() {
    let mekap = await axios.get(
      "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline"
    );

    this.paginatedItem = mekap.data;
    this.pagers = mekap.data;

    // console.log(64, mekap);

    // this.items.forEach((x) => {
    //   // console.log(64, x.id);
    //   this.gincu = x;
    // });
    this.rows = this.paginatedItem.length;
    console.log("rows", this.rows);

    this.paginate(this.perPage, 0);
  },
  methods: {
    paginate(page_size, page_number) {
      let itemsToParse = this.pagers;
      this.paginatedItem = itemsToParse.slice(
        page_number * page_size,
        (page_number + 1) * page_size
      );
      console.log("this.paginatedItem", this.paginatedItem);
    },

    onPageChanged(page) {
      this.paginate(this.perPage, page - 1);

      console.log("page", page);
    },
  },

  computed: {},
};
</script>
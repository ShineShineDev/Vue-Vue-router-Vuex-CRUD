<template>
  <div class="home mt-5 text-info container">
    <div class="row mt-md-5 mt-2">
      <div class="col-md-6 mt-5">
        <h5>App One With localStorage</h5>
        <app-one></app-one>
      </div>
      <div class="col-md-6 mt-5">
        <h5>App Two</h5>
        <app-two></app-two>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import AppOne from "@/components/AppOne.vue";
import AppTwo from "@/components/AppTwo.vue";

export default {
  name: "Home",
  components: {
    "app-one": AppOne,
    "app-two": AppTwo
  }
};
</script>

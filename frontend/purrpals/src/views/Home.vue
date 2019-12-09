<template>
  <div>
    <h1>
      Your
      <em class="branded-font">purrfect</em> companion is just a click away!
    </h1>
    <kittens-list />
  </div>
</template>

<script>
import KittensList from "@/components/KittensList";

export default {
  components: {
    KittensList
  }
};
</script>

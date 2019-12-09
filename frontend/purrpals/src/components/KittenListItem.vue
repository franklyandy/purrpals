<template>
  <list-item>
    <div class="kitten">
      <img :src="kitten.avatarUrl" />
      <div class="details">
        <h3>{{ kitten.name }}</h3>
        <p>{{ kitten.description }}</p>
        <router-link
          tag="button"
          :to="{ name: 'adoption-request', params: { id: kitten.id } }"
        >
          Get the Cuteness
        </router-link>
      </div>
    </div>
  </list-item>
</template>

<script>
import ListItem from "@/components/ListItem";

export default {
  components: {
    ListItem
  },
  props: {
    kitten: Object
  }
};
</script>

<style lang="scss" scoped>
.kitten {
  display: flex;
  padding: 25px;

  img {
    width: 120px;
    clip-path: circle(60px at center);
    align-self: flex-start;
  }

  > .details * {
    margin: 10px 10px;
  }

  > .details > button {
    float: right;
  }
}
</style>

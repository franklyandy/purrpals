<template>
  <div class="kittens">
    <kitten-list-item
      v-for="kitten in kittens"
      :key="kitten.id"
      :kitten="kitten"
    />
  </div>
</template>

<script>
import KittenListItem from "@/components/KittenListItem";

export default {
  components: {
    KittenListItem
  },
  data() {
    return {
      kittens: [
        {
          id: 1,
          name: "Mr. Fluffykins",
          description:
            "Videos kittens kittens kittens kittens furball furball videos, cat videos pet videos videos. Pet cute cute, cat kittens pet pet furball cat furball cat furball. Cat kittens pet cat cat videos cat pet cat. Cat kittens pet kittens pet videos videos cat. Furball kittens videos, pet furball furball kittens pet cute videos.",
          avatarUrl: "https://placekitten.com/240/240"
        },
        {
          id: 2,
          name: "Simon",
          description:
            "Cute kittens furball cat, kittens pet cute cute kittens furball furball kittens cat. Videos furball furball kittens furball kittens furball pet cute. Furball cute cat cat pet pet furball.",
          avatarUrl: "https://placekitten.com/210/210"
        }
      ]
    };
  }
};
</script>

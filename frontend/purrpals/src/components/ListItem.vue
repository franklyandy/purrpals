<template>
  <div>
    <slot />
    <hr />
  </div>
</template>

<style lang="scss" scoped>
hr {
  background-color: var(--secondary-color);
  height: 2px;
  border: 0;
}
</style>

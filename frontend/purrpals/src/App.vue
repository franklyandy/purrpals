<template>
  <div id="app">
    <the-header />
    <div class="main">
      <router-view />
      <div class="notification">
        <p>
          We got your application to adopt Stormy! Keep your eyes open over the
          next few days for next steps.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader";

export default {
  name: "app",
  components: {
    TheHeader
  }
};
</script>

<style lang="scss">
:root {
  --main-color: #6200ee;
  --secondary-color: #3700b3;
  --body-font-color: #2f4f4f;
  --button-font-color: #f9f4f4;
  --notification-box-color: var(--button-font-color);
}

* {
  padding: 0;
  margin: 0;
}

body {
  font-family: "Comfortaa", cursive;
  color: var(--body-font-color);
  width: 100%;
}

button {
  background-color: var(--main-color);
  height: 50px;
  padding: 10px;
  border-radius: 8px;
  color: var(--button-font-color);
  text-transform: uppercase;
  font-family: "Comfortaa", cursive;
  font-weight: 400;
  font-size: 13px;

  &:hover {
    cursor: pointer;
  }
}

.main {
  width: 60%;
  margin: 0 auto;

  h1 {
    text-align: center;
    font-size: 2.3em;
    margin: 20px;
  }
}

.branded-font {
  font-family: "Oleo Script Swash Caps", cursive;
  color: var(--main-color);
}

.logo {
  font-size: 2.5em;
}

.notification {
  display: none;
  width: 60%;
  margin: 0 auto;
  border: 0px solid var(--secondary-color);
  background-color: var(--notification-box-color);
  padding: 10px;
  border-radius: 10px;
  line-height: 1.3em;
}
</style>

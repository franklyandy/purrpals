<template>
  <div>
    <form id="applicant-form">
      <label>Applicant Name</label>
      <input name="applicant-name" type="text" />
      <label>Why do you deserve the cuteness?</label>
      <textarea name="reason-for-adoption"></textarea>
      <div class="form-actions">
        <router-link :to="{ name: 'home' }"
          >Never mind. I can't handle the cuteness...</router-link
        >
        <button type="submit">Give me the Cuteness!</button>
      </div>
      <input type="hidden" name="kitten-id" />
    </form>
  </div>
</template>

<script>
export default {
  props: {
    id: Number
  }
};
</script>

<style lang="scss" scoped>
.form-actions > button {
  color: var(--button-font-color);
}

form label,
form input,
form textarea {
  display: block;
  width: 100%;
  height: 30px;
}

form input,
form textarea {
  margin-bottom: 30px;
  padding: 5px;
}

form textarea {
  height: 140px;
}

form .form-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>

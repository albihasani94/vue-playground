<template>
  <div class="navbar-menu">
    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <!-- full signature -->
          <a
            v-bind:href="github"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-github fa-2x" aria-hidden="true"></i>
          </a>
          <!-- shortcut signature -->
          <a
            :href="twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-twitter fa-2x" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "HeaderBarLinks",
  data() {
    return {
      github: "https://github.com/albihasani94",
      twitter: "https://twitter.com/albihasani94"
    }
  }
}
</script>
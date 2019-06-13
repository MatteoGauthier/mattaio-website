<template>
  <footer class="footer">
    <div class="is-pulled-left">
      <p>
        <a class="linkn" href="https://semoule.fr"><strong>Semoule.fr</strong></a> 2017 → 2019 by
        <a href="https://t.me/MatteoGauthier">Mattèo Gauthier</a>
      </p>
    </div>
    <div class="is-pulled-right has-text-right">
      <nav class="buttons">
        <span>
          <a class="linkn" href="https://github.com/MattixNow">
            <i class="fab fa-github"></i>
            <span class="which-social">Github</span></a>
        </span>
        <span>
          <a class="linkn" href="https://twitter.com/MattixNow">
            <i class="fab fa-twitter"></i>
            <span class="which-social">Twitter</span></a>
        </span>

      </nav>
    </div>
  </footer>
</template>

<script>
  export default {};

</script>

<style lang="scss">
  .which-social {
    font-size: 1.25rem;
  }

  nav {
    span {
      margin: 0 0.3rem;
    }
  }

  footer {
    padding: 3rem 1.5rem 3rem !important; // TODO I don't know how to override the bulma default value
  }

</style>

<template>
  <footer class="footer">
    <div class="is-pulled-left">
      <p>
        <strong>Semoule.fr</strong> 2017 → 2019 by
        <a href="https://jgthms.com">Mattèo Gauthier</a>
      </p>
    </div>
    <div class="is-pulled-right has-text-right">
      <nav>
        <span>
          <i class="fab fa-github"></i>
          <span class="which-social">Github</span>
        </span>
        <span>
          <i class="fab fa-twitter"></i>
          <span class="which-social">Twitter</span>
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
    margin:0 0.3rem;
  }
}
footer {
  padding: 3rem 1.5rem 3rem !important; // TODO I don't know how to override the bulma default value
}
</style>

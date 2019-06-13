<template>
  <div>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
          <h1 class="title logo-text">Mattèo Gauthier</h1>
        </a>

        <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false"
          data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item soonPop">Mes posts</a>

          <a class="navbar-item">About</a>
          <a class="navbar-item">Contact</a>
        </div>
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-light soonPop">Feedback</a>
              <a href="https://semoule.fr" class="button is-light">
                <strong>Semoule.fr</strong>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
  export default {
    mounted() {
      document.addEventListener("DOMContentLoaded", () => {
        // Get all "navbar-burger" elements
        const $navbarBurgers = Array.prototype.slice.call(
          document.querySelectorAll(".navbar-burger"),
          0
        );

        // Check if there are any navbar burgers
        if ($navbarBurgers.length > 0) {
          // Add a click event on each of them
          $navbarBurgers.forEach(el => {
            el.addEventListener("click", () => {
              // Get the target from the "data-target" attribute
              const target = el.dataset.target;
              const $target = document.getElementById(target);

              // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
              el.classList.toggle("is-active");
              $target.classList.toggle("is-active");
            });
          });
        }
      });
    }
  };

</script>

<style lang="scss" scoped>
  .title {
    font-size: 1.7rem;
  }

  .logo-text {
    font-weight: 800;
  }

</style>

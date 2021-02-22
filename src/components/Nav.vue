<template>
  <div class="p-2 bg-dark box">
    <!-- Image and text -->
    <nav class="navbar bg-dark ">
      <a class="navbar-brand" href="#">
        <img
          alt="Vue logo"
          src="../assets/logo.png"
          width="30"
          height="30"
          class="d-inline-block align-top"
        />
      </a>

      <ul class="nav text-white justify-content-end">
        <li class="nav-item">
          <a class="nav-link active" href="#">
            <router-link to="/">Home</router-link>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            <router-link to="/about">About</router-link>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style scoped>
.box {
  box-shadow: 2px 1px 1px rgba(255, 255, 255, 0.2),
    0px 5px 40px rgba(4, 0, 0, 0.71);
}
</style>

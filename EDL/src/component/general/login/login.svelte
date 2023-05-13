<script lang="ts">
  import { login } from "../../../libjs/login";
  import Input from "./Input.svelte";
  let current_user = {
    password: "",
    username: "",
  };
</script>

<svelte:head>
  <link rel="stylesheet" href="/css/login.css" />
  <link
    href="https://fonts.googleapis.com/css?family=Poppins:600&display=swap"
    rel="stylesheet"
  />
  <script src="https://kit.fontawesome.com/a81368914c.js"></script>
  <script defer type="text/javascript" src="js/login.js"></script>
</svelte:head>

<img class="wave" src="" alt="icon" />
<div class="container">
  <div class="img">
    <img src="crab-dancing.gif" alt="icon" />
  </div>
  <div class="login-content">
    <form action="index.html">
      <img src="vite.svg" alt="icon" />
      <h2 class="title">Welcome</h2>
      <Input
        placeholder="Username"
        type="text"
        icon="fa-user"
        bind:value={current_user.username}
      />
      <Input
        placeholder="Password"
        type="password"
        icon="fa-lock"
        bind:value={current_user.password}
      />
      <a href="#">Forgot Password?</a>
      <input
        type="submit"
        class="btn"
        value="Login"
        on:click={() => {
          console.log(current_user);
          login(current_user);
        }}
      />
    </form>
  </div>
</div>

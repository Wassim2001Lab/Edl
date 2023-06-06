<script>
  import { Router, Route } from "svelte-navigator";

  import Login from "./component/general/login/login.svelte";
</script>

<main>
  <Router>
    <Route path="login">
      <Login />
    </Route>
  </Router>
</main>

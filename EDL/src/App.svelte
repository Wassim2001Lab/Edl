<script>
  import { Router, Route } from "svelte-navigator";
  import AdminPage from "./component/admin/AdminPage.svelte";
  import Login from "./component/general/login/login.svelte";
</script>

<main>
  <Router>
    <Route path="login">
      <Login />
    </Route>
    <Route path="admin">
      <AdminPage />
    </Route>
  </Router>
</main>

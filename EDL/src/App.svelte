<script lang="ts">
  import { Router, Route } from "svelte-navigator";
  import Admin from "./component/Admin/Admin.svelte";
  import Login from "./component/general/login/login.svelte";
  import TeacherTable from "./component/general/User/TeacherTable.svelte";
</script>

<Router>
  <main>
    <Route path="login" component={Login} />
    <Route path="admin/*" component={Admin} />
    <Route path="test">
      <TeacherTable />
    </Route>
  </main>
</Router>

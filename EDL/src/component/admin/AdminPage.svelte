<script lang="ts">
  import Main from "./Main.svelte";
  import NavBar from "./NavBar.svelte";
  import SideBar from "./SideBar.svelte";
</script>

<svelte:head>
  <link
    href="https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css"
    rel="stylesheet"
  />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
  />
  <link rel="stylesheet" href="/css/AdminPage.css" />
  <script defer src="https://www.gstatic.com/charts/loader.js"></script>
  <script defer src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
  <script defer src="js/AdminPage.js"></script>
  <!-- <script defer src="chart1.js"></script> -->
</svelte:head>

<SideBar />
<section id="content">
  <NavBar />
  <Main />
</section>

<style src="assets/adminpage.css"></style>

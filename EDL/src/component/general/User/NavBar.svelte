<script lang="ts">
  export let hidebutton: () => void;
  export let hide = false;
</script>

<nav class:hide>
  <button class="bx bx-menu" on:click={hidebutton} />

  <div>
    <div class="form-input">
      <input
        type="search"
        placeholder="Search..."
        class="border-t-0 border-l-0 border-r-0 border-b-black border-b-2 bg-transparent rounded-none focus:outline-none"
      />
      <button type="submit" class="search-btn"
        ><i class="bx bx-search" /></button
      >
    </div>
  </div>
  <input type="checkbox" id="switch-mode" hidden />
  <label for="switch-mode" class="switch-mode" />
</nav>

<style>
  /* CONTENT */

  /* NAVBAR */
  nav {
    width: calc(100% - 280px);
    position: absolute;
    top: 0;
    right: 0;
    height: 56px;
    background: var(--light);
    padding: 0 24px;
    display: flex;
    align-items: center;
    grid-gap: 24px;
    font-family: var(--lato);
    z-index: 1000;
    transition: 0.3s ease;
  }
  .hide {
    width: calc(100% - 48px - (4px * 2));
  }
  nav::before {
    content: "";
    position: absolute;
    width: 40px;
    height: 40px;
    bottom: -40px;
    left: 0;
    border-radius: 50%;
    box-shadow: -20px -20px 0 var(--light);
  }
  nav .bx.bx-menu {
    cursor: pointer;
    color: var(--dark);
  }
  nav div {
    max-width: 400px;
    width: 100%;
    margin-right: auto;
  }
  nav form .form-input {
    display: flex;
    align-items: center;
    height: 36px;
  }
  nav form .form-input input {
    flex-grow: 1;
    padding: 0 16px;
    height: 100%;
    border: none;
    background: var(--grey);
    border-radius: 36px 0 0 36px;
    outline: none;
    width: 100%;
    color: var(--dark);
  }
  nav form .form-input button {
    width: 36px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--blue);
    color: var(--light);
    font-size: 18px;
    border: none;
    outline: none;
    border-radius: 0 36px 36px 0;
    cursor: pointer;
  }

  nav .switch-mode {
    display: block;
    min-width: 50px;
    height: 25px;
    border-radius: 25px;
    background: var(--grey);
    cursor: pointer;
    position: relative;
  }
  nav .switch-mode::before {
    content: "";
    position: absolute;
    top: 2px;
    left: 2px;
    bottom: 2px;
    width: calc(25px - 4px);
    background: var(--blue);
    border-radius: 50%;
    transition: all 0.3s ease;
  }
  nav #switch-mode:checked + .switch-mode::before {
    left: calc(100% - (25px - 4px) - 2px);
  }
</style>

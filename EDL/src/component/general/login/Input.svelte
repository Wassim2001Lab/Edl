<script lang="ts">
  export let type = "text";
  export let placeholder: string;
  export let icon: string;
  export let value: string = "";
  let input_class = "";
  const onChange = (e: any) => {
    value = e.target.value;
  };
</script>

<div class="input-div pass">
  <div class="i">
    <i class={`fas ${icon}`} />
  </div>
  <div class="div">
    <h5>{placeholder}</h5>
    <input {type} class="input" {value} on:input={onChange} />
  </div>
</div>

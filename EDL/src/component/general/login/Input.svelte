<script lang="ts">
  export let type = "text";
  export let placeholder: string;
  export let icon: string;
  export let value: string = "";
  let input_class = "";
  const onFocus = () => {
    input_class = "focus";
  };
  const onBlur = () => {
    input_class = value === "" ? "" : input_class;
  };
  const onChange = (e) => {
    value = e.target.value;
  };
</script>

<div class={`input-div pass ${input_class}`}>
  <div class="i">
    <i class={`fas ${icon}`} />
  </div>
  <div class="div">
    <h5>{placeholder}</h5>
    <input
      {type}
      class="input"
      {value}
      on:focus={onFocus}
      on:blur={onBlur}
      on:input={onChange}
    />
  </div>
</div>






<svelte:head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dynamic Table in JS</title>
    <link rel="stylesheet" href="techerresult.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css">
    <script defer src="techerresult.js"></script>
</svelte:head>

<div class="container">
    <table class="dynamic_table">
      <thead>
        <tr>
          <th>id</th>
          <th>note</th>
          <th>remarque</th>
          <th width="50px">
            <div class="button_style">
              <button class="add_button" onclick="buildTable('tableBody')">
                <i class="fa fa-plus"></i>
              </button>
            </div>
          </th>
        </tr>
      </thead>
      <tbody id="tableBody">
        <tr>
          <td>
            <input type="text" class="field_style" placeholder="id">
          </td>
          <td>
            <input type="number" class="field_style" placeholder="note" min="0" max="20">
          </td>
          <td>
            <input type="text" class="field_style" placeholder="remarque">
          </td>
          <td>
            <div class="button_style">
              <button class="remove_button" onclick="removeRow(this)">
                <i class="fa fa-minus"></i>
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>


<svelte:head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- Boxicons -->
    <link href='https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css' rel='stylesheet'>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"/>
    <!-- My CSS -->
    <link rel="stylesheet" href="adminpage.css">
        <link rel = "stylesheet" href = "list.css">

        <script  type="text/javascript" defer src="https://www.gstatic.com/charts/loader.js"></script>
    
        <script defer src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
        
        <script defer src="chart1.js"></script>
        
        <script defer src="dradmin.js"></script>
        <script defer src = "list.js"></script>
    <title>ADMIN</title>
    <!-- <script defer src="chart1.js"></script> -->
  </svelte:head>


<main>
            <div id = "fullscreen-div"></div>
    <form class = "modal" id = "modal">
        <div class = "modal-content">
            <div class = "modal-head">
                <h3 id = "modal-title">Add Address</h3>
                <button type="button" id = "close-btn">
                    <i class = "fas fa-times"></i>
                </button>
            </div>
            <div class = "modal-main">
                <div class = "modal-row">
                    <div class = "modal-col">
                        <label for="">How should your mail be addressed?</label>
                        <input type = "text" placeholder="E.g. The Smith Family" class = "form-control" name = "addr_ing_name">
                    </div>
                </div>

                <div class = "modal-row grid-row">
                    <div class = "modal-col">
                        <label for="">First Name</label>
                        <input type = "text" placeholder="The first name" class = "form-control" name = "first_name">
                    </div>
                    <div class = "modal-col">
                        <label for="">Last Name</label>
                        <input type = "text" placeholder="The last name" class = "form-control" name = "last_name">
                    </div>
                </div>

                <div class = "modal-row grid-row">
                    <div class = "modal-col">
                        <label for="">Email</label>
                        <input type = "email" placeholder="The email" class = "form-control" name = "email">
                    </div>
                    <div class = "modal-col">
                        <label for="">Phone</label>
                        <input type = "text" placeholder="The phone number" class = "form-control" name = "phone">
                    </div>
                </div>

                <div class = "modal-row grid-row">
                    <div class = "modal-col">
                        <label for="">Street address</label>
                        <input type = "text" placeholder="Street address, apartment, house number, etc." class = "form-control" name = "street_addr">
                    </div>
                    <div class = "modal-col">
                        <label for="">Postal Code</label>
                        <input type = "text" placeholder="60323" class = "form-control" name = "postal_code">
                    </div>
                </div>

                <div class = "modal-row grid-row">
                    <div class = "modal-col">
                        <label for="">City</label>
                        <input type = "text" placeholder="City name" class = "form-control" name = "city">
                    </div>
                    <div class = "modal-col">
                        <label for="">Country</label>
                        <select id = "country-list" name = "country">
                            <!-- <option>USA</option> -->
                        </select>
                    </div>
                </div>

                <div class = "modal-row">
                    <div class = "modal-col">
                        <label for = "">Labels</label>
                        <select name = "labels">
                            <option value = "Family">Family</option>
                            <option value = "Friends">Friends</option>
                            <option value = "Colleagues">Colleagues</option>
                        </select>
                    </div>
                </div>

                <div class = "modal-row" id = "modal-btns">
                    <button type = "submit" id = "save-btn">Save</button>
                </div>
            </div>
        </div>
    </form>
    <!-- end of form modal -->

    <!-- address book home -->
  
    <!-- end of address book home -->

</main>



<<<<<<< HEAD
<<<<<<< HEAD
=======

<script  type="text/javascript" defer src="https://www.gstatic.com/charts/loader.js"></script>
    
<script defer src="https://cdn.jsdelivr.net/npm/apexcharts"></script>

<script defer src="chart1.js"></script>

<script defer src="dradmin.js"></script>
<script defer src = "list.js"></script>
>>>>>>> 46ab21f (added incode script using defer)
=======
>>>>>>> 31a90c8 (reset scripts to the head)

<svelte:head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- Boxicons -->
    <link href='https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css' rel='stylesheet'>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"/>
    <!-- My CSS -->
    <link rel="stylesheet" href="adminpage.css">
 <link rel="stylesheet" href="test.css">
    <title>ADMIN</title>


    <script defer src="dradmin.js"></script>
    <script defer src="asq.js"></script>
       

    <!-- <script defer src="chart1.js"></script> -->
  </svelte:head>


  <main>
    <div class="head-title">
        <div class="left">
            <h1>Dashboard</h1>
            <ul class="breadcrumb">
                <li>
                    <a href="#">Dashboard</a>
                </li>
                <li><i class='bx bx-chevron-right' ></i></li>
                <li>
                    <a class="active" href="#">Home</a>
                </li>
            </ul>
        </div>
    </div>

    <div class="container">
<header>Registration</header>

<form action="#">
    <div class="form first">
        <div class="details personal">
            <span class="title">Vartual Platforme information</span>

            <div class="fields">
                <div class="input-field">
                    <label>univercity</label>
                    <select required>
                        <option disabled selected>Select univercity</option>
                        <option>constantine 2</option>
                        <option>constantine 1</option>
                        <option>constantine 3</option>
                         <option>alger 1</option>
                          <option>alger 2</option>
                    </select>
                </div>
                <div class="input-field">
                    <label>Domaine</label>
                    <select required>
                        <option disabled selected>Select domaine</option>
                        <option>informatique</option>
                        <option>st</option>
                        <option>sm</option>
                         <option>medcine</option>
                          <option>mathimatique</option>
                    </select>
                </div>

                <div class="input-field">
                    <label>Nom Vice Doiyen</label>
                    <select required>
                        <option disabled selected>Select nom</option>
                        <option>heitham</option>
                        <option>sem</option>
                         <option>wassime</option>
                      
                    </select>
                </div>
               
               
            </div>
        </div>
         <div class="details personal">
            <span class="title">Departement IFA</span>
             <span class="title">RSD</span>

            <div class="fields">
                <div class="input-field">
                    <label>Nom CFD</label>
                    <select required>
                        <option disabled selected>Select nom</option>
                        <option>heitham</option>
                        <option>sem</option>
                        <option>wassim</option>
                         
                    </select>
                </div>
              

                <div class="input-field">
                    <label>Date debut</label>
                    <input type="date" placeholder="Enter your issued date" required>
                </div>

                <div class="input-field">
                    <label>Date fin</label>
                    <input type="date" placeholder="Enter your issued date" required>
                </div>
               
            </div>
        </div>
        <div class="details personal">
            
             <span class="title">STIC</span>

            <div class="fields">
                <div class="input-field">
                    <label>Nom CFD</label>
                    <select required>
                        <option disabled selected>Select nom</option>
                        <option>heitham</option>
                        <option>sem</option>
                        <option>wassim</option>
                         
                    </select>
                </div>
              

                <div class="input-field">
                    <label>Date debut</label>
                    <input type="date" placeholder="Enter your issued date" required>
                </div>

                <div class="input-field">
                    <label>Date fin</label>
                    <input type="date" placeholder="Enter your issued date" required>
                </div>
               
            </div>
        </div>
           <div class="details personal">
            <span class="title">departement tlsi</span>
             <span class="title">GL</span>

            <div class="fields">
                <div class="input-field">
                    <label>Nom CFD</label>
                    <select required>
                        <option disabled selected>Select nom</option>
                        <option>heitham</option>
                        <option>sem</option>
                        <option>wassim</option>
                         
                    </select>
                </div>
              

                <div class="input-field">
                    <label>Date debut</label>
                    <input type="date" placeholder="Enter your issued date" required>
                </div>

                <div class="input-field">
                    <label>Date fin</label>
                    <input type="date" placeholder="Enter your issued date" required>
                </div>
               
            </div>
        </div>
        <div class="details ID"> 
          <span class="title">STIW</span>
            <div class="fields">
                     <div class="input-field">
                    <label>Nom CFD</label>
                    <select required>
                        <option disabled selected>Select nom</option>
                        <option>heitham</option>
                        <option>sem</option>
                        <option>wassim</option>
                         
                    </select>
                </div>

               <div class="input-field">
                    <label>Date debut</label>
                    <input type="date" placeholder="Enter your issued date" required>
                </div>

                <div class="input-field">
                    <label>Date fin</label>
                    <input type="date" placeholder="Enter your issued date" required>
                </div>

            </div>

            <button class="nextBtn">
                <span class="btnText">Next</span>
                <i class="uil uil-navigator"></i>
            </button>
        </div> 
    </div>

    
</form>
</div>
</main>


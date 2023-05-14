
<svelte:head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- Boxicons -->
    <link href='https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css' rel='stylesheet'>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"/>
    <!-- My CSS -->
    <link rel="stylesheet" href="adminpage.css">
      <link rel="stylesheet" href="vartualplat.css">

      <script type="text/javascript" defer  src="https://www.gstatic.com/charts/loader.js"></script>
    
      <script defer src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
      
      <script defer src="chart1.js"></script>
      
      <script defer src="dradmin.js"></script>
      
      
    <title>ADMIN</title>
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

   <section class="container">
<header>Virtual Paltforms</header>
<form action="#" class="form">
<div class="input-box">
  <label> Name of University</label>
  <input type="text" placeholder="Enter name of University" required />
</div>

<div class="input-box">
  <label> Domain Name</label>
  <input type="text" placeholder="Enter Domain name" required />
</div>

<div class="column">
  <div class="input-box">
    <label> Name of vice doyen</label>
    <input type="text" placeholder="Enter name of vice doyen" required />
  </div>

</div>

<div class="input-box address">
  <label>Address</label>
  <input type="email" placeholder="Enter your eamil" required />
</div>
<button>creation VP</button>
</form>
</section>

</main>


<<<<<<< HEAD
=======
<script type="text/javascript" defer  src="https://www.gstatic.com/charts/loader.js"></script>
    
<script defer src="https://cdn.jsdelivr.net/npm/apexcharts"></script>

<script defer src="chart1.js"></script>

<script defer src="dradmin.js"></script>
>>>>>>> 46ab21f (added incode script using defer)



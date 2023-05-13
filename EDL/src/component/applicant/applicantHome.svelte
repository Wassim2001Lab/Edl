
<svelte:head>
    <meta charset="UTF-8">
    <title>Bootstrap Multi Step Form | Webdevtrick.com</title>
    <link href="https://fonts.googleapis.com/css?family=Poppins:400,600&display=swap" rel="stylesheet">
    <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css'>
    <link rel="stylesheet" href="applicenthome.css">
  </svelte:head>



<header class="header">
    <h1 class="header__title">Multi Steps Form Animations</h1>
  </header>
  <div class="content">
    <div class="content__inner">
      <div class="container">
        
        <form class="pick-animation my-4">
          <div class="form-row">
            <div class="col-5 m-auto">
              <select class="pick-animation__select form-control">
                <option value="scaleIn" selected="selected">ScaleIn</option>
                <option value="scaleOut">ScaleOut</option>
                <option value="slideHorz">SlideHorz</option>
                <option value="slideVert">SlideVert</option>
                <option value="fadeIn">FadeIn</option>
              </select>
            </div>
          </div>
        </form>

      
      </div>
      <div class="container overflow-hidden">
        <div class="multisteps-form">
          <div class="row">
            <div class="col-12 col-lg-8 ml-auto mr-auto mb-4">
              <div class="multisteps-form__progress">
                <button class="multisteps-form__progress-btn js-active" type="button" title="User Info">doctora Info</button>
                <button class="multisteps-form__progress-btn" type="button" title="Address">corection info</button>
                <button class="multisteps-form__progress-btn" type="button" title="Order Info">resolt Info</button>
                <button class="multisteps-form__progress-btn" type="button" title="Message">reclamation </button>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-lg-8 m-auto">
              <form class="multisteps-form__form">
                <div class="multisteps-form__panel shadow p-4 rounded bg-white js-active" data-animation="scaleIn">
                  <h3 class="multisteps-form__title">doctora Info</h3>
                  <div class="multisteps-form__content">
                    <div class="form-row mt-4">
                      <div class="col-12 col-sm-6">
                        <input class="multisteps-form__input form-control" type="text" placeholder="salle" />
                      </div>
                      <div class="col-12 col-sm-6 mt-4 mt-sm-0">
                        <input class="multisteps-form__input form-control" type="text" placeholder="spicialiter" />
                      </div>
                    </div>
                    <div class="form-row mt-4">
                      <div class="col-12 col-sm-6">
                        <input class="multisteps-form__input form-control" type="text" placeholder="module" />
                      </div>
                      <div class="col-12 col-sm-6 mt-4 mt-sm-0">
                        <input class="multisteps-form__input form-control" type="text" placeholder="heur" />
                      </div>
                    </div>
                    <div class="form-row mt-4">
                     <div class="col-12 col-sm-6">
                        <input class="multisteps-form__input form-control" type="text" placeholder="module" />
                      </div>
                      <div class="col-12 col-sm-6 mt-4 mt-sm-0">
                        <input class="multisteps-form__input form-control" type="text" placeholder="heur" />
                      </div>
                    </div>
                    <div class="button-row d-flex mt-4">
                      <button class="btn btn-primary ml-auto js-btn-next" type="button" title="Next">Next</button>
                    </div>
                  </div>
                </div>

                <div class="multisteps-form__panel shadow p-4 rounded bg-white" data-animation="scaleIn">
                  <h3 class="multisteps-form__title">corection info</h3>
                  <div class="multisteps-form__content">
                    <div class="form-row mt-4">
                      <div class="col">
                        <input class="multisteps-form__input form-control" type="text" placeholder="corection 1" />
                      </div>
                    </div>
                    <div class="form-row mt-4">
                      <div class="col">
                        <input class="multisteps-form__input form-control" type="text" placeholder="corection 2" />
                      </div>
                    </div>
                    <div class="form-row mt-4">
                      <div class="col">
                       <input class="multisteps-form__input form-control" type="text" placeholder="corection 3" />
                      </div>
                    
                    </div>
                    <div class="button-row d-flex mt-4">
                      <button class="btn btn-primary js-btn-prev" type="button" title="Prev">Prev</button>
                      <button class="btn btn-primary ml-auto js-btn-next" type="button" title="Next">Next</button>
                    </div>
                  </div>
                </div>

                <div class="multisteps-form__panel shadow p-4 rounded bg-white" data-animation="scaleIn">
                  <h3 class="multisteps-form__title">resolt Info</h3>
                  <div class="multisteps-form__content">
                    <div class="row">
                      <div class="col-12 col-md-6 mt-4">
                        <div class="card shadow-sm">
                          <div class="card-body">
                            <h5 class="card-title">Title</h5>
                            <p class="card-text">sccuces</p>
                          </div>
                        </div>
                      </div>
                      <div class="col-12 col-md-6 mt-4">
                        <div class="card shadow-sm">
                          <div class="card-body">
                            <h5 class="card-title">Title</h5>
                            <p class="card-text">faile</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="button-row d-flex mt-4 col-12">
                        <button class="btn btn-primary js-btn-prev" type="button" title="Prev">Prev</button>
                        <button class="btn btn-primary ml-auto js-btn-next" type="button" title="Next">Next</button>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="multisteps-form__panel shadow p-4 rounded bg-white" data-animation="scaleIn">
                  <h3 class="multisteps-form__title">reclamation</h3>
                  <div class="multisteps-form__content">
                    <div class="form-row mt-4">
                      <textarea class="multisteps-form__textarea form-control" placeholder="Additional Message and Questions"></textarea>
                    </div>
                    <div class="button-row d-flex mt-4">
                      <button class="btn btn-primary js-btn-prev" type="button" title="Prev">Prev</button>
                      <button class="btn btn-success ml-auto" type="button" title="Send">Send</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

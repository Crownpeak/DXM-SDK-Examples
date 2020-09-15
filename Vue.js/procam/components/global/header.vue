<template>
  <header>
    <nav id="primaryNavContainer" class="navbar navbar-expand-md">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-3">
            <a class="navbar-brand" href="#" aria-label="Procam logo link to home page">
              <img src="https://s3.surety.financial.cprd.io/Skunks-Works/ProCam-React-SDK/_Assets/images/logo.svg" alt="Procam"/>
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navigationContent"
                    aria-controls="navigationContent" aria-expanded="false"
                    aria-label="Toggle navigation">
              <span class="navbar-toggler-line"></span>
              <span class="navbar-toggler-line"></span>
              <span class="navbar-toggler-line"></span>
              <i aria-hidden="true" class="fas fa-times"></i>
            </button>
          </div>
          <div class="col-md-5">
            <div class="navbar-collapse collapse" id="navigationContent">
              <ul class="navbar-nav" role="menubar">
                <li class="nav-item">
                  <a class="nav-link" href="#" role="menuitem">Cameras</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#" role="menuitem">Events</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#" role="menuitem">Explore</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#" role="menuitem">Blog</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#" role="menuitem">Contact</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="utilities col-md-4 d-none d-lg-block">
            <a class="utilities-item" href="#" aria-label="Vist Instagram">
              <i aria-hidden="true" class="fab fa-instagram"></i>
            </a>
            <a class="utilities-item" href="#" aria-label="Vist Twitter">
              <i aria-hidden="true" class="fab fa-twitter"></i>
            </a>
            <a class="utilities-item" href="#" aria-label="Vist Facebook">
              <i aria-hidden="true" class="fab fa-facebook"></i>
            </a>
            <a class="language-control utilities-sm-nav-item" aria-label="Change language" href="#">
              <i aria-hidden="true" class="fas fa-globe-americas"></i>
            </a>
            <a class="login-register utilities-item" aria-label="Login/Register" href="#">
              <i class="fas fa-user"></i>
            </a>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>
<script>
import {CmsComponent} from 'crownpeak-dxm-vuejs-sdk';

export default {
  extends: CmsComponent,
  name: "Header"
};
</script>

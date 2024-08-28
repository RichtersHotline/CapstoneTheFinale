<template>
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid d-flex justify-content-start align-items-center">
        <a class="navbar-brand Logo" href="#">Home Of The Broken Heroes</a>
        <router-link to="/about">About</router-link>
        <router-link to="/contact">Contact</router-link>
        <router-link to="/splash">splash</router-link>
        <router-link to="/signup">splash</router-link>

        <input type="text" placeholder="Search for comrades..." class="form-control SearchBar" id="Searcher">
        <div class="spreader d-flex justify-content-around mt-2">
        <i class="bi bi-house-door-fill IconColour h4 ml-3"></i>
        <i class="bi bi-envelope-fill IconColour h4 ml-3"></i>
        <i class="bi bi-bell-fill  IconColour h4"></i>
        <i class="bi bi-person-fill IconColour h4"></i>

    </div>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
    
  </template>
  
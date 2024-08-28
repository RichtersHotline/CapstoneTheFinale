<template>
<div class="container-fluid Background">
    <h2 class="text-center">Welcome, Hero</h2>
    <h5 class="text-center">Home Of The Broken Heroes </h5>

<div class="SplashContainer">
<div class="TextContent">
<h2 class="text-center">Login</h2>
<h2>Email Address:</h2>

     <input type="email" name="Email" placeholder="Email..." id="LoginForm" required UserEntry>
     <h2 class="mt-5">Password:</h2>

<input type="password" name="Email" placeholder="Password..." id="LoginForm" required UserEntry>
<div class="btnContainer mx-auto">
    <div class="router-link">
        <button id="VipBtnLogin" type="button" class="mb-4 mx-auto">Login</button>
    </div>
    <p class="text-center mb-3">Don't have an account? Sign up now.</p>

    <router-link to="/signup" class="router-link">
<button id="VipBtnLogin" type="button" class="mb-5 mx-auto">Register</button>
</router-link>
</div>
</div>
</div>
</div>

</template>
<template>
  <div class="main-container">
    <div class="form-container">
      <div class="contact-text">
        <h1>Contact us</h1>
        <p>If you have any questions, please feel free to reach out to us.</p>
      </div>
      <div class="contact-form">
        <label for="fullname">Enter your full name*</label>
        <input type="text" name="fullname" class="input-field" />
        <label for="email">Enter your email*</label>
        <input type="email" name="email" class="input-field" />
        <label for="phoneNumber">Enter your Phone number</label>
        <input type="text" name="phoneNumber" class="input-field" />
        <label for="reason">Purpose of contact</label>
        <select class="input-field"> 
        <option>business</option>
        <option>development team</option>
        <option>Tailored Software Development</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style>
.main-container {
  background-color: rgb(90, 160, 246);
}
.form-container {
  width: 50%;
  display: flex;
  justify-content: space-evenly;
}
.contact-text {
  width: 50%;
  font-size: 20px;
  color: rgb(255, 255, 255);
}
.contact-form {
  display: grid;
  justify-content: center;
  padding: 20px;
  text-align: justify;
  font-size: 26px;
  color: #2c7695;
  font-family: monospace;
  font-weight: lighter;
}
.input-field {
  width: 500px;
  height: 30px;
  font-size: 18px;
  margin-top: 10px;
  margin-bottom: 25px;
  border-radius: 5px;
}
</style>

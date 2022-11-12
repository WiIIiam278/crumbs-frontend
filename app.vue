<template>
  <NuxtPage />
</template>


<style>
/* Colors */
:root {
  --white: #fff;
  --light-gray: #F0F0F0;
  --dark-gray: #707070;
  --black: #000;
}

/* Scrollbar style rules (font, bg color) */
html {
  overflow-x: hidden;
  margin-right: calc(-1 * (100vw - 100%));
  background-color: var(--light-gray);
}

body {
  font-family: 'Nunito', sans-serif;
  background-color: var(--background);
  color: var(--black);
  /* Disable margin and padding */
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

/* Default link styling */
a {
  text-decoration: none;
  color: inherit;
}

/* Default text field styling */
input, select {
  border: none;
  outline: none;
  background-color: var(--light-gray);
  padding: 0.5rem;
  border-radius: 0.5rem;
  font-size: 1rem;
  color: var(--black);
  font-family: 'Nunito', sans-serif;
  margin-bottom: 1rem;
}

::-webkit-input-placeholder {
   text-transform: initial;
}

:-moz-placeholder { 
   text-transform: initial;
}
</style>
<template>
    <Navbar />
    <div class="error-404">
        <h2>404 Not Found</h2>
        <p>Click below to head back home.</p>
        <br />
        <ButtonLink to="/">Home</ButtonLink>
    </div>
</template>

<style scoped>
.error-404 {
    margin: 0 auto;
    max-width: 1100px;
    height: 50vh;
    padding: 0 2rem;
}
</style>
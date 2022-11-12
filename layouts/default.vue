<template>
    <div id="page-body">
        <Navbar />
        <div id="page-content">
            <slot />
        </div>
    </div>
</template>

<style scoped>
#page-body {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

#page-content {
    margin: 0 auto;
    max-width: 1100px;
    padding: 0 2rem;
}
</style>
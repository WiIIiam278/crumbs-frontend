<template>
    <NuxtLink :to="to">
        <div class="button">
            <slot />
        </div>
    </NuxtLink>
</template>

<script>
export default {
    props: {
        to: {
            type: String,
            default: '',
            required: false
        }
    }
}
</script>

<style scoped>
.button {
    display: inline;
    background-color: var(--black);
    color: var(--white);
    padding: 0.5rem;
    border-radius: 0.5rem;
    width: fit-content;
    margin-right: 1rem;
}

.button:hover {
    background-color: var(--dark-gray);
    cursor: pointer;
}
</style>
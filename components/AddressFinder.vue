<template>
    <div class="address-finder">
        <div class="address" v-for="address of addresses">
            <span v-for="line of address.split(',')">
                {{ line }}, 
            </span>
        </div>
    </div>
</template>

<style scoped>
.address-finder {
    display: flex;
    flex-direction: column;
    width: 15rem;
}

.address {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
}
</style>

<script setup>
// Dfefine Postcode prop
const { postcode } = defineProps({
    postcode: {
        type: String,
        default: '',
        required: false
    }
});

// Define getAddresses as an getAsyncData method
console.log(`https://api.getAddress.io/find/${postcode}?api-key=M2potWoC60CCM5x9uV_qXA37256`)
const { addresses } = await useFetch(`https://api.getAddress.io/find/${postcode}?api-key=M2potWoC60CCM5x9uV_qXA37256`)
</script>
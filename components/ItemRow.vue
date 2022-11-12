<template>
    <div>
        <div class="details">
            <input type="text" id="name" placeholder="Item name" />
            <select name="category" placeholder="Item Category" id="category">
                <option value="meals">Cooked Meals</option>
                <option value="essentials">Essentials</option>
                <option value="ingredients">Ingredients</option>
                <option value="drinks">Drinks</option>
            </select>
            <input type="date" placeholder="Item expiry date" id="expiry" />
        </div>
    </div>
</template>

<style scoped>
input {
    margin-right: 1rem;
}

select {
    margin-right: 1rem;
}

.details {
    margin-bottom: 1rem;
}
</style>
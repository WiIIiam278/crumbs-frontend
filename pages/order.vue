<template>
    <NuxtLayout>
        <div>
            <PageSection>
                <div class="where">
                    <div>
                        <h1>Where are you?</h1>
                        <input type="text" id="postcode" placeholder="Enter postcode" />
                        &nbsp;
                        <!-- <ButtonLink @click="postcode">Find</ButtonLink>
                        <AddressFinder postcode="KT121NF" /> -->
                        </div>
                    <div>
                        <img src="uk.png" alt="UK map" />
                    </div>
                </div>
            </PageSection>
            <PageSection>
                <h1>What are you in need of?</h1>
                <!-- Radio boxes -->
                <div class="categories">
                    <div class="radio">
                        <input type="radio" id="meals" name="diet" value="meals" checked>
                        <label for="meals">Cooked Meals</label>
                    </div>
                    <div class="radio">
                        <input type="radio" id="essentials" name="diet" value="essentials">
                        <label for="essentials">Essentials</label>
                    </div>
                    <div class="radio">
                        <input type="radio" id="ingredients" name="diet" value="ingredients">
                        <label for="ingredients">Cooking Ingredients</label>
                    </div>
                    <div class="radio">
                        <input type="radio" id="drinks" name="diet" value="drinks">
                        <label for="drinks">Drinks</label>
                    </div>
                </div>
            </PageSection>
            <PageSection>
                <h1>Any dietary requirements?</h1>
                <!-- Check boxes -->
                <div>
                    <input type="checkbox" id="vegan" name="vegan" value="vegan">
                    <label for="vegan">Vegan</label>
                </div>
                <div>
                    <input type="checkbox" id="kosher" name="kosher" value="kosher">
                    <label for="kosher">Kosher</label>
                </div>
                <div>
                    <input type="checkbox" id="halal" name="halal" value="halal">
                    <label for="halal">Halal</label>
                </div>
            </PageSection>
            <PageSection>
                <h1>Place your order</h1>
                <div class="details">
                    <span class="phone">
                        <!-- Phone region code dropdown -->
                        <select name="phone-region-code" id="phone-region-code">
                            <option value="+44">+44</option>
                            <option v-for="i of Array(139).keys()" :value="'+' + i+1">+{{ i+1 }}</option>
                        </select>
                        <input type="text" id="phone" placeholder="Enter phone number" />
                    </span>
                    <input type="email" id="email" placeholder="Enter email address" />
                </div>
                <br />
                <!-- POST form data button -->
                <ButtonLink @click="submit">Place Order</ButtonLink>
                <div class="error"></div>
            </PageSection>
        </div>
    </NuxtLayout>
</template>

<script setup>
const error = { value: '' };

// submit form method
const submit = async () => {
    const postcode = document.getElementById('postcode').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const phoneRegionCode = document.getElementById('phone-region-code').value;
    const phoneFull = phoneRegionCode + phone;
    const category =  document.querySelector('input[name="diet"]:checked').value;
    const vegan = document.getElementById('vegan').checked;
    const kosher = document.getElementById('kosher').checked;
    const halal = document.getElementById('halal').checked;

    console.log(error.value);

    if (!postcode || !phone || !email || !category) {
        error.value = 'Please fill in all fields';
        document.querySelector('.error').innerHTML = error.value;
        return;
    }

    const response = await fetch('/api/order', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            postcode,
            phone: phoneFull,
            email,
            category,
            vegan,
            kosher,
            halal
        })
    });

    if (response.ok) {
        // redirect to success page
        window.location.href = '/order/confirm';
    } else {
        error.value = await response.text();
    }
}

</script>

<style scoped>
.details {
    display: flex;
    flex-direction: column;
    width: 15rem;
}

.details .phone {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
}

.categories {
    display: flex;
    flex-direction: row;
    gap: 1.5rem;
}

#postcode {
    text-transform: uppercase;
}

.error {
    color: red;
    margin-top: 2rem;
}

.where {
    display: flex;
    flex-direction: row;
}
</style>
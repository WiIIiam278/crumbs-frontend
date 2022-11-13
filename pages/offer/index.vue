<template>
    <NuxtLayout>
        <div>
            <PageSection>
                <div class="where">
                    <div>
                        <h1>Where are you?</h1>
                        <input type="text" id="postcode" placeholder="Enter postcode" />
                        &nbsp;
                        <div id="postcode-validator"></div>
                        <!-- <ButtonLink @click="postcode">Find</ButtonLink>
                        <AddressFinder postcode="KT121NF" /> -->
                        </div>
                    <div>
                        <img src="uk.png" alt="UK map" />
                    </div>
                </div>
            </PageSection>
            <PageSection>
                <h1>I am a&hellip;</h1>
                <div class="categories">
                    <div class="radio">
                        <input type="radio" id="meals" name="type" value="meals" checked>
                        <label for="person">Person</label>
                    </div>
                    <div class="radio">
                        <input type="radio" id="essentials" name="type" value="essentials">
                        <label for="restaurant">Restaurant</label>
                    </div>
                    <div class="radio">
                        <input type="radio" id="ingredients" name="type" value="ingredients">
                        <label for="shop">Shop</label>
                    </div>
                </div>
            </PageSection>
            <PageSection>
                <h1>What do you have?</h1>
                <p>Please enter the item name, the category it falls under and its' expiry date</p>
                <div id="items">
                    <ItemRow v-for="i of Array(5).keys()"/>
                </div>
                <!-- <ButtonLink @click="addItem">Add item</ButtonLink> -->
            </PageSection>
            <PageSection>
                <h1>Confirm for pick-up</h1>
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
                <ButtonLink @click="submit">Confirm pick-up</ButtonLink>
                <div class="error"></div>
            </PageSection>
        </div>
    </NuxtLayout>
</template>

<script setup>
const error = { value: '' };

// submit form method
const submit = async () => {
    // get form data
    const postcode = document.getElementById('postcode').value;
    const phoneRegionCode = document.getElementById('phone-region-code').value;
    const phoneNumber = document.getElementById('phone').value;
    const phone = phoneRegionCode + phoneNumber;    
    const email = document.getElementById('email').value;

    if (!postcode || !phoneNumber || !email) {
        error.value = 'Please fill in all fields';
        document.querySelector('.error').innerHTML = error.value;
        return;
    }

    if (!validateEmail(email)) {
        error.value = 'Please enter a valid email address';
        document.querySelector('.error').innerHTML = error.value;
        return;
    }

    if (!validateMobileNumber(phone)) {
        error.value = 'Please enter a valid mobile number';
        document.querySelector('.error').innerHTML = error.value;
        return;
    }

    if (!validatePostcode(postcode)) {
        error.value = 'Please enter a valid postcode';
        document.querySelector('.error').innerHTML = error.value;
        return;
    }

    // get form data
    const formData = {
        address: document.getElementById('postcode').value,
        type: document.querySelector('input[name="type"]:checked').value,
        items: [],
        phone: document.getElementById('phone').value,
        email: document.getElementById('email').value,
    };

    // get items
    const items = document.querySelectorAll('.item');
    items.forEach((item) => {
        formData.items.push({
            name: item.querySelector('.name').value,
            category: item.querySelector('.category').value,
            expiry: item.querySelector('.expiry').value,
        });
    });

    // POST form data
    const res = await fetch('http://localhost:4123/api/donate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    });

    // handle response
    if (res.status === 200) {
        // redirect to success page
        window.location.href = '/order/confirm';
    } else {
        // display error message
        error.value = await res.text();
    }
};
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

.items {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.where {
    display: flex;
    flex-direction: row;
}
</style>
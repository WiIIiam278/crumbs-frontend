<template>
    <nav>
        <h1 id="logo">
            <a href="/">Crumbs</a>
        </h1>
        <ul id="navigation">
            <li>
                <NuxtLink to="/order">
                    Order Leftovers
                </NuxtLink>
            </li>
            <li>
                <NuxtLink to="/offer">
                    Offer Leftovers
                </NuxtLink>
            </li>
        </ul>
    </nav>
</template>

<style scoped>
nav {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 2.5rem;
    background-color: var(--white);
    font-size: 1.2rem;
    font-weight: 500;
    height: 5rem;
}
nav #logo {
    margin: 0;
    padding: 0;
    font-size: 2rem;
    font-weight: 700;
    color: var(--accent);
}
nav #navigation {
    width: 17.5rem;
    display: flex;
    flex-direction: row;
    color: var(--gray) !important;
    align-items: center;
    justify-content: space-between;
    margin: 0;
    padding: 0;
    list-style: none;
}

a:hover {
    text-decoration: underline;
}
/* Less than 600px */
@media screen and (max-width: 37.5em) {
    nav {
        flex-direction: column;
        height: 6rem;
        justify-content: center;
        align-items: center;
    }
    nav #logo {
        margin-bottom: 0.2rem;
    }
}
/* Less than 340 */
@media screen and (max-width: 21.25em) {
    nav #logo {
        font-size: 1.7rem;
    }
    nav #navigation {
        font-size: 0.9rem;
    }
    nav #navigation {
        width: 100%;
    }
}
</style>
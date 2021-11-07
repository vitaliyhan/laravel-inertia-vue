<template>
    <div class="container mx-auto">
        <ul>
            <li>
                <Link :href="route('home')">Home</Link>
            </li>
            <li>
                <Link :href="route('about')">About</Link>
            </li>
        </ul>
        <slot/>

    </div>
</template>

<script>
import {link} from "@inertiajs/inertia-vue3";

export default {
    components: {
        Link: link
    }
}
</script>

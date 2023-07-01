<script lang="ts">
    export let text
    export let onClick
</script>

<button on:click={onClick()}>{text}</button>

<style lang="postcss">
    button {
        @apply w-full p-2 bg-gray-800 rounded hover:bg-gray-700 transition-all;
    }
</style>
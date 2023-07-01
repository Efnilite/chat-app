<script lang="ts">
    export let message
</script>

<div class="p-2 bg-gray-900 w-fit rounded">
    <div class="flex flex-row gap-1">
        <div class="w-4 h-4">
            {@html message.avatar}
        </div>
        <p class="text-xs">{message.user}</p>
    </div>
    <p class="text-md break-words">{message.text}</p>
</div>

<style lang="postcss">
    * {
        @apply bg-gray-900;
    }
</style>
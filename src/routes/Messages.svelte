<script lang="ts">
    import Message from "./Message.svelte";

    export let messages
</script>

<ul>
    {#each messages as message (message.id)}
        <li class="mb-1">
            <Message {message}/>
        </li>
    {/each}
</ul>
<script lang="ts">
    import SignPopup from "./SignPopup.svelte";
    import CreatePopup from "./CreatePopup.svelte";
    import {afterUpdate, onMount} from "svelte";
    import * as db from "../db.ts";
    import {account, action} from "./store.ts";
    import MessagesLoading from "./MessagesLoading.svelte";
    import Messages from "./Messages.svelte";
    import SignedOutBar from "./SignedOutBar.svelte";
    import SignedInBar from "./SignedInBar.svelte";

    let messages = []

    onMount(async () => {
        // await refresh()

        messages = await db.getMessages();

        db.subscribe(async (newMessages) => messages = await newMessages)

        return () => db.unsubscribe()
    })

    afterUpdate(() => {
        const element = document.getElementById("messages")

        element.scrollTo(0, element.scrollHeight);
    })
</script>

{#if $action === "create"}
    <CreatePopup/>
{:else if $action === "sign"}
    <SignPopup/>
{/if}

<div class="bg-slate-950 popup-center h-full w-96">
    <h1 class="text-3xl text-center p-2">🔥 chat-app</h1>
    <div id="messages" class="bg-gray-950 h-[35rem] overflow-y-scroll ">
        {#if messages.length === 0}
            <MessagesLoading/>
        {/if}
        <Messages {messages}/>
    </div>
    {#if $account === null}
        <SignedOutBar/>
    {:else}
        <SignedInBar/>
    {/if}
</div>
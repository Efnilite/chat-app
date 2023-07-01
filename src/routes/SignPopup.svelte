<script lang="ts">
    import SignInput from "./Input.svelte";
    import * as db from "../db.ts";
    import {action, account} from "./store";

    let signError = ""

    const close = () => action.set("chat")

    const signIn = async () => {
        const data = new FormData(document.getElementById("sign") as HTMLFormElement);
        const username = data.get("username") as string
        const password = data.get("password") as string

        const result = await db.signIn(username, password)

        if (result !== true) {
            // error
            account.set(null)

            signError = result.message

            return
        }

        account.set(db.pb.authStore.model)

        close()
    }
</script>

<div class="w-96 p-10 popup-center bg-gray-950 z-10">
    <button class="material-symbols-outlined p-2 -m-2 -mb-1 -mr-3 float-right hover:cursor-pointer" on:click={() => close()}>close</button>
    <form id="sign" on:submit|preventDefault={() => signIn()}>
        <SignInput name="username" placeholder="username"/>
        <SignInput name="password" placeholder="password" type="password"/>
        {#if signError.length > 0}
            <p class="text-sky-300">{signError}</p>
        {/if}
        <button type="submit" class="w-full my-2 p-2 rounded-sm bg-sky-500 hover:bg-sky-400 transition-all">sign in</button>
    </form>
</div>
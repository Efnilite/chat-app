<script lang="ts">
    import SignInput from "./Input.svelte"
    import {account, action} from "./store"
    import * as db from "../db"

    let createError = ""

    const close = () => action.set("chat")

    const create = async () => {
        const data = new FormData(document.getElementById("create") as HTMLFormElement);
        const username = data.get("username") as string
        const password = data.get("password") as string
        const passwordConfirm = data.get("password confirm") as string

        const result = await db.create(username, password, passwordConfirm);
        if (result !== true) {
            createError = result.message
            return
        }

        await db.signIn(username, password)

        account.set(db.pb.authStore.model)
        close()
    }
</script>

<div class="w-96 p-10 popup-center bg-gray-950 z-10">
    <button class="material-symbols-outlined p-2 -m-2 -mb-1 -mr-3 float-right hover:cursor-pointer" on:click={() => close()}>close</button>
    <form id="create" on:submit|preventDefault={() => create()}>
        <SignInput name="username" placeholder="username"/>
        <SignInput name="password" placeholder="password" type="password"/>
        <SignInput name="password confirm" placeholder="password confirm" type="password"/>
        {#if createError.length > 0}
            <p class="text-sky-300">{createError}</p>
        {/if}
        <button type="submit" class="w-full my-2 p-2 rounded-sm create">create account</button>
    </form>
</div>

<style lang="postcss">
    .create {
        background: linear-gradient(40deg, #b62ae5, #3a72ff, #00d7fd);
        background-size: 400%;
        animation: fade 10s linear infinite;
    }

    @keyframes fade {
        0% {
            background-position: 0 50%
        }
        50% {
            background-position: 100% 50%
        }
        100% {
            background-position: 0 50%
        }
    }
</style>
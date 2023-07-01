<script>
    import { enhance } from '$app/forms';
    import {account} from "./store.ts";
    import Logout from "./Logout.svelte";
    import Input from "./Input.svelte";
</script>

<div class="flex flex-row gap-2 mt-2">
    <form class="flex-grow" method="POST" action="?/send" use:enhance>
        <input type="hidden" name="user" value="{$account.id}">
        <Input name="text" placeholder="send message"/>
    </form>
    <Logout/>
</div>
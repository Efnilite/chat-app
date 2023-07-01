<script>
    import {action} from "./store.ts";
    import PageButton from "./PageButton.svelte";
</script>

<div class="flex flex-row gap-2 mt-2">
    <PageButton text="sign in" onClick={() => action.set("sign")}/>
    <PageButton text="create account" onClick={() => action.set("create")}/>
</div>
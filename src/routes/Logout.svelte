<script lang="ts">

    import * as db from "../db"
    import {account} from "./store";

    const logout = () => {
        db.pb.authStore.clear()

        account.set(null)
    }

</script>

<button title="Logout" class="p-2 material-symbols-outlined hover:text-gray-400 transition-all" on:click={() => logout()}>
    logout
</button>
<script lang="ts">
    export let name
    export let placeholder
    export let type = "text"
</script>

<input name={name} placeholder={placeholder} type={type}
       title="Text input."
       autocomplete="off" required
       class="w-full my-0.5 p-2 rounded-sm bg-gray-800 focus:outline-0 focus:bg-slate-700 transition-all">
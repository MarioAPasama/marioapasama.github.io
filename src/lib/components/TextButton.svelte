<script lang="ts">
    export let text: string = "TextButton";
    export let onClick: () => void = () => {};
    export let variant: "primary" | "secondary" = "primary";
</script>

<button class={`button  ${variant}`} on:click={onClick}>
    {text}
</button>

<style>
    .button {
        border: none;
        background-color: inherit;
        padding: 14px 28px;
        font-size: 16px;
        cursor: pointer;
        /* display: inline-block; */
        padding: 0.4rem 1rem;
        /* border-radius: 0.5rem; */
        font-family: "Fira Code", monospace;
        font-size: 0.875rem;
        font-weight: 500;
        /* border: 1px solid transparent; */
        cursor: pointer;
        transition: all 0.2s ease-in-out;
        text-transform: lowercase;
        letter-spacing: 0.5px;
    }

    /* CV - primary action */
    .primary {
        background-color: var(--color-bg);
        color: white;
        border-color: var(--color-secondary2);
    }
    /* .primary:hover {
        background-color: #3a3a3a;
        border-color: #666;
    } */

    /* Portfolio - secondary action */
    .secondary {
        background-color: var(--color-bg);
        color: #cfcfcf;
        border-color: var(--color-secondary2);
    }

    /* .secondary:hover {
        background-color: #3a3a3a;
        border-color: #666;
    } */
</style>

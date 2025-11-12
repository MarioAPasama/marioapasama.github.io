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
    }

    .primary {
        /* background-color: var(--color-bg); */
        color: var(--color-text);
        border-color: var(--color-secondary2);
        font-family: "Fira Code", monospace;
        font-size: 0.875rem;
        font-weight: 500;
        letter-spacing: 0.5px;
        padding: 14px 28px;
        font-size: 16px;
        cursor: pointer;
        /* display: inline-block; */
        padding: 0.4rem 1rem;
        /* border-radius: 0.5rem; */

        /* border: 1px solid transparent; */
        cursor: pointer;
        transition: all 0.2s ease-in-out;
        text-transform: lowercase;
    }
    /* .primary:hover {
        background-color: #3a3a3a;
        border-color: #666;
    } */

    /* Portfolio - secondary action */
    .secondary {
        color: var(--secondary-text-color);
        border-color: var(--color-secondary2);
        text-decoration: none;
        word-break: break-all;
        font-size: 1rem;
    }

    .secondary:hover {
        /* background-color: #3a3a3a;
        border-color: #666; */
        text-decoration: underline;
        color: var(--primary-color);
    }
</style>

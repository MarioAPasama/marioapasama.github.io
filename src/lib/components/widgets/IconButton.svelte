<script lang="ts">
    export let icon: string = "Button";
    export let label: string = "IconButton";
    export let link: string | null = null;
    export let variant: "svg" | "img" = "svg";
</script>

{#if !link}
    <span class="social-icon" title={label}>
        {#if variant === "svg"}
            {@html icon}
        {:else if variant === "img"}
            <img src={icon} alt={label} class="icon-image" />
        {/if}
    </span>
{:else}
    <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        title={label}
        class="social-icon"
    >
        {#if variant === "svg"}
            {@html icon}
        {:else if variant === "img"}
            <img src={icon} alt={label} class="icon-image" />
        {/if}
    </a>
{/if}

<style>
    .social-icon {
        color: var(--secondary-text-color);
        transition:
            transform 0.2s ease-in-out,
            color 0.2s ease-in-out;
        display: inline-block;
        line-height: 1;
    }

    .social-icon:hover {
        color: var(--primary-color);
        transform: translateY(-4px);
    }

    .icon-image {
        width: 24px;
        height: 24px;
        vertical-align: middle;
    }
</style>

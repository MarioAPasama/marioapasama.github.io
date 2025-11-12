<script lang="ts">
    export let icon: string = "Button";
    export let label: string = "IconButton";
    export let status: string | null = null;
</script>

<div class="skill-item">
    <img src={`/icons/${icon}`} alt={label} />
    <span>{label}</span>
    {#if status === "Learning"}
        <span class="learning">Learning</span>
    {/if}
</div>

<style>
    /* .skill-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0.5rem;
        padding: 0.5rem;
        background-color: var(--color-bg-alt);
        border-radius: 0.5rem;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        transition: transform 0.2s ease-in-out;
    }

    .skill-item:hover {
        transform: translateY(-4px);
    }

    .skill-item img {
        width: 48px;
        height: 48px;
        margin-bottom: 0.5rem;
    }

    .skill-item span {
        font-size: 1rem;
        color: white;
    }

    .learning {
        margin-top: 0.25rem;
        font-size: 0.75rem;
        color: var(--color-accent);
        font-style: italic;
    } */

    .skill-item {
        background-color: #2b2b2b;
        border-radius: 0.5rem;
        padding: 1rem;
        display: flex;
        align-items: center;
        color: white;
    }

    .skill-item img {
        width: 24px;
        height: 24px;
        margin-right: 0.5rem;
    }

    .learning {
        font-size: 0.75rem;
        color: #ccc;
        margin-left: 0.5rem;
        background: #444;
        padding: 0.2rem 0.5rem;
        border-radius: 4px;
    }
</style>

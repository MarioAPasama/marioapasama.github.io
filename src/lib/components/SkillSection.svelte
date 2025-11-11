<script lang="ts">
    import type { Skill } from "$lib/model/profile";
    export let skill: Skill[];
    const frameworks = skill.filter((item) => item.type === "FRAMEWORK");
    const languages = skill.filter(
        (item) => item.type === "PROGRAMMING_LANGUAGE",
    );
</script>

<section class="page">
    <!-- <img src="https://www.codewars.com/users/Cagion/badges/large" alt="ss" /> -->
    <h2 class="text-primary titel">Skill</h2>
    <div class="skill-section">
        <div class="section-title">Frameworks</div>
        <div class="skill-grid">
            {#each frameworks as item}
                <div class="skill-item">
                    <img src={`/icons/${item.icon}`} alt={item.label} />
                    <span>{item.label}</span>
                    {#if item.status === "Learning"}
                        <span class="learning">Learning</span>
                    {/if}
                </div>
            {/each}
        </div>
    </div>

    <div class="skill-section">
        <div class="section-title">Programming Languages</div>
        <div class="skill-grid">
            {#each languages as item}
                <div class="skill-item">
                    <img src={`/icons/${item.icon}`} alt={item.label} />
                    <span>{item.label}</span>
                    {#if item.status === "Learning"}
                        <span class="learning">Learning</span>
                    {/if}
                </div>
            {/each}
        </div>
    </div>
</section>

<style>
    .titel {
        padding: 1rem;
    }
    .skill-section {
        margin-bottom: 1rem;
    }

    .section-title {
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
        color: white;
    }

    .skill-grid {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
    }

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

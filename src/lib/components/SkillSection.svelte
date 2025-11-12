<script lang="ts">
    import IconBoxLabel from "$lib/components/widgets/IconBoxLabel.svelte";
    import type { Skill } from "$lib/model/profile";
    export let skill: Skill[];
    const frameworks = skill.filter((item) => item.type === "FRAMEWORK");
    const languages = skill.filter(
        (item) => item.type === "PROGRAMMING_LANGUAGE",
    );
</script>

<section class="page">
    <h2 class="text-primary titel">Skill</h2>
    <div class="skill-section">
        <div class="section-title">Frameworks</div>
        <div class="skill-grid">
            {#each frameworks as item}
                <IconBoxLabel
                    icon={item.icon}
                    label={item.label}
                    status={item.status}
                />
            {/each}
        </div>
    </div>

    <div class="skill-section">
        <div class="section-title">Programming Languages</div>
        <div class="skill-grid">
            {#each languages as item}
                <IconBoxLabel
                    icon={item.icon}
                    label={item.label}
                    status={item.status}
                />
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
</style>

<script lang="ts">
    import BoxImg from "./widgets/BoxImg.svelte";
    import project from "$lib/database/project.json";
    import TextButton from "./widgets/TextButton.svelte";
    import type { Project } from "$lib/model/project";

    const dataProject: Project[] = project;

    function seeAllProject() {
        window.open(
            "https://github.com/MarioAPasama?tab=repositories",
            "_blank",
            "noopener,noreferrer",
        );
    }
</script>

<section class="page">
    <div class="layout">
        <h2 class="text-primary">Project</h2>
        <div>
            {#each dataProject as item}
                <BoxImg cover={item.cover} title={item.title} />
            {/each}
        </div>
        <TextButton
            text="sell all project >"
            variant="primary"
            onClick={seeAllProject}
        />
    </div>
</section>

<style>
    .layout {
        height: 100vh;
        width: 100%;
        text-align: center;
        align-items: center;
        display: grid;
        justify-content: center;
    }
</style>

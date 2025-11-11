<script lang="ts">
    import project from "$lib/database/project.json";
    import TextButton from "./TextButton.svelte";
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
                <div class="responsive">
                    <img
                        class="project-image"
                        src="/images/{item.cover}"
                        alt={item.title}
                    />
                    <div class="project-title">{item.title}</div>
                </div>
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
    .responsive {
        position: relative;
        overflow: hidden;
        /* cursor: pointer; */

        border-radius: 18px;
        /* display: inline; */
        background-color: rgb(44, 44, 44);
        /* padding: 1rem; */
        margin: 16px;
        float: left;
        /* position: relative;  */
        /* If you want text inside of it */
        aspect-ratio: 16/9 auto;
        width: 350px;
        /* height: auto; */
        /* transition: 0.5s; */
    }

    .responsive:hover .project-image {
        transform: scale(1.05); /* efek zoom sedikit */
    }

    .responsive:hover .project-title {
        bottom: 0; /* saat hover, judul naik ke atas gambar */
    }

    .project-title {
        position: absolute;
        bottom: -50px; /* tersembunyi di bawah gambar awalnya */
        left: 0;
        width: 100%;
        text-align: center;
        background: rgba(0, 0, 0, 0.6); /* background semi transparan */
        color: white;
        font-size: 14px;
        padding: 12px;
        font-weight: bold;
        transition: bottom 0.3s ease;
    }

    .project-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
        border-radius: 18px;
        transition: transform 0.3s ease;
    }
</style>

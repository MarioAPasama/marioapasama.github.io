<script lang="ts">
    export let cover: string = "";
    export let title: string = "";
</script>

<div class="responsive">
    <img class="project-image" src="/images/{cover}" alt={title} />
    <div class="project-title">{title}</div>
</div>

<style>
    .responsive {
        position: relative;
        overflow: hidden;

        border-radius: 18px;
        background-color: rgb(44, 44, 44);
        margin: 16px;
        float: left;
        aspect-ratio: 16/9 auto;
        width: 350px;
    }

    .responsive:hover .project-image {
        transform: scale(1.05);
    }

    .responsive:hover .project-title {
        bottom: 0;
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

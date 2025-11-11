<script lang="ts">
    import Button from "$lib/components/Button.svelte";
    import type { Profile } from "$lib/model/profile";
    export let dataProfile: Profile;

    async function cvClick() {
        const basePath = window.location.origin;
        const rawPath = `${basePath}/files/Mario Ationgsi Pasama.pdf`;

        const filePath = encodeURI(rawPath);
        const fileName = "Mario Ationgsi Pasama.pdf";

        try {
            const res = await fetch(filePath, { method: "HEAD" });
            if (!res.ok) {
                alert("File not available on the server.");
                return;
            }
        } catch (err) {
            alert("Unable to contact the server to download the file.");
            return;
        }

        const a = document.createElement("a");
        a.href = filePath;
        a.download = fileName;
        document.body.appendChild(a);
        a.click();
        a.remove();
    }
</script>

<section class="page">
    <div class="layout-text">
        <h1 class="text-primary">{dataProfile.name}</h1>
        <p class="text-secondary">{dataProfile.description}</p>

        <!-- Tombol Primary -->
        <Button text="Curriculum Vitae " variant="primary" onClick={cvClick} />

        <!-- Tombol Secondary -->
        <!-- <Button text="github" variant="primary" onClick={portfolioClick} /> -->
    </div>
    <div class="layout-avatar">
        <img
            class="img-avater"
            src="/images/{dataProfile.img_profile}"
            width="50%"
            height="50%"
            alt="Mario"
        />
    </div>
</section>

<style>
    .layout-text {
        align-items: center;
        margin: 1rem;
        width: 50%;
    }

    .layout-avatar {
        align-items: center;
        display: flex;
        justify-content: flex-end;
        width: 50%;
    }

    .img-avater {
        border-radius: 50%;
        margin: 6rem;
        max-width: 100%;
        height: auto;
    }
</style>

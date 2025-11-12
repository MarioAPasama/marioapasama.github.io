<script lang="ts">
    import Button from "$lib/components/widgets/Button.svelte";
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

        <div class="actions-container">
            <Button
                text="Curriculum Vitae"
                variant="primary"
                onClick={cvClick}
            />
            <a
                href="https://www.codewars.com/users/Cagion"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img
                    class="codewars-badge"
                    src="https://www.codewars.com/users/Cagion/badges/micro"
                    alt="Codewars Badge"
                />
            </a>
        </div>
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
    .actions-container {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-top: 1.5rem;
        flex-wrap: wrap;
    }

    /* Codewars badge */
    .codewars-badge {
        height: 30px;
        width: auto;
        opacity: 0.9;
        transition: opacity 0.2s ease;
    }
    .codewars-badge:hover {
        opacity: 1;
    }

    /* Mobile-first: stack text and avatar */
    .layout-text {
        margin: 0.75rem 0;
        width: 100%;
        box-sizing: border-box;
    }

    .layout-avatar {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
    }

    .img-avater {
        border-radius: 50%;
        margin: 2rem 0;
        max-width: 60%;
        height: auto;
    }

    /* Tablet / desktop: side-by-side */
    @media (min-width: 768px) {
        .layout-text {
            width: 50%;
            margin: 1rem;
        }
        .layout-avatar {
            width: 50%;
            justify-content: flex-end;
        }
        .img-avater {
            max-width: 100%;
            margin: 6rem;
        }
    }
</style>

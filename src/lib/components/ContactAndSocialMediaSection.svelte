<script lang="ts">
    import IconButton from "./widgets/IconButton.svelte";
    import TextButton from "./widgets/TextButton.svelte";
    import profile from "$lib/database/profile.json";
    import type { SocialMedia, Contact } from "$lib/model/profile";

    const contactInfo: Contact = profile.contact;
    const socialMedia: SocialMedia[] = profile.social_media;

    function onClick(link: string) {
        window.open(link, "_blank", "noopener,noreferrer");
    }
</script>

<section class="page contact-section">
    <h2>Get In Touch</h2>
    <p class="subtitle">
        Feel free to reach out for collaborations or just a friendly chat.
    </p>
    <div class="layout">
        <div class="card contact">
            <h3>Contact Information</h3>
            <div class="contact-item">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-mail"
                    ><path
                        d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                    ></path><polyline points="22,6 12,13 2,6"></polyline></svg
                >
                <TextButton
                    text={contactInfo.email}
                    variant="secondary"
                    onClick={() => onClick(`mailto:${contactInfo.email}`)}
                />
            </div>
            <div class="contact-item">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-phone"
                    ><path
                        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                    ></path></svg
                >
                <TextButton
                    text={contactInfo.phone}
                    variant="secondary"
                    onClick={() =>
                        onClick(
                            `https://api.whatsapp.com/send?phone=62895428699124`,
                        )}
                />
            </div>
        </div>

        <div class="card social_media">
            <h3>Find Me On</h3>
            <div class="social-icons">
                {#each socialMedia as social}
                    <IconButton
                        icon={social.icon}
                        label={social.label}
                        link={social.link}
                        variant="svg"
                    />
                {/each}
            </div>
        </div>
    </div>
</section>

<style>
    .contact-section {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 4rem 1rem;
        min-height: 80vh;
        text-align: center;
    }

    h2 {
        font-size: 2.5rem;
        color: var(--color-text);
        margin-bottom: 0.5rem;
    }

    .subtitle {
        font-size: 1.1rem;
        color: var(--color-text2);
        max-width: 500px;
        margin-bottom: 3rem;
    }

    .layout {
        width: 100%;
        max-width: 900px;
        display: flex;
        gap: 2rem;
        flex-wrap: wrap;
        justify-content: center;
    }

    .card {
        background-color: #ffffff;
        border-radius: 16px;
        padding: 2rem;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        flex: 1;
        min-width: 300px;
        text-align: left;
    }

    .card h3 {
        font-size: 1.5rem;
        margin-top: 0;
        margin-bottom: 1.5rem;
        color: var(--primary-text-color);
    }

    .contact-item {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-bottom: 1rem;
    }

    .contact-item svg {
        color: var(--primary-color);
        flex-shrink: 0;
    }

    .social-icons {
        display: flex;
        gap: 1.5rem;
        align-items: center;
    }

    @media (max-width: 768px) {
        .layout {
            flex-direction: column;
        }
    }
</style>

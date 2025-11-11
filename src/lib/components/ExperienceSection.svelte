<script lang="ts">
    import type { Experience } from "$lib/model/profile";
    export let experience: Experience[];
</script>

<section class="page">
    <div class="layout">
        <h2 class="text-primary">Experience</h2>

        <div class="content-area">
            <div class="timeline">
                <div class="timeline-line"></div>

                {#each experience as item, index}
                    {@const position =
                        10 + index * (80 / (experience.length - 1))}

                    <div
                        class="timeline-marker"
                        style="left: {position}%;"
                    ></div>

                    <div
                        class="timeline-box {index % 2 !== 0
                            ? 'box-below'
                            : 'box-above'}"
                        style="left: {position}%;"
                    >
                        <span class="box-company">{item.company}</span>
                        {#each item.position as pos}
                            <div class="box-position">
                                <strong>{pos.name_position}</strong>
                                <span>{pos.start_date} - {pos.end_date}</span>
                                <div class="position-desc">
                                    {@html pos.description_html}
                                </div>
                            </div>
                        {/each}
                    </div>
                {/each}
            </div>
        </div>
    </div>
</section>

<style>
    .layout {
        min-height: 100vh;
        width: 100%;
        display: flex;
        flex-direction: column;
        text-align: center;
        align-items: center;

        /* --- UBAH BARIS INI --- */
        justify-content: flex-start; /* Ganti dari 'center' */

        padding: 2rem;
    }
    .content-area {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        max-width: 1000px;

        /* --- TAMBAHKAN BARIS INI --- */
        flex-grow: 1; /* Membuat wrapper ini mengisi sisa ruang */
    }

    /* === Timeline === */
    .timeline {
        width: 100%;
        position: relative;
        /* Padding ini PENTING untuk memberi ruang bagi kotak */
        padding-top: 150px;
        padding-bottom: 150px;
    }
    .timeline-line {
        /* 1. Ganti width dari 100% ke 100vw */
        width: 100vw; /* 100% dari lebar layar */

        height: 4px;
        background-color: #ccc;
        border-radius: 2px;
        position: absolute;
        top: 50%;

        /* 2. Pusatkan garis 100vw ini */
        left: 50%;
        transform: translate(
            -50%,
            -50%
        ); /* -50% X (lebar) dan -50% Y (tinggi) */

        z-index: 1;
    }
    .timeline-marker {
        width: 20px;
        height: 20px;
        background-color: white;
        border: 4px solid #ccc;
        border-radius: 50%;
        position: absolute;
        top: 50%; /* Ini sudah benar */
        transform: translate(-50%, -50%);
        z-index: 2; /* Di atas garis */
    }

    /* === Kotak Konten === */
    .timeline-box {
        position: absolute;
        width: 280px;
        background-color: #2a2a2a;
        border: 1px solid #ccc;
        border-radius: 8px;
        padding: 1rem;
        text-align: left;
        transform: translateX(-50%);
        z-index: 10; /* Paling atas */
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
    }

    /* --- PERBAIKAN DI SINI --- */
    /* Ganti 'top: 40px' menjadi 'top: 50%' + margin */
    .box-below {
        top: 50%;
        margin-top: 40px; /* Jarak dari garis tengah */
    }
    /* Ganti 'bottom: 40px' menjadi 'bottom: 50%' + margin */
    .box-above {
        bottom: 50%;
        margin-bottom: 40px; /* Jarak dari garis tengah */
    }

    /* Panah penghubung */
    .timeline-box::after {
        content: "";
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        border-width: 10px;
        border-style: solid;
        z-index: -1; /* PENTING: Agar panah di belakang kotak */
    }
    .box-below::after {
        top: -20px;
        border-color: transparent transparent #ccc transparent;
    }
    .box-above::after {
        bottom: -20px;
        border-color: #ccc transparent transparent transparent;
    }

    /* === Teks di dalam Kotak (Sudah Benar) === */
    .box-company {
        font-size: 1.1rem;
        font-weight: bold;
        color: white;
        display: block;
        margin-bottom: 0.5rem;
    }
    .box-position {
        font-size: 0.9rem;
        margin-top: 0.5rem;
        padding-top: 0.5rem;
        border-top: 1px solid #555;
    }
    .box-position:first-of-type {
        margin-top: 0;
        padding-top: 0;
        border-top: none;
    }
    .box-position strong {
        display: block;
        color: #eee;
    }
    .box-position span {
        font-size: 0.8rem;
        color: #aaa;
    }
    .position-desc {
        font-size: 0.85rem;
        color: #ddd;
        margin-top: 4px;
    }
</style>

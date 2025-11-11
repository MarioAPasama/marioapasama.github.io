<script lang="ts">
    import profile from "$lib/database/profile.json";
    import type { Profile } from "$lib/model/profile";

    const dataProfile: Profile = profile;

    import ProfileSection from "$lib/components/ProfileSection.svelte";
    import SkillSection from "$lib/components/SkillSection.svelte";
    import ProjectSection from "$lib/components/ProjectSection.svelte";
    import ExperienceSection from "$lib/components/ExperienceSection.svelte";
    import ContactAndSocialMediaSection from "$lib/components/ContactAndSocialMediaSection.svelte";
</script>

<div class="scroll-container">
    <ProfileSection {dataProfile} />
    <SkillSection skill={dataProfile.skill} />
    <ProjectSection />
    <ExperienceSection experience={dataProfile.experience} />
    <ContactAndSocialMediaSection />
</div>

<style>
</style>

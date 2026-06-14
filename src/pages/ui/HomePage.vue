<script setup lang="ts">
import { AboutWidget } from '../../widgets/about'
import { ContactWidget } from '../../widgets/contact'
import { ExperienceWidget } from '../../widgets/experience'
import { FooterWidget } from '../../widgets/footer'
import { HeroWidget } from '../../widgets/hero'
import { ProjectsWidget } from '../../widgets/projects'
import { SkillsWidget } from '../../widgets/skills'
</script>

<template>
  <main>
    <HeroWidget />
    <AboutWidget />
    <ProjectsWidget />
    <SkillsWidget />
    <ExperienceWidget />
    <ContactWidget />
  </main>
  <FooterWidget />
</template>

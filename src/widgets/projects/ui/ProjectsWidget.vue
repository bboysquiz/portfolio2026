<script setup lang="ts">
import { ref } from 'vue'
import { ProjectCard, ProjectModal, projects } from '@entities/project'
import type { Project } from '@entities/project'
import { UiContainer } from '@shared/ui'

const selectedProject = ref<Project | null>(null)

const openProject = (project: Project) => {
  selectedProject.value = project
}

const closeProject = () => {
  selectedProject.value = null
}
</script>

<template>
  <section id="projects" class="projects">
    <UiContainer size="wide">
      <div class="projects__header">
        <h2>Последние проекты</h2>
        <p>
          Здесь собраны проекты с разной архитектурой и стеком. Это последние проекты, которые я делал для себя и частных предпринимателей на аутсорсе.
        </p>
      </div>

      <div class="projects__grid">
        <ProjectCard
          v-for="(project, index) in projects"
          :key="project.id"
          :project="project"
          :featured="index === 0 || index === 3"
          @select="openProject"
        />
      </div>
    </UiContainer>

    <ProjectModal
      v-if="selectedProject"
      :project="selectedProject"
      @close="closeProject"
    />
  </section>
</template>

<style scoped>
.projects {
  padding-block: var(--section-space-md);
  background: var(--color-bg);
}

.projects__header {
  display: grid;
  gap: var(--space-md);
  max-width: 460px;
  margin-bottom: clamp(var(--space-2xl), 6vw, 72px);
}

.projects__header > *,
.projects__grid {
  min-width: 0;
}

.projects__header h2 {
  margin: 0;
  font-family: var(--font-display);
  font-size: clamp(44px, 6vw, 78px);
  font-weight: 700;
  line-height: 1.08;
  letter-spacing: 0;
  color: var(--color-text);
  white-space: nowrap;
}

.projects__header p {
  margin: 0;
  color: var(--color-text-muted);
  font-size: 15px;
  font-weight: 400;
  line-height: 1.65;
}

.projects__grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: var(--grid-gap);
}

@media (max-width: 900px) {
  .projects__grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 560px) {
  .projects__header h2 {
    font-size: clamp(28px, 8vw, 34px);
  }
}
</style>

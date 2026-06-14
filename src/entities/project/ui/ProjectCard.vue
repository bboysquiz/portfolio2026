<script setup lang="ts">
import { computed } from 'vue'
import { UiBadge, UiButton, UiCard } from '@shared/ui'
import type { Project, ProjectLink, ProjectStatus } from '../model/types'

type ProjectCardProps = {
  project: Project
  featured?: boolean
}

const props = withDefaults(defineProps<ProjectCardProps>(), {
  featured: false,
})

const emit = defineEmits<{
  select: [project: Project]
}>()

const statusMap: Record<
  ProjectStatus,
  { label: string; variant: 'neutral' | 'accent' | 'success' | 'outline' }
> = {
    published: { label: 'Опубликован', variant: 'success' },
    inProgress: { label: 'В работе', variant: 'neutral' },
    planned: { label: 'Планируется', variant: 'outline' },
  }

const projectLinks = computed(() =>
  Object.entries(props.project.links).filter(
    (entry): entry is [string, ProjectLink] => Boolean(entry[1]),
  ),
)

const previewTitleLines = computed(() => props.project.previewTitleLines ?? [props.project.title])
</script>

<template>
  <UiCard
    class="project-card"
    :class="[
      { 'project-card--featured': featured },
      `project-card--${project.id}`,
    ]"
    :variant="featured ? 'accent' : 'default'"
    padding="none"
    interactive
    role="button"
    tabindex="0"
    :aria-label="`Открыть проект ${project.title}`"
    @click="emit('select', project)"
    @keydown.enter.self="emit('select', project)"
    @keydown.space.self.prevent="emit('select', project)"
  >
    <template #media>
      <div class="project-card__preview">
        <img
          v-if="project.coverImage"
          class="project-card__cover"
          :src="project.coverImage"
          :alt="`Обложка проекта ${project.title}`"
        />

        <span class="project-card__category">{{ project.category }}</span>
        <strong>
          <span v-for="line in previewTitleLines" :key="line">{{ line }}</span>
        </strong>
      </div>
    </template>

    <div class="project-card__content">
      <div class="project-card__meta">
        <UiBadge :variant="statusMap[project.status].variant" with-dot>
          {{ statusMap[project.status].label }}
        </UiBadge>
      </div>

      <p class="project-card__description">{{ project.description }}</p>

      <ul class="project-card__stack" aria-label="Стек проекта">
        <li v-for="technology in project.stack" :key="technology">{{ technology }}</li>
      </ul>

      <div class="project-card__links" @click.stop>
        <UiButton
          v-for="[key, link] in projectLinks"
          :key="key"
          :href="link.href"
          :is-external="link.isExternal"
          size="sm"
          variant="ghost"
        >
          {{ link.label }}
        </UiButton>

        <UiButton
          size="sm"
          variant="ghost"
          @click="emit('select', project)"
        >
          Демо
        </UiButton>
      </div>
    </div>
  </UiCard>
</template>

<style scoped>
.project-card {
  --project-cover-position: top center;
  --project-title-max-width: 620px;

  height: 100%;
  min-width: 0;
  cursor: pointer;
}

.project-card :deep(.ui-card__media:not(:last-child)) {
  margin-bottom: 0;
}

.project-card__preview {
  position: relative;
  overflow: hidden;
  min-height: 230px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: var(--space-sm);
  padding: var(--space-lg);
  color: var(--color-text);
}

.project-card__cover {
  position: absolute;
  z-index: 0;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: var(--project-cover-position);
  pointer-events: none;
}

.project-card__preview::after {
  content: '';
  position: absolute;
  z-index: 1;
  inset: 0;
  background: linear-gradient(90deg, rgba(5, 5, 5, 0.76), rgba(5, 5, 5, 0.22) 44%, transparent 74%);
  pointer-events: none;
}

.project-card__preview strong {
  position: relative;
  z-index: 2;
  min-width: 0;
  max-width: var(--project-title-max-width);
  font-family: var(--font-display);
  font-size: clamp(28px, 5vw, 60px);
  font-weight: 700;
  line-height: 1.04;
  letter-spacing: 0;
  overflow-wrap: anywhere;
  text-shadow: 0 10px 28px rgba(0, 0, 0, 0.54);
}

.project-card__preview strong span {
  display: block;
}

.project-card__category {
  position: relative;
  z-index: 2;
  max-width: 520px;
  font-size: 12px;
  font-weight: 800;
  line-height: 1.2;
  color: rgba(248, 244, 236, 0.72);
  text-transform: uppercase;
  text-shadow: 0 8px 20px rgba(0, 0, 0, 0.42);
}

.project-card__content {
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
  padding: var(--space-lg);
  min-width: 0;
}

.project-card__meta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--space-sm);
  color: var(--color-text-muted);
  font-size: 13px;
  font-weight: 650;
}

p, .project-card__description {
  margin: 0;
  color: var(--color-text-soft);
  line-height: 1.55;
}

.project-card__description {
  font-size: 14px;
}

.project-card__stack {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-xs);
  margin: 0;
  padding: 0;
  list-style: none;
}

.project-card__stack li {
  padding: 7px 10px;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  color: var(--color-text-muted);
  background: rgba(248, 244, 236, 0.04);
  font-size: 12px;
  font-weight: 700;
  line-height: 1;
}

.project-card__links {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-xs);
  margin-top: auto;
}

.project-card--featured {
  --project-title-max-width: 46%;

  grid-column: span 2;
}

.project-card--featured .project-card__preview {
  min-height: 360px;
}

.project-card--opshub {
  --ui-card-accent-glow: radial-gradient(circle at 18% 12%, #f04434, transparent 40%);
  --project-cover-position: top left;
}

.project-card.project-card--opshub {
  background:
    radial-gradient(circle at 18% 12%, rgba(240, 68, 52, 0.42), transparent 42%),
    var(--color-surface);
}

.project-card--selena-crm {
  --ui-card-accent-glow: radial-gradient(circle at 18% 12%, #37429A, transparent 40%);
  --project-cover-position: top center;
  --project-title-max-width: 82%;
}

.project-card--interviewer {
  --ui-card-accent-glow: radial-gradient(circle at 18% 12%, #1f745f, transparent 40%);
  --project-cover-position: top center;
  --project-title-max-width: 66%;
}

.project-card.project-card--interviewer {
  background:
    radial-gradient(circle at 18% 12%, rgba(31, 116, 95, 0.42), transparent 42%),
    var(--color-surface);
}

.project-card--selena-crm .project-card__preview strong span {
  white-space: nowrap;
}

.project-card--vision-air {
  --ui-card-accent-glow: radial-gradient(circle at 18% 12%, #ff7a18, transparent 40%);
  --project-cover-position: top center;
}

@media (max-width: 900px) {
  .project-card--featured {
    grid-column: span 1;
  }

  .project-card--featured .project-card__preview {
    min-height: 260px;
  }

  .project-card--featured {
    --project-title-max-width: 66%;
  }
}

@media (max-width: 560px) {
  .project-card {
    --project-title-max-width: 100%;
  }

  .project-card__preview,
  .project-card--featured .project-card__preview {
    min-height: 220px;
    padding: var(--space-md);
  }

  .project-card__content {
    padding: var(--space-md);
  }

  .project-card__preview strong {
    font-size: clamp(30px, 10vw, 38px);
  }
}
</style>

<script setup lang="ts">
import {
  computed,
  onBeforeUnmount,
  onMounted,
  ref,
  type ComponentPublicInstance,
  type CSSProperties,
} from 'vue'
import { UiBadge, UiButton, UiCard } from '@shared/ui'
import type { Project, ProjectLink, ProjectParallaxDetail, ProjectStatus } from '../model/types'

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
const cardComponent = ref<ComponentPublicInstance | null>(null)
const parallaxProgress = ref(0)
const isCompactViewport = ref(false)
const hasParallaxDetails = computed(() => Boolean(props.project.parallaxDetails?.length))

let animationFrame = 0

const updateViewportMode = () => {
  isCompactViewport.value = window.innerWidth <= 900
}

const updateParallaxProgress = () => {
  const cardElement = cardComponent.value?.$el as HTMLElement | undefined

  if (!cardElement || !hasParallaxDetails.value) {
    return
  }

  const rect = cardElement.getBoundingClientRect()
  const viewportHeight = window.innerHeight || document.documentElement.clientHeight
  const progress = (viewportHeight - rect.top) / (viewportHeight + rect.height)

  parallaxProgress.value = Math.max(-1, Math.min(1, (progress - 0.5) * 2))
}

const queueParallaxUpdate = () => {
  if (animationFrame) {
    return
  }

  animationFrame = window.requestAnimationFrame(() => {
    animationFrame = 0
    updateViewportMode()
    updateParallaxProgress()
  })
}

const getParallaxDetailStyle = (detail: ProjectParallaxDetail): CSSProperties => {
  const speed = isCompactViewport.value && detail.compactSpeed !== undefined
    ? detail.compactSpeed
    : detail.speed

  return {
    transform: `translate3d(0, ${(parallaxProgress.value * speed).toFixed(2)}px, 0)`,
  }
}

onMounted(() => {
  if (!hasParallaxDetails.value) {
    return
  }

  updateViewportMode()
  updateParallaxProgress()
  window.addEventListener('scroll', queueParallaxUpdate, { passive: true })
  window.addEventListener('resize', queueParallaxUpdate)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', queueParallaxUpdate)
  window.removeEventListener('resize', queueParallaxUpdate)

  if (animationFrame) {
    window.cancelAnimationFrame(animationFrame)
  }
})
</script>

<template>
  <UiCard
    ref="cardComponent"
    class="project-card"
    :class="[
      { 'project-card--featured': featured },
      { 'project-card--with-parallax': project.parallaxDetails?.length },
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
        <picture
          v-if="project.coverImage"
          class="project-card__cover-picture"
        >
          <source
            v-for="source in project.coverSources"
            :key="source.src"
            :srcset="source.src"
            :media="source.media"
          />
          <img
            class="project-card__cover"
            :src="project.coverImage"
            :alt="`Обложка проекта ${project.title}`"
          />
        </picture>

        <span class="project-card__category">{{ project.category }}</span>
        <strong>
          <span v-for="line in previewTitleLines" :key="line">{{ line }}</span>
        </strong>
      </div>
    </template>

    <div
      v-if="project.parallaxDetails?.length"
      class="project-card__parallax"
      aria-hidden="true"
    >
      <img
        v-for="detail in project.parallaxDetails"
        :key="detail.src"
        class="project-card__parallax-detail"
        :class="detail.className"
        :src="detail.src"
        :alt="detail.alt"
        :style="getParallaxDetailStyle(detail)"
      />
    </div>

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

.project-card.ui-card--interactive {
  transition: none;
}

.project-card.ui-card--interactive:hover {
  border-color: var(--color-border);
  transform: none;
  box-shadow: var(--shadow-card);
}

.project-card.project-card--with-parallax {
  overflow: visible;
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

.project-card__cover-picture {
  position: absolute;
  z-index: 0;
  inset: 0;
  display: block;
  pointer-events: none;
}

.project-card__cover {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: var(--project-cover-position);
}

.project-card__parallax {
  position: absolute;
  z-index: 2;
  inset: 0;
  pointer-events: none;
}

.project-card__parallax-detail {
  position: absolute;
  max-width: none;
  height: auto;
  pointer-events: none;
  filter: brightness(0.78) saturate(0.96);
  transition: transform 1.4s var(--ease-out);
  will-change: transform;
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
  z-index: 4;
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
  z-index: 4;
  max-width: 520px;
  font-size: 12px;
  font-weight: 800;
  line-height: 1.2;
  color: rgba(248, 244, 236, 0.72);
  text-transform: uppercase;
  text-shadow: 0 8px 20px rgba(0, 0, 0, 0.42);
}

.project-card__content {
  position: relative;
  z-index: 4;
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
  --project-cover-position: top center;
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

.project-card__parallax-detail--crm-subscription {
  top: 21%;
  left: 30.4%;
  width: 12%;
}

.project-card__parallax-detail--crm-dance {
  top: 35%;
  left: 33.2%;
  width: 19%;
}

.project-card__parallax-detail--crm-user {
  top: 12%;
  right: -6%;
  width: 30%;
}

.project-card__parallax-detail--crm-account {
  top: 36%;
  right: 5%;
  width: 16%;
}

.project-card__parallax-detail--opshub-filters {
  top: -5%;
  right: 8%;
  width: 27%;
}

.project-card__parallax-detail--opshub-new-ticket {
  top: 0%;
  right: -3%;
  width: 34%;
}

.project-card__parallax-detail--opshub-resolved {
  top: 7%;
  left: 25%;
  width: 29%;
}

.project-card__parallax-detail--opshub-work {
  top: 20%;
  left: 40%;
  width: 29%;
}

.project-card__parallax-detail--interviewer-repeat {
  top: 0%;
  left: 20%;
  width: 39%;
}

.project-card__parallax-detail--interviewer-knowledge {
  top: -8%;
  left: 14%;
  width: 37%;
}

.project-card__parallax-detail--interviewer-add-topic {
  top: 20%;
  left: 53%;
  width: 33%;
}

.project-card__parallax-detail--interviewer-questions {
  top: 15%;
  right: -15%;
  width: 40%;
  filter:
    brightness(0.78)
    saturate(0.96)
    drop-shadow(0 0 24px rgba(30, 214, 169, 0.52))
    drop-shadow(0 0 64px rgba(30, 214, 169, 0.38));
}

.project-card__parallax-detail--vision-cart {
  top: -3%;
  left: 35%;
  width: 13%;
}

.project-card__parallax-detail--vision-product {
  top: 20%;
  left: 29%;
  width: 19%;
}

.project-card__parallax-detail--vision-category {
  top: 14%;
  right: -1%;
  width: 19%;
}

.project-card__parallax-detail--vision-guarantee {
  top: 30%;
  right: 1%;
  width: 23%;
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

  .project-card__parallax-detail--crm-subscription {
    top: 21%;
    left: 27%;
    width: 18%;
  }

  .project-card__parallax-detail--crm-dance {
    top: 31%;
    left: 25%;
    width: 30%;
  }

  .project-card__parallax-detail--crm-user {
    top: 9%;
    right: -18%;
    width: 54%;
  }

  .project-card__parallax-detail--crm-account {
    top: 21%;
    right: -8%;
    width: 30%;
  }

  .project-card__parallax-detail--opshub-filters {
    top: 2%;
    right: 2%;
    width: 38%;
  }

  .project-card__parallax-detail--opshub-new-ticket {
    top: 8%;
    right: -10%;
    width: 46%;
  }

  .project-card__parallax-detail--opshub-resolved {
    top: 21%;
    left: 31%;
    width: 42%;
  }

  .project-card__parallax-detail--opshub-work {
    top: 28%;
    left: 41%;
    width: 42%;
  }

  .project-card__parallax-detail--interviewer-repeat {
    top: 3%;
    left: 31%;
    width: 48%;
  }

  .project-card__parallax-detail--interviewer-knowledge {
    top: 10%;
    left: 18%;
    width: 48%;
  }

  .project-card__parallax-detail--interviewer-add-topic {
    top: 13%;
    left: 50%;
    width: 43%;
  }

  .project-card__parallax-detail--interviewer-questions {
    top: 24%;
    right: -18%;
    width: 55%;
  }

  .project-card__parallax-detail--vision-cart {
    top: 6%;
    left: 33%;
    width: 22%;
  }

  .project-card__parallax-detail--vision-product {
    top: 11%;
    left: 32%;
    width: 30%;
  }

  .project-card__parallax-detail--vision-category {
    top: 21%;
    right: -8%;
    width: 30%;
  }

  .project-card__parallax-detail--vision-guarantee {
    top: 28%;
    right: -5%;
    width: 36%;
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

  .project-card__parallax-detail--crm-subscription {
    top: 15%;
    left: 42%;
    width: 28%;
  }

  .project-card__parallax-detail--crm-dance {
    top: 23%;
    left: 35%;
  }

  .project-card__parallax-detail--crm-user {
    top: 5%;
    right: -34%;
    width: 82%;
  }

  .project-card__parallax-detail--crm-account {
    top: 15%;
    right: -18%;
  }

  .project-card__parallax-detail--opshub-filters {
    top: 0;
    right: 1%;
    width: 47%;
  }

  .project-card__parallax-detail--opshub-new-ticket {
    top: 6%;
    right: -24%;
    width: 58%;
  }

  .project-card__parallax-detail--opshub-resolved {
    top: 19%;
    left: 24%;
    width: 52%;
  }

  .project-card__parallax-detail--opshub-work {
    top: 28%;
    left: 35%;
    width: 52%;
  }

  .project-card__parallax-detail--interviewer-repeat {
    top: 2%;
    left: 28%;
    width: 58%;
  }

  .project-card__parallax-detail--interviewer-knowledge {
    top: 10%;
    left: 10%;
    width: 56%;
  }

  .project-card__parallax-detail--interviewer-add-topic {
    top: 13%;
    left: 47%;
    width: 52%;
  }

  .project-card__parallax-detail--interviewer-questions {
    top: 25%;
    right: -31%;
    width: 70%;
  }

  .project-card__parallax-detail--vision-cart {
    top: 4%;
    left: 39%;
    width: 30%;
  }

  .project-card__parallax-detail--vision-product {
    top: 10%;
    left: 36%;
    width: 40%;
  }

  .project-card__parallax-detail--vision-category {
    top: 20%;
    right: -18%;
    width: 42%;
  }

  .project-card__parallax-detail--vision-guarantee {
    top: 29%;
    right: -17%;
    width: 50%;
  }
}

@media (max-width: 900px) {
  .project-card__parallax-detail--crm-user,
  .project-card__parallax-detail--opshub-work,
  .project-card__parallax-detail--interviewer-questions,
  .project-card__parallax-detail--vision-product {
    display: none;
  }

  .project-card__parallax-detail--crm-account {
    top: 4%;
    right: 1%;
  }

  .project-card__parallax-detail--crm-dance {
    top: 17%;
    left: 63%;
  }

  .project-card__parallax-detail--crm-subscription {
    top: 10%;
  }

  .project-card__parallax-detail--opshub-filters {
    top: 2%;
    right: 2%;
    width: 22%;
  }

  .project-card__parallax-detail--opshub-new-ticket {
    top: 8%;
    right: 5%;
    width: 30%;
  }

  .project-card__parallax-detail--opshub-resolved {
    top: 16%;
    left: 31%;
    width: 26%;
  }

  .project-card__parallax-detail--interviewer-repeat {
    top: -1%;
    left: 71%;
    width: 27%;
  }

  .project-card__parallax-detail--interviewer-knowledge {
    top: 9%;
    left: 75%;
    width: 27%;
  }

  .project-card__parallax-detail--vision-cart {
    top: 6%;
    left: 22%;
    width: 20%;
  }

  .project-card__parallax-detail--vision-category {
    top: 6%;
    right: 1%;
    width: 21%;
  }

  .project-card__parallax-detail--vision-guarantee {
    top: 18%;
    right: 3%;
    width: 26%;
  }
}

@media (prefers-reduced-motion: reduce) {
  .project-card__parallax-detail {
    transform: none !important;
  }
}
</style>

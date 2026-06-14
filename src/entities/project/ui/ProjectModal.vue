<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted } from 'vue'
import { UiButton } from '@shared/ui'
import type { Project, ProjectLink } from '../model/types'

type ProjectModalProps = {
  project: Project
}

const props = defineProps<ProjectModalProps>()
const emit = defineEmits<{
  close: []
}>()

const closeModal = () => {
  emit('close')
}

const projectLinks = computed(() => {
  const linkOrder: Array<keyof Project['links']> = ['live', 'github', 'demo']

  return linkOrder
    .map((key) => props.project.links[key])
    .filter((link): link is ProjectLink => Boolean(link))
})

const modalTitleId = computed(() => `project-modal-title-${props.project.id}`)

let previousBodyOverflow = ''

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    closeModal()
  }
}

onMounted(() => {
  previousBodyOverflow = document.body.style.overflow
  document.body.style.overflow = 'hidden'
  window.addEventListener('keydown', handleKeydown)
})

onBeforeUnmount(() => {
  document.body.style.overflow = previousBodyOverflow
  window.removeEventListener('keydown', handleKeydown)
})
</script>

<template>
  <Teleport to="body">
    <div class="project-modal" @click.self="closeModal">
      <section
        class="project-modal__dialog"
        role="dialog"
        aria-modal="true"
        :aria-labelledby="modalTitleId"
      >
        <button
          class="project-modal__close"
          type="button"
          aria-label="Закрыть модалку"
          @click="closeModal"
        ></button>

        <div class="project-modal__video">
          <video
            v-if="project.videoUrl"
            :src="project.videoUrl"
            controls
            playsinline
          ></video>

          <div v-else class="project-modal__placeholder">
            <span>Видео демо</span>
            <p>Здесь вскоре появится ролик о проекте.</p>
          </div>
        </div>

        <div class="project-modal__body">
          <div class="project-modal__header">
            <span>{{ project.category }}</span>
            <h3 :id="modalTitleId">{{ project.title }}</h3>
          </div>

          <p class="project-modal__description">{{ project.fullDescription }}</p>

          <div v-if="projectLinks.length" class="project-modal__links">
            <UiButton
              v-for="link in projectLinks"
              :key="link.href"
              :href="link.href"
              :is-external="link.isExternal"
              size="sm"
              variant="ghost"
            >
              {{ link.label }}
            </UiButton>
          </div>

          <div class="project-modal__stack">
            <h4>Стек</h4>
            <ul>
              <li v-for="technology in project.stack" :key="technology">{{ technology }}</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  </Teleport>
</template>

<style scoped>
.project-modal {
  position: fixed;
  z-index: 1000;
  inset: 0;
  display: grid;
  place-items: center;
  padding: var(--container-padding);
  background: rgba(5, 5, 5, 0.78);
}

.project-modal__dialog {
  position: relative;
  width: min(100%, 920px);
  max-height: 90vh;
  overflow: auto;
  border: 1px solid var(--color-border-strong);
  border-radius: var(--radius-md);
  color: var(--color-text);
  background: var(--color-surface);
  box-shadow: var(--shadow-panel);
}

.project-modal__close {
  position: absolute;
  z-index: 2;
  top: var(--space-md);
  right: var(--space-md);
  width: 38px;
  height: 38px;
  border: 1px solid var(--color-border-strong);
  border-radius: var(--radius-sm);
  background: rgba(5, 5, 5, 0.72);
  cursor: pointer;
  transition:
    border-color var(--duration) var(--ease-out),
    background-color var(--duration) var(--ease-out);
}

.project-modal__close::before,
.project-modal__close::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 16px;
  height: 2px;
  border-radius: var(--radius-pill);
  background: var(--color-text);
}

.project-modal__close::before {
  transform: translate(-50%, -50%) rotate(45deg);
}

.project-modal__close::after {
  transform: translate(-50%, -50%) rotate(-45deg);
}

.project-modal__close:hover {
  border-color: var(--color-text-muted);
  background: rgba(248, 244, 236, 0.08);
}

.project-modal__video {
  min-height: 280px;
  aspect-ratio: 16 / 9;
  border-bottom: 1px solid var(--color-border);
  background:
    linear-gradient(135deg, rgba(240, 68, 52, 0.34), transparent 54%),
    var(--color-surface-warm);
}

.project-modal__video video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.project-modal__placeholder {
  display: grid;
  height: 100%;
  min-height: inherit;
  place-items: center;
  align-content: center;
  gap: var(--space-sm);
  padding: var(--space-lg);
  text-align: center;
}

.project-modal__placeholder span {
  color: var(--color-text);
  font-family: var(--font-display);
  font-size: clamp(34px, 5vw, 64px);
  font-weight: 700;
  line-height: 0.95;
}

.project-modal__placeholder p {
  max-width: 360px;
  margin: 0;
  color: var(--color-text-muted);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
}

.project-modal__body {
  display: grid;
  gap: var(--space-xl);
  padding: clamp(var(--space-lg), 4vw, var(--space-xl));
}

.project-modal__header {
  display: grid;
  gap: var(--space-sm);
}

.project-modal__header span {
  color: var(--color-text-muted);
  font-size: 12px;
  font-weight: 850;
  text-transform: uppercase;
}

.project-modal__header h3 {
  margin: 0;
  font-family: var(--font-display);
  font-size: clamp(40px, 6vw, 72px);
  font-weight: 700;
  line-height: 0.95;
  letter-spacing: 0;
}

.project-modal__description {
  max-width: 760px;
  margin: 0;
  color: var(--color-text-soft);
  font-size: 16px;
  font-weight: 500;
  line-height: 1.6;
}

.project-modal__links {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-xs);
}

.project-modal__stack {
  display: grid;
  gap: var(--space-md);
}

.project-modal__stack h4 {
  margin: 0;
  color: var(--color-text);
  font-size: 16px;
  font-weight: 800;
}

.project-modal__stack ul {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-xs);
  margin: 0;
  padding: 0;
  list-style: none;
}

.project-modal__stack li {
  padding: 7px 10px;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  color: var(--color-text-muted);
  background: rgba(248, 244, 236, 0.04);
  font-size: 12px;
  font-weight: 700;
  line-height: 1;
}

@media (max-width: 560px) {
  .project-modal {
    padding: var(--space-md);
  }

  .project-modal__video {
    min-height: 220px;
  }

  .project-modal__header h3 {
    font-size: clamp(34px, 10vw, 44px);
  }
}
</style>

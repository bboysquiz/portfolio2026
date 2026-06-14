<script setup lang="ts">
import { socialLinks } from '@entities/social-link'
import { UiContainer } from '@shared/ui'
</script>

<template>
  <section id="contacts" class="contact">
    <UiContainer size="wide">
      <div class="contact__intro">
        <h2>Связаться со&nbsp;мной</h2>

        <div class="contact__links">
          <a
            v-for="link in socialLinks"
            :key="link.id"
            :href="link.href"
            :target="link.isExternal ? '_blank' : undefined"
            :rel="link.isExternal ? 'noreferrer noopener' : undefined"
          >
            <span class="contact__link-content">
              <span class="contact__label">{{ link.label }}</span>
              <strong>{{ link.value }}</strong>
            </span>

            <svg
              class="contact__arrow"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M7 17L17 7"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8 7H17V16"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </UiContainer>
  </section>
</template>

<style scoped>
.contact {
  padding-block: var(--section-space-md);
  background: var(--color-bg);
}

.contact__intro {
  display: grid;
  gap: var(--space-lg);
  grid-template-columns: repeat(2, 1fr);
}

.contact__intro h2 {
  max-width: 760px;
  margin: 0;
  font-family: var(--font-display);
  font-size: clamp(44px, 6vw, 78px);
  font-weight: 700;
  line-height: 0.95;
  letter-spacing: 0;
  color: var(--color-text);
}

.contact__links {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
  max-width: 760px;
  margin-top: var(--space-lg);
}

.contact__links a {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-md);
  min-width: 0;
  padding: var(--space-md);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  background: rgba(248, 244, 236, 0.04);
  transition:
    border-color var(--duration) var(--ease-out),
    background-color var(--duration) var(--ease-out);
}

.contact__links a:hover {
  border-color: var(--color-border-strong);
  background: rgba(248, 244, 236, 0.07);
}

.contact__links a:hover .contact__arrow {
  color: var(--color-text);
  transform: translate(2px, -2px);
}

.contact__link-content {
  min-width: 0;
}

.contact__label {
  display: block;
  margin-bottom: var(--space-xs);
  color: var(--color-text-muted);
  font-size: 12px;
  font-weight: 850;
  text-transform: uppercase;
}

.contact__links strong {
  display: block;
  color: var(--color-text);
  font-size: 15px;
  line-height: 1.3;
  overflow-wrap: anywhere;
}

.contact__arrow {
  width: 20px;
  height: 20px;
  flex: 0 0 20px;
  color: var(--color-text-muted);
  transition:
    color var(--duration) var(--ease-out),
    transform var(--duration) var(--ease-out);
}

@media (max-width: 900px) {
  .contact__intro {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 560px) {
  .contact__intro h2 {
    font-size: clamp(36px, 10.5vw, 42px);
    line-height: 1;
  }
}
</style>

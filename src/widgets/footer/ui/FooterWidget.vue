<script setup lang="ts">
import { profile } from '@entities/profile'
import { UiContainer } from '@shared/ui'

const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <UiContainer size="wide">
      <div class="footer__inner">
        <p class="footer__name">{{ profile.nativeName }}</p>

        <div class="footer__bottom">
          <span>{{ currentYear }}</span>
        </div>
      </div>
    </UiContainer>
  </footer>
</template>

<style scoped>
.footer {
  padding-block: var(--space-2xl) var(--space-lg);
  overflow: hidden;
  background: var(--color-bg);
  border-top: 1px solid var(--color-border);
}

.footer__inner {
  display: grid;
  gap: var(--space-xl);
}

.footer__name {
  max-width: 100%;
  margin: 0;
  color: rgba(248, 244, 236, 0.05);
  font-family: var(--font-display);
  font-size: clamp(64px, 14vw, 126px);
  font-weight: 900;
  line-height: 0.8;
  letter-spacing: 0;
  text-transform: uppercase;
  white-space: nowrap;
}

.footer__bottom {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--space-lg);
  min-width: 0;
  color: var(--color-text-muted);
  font-size: 13px;
  font-weight: 650;
}

.footer__bottom > * {
  min-width: 0;
}

.footer__nav {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-md);
  max-width: 100%;
}

.footer__nav a {
  transition: color var(--duration) var(--ease-out);
}

.footer__nav a:hover {
  color: var(--color-text);
}

@media (max-width: 640px) {
  .footer__name {
    white-space: normal;
    overflow-wrap: anywhere;
  }

  .footer__bottom {
    width: 100%;
    max-width: 100%;
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space-md);
    overflow-wrap: anywhere;
  }

  .footer__nav a {
    overflow-wrap: anywhere;
  }
}
</style>

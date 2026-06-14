<script setup lang="ts">
type BadgeVariant = 'neutral' | 'accent' | 'success' | 'outline'
type BadgeSize = 'sm' | 'md'

type BadgeProps = {
  variant?: BadgeVariant
  size?: BadgeSize
  withDot?: boolean
}

withDefaults(defineProps<BadgeProps>(), {
  variant: 'neutral',
  size: 'sm',
  withDot: false,
})
</script>

<template>
  <span class="ui-badge" :class="[`ui-badge--${variant}`, `ui-badge--${size}`]">
    <span v-if="withDot" class="ui-badge__dot" aria-hidden="true"></span>
    <slot />
  </span>
</template>

<style scoped>
.ui-badge {
  display: inline-flex;
  width: max-content;
  max-width: 100%;
  align-items: center;
  gap: var(--space-xs);
  border: 1px solid transparent;
  border-radius: 4px;
  font-weight: 700;
  line-height: 1;
  letter-spacing: 0;
  white-space: nowrap;
}

.ui-badge--sm {
  min-height: 24px;
  padding: 0 9px;
  font-size: 12px;
}

.ui-badge--md {
  min-height: 30px;
  padding: 0 12px;
  font-size: 13px;
}

.ui-badge--neutral {
  color: var(--color-text-soft);
  background: rgba(248, 244, 236, 0.06);
  border-color: var(--color-border);
}

.ui-badge--accent {
  color: var(--color-focus);
  background: var(--color-accent-soft);
  border-color: var(--color-accent-border);
}

.ui-badge--success {
  color: #6ee7a8;
  background: rgba(34, 197, 94, 0.14);
  border-color: rgba(34, 197, 94, 0.36);
}

.ui-badge--outline {
  color: var(--color-text-muted);
  background: transparent;
  border-color: var(--color-border-strong);
}

.ui-badge__dot {
  width: 6px;
  height: 6px;
  flex: 0 0 6px;
  border-radius: var(--radius-pill);
  background: currentColor;
  box-shadow: 0 0 16px currentColor;
}
</style>

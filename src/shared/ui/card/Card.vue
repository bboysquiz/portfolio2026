<script setup lang="ts">
type CardVariant = 'default' | 'warm' | 'accent' | 'ghost'
type CardPadding = 'none' | 'sm' | 'md' | 'lg'
type CardTag = 'article' | 'aside' | 'div' | 'li' | 'section'

type CardProps = {
  as?: CardTag
  variant?: CardVariant
  padding?: CardPadding
  interactive?: boolean
}

withDefaults(defineProps<CardProps>(), {
  as: 'article',
  variant: 'default',
  padding: 'md',
  interactive: false,
})
</script>

<template>
  <component
    :is="as"
    class="ui-card"
    :class="[
      `ui-card--${variant}`,
      `ui-card--padding-${padding}`,
      { 'ui-card--interactive': interactive },
    ]"
  >
    <div v-if="$slots.media" class="ui-card__media">
      <slot name="media" />
    </div>
    <div v-if="$slots.header" class="ui-card__header">
      <slot name="header" />
    </div>
    <div v-if="$slots.default" class="ui-card__body">
      <slot />
    </div>
    <div v-if="$slots.footer" class="ui-card__footer">
      <slot name="footer" />
    </div>
  </component>
</template>

<style scoped>
.ui-card {
  position: relative;
  overflow: hidden;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  color: var(--color-text);
  background: var(--color-surface);
  box-shadow: var(--shadow-card);
}

.ui-card--warm {
  background:
    linear-gradient(180deg, rgba(240, 68, 52, 0.06), transparent 46%),
    var(--color-surface-warm);
}

.ui-card--accent {
  background:
    var(--ui-card-accent-glow, var(--gradient-card-glow)),
    var(--color-surface);
}

.ui-card--ghost {
  background: transparent;
  box-shadow: none;
}

.ui-card--interactive {
  transition:
    border-color var(--duration) var(--ease-out),
    transform var(--duration) var(--ease-out),
    box-shadow var(--duration) var(--ease-out);
}

.ui-card--interactive:hover {
  border-color: var(--color-border-strong);
  transform: translateY(-3px);
  box-shadow: var(--shadow-panel);
}

.ui-card--padding-none {
  padding: 0;
}

.ui-card--padding-sm {
  padding: var(--space-md);
}

.ui-card--padding-md {
  padding: var(--space-lg);
}

.ui-card--padding-lg {
  padding: clamp(var(--space-lg), 4vw, var(--space-xl));
}

.ui-card__media {
  margin: calc(var(--card-media-offset, 0px) * -1);
}

.ui-card__media:not(:last-child),
.ui-card__header:not(:last-child),
.ui-card__body:not(:last-child) {
  margin-bottom: var(--space-lg);
}

.ui-card__body {
  min-width: 0;
}

.ui-card__footer {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-sm);
  align-items: center;
}
</style>

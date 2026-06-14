<script setup lang="ts">
import { computed } from 'vue'

type ButtonVariant = 'coral' | 'dark' | 'light' | 'ghost' | 'soft'
type ButtonSize = 'sm' | 'md' | 'lg'
type ButtonType = 'button' | 'submit' | 'reset'

type ButtonProps = {
  href?: string
  type?: ButtonType
  variant?: ButtonVariant
  size?: ButtonSize
  isExternal?: boolean
  disabled?: boolean
  fullWidth?: boolean
  ariaLabel?: string
  download?: string | boolean
}

const props = withDefaults(defineProps<ButtonProps>(), {
  type: 'button',
  variant: 'dark',
  size: 'md',
  isExternal: false,
  disabled: false,
  fullWidth: false,
  ariaLabel: undefined,
  href: undefined,
  download: undefined,
})

const tagName = computed(() => (props.href ? 'a' : 'button'))
const target = computed(() => (props.href && props.isExternal ? '_blank' : undefined))
const rel = computed(() => (props.href && props.isExternal ? 'noreferrer noopener' : undefined))
const downloadAttribute = computed(() => {
  if (!props.href || !props.download) {
    return undefined
  }

  return props.download === true ? '' : props.download
})
</script>

<template>
  <component
    :is="tagName"
    class="ui-button"
    :class="[
      `ui-button--${variant}`,
      `ui-button--${size}`,
      { 'ui-button--full': fullWidth, 'ui-button--disabled': disabled },
    ]"
    :href="!disabled ? href : undefined"
    :type="tagName === 'button' ? type : undefined"
    :disabled="tagName === 'button' ? disabled : undefined"
    :aria-disabled="disabled || undefined"
    :aria-label="ariaLabel"
    :target="target"
    :rel="rel"
    :download="downloadAttribute"
  >
    <span v-if="$slots.iconLeft" class="ui-button__icon" aria-hidden="true">
      <slot name="iconLeft" />
    </span>
    <span class="ui-button__content">
      <slot />
    </span>
    <span v-if="$slots.iconRight" class="ui-button__icon" aria-hidden="true">
      <slot name="iconRight" />
    </span>
  </component>
</template>

<style scoped>
.ui-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-xs);
  width: max-content;
  max-width: 100%;
  border: 1px solid transparent;
  border-radius: var(--radius-sm);
  font-family: var(--font-body);
  font-weight: 700;
  line-height: 1;
  letter-spacing: 0;
  white-space: nowrap;
  cursor: pointer;
  user-select: none;
  transition:
    background-color var(--duration) var(--ease-out),
    border-color var(--duration) var(--ease-out),
    color var(--duration) var(--ease-out),
    transform var(--duration) var(--ease-out),
    box-shadow var(--duration) var(--ease-out);
}

.ui-button:hover {
  transform: translateY(-1px);
}

.ui-button:active {
  transform: translateY(0);
}

.ui-button:focus-visible {
  outline: 2px solid var(--color-focus);
  outline-offset: 3px;
}

.ui-button--sm {
  min-height: 34px;
  padding: 0 14px;
  font-size: 13px;
}

.ui-button--md {
  min-height: 42px;
  padding: 0 18px;
  font-size: 14px;
}

.ui-button--lg {
  min-height: 50px;
  padding: 0 22px;
  font-size: 15px;
}

.ui-button--coral {
  color: var(--color-text);
  background: var(--color-accent);
  border-color: var(--color-accent);
  box-shadow: var(--shadow-accent);
}

.ui-button--coral:hover {
  background: var(--color-accent-hover);
  border-color: var(--color-accent-hover);
}

.ui-button--coral:active {
  background: var(--color-accent-active);
  border-color: var(--color-accent-active);
}

.ui-button--dark {
  color: var(--color-text);
  background: var(--color-bg);
  border-color: rgba(248, 244, 236, 0.08);
}

.ui-button--dark:hover {
  background: var(--color-surface);
  border-color: var(--color-border-strong);
}

.ui-button--light {
  color: var(--color-text-inverse);
  background: var(--color-surface-inverse);
  border-color: var(--color-surface-inverse);
}

.ui-button--light:hover {
  background: #eee8db;
  border-color: #eee8db;
}

.ui-button--ghost {
  color: var(--color-text);
  background: transparent;
  border-color: var(--color-border-strong);
}

.ui-button--ghost:hover {
  background: rgba(248, 244, 236, 0.06);
}

.ui-button--soft {
  color: var(--color-text);
  background: rgba(248, 244, 236, 0.06);
  border-color: var(--color-border);
}

.ui-button--soft:hover {
  background: rgba(248, 244, 236, 0.1);
  border-color: var(--color-border-strong);
}

.ui-button--full {
  width: 100%;
}

.ui-button--disabled {
  pointer-events: none;
  opacity: 0.48;
}

.ui-button__content {
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
}

.ui-button__icon {
  display: inline-flex;
  width: 16px;
  height: 16px;
  flex: 0 0 16px;
  align-items: center;
  justify-content: center;
}

.ui-button__icon :deep(svg) {
  width: 100%;
  height: 100%;
}
</style>

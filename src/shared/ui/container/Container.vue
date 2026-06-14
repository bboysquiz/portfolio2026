<script setup lang="ts">
type ContainerSize = 'narrow' | 'content' | 'wide' | 'full'
type ContainerSpace = 'none' | 'sm' | 'md' | 'lg'
type ContainerTag = 'div' | 'footer' | 'header' | 'main' | 'section'

type ContainerProps = {
  as?: ContainerTag
  size?: ContainerSize
  space?: ContainerSpace
  noInlinePadding?: boolean
}

withDefaults(defineProps<ContainerProps>(), {
  as: 'div',
  size: 'content',
  space: 'none',
  noInlinePadding: false,
})
</script>

<template>
  <component
    :is="as"
    class="ui-container"
    :class="[
      `ui-container--${size}`,
      `ui-container--space-${space}`,
      { 'ui-container--no-inline-padding': noInlinePadding },
    ]"
  >
    <slot />
  </component>
</template>

<style scoped>
.ui-container {
  width: 100%;
  margin-inline: auto;
  padding-inline: var(--container-padding);
}

.ui-container--narrow {
  max-width: calc(var(--container-narrow) + var(--container-padding) + var(--container-padding));
}

.ui-container--content {
  max-width: calc(var(--container-content) + var(--container-padding) + var(--container-padding));
}

.ui-container--wide {
  max-width: var(--container-wide);
}

.ui-container--full {
  max-width: none;
}

.ui-container--no-inline-padding {
  padding-inline: 0;
}

.ui-container--space-sm {
  padding-block: var(--section-space-sm);
}

.ui-container--space-md {
  padding-block: var(--section-space-md);
}

.ui-container--space-lg {
  padding-block: var(--section-space-lg);
}
</style>

<script setup lang="ts">
import { computed } from 'vue'
import { skillGroups } from '@entities/skill'
import { UiCard, UiContainer } from '@shared/ui'

const primarySkills = computed(() =>
  skillGroups.flatMap((group) =>
    group.skills
      .filter((skill) => skill.isPrimary)
      .map((skill) => ({
        ...skill,
        groupTitle: group.title,
      })),
  ),
)
</script>

<template>
  <section id="skills" class="skills">
    <UiContainer size="wide">
      <div class="skills__layout">
        <div class="skills__intro">
          <h2>Стек технологий и&nbsp;навыки</h2>
          <p>
            Мой основной стек - Vue, JavaScript, TypeScript. Также&nbsp;есть опыт на других языках программирования&nbsp;и&nbsp;фреймворках.
          </p>
        </div>

        <UiCard class="skills__core" variant="accent" padding="lg">
          <div class="skills__core-header">
            <h3>Ключевой стек</h3>
          </div>

          <ul class="skills__core-list" aria-label="Основные навыки">
            <li v-for="skill in primarySkills" :key="`${skill.groupTitle}-${skill.name}`">
              <span>{{ skill.name }}</span>
            </li>
          </ul>
        </UiCard>

        <div class="skills__groups">
          <UiCard
            v-for="group in skillGroups"
            :key="group.id"
            class="skills__group"
            variant="default"
            padding="lg"
          >
            <div class="skills__group-heading">
              <h3>{{ group.title }}</h3>
            </div>

            <ul class="skills__list">
              <li
                v-for="skill in group.skills"
                :key="skill.name"
                :class="{ 'skills__item--primary': skill.isPrimary }"
              >
                <span>{{ skill.name }}</span>
              </li>
            </ul>
          </UiCard>
        </div>
      </div>
    </UiContainer>
  </section>
</template>

<style scoped>
.skills {
  padding-block: var(--section-space-md);
  background:
    radial-gradient(circle at 82% 14%, rgba(240, 68, 52, 0.08), transparent 28%),
    var(--color-bg);
}

.skills__layout {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--grid-gap);
  align-items: start;
}

.skills__layout > * {
  min-width: 0;
}

.skills__intro {
  position: sticky;
  top: var(--space-lg);
  display: flex;
  justify-content: space-between;
  gap: var(--space-lg);
  grid-column: 1 / -1;
  align-items: flex-end;
  margin-bottom: 40px;
}

.skills__intro h2 {
  max-width: 660px;
  margin: 0;
  font-family: var(--font-display);
  font-size: clamp(44px, 6vw, 78px);
  font-weight: 700;
  line-height: 0.95;
  letter-spacing: 0;
  color: var(--color-text);
  overflow-wrap: normal;
  word-break: normal;
}

.skills__intro p {
  max-width: 430px;
  margin: 0;
  color: var(--color-text-soft);
  font-size: 16px;
  font-weight: 550;
  line-height: 1.65;
}

.skills__core {
  min-width: 0;
  grid-column: 1 / 4;
}

.skills__core-header {
  display: flex;
  justify-content: space-between;
  gap: var(--space-lg);
  align-items: baseline;
  margin-bottom: var(--space-xl);
}

.skills__core-header span {
  color: var(--color-text-muted);
  font-size: 13px;
  font-weight: 850;
  text-transform: uppercase;
}

.skills__core-header strong {
  font-family: var(--font-display);
  font-size: clamp(42px, 6vw, 72px);
  line-height: 0.9;
  color: var(--color-text);
}

.skills__core-list,
.skills__list {
  margin: 0;
  padding: 0;
  list-style: none;
}

.skills__core-list {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: var(--space-sm);
}

.skills__core-list li {
  min-width: 0;
  padding: var(--space-md);
  border: 1px solid rgba(248, 244, 236, 0.12);
  border-radius: var(--radius-sm);
  background: rgba(5, 5, 5, 0.28);
}

.skills__core-list span,
.skills__list span {
  display: block;
  color: var(--color-text);
  font-weight: 800;
  line-height: 1.25;
}
.skills__list span {
  font-weight: 600;
}

.skills__core-list small,
.skills__list small {
  display: block;
  margin-top: var(--space-xs);
  color: var(--color-text-muted);
  font-size: 14px;
  font-weight: 650;
  line-height: 1.35;
}

.skills__groups {
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: var(--grid-gap);
}

.skills__group {
  min-width: 0;
}

.skills__group-heading {
  display: grid;
  gap: var(--space-sm);
  margin-bottom: var(--space-xl);
}
.skills__core-header h3 {
  margin: 0;
  font-family: var(--font-display);
  font-size: clamp(24px, 3vw, 34px);
  font-weight: 850;
  line-height: 1;
  letter-spacing: 0;
  color: var(--color-text);
}

.skills__group-heading h3 {
  margin: 0;
  font-family: var(--font-display);
  font-size: clamp(24px, 3vw, 34px);
  font-weight: 850;
  line-height: 1;
  letter-spacing: 0;
  color: var(--color-text);
}

.skills__group-heading p {
  margin: 0;
  color: var(--color-text-muted);
  font-size: 14px;
  font-weight: 600;
  line-height: 1.5;
}

.skills__list {
  display: grid;
}

.skills__list li {
  min-width: 0;
  padding-block: var(--space-sm);
  border-top: 1px solid var(--color-border);
}

.skills__list li:last-child {
  padding-bottom: 0;
}

.skills__item--primary span {
  color: var(--color-focus);
}

@media (max-width: 980px) {
  .skills__layout {
    grid-template-columns: 1fr;
  }

  .skills__intro {
    position: static;
  }

  .skills__groups {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 620px) {
  .skills__intro {
    display: grid;
    justify-content: stretch;
    align-items: start;
    gap: var(--space-md);
    margin-bottom: clamp(var(--space-xl), 10vw, var(--space-2xl));
  }

  .skills__intro h2 {
    max-width: 100%;
    font-size: clamp(28px, 8vw, 34px);
    line-height: 1.08;
  }

  .skills__intro p {
    max-width: 100%;
    font-size: 15px;
    font-weight: 400;
    line-height: 1.65;
  }

  .skills__core-list,
  .skills__groups {
    grid-template-columns: 1fr;
  }
}
</style>

<script setup lang="ts">
import { workExperience } from '@entities/experience'
import { UiCard, UiContainer } from '@shared/ui'
</script>

<template>
  <section id="experience" class="experience">
    <UiContainer size="wide">
      <div class="experience__header">
        <div>
          <h2>Коммерческий опыт в компании АИСА</h2>
        </div>
        <p>
          Здесь собраны внутренние корпоративные проекты, над которыми я работал в компании АИСА.
        </p>
      </div>

      <div class="experience__timeline">
        <UiCard
          v-for="item in workExperience"
          :key="item.id"
          class="experience__item"
          padding="lg"
          variant="warm"
        >
          <div class="experience__job">
            <div class="experience__meta">
              <div class="experience__period">{{ item.period }}</div>
              <p class="experience__company">{{ item.company }}</p>
            </div>

            <h3>{{ item.role }}</h3>
            <p class="experience__summary">{{ item.summary }}</p>
          </div>

          <div class="experience__projects">
            <article
              v-for="project in item.projects"
              :key="project.title"
              class="experience-project"
            >
              <div class="experience-project__head">
                <span>{{ project.description }}</span>
                <h4>{{ project.title }}</h4>
              </div>

              <ul class="experience-project__stack" aria-label="Стек проекта">
                <li v-for="technology in project.stack" :key="technology">{{ technology }}</li>
              </ul>

              <ul class="experience-project__achievements">
                <li v-for="achievement in project.achievements" :key="achievement">
                  {{ achievement }}
                </li>
              </ul>
            </article>
          </div>
        </UiCard>
      </div>
    </UiContainer>
  </section>
</template>

<style scoped>
.experience {
  padding-block: var(--section-space-md);
  background: var(--color-bg);
}

.experience__header {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(280px, 430px);
  gap: var(--grid-gap);
  align-items: end;
  margin-bottom: var(--space-2xl);
}

.experience__header > * {
  min-width: 0;
}

.experience__header div {
  display: grid;
  gap: var(--space-lg);
}

.experience__header h2 {
  max-width: 820px;
  margin: 0;
  font-family: var(--font-display);
  font-size: clamp(44px, 6vw, 78px);
  font-weight: 700;
  line-height: 0.95;
  letter-spacing: 0;
  color: var(--color-text);
}

.experience__header p {
  margin: 0;
  color: var(--color-text-soft);
  font-size: 15px;
  font-weight: 550;
  line-height: 1.65;
}

.experience__timeline {
  display: grid;
  gap: var(--grid-gap);
}

.experience__item {
  min-width: 0;
}

.experience__job {
  display: grid;
  justify-items: start;
  padding-bottom: var(--space-xl);
  border-bottom: 1px solid var(--color-border);
}

.experience__meta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--space-md);
}

.experience__period {
  width: max-content;
  max-width: 100%;
  padding: 8px 11px;
  border: 1px solid var(--color-accent-border);
  border-radius: var(--radius-sm);
  color: var(--color-focus);
  background: var(--color-accent-soft);
  font-size: 13px;
  font-weight: 850;
  line-height: 1;
}

.experience__job h3 {
  max-width: 980px;
  margin: var(--space-xl) 0 0;
  font-family: var(--font-display);
  font-size: clamp(32px, 4vw, 56px);
  font-weight: 900;
  line-height: 0.95;
  letter-spacing: 0;
}

.experience__company {
  margin: 0;
  color: var(--color-focus);
  font-size: 16px;
  font-weight: 800;
}

.experience__summary {
  max-width: 820px;
  margin: var(--space-lg) 0 0;
  color: var(--color-text-soft);
  font-size: 15px;
  font-weight: 550;
  line-height: 1.65;
}

.experience__projects {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: var(--grid-gap);
  margin-top: var(--space-xl);
}

.experience-project {
  min-width: 0;
  padding: var(--space-xl);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  background: rgba(5, 5, 5, 0.26);
}

.experience-project__head {
  display: grid;
  gap: var(--space-sm);
}

.experience-project__head span {
  color: var(--color-text-muted);
  font-size: 12px;
  font-weight: 850;
  text-transform: uppercase;
}

.experience-project__head h4 {
  margin: 0;
  font-family: var(--font-display);
  font-size: clamp(30px, 4vw, 48px);
  font-weight: 900;
  line-height: 0.95;
  letter-spacing: 0;
}

.experience-project__stack,
.experience-project__achievements {
  margin: 0;
  padding: 0;
  list-style: none;
}

.experience-project__stack {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-xs);
  margin-top: var(--space-xl);
}

.experience-project__stack li {
  padding: 7px 10px;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  color: var(--color-text-muted);
  background: rgba(248, 244, 236, 0.04);
  font-size: 12px;
  font-weight: 700;
  line-height: 1;
}

.experience-project__achievements {
  display: grid;
  gap: var(--space-sm);
  margin-top: var(--space-xl);
}

.experience-project__achievements li {
  position: relative;
  padding-left: var(--space-lg);
  color: var(--color-text-soft);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.55;
}

.experience-project__achievements li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.65em;
  width: 6px;
  height: 6px;
  border-radius: var(--radius-pill);
  background: var(--color-accent);
}

@media (max-width: 980px) {
  .experience__header,
  .experience__projects {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 560px) {
  .experience__header h2 {
    font-size: clamp(36px, 10.5vw, 42px);
    line-height: 1;
  }

  .experience__job {
    padding-bottom: var(--space-xl);
  }

  .experience__job h3,
  .experience-project__head h4 {
    font-size: clamp(30px, 10vw, 38px);
    line-height: 1;
  }

  .experience-project {
    padding: var(--space-md);
  }
}
</style>

<script setup lang="ts">
import { UiContainer } from '@shared/ui'
</script>

<template>
  <section id="about" class="about">
    <UiContainer size="wide">
      <div class="about__content">

        <div class="about__main">
          <p class="about__text">
            Привет, меня зовут Никита - Фронтенд веб разработчик. Добро пожаловать на мой сайт
            портфолио! Я владею широким стеком и у меня много опыта в разработке.
          </p>

          <div class="about__stats" aria-label="Ключевые показатели">
            <p>
              <strong>3+</strong>
              <span>года опыта</span>
            </p>

            <p>
              <strong>60+</strong>
              <span>выполненных проектов</span>
            </p>
          </div>
        </div>
      </div>
    </UiContainer>
  </section>
</template>

<style scoped>
.about {
  padding-block: clamp(72px, 8vw, 112px);
  background: var(--color-bg);
}

.about__content {
  display: grid;
  margin-left: 25%;
  align-items: start;
}

.about__content > * {
  min-width: 0;
}

.about__aside {
  margin: 0;
  max-width: 260px;
  color: var(--color-text);
  font-size: clamp(17px, 1.32vw, 20px);
  font-weight: 500;
  line-height: 1.45;
  letter-spacing: 0;
}

.about__main {
  min-width: 0;
  max-width: 680px;
}

.about__text {
  margin: 0;
  color: var(--color-text);
  font-size: clamp(27px, 2.2vw, 34px);
  font-weight: 500;
  line-height: 1.42;
}

.about__stats {
  display: flex;
  justify-content: flex-start;
  gap: 75px;
  margin-top: var(--space-xl);
  padding-top: var(--space-xl);
  border-top: 1px solid var(--color-border-strong);
}

.about__stats p {
  margin: 0;
  color: var(--color-text);
}

.about__stats strong {
  display: block;
  margin-bottom: var(--space-xs);
  font-family: var(--font-display);
  font-size: clamp(38px, 3.4vw, 46px);
  font-weight: 850;
  line-height: 1;
}

.about__stats span {
  color: var(--color-text-muted);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.3;
}

@media (max-width: 900px) {
  .about__content {
    grid-template-columns: 1fr;
    row-gap: var(--space-xl);
  }

  .about__aside,
  .about__main {
    max-width: 680px;
  }
}

@media (max-width: 560px) {
  .about__aside {
    font-size: 18px;
  }

  .about__text {
    font-size: clamp(22px, 6vw, 26px);
  }

  .about__stats {
    grid-template-columns: 1fr;
    gap: var(--space-lg);
  }
}
</style>

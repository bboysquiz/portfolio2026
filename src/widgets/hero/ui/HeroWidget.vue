<script setup lang="ts">
import { UiButton } from '@shared/ui'
import heroBackgroundImage from '@shared/assets/images/hero/hero-background.jpg'
import profileImage from '@shared/assets/images/profile/profile.jpg'
</script>

<template>
  <section id="home" class="hero" :style="{ backgroundImage: `url(${heroBackgroundImage})` }">
    <div class="hero__media" aria-hidden="true">
      <img :src="profileImage" alt="Никита Сквирский" />
    </div>

    <div class="hero__content">
      <p class="hero__name">Никита Сквирский</p>

      <UiButton href="#contacts" class="hero__contact" size="sm" variant="dark">
        Contact me
      </UiButton>

      <h1 class="hero__title">Фронтенд разработчик</h1>

      <UiButton
        href="/cv/nikita-skvirskii-cv.docx"
        download="Nikita-Skvirskii-CV.docx"
        class="hero__cv"
        size="md"
        variant="dark"
      >
        Скачать резюме
        <template #iconRight>
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M12 3v12m0 0 5-5m-5 5-5-5"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M5 21h14"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </template>
      </UiButton>

    
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  min-height: var(--hero-min-height);
  background-color: var(--color-hero-bg);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

.hero__media {
  position: absolute;
  inset-block: 0;
  left: 50%;
  width: min(100%, var(--container-wide));
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
}

.hero__media img {
  width: auto;
  height: 100%;
  max-width: none;
  flex: 0 0 auto;
}

.hero__content {
  position: relative;
  z-index: 1;
  min-height: var(--hero-min-height);
  max-width: var(--container-wide);
  margin-inline: auto;
  padding: clamp(var(--space-lg), 4.4vw, 56px) var(--container-padding)
    clamp(var(--space-xl), 5vw, 72px);
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(260px, 360px);
  grid-template-rows: auto 1fr auto;
  gap: var(--space-xl);
}

.hero__name,
.hero__title {
  margin: 0;
  color: var(--color-text);
}

.hero__name {
  align-self: start;
  font-family: var(--font-display);
  font-size: 14px;
  font-weight: 850;
  line-height: 1;
}

.hero__contact {
  justify-self: end;
}

.hero__cv {
  grid-column: 2;
  grid-row: 3;
  align-self: end;
  justify-self: end;
}

.hero__title {
  grid-column: 1;
  grid-row: 3;
  align-self: end;
  max-width: 760px;
  font-family: var(--font-display);
  font-size: clamp(58px, 7vw, 104px);
  font-weight: 700;
  line-height: 1.04;
  letter-spacing: 0;
}

.hero__intro {
  grid-column: 2;
  grid-row: 3;
  align-self: end;
  display: grid;
  gap: var(--space-md);
  max-width: 360px;
}

.hero__intro p {
  margin: 0;
  color: var(--color-text);
  font-size: 16px;
  font-weight: 650;
  line-height: 1.45;
}

.hero__intro :deep(.ui-button) {
  justify-self: start;
}

@media (max-width: 960px) {
  .hero__content {
    grid-template-columns: minmax(0, 1fr) auto;
  }

  .hero__title,
  .hero__intro {
    grid-column: 1 / -1;
  }

  .hero__title {
    grid-row: 3;
  }

  .hero__cv {
    grid-column: 1 / -1;
    grid-row: 4;
    justify-self: start;
  }

  .hero__intro {
    grid-row: 4;
    max-width: 520px;
  }

  .hero__media {
    justify-content: flex-end;
  }

  .hero__media img {
    width: auto;
    max-width: none;
  }
}

@media (max-width: 640px) {
  .hero__content {
    min-height: 660px;
    padding: var(--space-lg);
    gap: var(--space-lg);
  }

  .hero__title {
    font-size: clamp(36px, 10vw, 46px);
  }

  .hero__intro {
    font-size: 14px;
  }
}
</style>

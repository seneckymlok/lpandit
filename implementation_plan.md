# Implementation Plan - Spiritual Design Refinement

## Goal Description
Transform the website into a "sacred space" by shifting the mood to be mystical and meditative. This involves a deep color palette, "incense smoke" animations, and a "ritualistic" scroll reveal experience.

## User Review Required
> [!NOTE]
> **Design Direction**: The layout remains the same. The focus is purely on *feel*—colors, textures, and motion.
> **Motion Philosophy**: "Slow, smooth, ease-out". No bouncy effects.

## Proposed Changes

### 1. Design System Updates
#### [MODIFY] [tailwind.config.js](file:///Users/yskid/Downloads/pandit-main/tailwind.config.js)
-   **Colors**: Introduce `mystic-indigo` (#1a103c), `temple-maroon` (#2d0f12), `deep-purple` (#180d2b) as base backgrounds.
-   **Animations**: Add `fade-in-up` (slow), `pulse-glow` (subtle).
-   **Typography**: Define "sacred-text" utility with looser tracking and leading.

#### [MODIFY] [src/index.css](file:///Users/yskid/Downloads/pandit-main/src/index.css)
-   Add a global background texture (noise/paper) to `body`.
-   Set the default background color to a deep, rich tone (e.g., very dark indigo/brown) instead of white/neutral.

### 2. Core Effects & Components
#### [NEW] [ScrollReveal.tsx](file:///Users/yskid/Downloads/pandit-main/src/components/ScrollReveal.tsx)
-   A wrapper component using `framer-motion`.
-   Effect: Elements slowly fade in and float up as they enter the viewport.
-   Props: `delay`, `duration` (default to slow, e.g., 1.2s).

#### [MODIFY] [SpiritualAmbience.tsx](file:///Users/yskid/Downloads/pandit-main/src/components/SpiritualAmbience.tsx)
-   **Refine**: Change particles to be softer, slower, "smoke-like" (using blur or opacity gradients).
-   **Add**: A subtle "aurora" or moving gradient background layer.

### 3. Component Refinements

#### [MODIFY] [ProductHero.tsx](file:///Users/yskid/Downloads/pandit-main/src/components/ProductHero.tsx)
-   **Background**: Use the new deep color/gradient.
-   **Animation**: Text reveals should be staggered and slow.
-   **Image**: Add a "sacred aura" glow behind the main image.

#### [MODIFY] [FeaturedCollection.tsx](file:///Users/yskid/Downloads/pandit-main/src/components/FeaturedCollection.tsx)
-   **Cards**: Update hover effect to be a "soft glow" (box-shadow) and slight scale, rather than a sharp lift.
-   **Grid**: Wrap items in `ScrollReveal` for sequential appearance.

#### [MODIFY] [DeepDive.tsx](file:///Users/yskid/Downloads/pandit-main/src/components/DeepDive.tsx)
-   **Theme**: Ensure it flows seamlessly with the new global dark theme.
-   **Interactions**: Make the element cards feel like "lighting a diya" on hover (warm glow).

#### [MODIFY] [App.tsx](file:///Users/yskid/Downloads/pandit-main/src/App.tsx)
-   Apply the new background classes.
-   Ensure `SpiritualAmbience` is visible over the dark background.

## Verification Plan
-   **Visual Check**: Does it feel "fast" or "techy"? If yes, slow down durations.
-   **Atmosphere**: Do the colors feel "sacred" (deep, rich) vs "corporate" (stark white/black)?
-   **Flow**: Does scrolling feel like a journey/ritual?

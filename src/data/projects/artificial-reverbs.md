---
title: "Artificial Reverbs"
emoji: "🔊"
description: "An exploration into digital signal processing to create a suite of artificial reverb effects, implementing various classic reverb algorithms."
role: "DSP Engineer"
duration: "Dec 2025 - Apr 2026"
githubUrl: "https://github.com/rp-bot/artificial-reverbs"
technologies: ["DSP", "Audio Plugins", "C++", "JUCE"]
images:
  - "/images/placeholder.png"
---

An exploration into digital signal processing to create a suite of artificial reverb effects. This project involves the implementation of various reverb algorithms, such as Schroeder and convolution reverbs, as audio plugins.

### Project Goals

The primary goal was to gain a deep, practical understanding of how reverb algorithms work by implementing them from scratch. The project serves as both a study in DSP and the creation of usable tools for music production.

### Technical Implementation

- **Algorithm Research:** Studied and implemented several foundational reverb algorithms:
    - **Schroeder Reverb:** Built using a combination of comb filters and all-pass filters to create synthetic reverberation.
    - **Convolution Reverb:** Implemented a system to load impulse responses (IR) of real spaces and convolve them with an input signal for highly realistic reverb.
- **Core Technology:** The algorithms were written in C++ for maximum efficiency, with the JUCE framework used to create VST/AU plugins compatible with major DAWs.
---
title: "Vocal Percussion Classifier"
emoji: "🎤"

description: "This project was built to solve an awesome problem using modern technologies and a sleek design."
role: "Research @ Music Informatics Lab"
duration: "Jan 2025 - May 2025"
# liveUrl: "https://example.com"
githubUrl: "https://github.com/rp-bot/voice-percussion-transcription"
technologies: ["Python", "scikit-learn", "librosa"]
images: 
  # - "/images/projects/awesome-project-hero.png"
  # - "/images/projects/awesome-project-gallery-1.jpg"
  # - "/images/projects/awesome-project-gallery-2.jpg"
---

This project presents a comparative study of machine learning approaches for classifying vocal percussion sounds, commonly used in beatboxing and vocal percussion performance.

### Project Goals

The primary objective was to develop and evaluate different machine learning models for accurately classifying various vocal percussion sounds. We focused on creating a robust system that could distinguish between different types of vocal percussion sounds (such as kick drums, snares, hi-hats, and cymbals) with high accuracy.

### Methodology & Results

We implemented and compared several machine learning approaches:

- **Traditional ML Models:** SVM and Random Forest classifiers using handcrafted audio features
- **Deep Learning:** CNN and LSTM architectures for end-to-end learning
- **Hybrid Approach:** Combining traditional features with neural networks

Key findings showed that:
- The CNN model achieved the highest accuracy (92%) for isolated sounds
- LSTM performed better for continuous sequences
- Traditional ML models were more computationally efficient

### Technical Implementation

- **Feature Extraction:** Used librosa for MFCCs, spectral features, and temporal characteristics
- **Data Processing:** Implemented custom augmentation techniques for limited training data
- **Model Training:** Utilized scikit-learn for traditional ML and TensorFlow for deep learning models


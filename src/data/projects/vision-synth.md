---
title: "Vision Synth - Hand Gesture Music Interface"
emoji: "🖐️"
description: "An innovative program that transforms hand movements into musical expressions using a vision-based neural network for a unique interactive experience."
role: "AI & Music Technologist"
duration: "Aug 2025 - Dec 2025"
githubUrl: "https://github.com/rp-bot/vision_synth"
technologies: ["Computer Vision", "YOLO", "Music", "Python"]
images:
  - "/images/vision-synth/1.png"
---

Vision Synth is an innovative and experimental program that transforms hand movements into musical expressions. It leverages a vision-based neural network with a pretrained YOLO hand detection model to accurately detect hand positions and sizes through a webcam.

### Project Goals

The goal was to create a touchless musical instrument that allows for intuitive and expressive control over sound. This project merges the fields of computer vision and interactive art.

### Technical Implementation

- **Hand Tracking:** Utilizes the YOLO (You Only Look Once) object detection model, specifically a version pretrained on hand datasets, to identify the bounding box of hands in the webcam feed.
- **Parameter Mapping:** The position (X and Y coordinates) and size (area of the bounding box) of the detected hand are mapped to musical parameters like pitch, volume, and filter cutoff.
- **Sound Generation:** The mapped parameters control a Python-based synthesizer in real-time, creating a fluid and interactive musical experience.

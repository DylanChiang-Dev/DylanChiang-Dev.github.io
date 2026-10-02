---
title: "AI-Assisted Music and Visual Production Workflow"
summary: "AI-assisted composition, MIDI and score preparation, instrument rendering, depth-parallax animation, and audiovisual assembly, with production details and a small processed notation excerpt."
date: 2026-10-02
authors:
  - admin
tags:
  - AI Collaboration
  - Human-in-the-loop
  - Music Visualization
  - Creative Tools
featured: true
draft: false
image:
  filename: score-process-excerpt.png
  preview_only: true
  alt_text: "A cropped notation excerpt from AI-assisted music production, with details blurred."
  caption: "A cropped and blurred production-stage notation example."
---

## Practice overview

This practice connects AI-assisted composition, electronic scores, performance rendering, image generation, and programmatic animation. My work covered creative direction, musical and visual choices, audiovisual revision, workflow integration, and output checks. Rather than simply combining finished music and images, the workflow first establishes editable notes and a timeline, then handles performance, visuals, and post-production separately.

<!--more-->

## What I worked on

### 1. Composition planning and multitrack musical data

I used large language models to assist with melody, harmony, form, orchestration, and composition code, then evaluated proposals and directed revisions through listening. The code organizes notes as multitrack MIDI and exports sections, measures, and onset information for notation and visual production.

Revisions address notes, orchestration, dynamics, and articulation separately instead of regenerating an entire audio track each time. I compare voices and timbres, adjust entrances, figures, or transitions, and feed those decisions back into the note data.

### 2. Electronic scores and performance rendering

I converted note data to MusicXML and used MuseScore Studio to organize parts, instrument names, dynamics, articulations, and page layout. MIDI and notation share the same note source, with consistency checks across parts, measures, and notes.

During listening tests, MuseSounds rendered orchestral parts, while Salamander Grand Piano V3 supported piano comparisons. Checks addressed whether articulations actually sounded as intended, sustained notes ended prematurely, and parts connected and balanced naturally. Python and FFmpeg supported rendering, audio processing, and comparisons.

### 3. Audio post-production and separation of stages

Editable notation and instrument rendering first supported orchestration decisions. I then used Suno Studio for final-track re-rendering, reverb, and mastering, making listening-based choices about timbre, space, and sectional dynamics.

Composition data, listening renders, and the final audio track are separate stages. Checking notation data does not establish a note-by-note match with the final audio. The production account retains these distinctions instead of treating all audio work as a single model-generated result.

### 4. Image generation and depth-parallax animation

GPT Image produced character references, scenes, and local character assets, with prompts organized for different shots. Depth Anything V2 Small estimated scene depth; WebGL layer compositing and parallax then enabled camera movement and relative foreground–background motion.

Code handled local motion frame by frame, including small character movements, blinking, brightness changes, and environmental animation. I also compared Stable Diffusion/LCM-LoRA, p5.brush, and three.js approaches. The selected route combined generated imagery with depth parallax and local animation, rather than using the 3D prototype as the final version.

### 5. Audiovisual timing and video output

Sections, measures, and note onsets guided visual events, followed by adjustments to camera, subtitle, and animation pacing. The note-event timeline provides a production-time reference; final audio replacement and assembly are separate steps, not the same verification task.

FFmpeg combined H.264 video at 1920×1080 and 30 fps with 48 kHz stereo AAC audio. Output checks covered complete decoding, with comparison records retained for audio replacement.

### 6. Translating audiovisual issues into concrete revisions

- **Timbre and entrances**: When a quiet instrument texture obscured another part, I revised entry order and dynamics instead of simply raising the overall level.
- **Decay and musical figures**: I addressed interval clashes caused by long soft-mallet decay through changes to note density and selection.
- **Notation and articulation mapping**: I distinguished note-content issues from how a renderer interprets glissando or legato markings before choosing which layer to revise.
- **Animation and shot continuity**: I checked motion direction, local actions, and clipping, removed unnatural effects, and revised visual pacing.

## Workflow and limited excerpt

{{< figure src="workflow.en.svg" alt="A generic AI-assisted production workflow: creative direction, musical judgment, editable materials, rendering and listening, visual integration, and revision and checks." caption="A generic workflow illustration, separate from the processed excerpt of actual notation below." >}}

{{< figure src="score-process-excerpt.png" alt="A cropped production-stage score excerpt showing two measures of two parts, without a title, author, or page number; note details are blurred." caption="Score-preparation excerpt: two measures and two parts only, cropped to remove the title, identity, and page context, with details blurred. This production-stage sample is neither a complete score nor a note-by-note transcription of the final audio." >}}

This page presents actual production work and a small processed excerpt. It does not disclose the work's title, story, full music, complete score, or finished video, and offers no downloads of the original work or editable music files.

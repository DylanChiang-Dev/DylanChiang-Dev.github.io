---
title: "AI-Assisted Music and Visual Production Workflow"
summary: "AI-assisted composition, MIDI and score preparation, instrument rendering, depth-parallax animation, and audiovisual assembly, with production details and selected images supplied by the creator."
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
  filename: visual-production-still.png
  preview_only: true
  alt_text: "An AI-assisted visual-production still showing a character by a window, with warm interior light contrasted against the night outside."
  caption: "A selected visual-production still supplied by the creator."
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

{{< figure src="workflow.en.svg" alt="A generic AI-assisted production workflow: creative direction, musical judgment, editable materials, rendering and listening, visual integration, and revision and checks." caption="A generic workflow illustration. The images below were supplied by the creator to show selected production material." >}}

{{< figure src="visual-production-still.png" link="/project/ai-music-visual-workflow/visual-production-still.png" target="_blank" alt="A creator-supplied visual-production still combining a character, warm window-side lighting, a night scene, and on-screen text." caption="Visual-production example: a selected frame supplied by the creator, with its original image content retained. Click to view at full size." >}}

{{< figure src="notation-production-excerpt.png" link="/project/ai-music-visual-workflow/notation-production-excerpt.png" target="_blank" alt="A clear score excerpt supplied by the creator, showing multiple instrument parts, notes, dynamics, and articulation markings." caption="Score-preparation example: the clear excerpt supplied by the creator, without additional cropping or blur. Click to view at full size. This is a limited score fragment, not a complete score or a note-by-note transcription of the final audio." >}}

This page presents the production workflow and selected images approved by the creator. It does not disclose the work's title, full music, complete score, or finished video, and offers no downloads of the complete work or editable music files.

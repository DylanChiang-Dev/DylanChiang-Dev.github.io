---
title: "Paper reading: Does Reinforcement Learning Really Incentivize Reasoning Capacity in LLMs Beyond the Base Model?"
summary: "Explore the real effect of reinforcement learning and verifiable rewards (RLVR) in improving LLM reasoning capabilities"
date: 2025-11-22
authors:
  - admin
tags:
  - "Paper reading"
  - Large Language Models
  - Reinforcement Learning
  - "reasoning ability"
  - RLVR
draft: false
---
#paper information

**Title**: Does Reinforcement Learning Really Incentivize Reasoning Capacity in LLMs Beyond the Base Model?
**Source**: arXiv
**Paper ID**: 2504.13837
**Link**: [arXiv](https://arxiv.org/abs/2504.13837) | [PDF](https://arxiv.org/pdf/2504.13837)

---

## Research background

Reinforcement Learning with Verifiable Rewards (RLVR) has recently achieved significant success in improving the inference performance of large language models, especially on mathematics and programming tasks.

Conventional wisdom holds that RLVR enables LLMs to continuously improve themselves, thereby acquiring new reasoning capabilities beyond the base model—just as traditional RL helps agents explore and learn new strategies.

But is this assumption really true?

This study attempts to answer a key question by systematically exploring the boundaries of the reasoning capabilities of RLVR-trained LLMs in various scenarios:

**Does RLVR training actually allow LLMs to acquire new reasoning capabilities beyond the base model? **

---

## Research methods

### Evaluate Design
The research team uses **pass@k (at large k values)** as an evaluation metric across multiple dimensions:
- **Model Family**: multiple different LLM architectures
- **RL Algorithms**: six popular RLVR algorithms
- **Benchmarks**: Mathematics, Programming, Visual Reasoning

### Analysis method
1. **Pass@k Evaluation**: Use large k values to detect the upper bound on the model’s capabilities
2. **Coverage Analysis** (Coverage Analysis): Measure whether the RLVR training model can produce solutions that the basic model cannot produce
3. **Perplexity Analysis** (Perplexity Analysis): Evaluate whether the output of the RLVR training model is still within the distribution of the basic model

---

## Main findings

### 1. Current training settings fail to inspire fundamentally new inference patterns

Surprising core findings:

- ✅ **Small k value (such as k=1)**: RLVR training model is **better than** the base model
- ❌ **Large k value**: The basic model instead obtains a **higher** pass@k score

**What does this mean? **

RLVR training mainly focuses on "selecting" the existing capabilities of the basic model, rather than creating new reasoning models. It's like learning to pick the right tool faster from a toolbox already full of tools, but it doesn't create new tools.

### 2. Inference capabilities are limited by the basic model

Through coverage analysis and perplexity analysis, the study found:

- Observed reasoning ability **derived** from** and **limited** by the underlying model
- Treating the basic model as an upper bound of capability, six popular RLVR algorithms perform similarly
- All methods are far from optimal in exploiting the full potential of the underlying model

**Basic model is the ceiling** - No matter how trained, RLVR cannot make the model jump out of the capability boundary defined by the basic model.

### 3. Distillation methods show different advantages

In contrast, **Knowledge Distillation** (Distillation) exhibits different characteristics:

- Ability to introduce **new reasoning modes** from the teacher model
- **Truly expands** the reasoning capabilities of your model
- Don't just rearrange existing knowledge

This hints at an important methodological difference: distillation can "teach" the model new reasoning paths, while RLVR is only "optimizing choices."

---

## Research significance and inspiration

### Reflections on RL in the field of LLM

This study reveals a fundamental limitation of current RLVR methods:

> **Current RLVR training paradigms have yet to realize the potential of RL to inspire truly novel reasoning capabilities in LLMs. **

This is a far cry from what we've come to expect from RL. In traditional RL domains (such as game AI), RL can discover strategies that humans have never thought of. But in the field of LLM, the current RLVR method seems to be only "mining" rather than "creating".

### Future research directions

Research highlights the need to improve the RL paradigm:

1. **Continuous Scaling** (Continual Scaling)
   - Long-term, continuous training process
   - Rather than a one-time optimization
2. **Multi-turn Agent-Environment Interaction** (Multi-turn Agent-Environment Interaction)
   - Truly interactive learning
   - instead of training on static data sets

3. **New Assessment Paradigm**
   - Pass@k (big k) instead of just looking at pass@1
   - A more comprehensive assessment of capability boundaries

---

## My understanding

After reading this paper, my biggest feeling is: this is really a "slap in the face" paper. In the past year, RLVR has been highly praised in the LLM field. OpenAI's o1 and DeepSeek's R1 both claim to use reinforcement learning to make the model "learn to think." But this study tells us calmly: Wait, are you sure the model really learned something new? Or have you simply learned to pick the right answers faster from the toolbox you already have?

### 1. "Selector" vs "Creator": A cruel truth

I think the core insight of this paper is to position RLVR as a "selector" rather than a "capability expander". This may sound a bit abstract, but it's actually pretty easy to understand. Imagine you have a student who already has many ways to solve the problem (basic model) in his mind, but he is not sure which method is best, so he tries randomly. RLVR training is like giving him a lot of practice questions, allowing him to learn "use this method when he sees this kind of question", which improves his answering accuracy (pass@1).

But the problem is, if you give this student many opportunities to try (pass@k, big k), he will be able to try out the correct answer by "trial and error". The RLVR training didn't teach him any new problem-solving methods, it just made him find the right one faster. This is why when pass@k is large, the basic model performs better - because it still retains more diverse trial possibilities, and the model after RLVR training has been "finalized" and will only give priority to those paths with high rewards during the training process.

This finding is actually cruel, because it means that many of the "improvements in reasoning" we have seen in the past year may be just superficial.

### 2. The basic model is the ceiling: where should investments be placed?

This paper made me rethink resource allocation. If the basic model is the ceiling of capabilities, then should the industry invest more resources in pre-training instead of various fancy parameter adjustments for RLVR?

The current trend is that everyone is desperately thinking about how to use less data and more clever reward shaping to do RLVR. But this research tells us that no matter how optimized you are, you cannot escape the capabilities of the basic model. So instead of finessing on RLVR, wouldn't it be more practical to directly train a stronger basic model?

Of course, this is not to say that RLVR is completely useless. In the pass@1 scenario (which is the most common situation in practical applications), RLVR can indeed significantly improve performance. But we have to clearly understand its essence: it is an "optimizer" rather than an "expander".

### 3. Enlightenment of knowledge distillation: Why can it do what RLVR cannot?

The paper mentioned that knowledge distillation can introduce new reasoning patterns, which made me very curious. Why does distillation work but RLVR not?

My understanding is that distillation is essentially "knowledge transfer" - you learn "new ways of thinking" from a stronger teacher model. This is true expansion of capabilities. RLVR only "self-optimizes" within its own capabilities without the injection of external knowledge.

This makes me think that perhaps the truly effective training paradigm in the future should be a combination of "distillation + RLVR": first use distillation to expand the boundaries of capabilities, and then use RLVR to optimize the quality of decision-making. Relying on RLVR alone to allow the model to "emerge" new capabilities may be an unrealistic expectation.

### 4. Pass@k’s philosophy: What exactly are we evaluating?

This paper also reminded me of the importance of evaluation methods. We are accustomed to using pass@1 to evaluate the model because it is closest to the real application scenario. But pass@1 may give us an overly optimistic illusion.

Pass@k (big k) reveals the "capability boundary" of the model - the upper limit of what it "might" get right. And pass@1 just tells us what the model would "normally" do. The gap between the two is what RLVR is doing: narrowing the distance between "possible" and "usual".

But if we only look at pass@1, we will mistakenly think that RLVR really makes the model smarter. In fact, the "ceiling" of the model has not increased, only the "average performance" has increased. This distinction is important.

### 5. Thinking about the future: What does true reasoning require?

After reading this paper, I feel that the current RLVR paradigm may have been designed wrong from the beginning. We treat LLM as a "static policy space" and then use RL to optimize policy selection. But real reasoning shouldn't be like this.
Real reasoning should be "dynamic, interactive, and continuous learning." Just like humans do not learn to think through problem solving exercises, but develop reasoning abilities through long-term interaction with the world, trial and error, and reflection. The "multiple rounds of agent-environment interaction" mentioned in the paper may be the right direction.

Maybe what we need is not to use RL to train the model, but to use RL to let the model "live" in an environment and truly explore, make mistakes, learn, and grow. That is the essence of RL, not the current "pseudo RL" done on static data sets.

### 6. A disturbing question

Finally, this paper made me think of a deeper question: If RLVR cannot make the model truly smart, then what is going on with these o1 models that claim to have "reasoning capabilities"?

There are two possibilities: First, their basic models are already very powerful, and RLVR just exploits this potential; second, they use some techniques that are not covered in this paper (such as chain-of-thought, test-time compute scaling).

In any case, this study reminds us: Don’t be fooled by superficial performance improvements, but think deeply about the essential source of capabilities. This is important for both doing research and making products.

---

## Extended thinking

### 1. RLVR vs. Knowledge Distillation: What is the essential difference?

- Why can distillation introduce new patterns?
- What is the fundamental difference between the two in the training process?
- Can the advantages of both be combined?

### 2. The importance of evaluation methods

- What does the difference between Pass@1 vs. Pass@k (big k) reveal?
- Are we overly reliant on a single metric to assess model capability?
- What other dimensions of assessment can be explored?

### 3. The role of the basic model

- Is it more worthwhile to invest in better base model training vs. more sophisticated RLVR methods?
- Where can we improve Pre-training?
- How is the "capability boundary" of the basic model formed?

---

## Related resources

- [arXiv paper page](https://arxiv.org/abs/2504.13837)
- [PDF Download](https://arxiv.org/pdf/2504.13837)

---

**Reading date**: 2025-11-22
**Notes organized**: Dylan Chiang
---
title: "Paper reading: Aegaeon - Efficient GPU pooling technology for concurrent LLM services on the market"
summary: "The Aegaeon system deployed by Alibaba Cloud Model Market achieves 82% GPU resource savings through token-level automatic expansion, and supports a single GPU to serve up to 7 models at the same time."
date: 2025-10-22
authors:
  - admin
tags:
  - "AI"
  - "System optimization"
  - "GPU computing"
  - "LLM reasoning"
  - "decentralized system"
  - "research paper"
image:
  caption: "GPU pooling technology architecture diagram"
---
I recently read an important paper "Aegaeon: Effective GPU Pooling for Concurrent LLM Serving on the Market" that will be published in SOSP '25. This research, completed by Peking University and Alibaba Group, proposes a revolutionary multi-model LLM service system, which greatly improves GPU resource utilization efficiency.

## Research background and challenges

### Resource waste problem in the model market

With the rapid development of large-scale language models, model marketplaces such as Hugging Face now host over a million models. However, there is a serious waste of resources in the actual production environment:

- **Obvious long tail effect**: 94.1% of models receive only 1.35% of requests
- **Uneven Resource Allocation**: 17.7% of the GPU is used to serve a "cold" model that averages less than 0.2 requests per second
- **Difficult to cope with burst loads**: "Hot" models (such as DeepSeek, Llama, Qwen) face request bursts and may exceed reserved resources

### Limitations of existing solutions

Existing GPU pooling solutions mainly fall into two categories:

1. **Multiplexing**: Limited by GPU memory capacity, supports up to 2-3 models/GPU
2. **Auto-scaling**: Expanding at the request level, there is a head blocking (HOL) problem

## Aegaeon’s Core Innovation

### Token level automatic expansion

The biggest innovation of Aegaeon is the token-level automatic expansion mechanism, which is in contrast to the request-level expansion of existing solutions:

**Request Level Expansion**: Must wait for the entire request to complete before switching models
**Token level extension**: models can be switched predictively during token generation

### Separate scheduling architecture

Aegaeon divides the GPU pool into two partitions:

1. **Prefill instance**: Specially handles the initial processing of input prompts
2. **Decoding instance**: specifically handles subsequent token generation

This separation avoids the complexity of unified scheduling and enables more balanced resource utilization.

### Scheduling strategy

**Prefill phase scheduling**:
- Adopt grouped FCFS (First-Come-First-Serve) strategy
- Group requests for the same model, maximum group size is 8
- Prioritize loading into existing groups to reduce over-expansion

**Decoding phase scheduling**:
- Use Weighted Round-Robin strategy
- Assign time quotas based on SLO requirements
- Utilize output buffering to hide latency

## System optimization technology

### Component Reuse

Aegaeon significantly reduces initialization overhead by reusing inference engine components:
- Distributed actuators (Ray, NCCL)
- Analyze and optimize components
- Tokenizer
- Memory pool

### Explicit memory management

**Self-managed VRAM buffer**:
- Allocate all necessary VRAM at once
- Use bump allocation strategy to avoid fragmentation
- Bypass the allocation mechanism of the tensor library

**Unified KV Cache**:
- Using slab allocation technology
- Maintain dedicated pool for each shape of KV cache
- Effectively manage memory fragmentation

### Fine-grained KV cache synchronization

Implementing asynchronous KV cache transfers using CUDA events:
- `cudaEventRecord`: Log transfer events
- `cudaEventQuery`: Query completion status
- `cudaStreamWaitEvent`: synchronized execution sequence

## Experimental results and performance evaluation

### End-to-end performance

Test results on the ShareGPT dataset:

- **RPS = 0.1**: Aegaeon supports 70 models, 2x more than ServerlessLLM
- **RPS = 0.5**: Aegaeon achieves 2.5x higher request arrival rate
- **Single GPU Efficiency**: Supports up to 7 models/GPU

### Performance under strict SLO

Even under stricter SLO requirements:
- **0.5× SLO**: still supports 50% more models than the baseline solution
- **0.3× SLO**: 12.5% more models supported

### Automatic expansion speed

- Near-instant scaling (via prefetching) 50% of the time
- Expansion completes within 1 second in other cases
- KV cache transfer overhead per request is less than 1 second

## Production environment deployment

### Deployment scale

Aegaeon has been tested and deployed in Alibaba Cloud Model Studio for three months:

- **GPU Scale**: 213 H20 GPUs
- **Number of models**: 47 models (28 1.8-7B, 19 32-72B)
- **Resource Savings**: Reduced from 1,192 GPUs to 213 (82% savings)

### Actual performance improvement

GPU utilization improved from an average of 13.3%∼33.9% to 48.1%, with no SLO violations or service interruptions observed during the 70 hours of monitoring.

## Summary of technical contributions

1. **Revealing for the first time** the excessive cost problem of concurrent LLM services in the market
2. **The first token-level automatic expansion** multi-model service solution
3. **First comprehensive optimization** Predictive automatic expansion process, reducing overhead by 97%
4. **Real production deployment verification**, proving the ability to significantly reduce OPEX

## Future development direction

Although Aegaeon has made breakthrough progress, there is still room for improvement in the following areas:

- Support larger model clusters
- Optimize performance in extremely low latency scenarios
- Explore combinations with multiplexing technology
- Expand to more diverse hardware platforms

## Conclusion

Aegaeon represents an important milestone in the design of LLM inference systems. Through token-level automatic expansion and full-stack optimization, it not only solves the resource waste problem faced by the model market, but also provides a technical foundation for the sustainable development of cloud AI services.

---

## 📄 Paper information

- **Paper Title**: Aegaeon: Effective GPU Pooling for Concurrent LLM Serving on the Market
- **Authors**: Yuxing Xiang, Xue Li, Kun Qian, Yufan Yang, Diwen Zhu, Wenyuan Yu, Ennan Zhai, Xuanzhe Liu, Xin Jin, Jingren Zhou
- **Institution**: Peking University, Alibaba Group
- **Conference**: ACM SIGOPS 31st Symposium on Operating Systems Principles (SOSP '25)
- **Year of Publication**: 2025
- **DOI**: https://doi.org/10.1145/3731569.3764815
- **PDF link**: [https://dl.acm.org/doi/pdf/10.1145/3731569.3764815](https://dl.acm.org/doi/pdf/10.1145/3731569.3764815)
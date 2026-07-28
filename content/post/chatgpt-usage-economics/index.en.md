---
title: "Paper reading: How People Use ChatGPT - In-depth analysis of the ChatGPT usage behavior of 700 million users around the world"
summary: "A research team from OpenAI, Duke University, and Harvard University published the first large-scale usage behavior study based on internal ChatGPT data. The study analyzed 26 billion messages from 700 million users from November 2022 to July 2025 through a privacy-preserving automated classification system, revealing ChatGPT usage patterns, demographic changes, and how generative AI creates economic value."
date: 2025-11-04
authors:
  - admin
tags:
  - "AI"
  - "large language model"
  - ChatGPT
  - "economics research"
  - "user behavior"
  - "decision support"
  - OpenAI
  - "Generative AI"
  - "work efficiency"
image:
  caption: "Schematic diagram of ChatGPT growth trends and usage model changes"
---
I recently read the important research paper "How People Use ChatGPT" from the research team of OpenAI, Duke University and Harvard University. This is the first large-scale usage behavior study based on internal data of ChatGPT. Through innovative privacy protection methods, the study analyzed 26 billion messages from 700 million users from the launch of ChatGPT in November 2022 to July 2025, revealing the actual usage patterns and economic value of generative AI.

## Research methods and data

### Privacy-protecting automated classification system

The biggest technical highlight of this research is its privacy protection method:

**Automated classification process**:
- Automatically analyze message content using LLM classifier, humans never view the original message
- First remove sensitive information through PII cleaning tools
- Only aggregated results are analyzed, any query must return a combination of at least 100 users

**Classification Category**:
- **WORK/NON-WORK USE**: Based on whether the message is related to paid work
- **Conversation Topics**: 24 subcategories, summarized into 7 major themes
- **Interaction intent**: Asking, Doing, Expressing
- **WORK ACTIVITIES**: 332 intermediate-level work activities based on O*NET system

### Data sample

- **Main Sample**: Random sample of 1.1 million conversations from May 2024 to June 2025
- **User Sample**: A subset of approximately 130,000 users used for demographic analysis
- **Exclusion Conditions**: Users who have not logged in, users under 18 years old, users who have deleted their accounts, and users who have opted out of training

## 📈 1. Growth and structure: explosive growth of non-work purposes

### Overall growth data

**User size**:
- July 2025: **700 million weekly active users** (approximately 10% of the global adult population)
- Average daily message volume: **2.5 billion** (29,000 messages per second)
- Growth rate: The fastest spreading technology in history, surpassing all precedents

### Non-work usage increases faster

**Core Finding**: Non-work-related uses are growing much faster than work uses.

| Time point | Non-work messages | Proportion | Work messages | Proportion | Total |
|--------|------------|------|----------|------|------|
| June 2024 | 238 million | 53% | 213 million | 47% | 451 million |
| June 2025 | 1.911 billion | 73% | 716 million | 27% | 2.627 billion |

**Key Insights**:
- Non-work messages increased **8 times** (238%), work messages increased **3.4 times** (236%)
- In June 2025, non-work use accounted for **73%**, which is absolutely dominant
- This change mainly comes from changes in the usage patterns of existing users rather than changes in the composition of new users

### Use dynamic evolution of topics

**Three mainstream uses** (accounting for nearly 80% of total use):

1. **Practical Guidance**: long-term stability at about 29%
   - Tutorial teaching (accounting for 36% of practical guidelines)
   - How-to suggestions (accounting for 30% of practical guidance)
   - Creative ideas

2. **Writing**: 36% → 24% (decline within one year)
   - But it is still the **first largest category** in work use (about 40%)
   - The management/business group has a higher usage ratio (>50%)
   - **Key findings**: About 2/3 of the writing uses are to modify the text provided by users (editing, criticizing, translating, summarizing) rather than creating from scratch

3. **Seeking Information**: 14% → 24% (rapid increase)
   - Search for specific people, events, products, recipes and more
   - Become a **closer alternative** to web search

**Other theme variations**:

- **Technical Help**: 12% → ~5%
  - Programming related accounted for only 4.2%, significantly lower than expected
  - May switch to IDE plug-ins, professional programming tools or API scenarios

- **Multimedia**: 2% → >7%
  - Short-term jump after the image generation function is launched in April 2025
  - Subsequent pullback but maintains higher baseline

## 💼 2. Work scenarios and tasks: AI as a decision support system

### Writing: The common mother task of white-collar workers

Among work-related messages, **writing accounts for about 40%** and is the most important work purpose:

**Career Differences**:
- Management/Business: **52%** of work-related news is writing
- Education/Medical: **49-50%**
- Computer related: **Relatively low**, more emphasis on technical assistance

**Content Analysis**:
- About **2/3** of writing requests are to revise existing text (editing, criticizing, translating, summarizing)
- About **1/3** is created from scratch (new emails, briefings, proposals, etc.)
- This explains the high satisfaction and steady growth of writing applications: the risks are manageable and can be directly integrated into existing workflows

### Work activity analysis based on O*NET

A study mapping work messages to the U.S. Department of Labor’s O*NET work activity system found:

**Seven major work activities cover approximately 77% of all messages**:

| Activity Categories | All News | Work News | Features |
|----------|----------|----------|------|
| Get information | 19.3% | 6.7% | Focus more on professional information in work settings |
| Interpret information for others | 13.1% | 7.3% | Collaboration and knowledge transfer |
| Record/documented information | 12.8% | 13.2% | **The first category of work scenarios** |
| Providing consultation and advice | 9.2% | 3.1% | Professional service core |
| Creative thinking | 9.1% | 9.3% | Problem solving and innovation |
| Decision-making and problem-solving | 8.5% | 10.6% | **The second largest category of work scenarios** |
| Working with computers | 4.9% | 7.7% | Technology-intensive jobs |

**High homogeneity across occupations**:

Regardless of management, engineering, education, medical or administrative occupations, the **top 5 work activities are almost the same**:
1. Obtain information
2. Decision-making and problem-solving
3. Record/Documentation
4. Think creatively
5. Explain information to others

This shows that ChatGPT’s value creation model in different occupations is highly consistent.

## 🎯 3. Interaction type and experience: transformation from execution to thinking

### Asking/Doing/Expressing Framework

The study divided user intent into three categories and found significant trend changes:

**Overall Distribution** (May 2024):
- **Asking**: 49% - Seeking information or advice to help make decisions
- **Doing**: 40% - Request to complete a specific task
- **Expressing**: 11% - Expressing opinions or feelings

**Trend Change** (to June 2025):
- **Asking**: 51.6% (↑)
- **Doing**: 34.6% (↓)
- **Expressing**: 13.8% (↑)

**Differences in work scenarios**:
- Asking: 35%
- Doing: 56% (about 75% is writing tasks)
- Expressing: 9%

### Experience quality analysis

**Overall Satisfaction Growth**:
- Positive/negative review ratio: from about **3:1** → **4:1**
- Experience quality is highly related to usage intention

**Positive rating by topic**:
- **Self-expression**: Highest (good/bad ratio >7)
- **Multimedia**: Lower (about 1.7)
- **Technical Help**: Low (~2.7)

**Classification by Intent**:
- The satisfaction level of **Asking** is significantly higher than that of Doing and Expressing
- This is consistent with the core value of "helping thinking and decision-making"

## 👥 4. Ethnicity and diffusion: from elite tools to universal applications

### The disappearance of gender differences

**Amazing transformation**:
- **Early** (end of 2022): ~80% of active users have typically male names
- **June 2025**: 48% (slightly more female)

**Theme Preference Differences**:
- **Female User**: Prefer writing and practical guidance
- **Male Users**: More technical assistance, information search and multimedia

### Age structure

**Young user-led**:
- News that **18-25 years old** contributes nearly **46%**
- The older the age, the higher the proportion of work purposes (except those aged 66+)

### Geographical diffusion: Counterattack by low- and middle-income countries

**GDP vs Adoption Rate**:
- Countries with GDP per capita of **10,000-40,000 US dollars** have the fastest growth rate
- Between 2024 and 2025, low- and middle-income countries will achieve leapfrog growth
- Overturned the traditional model of "AI technology first popularized in developed countries"

### Education and career: The advantages of higher education and higher income

**Academic impact**:
- The higher the academic qualifications, the higher the proportion of work purposes
  - <Bachelor's degree: 37%
  - Bachelor's degree: 46%
  - Graduate students: 48%
- Users with higher education are more likely to use the **Asking** mode (decision support)

**Career Differences**:
- Computer related: 57% for work purposes
- Management/Business: 50%
- Engineering/Science: 48%
- Other majors: 44%
- Non-professional: 40%
## 🔥 8 interesting/counterintuitive findings

### 1. Non-work usage far exceeds expectations
- **73%** of messages are not for work purposes
- The economic benefits of home production/personal decision-making support may be **significantly underestimated**
- Collis and Brynjolfsson estimate annual consumer surplus in the United States alone to be **$97 billion**

### 2. Programming accounts for only 4.2%
- Completely inconsistent with the stereotype of "AI = programming"
- A large number of program auxiliary tasks have been transferred to **IDE plug-ins, professional tool chains, and API scenarios**

### 3. Writing ≠ Generating from scratch
- **Mostly "modify your text"** (editing, criticizing, translating, summarizing)
- This explains the steady growth of satisfaction and adoption rates: risks are controllable and can be directly integrated into the work process

### 4. Asking trend is rising
- More and more users regard ChatGPT as a **decision support system** rather than a ghostwriting tool
- The satisfaction level of Asking messages is significantly higher than that of Doing messages

### 5. The proportion of women has increased and overtaken
- From 80% male users to a balanced ratio of men and women
- Display product **affinity and scene diversity improvement**

### 6. Solid education/training use cases
- About **10%** of all messages are teaching/tutoring
- Accounting for **36%** of "Practical Guidelines", demand is stable

### 7. High degree of isomorphism across professions
- Regardless of industry, the essence comes back to "information → understanding → decision-making"
- The value of AI lies in **shortening the closed loop of thinking**, rather than just doing menial work

### 8. Experience data supports values
- Asking's positive rating is significantly higher than Doing's
- In line with the core need of "help me think clearly first"

## 💡 Strategic inspiration for business/education/products

### Content and service design

**1. Focus on "modifying/improving the original text"**
- Proofreading, rewriting, translating, summarizing, and formatting
- Easier to implement and be trusted than "generating from scratch"
- **Market Positioning**: Writing enhancement tool rather than authoring tool

**2. "Consultative process" for decision support**
- Understand demand constraints and preferences first
- Provide plans and risk assessment
- **Applicable scenarios**:
  - Policy briefing
  - Project evaluation
  - Purchase price comparison
  - Compilation of key legal issues

### Function priority

**Writing Enhancement Kit**:
- Multilingual translation + style templates
- One-click "Vocal Tonality Calibration"
- Industry-specific vocabularies and formats

**Asking Assistant**:
- Decision trees and situational branches
- Display of questionable evidence (citations/calculations/assumptions)
- Risk warning and hypothesis testing

**Knowledge Workflow**:
- Fetch → Extract → Archive → Compare → Decision Memo
- Tandem tools rather than point solutions

### Market expansion strategy

**Geographic expansion**:
- **Low-price + offline-friendly** solution for low- and middle-income markets
- Because these areas are growing fastest

**Vertical Industry**:
- **Education Line**: Tutoring/lesson tutoring templates (10% share of stable demand)
- **Enterprise Services**: Meeting Minutes → Decision Form Automation

### Monetization and ROI

**Personal User**:
- Writing, revision and translation are high-frequency + urgent needs
- Easy transfer to paid subscriptions

**Enterprise Customers**:
- Decision support can take the B2B consultant value-added route
- Compliance summary, risk reminder, and professional report generation

## 🔬 Methods and Credibility Assessment

### Research Advantages

**1. Unprecedented data scale**
- 700 million users, 26 billion messages
- Global sample rather than single country

**2. Innovative privacy protection methods**
- Automatic classification by LLM, humans never view the original content
- Data Clean Room aggregated analysis
- Exclude combinations with <100 people to protect privacy

**3. Multi-dimensional classification system**
- Work/non-work, topics, intentions, work activities
- Solid theoretical foundation (O*NET system)

### Classifier verification

Study to verify classifier performance on WildChat public data set:

| Task | Human-machine consistency (κ) | Description |
|------|---------------|------|
| Work/Non-Work | 0.83 | Excellent |
| Asking/Doing/Expressing | 0.74 | Good |
| Conversation Topics | 0.56 | Moderate |
| O*NET Work Activities | 0.47 | Moderate (332 Category Complex) |
| Interaction quality | 0.14 | Poor (highly subjective) |

**Key Findings**:
- Excellent performance in objective classification (work/non-work)
- Subjective classification (quality assessment) is more difficult, but still captures directional signals
- Positive correlation with user thumb rating

### Research limitations

**1. Sample bias**
- Exclude users who are not logged in or under 18 years old
- May underestimate the proportion of young users and casual users

**2. Classification accuracy**
- LLM classifier still misjudges
- Especially categories with blurred boundaries

**3. Causal inference**
- Mainly descriptive statistics
- The causal mechanisms of changes in usage patterns still require further study

## Summary and Outlook

This research provides us with **first-hand, unprecedented scale of empirical data** on the use of ChatGPT. The most important findings are:

**1. From work tools to life assistants**: Non-work uses have become dominant, reflecting that the value of generative AI far exceeds work efficiency improvements

**2. The value of decision support**: The rise of Asking model (decision support) shows that the core value of AI lies in **improving the quality of decision-making**

**3. Achievement of popularization**: Gender differences disappear and geographical diffusion accelerates, indicating that the technology has overcome initial adoption barriers

**4. Consistency across domains**: Similar usage patterns across professions point to the potential of AI as a general cognitive tool

This research not only reveals the real-life use of ChatGPT, but also provides an important foundation for understanding the long-term impact of generative AI on the economy and society. As AI technology continues to develop, we need to continue to pay attention to the evolution of these usage models to maximize AI's contribution to human well-being.

---

**Paper Information**:
- **Title**: How People Use ChatGPT
- **Authors**: Aaron Chatterji (OpenAI/Duke), Tom Cunningham (OpenAI), David Deming (Harvard), Zoë Hitzig (OpenAI/Harvard), Christopher Ong (OpenAI/Harvard), Carl Shan (OpenAI), Kevin Wadman (OpenAI)
- **Institution**: OpenAI, Duke University, Harvard University
- **Published**: September 15, 2025
- **Paper address**: https://cdn.openai.com/pdf/a253471f-8260-40c6-a2cc-aa93fe9f142e/economic-research-chatgpt-usage-paper.pdf
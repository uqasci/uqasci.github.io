# ASCI Lab Website – Contributor Guide

We are eager to have more content up on the website. The team can contribute in many different ways — your publications, relevant theories and measures, blog posts inspired by our reading group or otherwise, and news posts about conferences and other lab updates.

For simplicity, all changes are made through GitHub itself. Please be careful when making changes so you don't accidentally cause something to break — but no worries if something goes wrong, we can always fix it! 🙂

**Live site:** [uqasci.github.io](https://uqasci.github.io)  
**Questions?** Contact Saumya at s.pareek@uq.edu.au

---

## Contents

- [Login & Setup](#login--setup)
- [General Editing Steps](#general-editing-steps)
- [Adding a Publication](#adding-a-publication)
- [Adding a Theory or Measure](#adding-a-theory-or-measure)
- [Adding a Blog Post](#adding-a-blog-post)
- [Adding a News Post](#adding-a-news-post)
- [Tips & Rules](#tips--rules)

---

## Login & Setup

1. Sign into your GitHub account
2. You have been invited to the `uqasci` organisation — accept the invite via the email GitHub sent you
3. Go to: [github.com/uqasci/uqasci.github.io](https://github.com/uqasci/uqasci.github.io)

---

## General Editing Steps

For **any** edit, the process is the same:

1. Navigate to the file on GitHub
2. Click the **pencil icon** (Edit this file) in the top right of the file view
3. Make your changes
4. Scroll down and click **Commit changes**
5. Write a short description of what you changed (e.g. "Added paper")
6. Click **Commit changes** again

The site will automatically rebuild and go live within ~2 minutes.

---

## Adding a Publication

📄 **File:** `_bibliography/papers.bib`  
🔗 **Direct link:** [Open papers.bib on GitHub](https://github.com/uqasci/uqasci.github.io/blob/main/_bibliography/papers.bib)

### Step 1: Get your BibTeX entry

Go to your paper on **Google Scholar, doi2bib.org** etc., and get your BibTex. 
It will look something like this:

```bibtex
@article{pareek2024effect,
  title     = {Effect of explanation conceptualisations on trust in AI-assisted credibility assessment},
  author    = {Pareek, Saumya and Van Berkel, Niels and Velloso, Eduardo and Goncalves, Jorge},
  journal   = {Proceedings of the ACM on Human-Computer Interaction},
  volume    = {8},
  number    = {CSCW2},
  pages     = {1--31},
  year      = {2024},
  publisher = {ACM New York, NY, USA}
}
```

### Step 2: Add optional fields (recommended)

Enhance your entry with any of these before adding it:

```bibtex
doi       = {10.1145/3686904},   % DOI without https://doi.org/ prefix
abstract  = {Your abstract here},
preview   = {pareek2024.jpg},    % Thumbnail image filename (see Step 4)
```

### Step 3: Add a thumbnail image (optional but looks nice)

1. Find a good figure from your paper — a diagram, result, etc
2. Save it as a JPG or PNG, named clearly e.g. `pareek2024.jpg`
3. Go to [assets/img/publications/](https://github.com/uqasci/uqasci.github.io/tree/main/assets/img/publications) on GitHub
4. Click **Add file → Upload files** and upload your image


### Step 3: Add to the .bib file

1. Open [papers.bib](https://github.com/uqasci/uqasci.github.io/blob/main/_bibliography/papers.bib) on GitHub
2. Click the pencil icon to edit
3. Paste your BibTeX entry at the **top** of the file (newest papers first)
4. Commit the changes



---

## Adding a Theory or Measure

📄 **File:** `_pages/theories.md`  
🔗 **Direct link:** [Open theories.md on GitHub](https://github.com/uqasci/uqasci.github.io/blob/main/_pages/theories.md)

Copy one of the existing cards and fill in your details:

```html
<div class="theory-card">
  <h4>Name of Theory or Scale</h4>
  <p class="theory-meta">Author(s), Year · Field (e.g. Social Psychology / HCI)</p>
  <p>A 2–3 sentence description of what this theory or scale is and perhaps
  why it is relevant to the lab's work.</p>
  <div class="theory-links">
    <a href="https://doi.org/XXXXXXX" target="_blank">📄 Original Paper</a>
  </div>
</div>
```

**Where to paste it:**
- **Theory or framework** → paste inside the first `<div class="theory-section">` block, after the last `</div>` card but before the closing `</div>` of the section
- **Measurement scale** → paste inside the second `<div class="theory-section">` block, same rule

**Example:**

```html
<div class="theory-card">
  <h4>Cognitive Load Theory</h4>
  <p class="theory-meta">Sweller, 1988 · Cognitive Science</p>
  <p>Proposes that learning and performance are constrained by working memory 
  capacity. Relevant to understanding how AI interfaces should minimise 
  unnecessary mental effort during decision-making tasks.</p>
  <div class="theory-links">
    <a href="https://doi.org/10.1207/s15516709cog1202_4" target="_blank">📄 Original Paper</a>
  </div>
</div>
```

---

## Adding a Blog Post

📁 **Folder:** `_posts/`  
🔗 **Direct link:** [Open \_posts/ on GitHub](https://github.com/uqasci/uqasci.github.io/tree/main/_posts)


### Step 1: Create the file on GitHub

1. Go to [\_posts/](https://github.com/uqasci/uqasci.github.io/tree/main/_posts) on GitHub
2. Click **Add file → Create new file**
3. Type the filename, including .md at the end. Files **must** follow this exact format:

```
YYYY-MM-DD-short-title-with-hyphens.md
```

Example:
```
2025-05-20-reading-group-trust-calibration.md
```

### Step 2: Copy this template and fill it in

```markdown
---
layout: post
title: "Your Post Title Here"
date: 2025-05-20
description: A one sentence summary shown on the blog listing page.
tags: [reading-group, theme1, theme2]
categories: blog
---

Write your post content here in plain text.

## You can use headings

And **bold**, *italic*, and [links](https://example.com).

## Key Takeaways

- Point one
- Point two
- Point three
```

### Step 3: Commit the file when you want to save changes. 

---

## Adding a News Post

📁 **Folder:** `_posts/`  
🔗 **Direct link:** [Open \_posts/ on GitHub](https://github.com/uqasci/uqasci.github.io/tree/main/_posts)

News posts are for conference announcements, awards, new lab members, and other updates. They appear on the **News** tab.

### Step 1: Create the file on GitHub

1. Go to [\_posts/](https://github.com/uqasci/uqasci.github.io/tree/main/_posts) on GitHub
2. Click **Add file → Create new file**
3. Type the filename, including .md at the end. Files **must** follow this exact format:

```
YYYY-MM-DD-short-title-with-hyphens.md
```

Example:
```
2027-05-20-visiting-chi2027.md
```

### Step 2: Copy this template

The only difference from a blog post is `categories: news`:

```markdown
---
layout: post
title: "Title here"
date: 2025-06-10
description: ABC will present their work at...
tags: [news, conference, tag2]
categories: news
---

Body of news goes here.
```


---

## Tips & Rules

- ✅ The site rebuilds automatically — wait ~2 minutes after committing, then refresh the live site
- ✅ Newest publications go at the **top** of `papers.bib`
- ✅ For DOIs, use format `10.xxxx/xxxxx` — don't include `https://doi.org/`
- ✅ Post filenames must start with a date: `YYYY-MM-DD-title.md`
- ⚠️ Don't delete anything you didn't add yourself
- ⚠️ Try to avoid touching files other than the ones listed in this guide
- ⚠️ If something breaks or looks wrong, contact Saumya — it can always be fixed!
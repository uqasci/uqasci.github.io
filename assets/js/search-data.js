// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "Home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "Publications by lab members",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-news",
          title: "News",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-theories-amp-measures",
          title: "Theories &amp; Measures",
          description: "A curated repository of theories, frameworks, and measurement scales used and recommended by the ASCI Lab.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/theories/";
          },
        },{id: "post-human-oversight-is-not-enough-reflections-from-hcomp-2026-on-the-risks-of-ai-assisted-decision-making",
        
          title: "Human Oversight Is Not Enough: Reflections from HCOMP 2026 on the Risks of...",
        
        description: "Asking “Is there a human in the loop?” is not enough — we also need to ask whether that human is cognitively equipped to provide meaningful oversight.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/hcomp26-reflection-update/";
          
        },
      },{id: "post-designing-the-oversight-hotzenplotz-as-we-become-humans-in-the-loop-what-becomes-of-our-work",
        
          title: "Designing the oversight hotzenplotz: as we become humans in the loop, what becomes...",
        
        description: "A report from our latest reading group where we discussed Klapperich and Hassenzahl’s paper “Hotzenplotz – Reconciling Automation with Experience”",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/designing-the-oversight-hotzenplotz/";
          
        },
      },{id: "post-geoguessr-a-new-scientific-frontier",
        
          title: "Geoguessr: A new scientific frontier",
        
        description: "Using Geoguessr think-aloud data to challenge our understanding of decision-making",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/the-science-of-geoguessr/";
          
        },
      },{id: "post-arc-centre-of-excellence-success-in-asci",
        
          title: "ARC Centre of Excellence success in ASCI",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/qwida/";
          
        },
      },{id: "post-asca-success-at-asci",
        
          title: "ASCA success at ASCI!",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/SHADE_award/";
          
        },
      },{id: "post-humans-and-ai-what-and-how-do-we-think",
        
          title: "Humans and AI, what (and how) do we think?",
        
        description: "Just how different is thinking with AI - are we talking calculators or chain reactions?",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/Human-AI_thinking-A-third_way/";
          
        },
      },{id: "post-evidence-based-scientific-thinking-and-decision-making-in-everyday-life-dawson-et-al-2024",
        
          title: "Evidence-based scientific thinking and decision-making in everyday life | Dawson et al |...",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/Dawson_everday_decision_making_readinggroup/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];

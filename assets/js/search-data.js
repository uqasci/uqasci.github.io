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
          
            window.location.href = "/blog/2026/SHADE_award/";
          
        },
      },{id: "post-evidence-based-scientific-thinking-and-decision-making-in-everyday-life-dawson-et-al-2024",
        
          title: "Evidence-based scientific thinking and decision-making in everyday life | Dawson et al |...",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/Dawson_everday_decision_making_readinggroup/";
          
        },
      },{id: "post-reading-group-paper-title",
        
          title: "Reading Group: Paper Title",
        
        description: "A summary of our fortnightly reading group discussions.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/reading-group-scalable-oversight/";
          
        },
      },{id: "post-news-title",
        
          title: "News: Title!",
        
        description: "We are excited to share...",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/conference-news-icml/";
          
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

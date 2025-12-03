// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "Highlights from my GitHub profile, including research prototypes, reproducibility reports, and data science projects. Cards are auto-generated from the repos.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "post-hello",
        
          title: "Hello",
        
        description: "Test local post.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/hello/";
          
        },
      },{id: "post-your-ai-needs-a-dimmer-switch-not-an-on-off-button",
        
          title: 'Your AI Needs a Dimmer Switch, Not an On/Off Button <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@yvetteli/your-ai-needs-a-dimmer-switch-not-an-on-off-button-0134c9101f27?source=rss-a75799f2fc72------2", "_blank");
          
        },
      },{id: "post-your-gps-shows-you-the-turns-why-doesn-t-your-ai",
        
          title: 'Your GPS Shows You the Turns. Why Doesn’t Your AI? <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@yvetteli/your-gps-shows-you-the-turns-why-doesnt-your-ai-056df54e4b5b?source=rss-a75799f2fc72------2", "_blank");
          
        },
      },{id: "post-when-ai-explains-everything-do-we-still-need-concept-maps",
        
          title: 'When AI Explains Everything, Do We Still Need Concept Maps? <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@yvetteli/when-ai-explains-everything-do-we-still-need-concept-maps-024f63188def?source=rss-a75799f2fc72------2", "_blank");
          
        },
      },{id: "projects-stochastic-sir-seir-modeling",
          title: 'Stochastic SIR/SEIR Modeling',
          description: "Stochastic SEIR with data‑augmentation MCMC to capture latent trajectories and uncertainty beyond deterministic ODEs.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/covid-seir/";
            },},{id: "projects-reproducibility-study-graph-attention-networks",
          title: 'Reproducibility Study: Graph Attention Networks',
          description: "Reproduced core results, built Ray Tune pipelines, and studied attention interpretability &amp; subgraph perturbations.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/gat-repro/";
            },},{id: "projects-geomate-ai-for-accessibility",
          title: 'GeoMate — AI for Accessibility',
          description: "EfficientDet‑based sidewalk‑obstacle detection; active‑learning to mitigate class imbalance for equitable navigation.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/geomate/";
            },},{id: "projects-interactive-constructive-active-learning-machine-icalm",
          title: 'Interactive‑Constructive‑Active Learning Machine (ICALM)',
          description: "Prototype tutor that converts course materials into a concept knowledge graph (Neo4j + LLMs), logs learner paths, and grounds responses via graph‑RAG for traceable explanations.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/icalm/";
            },},{id: "projects-mining-cognitive-models-from-text",
          title: 'Mining Cognitive Models from Text',
          description: "NLP synthesis for detecting metacognitive states (planning, confusion) to inform SRL‑oriented chatbot design.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/metacog-nlp/";
            },},{id: "projects-recommender-systems-at-scale-bell",
          title: 'Recommender Systems at Scale (Bell)',
          description: "Two‑tower retrieval &amp; Wide&amp;Deep ranking; low‑latency inference; metric alignment &amp; ethical constraints.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/recsys-bell/";
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

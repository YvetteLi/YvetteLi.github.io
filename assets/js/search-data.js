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
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-stochastic-sir-seir-modeling",
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

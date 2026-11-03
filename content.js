/* Edit this file to update the homepage. Empty lists display honest placeholders.
   Examples for every content type are in README.md. No build step is needed. */
window.HOMEPAGE = {
  name: "Peng Cheng",
  role: "Co-founder & CTO",
  affiliation: "Zenfex AI",
  affiliationUrl: "https://zenfex.cn/",
  tagline: "Learning for Reliable Decisions *in Physical Worlds*",
  // Put a photo in assets/ and set this to e.g. "assets/profile.jpg".
  photo: "assets/peng-cheng.jpg",
  bio: [
    "Hi! I am Peng Cheng, a co-founder of Zenfex AI and the head of Zenfex AI Lab.",
    "I received my Ph.D. from Beijing Jiaotong University, advised by Prof.Zhihao Wu. During my Ph.D., I was also a research intern at AIR, Tsinghua University, advised by Prof.Xianyuan Zhan. I received my master's degree from the University of Melbourne.",
    "My research focuses on offline reinforcement learning, model-based offline RL, sample-efficient learning, and representation learning. I am dedicated to bringing cutting-edge decision-making technologies to the physical world. It is a challenging yet exciting endeavor. Feel free to contact me if you are interested in this area."
  ],
  bioLinks: {
    "Zenfex AI": "https://zenfex.cn/",
    "Zenfex AI Lab": "https://labs.zenfex.cn/",
    "Zhihao Wu": "https://faculty.bjtu.edu.cn/8932/",
    "AIR, Tsinghua University": "https://air.tsinghua.edu.cn/en/",
    "Xianyuan Zhan": "https://zhanxianyuan.xyz/"
  },
  interests: ["Offline RL", "Model-based Offline RL", "Sample Efficiency", "Representation Learning"],
  email: "pcheng6@126.com",
  // Leave unknown links empty; they will be hidden instead of linking nowhere.
  links: { scholar: "https://scholar.google.com/citations?user=-lw1QPQAAAAJ&hl=en", github: "", orcid: "", dblp: "", researchgate: "", cv: "" },
  news: [
    {
      date: "2026.09",
      title: "Higher-Order Action Supervision Makes A Strong Policy Class",
      url: "https://arxiv.org/abs/2610.11175",
      text: " is accepted by NeurIPS 2026!"
    },
    {
      date: "2026.09",
      title: "ODEWorld",
      url: "https://arxiv.org/abs/2607.27924",
      text: " is accepted by NeurIPS 2026!"
    },
    {
      date: "2026.01",
      title: "TELS",
      url: "https://openreview.net/forum?id=FVLiw2g0n3",
      text: " is accepted by ICLR 2026!"
    },
    {
      date: "2025.01",
      title: "Data center cooling system optimization using offline reinforcement learning",
      url: "https://proceedings.iclr.cc/paper_files/paper/2025/hash/76d2f8e328e1081c22a77ca0fa330ca5-Abstract-Conference.html",
      text: " is accepted by ICLR 2025!"
    },
    {
      date: "2023.06",
      title: "TSRL",
      url: "https://arxiv.org/abs/2306.04220",
      text: " is accepted by NeurIPS 2023!"
    },
    {
      date: "2022.12",
      title: "Discriminator-guided model-based offline imitation learning",
      url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=-lw1QPQAAAAJ&citation_for_view=-lw1QPQAAAAJ:u-x6o8ySG0sC",
      text: " is accepted by CoRL 2022!"
    }
  ],
  publications: [
    {
      title: "Higher-Order Action Supervision Makes A Strong Policy Class",
      authors: ["Peng Cheng", "Yunxian Hou", "Zhi Zhou", "Qian Zhang", "Chang Huang", "Xianyuan Zhan"],
      venue: "Fortieth Conference on Neural Information Processing Systems",
      venueShort: "NeurIPS 2026",
      url: "https://arxiv.org/abs/2610.11175",
      resources: []
    },
    {
      title: "ODEWorld: A Continuous Predictive Architecture via Physical-Time Flow",
      authors: ["Dongxiu Liu", "Haoyi Niu", "Peng Cheng", "Yuan Gao", "Xirui Kang", "Sangli Teng", "Koushil Sreenath", "Xianyuan Zhan✉"],
      venue: "Fortieth Conference on Neural Information Processing Systems",
      venueShort: "NeurIPS 2026",
      url: "https://arxiv.org/abs/2607.27924",
      resources: [
        { label: "Code", url: "https://github.com/Dstate/ODEWorld" },
        { label: "Website", url: "https://dstate.github.io/odeworld_website/" }
      ]
    },
    {
      title: "Sample Efficient Offline RL via T-Symmetry Enforced Latent State-Stitching",
      authors: ["Peng Cheng", "Zhihao Wu", "Jianxiong Li", "Ziteng He", "Haoran Xu", "Wei Sun", "Youfang Lin", "Yunxin Liu", "Xianyuan Zhan"],
      venue: "The Fourteenth International Conference on Learning Representations",
      venueShort: "ICLR 2026",
      url: "https://openreview.net/forum?id=FVLiw2g0n3",
      resources: []
    },
    {
      title: "Look Beneath the Surface: Exploiting Fundamental Symmetry for Sample-Efficient Offline RL",
      authors: ["Peng Cheng", "Xianyuan Zhan", "Zhihao Wu", "Wenjia Zhang", "Shoucheng Song", "Han Wang", "Youfang Lin", "Li Jiang"],
      venue: "Thirty-Seventh Annual Conference on Neural Information Processing Systems",
      venueShort: "NeurIPS 2023",
      url: "https://arxiv.org/abs/2306.04220",
      resources: [
        { label: "Code", url: "https://github.com/pcheng2/TSRL" }
      ]
    },
    {
      title: "Discriminator-Guided Model-Based Offline Imitation Learning",
      authors: ["Wenjia Zhang", "Haoran Xu", "Haoyi Niu", "Peng Cheng", "Ming Li", "Heming Zhang", "Guyue Zhou", "Xianyuan Zhan"],
      venue: "6th Annual Conference on Robot Learning",
      venueShort: "CoRL 2022",
      url: "https://arxiv.org/abs/2207.00244",
      resources: []
    }
  ],
  experience: [
    {
      date: "2026 – Present",
      parts: [
        "I co-founded ",
        { text: "Zenfex AI", url: "https://zenfex.cn/", strong: true },
        " and serve as ",
        { text: "CTO", strong: true },
        "."
      ]
    },
    {
      date: "2022.06 – 2026.06",
      parts: [
        { text: "AIR-DREAM Lab", url: "https://air-dream.netlify.app/" },
        " of ",
        { text: "Institute for AI Industry Research (AIR)", url: "https://air.tsinghua.edu.cn/" },
        ", Tsinghua University, Beijing, China. (",
        { text: "Advisor: ", strong: true },
        { text: "Prof. Xianyuan Zhan", url: "https://zhanxianyuan.xyz/", strong: true },
        ")"
      ]
    }
  ],
  services: [
    {
      parts: [
        "Reviewer for conferences (",
        { text: "NeurIPS, ICML, ICLR", strong: true },
        ") and journals (",
        { text: "IEEE Transactions on Pattern Analysis and Machine Intelligence", strong: true },
        ")."
      ]
    },
    {
      parts: [
        "Teaching Assistant at Beijing Jiaotong University for the doctoral course ",
        { text: "Frontiers in Advanced Reinforcement Learning", strong: true },
        " and the master's course ",
        { text: "Advanced Reinforcement Learning", strong: true },
        ", responsible for course coordination and preparation of teaching materials."
      ]
    }
  ]
};

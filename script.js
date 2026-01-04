// BriefAI Pro - Advanced Design Brief Generator
// Enhanced with AI-powered insights, premium features, and modern UX

// Global state management
const AppState = {
  currentBrief: null,
  savedBriefs: JSON.parse(localStorage.getItem("savedBriefs") || "[]"),
  templates: JSON.parse(localStorage.getItem("templates") || "[]"),
  darkMode: localStorage.getItem("darkMode") === "true",
  user: JSON.parse(localStorage.getItem("user") || "null"),
};

// Default client-side API key (prefilled as requested)
// Bytez API Key (Hardcoded as requested)
const BYTEZ_API_KEY = "38e2d20931d9380887d5c2a7973135c3";

// Helper to get client key (now just returns the hardcoded key)
function getClientKey() {
    return BYTEZ_API_KEY;
}

// Key management functions removed as they are no longer needed
function saveClientKey() {}
function clearClientKey() {}

window.addEventListener("DOMContentLoaded", () => {
    // No-op for key loading
    // ensure Bytez is available
    if (window.Bytez) {
        console.log("Bytez SDK loaded via Module");
    } else {
        console.warn("Bytez SDK not found on window");
    }
});

// Enhanced data structures for advanced features
const CATEGORIES = {
  logo: {
    name: "Logo Design",
    icon: "🎨",
    subcategories: {
      abstract: "Abstract",
      wordmark: "Wordmark",
      symbol: "Symbol/Icon",
      combination: "Combination Mark",
      emblem: "Emblem",
      mascot: "Mascot",
      monogram: "Monogram",
    },
  },
  brand: {
    name: "Brand Identity",
    icon: "🏢",
    subcategories: {
      complete: "Complete Identity",
      guidelines: "Brand Guidelines",
      refresh: "Brand Refresh",
      extensions: "Brand Extensions",
      voice: "Brand Voice & Messaging",
      positioning: "Brand Positioning",
    },
  },
  website: {
    name: "Website Design",
    icon: "💻",
    subcategories: {
      landing: "Landing Page",
      corporate: "Corporate Website",
      ecommerce: "E-commerce",
      portfolio: "Portfolio",
      blog: "Blog/Magazine",
      saas: "SaaS Platform",
      mobile: "Mobile-First",
    },
  },
  app: {
    name: "App Design",
    icon: "📱",
    subcategories: {
      mobile: "Mobile App",
      web: "Web App",
      desktop: "Desktop App",
      dashboard: "Dashboard/Admin",
      game: "Game Interface",
      ar: "AR/VR Interface",
    },
  },
  packaging: {
    name: "Packaging Design",
    icon: "📦",
    subcategories: {
      product: "Product Packaging",
      food: "Food & Beverage",
      cosmetics: "Beauty & Cosmetics",
      electronics: "Electronics",
      luxury: "Luxury Goods",
      eco: "Eco-Friendly",
    },
  },
  poster: {
    name: "Poster Design",
    icon: "🖼️",
    subcategories: {
      event: "Event Poster",
      movie: "Movie Poster",
      concert: "Concert/Music",
      political: "Political Campaign",
      educational: "Educational",
      artistic: "Artistic/Creative",
    },
  },
  banner: {
    name: "Banner Design",
    icon: "🎯",
    subcategories: {
      web: "Web Banner",
      social: "Social Media",
      display: "Display Advertising",
      outdoor: "Outdoor/Billboard",
      email: "Email Header",
      trade: "Trade Show",
    },
  },
  illustration: {
    name: "Illustration",
    icon: "✨",
    subcategories: {
      editorial: "Editorial",
      children: "Children's Book",
      technical: "Technical/Infographic",
      character: "Character Design",
      concept: "Concept Art",
      pattern: "Pattern Design",
    },
  },
  marketing: {
    name: "Marketing Materials",
    icon: "📢",
    subcategories: {
      brochure: "Brochure",
      flyer: "Flyer",
      catalog: "Catalog",
      presentation: "Presentation",
      infographic: "Infographic",
      social: "Social Media Kit",
    },
  },
  billboard: {
    name: "Billboard Design",
    icon: "🏗️",
    subcategories: {
      highway: "Highway Billboard",
      transit: "Transit Advertising",
      digital: "Digital Billboard",
      building: "Building Wrap",
      airport: "Airport Display",
    },
  },
};

const INDUSTRIES = {
  technology: {
    name: "Technology",
    trends: ["AI/ML", "Blockchain", "IoT", "Cloud"],
    colors: ["#0066FF", "#00D4FF"],
  },
  healthcare: {
    name: "Healthcare",
    trends: ["Telemedicine", "Wellness", "Mental Health"],
    colors: ["#00C851", "#007E33"],
  },
  finance: {
    name: "Finance",
    trends: ["Fintech", "Cryptocurrency", "Digital Banking"],
    colors: ["#1565C0", "#0D47A1"],
  },
  education: {
    name: "Education",
    trends: ["EdTech", "Online Learning", "Micro-credentials"],
    colors: ["#FF6F00", "#E65100"],
  },
  retail: {
    name: "Retail",
    trends: ["E-commerce", "Omnichannel", "Sustainability"],
    colors: ["#E91E63", "#AD1457"],
  },
  food: {
    name: "Food & Beverage",
    trends: ["Plant-based", "Artisanal", "Health-conscious"],
    colors: ["#4CAF50", "#2E7D32"],
  },
  fashion: {
    name: "Fashion",
    trends: ["Sustainable Fashion", "Streetwear", "Gender-neutral"],
    colors: ["#9C27B0", "#6A1B9A"],
  },
  travel: {
    name: "Travel",
    trends: ["Eco-tourism", "Digital Nomads", "Experience Economy"],
    colors: ["#00BCD4", "#00838F"],
  },
  sports: {
    name: "Sports & Fitness",
    trends: ["Wellness Tech", "Home Fitness", "Mental Performance"],
    colors: ["#FF5722", "#D84315"],
  },
  entertainment: {
    name: "Entertainment",
    trends: ["Streaming", "Gaming", "Virtual Events"],
    colors: ["#673AB7", "#4527A0"],
  },
};

const TONES = {
  professional: {
    description: "Clean, trustworthy, corporate",
    keywords: ["reliable", "established", "competent"],
  },
  playful: {
    description: "Fun, energetic, approachable",
    keywords: ["creative", "youthful", "engaging"],
  },
  minimalist: {
    description: "Simple, clean, focused",
    keywords: ["elegant", "sophisticated", "timeless"],
  },
  bold: {
    description: "Strong, confident, impactful",
    keywords: ["dynamic", "powerful", "memorable"],
  },
  elegant: {
    description: "Refined, luxurious, premium",
    keywords: ["sophisticated", "premium", "exclusive"],
  },
  modern: {
    description: "Contemporary, innovative, tech-forward",
    keywords: ["cutting-edge", "progressive", "innovative"],
  },
  vintage: {
    description: "Classic, nostalgic, timeless",
    keywords: ["heritage", "authentic", "traditional"],
  },
  creative: {
    description: "Artistic, unique, imaginative",
    keywords: ["original", "expressive", "innovative"],
  },
};

// Enhanced name generation with AI-like intelligence
class NameGenerator {
  constructor() {
    this.prefixes = {
      tech: [
        "Neo",
        "Cyber",
        "Digital",
        "Smart",
        "Quantum",
        "Meta",
        "Pixel",
        "Code",
        "Data",
        "Cloud",
      ],
      creative: [
        "Arte",
        "Vibe",
        "Flow",
        "Spark",
        "Muse",
        "Vision",
        "Dream",
        "Soul",
        "Pure",
        "Wild",
      ],
      business: [
        "Pro",
        "Elite",
        "Prime",
        "Peak",
        "Core",
        "Apex",
        "Summit",
        "Crown",
        "Royal",
        "Global",
      ],
      modern: [
        "Edge",
        "Flux",
        "Sync",
        "Zen",
        "Bolt",
        "Swift",
        "Pulse",
        "Wave",
        "Shift",
        "Leap",
      ],
    };

    this.suffixes = {
      company: [
        "Co",
        "Labs",
        "Group",
        "Hub",
        "Works",
        "Studio",
        "Collective",
        "Partners",
        "Solutions",
        "Industries",
      ],
      creative: [
        "Design",
        "Creative",
        "Arts",
        "Media",
        "Vision",
        "Studio",
        "House",
        "Workshop",
        "Gallery",
        "Space",
      ],
      tech: [
        "Tech",
        "Systems",
        "Digital",
        "Soft",
        "Web",
        "Data",
        "Cloud",
        "AI",
        "Code",
        "Net",
      ],
    };
  }

  generate(category, industry, tone) {
    const prefixType = this.getPrefixType(industry, tone);
    const suffixType = this.getSuffixType(category, industry);

    const prefix = this.getRandomFromArray(this.prefixes[prefixType]);
    const suffix = this.getRandomFromArray(this.suffixes[suffixType]);
    const root = this.generateRoot(category, industry);

    return `${prefix}${root} ${suffix}`;
  }

  getPrefixType(industry, tone) {
    if (["technology", "finance"].includes(industry)) return "tech";
    if (["minimalist", "modern"].includes(tone)) return "modern";
    if (["creative", "playful"].includes(tone)) return "creative";
    return "business";
  }

  getSuffixType(category, industry) {
    if (["logo", "brand", "illustration"].includes(category)) return "creative";
    if (["website", "app"].includes(category)) return "tech";
    return "company";
  }

  generateRoot(category, industry) {
    const roots = {
      logo: ["Mark", "Sign", "Symbol", "Icon", "Brand"],
      brand: ["Identity", "Brand", "Image", "Concept", "Vision"],
      website: ["Web", "Site", "Digital", "Online", "Portal"],
      app: ["App", "Mobile", "Touch", "Smart", "Interface"],
    };

    const categoryRoots = roots[category] || [
      "Creative",
      "Design",
      "Studio",
      "Works",
      "Group",
    ];
    return this.getRandomFromArray(categoryRoots);
  }

  getRandomFromArray(array) {
    return array[Math.floor(Math.random() * array.length)];
  }
}

// NEW: Function to call OpenAI API
// NEW: Function to call Bytez API
async function callBytezAPI(prompt, maxTokens = 500) {
    console.log('callBytezAPI called with prompt length:', prompt.length);
    const apiKey = getClientKey();

    // Create a timeout promise (Reduced to 3 seconds for comprehensive feedback)
    const timeout = new Promise((_, reject) => {
        setTimeout(() => reject(new Error("API Request Timed Out")), 3000); 
    });

    try {
        if (window.Bytez) {
            console.log("Using Bytez SDK...");
            const sdk = new window.Bytez(apiKey);
            
            // choose Llama-3.1-8B-Instruct
            const model = sdk.model("meta-llama/Llama-3.1-8B-Instruct");
            
            // send input to model as chat history array
            // Race the model run against the timeout
            const result = await Promise.race([
                model.run([
                    {
                        "role": "user",
                        "content": prompt
                    }
                ]),
                timeout
            ]);

            const { error, output } = result;

            if (error) {
                console.error("Bytez SDK error:", error);
                throw new Error(error);
            }
            
            console.log("Bytez SDK response:", output);
            
            // Extract content if it's an object (common with Llama)
            if (typeof output === 'object' && output !== null) {
                // If it looks like a chat message object
                if (output.content) return output.content;
                // If it's an array of choices (OpenAI style)
                if (output.choices && output.choices[0]) return output.choices[0].message?.content || output.choices[0].text;
                
                return JSON.stringify(output);
            }
            
            return output;
        } else {
             throw new Error("Bytez SDK validation failed: window.Bytez is undefined. SDK may not have loaded from CDN yet.");
        }
    } catch (error) {
        console.error('Bytez API / SDK error:', error);
        throw error; // This triggers the fallback in generate()
    }
}

// Updated BriefGenerator with OpenAI integration
class BriefGenerator {
  constructor() {
    this.nameGenerator = new NameGenerator();
  }

  async generate(config) {
    // Made async for API calls
    const name = this.nameGenerator.generate(
      config.category,
      config.industry,
      config.tone
    );
    let brief, insights, roadmap;

    if (config.aiEnhancement) {
      // Use OpenAI for dynamic generation
      try {
        brief = await this.generateBriefWithAI(name, config);
        insights = await this.generateAIInsightsWithAI(config);
        roadmap = await this.generateRoadmapWithAI(config);
      } catch (error) {
        showToast(
          `AI request failed (${error.message}). Switched to local mode.`,
          "warning" // Warning color (yellow/orange usually)
        );
        console.warn("Falling back to local generation due to:", error);
        
        // Fallback to local
        brief = this.generateBriefLocal(name, config);
        insights = this.generateAIInsightsLocal(config);
        roadmap = this.generateRoadmapLocal(config);
      }
    } else {
      // Local mode if AI is disabled
      brief = this.generateBriefLocal(name, config);
      insights = this.generateAIInsightsLocal(config);
      roadmap = this.generateRoadmapLocal(config);
    }

    const colorPalette = this.generateColorPalette(config);
    const typography = this.generateTypography(config);

    return {
      name,
      brief,
      roadmap,
      insights,
      colorPalette,
      typography,
      metadata: {
        generatedAt: new Date().toISOString(),
        config,
        version: "2.0",
      },
    };
  }

  // NEW: AI-powered brief generation
  async generateBriefWithAI(name, config) {
    const category = CATEGORIES[config.category]?.name || "General Design";
    const subcategory = (config.subcategory && config.subcategory !== 'random' && CATEGORIES[config.category]?.subcategories[config.subcategory]) 
                        ? CATEGORIES[config.category].subcategories[config.subcategory] 
                        : '';
    const categoryStr = subcategory ? `${subcategory} (${category})` : category;

    const industry = INDUSTRIES[config.industry]?.name || "General";
    const tone = TONES[config.tone]?.description || "Professional";
    const audience = this.getAudienceDescription(config.audience);
    const trends =
      INDUSTRIES[config.industry]?.trends?.join(", ") || "current trends";

    const prompt = `Generate a professional design brief for a project named "${name}". 
        Category: ${categoryStr}. Industry: ${industry}. Tone: ${tone}. 
        Target audience: ${audience}. Complexity: ${config.complexity}. 
        Timeline: ${this.getTimelineDescription(config.timeline)}. 
        Incorporate trends: ${trends}. 
        Keep it concise, 200-300 words, in a structured paragraph format.`;

    return await callBytezAPI(prompt, 600);
  }

  // Local fallback for brief (your original logic)
  generateBriefLocal(name, config) {
    const category = CATEGORIES[config.category] || { name: "General Design" };
    const subcategoryValue = (config.subcategory && config.subcategory !== 'random' && category.subcategories && category.subcategories[config.subcategory])
                             ? category.subcategories[config.subcategory] 
                             : '';
    const categoryName = subcategoryValue ? `${subcategoryValue} ${category.name}` : category.name;

    const industry = INDUSTRIES[config.industry] || {
      name: "General",
      trends: ["current trends"],
    };
    console.log("category:", category, "industry:", industry);
    // const tone = TONES[config.tone]; // Not used directly, tone is string in config

    const templates = this.getBriefTemplates();
    const template = templates[config.category] || templates.default;

    return template
      .replace(/{name}/g, name)
      .replace(/{category}/g, categoryName.toLowerCase())
      .replace(/{industry}/g, industry.name.toLowerCase())
      .replace(/{tone}/g, config.tone)
      .replace(/{audience}/g, this.getAudienceDescription(config.audience))
      .replace(/{complexity}/g, config.complexity)
      .replace(/{timeline}/g, this.getTimelineDescription(config.timeline))
      .replace(/{trends}/g, industry.trends.join(", "));
  }

  // NEW: AI-powered insights
  async generateAIInsightsWithAI(config) {
    const prompt = `Generate 4 AI-powered insights for a design project in the ${config.industry} industry with ${config.tone} tone. 
        Target audience: ${config.audience}. 
        Each insight should have a type (e.g., trend, competitive, ux, technical), title, content (1-2 sentences), and icon (e.g., fa-chart-line). 
        Output as JSON array.`;

    const response = await callBytezAPI(prompt, 500);
    try {
      return JSON.parse(response);
    } catch {
      return []; // Fallback if parse fails
    }
  }

  // Local fallback for insights (your original)
  generateAIInsightsLocal(config) {
    const insights = [];

    // Industry trends
    const industry = INDUSTRIES[config.industry] || {
      name: "General",
      trends: ["current trends"],
    };
    insights.push({
      type: "trend",
      title: "Industry Trends",
      content: `Current trends in ${industry.name.toLowerCase()} include: ${industry.trends.join(
        ", "
      )}. Consider incorporating these elements to stay relevant.`,
      icon: "fa-chart-line",
    });

    // Competitive analysis
    insights.push({
      type: "competitive",
      title: "Competitive Landscape",
      content: this.getCompetitiveInsight(config),
      icon: "fa-chess",
    });

    // User experience
    insights.push({
      type: "ux",
      title: "User Experience Focus",
      content: this.getUXInsight(config),
      icon: "fa-users",
    });

    // Technical considerations
    insights.push({
      type: "technical",
      title: "Technical Considerations",
      content: this.getTechnicalInsight(config),
      icon: "fa-cog",
    });

    return insights;
  }

  // NEW: AI-powered roadmap
  async generateRoadmapWithAI(config) {
    const prompt = `Generate a project roadmap HTML for a ${config.category} design in ${config.industry} industry. 
        Include 4-5 phases with title, description, tasks (3-5 bullet points), and timeframe based on timeline: ${config.timeline}. 
        Output as HTML string with classes like "roadmap-container", "roadmap-phase", etc.`;

    return await callBytezAPI(prompt, 800);
  }

  // Local fallback for roadmap (your original)
  generateRoadmapLocal(config) {
    const phases = this.getRoadmapPhases(config);
    const timeline = this.getTimelinePhases(config.timeline, config.complexity);

    let roadmap = '<div class="roadmap-container">';
    roadmap +=
      '<h3 class="text-xl font-bold mb-4 text-blue-400"><i class="fas fa-route mr-2"></i>Project Roadmap</h3>';

    phases.forEach((phase, index) => {
      const timeframe = timeline[index] || "1-2 days";
      roadmap += `
                <div class="roadmap-phase mb-6 p-4 bg-white/5 rounded-xl border-l-4 border-blue-500">
                    <div class="flex items-center mb-2">
                        <div class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-sm font-bold mr-3">
                            ${index + 1}
                        </div>
                        <h4 class="font-semibold text-lg">${phase.title}</h4>
                        <span class="ml-auto text-sm text-gray-400">${timeframe}</span>
                    </div>
                    <p class="text-gray-300 mb-3">${phase.description}</p>
                    <ul class="space-y-1">
                        ${phase.tasks
                          .map(
                            (task) =>
                              `<li class="flex items-center text-sm text-gray-400"><i class="fas fa-chevron-right mr-2 text-blue-400 text-xs"></i>${task}</li>`
                          )
                          .join("")}
                    </ul>
                </div>
            `;
    });

    roadmap += "</div>";
    return roadmap;
  }

  generateColorPalette(config) {
    const industry = INDUSTRIES[config.industry] || {
      colors: ["#0066FF", "#00D4FF"],
    };
    const baseColors = industry.colors;

    // Generate complementary colors based on industry and tone
    const palette = {
      primary: baseColors[0],
      secondary: baseColors[1],
      accent: this.generateAccentColor(config.tone),
      neutral: this.generateNeutralColor(config.tone),
      background: this.generateBackgroundColor(config.tone),
    };

    return palette;
  }

  generateTypography(config) {
    const fonts = this.getFontRecommendations(config);
    return {
      primary: fonts.primary,
      secondary: fonts.secondary,
      rationale: fonts.rationale,
    };
  }

  // Helper methods
  getBriefTemplates() {
    return {
      logo: "Design a distinctive logo for '{name}', a {tone} {industry} company. Create a mark that resonates with {audience} while maintaining {complexity} design sophistication. The logo should embody current {industry} trends including {trends}. Timeline: {timeline}.",

      brand:
        "Develop a comprehensive brand identity for '{name}', establishing a {tone} presence in the {industry} sector. Target {audience} with a cohesive visual system that reflects {complexity} brand strategy. Consider industry trends: {trends}. Timeline: {timeline}.",

      website:
        "Design a {tone} website for '{name}', a {industry} business targeting {audience}. Create a {complexity} digital experience that incorporates current trends: {trends}. Focus on user experience and conversion optimization. Timeline: {timeline}.",

      app: "Create a {tone} mobile/web application interface for '{name}' in the {industry} space. Design for {audience} with {complexity} user experience patterns. Integrate trending features: {trends}. Timeline: {timeline}.",

      packaging:
        "Design innovative packaging for '{name}', a {industry} product with a {tone} brand personality. Appeal to {audience} through {complexity} packaging solutions. Consider sustainability trends: {trends}. Timeline: {timeline}.",

      default:
        "Create a {tone} design solution for '{name}' in the {industry} sector. Target {audience} with {complexity} creative execution. Incorporate relevant trends: {trends}. Timeline: {timeline}.",
    };
  }

  getRoadmapPhases(config) {
    const basePhases = [
      {
        title: "Discovery & Research",
        description: "Understanding the brand, market, and user needs",
        tasks: [
          "Market research",
          "Competitor analysis",
          "User personas",
          "Brand audit",
        ],
      },
      {
        title: "Concept Development",
        description: "Ideation and initial design exploration",
        tasks: [
          "Brainstorming sessions",
          "Mood boards",
          "Initial sketches",
          "Concept validation",
        ],
      },
      {
        title: "Design Development",
        description: "Refining and developing the chosen concept",
        tasks: [
          "Design iterations",
          "Color exploration",
          "Typography selection",
          "Feedback integration",
        ],
      },
      {
        title: "Finalization & Delivery",
        description: "Completing the design and preparing deliverables",
        tasks: [
          "Final refinements",
          "File preparation",
          "Documentation",
          "Handoff",
        ],
      },
    ];

    // Customize phases based on category
    if (config.category === "brand") {
      basePhases.splice(2, 0, {
        title: "Brand Strategy",
        description: "Defining brand positioning and messaging",
        tasks: [
          "Brand positioning",
          "Voice & tone",
          "Messaging framework",
          "Guidelines draft",
        ],
      });
    }

    return basePhases;
  }

  getTimelinePhases(timeline, difficulty) {
    const timeframes = {
      rush: ["6-8 hours", "8-12 hours", "4-6 hours", "2-4 hours"],
      normal: ["1-2 days", "2-3 days", "2-3 days", "1 day"],
      extended: ["3-5 days", "5-7 days", "7-10 days", "2-3 days"],
      flexible: ["1 week", "1-2 weeks", "2-3 weeks", "3-5 days"],
    };

    return timeframes[timeline] || timeframes.normal;
  }

  getAudienceDescription(audience) {
    const descriptions = {
      general: "general consumers across all demographics",
      millennials:
        "millennials (ages 25-40) who value authenticity and digital experiences",
      genz: "Gen Z (ages 18-24) who prioritize social impact and visual communication",
      professionals:
        "business professionals seeking credibility and efficiency",
      creatives:
        "creative professionals who appreciate innovative design and artistic expression",
      families: "families looking for trustworthy and practical solutions",
      seniors:
        "seniors who value clarity, reliability, and traditional approaches",
      students:
        "students seeking affordable, accessible, and trend-conscious options",
    };
    return descriptions[audience] || descriptions.general;
  }

  getTimelineDescription(timeline) {
    const descriptions = {
      rush: "urgent delivery within 1-3 days",
      normal: "standard timeline of 1-2 weeks",
      extended: "extended timeline of 2-4 weeks for comprehensive development",
      flexible:
        "flexible timeline allowing for thorough iteration and refinement",
    };
    return descriptions[timeline] || descriptions.normal;
  }

  getCompetitiveInsight(config) {
    const insights = [
      `In the ${config.industry} sector, successful designs often balance innovation with familiarity.`,
      `Consider how leading ${config.industry} brands use ${config.tone} design approaches to connect with their audience.`,
      `Differentiation opportunities exist in areas where competitors may be following similar visual patterns.`,
    ];
    return insights[Math.floor(Math.random() * insights.length)];
  }

  getUXInsight(config) {
    const insights = [
      `${config.audience} typically responds well to ${config.tone} design approaches that prioritize clarity and usability.`,
      `Consider accessibility requirements and inclusive design principles for your target demographic.`,
      `User testing should focus on emotional response and practical usability for optimal results.`,
    ];
    return insights[Math.floor(Math.random() * insights.length)];
  }

  getTechnicalInsight(config) {
    const categoryInsights = {
      logo: "Ensure scalability from favicon size (16px) to billboard applications. Consider monochrome versions.",
      website:
        "Optimize for mobile-first design, page speed, and SEO considerations.",
      app: "Follow platform-specific design guidelines (iOS HIG, Material Design) for native feel.",
      packaging:
        "Consider printing limitations, material constraints, and sustainability requirements.",
      default:
        "Plan for multiple format deliverables and future scalability needs.",
    };
    return categoryInsights[config.category] || categoryInsights.default;
  }

  generateAccentColor(tone) {
    const accents = {
      professional: "#0066CC",
      playful: "#FF6B35",
      minimalist: "#2D3748",
      bold: "#E53E3E",
      elegant: "#6B46C1",
      modern: "#00D4AA",
      vintage: "#D69E2E",
      creative: "#ED64A6",
    };
    return accents[tone] || "#3182CE";
  }

  generateNeutralColor(tone) {
    const neutrals = {
      professional: "#718096",
      playful: "#A0AEC0",
      minimalist: "#E2E8F0",
      bold: "#4A5568",
      elegant: "#2D3748",
      modern: "#CBD5E0",
      vintage: "#F7FAFC",
      creative: "#EDF2F7",
    };
    return neutrals[tone] || "#718096";
  }

  generateBackgroundColor(tone) {
    const backgrounds = {
      professional: "#FFFFFF",
      playful: "#F7FAFC",
      minimalist: "#FFFFFF",
      bold: "#1A202C",
      elegant: "#F7FAFC",
      modern: "#FFFFFF",
      vintage: "#FFFEF7",
      creative: "#FAFAFA",
    };
    return backgrounds[tone] || "#FFFFFF";
  }

  getFontRecommendations(config) {
    const recommendations = {
      professional: {
        primary: "Inter, Helvetica Neue, Arial",
        secondary: "Georgia, Times New Roman, serif",
        rationale:
          "Clean sans-serif for headers with classic serif for body text ensures readability and professionalism.",
      },
      playful: {
        primary: "Poppins, Nunito, Roboto",
        secondary: "Open Sans, Lato, sans-serif",
        rationale:
          "Rounded, friendly fonts that convey approachability while maintaining legibility.",
      },
      minimalist: {
        primary: "Inter, System UI, sans-serif",
        secondary: "SF Pro Text, Segoe UI, sans-serif",
        rationale:
          "System fonts provide clean, unobtrusive typography that focuses attention on content.",
      },
      bold: {
        primary: "Montserrat, Oswald, Impact",
        secondary: "Source Sans Pro, Arial, sans-serif",
        rationale:
          "Strong, condensed fonts for headlines paired with clean sans-serif for readability.",
      },
      elegant: {
        primary: "Playfair Display, Cormorant, serif",
        secondary: "Source Sans Pro, Lato, sans-serif",
        rationale:
          "Sophisticated serif fonts for elegance balanced with clean sans-serif for modern appeal.",
      },
      modern: {
        primary: "Inter, SF Pro Display, system-ui",
        secondary: "SF Pro Text, Roboto, sans-serif",
        rationale:
          "Contemporary system fonts that provide excellent readability across all devices.",
      },
      vintage: {
        primary: "Crimson Text, EB Garamond, serif",
        secondary: "Source Sans Pro, Open Sans, sans-serif",
        rationale:
          "Classic serif fonts evoke heritage and tradition while modern sans-serif ensures accessibility.",
      },
      creative: {
        primary: "Work Sans, Nunito, Raleway",
        secondary: "Merriweather, Source Serif Pro, serif",
        rationale:
          "Expressive fonts that showcase creativity while maintaining professional readability.",
      },
    };
    return recommendations[config.tone] || recommendations.modern;
  }
}

// Initialize the app
document.addEventListener("DOMContentLoaded", function () {
  initializeApp();
});

function initializeApp() {
  // Initialize generators
  window.briefGenerator = new BriefGenerator();

  // Setup event listeners
  setupEventListeners();

  // Initialize UI
  initializeUI();

  // Load saved data
  loadSavedData();

  console.log("BriefAI Pro initialized successfully");
}

function setupEventListeners() {
  document
    .getElementById("toggleDarkModeBtn")
    .addEventListener("click", toggleDarkMode);
  document.getElementById("showHelpBtn").addEventListener("click", showHelp);
  document
    .getElementById("showHistoryBtn")
    .addEventListener("click", showHistory);
  document
    .getElementById("scrollToGeneratorBtn")
    .addEventListener("click", scrollToGenerator);
  document
    .getElementById("showFeaturesBtn")
    .addEventListener("click", showFeatures);
  document
    .getElementById("category")
    .addEventListener("change", toggleSubcategories);
  document
    .getElementById("toggleAdvancedOptionsBtn")
    .addEventListener("click", toggleAdvancedOptions);
  document
    .getElementById("saveClientKeyBtn")
    .addEventListener("click", saveClientKey);
  document
    .getElementById("clearClientKeyBtn")
    .addEventListener("click", clearClientKey);
  document
    .getElementById("generateBriefBtn")
    .addEventListener("click", generateBrief);
  document
    .getElementById("randomizeSettingsBtn")
    .addEventListener("click", randomizeSettings);
  document
    .getElementById("resetSettingsBtn")
    .addEventListener("click", resetSettings);
  document
    .getElementById("saveTemplateBtn")
    .addEventListener("click", saveTemplate);
  document
    .getElementById("regenerateBriefBtn")
    .addEventListener("click", regenerateBrief);
  document
    .getElementById("togglePreviewBtn")
    .addEventListener("click", togglePreview);
  document.getElementById("copyBriefBtn").addEventListener("click", copyBrief);
  document
    .getElementById("shareBriefBtn")
    .addEventListener("click", shareBrief);
  document
    .getElementById("exportPdfBtn")
    .addEventListener("click", () => exportBrief("pdf"));
  document
    .getElementById("exportDocxBtn")
    .addEventListener("click", () => exportBrief("docx"));
  document
    .getElementById("exportHtmlBtn")
    .addEventListener("click", () => exportBrief("html"));
  document
    .getElementById("exportJsonBtn")
    .addEventListener("click", () => exportBrief("json"));
  document.getElementById("saveBriefBtn").addEventListener("click", saveBrief);
  document
    .getElementById("createVariationBtn")
    .addEventListener("click", createVariation);

  // Modal close handlers
  document.addEventListener("click", function (e) {
    if (e.target.id === "modalOverlay") {
      closeModal();
    }
  });

  // Keyboard shortcuts
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closeModal();
    }
    if (e.ctrlKey || e.metaKey) {
      if (e.key === "Enter") {
        e.preventDefault();
        generateBrief();
      }
    }
  });
}

function initializeUI() {
  // Apply dark mode if enabled
  if (AppState.darkMode) {
    document.body.classList.add("dark-mode");
    const btn = document.getElementById("toggleDarkModeBtn");
    if (btn) {
      const icon = btn.querySelector("i");
      if (icon) icon.className = "fas fa-sun";
    }
  }

  // Initialize subcategories
  toggleSubcategories();
}

function loadSavedData() {
  // Data is already loaded in AppState initialization
  console.log("Loaded saved data:", AppState.savedBriefs.length, "briefs");
}

function toggleSubcategories() {
  const categorySelect = document.getElementById("category");
  const container = document.getElementById("subcategoryContainer");
  const selectedCategory = categorySelect.value;

  // Clear container
  container.innerHTML = "";

  if (selectedCategory === "random" || !CATEGORIES[selectedCategory]) {
    return;
  }

  const categoryData = CATEGORIES[selectedCategory];
  const subcategories = categoryData.subcategories;

  if (!subcategories) return;

  // Create label
  const label = document.createElement("label");
  label.className = "block text-sm font-semibold text-gray-300 mb-3";
  label.innerHTML = `<i class="fas fa-filter mr-2"></i>${categoryData.name} Type`;

  // Create select
  const select = document.createElement("select");
  select.id = "subcategory";
  select.className =
    "w-full p-4 bg-white/10 border border-white/20 rounded-xl text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300";

  // Add random/default option
  const defaultOption = document.createElement("option");
  defaultOption.value = "random";
  defaultOption.textContent = `Random ${categoryData.name} Type`;
  select.appendChild(defaultOption);

  // Add options
  Object.entries(subcategories).forEach(([key, value]) => {
    const option = document.createElement("option");
    option.value = key;
    option.textContent = value;
    select.appendChild(option);
  });

  container.appendChild(label);
  container.appendChild(select);

  // Animate
  container.style.opacity = "0";
  container.animate(
    [
      { opacity: "0", transform: "translateY(-10px)" },
      { opacity: "1", transform: "translateY(0)" },
    ],
    {
      duration: 300,
      easing: "ease-out",
      fill: "forwards",
    }
  );
  container.style.opacity = "1";
}

function toggleAdvancedOptions() {
  const advancedOptions = document.getElementById("advancedOptions");
  const advancedToggleIcon = document.getElementById("advancedToggleIcon");
  const button = document.getElementById("toggleAdvancedOptionsBtn");

  const isHidden = advancedOptions.classList.toggle("hidden");

  if (isHidden) {
    advancedToggleIcon.classList.remove("fa-chevron-up");
    advancedToggleIcon.classList.add("fa-chevron-down");
    button.innerHTML = `<i class="fas fa-chevron-down mr-2" id="advancedToggleIcon"></i> Show Advanced Options`;
  } else {
    advancedToggleIcon.classList.remove("fa-chevron-down");
    advancedToggleIcon.classList.add("fa-chevron-up");
    button.innerHTML = `<i class="fas fa-chevron-up mr-2" id="advancedToggleIcon"></i> Hide Advanced Options`;
  }
}

function toggleDarkMode() {
  AppState.darkMode = !AppState.darkMode;
  localStorage.setItem("darkMode", AppState.darkMode);

  const btn = document.getElementById("toggleDarkModeBtn");
  const icon = btn.querySelector("i");

  if (AppState.darkMode) {
    document.body.classList.add("dark-mode");
    icon.className = "fas fa-sun";
  } else {
    document.body.classList.remove("dark-mode");
    icon.className = "fas fa-moon";
  }
}

function togglePreview() {
  const briefContainer = document.getElementById("briefContainer");
  if (!briefContainer) return;

  // Find the parent panel (the white/5 bg div)
  const panel = briefContainer.closest(".bg-white\\/5");

  if (!panel) return;

  panel.classList.toggle("fixed");
  panel.classList.toggle("inset-0");
  panel.classList.toggle("z-50");
  panel.classList.toggle("bg-gray-900");
  panel.classList.toggle("overflow-y-auto");
  panel.classList.toggle("p-8");
  panel.classList.toggle("p-12"); // Larger padding in full screen

  // Toggle icon
  const btn = document.getElementById("togglePreviewBtn");
  const icon = btn.querySelector("i");

  if (panel.classList.contains("fixed")) {
    icon.className = "fas fa-compress";
    document.body.style.overflow = "hidden"; // Prevent background scrolling
  } else {
    icon.className = "fas fa-eye";
    document.body.style.overflow = "";
  }
}

function saveModalKeyAndGenerate() {
  const keyInput = document.getElementById("modalApiKey");
  if (!keyInput) return;

  const key = keyInput.value.trim();

  if (key && key.length > 10) {
    // Basic validation
    localStorage.setItem("clientApiKey", key);

    // Update main input if it exists
    const mainInput = document.getElementById("clientApiKey");
    if (mainInput) mainInput.value = key;

    closeModal();
    showToast("API Key saved successfully", "success");

    // Retry generation
    generateBrief();
  } else {
    alert("Please enter a valid API key");
  }
}

async function generateBrief() {
  console.log(
    "generateBrief called. AI enhancement:",
    document.getElementById("aiEnhancement").checked,
    "API key:",
    getClientKey()
  );
  const config = getFormConfig();

    // Key check removed as we use hardcoded Bytez key now
    // The previous logic for modal is no longer valid
    
    // if (config.aiEnhancement && getClientKey() === DEFAULT_CLIENT_API_KEY) { ... } logic removed

  showLoading();
  const loadingStartTime = Date.now();
  
  try {
    const briefData = await window.briefGenerator.generate(config);
    AppState.currentBrief = briefData;
    
    // Calculate remaining time to satisfy minimum 2 seconds
    const elapsed = Date.now() - loadingStartTime;
    const minLoadingTime = 2000;
    const remaining = Math.max(0, minLoadingTime - elapsed);
    
    // Wait if needed
    if (remaining > 0) {
        await new Promise(resolve => setTimeout(resolve, remaining));
    }

    displayBrief(briefData);
    hideLoading();
    showToast("Brief generated successfully!", "success");
    
    // Smooth scroll to the brief
    setTimeout(() => {
        document.getElementById("briefContainer").scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);

  } catch (error) {
    console.error("Error in generateBrief:", error);
    hideLoading();
    showToast("Error generating brief: " + error.message, "error");
  }
}

function getFormConfig() {
  // Collect form values here
  const subcategorySelect = document.getElementById("subcategory");

  return {
    category: document.getElementById("category").value,
    subcategory: subcategorySelect ? subcategorySelect.value : "random",
    industry: document.getElementById("industry").value,
    tone: document.getElementById("tone").value,
    complexity: document.getElementById("difficulty").value,
    audience: document.getElementById("audience").value,
    timeline: document.getElementById("timeline").value || "normal",
    aiEnhancement: document.getElementById("aiEnhancement").checked,
  };
}

function displayBrief(briefData) {
  const container = document.getElementById("briefContainer"); // Assume this ID exists
  let html = `
        <div class="space-y-6">
            <!-- Header -->
            <div class="text-center mb-8">
                <h2 class="text-3xl font-bold text-white mb-2">${
                  briefData.name
                }</h2>
                <p class="text-sm text-gray-400">Generated on ${new Date(
                  briefData.metadata.generatedAt
                ).toLocaleString()}</p>
            </div>

            <!-- Brief Content -->
            <div class="bg-white/5 p-6 rounded-xl border border-white/10">
                <h3 class="text-xl font-bold mb-4 text-purple-400"><i class="fas fa-file-alt mr-2"></i>Project Brief</h3>
                <p class="text-gray-300 leading-relaxed">${briefData.brief}</p>
            </div>

            <!-- Color Palette -->
            <div class="bg-white/5 p-6 rounded-xl border border-white/10">
                <h4 class="text-lg font-semibold mb-4 text-gray-300">
                    <i class="fas fa-palette mr-2"></i>Recommended Color Palette
                </h4>
                <div class="flex space-x-3 mb-3">
                    ${Object.entries(briefData.colorPalette)
                      .map(
                        ([name, color]) => `
                        <div class="text-center">
                            <div class="w-12 h-12 rounded-lg border-2 border-white/20 mb-2" style="background-color: ${color}"></div>
                            <div class="text-xs text-gray-400 capitalize">${name}</div>
                            <div class="text-xs text-gray-500">${color}</div>
                        </div>
                    `
                      )
                      .join("")}
                </div>
            </div>

            <!-- Typography -->
            <div class="bg-white/5 p-6 rounded-xl border border-white/10">
                <h4 class="text-lg font-semibold mb-3 text-gray-300">
                    <i class="fas fa-font mr-2"></i>Typography Recommendations
                </h4>
                <div class="space-y-3">
                    <div>
                        <div class="text-sm text-gray-400 mb-1">Primary Font</div>
                        <div class="font-semibold">${
                          briefData.typography.primary
                        }</div>
                    </div>
                    <div>
                        <div class="text-sm text-gray-400 mb-1">Secondary Font</div>
                        <div class="font-semibold">${
                          briefData.typography.secondary
                        }</div>
                    </div>
                    <div class="text-sm text-gray-300 bg-white/5 p-3 rounded-lg">
                        <strong>Rationale:</strong> ${
                          briefData.typography.rationale
                        }
                    </div>
                </div>
            </div>

            <!-- AI Insights -->
            ${
              briefData.metadata.config.aiEnhancement
                ? `
                <div class="bg-gradient-to-r from-purple-600/20 to-pink-600/20 p-6 rounded-xl border border-purple-500/30">
                    <h4 class="text-lg font-semibold mb-4 text-purple-400">
                        <i class="fas fa-robot mr-2"></i>AI-Powered Insights
                    </h4>
                    <div class="grid gap-4">
                        ${briefData.insights
                          .map(
                            (insight) => `
                            <div class="bg-white/5 p-4 rounded-lg border border-white/10">
                                <div class="flex items-center mb-2">
                                    <i class="fas ${insight.icon} text-purple-400 mr-2"></i>
                                    <h5 class="font-semibold">${insight.title}</h5>
                                </div>
                                <p class="text-gray-300 text-sm">${insight.content}</p>
                            </div>
                        `
                          )
                          .join("")}
                    </div>
                </div>
            `
                : ""
            }

            <!-- Roadmap -->
            <div class="bg-white/5 p-6 rounded-xl border border-white/10">
                ${briefData.roadmap}
            </div>
        </div>
    `;

  container.innerHTML = html;

  // Show action buttons
  document.getElementById("actionButtons").classList.remove("hidden");
  document.getElementById("actionButtons").classList.add("animate-slideUp");
}

// Export Functions
function exportBrief(format) {
  if (!AppState.currentBrief) {
    showToast("Please generate a brief first", "error");
    return;
  }

  showLoading();

  try {
    switch (format) {
      case "pdf":
        exportToPDF();
        break;
      case "docx":
        exportToWord();
        break;
      case "html":
        exportToHTML();
        break;
      case "json":
        exportToJSON();
        break;
      default:
        throw new Error("Unsupported format");
    }

    showToast(`Brief exported as ${format.toUpperCase()}`, "success");
  } catch (error) {
    console.error("Export error:", error);
    showToast("Export failed. Please try again.", "error");
  } finally {
    hideLoading();
  }
}

function exportToPDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  const brief = AppState.currentBrief;

  // Add content to PDF
  doc.setFontSize(20);
  doc.text(brief.name, 20, 30);

  doc.setFontSize(12);
  doc.text("Generated: " + new Date().toLocaleDateString(), 20, 45);

  doc.setFontSize(14);
  doc.text("Project Brief:", 20, 65);

  // Split long text into lines
  const briefText = doc.splitTextToSize(brief.brief, 170);
  doc.setFontSize(10);
  doc.text(briefText, 20, 80);

  // Save the PDF
  doc.save(`${brief.name.replace(/[^a-z0-9]/gi, "_").toLowerCase()}_brief.pdf`);
}

function exportToWord() {
  // For a full implementation, you'd use a library like docx
  // For now, we'll create a simple Word-compatible HTML
  const brief = AppState.currentBrief;
  const content = createWordContent(brief);

  const blob = new Blob([content], { type: "application/msword" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${brief.name
    .replace(/[^a-z0-9]/gi, "_")
    .toLowerCase()}_brief.doc`;
  a.click();
  URL.revokeObjectURL(url);
}

function exportToHTML() {
  const brief = AppState.currentBrief;
  const htmlContent = createHTMLExport(brief);

  const blob = new Blob([htmlContent], { type: "text/html" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${brief.name
    .replace(/[^a-z0-9]/gi, "_")
    .toLowerCase()}_brief.html`;
  a.click();
  URL.revokeObjectURL(url);
}

function exportToJSON() {
  const brief = AppState.currentBrief;
  const jsonContent = JSON.stringify(brief, null, 2);

  const blob = new Blob([jsonContent], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${brief.name
    .replace(/[^a-z0-9]/gi, "_")
    .toLowerCase()}_brief.json`;
  a.click();
  URL.revokeObjectURL(url);
}

// Utility Functions
function showLoading() {
  document.getElementById("loadingOverlay").classList.remove("hidden");
}

function hideLoading() {
  document.getElementById("loadingOverlay").classList.add("hidden");
}

function showToast(message, type = "success") {
  const toast = document.getElementById("toast");
  const toastMessage = document.getElementById("toastMessage");

  toastMessage.textContent = message;

  // Update toast appearance based on type
  toast.className = `fixed top-4 right-4 z-50 px-6 py-4 rounded-xl shadow-lg transition-transform duration-300 ${
    type === "success" ? "bg-green-600 text-white" : "bg-red-600 text-white"
  }`;

  // Show toast
  toast.classList.remove("hidden", "translate-x-full");

  // Hide after 3 seconds
  setTimeout(() => {
    toast.classList.add("translate-x-full");
    setTimeout(() => {
      toast.classList.add("hidden");
    }, 300);
  }, 3000);
}

function showModal(content) {
  const overlay = document.getElementById("modalOverlay");
  const modalContent = document.getElementById("modalContent");

  modalContent.innerHTML = content;
  overlay.classList.remove("hidden");
}

function closeModal() {
  document.getElementById("modalOverlay").classList.add("hidden");
}

// Additional Functions
function copyBrief() {
  if (!AppState.currentBrief) {
    showToast("No brief to copy", "error");
    return;
  }

  const briefText = createPlainTextBrief(AppState.currentBrief);
  navigator.clipboard
    .writeText(briefText)
    .then(() => {
      showToast("Brief copied to clipboard!", "success");
    })
    .catch(() => {
      showToast("Failed to copy brief", "error");
    });
}

function shareBrief() {
  if (!AppState.currentBrief) {
    showToast("No brief to share", "error");
    return;
  }

  if (navigator.share) {
    navigator
      .share({
        title: AppState.currentBrief.name,
        text: "Check out this design brief I generated with BriefAI Pro",
        url: window.location.href,
      })
      .catch(console.error);
  } else {
    // Fallback - copy URL to clipboard
    navigator.clipboard.writeText(window.location.href).then(() => {
      showToast("Link copied to clipboard!", "success");
    });
  }
}

function saveBrief() {
  if (!AppState.currentBrief) {
    showToast("No brief to save", "error");
    return;
  }

  AppState.savedBriefs.push({
    ...AppState.currentBrief,
    savedAt: new Date().toISOString(),
  });

  localStorage.setItem("savedBriefs", JSON.stringify(AppState.savedBriefs));
  showToast("Brief saved successfully!", "success");
}

function randomizeSettings() {
  // Randomize form values
  const categories = Object.keys(CATEGORIES);
  const industries = Object.keys(INDUSTRIES);
  const tones = Object.keys(TONES);
  const difficulties = ["beginner", "intermediate", "advanced", "expert"]; // Updated as per form
  const audiences = [
    "general",
    "millennials",
    "genz",
    "professionals",
    "creatives",
    "families",
    "seniors",
    "students",
  ];

  document.getElementById("category").value =
    categories[Math.floor(Math.random() * categories.length)];
  document.getElementById("industry").value =
    industries[Math.floor(Math.random() * industries.length)];
  document.getElementById("tone").value =
    tones[Math.floor(Math.random() * tones.length)];
  document.getElementById("difficulty").value =
    difficulties[Math.floor(Math.random() * difficulties.length)];
  document.getElementById("audience").value =
    audiences[Math.floor(Math.random() * audiences.length)];

  toggleSubcategories();
  showToast("Settings randomized!", "success");
}

function resetSettings() {
  document.getElementById("category").value = "random";
  document.getElementById("industry").value = "random";
  document.getElementById("tone").value = "professional";
  document.getElementById("difficulty").value = "intermediate";
  document.getElementById("audience").value = "general";

  toggleSubcategories();
  showToast("Settings reset to default", "success");
}

function saveTemplate() {
  const config = getFormConfig();
  const templateName = prompt("Enter a name for this template:");

  if (templateName) {
    AppState.templates.push({
      name: templateName,
      config: config,
      createdAt: new Date().toISOString(),
    });

    localStorage.setItem("templates", JSON.stringify(AppState.templates));
    showToast("Template saved!", "success");
  }
}

// Helper Functions for Export
function createPlainTextBrief(brief) {
  return `${brief.name}\n\nProject Brief:\n${
    brief.brief
  }\n\nGenerated: ${new Date(
    brief.metadata.generatedAt
  ).toLocaleDateString()}\nConfiguration: ${brief.metadata.config.category} | ${
    brief.metadata.config.industry
  } | ${brief.metadata.config.tone}\n\n---\nCreated with BriefAI Pro\n`;
}

function createWordContent(brief) {
  return `
<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:w="urn:schemas-microsoft-com:office:word" xmlns="http://www.w3.org/TR/REC-html40">
<head>
    <meta charset="utf-8">
    <title>${brief.name}</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; }
        h1 { color: #2563eb; }
        h2 { color: #4f46e5; margin-top: 2em; }
        .brief-content { background: #f8fafc; padding: 1em; border-left: 4px solid #3b82f6; }
    </style>
</head>
<body>
    <h1>${brief.name}</h1>
    <p><strong>Generated:</strong> ${new Date(
      brief.metadata.generatedAt
    ).toLocaleDateString()}</p>
    
    <h2>Project Brief</h2>
    <div class="brief-content">
        <p>${brief.brief}</p>
    </div>
    
    <h2>Recommended Colors</h2>
    <ul>
        ${Object.entries(brief.colorPalette)
          .map(([name, color]) => `<li><strong>${name}:</strong> ${color}</li>`)
          .join("")}
    </ul>
    
    <h2>Typography</h2>
    <p><strong>Primary:</strong> ${brief.typography.primary}</p>
    <p><strong>Secondary:</strong> ${brief.typography.secondary}</p>
    <p><strong>Rationale:</strong> ${brief.typography.rationale}</p>
    
    <hr>
    <p><em>Generated with BriefAI Pro</em></p>
</body>
</html>
    `;
}

function createHTMLExport(brief) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${brief.name} - Design Brief</title>
    <style>
        body { font-family: Inter, sans-serif; line-height: 1.6; margin: 0; padding: 2rem; background: #f8fafc; }
        .container { max-width: 800px; margin: 0 auto; background: white; padding: 2rem; border-radius: 1rem; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
        h1 { color: #2563eb; margin-bottom: 0.5rem; }
        h2 { color: #4f46e5; margin-top: 2rem; border-bottom: 2px solid #e5e7eb; padding-bottom: 0.5rem; }
        .brief-content { background: #f1f5f9; padding: 1.5rem; border-radius: 0.5rem; border-left: 4px solid #3b82f6; margin: 1rem 0; }
        .color-palette { display: flex; gap: 1rem; margin: 1rem 0; }
        .color-swatch { text-align: center; }
        .color-box { width: 50px; height: 50px; border-radius: 0.5rem; margin-bottom: 0.5rem; border: 2px solid #e5e7eb; }
        .meta { background: #f8fafc; padding: 1rem; border-radius: 0.5rem; margin-bottom: 2rem; }
        .footer { text-align: center; margin-top: 3rem; padding-top: 2rem; border-top: 1px solid #e5e7eb; color: #6b7280; }
    </style>
</head>
<body>
    <div class="container">
        <div class="meta">
            <strong>Generated:</strong> ${new Date(
              brief.metadata.generatedAt
            ).toLocaleDateString()} | 
            <strong>Category:</strong> ${brief.metadata.config.category} | 
            <strong>Industry:</strong> ${brief.metadata.config.industry} | 
            <strong>Tone:</strong> ${brief.metadata.config.tone}
        </div>
        
        <h1>${brief.name}</h1>
        
        <h2>Project Brief</h2>
        <div class="brief-content">
            <p>${brief.brief}</p>
        </div>
        
        <h2>Color Palette</h2>
        <div class="color-palette">
            ${Object.entries(brief.colorPalette)
              .map(
                ([name, color]) => `
                <div class="color-swatch">
                    <div class="color-box" style="background-color: ${color}"></div>
                    <div style="font-size: 0.8rem; font-weight: bold; text-transform: capitalize;">${name}</div>
                    <div style="font-size: 0.7rem; color: #6b7280;">${color}</div>
                </div>
            `
              )
              .join("")}
        </div>
        
        <h2>Typography</h2>
        <p><strong>Primary Font:</strong> ${brief.typography.primary}</p>
        <p><strong>Secondary Font:</strong> ${brief.typography.secondary}</p>
        <div style="background: #f1f5f9; padding: 1rem; border-radius: 0.5rem; margin-top: 1rem;">
            <strong>Rationale:</strong> ${brief.typography.rationale}
        </div>
        
        ${brief.roadmap}
        
        <div class="footer">
            Generated with <strong>BriefAI Pro</strong> - Advanced Design Brief Generator
        </div>
    </div>
</body>
</html>`;
}

// Navigation and UI Functions
function scrollToGenerator() {
  document.getElementById("generator").scrollIntoView({ behavior: "smooth" });
}

function showFeatures() {
  const featuresSection = document.getElementById("featuresSection");
  featuresSection.classList.toggle("hidden");

  if (!featuresSection.classList.contains("hidden")) {
    populateFeatures();
    featuresSection.scrollIntoView({ behavior: "smooth" });
  }
}

function populateFeatures() {
  const featuresGrid = document.querySelector("#featuresSection .grid");
  const features = [
    {
      icon: "fa-robot",
      title: "AI-Powered Insights",
      description:
        "Get intelligent recommendations based on industry trends and competitive analysis.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: "fa-palette",
      title: "Smart Color Palettes",
      description:
        "Automatically generated color schemes tailored to your industry and tone.",
      color: "from-blue-500 to-teal-500",
    },
    {
      icon: "fa-file-export",
      title: "Premium Export Options",
      description:
        "Export to PDF, DOCX, HTML, and JSON formats for any workflow.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: "fa-route",
      title: "Detailed Roadmaps",
      description:
        "Step-by-step project roadmaps with timelines and deliverables.",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: "fa-users",
      title: "Collaboration Tools",
      description:
        "Share briefs, save templates, and collaborate with your team.",
      color: "from-indigo-500 to-purple-500",
    },
    {
      icon: "fa-mobile-alt",
      title: "Mobile-First Design",
      description:
        "Fully responsive interface that works perfectly on all devices.",
      color: "from-pink-500 to-rose-500",
    },
  ];

  featuresGrid.innerHTML = features
    .map(
      (feature) => `
        <div class="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6 hover:transform hover:scale-105 transition-all duration-300">
            <div class="w-12 h-12 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4">
                <i class="fas ${feature.icon} text-white text-xl"></i>
            </div>
            <h3 class="text-xl font-bold mb-3">${feature.title}</h3>
            <p class="text-gray-300">${feature.description}</p>
        </div>
    `
    )
    .join("");
}

function showHelp() {
  const helpContent = `
        <h2 class="text-2xl font-bold mb-4 text-blue-400">
            <i class="fas fa-question-circle mr-2"></i>How to Use BriefAI Pro
        </h2>
        <div class="space-y-4 text-gray-300">
            <div>
                <h3 class="font-semibold text-white mb-2">1. Configure Your Project</h3>
                <p>Select your project category, industry, tone, and target audience. Use advanced options for more specific requirements.</p>
            </div>
            <div>
                <h3 class="font-semibold text-white mb-2">2. Generate Your Brief</h3>
                <p>Click "Generate Professional Brief" to create a comprehensive design brief with AI-powered insights and recommendations.</p>
            </div>
            <div>
                <h3 class="font-semibold text-white mb-2">3. Export and Share</h3>
                <p>Export your brief in multiple formats (PDF, DOCX, HTML, JSON) or share directly with your team.</p>
            </div>
            <div>
                <h3 class="font-semibold text-white mb-2">4. Save and Organize</h3>
                <p>Save briefs to your project library and create templates for future use.</p>
            </div>
        </div>
        <div class="mt-6 pt-4 border-t border-gray-600">
            <h3 class="font-semibold text-white mb-2">Keyboard Shortcuts</h3>
            <ul class="text-sm text-gray-400 space-y-1">
                <li><code class="bg-gray-800 px-2 py-1 rounded">Ctrl/Cmd + Enter</code> - Generate Brief</li>
                <li><code class="bg-gray-800 px-2 py-1 rounded">Escape</code> - Close Modal</li>
            </ul>
        </div>
        <button id="closeHelpBtn" class="mt-6 w-full py-3 bg-blue-600 rounded-xl hover:bg-blue-700 transition-colors duration-300">
            Got it!
        </button>
    `;
  showModal(helpContent);
  document.getElementById("closeHelpBtn").addEventListener("click", closeModal);
}

function showHistory() {
  const historyContent = `
        <h2 class="text-2xl font-bold mb-4 text-purple-400">
            <i class="fas fa-history mr-2"></i>Saved Briefs
        </h2>
        ${
          AppState.savedBriefs.length === 0
            ? '<p class="text-gray-400 text-center py-8">No saved briefs yet. Generate your first brief to get started!</p>'
            : `<div class="space-y-3 max-h-96 overflow-y-auto">
                ${AppState.savedBriefs
                  .slice(-10)
                  .reverse()
                  .map(
                    (brief, index) => `
                    <div class="bg-white/5 p-4 rounded-xl border border-white/10 flex items-center justify-between">
                        <div>
                            <h3 class="font-semibold">${brief.name}</h3>
                            <p class="text-sm text-gray-400">${new Date(
                              brief.savedAt
                            ).toLocaleDateString()} • ${
                      brief.metadata.config.category
                    }</p>
                        </div>
                        <button id="loadBriefBtn-${index}" class="px-4 py-2 bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors duration-300 text-sm">
                            Load
                        </button>
                    </div>
                `
                  )
                  .join("")}
            </div>`
        }
        <button id="closeHistoryBtn" class="mt-6 w-full py-3 bg-gray-600 rounded-xl hover:bg-gray-700 transition-colors duration-300">
            Close
        </button>
    `;
  showModal(historyContent);
  document
    .getElementById("closeHistoryBtn")
    .addEventListener("click", closeModal);
  AppState.savedBriefs.forEach((brief, index) => {
    const btn = document.getElementById(`loadBriefBtn-${index}`);
    if (btn) {
      btn.addEventListener("click", () => loadSavedBrief(index));
    }
  });
}

async function regenerateBrief() {
  if (!AppState.currentBrief) {
    await generateBrief();
    return;
  }

  const config = AppState.currentBrief.metadata.config;
  showLoading();
  try {
    const briefData = await window.briefGenerator.generate(config);
    AppState.currentBrief = briefData;
    displayBrief(briefData);
    hideLoading();
    showToast("Brief regenerated!", "success");
  } catch (error) {
    console.error("Error regenerating brief:", error);
    hideLoading();
    showToast(`Error regenerating brief: ${error.message}`, "error");
    showModal(
      `<h2 class="text-xl font-bold mb-4 text-red-400">Error Regenerating Brief</h2><pre class="text-sm bg-gray-900 text-red-200 p-4 rounded max-h-64 overflow-auto">${
        error && error.stack ? error.stack : String(error)
      }</pre><button id="closeErrorModalBtn" class="mt-4 w-full py-2 bg-red-600 rounded-lg">Close</button>`
    );
    document
      .getElementById("closeErrorModalBtn")
      .addEventListener("click", closeModal);
  }
}

async function createVariation() {
  if (!AppState.currentBrief) {
    showToast("No brief to create variation from", "error");
    return;
  }

  const config = { ...AppState.currentBrief.metadata.config };

  // Randomly modify one aspect for variation
  const variations = ["tone", "complexity", "audience"];
  const toModify = variations[Math.floor(Math.random() * variations.length)];

  const options = {
    tone: Object.keys(TONES),
    complexity: ["beginner", "intermediate", "advanced", "expert"],
    audience: [
      "general",
      "millennials",
      "genz",
      "professionals",
      "creatives",
      "families",
      "seniors",
      "students",
    ],
  };

  const currentValue = config[toModify];
  const newOptions = options[toModify].filter((opt) => opt !== currentValue);
  config[toModify] = newOptions[Math.floor(Math.random() * newOptions.length)];

  showLoading();

  try {
    const briefData = await briefGenerator.generate(config);
    AppState.currentBrief = briefData;
    displayBrief(briefData);
    hideLoading();
    showToast(`Variation created with ${toModify} change!`, "success");
  } catch (error) {
    hideLoading();
    showToast(`Error creating variation: ${error.message}`, "error");
  }
}

async function loadSavedBrief(index) {
  const brief = AppState.savedBriefs[index];
  if (brief) {
    AppState.currentBrief = brief;
    displayBrief(brief);
    closeModal();
    showToast("Brief loaded successfully!", "success");
  }
}

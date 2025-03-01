let customColors = [];

function generateUniqueName(category, subcategory) {
    const prefixes = ["Neo", "Eco", "Vibe", "Pulse", "Glow", "Peak", "Luna", "Zest", "Nova", "Urban", "Solar", "Aqua", "Blaze", "Core", "Flux"];
    const years = ["2025", "2026", "2027", "2028"];

    if (category === "logo") {
        const roots = {
            abstract: ["Abstract", "Form", "Shape"],
            attorney: ["Legal", "Justice", "Law"],
            animal: ["Pet", "Wild", "Paw"],
            art: ["Art", "Creative", "Muse"],
            agriculture: ["Farm", "Grow", "Harvest"],
            business: ["Consult", "Biz", "Pro"],
            brand: ["Brand", "Mark", "Identity"],
            construction: ["Build", "Construct", "Site"],
            children: ["Kid", "Play", "Joy"],
            company: ["Corp", "Co", "Firm"],
            communication: ["Talk", "Connect", "Voice"],
            club: ["Club", "Crew", "Gang"],
            car: ["Auto", "Drive", "Motor"],
            environment: ["Green", "Eco", "Earth"],
            education: ["Learn", "Edu", "Mind"],
            food: ["Food", "Taste", "Bite"],
            fashion: ["Style", "Trend", "Chic"],
            finance: ["Wealth", "Cash", "Fund"],
            holiday: ["Fest", "Joy", "Celebrate"],
            industrial: ["Indust", "Forge", "Works"],
            letter: ["Letter", "Type", "Word"],
            life: ["Life", "Soul", "Vital"],
            music: ["Tune", "Beat", "Melody"],
            medical: ["Med", "Health", "Care"],
            nature: ["Nature", "Leaf", "Bloom"],
            nonprofit: ["Hope", "Cause", "Aid"],
            restaurant: ["Dine", "Eatery", "Bistro"],
            retail: ["Shop", "Store", "Mart"],
            religion: ["Faith", "Spirit", "Grace"],
            sports: ["Sport", "Fit", "Active"],
            storage: ["Store", "Vault", "Space"],
            science: ["Sci", "Tech", "Lab"],
            transportation: ["Trans", "Move", "Ride"],
            travel: ["Travel", "Trip", "Wander"]
        };
        const suffixes = ["Co.", "Labs", "Group", "Hub", "Ventures", "Works", "Inc", "Collective", "Network", "Studio"];
        const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
        const root = roots[subcategory][Math.floor(Math.random() * roots[subcategory].length)];
        const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];
        return `${prefix}${root}${suffix}`;
    } else if (category === "poster") {
        const roots = {
            campaign: ["Campaign", "Cause", "Voice"],
            formative: ["Learn", "Edu", "Grow"],
            social: ["Connect", "Share", "Link"],
            fashion: ["Trend", "Style", "Vibe"],
            movie: ["Film", "Cinema", "Reel"],
            typography: ["Type", "Font", "Word"],
            minimalist: ["Minimal", "Pure", "Clean"],
            political: ["Vote", "Power", "Lead"],
            sale: ["Sale", "Shop", "Deal"]
        };
        const suffixes = ["Fest", "Expo", "Summit", "Run", "Night", "Jam", "Fair", "Rally", "Bash"];
        const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
        const root = roots[subcategory][Math.floor(Math.random() * roots[subcategory].length)];
        const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];
        const year = years[Math.floor(Math.random() * years.length)];
        return `${prefix} ${root} ${suffix} ${year}`;
    } else {
        const roots = ["Sale", "Rush", "Fest", "Con", "Expo"];
        const suffixes = ["Online", "Week", "Night", "Days", "Blitz"];
        const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
        const root = roots[Math.floor(Math.random() * roots.length)];
        const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];
        return `${prefix} ${root} ${suffix}`;
    }
}

function generateUniqueBrief(name, category, subcategory, difficulty) {
    const deadlines = { easy: "3 days", medium: "5 days", hard: "1 week" };
    const deadline = deadlines[difficulty];
    const vibes = ["futuristic", "professional", "playful", "creative", "rustic", "modern", "elegant", "bold", "calm", "vibrant"];
    const audiences = ["18-35 youth", "25-45 professionals", "15-50 general public", "20-40 creatives", "30-60 families"];
    const colors = [
        ["#4682B4", "#D3D3D3"], ["#8B4513", "#F5F5DC"], ["#FF4500", "#FFD700"],
        ["#808080", "#1E90FF"], ["#228B22", "#000000"], ["#800080", "#FF69B4"]
    ];

    let brief, roadmap;
    const vibe = vibes[Math.floor(Math.random() * vibes.length)];
    const audience = audiences[Math.floor(Math.random() * audiences.length)];
    const colorSet = colors[Math.floor(Math.random() * colors.length)];

    if (category === "logo") {
        const briefTemplates = {
            abstract: `Design a logo for '${name}', an abstract art platform launching with a ${vibe} identity. Craft a fluid, non-representational shape that sparks imagination for ${audience}.`,
            attorney: `Design a logo for '${name}', a law firm needing a ${vibe} mark. Form a scales-of-justice icon that radiates trust for ${audience} who value professionalism.`,
            animal: `Design a logo for '${name}', a pet care brand with a ${vibe} vibe. Depict a paw or animal silhouette that warms the hearts of ${audience} who adore pets.`,
            art: `Design a logo for '${name}', an entertainment hub with a ${vibe} flair. Create a brushstroke or stage icon that excites ${audience} who live for culture.`,
            agriculture: `Design a logo for '${name}', a farming co-op with a ${vibe} feel. Shape a wheat stalk or tractor that connects with ${audience} in rural life.`,
            business: `Design a logo for '${name}', a consulting firm with a ${vibe} edge. Form a handshake or graph that appeals to ${audience} in the business world.`,
            brand: `Design a logo for '${name}', a branding agency with a ${vibe} style. Craft a bold ‘B’ or swirl that inspires ${audience} seeking bold identities.`,
            construction: `Design a logo for '${name}', a construction firm with a ${vibe} look. Depict a hammer or building that resonates with ${audience} in trades.`,
            children: `Design a logo for '${name}', a childcare service with a ${vibe} charm. Shape a toy or smile that delights ${audience} with young kids.`,
            company: `Design a logo for '${name}', a corporate entity with a ${vibe} tone. Form a ‘C’ or skyline that suits ${audience} in corporate settings.`,
            communication: `Design a logo for '${name}', a comms agency with a ${vibe} vibe. Create a speech bubble that engages ${audience} who connect daily.`,
            club: `Design a logo for '${name}', a social club with a ${vibe} spirit. Shape a crest or circle that unites ${audience} in community groups.`,
            car: `Design a logo for '${name}', an auto shop with a ${vibe} drive. Depict a wheel or car that revs up ${audience} with vehicles.`,
            environment: `Design a logo for '${name}', a green initiative with a ${vibe} ethos. Form a leaf or globe that motivates ${audience} who care about the planet.`,
            education: `Design a logo for '${name}', a learning center with a ${vibe} mind. Craft a book or cap that educates ${audience} in schools.`,
            food: `Design a logo for '${name}', a food brand with a ${vibe} taste. Shape a fork or fruit that tempts ${audience} who love to eat.`,
            fashion: `Design a logo for '${name}', a beauty line with a ${vibe} style. Form a hanger or face that enchants ${audience} in fashion trends.`,
            finance: `Design a logo for '${name}', a finance firm with a ${vibe} trust. Depict a coin or chart that reassures ${audience} with money matters.`,
            holiday: `Design a logo for '${name}', a festive event with a ${vibe} joy. Craft a star or gift that excites ${audience} celebrating occasions.`,
            industrial: `Design a logo for '${name}', an industrial co. with a ${vibe} strength. Shape a gear or factory that stands firm for ${audience} in manufacturing.`,
            letter: `Design a logo for '${name}', a typography project with a ${vibe} twist. Form a unique letter that captivates ${audience} who love words.`,
            life: `Design a logo for '${name}', a lifestyle brand with a ${vibe} essence. Depict a heart or sun that uplifts ${audience} living vibrantly.`,
            music: `Design a logo for '${name}', a music venture with a ${vibe} rhythm. Craft a note or wave that resonates with ${audience} who listen.`,
            medical: `Design a logo for '${name}', a health service with a ${vibe} care. Shape a cross or pill that comforts ${audience} in need of health.`,
            nature: `Design a logo for '${name}', a nature co. with a ${vibe} bloom. Form a tree or flower that soothes ${audience} who love the outdoors.`,
            nonprofit: `Design a logo for '${name}', a charity with a ${vibe} hope. Depict a hand or dove that inspires ${audience} who give back.`,
            restaurant: `Design a logo for '${name}', a dining spot with a ${vibe} flavor. Craft a plate or chef hat that entices ${audience} who dine out.`,
            retail: `Design a logo for '${name}', a store with a ${vibe} shop. Shape a bag or cart that attracts ${audience} who love shopping.`,
            religion: `Design a logo for '${name}', a faith group with a ${vibe} peace. Form a cross or candle that calms ${audience} who pray.`,
            sports: `Design a logo for '${name}', a fitness brand with a ${vibe} energy. Depict a ball or runner that energizes ${audience} who stay active.`,
            storage: `Design a logo for '${name}', a storage co. with a ${vibe} space. Craft a box or lock that organizes ${audience} with belongings.`,
            science: `Design a logo for '${name}', a tech lab with a ${vibe} future. Shape an atom or flask that intrigues ${audience} in science.`,
            transportation: `Design a logo for '${name}', a transit firm with a ${vibe} motion. Depict a truck or plane that moves ${audience} on the go.`,
            travel: `Design a logo for '${name}', a travel agency with a ${vibe} wander. Craft a globe or suitcase that excites ${audience} who explore.`
        };

        const subcat = subcategory === "random" ? Object.keys(briefTemplates)[Math.floor(Math.random() * Object.keys(briefTemplates).length)] : subcategory;
        const baseBrief = briefTemplates[subcat];

        if (difficulty === "easy") {
            brief = `${baseBrief} Use 2 colors—like ${colorSet[0]} and ${colorSet[1]}—to keep it simple and versatile across digital and print (500x500px, 300dpi). Deadline: ${deadline}. This beginner project hones your skills, creating a clean logo for '${name}'—perfect for a quick portfolio piece.`;
            roadmap = `
                <h3>Roadmap:</h3>
                <p><strong>Day 1: Research and Ideation</strong><br>Begin with '${name}', a ${subcat} entity. Spend 2-3 hours researching similar logos on Dribbble—e.g., abstract shapes, legal icons, pet paws. Note 2-color palettes (${colorSet[0]}, ${colorSet[1]}) and simple designs. Define 5 keywords (e.g., ${vibe}, clear). Sketch 10 ideas—focus on a single icon tied to ${subcat}. Pick 2-3 sketches.</p>
                <p><strong>Day 2: Digitizing</strong><br>In Illustrator (500x500px, 300dpi), digitize your top sketch with the Pen Tool—keep it minimal, 2 hours. Apply ${colorSet[0]} and ${colorSet[1]}, test in grayscale. Add a font (e.g., Montserrat), refine over 2 hours.</p>
                <p><strong>Day 3: Finalize</strong><br>Polish—smooth edges, test at 50x50px—3 hours. Export PNG, JPG, EPS. Deliver a clean logo for '${name}' in ${deadline}.</p>
            `;
        } else if (difficulty === "medium") {
            brief = `${baseBrief} Use 3-4 colors—including ${colorSet[0]} and ${colorSet[1]}—to blend a unique icon with balanced typography (e.g., Roboto). Add a subtle secondary element (e.g., line, curve) for depth, targeting an 800x800px, 300dpi canvas. Deadline: ${deadline}. This medium project refines your skills, crafting a versatile logo for '${name}'.`;
            roadmap = `
                <h3>Roadmap:</h3>
                <p><strong>Day 1: Research</strong><br>For '${name}', a ${subcat} brand, research 15 logos on Behance—note 3-4 color schemes (${colorSet[0]}, ${colorSet[1]}). Define 5-7 keywords.</p>
                <p><strong>Day 2: Sketching</strong><br>Sketch 7-10 ideas with icons and flourishes—2 hours.</p>
                <p><strong>Day 3-4: Design</strong><br>Day 3: Digitize in Illustrator (800x800px)—add a flourish, 4 hours. Day 4: Test Roboto font, mock up on packaging—4 hours.</p>
                <p><strong>Day 5: Finalize</strong><br>Polish, export PNG, JPG, SVG for '${name}' in ${deadline}.</p>
            `;
        } else {
            brief = `${baseBrief} Use 4-5 colors—including ${colorSet[0]} and ${colorSet[1]}—to create a gradient-heavy icon and dynamic typography (e.g., Futura bold, light mix). Target a 1000x1000px, 300dpi canvas for '${name}'’s standout branding across platforms. Deadline: ${deadline}. This hard project pushes your creativity for a bold identity.`;
            roadmap = `
                <h3>Roadmap:</h3>
                <p><strong>Day 1-2: Research</strong><br>For '${name}', a ${subcat} venture, study 20 logos on Dribbble—note gradients, 4-5 colors (${colorSet[0]}, ${colorSet[1]}). Sketch 15 ideas.</p>
                <p><strong>Day 3-4: Digitize</strong><br>Day 3: Illustrator (1000x1000px), craft icon with gradients—5 hours. Day 4: Apply Futura, test gradients—5 hours.</p>
                <p><strong>Day 5-6: Refine</strong><br>Day 5: Perfect icon—4 hours. Day 6: Mock up, adjust—4 hours.</p>
                <p><strong>Day 7: Export</strong><br>Export PNG, SVG, EPS for '${name}' in ${deadline}.</p>
            `;
        }
    } else if (category === "poster") {
        const briefTemplates = {
            campaign: `Design a campaign poster for '${name}', an advocacy event aiming to ignite action with a ${vibe} tone. Craft a bold slogan and symbol (e.g., fist, megaphone) for ${audience} who rally.`,
            formative: `Design a formative poster for '${name}', an educational event with a ${vibe} vibe. Depict a brain or book that informs ${audience} who seek knowledge.`,
            social: `Design a social poster for '${name}', a community connect with a ${vibe} feel. Shape a handshake or heart that binds ${audience} who share ideas.`,
            fashion: `Design a fashion poster for '${name}', a style showcase with a ${vibe} flair. Feature a model silhouette that dazzles ${audience} in trends.`,
            movie: `Design a movie poster for '${name}', a film premiere with a ${vibe} mood. Craft a reel or star that entices ${audience} who love cinema.`,
            typography: `Design a typography poster for '${name}', a text art event with a ${vibe} style. Form bold letters that captivate ${audience} who adore fonts.`,
            minimalist: `Design a minimalist poster for '${name}', a sleek exhibit with a ${vibe} charm. Create a simple line or dot that speaks to ${audience} who value less.`,
            political: `Design a political poster for '${name}', a voting drive with a ${vibe} edge. Depict a ballot or flag that motivates ${audience} who vote.`,
            sale: `Design a sale poster for '${name}', a store discount with a ${vibe} buzz. Shape a price tag or cart that draws ${audience} who shop.`
        };

        const subcat = subcategory === "random" ? Object.keys(briefTemplates)[Math.floor(Math.random() * Object.keys(briefTemplates).length)] : subcategory;
        const baseBrief = briefTemplates[subcat];

        if (difficulty === "easy") {
            brief = `${baseBrief} Use 2 colors—like ${colorSet[0]} and ${colorSet[1]}—to keep it striking and simple on an A3 canvas (11.7x16.5in, 300dpi). Deadline: ${deadline}. This beginner project hones your layout skills for '${name}'.`;
            roadmap = `
                <h3>Roadmap:</h3>
                <p><strong>Day 1: Research and Ideation</strong><br>For '${name}', a ${subcat} event, spend 2-3 hours on Pinterest—study posters like campaigns, movies, or sales. Note 2 colors (${colorSet[0]}, ${colorSet[1]}) and layouts. Sketch 5 ideas—focus on a key element tied to ${subcat}. Pick 2 sketches.</p>
                <p><strong>Day 2: Digitizing</strong><br>In Photoshop (A3, 300dpi), add your element (e.g., fist, book)—2 hours. Apply ${colorSet[0]} and ${colorSet[1]}, add text (e.g., Arial), refine—2 hours.</p>
                <p><strong>Day 3: Finalize</strong><br>Polish—test legibility at 25% zoom—3 hours. Export PNG, JPG for '${name}' in ${deadline}.</p>
            `;
        } else if (difficulty === "medium") {
            brief = `${baseBrief} Use 3-4 colors—including ${colorSet[0]} and ${colorSet[1]}—to blend a central visual with clear text (e.g., Helvetica). Add a subtle texture for depth on an A3 canvas (300dpi). Deadline: ${deadline}. This medium project refines your poster skills for '${name}'.`;
            roadmap = `
                <h3>Roadmap:</h3>
                <p><strong>Day 1: Research</strong><br>For '${name}', a ${subcat} event, research 15 posters on Behance—note 3-4 colors (${colorSet[0]}, ${colorSet[1]}). Define 5-7 keywords.</p>
                <p><strong>Day 2: Sketching</strong><br>Sketch 7-10 ideas with visuals and text—2 hours.</p>
                <p><strong>Day 3-4: Design</strong><br>Day 3: In Photoshop (A3, 300dpi), add visual and texture—4 hours. Day 4: Use Helvetica, mock up—4 hours.</p>
                <p><strong>Day 5: Finalize</strong><br>Polish, export PNG, JPG for '${name}' in ${deadline}.</p>
            `;
        } else {
            brief = `${baseBrief} Use 4-5 colors—including ${colorSet[0]} and ${colorSet[1]}—to create a layered design with bold typography (e.g., Impact). Add gradients for a standout A3 poster (300dpi). Deadline: ${deadline}. This hard project pushes your creativity for '${name}'.`;
            roadmap = `
                <h3>Roadmap:</h3>
                <p><strong>Day 1-2: Research</strong><br>For '${name}', a ${subcat} event, study 20 posters on Dribbble—note gradients, 4-5 colors (${colorSet[0]}, ${colorSet[1]}). Sketch 15 ideas.</p>
                <p><strong>Day 3-4: Digitize</strong><br>Day 3: Photoshop (A3, 300dpi), layer visuals with gradients—5 hours. Day 4: Apply Impact, refine—5 hours.</p>
                <p><strong>Day 5-6: Refine</strong><br>Day 5: Perfect layers—4 hours. Day 6: Mock up, adjust—4 hours.</p>
                <p><strong>Day 7: Export</strong><br>Export PNG, JPG for '${name}' in ${deadline}.</p>
            `;
        }
    } else {
        brief = "Banner category coming soon!";
        roadmap = "";
    }
    return { brief, roadmap };
}

function toggleSubcategories() {
    const category = document.getElementById("category").value;
    const logoSubcategory = document.getElementById("logoSubcategory");
    const posterSubcategory = document.getElementById("posterSubcategory");
    logoSubcategory.classList.toggle("hidden", category !== "logo");
    posterSubcategory.classList.toggle("hidden", category !== "poster");
}

function generateBrief() {
    const generateButton = document.querySelector(".btn");
    generateButton.disabled = true;
    generateButton.textContent = "Generating...";

    setTimeout(() => {
        const category = document.getElementById("category").value;
        const logoSubcategory = document.getElementById("logoSubcategorySelect").value;
        const posterSubcategory = document.getElementById("posterSubcategorySelect").value;
        const difficulty = document.getElementById("difficulty").value;

        if (!category || (!logoSubcategory && !posterSubcategory)) {
            alert("Please select a category and subcategory before generating a brief.");
            generateButton.disabled = false;
            generateButton.textContent = "Generate Brief";
            return;
        }

        const selectedCategory = category === "random" ? 
            ["logo", "poster", "banner"][Math.floor(Math.random() * 3)] : category;
        const subcategory = selectedCategory === "logo" ? logoSubcategory : selectedCategory === "poster" ? posterSubcategory : "random";
        const name = generateUniqueName(selectedCategory, subcategory);
        const { brief, roadmap } = generateUniqueBrief(name, selectedCategory, subcategory, difficulty);

        document.getElementById("briefOutput").innerHTML = brief;
        document.getElementById("roadmap").innerHTML = roadmap;

        generateButton.disabled = false;
        generateButton.textContent = "Generate Brief";
    }, 1000);
}

function addColor() {
    const color = document.getElementById("colorPicker").value;
    customColors.push(color);
    updateColorPalette();
}

function updateColorPalette() {
    const paletteDiv = document.getElementById("customColors");
    paletteDiv.innerHTML = customColors.map(color => `
        <div class="color-swatch" style="background-color: ${color};" onclick="copyColor('${color}')">
            <span>${color}</span>
        </div>
    `).join("");
}

function updateGradient() {
    if (customColors.length >= 2) {
        const gradientType = document.getElementById("gradientType").value;
        let gradient;

        switch (gradientType) {
            case "linear": gradient = `linear-gradient(to right, ${customColors.join(", ")})`; break;
            case "radial": gradient = `radial-gradient(circle, ${customColors.join(", ")})`; break;
            case "angular": gradient = `conic-gradient(${customColors.join(", ")})`; break;
            case "diamond": gradient = `linear-gradient(45deg, ${customColors.join(", ")})`; break;
            case "mesh": gradient = `repeating-linear-gradient(45deg, ${customColors.join(", ")})`; break;
            case "shape-blur": gradient = `linear-gradient(to right, ${customColors.join(", ")})`; break;
            case "freeform": gradient = `linear-gradient(to right, ${customColors.join(", ")})`; break;
            case "multiple": gradient = `linear-gradient(to right, ${customColors.join(", ")}), radial-gradient(circle, ${customColors.join(", ")})`; break;
            default: gradient = `linear-gradient(to right, ${customColors.join(", ")})`;
        }

        document.getElementById("gradientPreview").style.background = gradient;
    } else {
        alert("Please add at least 2 colors to create a gradient!");
    }
}

function resetGradient() {
    customColors = [];
    updateColorPalette();
    document.getElementById("gradientPreview").style.background = "linear-gradient(to right, #ffffff, #000000)";
    alert("Gradient reset successfully!");
}

function copyColor(color) {
    navigator.clipboard.writeText(color).then(() => {
        alert(`Color ${color} copied to clipboard!`);
    });
}

function copyGradientCode() {
    if (customColors.length >= 2) {
        const gradientType = document.getElementById("gradientType").value;
        let gradientCode;

        switch (gradientType) {
            case "linear": gradientCode = `background: linear-gradient(to right, ${customColors.join(", ")})`; break;
            case "radial": gradientCode = `background: radial-gradient(circle, ${customColors.join(", ")})`; break;
            case "angular": gradientCode = `background: conic-gradient(${customColors.join(", ")})`; break;
            case "diamond": gradientCode = `background: linear-gradient(45deg, ${customColors.join(", ")})`; break;
            case "mesh": gradientCode = `background: repeating-linear-gradient(45deg, ${customColors.join(", ")})`; break;
            case "shape-blur": gradientCode = `background: linear-gradient(to right, ${customColors.join(", ")})`; break;
            case "freeform": gradientCode = `background: linear-gradient(to right, ${customColors.join(", ")})`; break;
            case "multiple": gradientCode = `background: linear-gradient(to right, ${customColors.join(", ")}), radial-gradient(circle, ${customColors.join(", ")})`; break;
            default: gradientCode = `background: linear-gradient(to right, ${customColors.join(", ")})`;
        }

        navigator.clipboard.writeText(gradientCode).then(() => {
            alert("Gradient code copied to clipboard:\n" + gradientCode);
        }).catch(() => {
            fallbackCopyText(gradientCode);
        });
    } else {
        alert("Please add at least 2 colors to generate a gradient!");
    }
}

function fallbackCopyText(text) {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    try {
        document.execCommand("copy");
        alert("Gradient code copied to clipboard:\n" + text);
    } catch (err) {
        alert("Failed to copy gradient code. Please try again.");
    }
    document.body.removeChild(textarea);
}

function copyBrief() {
    const briefText = document.getElementById("briefOutput").innerText + "\n\n" + document.getElementById("roadmap").innerText.replace("Roadmap:", "Roadmap:\n");
    navigator.clipboard.writeText(briefText).then(() => {
        alert("Brief and roadmap copied to clipboard!");
    });
}

function downloadBrief() {
    const briefContent = document.getElementById("briefOutput").innerHTML;
    const roadmapContent = document.getElementById("roadmap").innerHTML;
    const gradientContent = document.getElementById("gradientPreview").style.background;
    const paletteContent = customColors.join(", ");
    const format = document.getElementById("downloadFormat").value;
    const signature = `<p style="margin-top: 20px; font-size: 14px;">Brief by <a href="http://www.facebook.com/graphicshop786" target="_blank" style="color: #10b981; text-decoration: none;">Bilal Hussain</a></p>`;

    if (!briefContent || !roadmapContent) {
        alert("Please generate a brief first!");
        return;
    }

    try {
        if (format === "html") {
            const blob = new Blob([`
                <!DOCTYPE html>
                <html>
                <head><title>Design Brief</title><style>.color-swatch {width: 40px; height: 40px; display: inline-block; border-radius: 8px; margin: 4px; border: 2px solid #374151;}</style></head>
                <body style="background: #1f2937; color: #e2e8f0; padding: 20px;">
                    <h2 style="font-size: 24px; font-weight: 600;">Your Design Brief</h2>
                    <p>${briefContent}</p>
                    ${roadmapContent}
                    <h3 style="font-size: 18px; margin-top: 20px;">Custom Mood Board Gradient</h3>
                    <div style="height: 120px; border-radius: 12px; background: ${gradientContent};"></div>
                    <h3 style="font-size: 18px; margin-top: 20px;">Custom Color Palette</h3>
                    <div>${customColors.map(color => `<div class="color-swatch" style="background-color: ${color};"></div>`).join("")}</div>
                    <p>${paletteContent}</p>
                    ${signature}
                </body>
                </html>
            `], { type: "text/html" });
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = "design_brief.html";
            a.click();
            URL.revokeObjectURL(url);
        } else if (format === "txt") {
            const textContent = `${document.getElementById("briefOutput").innerText}\n\n${document.getElementById("roadmap").innerText}\n\nCustom Mood Board Gradient: ${gradientContent}\nCustom Colors: ${paletteContent}\n\nBrief by Bilal Hussain (http://www.facebook.com/graphicshop786)`;
            const blob = new Blob([textContent], { type: "text/plain" });
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = "design_brief.txt";
            a.click();
            URL.revokeObjectURL(url);
        }
    } catch (error) {
        console.error("Download error:", error);
        alert("Download failed. Please try again or check console for errors.");
    }
}
import { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "monolith-residence",
    title: "Monolith Residence",
    tagline: "A low-slung board-marked concrete pavilion embedded into bedrock overlooking the Baltic archipelago.",
    category: "Residential",
    subCategory: "Private Residence",
    year: 2026,
    location: "Stockholm Archipelago, Sweden",
    area: "420 m²",
    heroImage: "https://images.unsplash.com/photo-1728722104881-773da8f4b7ea?auto=format&fit=crop&w=2000&q=85",
    overview: "Set into a rocky granite shelf surrounded by windblown pines, Monolith Residence mediates between elemental exposure and intimate shelter. Solid pigmented concrete walls anchor the home to the bedrock while vast floor-to-ceiling glass expanses open toward the sea.",
    narrative: [
      "The residence is arranged around a central contemplative courtyard, screening the living quarters from northern winter winds while welcoming low southern sunlight deep into the interior floor plate.",
      "Materials were chosen for their capacity to weather gracefully over decades: charcoal-stained Douglas fir, board-formed textured concrete, and flamed Nero Marquina stone. Interior spaces flow without decorative intervention, letting shadow and seasonal daylight define the atmosphere.",
      "Custom millwork crafted from smoked European oak conceals acoustic absorption panels and atmospheric perimeter lighting, ensuring the acoustic quietude of a secluded coastal sanctuary."
    ],
    specs: [
      { label: "Location", value: "Stockholm Archipelago, Sweden" },
      { label: "Completed", value: "2026" },
      { label: "Principal Architect", value: "Aruna Atelier" },
      { label: "Structural Engineer", value: "Nordic Structural Studio" },
      { label: "Landscape Design", value: "Atelier Moss & Stone" },
      { label: "Gross Area", value: "420 m²" }
    ],
    collaborators: ["Nordic Structural Studio", "Atelier Moss & Stone"],
    featured: true,
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=85",
        caption: "Main living gallery looking toward the granite shelf",
        aspect: "wide"
      },
      {
        url: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=85",
        caption: "Courtyard transition and raw concrete colonnade",
        aspect: "portrait"
      },
      {
        url: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=85",
        caption: "Smoked oak joinery in private reading study",
        aspect: "portrait"
      },
      {
        url: "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1600&q=85",
        caption: "Evening illumination across the cantilevered terrace",
        aspect: "wide"
      }
    ]
  },
  {
    slug: "aethel-sanctuary",
    title: "Aethel Sanctuary",
    tagline: "Subterranean hot-spring retreat celebrating restorative silence and volcanic basalt materiality.",
    category: "Hospitality",
    subCategory: "Wellness Retreat",
    year: 2025,
    location: "Reykjavik Hinterland, Iceland",
    area: "1,850 m²",
    heroImage: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=2000&q=85",
    overview: "Conceived as an excavation rather than a construction, Aethel Sanctuary descends beneath moss-covered volcanic ridges. Thermal springs rise through cut basalt baths where ambient steam, acoustic resonance, and controlled daylight create an immersive ritual.",
    narrative: [
      "Rather than imposing architectural forms on Iceland's fragile volcanic terrain, the building is carved into the earth. Raked gravel pathways lead down to a subterranean colonnade illuminated solely by skylights calibrated to northern daylight shifts.",
      "The baths are lined with honed lava stone cut from the excavation itself. Warm timber ceilings of hand-planed charred larch absorb reverberant sound, leaving only the rhythm of mineral water falling against stone.",
      "Guest chambers feature built-in sleeping alcoves overlooking sheltered moss gardens, where floor-level glazing directs the gaze toward the surrounding ground plane."
    ],
    specs: [
      { label: "Location", value: "Reykjavik Hinterland, Iceland" },
      { label: "Completed", value: "2025" },
      { label: "Architecture & Interiors", value: "Aruna Atelier" },
      { label: "Hydraulic Engineering", value: "Varmat Geothermal" },
      { label: "Lighting Conception", value: "Studio Umbra" },
      { label: "Total Area", value: "1,850 m²" }
    ],
    collaborators: ["Varmat Geothermal", "Studio Umbra"],
    featured: true,
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1600&q=85",
        caption: "Honed basalt thermal bath chamber",
        aspect: "wide"
      },
      {
        url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=85",
        caption: "Subterranean corridor connecting private pavilions",
        aspect: "portrait"
      },
      {
        url: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85",
        caption: "Charred larch joinery and tactile linen textiles",
        aspect: "portrait"
      },
      {
        url: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1600&q=85",
        caption: "Guest pavilion oriented toward volcanic moss fields",
        aspect: "wide"
      }
    ]
  },
  {
    slug: "vessel-headquarters",
    title: "Vessel Headquarters",
    tagline: "A corporate flagship and gallery combining industrial timber frames with monumental stone partitions.",
    category: "Commercial",
    subCategory: "Workplace & Exhibition",
    year: 2026,
    location: "Copenhagen Harbour, Denmark",
    area: "2,400 m²",
    heroImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=85",
    overview: "Occupying a former shipyard warehouse along Copenhagen's industrial waterfront, Vessel Headquarters transforms heavy industrial heritage into a tranquil, light-dappled spatial sequence for creative collaboration and design display.",
    narrative: [
      "The structural framework celebrates post-tensioned glulam timber beams counterbalanced by monumental blocks of sandblasted Jura limestone. Double-height voids bring maritime light deep into collective studio areas.",
      "Acoustics were treated as an architectural material: seamless micro-perforated acoustic timber ceilings dampen ambient noise while preserving the reverberation of natural conversation.",
      "The ground floor acts as a public exhibition hall and material library, welcoming designers and visitors to touch architectural samples and study spatial mockups in neutral light."
    ],
    specs: [
      { label: "Location", value: "Copenhagen Harbour, Denmark" },
      { label: "Completed", value: "2026" },
      { label: "Design Direction", value: "Aruna Atelier" },
      { label: "Heritage Restoration", value: "Copenhagen Preservation Lab" },
      { label: "Cabinetry & Millwork", value: "Snedker Atelier CPH" },
      { label: "Floor Area", value: "2,400 m²" }
    ],
    collaborators: ["Copenhagen Preservation Lab", "Snedker Atelier CPH"],
    featured: true,
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1600&q=85",
        caption: "Central design forum with post-tensioned timber frame",
        aspect: "wide"
      },
      {
        url: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=85",
        caption: "Focus atelier with integrated limestone credenzas",
        aspect: "portrait"
      },
      {
        url: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=85",
        caption: "Materials library and tactile archive room",
        aspect: "portrait"
      },
      {
        url: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=85",
        caption: "Double-height atrium open to northern harbor light",
        aspect: "wide"
      }
    ]
  },
  {
    slug: "fjord-boat-house",
    title: "Fjord Boat House",
    tagline: "A secluded timber guest house and dockhouse perched at the water's edge.",
    category: "Residential",
    subCategory: "Coastal Retreat",
    year: 2024,
    location: "Flensburg Fjord, Denmark",
    area: "140 m²",
    heroImage: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=2000&q=85",
    overview: "Built directly upon century-old timber pilings, Fjord Boat House functions as a quiet writing retreat and guest pavilion. Cedar siding weathered to silver gray blurs the boundary between architecture and the tidal inlet.",
    narrative: [
      "The plan is deliberately compact, reduced to two primary volumes: a communal hearth room overlooking the dock, and a quiet sleeping loft wrapped in unlacquered cedar slats.",
      "Custom sliding timber screens allow inhabitants to regulate sun exposure and privacy, transforming the pavilion from an open dockside shelter into an enclosed warm cabin during northern storms."
    ],
    specs: [
      { label: "Location", value: "Flensburg Fjord, Denmark" },
      { label: "Completed", value: "2024" },
      { label: "Architecture", value: "Aruna Atelier" },
      { label: "Marine Engineering", value: "Fjord Havneteknik" },
      { label: "Footprint", value: "140 m²" }
    ],
    collaborators: ["Fjord Havneteknik"],
    featured: false,
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1600&q=85",
        caption: "Waterfront elevation viewed from the floating pontoon",
        aspect: "wide"
      },
      {
        url: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=85",
        caption: "Minimal fireplace wall in blackened steel",
        aspect: "portrait"
      }
    ]
  },
  {
    slug: "chancery-atrium",
    title: "Chancery Atrium",
    tagline: "A heritage civic renovation balancing restored Portland stone with dark patinated bronze.",
    category: "Commercial",
    subCategory: "Civic & Cultural",
    year: 2025,
    location: "London, United Kingdom",
    area: "3,100 m²",
    heroImage: "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=2000&q=85",
    overview: "A surgical intervention within a Grade II listed civic hall, inserting a contemporary suspended acoustic pavilion beneath restored Victorian skylights.",
    narrative: [
      "The historic limestone walls are left untreated, contrasted by clean interventions in brushed dark bronze and acoustic slatted walnut.",
      "The centerpiece is a cantilevered ceremonial staircase that ribbons through the vertical atrium, creating viewing platforms across historic reliefs."
    ],
    specs: [
      { label: "Location", value: "London, United Kingdom" },
      { label: "Completed", value: "2025" },
      { label: "Conservation Architect", value: "Aruna Atelier + Heritage UK" },
      { label: "Gross Area", value: "3,100 m²" }
    ],
    featured: false,
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=85",
        caption: "Ascending atrium perspective",
        aspect: "wide"
      }
    ]
  },
  {
    slug: "kyoto-forest-villa",
    title: "Kyoto Forest Villa",
    tagline: "A modern Sukiya-inspired retreat nestled in the bamboo foothills of Arashiyama.",
    category: "Residential",
    subCategory: "Private Residence",
    year: 2025,
    location: "Kyoto, Japan",
    area: "310 m²",
    heroImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=85",
    overview: "A dialogue between Japanese joinery and Scandinavian spatial proportion. Deep cedar eaves cast elongated shadows, turning changing daylight into the primary ornament of the home.",
    narrative: [
      "Constructed entirely with mortise and tenon cedar joints without mechanical fasteners, the villa breathes with the surrounding mountain microclimate.",
      "Floors transition from raked basalt pebbles at the engawa veranda to tatami mats woven from organic rush in the tea pavilion."
    ],
    specs: [
      { label: "Location", value: "Kyoto, Japan" },
      { label: "Completed", value: "2025" },
      { label: "Architect", value: "Aruna Atelier" },
      { label: "Master Carpenter", value: "Miyadaigaku Studio" },
      { label: "Area", value: "310 m²" }
    ],
    featured: true,
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1600&q=85",
        caption: "Engawa veranda overlooking the bamboo reserve",
        aspect: "wide"
      },
      {
        url: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?auto=format&fit=crop&w=1200&q=85",
        caption: "Tea pavilion illuminated by softened shoji screen light",
        aspect: "portrait"
      }
    ]
  },
  {
    slug: "nordic-dune-residence",
    title: "Nordic Dune Residence",
    tagline: "Weathered oak pavilions clustered around a sunken courtyard in the coastal dunes of Jutland.",
    category: "Residential",
    subCategory: "Coastal Villa",
    year: 2026,
    location: "Skagen, Denmark",
    area: "380 m²",
    heroImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=85",
    overview: "Designed to endure harsh North Sea maritime weather, four interconnected timber pavilions hug the natural contours of the sand dunes, framing panoramic views of wind and sea.",
    narrative: [
      "The rooflines gently echo the rolling ridge of surrounding dunes, clad in untreated cedar shingles that turn silvery platinum under salty sea air.",
      "Inside, terrazzo flooring infused with local beach stone aggregates provides thermal mass, absorbing sunlight during the day and radiating warmth through the evening."
    ],
    specs: [
      { label: "Location", value: "Skagen, Denmark" },
      { label: "Completed", value: "2026" },
      { label: "Architecture", value: "Aruna Atelier" },
      { label: "Gross Area", value: "380 m²" }
    ],
    featured: true,
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=85",
        caption: "Sunken hearth room with direct dune outlook",
        aspect: "wide"
      }
    ]
  },
  {
    slug: "alps-monastic-retreat",
    title: "Alps Monastic Retreat",
    tagline: "A stone-and-timber alpine shelter prioritizing thermal envelope efficiency and quiet solitude.",
    category: "Hospitality",
    subCategory: "Mountain Refuge",
    year: 2024,
    location: "Vals, Switzerland",
    area: "760 m²",
    heroImage: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=2000&q=85",
    overview: "Anchored into the steep slate slopes above Vals, this 12-suite sanctuary pairs locally quarried gneiss stone with alpine larch to form an indestructible winter sanctuary.",
    narrative: [
      "Thick masonry walls provide exceptional acoustic and thermal insulation, insulating guests from sub-zero mountain winds.",
      "Every suite is centered around a private open hearth and a monolithic stone soaking tub facing snow-covered alpine peaks."
    ],
    specs: [
      { label: "Location", value: "Vals, Switzerland" },
      { label: "Completed", value: "2024" },
      { label: "Architect", value: "Aruna Atelier" },
      { label: "Total Area", value: "760 m²" }
    ],
    featured: false,
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=85",
        caption: "Alpine elevation amidst snowfall",
        aspect: "wide"
      }
    ]
  }
];

export const heroSlides = [
  {
    id: "01",
    title: "MONOLITH RESIDENCE",
    location: "Stockholm Archipelago, Sweden",
    narrative: "In the windswept coastal landscape of the archipelago, Monolith Residence rests as a quiet sanctuary. Raw board-marked concrete meets smoked oak joinery, framing panoramic sea horizons through precise architectural apertures.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85",
    slug: "monolith-residence",
    category: "Residential"
  },
  {
    id: "02",
    title: "AETHEL SANCTUARY",
    location: "Reykjavik Hinterland, Iceland",
    narrative: "Carved into subterranean volcanic rock, Aethel Sanctuary reimagines geothermal bathing. Natural steam, honed basalt masonry, and filtered daylight create an atmosphere of profound restorative stillness.",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=2000&q=85",
    slug: "aethel-sanctuary",
    category: "Hospitality"
  },
  {
    id: "03",
    title: "VESSEL HEADQUARTERS",
    location: "Copenhagen Harbour, Denmark",
    narrative: "Along the historic industrial waterfront, Vessel Headquarters balances monumental post-tensioned timber with sandblasted limestone partitions, cultivating calm focus within a light-flooded workspace.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=85",
    slug: "vessel-headquarters",
    category: "Commercial"
  },
  {
    id: "04",
    title: "KYOTO FOREST VILLA",
    location: "Arashiyama, Japan",
    narrative: "A contemplative dialogue between traditional Japanese joinery and Nordic spatial reduction. Deep cedar overhangs and paper screens direct attention to the quiet rustle of surrounding bamboo groves.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=85",
    slug: "kyoto-forest-villa",
    category: "Residential"
  },
  {
    id: "05",
    title: "NORDIC DUNE RESIDENCE",
    location: "Skagen, Denmark",
    narrative: "Tucked into the coastal dunes where Baltic and North Seas converge. Weathered cedar pavilions shield a sunken courtyard from sea winds, forming a warm shelter enveloped in coastal light.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=85",
    slug: "nordic-dune-residence",
    category: "Residential"
  }
];

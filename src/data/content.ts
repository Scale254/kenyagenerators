import type {
  Service,
  Project,
  Testimonial,
  FAQ,
  Stat,
  Industry,
  BlogPost,
  ClientLogo,
} from "@/types";

export const services: Service[] = [
  {
    slug: "electrical",
    title: "Electrical Services",
    summary:
      "Design, installation, testing and maintenance of electrical systems for commercial & industrial clients.",
    description:
      "Kenya Generators & Compressors Solutions provides electrical services for commercial and industrial clients throughout the country. Our services include design, installation, testing and maintenance of complete electrical systems.",
    icon: "Zap",
    items: [
      "Cable supply, installation & termination",
      "Complete electrical system installation",
      "Electrical machines installation",
      "Power distribution boards installation",
      "Testing & commissioning",
    ],
    image:
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "maintenance",
    title: "Maintenance & Repair",
    summary:
      "Emergency, planned and preventive maintenance for generators, compressors & power panels.",
    description:
      "Kenya Generators & Compressors Solutions Ltd has been providing emergency, planned and preventive maintenance and repair services for power generators, air compressors and electrical power panels. Our maintenance includes mechanical engine overhaul and full servicing.",
    icon: "Wrench",
    items: [
      "Mechanical engines overhaul",
      "Generators service",
      "Air compressors service",
      "Electrical power panels service",
      "Emergency & preventive maintenance",
    ],
    image:
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "installation",
    title: "Supply & Installation",
    summary:
      "Turnkey supply and professional installation of generators & compressors.",
    description:
      "From technical specification and site assessment to delivery, installation and commissioning, we provide complete turnkey supply and installation for generators and air compressors — ensuring safety, durability and optimal performance.",
    icon: "Settings",
    items: [
      "Generators installation",
      "Air compressors installation",
      "System integration",
      "Training & technical support",
      "Commissioning & handover",
    ],
    image: "/images/installation.jpeg",
  },
];

export const stats: Stat[] = [
  { value: 10, suffix: "+", label: "Years of Experience", icon: "CalendarClock" },
  { value: 100, suffix: "+", label: "Projects Completed", icon: "CheckCircle2" },
  { value: 50, suffix: "+", label: "Trusted Clients", icon: "Users" },
  { value: 47, suffix: "", label: "Counties Served", icon: "MapPin" },
];

export const industries: Industry[] = [
  { name: "Manufacturing", icon: "Factory" },
  { name: "Construction", icon: "HardHat" },
  { name: "Hospitals & Healthcare", icon: "HeartPulse" },
  { name: "Hospitality & Hotels", icon: "Hotel" },
  { name: "Banking & Finance", icon: "Landmark" },
  { name: "Telecommunications", icon: "RadioTower" },
  { name: "Agriculture", icon: "Wheat" },
  { name: "Water & Utilities", icon: "Droplets" },
  { name: "Real Estate", icon: "Building2" },
  { name: "Education", icon: "GraduationCap" },
  { name: "Logistics & Transport", icon: "Truck" },
  { name: "Retail & Malls", icon: "ShoppingBag" },
];

export const whyChooseUs = [
  {
    icon: "ShieldCheck",
    title: "Quality Products & Services",
    description:
      "We supply only trusted, genuine equipment and deliver quality that nobody else offers.",
  },
  {
    icon: "Wrench",
    title: "Expert Technicians",
    description:
      "A skilled technical team studies specifications and performs precise preventive measures.",
  },
  {
    icon: "Headset",
    title: "Reliable After-Sales Support",
    description:
      "Emergency, planned and preventive maintenance keeps your equipment running.",
  },
  {
    icon: "MapPinned",
    title: "Nationwide Coverage",
    description:
      "We serve clients countrywide with fast delivery and on-site service.",
  },
  {
    icon: "BadgeCheck",
    title: "Genuine Spare Parts",
    description:
      "Genuine parts for generators and compressors at competitive prices.",
  },
  {
    icon: "Handshake",
    title: "Total Solutions",
    description:
      "We go the extra mile — a system isn't a solution until it meets every client need.",
  },
];

export const projects: Project[] = [
  {
    slug: "industrial-standby-power",
    title: "500 kVA Industrial Standby Power",
    client: "Leading Manufacturer",
    industry: "Manufacturing",
    location: "Industrial Area, Nairobi",
    year: "2024",
    summary:
      "Supply, installation and commissioning of a soundproof standby generator with automatic transfer switch for uninterrupted production.",
    scope: [
      "Site assessment & load analysis",
      "500 kVA generator supply",
      "ATS panel installation",
      "Testing & commissioning",
    ],
    image: "/images/power.png",
  },
  {
    slug: "hospital-backup-power",
    title: "Hospital Critical Backup Power",
    client: "Regional Hospital",
    industry: "Healthcare",
    location: "Nairobi",
    year: "2024",
    summary:
      "Redundant generator installation ensuring critical care units never lose power, with preventive maintenance contract.",
    scope: [
      "Redundant generator setup",
      "Synchronisation panel",
      "Preventive maintenance plan",
      "24/7 emergency support",
    ],
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "workshop-air-compressor",
    title: "Industrial Air Compressor Plant",
    client: "Automotive Workshop Group",
    industry: "Automotive",
    location: "Mombasa Road, Nairobi",
    year: "2023",
    summary:
      "Complete belt-driven compressor installation with air distribution piping across a large service workshop.",
    scope: [
      "Compressor supply & install",
      "Air distribution piping",
      "Pressure regulation",
      "Operator training",
    ],
    image: "/images/compressor.jpeg",
  },
  {
    slug: "hotel-power-solution",
    title: "Hotel Power Continuity Solution",
    client: "Hospitality Group",
    industry: "Hospitality",
    location: "Nairobi",
    year: "2023",
    summary:
      "Low-noise canopy generator supplying seamless standby power to a busy hotel, with electrical distribution upgrade.",
    scope: [
      "Low-noise generator",
      "Distribution board upgrade",
      "Cable installation",
      "Commissioning",
    ],
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "telecom-site-power",
    title: "Telecom Site Power Deployment",
    client: "Telecommunications Provider",
    industry: "Telecommunications",
    location: "Multiple Counties",
    year: "2022",
    summary:
      "Rollout of prime-power generators across remote telecom sites with remote monitoring and scheduled servicing.",
    scope: [
      "Prime-power generators",
      "Remote monitoring",
      "Fuel management",
      "Scheduled servicing",
    ],
    image: "/images/genset.jpeg",
  },
  {
    slug: "water-pumping-station",
    title: "Water Pumping Station Backup",
    client: "County Water Utility",
    industry: "Water & Utilities",
    location: "Central Kenya",
    year: "2022",
    summary:
      "Standby generator and electrical panel installation ensuring continuous water supply during grid outages.",
    scope: [
      "Standby generator",
      "Motor control panel",
      "Cable & termination",
      "Testing & handover",
    ],
    image:
      "https://images.unsplash.com/photo-1509390144018-eeaf65052242?auto=format&fit=crop&w=1200&q=80",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "KGCS supplied and installed our standby generator on time and within budget. Their technicians are professional and the after-sales support is excellent.",
    name: "Operations Manager",
    role: "Operations Manager",
    company: "Manufacturing Company",
    rating: 5,
  },
  {
    quote:
      "We rely on KGCS for our preventive maintenance. Our generators have never let us down thanks to their planned service schedule.",
    name: "Facilities Lead",
    role: "Facilities Lead",
    company: "Regional Hospital",
    rating: 5,
  },
  {
    quote:
      "From the site survey to commissioning, the team was knowledgeable and responsive. Genuine spare parts always in stock.",
    name: "Procurement Officer",
    role: "Procurement Officer",
    company: "Hospitality Group",
    rating: 5,
  },
  {
    quote:
      "Their air compressor installation transformed our workshop efficiency. Highly recommend KGCS for industrial air solutions.",
    name: "Workshop Manager",
    role: "Workshop Manager",
    company: "Automotive Group",
    rating: 5,
  },
];

export const faqs: FAQ[] = [
  {
    question: "What size generator do I need for my business?",
    answer:
      "The right size depends on your total load and the equipment you need to run. Our technicians perform a load analysis at your site to recommend the correct kVA rating — from small 8 kVA sets to large 2000 kVA industrial units.",
  },
  {
    question: "Do you offer installation and commissioning?",
    answer:
      "Yes. We provide complete turnkey supply, installation, testing and commissioning for both generators and air compressors, including electrical distribution and automatic transfer switches.",
  },
  {
    question: "Which generator and compressor brands do you supply?",
    answer:
      "For generators we supply Perkins, Cummins and Lovol. For air compressors we supply Ingersoll Rand, Atlas Copco and Chicago Pneumatic, among others.",
  },
  {
    question: "Do you provide maintenance contracts?",
    answer:
      "Absolutely. We offer emergency, planned and preventive maintenance contracts covering generators, air compressors and electrical power panels to maximise uptime and equipment life.",
  },
  {
    question: "Do you sell genuine spare parts?",
    answer:
      "Yes. We stock genuine spare parts for generators and compressors — filters, alternators, AVRs, belts, control panels and more — delivered countrywide at competitive prices.",
  },
  {
    question: "Which areas do you cover?",
    answer:
      "We are based in Nairobi and serve clients across Kenya, offering nationwide delivery, installation and on-site service.",
  },
];

export const clientLogos: ClientLogo[] = [
  { name: "KenGen", abbr: "KenGen" },
  { name: "Kenya Power", abbr: "KP" },
  { name: "Equity Bank", abbr: "Equity" },
  { name: "Nairobi Water", abbr: "NW" },
  { name: "Bolloré Transport & Logistics", abbr: "Bolloré" },
  { name: "Safaricom", abbr: "Safaricom" },
  { name: "Bidco Africa", abbr: "Bidco" },
  { name: "Davis & Shirtliff", abbr: "D&S" },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "how-to-choose-the-right-diesel-generator",
    title: "How to Choose the Right Diesel Generator for Your Business in Kenya - Complete Guide 2025",
    excerpt:
      "Sizing, fuel efficiency, noise and standby vs prime power — a practical guide to selecting the perfect diesel generator for Kenyan businesses. Learn from Kenya Generators experts.",
    content: [
      "Choosing the right diesel generator for your business in Kenya is one of the most important decisions you'll make. Whether you're running a manufacturing plant in Nairobi's Industrial Area, a hotel in Mombasa, a hospital in Kisumu, or a construction site in Eldoret, having reliable backup power is essential. Kenya Generators & Compressors Solutions Ltd has been helping businesses across Kenya select, install and maintain diesel generators for over a decade.",
      "The first step in choosing a diesel generator is understanding your power requirements. List every appliance, machine, and piece of equipment you need to power during an outage. Note both the starting wattage (surge power) and running wattage for each item. Motors, compressors, and pumps typically require 2-3 times their running wattage to start. Add up all the running wattages and add a safety margin of 20-25% for future growth. This total will give you the minimum kVA rating you need for your diesel generator.",
      "In Kenya, power outages can last from a few minutes to several hours, especially during the rainy season. The Kenya Power grid experiences fluctuations that can damage sensitive equipment. A properly sized diesel generator with an automatic voltage regulator (AVR) protects your equipment from voltage spikes and drops. For businesses in Nairobi, Mombasa, Nakuru, and other major cities, we recommend generators with digital control panels that monitor voltage, frequency, and engine parameters in real-time.",
      "Next, decide between standby and prime power diesel generators. Standby generators are designed to kick in automatically during power outages and run for limited hours. They're ideal for offices, retail shops, restaurants, and residential properties in Kenya where outages are infrequent. Prime power generators, on the other hand, are built to run continuously and can serve as your primary power source. These are essential for mining operations, remote construction sites, and agricultural processing plants in rural Kenya where grid power is unreliable or unavailable.",
      "The engine brand matters significantly when choosing a diesel generator in Kenya. Perkins generators are among the most popular in Kenya due to their reliability, fuel efficiency, and widespread availability of spare parts. Cummins generators offer excellent performance for heavy-duty applications and are favored by large industrial users. Lovol generators provide a cost-effective option for small to medium businesses. Kenya Generators supplies all three brands and can help you choose based on your specific needs and budget.",
      "Fuel efficiency is a critical consideration for diesel generator owners in Kenya, where fuel costs can significantly impact your operating expenses. Modern Perkins and Cummins engines offer excellent fuel economy, consuming as little as 0.25 liters per kWh at optimal load. Soundproof canopies not only reduce noise but also help maintain optimal operating temperatures, improving fuel efficiency. For businesses in residential areas of Nairobi like Kilimani, Westlands, or Karen, noise levels are regulated, and a soundproof diesel generator is essential to avoid complaints from neighbors.",
      "The alternator is another crucial component of your diesel generator. Stamford and Leroy Somer alternators are industry standards in Kenya, known for their reliability and consistent power output. Look for generators with brushless alternators, which require less maintenance and provide cleaner power for sensitive electronics like computers, medical equipment, and telecommunications systems.",
      "Automatic Transfer Switches (ATS) are essential for businesses that cannot afford any downtime. An ATS automatically detects a power outage, starts the diesel generator, and transfers the load within seconds. When grid power returns, the ATS switches back and shuts down the generator. Kenya Generators installs ATS panels with all our generator installations, ensuring seamless power transitions for hospitals, data centers, banks, and manufacturing facilities across Kenya.",
      "Installation location matters for diesel generator performance and longevity. The generator should be placed on a level, well-ventilated concrete pad with adequate clearance for maintenance access. Exhaust fumes must be directed away from buildings and air intakes. In Kenya's coastal regions like Mombasa and Malindi, salt air can corrode generator components, so we recommend additional protective coatings and more frequent maintenance schedules.",
      "Finally, factor in a preventive maintenance plan from day one. Kenya Generators & Compressors Solutions Ltd performs a full site load analysis to recommend the ideal diesel generator unit for your needs. Our maintenance contracts include regular oil changes, filter replacements, battery checks, and load bank testing. With proper maintenance, a quality diesel generator can serve your Kenyan business reliably for 15-20 years or more.",
      "When buying a diesel generator in Kenya, always work with a reputable supplier who offers genuine spare parts, technical support, and warranty coverage. Kenya Generators provides comprehensive after-sales support, including 24/7 emergency service, genuine Perkins, Cummins, and Lovol spare parts, and certified technicians who understand the unique power challenges faced by businesses across Kenya. Contact us today for a free consultation and site assessment.",
    ],
    category: "Guides",
    author: "Kenya Generators Technical Team",
    date: "2025-01-15",
    readTime: "12 min read",
    image: "/images/generator2.jpeg",
  },
  {
    slug: "generator-preventive-maintenance-checklist",
    title: "Generator Preventive Maintenance Checklist for Kenya Businesses - Complete Guide",
    excerpt:
      "Keep your diesel generator reliable with this essential preventive maintenance routine from Kenya Generators technicians. Complete checklist for businesses across Kenya.",
    content: [
      "Preventive maintenance is the single best way to guarantee your diesel generator starts when you need it most. In Kenya, where power outages from Kenya Power can happen without warning, a neglected generator is the most common cause of business disruption. Kenya Generators technicians have serviced hundreds of generators across Nairobi, Mombasa, Kisumu, Nakuru, and Eldoret, and we've seen firsthand how proper maintenance prevents costly breakdowns.",
      "A diesel generator that sits idle for months without maintenance will likely fail when you need it most. Battery degradation, fuel contamination, oil breakdown, and coolant issues are the top causes of generator failure in Kenya. The good news is that most of these issues are preventable with a structured maintenance routine. Whether you have a small 8 kVA Perkins generator for your home office or a 2000 kVA Cummins generator for your factory, the principles of preventive maintenance remain the same.",
      "Weekly maintenance checks take just 15 minutes but can save you thousands in repair costs. Start by visually inspecting your diesel generator for any signs of oil, coolant, or fuel leaks. Check the oil level using the dipstick and top up if necessary with the recommended grade. In Kenya's hot climate, we recommend 15W-40 diesel engine oil for most generators. Check the coolant level in the radiator and expansion tank. Low coolant can cause overheating, which is a leading cause of engine damage in Kenya's high-temperature environments.",
      "Run a no-load test weekly by starting the generator and letting it run for 10-15 minutes without any load connected. This circulates oil through the engine, charges the battery, and ensures the generator will start when needed. Listen for unusual noises like knocking, rattling, or excessive vibration, which could indicate internal problems. Check the exhaust for unusual smoke color — black smoke indicates incomplete combustion, blue smoke suggests oil burning, and white smoke may indicate coolant leakage.",
      "Monthly maintenance tasks are more thorough and should be scheduled during a time when you can afford a brief power interruption. Test the generator under load by running it with your actual equipment connected for at least 30 minutes. This exercises the engine at operating temperature and burns off any carbon deposits that may have accumulated. In Kenya, where generators often sit idle for weeks between outages, monthly load testing is essential to prevent wet stacking — a condition where unburned fuel accumulates in the exhaust system.",
      "Inspect the battery monthly, as battery failure is the number one cause of generator starting problems in Kenya. Check the battery terminals for corrosion and clean them with a wire brush if needed. Measure the battery voltage with a multimeter — a fully charged 12V battery should read 12.6V or higher. If the voltage is below 12.4V, charge the battery or replace it if it's more than two years old. Kenya Generators stocks genuine replacement batteries for all generator brands we service.",
      "Clean or replace air filters monthly, especially if your generator is located in a dusty environment. In Kenya's arid regions like Turkana, Marsabit, or during the dry season in Nairobi, dust accumulation can restrict airflow and reduce engine performance. A clogged air filter forces the engine to work harder, increasing fuel consumption and reducing power output. Kenya Generators supplies genuine air filters for Perkins, Cummins, and Lovol generators with nationwide delivery.",
      "Quarterly maintenance should be performed by a qualified technician and includes changing the engine oil and oil filter. The oil change interval depends on your generator's usage — for standby generators in Kenya that run less than 50 hours per year, an annual oil change is sufficient. For prime power generators running continuously, change oil every 250 operating hours. Use only the oil grade specified in your generator's manual, as using the wrong oil can void your warranty and cause engine damage.",
      "Replace fuel filters quarterly to prevent contaminated fuel from reaching the engine. In Kenya, diesel fuel quality can vary, and water contamination is common, especially during the rainy season. Water in the fuel system can cause corrosion, injector damage, and engine failure. Kenya Generators recommends installing a water separator filter and draining any accumulated water weekly. Our technicians can test your fuel for contamination and recommend appropriate filtration solutions.",
      "Annual maintenance is the most comprehensive service and should include a full generator overhaul inspection. Our Kenya Generators technicians will inspect the alternator windings, test the automatic voltage regulator, calibrate the control panel, and perform a load bank test to verify the generator can deliver its rated output. We also inspect the exhaust system, cooling system, and all electrical connections. Any worn components are replaced before they cause a failure.",
      "The automatic transfer switch (ATS) should be tested annually to ensure it operates correctly during a power outage. Simulate a power failure by switching off the main breaker and verify that the generator starts, the ATS transfers the load, and when power returns, the system switches back smoothly. Kenya Generators services all ATS brands and can repair or replace faulty components to ensure reliable operation.",
      "A maintenance contract with Kenya Generators takes all this off your plate. Our technicians follow a documented schedule tailored to your generator's usage pattern and keep genuine spare parts on hand for Perkins, Cummins, Lovol, and other brands. We serve clients across all 47 counties in Kenya, from Nairobi and Mombasa to remote locations in Turkana and Mandera. Our emergency response team is available 24/7 for urgent repairs, and our preventive maintenance contracts start from as little as KSh 15,000 per year for small generators.",
      "Don't wait for your generator to fail during a critical power outage. Contact Kenya Generators today to schedule a maintenance assessment and keep your business running smoothly. Our certified technicians have over 10 years of experience servicing diesel generators across Kenya, and we guarantee our work with a 6-month warranty on all repairs and replacements.",
    ],
    category: "Maintenance",
    author: "Kenya Generators Technical Team",
    date: "2025-02-02",
    readTime: "12 min read",
    image: "/images/maintenance1.jpeg",
  },
  {
    slug: "electric-vs-diesel-air-compressors",
    title: "Electric vs Diesel Air Compressors: Which Is Right for Your Kenya Business?",
    excerpt:
      "Understand the trade-offs between electric and diesel-driven air compressors for your application in Kenya. Complete comparison guide from Kenya Generators experts.",
    content: [
      "Choosing between electric and diesel air compressors is a critical decision for businesses in Kenya. Whether you're running a construction site in Nairobi, a manufacturing plant in Thika, a mining operation in Kakamega, or an automotive workshop in Mombasa, the right air compressor can significantly impact your productivity and operating costs. Kenya Generators & Compressors Solutions Ltd has been supplying and servicing air compressors across Kenya for over a decade, and we're here to help you make the right choice.",
      "Electric air compressors are the most common type used in Kenya's industrial and commercial sectors. They're ideal for applications where reliable mains power from Kenya Power is available and where the compressor will operate indoors or in enclosed spaces. Electric compressors are quieter, produce no exhaust emissions, and have lower operating costs per hour of operation. For businesses in urban areas like Nairobi's Industrial Area, Mombasa's port zone, or Kisumu's industrial estates, electric air compressors are typically the best choice.",
      "The initial cost of an electric air compressor is generally lower than a diesel equivalent of the same capacity. A 10 HP electric screw compressor from Ingersoll Rand or Atlas Copco costs significantly less upfront than a diesel-powered unit. However, the total cost of ownership depends on your electricity rates, usage patterns, and maintenance requirements. In Kenya, where industrial electricity rates average KSh 12-15 per kWh, electric compressors remain cost-effective for most applications.",
      "Electric air compressors require a stable power supply with adequate capacity. Before installing an electric compressor, have Kenya Generators assess your electrical infrastructure to ensure your transformer, cables, and circuit breakers can handle the compressor's starting current. Screw compressors typically require 2-3 times their running current to start, which can trip breakers if your electrical system isn't properly sized. We offer complete electrical installation services, including dedicated circuits, soft starters, and variable frequency drives (VFDs) that reduce starting current and save energy.",
      "Diesel air compressors shine in applications where grid power is unavailable or unreliable. Construction sites across Kenya, from the Nairobi Expressway project to rural road construction in Turkana and Garissa, rely on diesel compressors for their mobility and independence from the power grid. Mining operations in Kakamega, Migori, and Taita Taveta use diesel compressors for drilling, blasting, and material handling. Agricultural processing facilities in rural Kenya also benefit from diesel compressors that can operate anywhere fuel is available.",
      "The mobility of diesel air compressors is a significant advantage for businesses that need to move equipment between job sites. Portable diesel compressors from Chicago Pneumatic and Atlas Copco are mounted on trailers with wheels, making them easy to tow behind a pickup truck. For construction contractors working on multiple sites across Kenya, a diesel compressor eliminates the need to arrange temporary power connections at each location. Kenya Generators supplies both stationary and portable diesel compressors with full after-sales support.",
      "Fuel consumption is the primary operating cost for diesel air compressors. A typical 185 CFM diesel compressor consumes approximately 5-7 liters of diesel per hour at full load. With diesel prices in Kenya fluctuating between KSh 150-180 per liter, operating costs can add up quickly. However, modern diesel compressors from Ingersoll Rand and Atlas Copco feature fuel-efficient engines that automatically adjust speed based on air demand, reducing fuel consumption by up to 30% compared to older models.",
      "Maintenance requirements differ between electric and diesel compressors. Electric compressors have fewer moving parts and generally require less maintenance — primarily oil changes, filter replacements, and belt inspections. Diesel compressors require additional maintenance for the engine, including oil changes, fuel filter replacements, air filter cleaning, and coolant checks. Kenya Generators provides comprehensive maintenance contracts for both electric and diesel compressors, with genuine spare parts for Ingersoll Rand, Atlas Copco, and Chicago Pneumatic brands.",
      "Noise levels are an important consideration, especially for businesses operating in residential areas or indoors. Electric air compressors typically operate at 70-75 decibels, comparable to a vacuum cleaner. Diesel compressors are louder, operating at 80-90 decibels, though soundproof canopies can reduce noise to acceptable levels. In Kenya, the National Environment Management Authority (NEMA) regulates noise levels, and businesses in residential zones must comply with noise restrictions. Kenya Generators can advise on noise mitigation solutions for your specific location.",
      "Environmental considerations are increasingly important for businesses in Kenya. Electric compressors produce zero emissions at the point of use, making them suitable for indoor applications and environmentally sensitive areas. Diesel compressors produce exhaust emissions including particulate matter and nitrogen oxides, which are regulated by NEMA. Modern diesel compressors meet Tier 3 and Tier 4 emission standards, but businesses should be aware of environmental regulations when operating diesel equipment in urban areas like Nairobi and Mombasa.",
      "The decision between electric and diesel ultimately depends on your specific application. If you have reliable grid power and operate indoors, an electric air compressor from Kenya Generators is likely the best choice. If you need mobility, operate in remote locations, or experience frequent power outages, a diesel compressor provides the independence you need. Our team helps you match the right compressor to your workflow and provides full installation, piping, and after-sales support across all 47 counties in Kenya.",
      "Kenya Generators stocks a comprehensive range of electric and diesel air compressors from world-leading brands including Ingersoll Rand, Atlas Copco, and Chicago Pneumatic. We offer free site assessments, load calculations, and recommendations tailored to your specific needs. Contact us today for a consultation and discover why businesses across Kenya trust Kenya Generators for their compressed air solutions.",
    ],
    category: "Guides",
    author: "Kenya Generators Technical Team",
    date: "2025-02-20",
    readTime: "12 min read",
    image: "/images/compressor.jpeg",
  },
  {
    slug: "diesel-generator-fuel-efficiency-tips",
    title: "Diesel Generator Fuel Efficiency Tips for Kenyan Businesses - Save Money on Fuel",
    excerpt:
      "Reduce fuel costs and extend generator life with these proven efficiency tips from Kenya Generators experts. Practical advice for businesses across Kenya.",
    content: [
      "Fuel costs are one of the biggest expenses when running a diesel generator in Kenya. With diesel prices fluctuating and often exceeding KSh 170 per liter, businesses that rely on generators for backup or prime power need to optimize fuel efficiency. Kenya Generators & Compressors Solutions Ltd has helped hundreds of businesses across Nairobi, Mombasa, Kisumu, and beyond reduce their fuel consumption by 20-40% through proper generator sizing, maintenance, and operational practices.",
      "The single most important factor in diesel generator fuel efficiency is proper sizing. An oversized generator running at low load consumes disproportionately more fuel per kWh than a correctly sized unit running at 70-80% load. This is because diesel engines are most efficient at their rated load, and running at low load causes incomplete combustion, carbon buildup, and wasted fuel. Kenya Generators conducts professional load analysis to ensure you get the correct kVA rating for your needs, avoiding the common mistake of buying a generator that's too large.",
      "To understand generator sizing, consider this example: a business with a total load of 100 kVA might be tempted to buy a 200 kVA generator for future expansion. However, running a 200 kVA generator at 50% load consumes approximately 30% more fuel per kWh than running a 120 kVA generator at 80% load. Over a year of regular use, this difference can amount to hundreds of thousands of shillings in wasted fuel. Kenya Generators recommends sizing your generator for current needs with a 20-25% margin for growth, rather than oversizing significantly.",
      "Regular maintenance is the second most important factor in fuel efficiency. A poorly maintained diesel generator can consume 15-25% more fuel than a well-maintained unit. Key maintenance tasks that impact fuel efficiency include: cleaning or replacing air filters (clogged filters restrict airflow and cause incomplete combustion), changing engine oil and filters (old oil increases friction and reduces efficiency), inspecting and adjusting fuel injectors (worn injectors cause poor fuel atomization), and checking the turbocharger (a faulty turbo reduces air intake and combustion efficiency).",
      "Kenya Generators maintenance contracts include comprehensive fuel efficiency checks. Our technicians measure fuel consumption at various load levels and compare it to manufacturer specifications. If your generator is consuming more fuel than expected, we identify and correct the underlying issues. Common problems we find in Kenya include contaminated fuel (water and sediment in diesel tanks), clogged fuel filters, worn injector nozzles, and incorrect injection timing. Addressing these issues can restore your generator to optimal fuel efficiency.",
      "Load management is a practical strategy for reducing fuel costs. Run non-essential equipment during grid power hours and reserve generator use for critical loads only. For businesses with flexible operations, schedule energy-intensive tasks like welding, compressing, or heating during times when Kenya Power is available. This reduces the load on your generator and extends runtime on a single tank of fuel. Kenya Generators can help you implement a load management plan that maximizes efficiency without disrupting your operations.",
      "The quality of diesel fuel significantly impacts generator efficiency and engine life. In Kenya, diesel fuel quality can vary between suppliers, and contamination with water, sediment, or microbial growth is common, especially during the rainy season. Contaminated fuel causes injector damage, reduced combustion efficiency, and increased fuel consumption. Kenya Generators recommends storing diesel in clean, sealed tanks with water separators and fuel polishing systems. We supply fuel filtration equipment and can test your fuel for contamination.",
      "Operating temperature affects fuel efficiency. Diesel generators run most efficiently at their optimal operating temperature, typically 80-90°C for the coolant. Running a generator that hasn't reached operating temperature wastes fuel, as does running one that's overheating. Ensure your cooling system is functioning properly — check coolant levels, inspect hoses for leaks, clean radiator fins, and verify the thermostat is operating correctly. In Kenya's hot climate, cooling system maintenance is especially important to prevent overheating and maintain fuel efficiency.",
      "Automatic Voltage Regulator (AVR) calibration impacts fuel efficiency indirectly. An improperly calibrated AVR can cause the generator to produce incorrect voltage, which forces connected equipment to draw more current and increases fuel consumption. Kenya Generators technicians calibrate AVRs during maintenance visits to ensure optimal voltage output. We also check the governor system, which controls engine speed and fuel delivery, to ensure it's responding correctly to load changes.",
      "Exercising your generator regularly improves fuel efficiency. A diesel generator that sits idle for extended periods develops carbon deposits, stale fuel, and degraded oil, all of which reduce efficiency. Run your generator under load for at least 30 minutes weekly to keep the engine in good condition. This burns off carbon deposits, circulates fresh oil, and ensures the generator will start reliably when needed. Kenya Generators recommends a weekly exercise schedule for all standby generators, regardless of how often they're used.",
      "Consider upgrading to a modern, fuel-efficient generator if your current unit is more than 10 years old. New Perkins and Cummins generators feature advanced fuel injection systems, electronic controls, and improved combustion efficiency that can reduce fuel consumption by 15-30% compared to older models. Kenya Generators offers trade-in programs and financing options for businesses looking to upgrade their generators. The fuel savings from a new, efficient generator often pay for the investment within 2-3 years.",
      "Monitor your fuel consumption to identify inefficiencies. Install a fuel flow meter or track fuel purchases and generator runtime to calculate your fuel consumption rate. Compare this to the manufacturer's specifications to identify potential issues. Kenya Generators can install monitoring systems that track fuel consumption, runtime, load levels, and maintenance intervals, giving you real-time data to optimize your generator's performance.",
      "Contact Kenya Generators today for a free fuel efficiency assessment. Our certified technicians will evaluate your generator's performance, identify opportunities for improvement, and recommend solutions tailored to your needs. With over 10 years of experience servicing diesel generators across Kenya, we know how to help businesses reduce fuel costs and extend equipment life. Call us at +254 728 399 145 or email sales@kenyagenerators.com to schedule your assessment.",
    ],
    category: "Tips",
    author: "Kenya Generators Technical Team",
    date: "2025-03-10",
    readTime: "12 min read",
    image: "/images/generator3.jpeg",
  },
  {
    slug: "air-compressor-maintenance-guide",
    title: "Air Compressor Maintenance Guide for Industrial Users in Kenya - Complete Checklist",
    excerpt:
      "Essential maintenance tips to keep your air compressor running efficiently in Kenya's industrial environments. Complete guide from Kenya Generators technicians.",
    content: [
      "Industrial air compressors are the workhorses of Kenya's manufacturing, construction, automotive, and food processing sectors. From powering pneumatic tools in Nairobi's Industrial Area to operating packaging machinery in Mombasa's port facilities, air compressors play a critical role in keeping businesses running. Kenya Generators & Compressors Solutions Ltd has been maintaining air compressors across Kenya for over a decade, and we know that proper maintenance is the key to reliability, efficiency, and longevity.",
      "A well-maintained air compressor can last 15-20 years or more, while a neglected unit may fail within 5 years. The cost of unexpected compressor downtime can be devastating — lost production, missed deadlines, and emergency repair bills. Kenya Generators provides comprehensive maintenance programs that prevent costly breakdowns and keep your compressed air system running at peak efficiency. Whether you operate an Ingersoll Rand screw compressor, an Atlas Copco piston compressor, or a Chicago Pneumatic portable unit, our maintenance guidelines apply.",
      "Daily maintenance checks take just 5-10 minutes but can prevent major problems. Start by draining the condensate from the receiver tank and aftercooler. In Kenya's humid coastal regions like Mombasa and Malindi, moisture accumulation is a significant issue that can cause rust, corrosion, and contamination of your compressed air system. Automatic drain valves are available from Kenya Generators and eliminate the need for manual draining.",
      "Check the oil level in your compressor's crankcase daily. Low oil levels can cause catastrophic engine damage, while overfilling can cause oil carryover into the compressed air system. Use only the compressor oil specified by the manufacturer — using the wrong oil can cause carbon buildup, valve sticking, and reduced efficiency. Kenya Generators stocks genuine compressor oil for all major brands including Ingersoll Rand, Atlas Copco, and Chicago Pneumatic.",
      "Inspect for air leaks daily by listening for hissing sounds around fittings, hoses, and connections. A single 3mm air leak can waste up to KSh 50,000 per year in electricity costs. In Kenya's industrial facilities, air leaks are common due to vibration, temperature changes, and aging fittings. Kenya Generators offers compressed air leak detection services using ultrasonic equipment that identifies leaks invisible to the naked ear. Fixing air leaks is one of the quickest ways to reduce energy costs and improve system efficiency.",
      "Weekly maintenance tasks include cleaning the intake air filter. In Kenya's dusty environments, especially during the dry season or in arid regions like Turkana and Marsabit, air filters can become clogged quickly. A dirty air filter restricts airflow, forcing the compressor to work harder and consume more energy. Clean reusable filters with compressed air or replace disposable filters according to the manufacturer's schedule. Kenya Generators supplies genuine air filters for all compressor brands we service.",
      "Check belt tension weekly on belt-driven compressors. Loose belts slip and reduce efficiency, while overtightened belts cause premature bearing wear. The belt should deflect about 10-15mm when pressed firmly at the midpoint. Kenya Generators technicians check belt condition and tension during every maintenance visit and replace worn belts before they fail. We stock genuine replacement belts for Ingersoll Rand, Atlas Copco, Chicago Pneumatic, and other brands.",
      "Inspect safety valves weekly to ensure they're functioning correctly. Safety valves protect your compressor from overpressure, which can cause catastrophic failure. Test the safety valve by pulling the ring to release pressure — it should open smoothly and reseat properly. If the valve sticks or leaks, replace it immediately. Kenya Generators supplies certified safety valves and can test your entire compressed air system for safety compliance.",
      "Monthly maintenance is more thorough and should be scheduled during a planned downtime. Change the oil and oil filter according to the manufacturer's recommendations. For rotary screw compressors running 8 hours per day, oil changes are typically required every 2,000-4,000 operating hours. For piston compressors, change oil every 500-1,000 hours. Using fresh oil ensures proper lubrication, cooling, and sealing of internal components.",
      "Inspect motor bearings monthly for signs of wear. Listen for unusual noises like grinding, squealing, or rattling, which indicate bearing problems. Check motor temperature with an infrared thermometer — bearings that run hot are likely failing. Kenya Generators can replace motor bearings before they cause catastrophic failure, saving you from expensive emergency repairs and extended downtime.",
      "Check electrical connections monthly for tightness and signs of overheating. Loose connections cause voltage drops, increased current draw, and potential fire hazards. Look for discolored or melted insulation, which indicates overheating. Kenya Generators technicians perform thermal imaging inspections to identify hot spots in electrical connections before they cause problems. We service all electrical aspects of compressed air systems, including motor rewinding, control panel repairs, and VFD installation.",
      "Calibrate pressure gauges monthly to ensure accurate readings. Inaccurate gauges can cause the compressor to operate at incorrect pressures, wasting energy or failing to deliver adequate air to your equipment. Kenya Generators provides calibrated test gauges and can verify the accuracy of your system's pressure instruments. We recommend replacing gauges that are more than 2% inaccurate.",
      "Quarterly maintenance should include a comprehensive system inspection. Check the aftercooler and intercooler for fouling, which reduces heat transfer efficiency and increases discharge temperature. Clean cooling fins and tubes with compressed air or a soft brush. Inspect the minimum pressure valve, which ensures adequate oil pressure during startup — a faulty valve can cause lubrication problems and compressor damage.",
      "Test the automatic shutdown controls quarterly to verify they operate correctly. Simulate high temperature, high pressure, and low oil conditions to ensure the compressor shuts down safely. Kenya Generators technicians test all safety controls during quarterly maintenance visits and document the results for your records. This documentation is valuable for insurance purposes and demonstrates compliance with occupational safety regulations.",
      "Annual maintenance is the most comprehensive service and should include a complete compressor overhaul inspection. Kenya Generators technicians will inspect the airend (the compression element), check clearances, measure vibration, and perform a performance test to verify the compressor delivers its rated capacity. Worn components are replaced before they cause failure, and the compressor is returned to like-new condition.",
      "Kenya Generators provides genuine spare parts for Ingersoll Rand, Atlas Copco, and Chicago Pneumatic compressors with nationwide delivery across all 47 counties in Kenya. Our parts inventory includes airends, oil filters, air filters, oil separators, belts, gaskets, valves, and electrical components. We offer same-day delivery within Nairobi and next-day delivery to most locations in Kenya.",
      "A preventive maintenance contract with Kenya Generators takes all this off your plate. Our technicians follow a documented schedule tailored to your compressor's usage pattern and keep genuine spare parts on hand. We serve clients across Kenya, from Nairobi and Mombasa to remote locations in Turkana and Mandera. Our emergency response team is available 24/7 for urgent repairs, and our maintenance contracts start from as little as KSh 25,000 per year for small compressors.",
      "Don't wait for your air compressor to fail during a critical production run. Contact Kenya Generators today to schedule a maintenance assessment and keep your compressed air system running reliably. Our certified technicians have over 10 years of experience servicing air compressors across Kenya, and we guarantee our work with a 6-month warranty on all repairs and replacements. Call us at +254 728 399 145 or email sales@kenyagenerators.com.",
    ],
    category: "Maintenance",
    author: "Kenya Generators Technical Team",
    date: "2025-03-25",
    readTime: "15 min read",
    image: "/images/compressor1.jpeg",
  },
  {
    slug: "generator-installation-guide-kenya",
    title: "Complete Generator Installation Guide for Kenya Businesses - Professional Setup",
    excerpt:
      "Everything you need to know about professional diesel generator installation in Kenya, from site preparation to commissioning. Guide from Kenya Generators experts.",
    content: [
      "Professional diesel generator installation is critical for safety, performance, and warranty compliance. Whether you're installing a 10 kVA standby generator for your home in Nairobi, a 100 kVA unit for your hotel in Mombasa, or a 1000 kVA prime power generator for your factory in Thika, proper installation ensures your generator operates reliably for years to come. Kenya Generators & Compressors Solutions Ltd has installed hundreds of generators across Kenya, and we're sharing our expertise to help you understand what's involved in a professional installation.",
      "The first step in any generator installation is a site assessment. Kenya Generators technicians visit your location to evaluate the installation site, measure available space, assess ventilation requirements, and identify potential challenges. We consider factors like proximity to buildings, exhaust routing, fuel storage, noise regulations, and accessibility for maintenance. In Kenya's urban areas like Nairobi's Westlands, Kilimani, or Karen, space constraints and noise regulations require careful planning to ensure compliance with local authority requirements.",
      "Site preparation is the foundation of a successful generator installation. The generator must be placed on a level, reinforced concrete pad that can support the weight of the unit plus fuel and accessories. The pad should extend at least 300mm beyond the generator base on all sides and be thick enough to prevent cracking. In Kenya's coastal regions like Mombasa and Malindi, we recommend additional reinforcement to resist salt air corrosion. Kenya Generators provides detailed foundation drawings and can coordinate with your contractor to ensure the pad meets specifications.",
      "Ventilation is critical for generator performance and longevity. Diesel generators produce significant heat during operation, and inadequate ventilation causes overheating, reduced efficiency, and premature engine failure. The installation site must have adequate airflow for combustion air intake and heat dissipation. Kenya Generators calculates ventilation requirements based on the generator's heat rejection rate and ensures the installation meets or exceeds manufacturer specifications. In enclosed spaces, we install louvers, ducting, and exhaust fans to maintain proper airflow.",
      "Exhaust routing is another critical aspect of generator installation. Exhaust gases must be directed away from buildings, air intakes, and occupied areas. The exhaust system should be supported independently of the generator to prevent vibration damage. In Kenya, the National Environment Management Authority (NEMA) regulates exhaust emissions, and installations must comply with environmental standards. Kenya Generators designs exhaust systems that meet NEMA requirements and minimize noise and emissions.",
      "Fuel storage and delivery systems must be properly designed for reliable generator operation. For standby generators, the integral fuel tank is usually sufficient for 8-12 hours of runtime. For prime power applications or locations with extended outages, external fuel tanks with automatic refilling systems are recommended. Kenya Generators supplies and installs fuel tanks, fuel lines, filters, and water separators. We ensure fuel systems comply with Kenya Bureau of Standards (KEBS) requirements and local fire safety regulations.",
      "Electrical connections are the most critical aspect of generator installation from a safety perspective. All electrical work must be performed by licensed electricians and comply with the Kenya Electricity Regulations. The generator must be properly grounded to prevent electric shock and equipment damage. Cable sizing must account for the generator's output current, voltage drop, and ambient temperature. Kenya Generators employs certified electricians who install generators to the highest safety standards, including proper cable termination, circuit protection, and labeling.",
      "Automatic Transfer Switch (ATS) installation is essential for businesses that cannot afford any downtime. The ATS automatically detects a power outage, starts the generator, and transfers the load within seconds. When grid power returns, the ATS switches back and shuts down the generator. Kenya Generators installs ATS panels from leading manufacturers and programs them to meet your specific requirements. We test the ATS thoroughly during commissioning to ensure reliable operation.",
      "Noise mitigation is increasingly important for generator installations in Kenya. The National Environment Management Authority (NEMA) regulates noise levels, and generators in residential or commercial areas must comply with noise restrictions. Kenya Generators offers several noise mitigation solutions, including soundproof enclosures, acoustic louvers, exhaust silencers, and vibration isolators. We measure noise levels during commissioning to ensure compliance with NEMA standards.",
      "Testing and commissioning is the final phase of generator installation. Kenya Generators performs comprehensive testing to verify the generator operates correctly under all conditions. This includes no-load testing to verify starting and running parameters, load bank testing to confirm the generator can deliver its rated output, ATS transfer testing to ensure seamless power transitions, and control panel programming to set operating parameters. We document all test results and provide you with a commissioning report.",
      "Operator training is an essential part of our installation service. Kenya Generators technicians train your staff on generator operation, daily checks, emergency procedures, and basic troubleshooting. We provide operation manuals, maintenance schedules, and contact information for emergency support. Proper training ensures your generator is operated correctly and maintained properly, extending its life and preventing costly breakdowns.",
      "Documentation and warranty registration complete the installation process. Kenya Generators provides you with as-built drawings, test reports, operation manuals, and warranty certificates. We register your generator with the manufacturer to activate the warranty and provide you with a maintenance schedule tailored to your usage pattern. Our after-sales support includes 24/7 emergency service, genuine spare parts, and preventive maintenance contracts.",
      "Kenya Generators provides turnkey generator installation services across all 47 counties in Kenya. From Nairobi and Mombasa to remote locations in Turkana and Mandera, our certified technicians deliver professional installations that meet the highest standards of safety, performance, and reliability. We work with all major generator brands including Perkins, Cummins, and Lovol, and we guarantee our installations with a comprehensive warranty.",
      "Contact Kenya Generators today for a free installation consultation. Our team will assess your site, recommend the best installation approach, and provide a detailed quotation. With over 10 years of experience installing generators across Kenya, we know how to deliver reliable power solutions that meet your needs. Call us at +254 728 399 145 or email sales@kenyagenerators.com to get started.",
    ],
    category: "Installation",
    author: "Kenya Generators Technical Team",
    date: "2025-04-05",
    readTime: "14 min read",
    image: "/images/installation.jpeg",
  },
];

export const galleryImages = [
  // Generators
  {
    src: "/images/industrial_generator.png",
    alt: "Industrial diesel generator",
    category: "Generators",
  },
  {
    src: "/images/generato1.jpeg",
    alt: "Diesel generator unit",
    category: "Generators",
  },
  {
    src: "/images/generator2.jpeg",
    alt: "Generator installation",
    category: "Generators",
  },
  {
    src: "/images/generator3.jpeg",
    alt: "Generator maintenance",
    category: "Generators",
  },
  {
    src: "/images/generator4.jpeg",
    alt: "Generator service",
    category: "Generators",
  },
  {
    src: "/images/generator5.jpeg",
    alt: "Generator repair",
    category: "Generators",
  },
  {
    src: "/images/generator6.jpeg",
    alt: "Generator parts",
    category: "Generators",
  },
  {
    src: "/images/generator7.jpeg",
    alt: "Generator testing",
    category: "Generators",
  },
  {
    src: "/images/genset.jpeg",
    alt: "Generator control panel",
    category: "Generators",
  },
  {
    src: "/images/power.png",
    alt: "Power generator system",
    category: "Generators",
  },
  // Compressors
  {
    src: "/images/compressor.jpeg",
    alt: "Air compressor unit",
    category: "Compressors",
  },
  {
    src: "/images/compressor1.jpeg",
    alt: "Industrial air compressor",
    category: "Compressors",
  },
  {
    src: "/images/Ingnesool_Rand_compressor.png",
    alt: "Ingersoll Rand compressor",
    category: "Compressors",
  },
  // Spare Parts
  {
    src: "/images/spareparts.png",
    alt: "Spare parts inventory",
    category: "Spare Parts",
  },
  {
    src: "/images/spare1.jpg",
    alt: "Generator spare parts",
    category: "Spare Parts",
  },
  {
    src: "/images/spare2.jpg",
    alt: "Compressor spare parts",
    category: "Spare Parts",
  },
  {
    src: "/images/spare3.jpg",
    alt: "Genuine spare parts",
    category: "Spare Parts",
  },
  // Maintenance
  {
    src: "/images/maintenance1.jpeg",
    alt: "Preventive maintenance",
    category: "Maintenance",
  },
  {
    src: "/images/maintenance2.jpeg",
    alt: "Equipment servicing",
    category: "Maintenance",
  },
  {
    src: "/images/about_hero.png",
    alt: "Technician at work",
    category: "Maintenance",
  },
  // Installation
  {
    src: "/images/installation.jpeg",
    alt: "Electrical panel installation",
    category: "Installation",
  },
  {
    src: "/images/installation1.jpeg",
    alt: "Generator installation",
    category: "Installation",
  },
  {
    src: "/images/installation2.jpeg",
    alt: "Compressor installation",
    category: "Installation",
  },
  {
    src: "/images/installation3.jpeg",
    alt: "System commissioning",
    category: "Installation",
  },
];

export const beforeAfter = [
  {
    title: "Generator Overhaul",
    image: "/images/generator_overhaul.jpg",
    description:
      "Complete mechanical engine overhaul restoring a failing generator to full reliable output.",
  },
  {
    title: "Electrical Panel Upgrade",
    image: "/images/electrical_panel.png",
    description:
      "Old distribution board replaced with a safe, modern power distribution panel.",
  },
];

export const companyValues = [
  {
    icon: "Target",
    title: "Our Mission",
    description:
      "To offer quality total solutions in power generators, air compressors and technical services that nobody else offers — meeting every client need.",
  },
  {
    icon: "Eye",
    title: "Our Vision",
    description:
      "To be the leading technical services company across Kenyan industries, spurring growth through reliable power solutions.",
  },
  {
    icon: "Gem",
    title: "Our Values",
    description:
      "Quality, integrity and determination — guided by strategic principles that deliver an unbroken trend of success in every project.",
  },
];

export interface PortfolioItem {
  title: string;
  description: string;
  category: 'Mobile Apps' | 'Websites' | 'Branding' | 'SEO';
  type: 'image' | 'video';
  image: string;
  technologies: string[];
  results?: string;
  testimonial?: string;
  client?: string;
  clientRole?: string;
  duration?: string;
  teamSize?: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    title: 'FitTracker Pro',
    description: 'A comprehensive fitness tracking mobile app with real-time workout monitoring, nutrition tracking, progress analytics, and social features. Built with React Native for cross-platform compatibility.',
    category: 'Mobile Apps',
    type: 'video',
    image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React Native', 'Firebase', 'Redux', 'Expo', 'Node.js'],
    results: '10,000+ downloads within first month, 4.8★ app store rating',
    testimonial: 'VisionAura delivered exactly what we envisioned. The app is smooth, intuitive, and our users love it! The development process was transparent and professional.',
    client: 'Sarah Johnson',
    clientRole: 'CEO, FitLife Gym',
    duration: '2 months',
    teamSize: '4 people'
  },
  {
    title: 'Luxury Real Estate Platform',
    description: 'Premium real estate website with advanced property search, virtual tours, integrated CRM system, and lead management. Features responsive design and SEO optimization.',
    category: 'Websites',
    type: 'image',
    image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AWS'],
    results: '300% increase in lead generation, 50% faster page load times',
    testimonial: 'Our online presence has been completely transformed. Sales have tripled since launch and the platform handles our high-end clients perfectly.',
    client: 'Michael Joshua',
    clientRole: 'Founder, Premier Properties',
    duration: '2 months',
    teamSize: '5 people'
  },
  {
    title: 'EcoShop E-commerce',
    description: 'Sustainable shopping platform with inventory management, payment processing, customer analytics, and eco-friendly shipping options. Built for scalability and performance.',
    category: 'Websites',
    type: 'image',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Next.js', 'Shopify API', 'Tailwind CSS', 'PostgreSQL', 'Vercel'],
    results: '$10K+ monthly revenue within 3 months, 95% customer satisfaction',
    testimonial: 'The platform is beautiful, fast, and has helped us scale our sustainable business exponentially. The checkout process is seamless.',
    client: 'Emma Davis',
    clientRole: 'Owner, EcoGoods',
    duration: '1 months',
    teamSize: '3 people'
  },
  {
    title: 'TechStart Brand Identity',
    description: 'Complete brand identity package including logo design, color palette, typography, brand guidelines, business cards, and marketing materials for a tech startup.',
    category: 'Branding',
    type: 'image',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Adobe Illustrator', 'Figma', 'Brand Strategy', 'Print Design'],
    results: 'Brand recognition increased by 200%, 150% boost in investor interest',
    testimonial: 'Our new brand identity perfectly captures our vision and has resonated amazingly with our target audience and investors.',
    client: 'David Josh',
    clientRole: 'CTO, TechStart Inc.',
    duration: '2 months',
    teamSize: '2 people'
  },
  {
    title: 'Local Restaurant SEO Campaign',
    description: 'Comprehensive Google My Business optimization and local SEO strategy for a family restaurant chain. Includes review management and local citation building.',
    category: 'SEO',
    type: 'image',
    image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Google My Business', 'Local SEO', 'Review Management', 'Analytics'],
    results: '400% increase in local search visibility, 250% more reservations',
    testimonial: 'Our restaurant bookings have doubled thanks to their local SEO expertise. We now dominate local search results.',
    client: 'Viola G',
    clientRole: 'Manager, Violas Covenant Garden',
    duration: '3 months',
    teamSize: '2 people'
  },
  {
    title: 'HealthCare Mobile App',
    description: 'HIPAA-compliant telemedicine app with appointment scheduling, video consultations, patient records, and prescription management. Secure and user-friendly interface.',
    category: 'Mobile Apps',
    type: 'video',
    image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Flutter', 'Firebase', 'WebRTC', 'HIPAA Compliance', 'AWS'],
    results: '5,000+ patients onboarded, 98% appointment completion rate',
    testimonial: 'The app has revolutionized how we connect with our patients. It\'s secure, reliable, and patients love the convenience.',
    client: 'Dr. James Wilson',
    clientRole: 'Director, MedCare Clinic',
    duration: '3 months',
    teamSize: '4 people'
  },
  {
    title: 'Artist Portfolio Website',
    description: 'Stunning portfolio website showcasing artwork with interactive galleries, online store integration, commission booking system, and artist blog.',
    category: 'Websites',
    type: 'image',
    image: 'https://images.pexels.com/photos/1183992/pexels-photo-1183992.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React', 'Gatsby', 'Contentful', 'Stripe', 'Netlify'],
    results: '500% increase in art sales, 300% more commission requests',
    testimonial: 'My online art sales have skyrocketed. The website beautifully showcases my work and makes purchasing effortless for collectors.',
    client: 'Bright Art',
    clientRole: 'Fine Artist',
    duration: '2 months',
    teamSize: '3 people'
  },
  {
    title: 'Financial Services Rebrand',
    description: 'Modern rebranding for a financial advisory firm including logo redesign, website overhaul, marketing materials, and brand positioning strategy.',
    category: 'Branding',
    type: 'image',
    image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Brand Design', 'Logo Design', 'Marketing Materials', 'Web Design'],
    results: '150% increase in client inquiries, 200% boost in brand trust scores',
    testimonial: 'The rebrand has positioned us as a modern, trustworthy financial partner. Our client acquisition has significantly improved.',
    client: 'Robert Smith',
    clientRole: 'Principal, Smith Financial',
    duration: '3 months',
    teamSize: '3 people'
  },
  {
    title: 'Dental Practice Local SEO',
    description: 'Comprehensive local SEO campaign for a dental practice including GMB optimization, review management, local citations, and content marketing.',
    category: 'SEO',
    type: 'image',
    image: 'https://images.pexels.com/photos/305568/pexels-photo-305568.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Local SEO', 'Google Ads', 'Review Management', 'Content Marketing'],
    results: 'Ranked #1 for local dental searches, 300% increase in new patients',
    testimonial: 'We now dominate local search results and have a constant stream of new patients. The ROI has been incredible.',
    client: 'Dr. Adebayo John',
    clientRole: 'Owner, Bright Smile Dental',
    duration: '4 months',
    teamSize: '2 people'
  }
];
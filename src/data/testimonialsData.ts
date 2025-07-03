export interface Testimonial {
  name: string;
  position: string;
  company: string;
  text: string;
  projectType: 'Mobile App' | 'Website' | 'Branding' | 'SEO';
}

export const testimonials: Testimonial[] = [
  {
    name: 'Sarah Johnson',
    position: 'CEO',
    company: 'FitLife Gym',
    text: 'VisionAura delivered exactly what we envisioned. The fitness app is smooth, intuitive, and our members absolutely love it. The development process was transparent and professional throughout.',
    projectType: 'Mobile App'
  },
  {
    name: 'Michael Joshua',
    position: 'Founder',
    company: 'Premier Properties',
    text: 'Our real estate website has completely transformed our business. We\'ve seen a 300% increase in lead generation since launch. The team\'s attention to detail is exceptional.',
    projectType: 'Website'
  },
  {
    name: 'Emma Davis',
    position: 'Owner',
    company: 'EcoGoods',
    text: 'The e-commerce platform they built is beautiful, fast, and has helped us scale our sustainable business exponentially. We hit $10K monthly revenue within just 3 months!',
    projectType: 'Website'
  },
  {
    name: 'David Josh',
    position: 'CTO',
    company: 'TechStart Inc.',
    text: 'Our new brand identity perfectly captures our vision and has resonated amazingly with our target audience. Brand recognition has increased by 200% since the rebrand.',
    projectType: 'Branding'
  },
  {
    name: 'Viola G',
    position: 'Manager',
    company: 'Violas Covenant Garden',
    text: 'Our restaurant bookings have doubled thanks to their local SEO expertise. We now appear at the top of Google searches for restaurants in our area.',
    projectType: 'SEO'
  },
  {
    name: 'Dr. James Wilson',
    position: 'Director',
    company: 'MedCare Clinic',
    text: 'The telemedicine app has revolutionized how we connect with our patients. It\'s HIPAA-compliant, user-friendly, and has onboarded over 5,000 patients successfully.',
    projectType: 'Mobile App'
  }
  
  
  
];
import { FileText, Brain, Zap, BarChart3, Lock, Share2 } from 'lucide-react';
import { Feature, NavItem, Stat } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Problem', href: '#problem' },
  { label: 'Solution', href: '#solution' },
  { label: 'Features', href: '#features' },
  { label: 'Vision', href: '#vision' },
];

export const FEATURES: Feature[] = [
  {
    title: 'Instant Ingestion',
    description: 'Upload PDFs, Docs, or plain text. Our engine processes thousands of words in seconds.',
    icon: FileText
  },
  {
    title: 'Contextual AI',
    description: 'Beyond simple keyword matching. Inquizitor understands semantic meaning to generate deep questions.',
    icon: Brain
  },
  {
    title: 'Adaptive Learning',
    description: 'Quizzes that adjust difficulty in real-time based on the learner’s performance.',
    icon: Zap
  },
  {
    title: 'Deep Analytics',
    description: 'Track comprehension gaps and learning velocity with granular visual reports.',
    icon: BarChart3
  },
  {
    title: 'Enterprise Security',
    description: 'SOC2 compliant data handling ensures your proprietary documents remain private.',
    icon: Lock
  },
  {
    title: 'Seamless Sharing',
    description: 'Deploy quizzes via link, embed code, or SCORM export for your LMS.',
    icon: Share2
  }
];

export const STATS: Stat[] = [
  { value: '10x', label: 'Faster Creation' },
  { value: '85%', label: 'Retention Rate' },
  { value: '0', label: 'Manual Effort' }
];

export const FOOTER_LINKS = [
  { title: 'Product', links: ['Features', 'Integrations', 'Pricing', 'Changelog'] },
  { title: 'Company', links: ['About', 'Careers', 'Blog', 'Contact'] },
  { title: 'Legal', links: ['Privacy', 'Terms', 'Security'] }
];
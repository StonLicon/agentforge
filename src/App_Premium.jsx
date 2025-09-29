import { useState } from 'react'
import { 
  Bot, 
  Shield, 
  Users, 
  Zap, 
  BarChart3, 
  Globe, 
  Star, 
  CheckCircle, 
  Menu, 
  X,
  ArrowRight,
  MessageSquare,
  Clock,
  TrendingUp
} from 'lucide-react'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    message: ''
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thanks for your interest! We\'ll be in touch within 24 hours.')
  }

  const features = [
    {
      icon: MessageSquare,
      title: 'Smart Q&A',
      description: 'AI answers project-specific questions instantly with deep knowledge of your ecosystem'
    },
    {
      icon: Users,
      title: 'Onboarding Flows',
      description: 'Guides new members through your ecosystem with personalized welcome sequences'
    },
    {
      icon: Zap,
      title: 'Real-time Updates',
      description: 'Pushes news, announcements, price alerts, and governance updates automatically'
    },
    {
      icon: Shield,
      title: 'Community Moderation',
      description: 'Auto-moderates spam and maintains quality discussions with advanced AI filtering'
    },
    {
      icon: BarChart3,
      title: 'Analytics Dashboard',
      description: 'Track engagement metrics, user satisfaction, and community growth patterns'
    },
    {
      icon: Globe,
      title: 'Multi-language Support',
      description: 'Serves global communities with native language support for 20+ languages'
    }
  ]

  const testimonials = [
    {
      name: 'Alex Chen',
      company: 'DeFiProtocol',
      role: 'Founder',
      content: 'AgentForge increased our community engagement by 340% and reduced support tickets by 60%. Game-changer for our growth.',
      results: '340% engagement increase'
    },
    {
      name: 'Sarah Martinez',
      company: 'CryptoArt Collective',
      role: 'Community Manager',
      content: 'The AI agent handles complex questions about our NFT mechanics 24/7. Our community loves the instant, accurate responses.',
      results: '24/7 automated support'
    },
    {
      name: 'Marcus Thompson',
      company: 'GameFi Champions',
      role: 'Head of Growth',
      content: 'Since implementing AgentForge, our new user onboarding completion rate jumped from 23% to 87%. Incredible ROI.',
      results: '87% onboarding completion'
    }
  ]

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$299',
      period: '/month',
      description: 'Perfect for growing communities',
      features: [
        '1 Discord server',
        'Basic Q&A training',
        'Community support',
        '10K messages/month',
        'Standard response time'
      ],
      cta: 'Start Free Trial',
      popular: false
    },
    {
      name: 'Professional',
      price: '$699',
      period: '/month',
      description: 'Most popular for scaling projects',
      features: [
        '3 Discord servers',
        'Advanced training + custom personality',
        'Priority support',
        '50K messages/month',
        'Analytics dashboard',
        'Custom integrations'
      ],
      cta: 'Book Demo',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'pricing',
      description: 'For large-scale operations',
      features: [
        'Unlimited servers',
        'White-label solution',
        'Dedicated success manager',
        'Custom integrations',
        'SLA guarantees',
        '99.9% uptime commitment'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Header */}
      <header className="fixed w-full top-0 z-50 bg-black/20 backdrop-blur-xl border-b border-white/10 shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 via-transparent to-blue-900/10"></div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Bot className="h-10 w-10 text-purple-400 drop-shadow-glow" />
                <div className="absolute inset-0 bg-purple-400 blur-xl opacity-30 animate-pulse"></div>
              </div>
              <span className="text-3xl font-black gradient-text tracking-tight">AgentForge</span>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-300 hover:text-white transition-all duration-300 font-medium hover:scale-105">Features</a>
              <a href="#showcase" className="text-gray-300 hover:text-white transition-all duration-300 font-medium hover:scale-105">Showcase</a>
              <a href="#pricing" className="text-gray-300 hover:text-white transition-all duration-300 font-medium hover:scale-105">Pricing</a>
              <a href="#testimonials" className="text-gray-300 hover:text-white transition-all duration-300 font-medium hover:scale-105">Testimonials</a>
              <a href="#contact" className="text-gray-300 hover:text-white transition-all duration-300 font-medium hover:scale-105">Contact</a>
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-3 rounded-xl text-white font-bold shadow-2xl hover:shadow-purple-500/25 hover:scale-105 transition-all duration-300 border border-white/10">
                Get Demo
              </button>
            </nav>

            {/* Mobile menu button */}
            <button 
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/80 backdrop-blur-xl mx-4 mb-4 p-6 rounded-2xl border border-white/20 shadow-2xl">
            <nav className="flex flex-col space-y-4">
              <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
              <a href="#showcase" className="text-gray-300 hover:text-white transition-colors">Showcase</a>
              <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
              <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">Testimonials</a>
              <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-2 rounded-lg text-white font-semibold w-full">
                Get Demo
              </button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative pt-40 pb-32 px-6 lg:px-8">
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <div className="mb-8">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-300 border border-purple-500/30 shadow-xl">
                🚀 Trusted by 100+ Web3 Projects
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 leading-none">
              Transform Your{' '}
              <span className="gradient-text animate-gradient">Web3 Community</span>
              <br />
              <span className="text-white/90">with</span> <span className="gradient-text">AI Agents</span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 mb-12 max-w-5xl mx-auto leading-relaxed font-light">
              Custom AI bots that <span className="font-semibold text-white">educate users</span>, <span className="font-semibold text-white">answer questions 24/7</span>, and <span className="font-semibold text-white">boost engagement</span> by 340%.
            </p>
            
            {/* Key Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-xl p-6 rounded-2xl border border-green-500/20 shadow-2xl hover:scale-105 transition-all duration-300">
                <Clock className="h-8 w-8 text-green-400 mb-3 mx-auto" />
                <div className="text-2xl font-bold text-white mb-1">24/7</div>
                <div className="text-green-300 font-medium">AI Support</div>
              </div>
              <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-xl p-6 rounded-2xl border border-blue-500/20 shadow-2xl hover:scale-105 transition-all duration-300">
                <Shield className="h-8 w-8 text-blue-400 mb-3 mx-auto" />
                <div className="text-2xl font-bold text-white mb-1">99.9%</div>
                <div className="text-blue-300 font-medium">Uptime SLA</div>
              </div>
              <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-xl p-6 rounded-2xl border border-purple-500/20 shadow-2xl hover:scale-105 transition-all duration-300">
                <MessageSquare className="h-8 w-8 text-purple-400 mb-3 mx-auto" />
                <div className="text-2xl font-bold text-white mb-1">500K+</div>
                <div className="text-purple-300 font-medium">Questions Solved</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
              <button className="group relative bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 px-12 py-5 rounded-2xl text-white font-bold text-xl shadow-2xl hover:shadow-green-500/25 transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-3">
                <span>Book Free Demo</span>
                <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-teal-400 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity -z-10"></div>
              </button>
              <button className="group relative px-12 py-5 rounded-2xl text-white font-bold text-xl bg-white/5 backdrop-blur-xl border border-white/20 hover:bg-white/10 hover:border-white/30 transform hover:scale-105 transition-all duration-300 shadow-2xl">
                <span>View Live Examples</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center items-center gap-8">
              <div className="group flex items-center space-x-3 bg-gradient-to-r from-green-500/10 to-emerald-500/10 px-6 py-3 rounded-xl border border-green-500/20 backdrop-blur-xl shadow-xl hover:scale-105 transition-all duration-300">
                <Shield className="h-5 w-5 text-green-400" />
                <span className="text-sm font-semibold text-green-300">SOC 2 Compliant</span>
              </div>
              <div className="group flex items-center space-x-3 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 px-6 py-3 rounded-xl border border-blue-500/20 backdrop-blur-xl shadow-xl hover:scale-105 transition-all duration-300">
                <Zap className="h-5 w-5 text-blue-400" />
                <span className="text-sm font-semibold text-blue-300">Enterprise Ready</span>
              </div>
              <div className="group flex items-center space-x-3 bg-gradient-to-r from-purple-500/10 to-pink-500/10 px-6 py-3 rounded-xl border border-purple-500/20 backdrop-blur-xl shadow-xl hover:scale-105 transition-all duration-300">
                <Globe className="h-5 w-5 text-purple-400" />
                <span className="text-sm font-semibold text-purple-300">GDPR Compliant</span>
              </div>
            </div>
            
            {/* Hero Visual Element */}
            <div className="mt-20 relative">
              <div className="max-w-4xl mx-auto">
                <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl p-8 hover:scale-105 transition-all duration-700">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-blue-500/10 rounded-3xl"></div>
                  <div className="relative">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <div className="flex-1 bg-slate-700 rounded-full px-4 py-2">
                        <span className="text-slate-400 text-sm">#general - Discord</span>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-sm font-bold">U</div>
                        <div className="bg-slate-700 rounded-2xl rounded-tl-sm px-4 py-3 max-w-xs">
                          <p className="text-white text-sm">What's the current staking APY?</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Bot className="w-8 h-8 text-green-400" />
                        <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 border border-green-500/30 rounded-2xl rounded-tl-sm px-4 py-3 max-w-md">
                          <p className="text-white text-sm">Current staking APY is <span className="font-bold text-green-400">12.5%</span> with 21-day unbonding. You can stake at stake.example.com 🚀</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative py-32 px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/20 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-300 border border-purple-500/30">
                ✨ Powerful Features
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black mb-8">
              Built for{' '}
              <span className="gradient-text">Web3 Scale</span>
            </h2>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Everything you need to create <span className="font-semibold text-white">engaging</span>, <span className="font-semibold text-white">informative</span>, and <span className="font-semibold text-white">automated</span> community experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              const gradients = [
                'from-purple-500/20 to-pink-500/20 border-purple-500/30',
                'from-blue-500/20 to-cyan-500/20 border-blue-500/30',
                'from-green-500/20 to-emerald-500/20 border-green-500/30',
                'from-orange-500/20 to-red-500/20 border-orange-500/30',
                'from-indigo-500/20 to-purple-500/20 border-indigo-500/30',
                'from-teal-500/20 to-green-500/20 border-teal-500/30'
              ]
              const iconColors = ['text-purple-400', 'text-blue-400', 'text-green-400', 'text-orange-400', 'text-indigo-400', 'text-teal-400']
              return (
                <div key={index} className={`group relative bg-gradient-to-br ${gradients[index]} backdrop-blur-xl p-8 rounded-2xl border shadow-2xl hover:scale-105 hover:shadow-3xl transition-all duration-500 cursor-pointer`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative">
                    <div className="mb-6 relative">
                      <IconComponent className={`h-16 w-16 ${iconColors[index]} group-hover:scale-110 transition-all duration-300 drop-shadow-glow`} />
                      <div className={`absolute inset-0 ${iconColors[index].replace('text-', 'bg-')} blur-xl opacity-20 group-hover:opacity-40 transition-opacity rounded-full`}></div>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-white transition-colors">{feature.title}</h3>
                    <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors">{feature.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="relative py-32 px-6 lg:px-8">
        <div className="relative max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to{' '}
              <span className="gradient-text">10x Your Community</span>
              <br />
              Engagement?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Book your free 30-minute demo and see how AgentForge can transform your Discord community
            </p>
          </div>

          <div className="bg-gradient-to-br from-slate-800/40 to-slate-900/60 backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-3xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-white/5 backdrop-blur-xl border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all duration-300"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-white/5 backdrop-blur-xl border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                    Project/Company Name *
                  </label>
                  <input
                    type="text"
                    name="company"
                    id="company"
                    required
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full bg-white/5 backdrop-blur-xl border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all duration-300"
                    placeholder="Your project name"
                  />
                </div>
                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-gray-300 mb-2">
                    Project Type *
                  </label>
                  <select
                    name="projectType"
                    id="projectType"
                    required
                    value={formData.projectType}
                    onChange={handleInputChange}
                    className="w-full bg-white/5 backdrop-blur-xl border border-white/20 rounded-lg px-4 py-3 text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all duration-300"
                  >
                    <option value="">Select project type</option>
                    <option value="defi">DeFi Protocol</option>
                    <option value="nft">NFT Collection</option>
                    <option value="gaming">GameFi/Gaming</option>
                    <option value="l1l2">L1/L2 Blockchain</option>
                    <option value="dao">DAO</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Tell us about your community goals
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full bg-white/5 backdrop-blur-xl border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all duration-300"
                  placeholder="What challenges are you facing with community management? What are your goals?"
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-green-500 to-emerald-500 px-8 py-4 rounded-lg text-white font-bold text-lg hover:shadow-green-500/25 transition-all duration-300 flex items-center justify-center space-x-2 mx-auto transform hover:scale-105"
                >
                  <span>Book Your Free Demo</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
                <p className="text-gray-400 text-sm mt-4">
                  No commitment • 30-minute demo • Custom pricing available
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Bot className="h-8 w-8 text-purple-400" />
              <span className="text-2xl font-bold gradient-text">AgentForge</span>
            </div>
            <div className="text-gray-400 text-sm">
              © 2025 AgentForge. All rights reserved. Transforming Web3 communities with AI.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
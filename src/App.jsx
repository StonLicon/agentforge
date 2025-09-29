import { useState } from "react";
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
  TrendingUp,
  Check,
  Play,
  Pause,
} from "lucide-react";
import { RiScrollToBottomLine } from "react-icons/ri";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDemo, setActiveDemo] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thanks for your interest! We'll be in touch within 24 hours.");
  };

  const features = [
    {
      icon: MessageSquare,
      title: "Smart Q&A",
      description:
        "AI answers project-specific questions instantly with deep knowledge of your ecosystem",
    },
    {
      icon: Users,
      title: "Onboarding Flows",
      description:
        "Guides new members through your ecosystem with personalized welcome sequences",
    },
    {
      icon: Zap,
      title: "Real-time Updates",
      description:
        "Pushes news, announcements, price alerts, and governance updates automatically",
    },
    {
      icon: Shield,
      title: "Community Moderation",
      description:
        "Auto-moderates spam and maintains quality discussions with advanced AI filtering",
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description:
        "Track engagement metrics, user satisfaction, and community growth patterns",
    },
    {
      icon: Globe,
      title: "Multi-language Support",
      description:
        "Serves global communities with native language support for 20+ languages",
    },
  ];

  const testimonials = [
    {
      name: "Alex Chen",
      company: "DeFiProtocol",
      role: "Founder",
      content:
        "AgentForge increased our community engagement by 340% and reduced support tickets by 60%. Game-changer for our growth.",
      results: "340% engagement increase",
    },
    {
      name: "Sarah Martinez",
      company: "CryptoArt Collective",
      role: "Community Manager",
      content:
        "The AI agent handles complex questions about our NFT mechanics 24/7. Our community loves the instant, accurate responses.",
      results: "24/7 automated support",
    },
    {
      name: "Marcus Thompson",
      company: "GameFi Champions",
      role: "Head of Growth",
      content:
        "Since implementing AgentForge, our new user onboarding completion rate jumped from 23% to 87%. Incredible ROI.",
      results: "87% onboarding completion",
    },
  ];

  const demoScenarios = [
    {
      type: "DeFi Protocol",
      project: "YieldFarm Pro",
      user: "CryptoTrader_99",
      question:
        "How does your liquidity mining work and what are the current APY rates?",
      response:
        "Our liquidity mining rewards LPs with YIELD tokens! 📊 Current APYs: ETH-USDC: 12.5%, YIELD-ETH: 18.3%. You earn rewards every block (~13s). LP tokens are automatically staked. Min stake: 0.1 ETH equivalent. Want me to guide you through providing liquidity?",
      metrics: "Reduced support tickets by 80%",
      bgGradient: "from-green-500/20 to-emerald-500/20",
      borderColor: "border-green-500/30",
    },
    {
      type: "NFT Project",
      project: "CyberApes Collection",
      user: "NFTCollector",
      question: "When is the mint date and what are the rarity percentages?",
      response:
        "Mint goes live October 15th, 2PM UTC! 🚀 10,000 unique CyberApes. Rarity breakdown: Common (60%), Rare (25%), Epic (12%), Legendary (2.5%), Mythic (0.5%). Mint price: 0.08 ETH. Whitelist gets 24h early access. Check #announcements for WL spots!",
      metrics: "94% user satisfaction score",
      bgGradient: "from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-500/30",
    },
    {
      type: "Gaming Project",
      project: "MetaVerse Warriors",
      user: "GameMaster_X",
      question: "How do I earn $WAR tokens and what can I spend them on?",
      response:
        "Earn $WAR tokens by: ⚔️ Winning battles (+50-200 $WAR), 🏆 Tournament victories (+500-2000 $WAR), 📅 Daily quests (+25-100 $WAR). Spend on: Weapon upgrades, Character skins, Land plots in MetaVerse, Staking for 15% APY. Current $WAR price: $0.034",
      metrics: "+340% community engagement",
      bgGradient: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-500/30",
    },
    {
      type: "Layer 1 Chain",
      project: "ChainForge Network",
      user: "ValidatorPro",
      question: "What are the staking requirements and validator rewards?",
      response:
        "Become a validator with 32,000 $FORGE minimum stake! 🔗 Current rewards: 8.5% APY for validators, 6.2% for delegators. Delegation minimum: 100 $FORGE. Unbonding period: 21 days. Network has 150 active validators. Slashing conditions: Double-signing (5%), Downtime >12hrs (0.1%)",
      metrics: "99.9% network uptime maintained",
      bgGradient: "from-orange-500/20 to-red-500/20",
      borderColor: "border-orange-500/30",
    },
  ];

  const pricingTiers = [
    {
      name: "Starter",
      price: "$299",
      period: "/month",
      description: "Perfect for small communities",
      subtitle: "< 5K members",
      features: [
        "1 Discord server integration",
        "Pre-trained on 50+ crypto topics",
        "Basic Q&A responses",
        "Community support",
        "10,000 messages/month",
        "Basic analytics dashboard",
      ],
      notIncluded: ["Custom training", "Multi-server support"],
      cta: "Start Free Trial",
      popular: false,
    },
    {
      name: "Professional",
      price: "$699",
      period: "/month",
      description: "Perfect for growing projects",
      subtitle: "5K-20K members",
      features: [
        "Up to 3 Discord servers",
        "Custom training on YOUR project",
        "Advanced personality customization",
        "Priority support (< 4 hour response)",
        "50,000 messages/month",
        "Advanced analytics + exports",
        "Custom commands and workflows",
        "Integration with your website/docs",
      ],
      cta: "Start Free Trial",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing",
      description: "Perfect for major projects",
      subtitle: "20K+ members",
      features: [
        "Unlimited Discord servers",
        "White-label solution",
        "Dedicated customer success manager",
        "Custom AI model training",
        "Unlimited messages",
        "API access and webhooks",
        "Custom integrations (Telegram, Twitter)",
        "99.9% SLA guarantee",
        "Premium onboarding (2 weeks)",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ];

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
              {/* <div className="relative">
                <Bot className="h-10 w-10 text-purple-400 drop-shadow-glow" />
                <div className="absolute inset-0 bg-purple-400 blur-xl opacity-30 animate-pulse"></div>
              </div> */}
              <span className="text-xl font-black gradient-text tracking-tight">
                AgentForge
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="#features"
                className="text-sm text-gray-300 hover:text-white transition-all duration-300 font-medium hover:scale-105"
              >
                Features
              </a>
              <a
                href="#showcase"
                className="text-sm text-gray-300 hover:text-white transition-all duration-300 font-medium hover:scale-105"
              >
                Showcase
              </a>
              <a
                href="#pricing"
                className="text-sm text-gray-300 hover:text-white transition-all duration-300 font-medium hover:scale-105"
              >
                Pricing
              </a>
              <a
                href="#testimonials"
                className="text-sm text-gray-300 hover:text-white transition-all duration-300 font-medium hover:scale-105"
              >
                Testimonials
              </a>
              <a
                href="#contact"
                className="text-sm text-gray-300 hover:text-white transition-all duration-300 font-medium hover:scale-105"
              >
                Contact
              </a>
              <button className="text-sm bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-3 rounded-xl text-white font-bold shadow-2xl hover:shadow-purple-500/25 hover:scale-105 transition-all duration-300 border border-white/10">
                Get Demo
              </button>
            </nav>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/80 backdrop-blur-xl mx-4 mb-4 p-6 rounded-2xl border border-white/20 shadow-2xl">
            <nav className="flex flex-col space-y-4">
              <a
                href="#features"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Features
              </a>
              <a
                href="#showcase"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Showcase
              </a>
              <a
                href="#pricing"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Pricing
              </a>
              <a
                href="#testimonials"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Testimonials
              </a>
              <a
                href="#contact"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Contact
              </a>
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-2 rounded-lg text-white font-semibold w-full">
                Get Demo
              </button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative pt-40 px-6 lg:px-8">
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <div className="mb-10">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-300 border border-purple-500/30 shadow-xl">
                🚀 Trusted by 100+ Web3 Projects
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-none ">
              Transform Your{" "}
              <span className="gradient-text animate-gradient">
                Web3 Community
              </span>
              <br />
              <span className="text-white/90">with</span>{" "}
              <span className="gradient-text">AI Agents</span>
            </h1>
            <p className="text-lg md:text-2xl text-gray-300 mb-10 max-w-5xl mx-auto leading-relaxed font-light">
              Custom AI bots that{" "}
              <span className="font-semibold text-white">educate users</span>,{" "}
              <span className="font-semibold text-white">
                answer questions 24/7
              </span>
              , and{" "}
              <span className="font-semibold text-white">boost engagement</span>{" "}
              by 340%.
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
                <div className="text-purple-300 font-medium">
                  Questions Solved
                </div>
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
            <div className="flex flex-wrap justify-center items-center">
              <RiScrollToBottomLine className="h-10 w-10 text-blue-400 animate-bounce" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative py-32 px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/20 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-black mb-8">
              Built for <span className="gradient-text">Web3 Scale</span>
            </h2>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Everything you need to create{" "}
              <span className="font-semibold text-white">engaging</span>,{" "}
              <span className="font-semibold text-white">informative</span>, and{" "}
              <span className="font-semibold text-white">automated</span>{" "}
              community experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              const gradients = [
                "from-purple-500/20 to-pink-500/20 border-purple-500/30",
                "from-blue-500/20 to-cyan-500/20 border-blue-500/30",
                "from-green-500/20 to-emerald-500/20 border-green-500/30",
                "from-orange-500/20 to-red-500/20 border-orange-500/30",
                "from-indigo-500/20 to-purple-500/20 border-indigo-500/30",
                "from-teal-500/20 to-green-500/20 border-teal-500/30",
              ];
              const iconColors = [
                "text-purple-400",
                "text-blue-400",
                "text-green-400",
                "text-orange-400",
                "text-indigo-400",
                "text-teal-400",
              ];
              return (
                <div
                  key={index}
                  className={`group relative bg-gradient-to-br ${gradients[index]} backdrop-blur-xl p-8 rounded-2xl border shadow-2xl hover:scale-105 hover:shadow-3xl transition-all duration-500 cursor-pointer`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative">
                    <div className="mb-6 relative">
                      <IconComponent
                        className={`h-16 w-16 ${iconColors[index]} group-hover:scale-110 transition-all duration-300 drop-shadow-glow`}
                      />
                      <div
                        className={`absolute inset-0 ${iconColors[
                          index
                        ].replace(
                          "text-",
                          "bg-"
                        )} blur-xl opacity-20 group-hover:opacity-40 transition-opacity rounded-full`}
                      ></div>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-white transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <section id="showcase" className="relative py-32 px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-purple-950/30 to-slate-950/50"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-300 border border-green-500/30">
                🚀 Live Demo
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black mb-8">
              See AgentForge <span className="gradient-text">In Action</span>
            </h2>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Real examples from crypto projects using AI agents to{" "}
              <span className="font-semibold text-white">
                transform their communities
              </span>
            </p>
          </div>

          {/* Interactive Demo Interface */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl p-8">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-blue-500/10 rounded-3xl"></div>
                <div className="relative">
                  {/* Discord Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="flex-1 bg-slate-700 rounded-full px-4 py-2 mx-4">
                      <span className="text-slate-400 text-sm">
                        #
                        {demoScenarios[activeDemo].project
                          .toLowerCase()
                          .replace(/\s+/g, "-")}{" "}
                        - Discord
                      </span>
                    </div>
                    <div className="text-xs text-gray-400">
                      #{demoScenarios[activeDemo].type}
                    </div>
                  </div>

                  {/* Chat Messages */}
                  <div className="space-y-4 min-h-[300px]">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-sm font-bold">
                        {demoScenarios[activeDemo].user.charAt(0)}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <span className="font-semibold text-white">
                            {demoScenarios[activeDemo].user}
                          </span>
                          <span className="text-xs text-gray-400">
                            Today at 2:34 PM
                          </span>
                        </div>
                        <div className="bg-slate-700 rounded-2xl rounded-tl-sm px-4 py-3">
                          <p className="text-white text-sm">
                            {demoScenarios[activeDemo].question}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                        <Bot className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <span className="font-semibold text-green-400">
                            AgentForge AI
                          </span>
                          <span className="bg-green-500/20 text-green-300 text-xs px-2 py-0.5 rounded-full">
                            BOT
                          </span>
                          <span className="text-xs text-gray-400">
                            Today at 2:34 PM
                          </span>
                        </div>
                        <div
                          className={`bg-gradient-to-r ${demoScenarios[activeDemo].bgGradient} border ${demoScenarios[activeDemo].borderColor} rounded-2xl rounded-tl-sm px-4 py-3`}
                        >
                          <p className="text-white text-sm leading-relaxed">
                            {demoScenarios[activeDemo].response}
                          </p>
                        </div>
                        <div className="mt-2 text-xs text-green-400 font-medium">
                          ✓ {demoScenarios[activeDemo].metrics}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Demo Selector */}
                  <div className="flex justify-center mt-6 space-x-2">
                    {demoScenarios.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveDemo(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          index === activeDemo
                            ? "bg-green-500 scale-125"
                            : "bg-gray-600 hover:bg-gray-500"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Before/After Metrics */}
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold mb-4 text-white">
                  Before vs After Metrics
                </h3>
                <p className="text-gray-300">
                  Real results from our crypto project partners
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6">
                {/* Before */}
                <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 backdrop-blur-xl p-6 rounded-2xl border border-red-500/20">
                  <h4 className="text-xl font-bold text-red-400 mb-4 flex items-center">
                    <span className="mr-2">📉</span> BEFORE AI Agent
                  </h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-gray-400">Response Time</div>
                      <div className="text-red-300 font-bold">4-6 hours</div>
                    </div>
                    <div>
                      <div className="text-gray-400">Support Tickets</div>
                      <div className="text-red-300 font-bold">200/day</div>
                    </div>
                    <div>
                      <div className="text-gray-400">User Satisfaction</div>
                      <div className="text-red-300 font-bold">65%</div>
                    </div>
                    <div>
                      <div className="text-gray-400">Team Burnout</div>
                      <div className="text-red-300 font-bold">High</div>
                    </div>
                  </div>
                </div>

                {/* After */}
                <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 backdrop-blur-xl p-6 rounded-2xl border border-green-500/20">
                  <h4 className="text-xl font-bold text-green-400 mb-4 flex items-center">
                    <span className="mr-2">📈</span> AFTER AI Agent
                  </h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-gray-400">Response Time</div>
                      <div className="text-green-300 font-bold">
                        &lt; 30 seconds
                      </div>
                    </div>
                    <div>
                      <div className="text-gray-400">Support Tickets</div>
                      <div className="text-green-300 font-bold">
                        50/day (-75%)
                      </div>
                    </div>
                    <div>
                      <div className="text-gray-400">User Satisfaction</div>
                      <div className="text-green-300 font-bold">94% (+29%)</div>
                    </div>
                    <div>
                      <div className="text-gray-400">Community Growth</div>
                      <div className="text-green-300 font-bold">+340%</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="text-center mt-8">
                <button className="bg-gradient-to-r from-green-500 to-emerald-500 px-8 py-4 rounded-2xl text-white font-bold text-lg shadow-2xl hover:shadow-green-500/25 transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 mx-auto">
                  <span>Book Demo to See Your Project</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Rotating Demo Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {demoScenarios.map((scenario, index) => (
              <div
                key={index}
                onClick={() => setActiveDemo(index)}
                className={`cursor-pointer transition-all duration-300 ${
                  index === activeDemo
                    ? "transform scale-105"
                    : "hover:scale-105 opacity-80 hover:opacity-100"
                }`}
              >
                <div
                  className={`bg-gradient-to-br ${scenario.bgGradient} backdrop-blur-xl p-6 rounded-2xl border ${scenario.borderColor} shadow-xl`}
                >
                  <div className="text-center">
                    <h4 className="font-bold text-white mb-2">
                      {scenario.type}
                    </h4>
                    <p className="text-sm text-gray-300 mb-3">
                      {scenario.project}
                    </p>
                    <div className="text-xs font-medium text-green-400">
                      {scenario.metrics}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="relative py-32 px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/20 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-black mb-8">
              Simple, <span className="gradient-text">Fair Pricing</span>
            </h2>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Choose the perfect plan for your community size and needs.{" "}
              <span className="font-semibold text-white">
                30-day money-back guarantee
              </span>{" "}
              on all plans.
            </p>

            {/* Monthly/Annual Toggle */}
            <div className="flex justify-center">
              <div className="bg-slate-800/50 backdrop-blur-xl p-1 rounded-full border border-white/10">
                <button className="px-6 py-2 bg-purple-600 rounded-full text-white font-medium">
                  Monthly
                </button>
                <button className="px-6 py-2 text-gray-400 font-medium hover:text-white transition-colors">
                  Annual (Save 20%)
                </button>
              </div>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => {
              const cardClasses = tier.popular
                ? "bg-gradient-to-br from-green-500/20 to-emerald-500/20 border-2 border-green-500/50 shadow-2xl shadow-green-500/20 scale-105"
                : "bg-gradient-to-br from-slate-800/40 to-slate-900/60 border border-white/10 hover:border-white/20";
              return (
                <div
                  key={index}
                  className={`group relative ${cardClasses} backdrop-blur-xl p-10 rounded-3xl transition-all duration-500 hover:scale-105 cursor-pointer`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative">
                    {tier.popular && (
                      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                        <span className="bg-gradient-to-r from-green-500 to-emerald-500 px-4 py-2 rounded-full text-sm font-bold text-white shadow-xl">
                          Most Popular
                        </span>
                      </div>
                    )}

                    <div className="text-center mb-8">
                      <h3 className="text-3xl font-bold text-white mb-2">
                        {tier.name}
                      </h3>
                      <div className="mb-2">
                        <span className="text-5xl font-black text-white">
                          {tier.price}
                        </span>
                        {tier.price !== "Custom" && (
                          <span className="text-gray-400 text-lg">
                            {tier.period}
                          </span>
                        )}
                      </div>
                      <p className="text-gray-300 font-medium">
                        {tier.description}
                      </p>
                      <p className="text-sm text-gray-400">{tier.subtitle}</p>
                    </div>

                    <ul className="space-y-4 mb-8">
                      {tier.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-start space-x-3"
                        >
                          <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                      {tier.notIncluded &&
                        tier.notIncluded.map((feature, featureIndex) => (
                          <li
                            key={`not-${featureIndex}`}
                            className="flex items-start space-x-3 opacity-50"
                          >
                            <X className="h-5 w-5 text-red-400 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-400 line-through">
                              {feature}
                            </span>
                          </li>
                        ))}
                    </ul>

                    <button
                      className={`w-full py-4 rounded-2xl font-bold text-lg transition-all duration-300 ${
                        tier.popular
                          ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-2xl shadow-green-500/25 hover:scale-105 hover:shadow-green-500/40"
                          : "bg-gradient-to-r from-slate-700 to-slate-600 text-white hover:from-slate-600 hover:to-slate-500 shadow-xl hover:scale-105"
                      }`}
                    >
                      {tier.cta}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Trust Signals */}
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="relative py-32 px-6 lg:px-8">
        <div className="relative max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to <span className="gradient-text">10x Your Community</span>
              <br />
              Engagement?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Book your free 30-minute demo and see how AgentForge can transform
              your Discord community
            </p>
          </div>

          <div className="bg-gradient-to-br from-slate-800/40 to-slate-900/60 backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-3xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
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
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
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
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
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
                  <label
                    htmlFor="projectType"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
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
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
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
              <span className="text-2xl font-bold gradient-text">
                AgentForge
              </span>
            </div>
            <div className="text-gray-400 text-sm">
              © 2025 AgentForge. All rights reserved. Transforming Web3
              communities with AI.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

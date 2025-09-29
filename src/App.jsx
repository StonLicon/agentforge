import { useState } from 'react'
import {
  ArrowRight,
  Bot,
  Brain,
  Check,
  Clock,
  Hash,
  Headphones,
  LineChart,
  Lock,
  MoreHorizontal,
  Menu,
  MessageSquare,
  Quote,
  ShieldCheck,
  Sparkles,
  Users,
  X
} from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'
import { Separator } from '@/components/ui/separator'

const NAV_LINKS = [
  { href: '#features', label: 'Features' },
  { href: '#showcase', label: 'Showcase' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#contact', label: 'Contact' }
]

const METRICS = [
  { value: '500K+', label: 'Questions Resolved' },
  { value: '99.9%', label: 'Uptime Guarantee' },
  { value: '<30s', label: 'Median Response Time' }
]

const FEATURES = [
  {
    icon: ShieldCheck,
    title: 'Enterprise Compliance',
    description:
      'SOC 2 aligned security, encrypted memory, and permission controls that protect every conversation.'
  },
  {
    icon: Brain,
    title: 'Contextual Reasoning',
    description:
      'Model pipelines fine-tuned on your documentation, governance proposals, and brand voice in days.'
  },
  {
    icon: LineChart,
    title: 'Executive Analytics',
    description:
      'Beautiful dashboards tracking sentiment, retention, conversion, and deflection in real time.'
  },
  {
    icon: MessageSquare,
    title: 'Omnichannel Support',
    description:
      'Deploy on Discord, Slack, and web widgets with unified reporting and consistent experiences.'
  },
  {
    icon: Lock,
    title: 'Role-Based Controls',
    description:
      'Granular admin, moderator, and contributor access with full audit trails and redaction tooling.'
  },
  {
    icon: Users,
    title: 'Human-in-the-loop',
    description:
      'Escalate to specialists instantly with collaborative workflows and saved response libraries.'
  }
]

const SHOWCASE = [
  {
    headline: 'DeFi protocol reduced first-response time from 4 hours to 18 seconds.',
    detail: 'Automated treasury and staking Q&A across 12 regions with proactive compliance guardrails.'
  },
  {
    headline: 'Gaming studio tripled retention during launch week.',
    detail: 'Personalized onboarding journeys and gold-tier community concierge drove 312% daily active growth.'
  },
  {
    headline: 'Layer 2 network scaled validation support globally.',
    detail: 'Handled 72k validator requests in two weeks with sentiment tracking and SLA alerts.'
  }
]

const PRICING = {
  monthly: [
    {
      name: 'Starter',
      price: '$299',
      description: 'For lean teams proving the value of AI copilots.',
      subtitle: 'Up to 5k community members',
      features: [
        'Single community workspace',
        '20k automated replies included',
        'Knowledge base sync every 12 hours',
        'Compliance-ready transcripts',
        'Email support with 24h SLA'
      ],
      cta: 'Start Free Trial'
    },
    {
      name: 'Professional',
      price: '$699',
      description: 'Our most loved tier for fast-scaling teams.',
      subtitle: 'Up to 25k community members',
      features: [
        '3 simultaneous communities',
        '120k automated replies included',
        'Custom tone + escalation routing',
        'Advanced analytics workspace',
        'Priority support within 4 hours'
      ],
      cta: 'Start Free Trial',
      highlight: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'Dedicated success, bespoke training datasets, and SLAs.',
      subtitle: 'Global, regulated organizations',
      features: [
        'Unlimited communities and seats',
        'Private deployment options',
        'Managed knowledge operations',
        'Quarterly strategy workshops',
        'Dedicated success architect'
      ],
      cta: 'Book Strategy Call'
    }
  ],
  annual: [
    {
      name: 'Starter',
      price: '$249',
      suffix: '/month',
      description: 'Two months free when billed annually.',
      subtitle: 'Up to 5k community members',
      features: [
        'Single community workspace',
        '30k automated replies included',
        'Knowledge base sync every 6 hours',
        'Compliance-ready transcripts',
        'Email support with 24h SLA'
      ],
      cta: 'Secure Annual Plan'
    },
    {
      name: 'Professional',
      price: '$579',
      suffix: '/month',
      description: 'Unlock strategic roadmap sessions and VIP onboarding.',
      subtitle: 'Up to 25k community members',
      features: [
        '5 simultaneous communities',
        '180k automated replies included',
        'Dedicated enablement manager',
        'Executive analytics workspace',
        'Priority support within 2 hours'
      ],
      cta: 'Secure Annual Plan',
      highlight: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'Global rollouts with compliance review and innovation labs.',
      subtitle: 'Tailored programs and SLAs',
      features: [
        'Unlimited scale and seats',
        'Hybrid or air-gapped deployment',
        'Realtime human escalation desk',
        'Model finetuning & eval lab',
        'Dedicated 24/7 response team'
      ],
      cta: 'Talk to Sales'
    }
  ]
}

const TESTIMONIALS = [
  {
    quote:
      'AgentForge is the first AI platform our security team signed off on. We cut our escalation volume by 68% in month one.',
    name: 'Alex Chen',
    title: 'COO • Helios Finance'
  },
  {
    quote:
      'The onboarding concierge experience feels bespoke for every member. Our NPS jumped from 41 to 67 after launch.',
    name: 'Priya Malhotra',
    title: 'Head of Community • NovaChain'
  },
  {
    quote:
      'From day one we had dashboards for leadership, compliance archives for legal, and agents who never break brand.',
    name: 'Jordan Riley',
    title: 'SVP Customer Experience • Atlas Gaming'
  }
]

const FAQS = [
  {
    question: 'How does AgentForge integrate with our existing stack?',
    answer:
      'We connect through secure APIs to your documentation, CRM, ticketing, and knowledge tools. A dedicated solutions engineer configures your environment within 10 business days.'
  },
  {
    question: 'What data privacy controls are included?',
    answer:
      'PII redaction, configurable retention windows, on-demand transcript deletion, and region-specific hosting keep your compliance team in control of every interaction.'
  },
  {
    question: 'Can we customise the AI tone and escalation workflows?',
    answer:
      'Yes. Tone, personality, escalation rules, and approval flows are configured per channel. Human agents can take over instantly with full conversation context.'
  },
  {
    question: 'What does onboarding look like?',
    answer:
      'Kickoff, knowledge ingestion, dry run, and go-live. We provide white-glove training, change management resources, and performance reviews aligned to your KPIs.'
  }
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [pricingView, setPricingView] = useState('monthly')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: 'defi',
    message: ''
  })

  const handleInput = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('Form submitted', formData)
    alert('Thanks for your interest! A member of our team will reach out within one business day.')
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10" />
        <div className="absolute top-1/4 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-[#d4af37] opacity-5 blur-[140px]" />
      </div>

      <header className="fixed top-0 z-50 w-full border-b border-[#262626] bg-black/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div className="flex items-center space-x-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#262626] bg-[#1a1a1a]">
              <Bot className="h-6 w-6 text-[#d4af37]" />
            </div>
            <span className="text-xl font-bold tracking-tight">AgentForge</span>
          </div>

          <nav className="hidden items-center space-x-8 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[#a3a3a3] transition-all duration-300 hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <Dialog>
              <DialogTrigger asChild>
                <Button className="h-11 rounded-full px-6 text-sm font-semibold">
                  Book Demo
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Schedule a private walkthrough</DialogTitle>
                  <DialogDescription>
                    Share a few details and we&rsquo;ll tailor an agenda for your team.
                  </DialogDescription>
                </DialogHeader>
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-white" htmlFor="dialog-name">
                        Name
                      </label>
                      <Input
                        id="dialog-name"
                        name="name"
                        placeholder="Jordan Blake"
                        value={formData.name}
                        onChange={handleInput}
                        required
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium text-white" htmlFor="dialog-email">
                        Work email
                      </label>
                      <Input
                        id="dialog-email"
                        type="email"
                        name="email"
                        placeholder="you@company.com"
                        value={formData.email}
                        onChange={handleInput}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-white" htmlFor="dialog-company">
                      Company
                    </label>
                    <Input
                      id="dialog-company"
                      name="company"
                      placeholder="Acme Labs"
                      value={formData.company}
                      onChange={handleInput}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Meet Your Solutions Architect
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
          </nav>

          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#262626] bg-[#0a0a0a] md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-[#262626] bg-black/95 md:hidden">
            <div className="mx-auto flex max-w-7xl flex-col space-y-3 px-6 py-6">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-base font-semibold text-[#a3a3a3] transition-colors hover:text-white"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button className="w-full" onClick={() => setMenuOpen(false)}>
                Book Demo
              </Button>
            </div>
          </div>
        )}
      </header>

      <main className="relative z-10">
        <section className="flex min-h-screen items-center justify-center px-6 pt-32 pb-24 lg:px-8">
          <div className="mx-auto max-w-5xl text-center">
            <Badge className="mx-auto mb-8">Trusted by 100+ Web3 ecosystems</Badge>
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
              Enterprise AI agents
              <span className="block text-[#d4af37]">for mission-critical communities</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[#a3a3a3] md:text-xl">
              AgentForge eliminates wait times, keeps brand tone precise, and arms your leadership team with
              actionable insights from every conversation.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" className="px-8 py-6 text-base">
                Schedule Executive Briefing
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black"
              >
                View Live Implementations
              </Button>
            </div>
            <div className="mt-16 grid gap-8 sm:grid-cols-3">
              {METRICS.map((metric) => (
                <div key={metric.label} className="border-l border-[#d4af37] pl-6 text-left">
                  <p className="text-3xl font-bold">{metric.value}</p>
                  <p className="mt-2 text-sm uppercase tracking-wide text-[#a3a3a3]">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="features" className="bg-[#0a0a0a] py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <h2 className="text-4xl font-bold tracking-tight">Enterprise-grade AI capabilities</h2>
              <p className="mt-4 text-lg text-[#a3a3a3]">
                Built for regulation, scale, and the service expectations of modern Web3 communities.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {FEATURES.map((feature) => {
                const Icon = feature.icon
                return (
                  <Card
                    key={feature.title}
                    className="border border-[#262626] bg-[#1a1a1a] hover:border-[#d4af37]"
                  >
                    <CardContent className="p-8">
                      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-[#d4af37]/50 bg-[#0a0a0a]">
                        <Icon className="h-6 w-6 text-[#d4af37]" />
                      </div>
                      <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                      <p className="mt-3 text-base leading-relaxed text-[#a3a3a3]">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        <section id="showcase" className="py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex flex-col gap-12 lg:flex-row lg:items-center">
              <div className="flex-1 space-y-6">
                <Badge variant="subtle" className="border-[#262626] text-[#fafafa]">
                  Deployment outcomes
                </Badge>
                <h2 className="text-4xl font-bold tracking-tight">
                  Designed for leaders who expect measurable gains from day one.
                </h2>
                <p className="text-lg text-[#a3a3a3]">
                  Every rollout includes executive dashboards, enablement kits, and ongoing optimisation reviews
                  led by our strategy team.
                </p>
                <div className="space-y-4">
                  {SHOWCASE.map((item) => (
                    <div key={item.headline} className="border-l-2 border-[#d4af37] pl-6">
                      <p className="text-lg font-semibold text-white">{item.headline}</p>
                      <p className="mt-2 text-sm text-[#a3a3a3]">{item.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
              <Card className="flex-1 border-[#262626] bg-[#0a0a0a]">
                <CardHeader>
                  <CardTitle className="text-2xl">AI agent engagement snapshot</CardTitle>
                  <CardDescription>
                    Real transcript excerpt demonstrating tone, compliance, and insight capture.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-5">
                  <div className="overflow-hidden rounded-2xl border border-[#262626] bg-[#0f0f0f]">
                    <div className="flex items-center justify-between border-b border-[#1f1f1f] bg-[#040404] px-5 py-3 text-xs uppercase tracking-wide text-[#6b6b6b]">
                      <div className="flex items-center gap-2 text-sm normal-case">
                        <span className="flex items-center gap-2 text-[#d4af37]">
                          <Hash className="h-4 w-4" />
                          staking-support
                        </span>
                        <span className="rounded-full border border-[#262626] bg-black px-2 py-0.5 text-[10px] font-semibold text-[#a3a3a3]">
                          validator&nbsp;ops
                        </span>
                      </div>
                      <div className="flex items-center gap-3 text-[11px] text-[#4b4b4b]">
                        <span className="hidden sm:inline-flex items-center gap-1">
                          <Users className="h-3.5 w-3.5" /> 128 online
                        </span>
                        <span>Slowmode 60s</span>
                        <MoreHorizontal className="h-4 w-4" />
                      </div>
                    </div>

                    <div className="space-y-8 px-5 py-6">
                      <div className="flex gap-4">
                        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#d4af37]/80 via-[#343434] to-black p-[2px]">
                          <div className="h-full w-full rounded-full bg-black" />
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-wrap items-baseline gap-2 text-sm">
                            <span className="font-semibold text-white">NovaStake</span>
                            <span className="rounded bg-[#1f1f1f] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.08em] text-[#d4af37]">
                              validator
                            </span>
                            <span className="text-[11px] text-[#545454]">Today at 14:32</span>
                          </div>
                          <p className="mt-2 text-sm leading-relaxed text-[#d2d2d2]">
                            Hey <span className="text-white">@AgentForge</span>, can you confirm the current staking yield and if there&apos;s any
                            cooldown before we can move funds back into the treasury?
                          </p>
                          <div className="mt-3 flex items-center gap-3 text-[11px] text-[#525252]">
                            <span className="flex items-center gap-1 rounded-full border border-[#262626] px-2 py-0.5">
                              <ShieldCheck className="h-3 w-3 text-[#d4af37]" />
                              KYC Complete
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="h-3.5 w-3.5" />
                              SLA: 4h
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <div className="mt-1 h-10 w-10 rounded-full border border-[#2d2d2d] bg-[#0a0a0a] p-[2px]">
                          <div className="flex h-full w-full items-center justify-center rounded-full bg-[#111111]">
                            <Bot className="h-5 w-5 text-[#d4af37]" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-wrap items-baseline gap-2 text-sm">
                            <span className="font-semibold text-[#d4af37]">AgentForge</span>
                            <span className="rounded bg-[#232323] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.08em] text-[#d4af37]">
                              bot
                            </span>
                            <span className="text-[11px] text-[#545454]">Today at 14:32</span>
                          </div>
                          <div className="mt-3 space-y-3 rounded-xl border border-[#1f1f1f] bg-[#0a0a0a]/60 p-4 shadow-[0_0_30px_-20px_rgba(212,175,55,0.35)]">
                            <p className="text-sm leading-relaxed text-[#e5e5e5]">
                              The <span className="font-semibold text-white">current staking yield is 12.4%</span>. Withdrawals process instantly with a
                              <span className="font-semibold text-white"> 48 hour</span> cooldown window before redelegation.
                            </p>
                            <div className="rounded-lg border border-[#262626] bg-black/50 p-4">
                              <p className="text-xs uppercase tracking-wider text-[#6a6a6a]">Live metrics</p>
                              <div className="mt-3 grid gap-3 sm:grid-cols-3">
                                <div>
                                  <p className="text-[11px] text-[#6a6a6a]">Validators online</p>
                                  <p className="text-base font-semibold text-white">2,431</p>
                                </div>
                                <div>
                                  <p className="text-[11px] text-[#6a6a6a]">Pending unlocks</p>
                                  <p className="text-base font-semibold text-white">18</p>
                                </div>
                                <div>
                                  <p className="text-[11px] text-[#6a6a6a]">APY variance</p>
                                  <p className="text-base font-semibold text-[#d4af37]">0.7%</p>
                                </div>
                              </div>
                            </div>
                            <p className="text-sm text-[#d2d2d2]">
                              I&apos;ve opened an audit checklist and scheduled a validator sync. Would you like me to pin this
                              yield update to the #treasury-desk channel?
                            </p>
                          </div>
                          <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-[#262626] px-3 py-1 text-[11px] text-[#6a6a6a]">
                            <span>👍 24</span>
                            <span>🔁 6</span>
                            <span>📌 pinned by compliance</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-2xl border border-[#262626] bg-[#0f0f0f] p-5">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div>
                        <p className="text-sm font-semibold text-white">Signal surfaced</p>
                        <p className="mt-1 text-sm text-[#a3a3a3]">Stake expansion intent • Forwarded to growth squad</p>
                      </div>
                      <span className="inline-flex items-center gap-2 rounded-full bg-[#d4af37]/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-[#d4af37]">
                        <Sparkles className="h-3.5 w-3.5" /> Automation OKR #17
                      </span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full border-[#d4af37] text-[#d4af37]">
                    Download sample transcript
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        <section id="pricing" className="bg-[#0a0a0a] py-24">
          <div className="mx-auto max-w-7xl px-6">
            <Tabs value={pricingView} onValueChange={setPricingView}>
              <div className="text-center">
                <h2 className="text-4xl font-bold tracking-tight text-white">Transparent pricing for every growth stage</h2>
                <p className="mt-4 text-lg text-[#a3a3a3]">
                  Annual agreements include co-authored success plans, executive workshops, and white-glove rollout.
                </p>
                <div className="mt-10 flex justify-center">
                  <TabsList>
                    <TabsTrigger value="monthly">Monthly</TabsTrigger>
                    <TabsTrigger value="annual">Annual · save 20%</TabsTrigger>
                  </TabsList>
                </div>
              </div>
              <TabsContent value="monthly" className="mt-16">
                <PricingGrid plans={PRICING.monthly} />
              </TabsContent>
              <TabsContent value="annual" className="mt-16">
                <PricingGrid plans={PRICING.annual} />
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section id="testimonials" className="py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <Badge variant="subtle" className="border-[#262626] text-[#fafafa]">
                Executive endorsements
              </Badge>
              <h2 className="mt-6 text-4xl font-bold tracking-tight">
                Teams that expect excellence choose AgentForge
              </h2>
            </div>
            <div className="mt-16 grid gap-6 md:grid-cols-3">
              {TESTIMONIALS.map((item) => (
                <Card key={item.name} className="border-[#262626] bg-[#0a0a0a]">
                  <CardContent className="space-y-6 p-8">
                    <Quote className="h-10 w-10 text-[#d4af37]" />
                    <p className="text-lg leading-relaxed text-[#fafafa]">“{item.quote}”</p>
                    <div>
                      <p className="text-base font-semibold text-white">{item.name}</p>
                      <p className="text-sm text-[#a3a3a3]">{item.title}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="bg-[#0a0a0a] py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-12 lg:grid-cols-[2fr_3fr]">
              <div className="space-y-6">
                <Badge variant="subtle" className="border-[#262626] text-[#fafafa]">
                  Partner with us
                </Badge>
                <h2 className="text-4xl font-bold tracking-tight text-white">
                  Book your executive demo
                </h2>
                <p className="text-lg text-[#a3a3a3]">
                  Share your goals, and we&rsquo;ll design an agenda covering security review, deployment roadmap, and
                  projected ROI benchmarks tailored to your community.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Sparkles className="h-5 w-5 text-[#d4af37]" />
                    <span className="text-sm text-[#fafafa]">White-glove onboarding in under 14 days</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Headphones className="h-5 w-5 text-[#d4af37]" />
                    <span className="text-sm text-[#fafafa]">Dedicated success architect on every plan</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-[#d4af37]" />
                    <span className="text-sm text-[#fafafa]">Response guaranteed within one business day</span>
                  </div>
                </div>
                <Separator className="my-10 border-[#262626]" />
                <div className="space-y-4 text-sm text-[#a3a3a3]">
                  <p className="font-semibold text-white">Global offices</p>
                  <p>San Francisco • London • Singapore</p>
                  <p className="font-semibold text-white">Enterprise hotline</p>
                  <p>+1 (415) 555-0199</p>
                </div>
              </div>

              <Card className="border-[#262626] bg-[#1a1a1a]">
                <CardContent className="p-10">
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid gap-6 md:grid-cols-2">
                      <div>
                        <label className="mb-2 block text-sm font-medium text-white" htmlFor="name">
                          Full name
                        </label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="Jordan Blake"
                          value={formData.name}
                          onChange={handleInput}
                          required
                        />
                      </div>
                      <div>
                        <label className="mb-2 block text-sm font-medium text-white" htmlFor="email">
                          Work email
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="you@company.com"
                          value={formData.email}
                          onChange={handleInput}
                          required
                        />
                      </div>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2">
                      <div>
                        <label className="mb-2 block text-sm font-medium text-white" htmlFor="company">
                          Company
                        </label>
                        <Input
                          id="company"
                          name="company"
                          placeholder="Acme Labs"
                          value={formData.company}
                          onChange={handleInput}
                          required
                        />
                      </div>
                      <div>
                        <label className="mb-2 block text-sm font-medium text-white">Project focus</label>
                        <Select
                          value={formData.projectType}
                          onValueChange={(value) => setFormData((prev) => ({ ...prev, projectType: value }))}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Choose a focus" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="defi">DeFi protocol</SelectItem>
                            <SelectItem value="gaming">Gaming &amp; metaverse</SelectItem>
                            <SelectItem value="infrastructure">Infrastructure / L1 / L2</SelectItem>
                            <SelectItem value="nft">NFT &amp; creator economy</SelectItem>
                            <SelectItem value="enterprise">Enterprise community</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium text-white" htmlFor="message">
                        What does success look like?
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Share priorities, KPIs, or timelines."
                        value={formData.message}
                        onChange={handleInput}
                        rows={5}
                      />
                    </div>
                    <Button type="submit" className="w-full py-6 text-base">
                      Schedule discovery session
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                    <p className="text-center text-xs text-[#a3a3a3]">
                      We respect your privacy. All data processed under GDPR, SOC 2, and ISO 27001 controls.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="text-3xl font-bold tracking-tight text-white">Frequently asked questions</h2>
            <Accordion type="single" collapsible className="mt-10 divide-y divide-[#262626]">
              {FAQS.map((item) => (
                <AccordionItem value={item.question} key={item.question} className="border-b border-[#262626]">
                  <AccordionTrigger>{item.question}</AccordionTrigger>
                  <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#262626] bg-black py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 text-sm text-[#a3a3a3] md:flex-row">
          <div className="flex items-center space-x-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#262626] bg-[#1a1a1a]">
              <Bot className="h-5 w-5 text-[#d4af37]" />
            </div>
            <span className="text-base font-semibold text-white">AgentForge</span>
          </div>
          <p>© {new Date().getFullYear()} AgentForge. Elevating every community interaction.</p>
          <div className="flex items-center space-x-6">
            <a href="mailto:hello@agentforge.ai" className="transition-colors hover:text-white">
              hello@agentforge.ai
            </a>
            <a href="#" className="transition-colors hover:text-white">
              Privacy
            </a>
            <a href="#" className="transition-colors hover:text-white">
              Security
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

function PricingGrid({ plans }) {
  return (
    <div className="grid gap-8 md:grid-cols-3">
      {plans.map((plan) => (
        <Card
          key={plan.name}
          className={`flex h-full flex-col border ${
            plan.highlight ? 'border-[#d4af37] shadow-[0_40px_80px_-60px_rgba(212,175,55,0.6)]' : 'border-[#262626]'
          } bg-[#1a1a1a]`}
        >
          {plan.highlight && (
            <div className="absolute left-1/2 top-0 flex -translate-y-1/2 -translate-x-1/2 items-center rounded-full border border-[#d4af37] bg-[#0a0a0a] px-4 py-1 text-xs font-semibold uppercase tracking-widest text-[#d4af37]">
              Most Popular
            </div>
          )}
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-white">{plan.name}</CardTitle>
            <div className="flex items-baseline space-x-2">
              <span className={`text-5xl font-bold ${plan.highlight ? 'text-[#d4af37]' : 'text-white'}`}>
                {plan.price}
              </span>
              <span className="text-sm uppercase tracking-wide text-[#a3a3a3]">
                {plan.suffix ?? '/month'}
              </span>
            </div>
            <CardDescription className="text-[#a3a3a3]">{plan.description}</CardDescription>
            <p className="text-sm font-semibold text-white">{plan.subtitle}</p>
          </CardHeader>
          <CardContent className="flex-1 space-y-3">
            {plan.features.map((feature) => (
              <div key={feature} className="flex items-start space-x-3">
                <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#d4af37]/10">
                  <Check className="h-3 w-3 text-[#d4af37]" />
                </div>
                <span className="text-sm leading-relaxed text-[#a3a3a3]">{feature}</span>
              </div>
            ))}
          </CardContent>
          <CardFooter>
            <Button
              className={`w-full ${
                plan.highlight
                  ? 'bg-[#d4af37] text-black hover:bg-[#c9a227]'
                  : 'bg-white text-black hover:bg-[#e5e5e5]'
              }`}
            >
              {plan.cta}
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

export default App
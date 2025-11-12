"use client"

import { useState } from 'react'
import { Camera, Wrench, Trophy, BookOpen, Users, Star, Play, Award, Target, Brain, CheckCircle, ArrowRight, Smartphone, Zap, Shield, Heart, MessageCircle, Download } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'

export default function LandingPage() {
  const [videoPlaying, setVideoPlaying] = useState(false)

  const features = [
    {
      icon: <Camera className="w-8 h-8 text-blue-500" />,
      title: "Diagnóstico por IA",
      description: "Tire uma foto do problema e nossa inteligência artificial identifica a solução em segundos"
    },
    {
      icon: <BookOpen className="w-8 h-8 text-green-500" />,
      title: "Tutoriais Personalizados",
      description: "Instruções passo a passo adaptadas ao seu nível de habilidade, com vídeos e imagens"
    },
    {
      icon: <Users className="w-8 h-8 text-purple-500" />,
      title: "Rede de Profissionais",
      description: "Acesso a encanadores qualificados próximos a você, com avaliações reais"
    },
    {
      icon: <Trophy className="w-8 h-8 text-yellow-500" />,
      title: "Sistema de Gamificação",
      description: "Ganhe pontos, medalhas e desbloqueie novos níveis conforme resolve problemas"
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-cyan-500" />,
      title: "Comando por Voz",
      description: "Integração com Alexa, Google Assistant e outros assistentes de voz"
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: "Modo Offline",
      description: "Acesse tutoriais básicos e soluções mesmo sem conexão com a internet"
    }
  ]

  const testimonials = [
    {
      name: "Carlos Silva",
      role: "Proprietário de Casa",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "Economizei mais de R$ 800 este ano! O app me ensinou a resolver vazamentos sozinho."
    },
    {
      name: "Maria Santos",
      role: "Aposentada",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "Muito fácil de usar! Até eu, que não entendia nada, consegui desentupir a pia."
    },
    {
      name: "João Oliveira",
      role: "Engenheiro",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "A IA é impressionante! Identificou um problema que nem eu tinha notado."
    }
  ]

  const pricingPlans = [
    {
      name: "Básico",
      price: "29,90",
      originalPrice: "39,90",
      period: "/mês",
      popular: false,
      features: [
        "Diagnóstico por IA",
        "50+ tutoriais básicos",
        "Suporte por chat",
        "Modo offline limitado"
      ]
    },
    {
      name: "Premium",
      price: "49,90",
      originalPrice: "99,90",
      period: "/mês",
      popular: true,
      features: [
        "Tudo do plano Básico",
        "200+ tutoriais avançados",
        "Rede de profissionais",
        "Sistema de gamificação completo",
        "Comando por voz",
        "Suporte prioritário",
        "Modo offline completo"
      ]
    },
    {
      name: "Profissional",
      price: "79,90",
      originalPrice: "149,90",
      period: "/mês",
      popular: false,
      features: [
        "Tudo do plano Premium",
        "Consultoria personalizada",
        "Certificado profissional",
        "Acesso antecipado a novidades",
        "Comunidade exclusiva"
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <Wrench className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">HidroSoluciona</h1>
                <p className="text-sm text-gray-600">Seu assistente hidráulico inteligente</p>
              </div>
            </div>
            
            <div className="hidden md:flex items-center gap-6">
              <a href="#recursos" className="text-gray-600 hover:text-blue-600 transition-colors">Recursos</a>
              <a href="#precos" className="text-gray-600 hover:text-blue-600 transition-colors">Preços</a>
              <a href="#depoimentos" className="text-gray-600 hover:text-blue-600 transition-colors">Depoimentos</a>
              <Link href="/quiz">
                <Button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600">
                  Teste Grátis
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-cyan-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-green-100 text-green-800 mb-6">
                🎉 Mais de 15.000 usuários satisfeitos
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Resolva Problemas
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> Hidráulicos</span>
                <br />Sozinho e Economize
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                O primeiro app que usa inteligência artificial para diagnosticar problemas hidráulicos através de fotos. 
                Aprenda, resolva e economize até <strong>R$ 2.000 por ano</strong> em custos com encanadores.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/quiz">
                  <Button size="lg" className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-lg px-8 py-4 w-full sm:w-auto">
                    <Brain className="w-5 h-5 mr-2" />
                    Fazer Quiz Personalizado
                  </Button>
                </Link>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="text-lg px-8 py-4 w-full sm:w-auto"
                  onClick={() => setVideoPlaying(true)}
                >
                  <Play className="w-5 h-5 mr-2" />
                  Ver Demonstração
                </Button>
              </div>

              <div className="flex items-center gap-8 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Teste grátis por 7 dias</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Cancele quando quiser</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Garantia de 30 dias</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🏆</span>
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=500&fit=crop" 
                  alt="Pessoa consertando torneira" 
                  className="w-full h-80 object-cover rounded-lg mb-4"
                />
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Diagnóstico Instantâneo
                  </h3>
                  <p className="text-gray-600">
                    Tire uma foto e receba a solução em segundos
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">15.000+</div>
              <p className="text-gray-600">Usuários Ativos</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">R$ 1.200</div>
              <p className="text-gray-600">Economia Média/Ano</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">98%</div>
              <p className="text-gray-600">Taxa de Sucesso</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-600 mb-2">4.9★</div>
              <p className="text-gray-600">Avaliação Média</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="recursos" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-800 mb-4">
              🚀 Tecnologia de Ponta
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Recursos que Fazem a Diferença
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Desenvolvido com as mais avançadas tecnologias de IA e gamificação para tornar 
              o aprendizado hidráulico divertido e eficaz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gray-50 rounded-2xl flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl text-gray-900">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Como Funciona
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Em apenas 3 passos simples, você resolve qualquer problema hidráulico
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Camera className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Fotografe</h3>
              <p className="text-gray-600 leading-relaxed">
                Tire uma foto do problema hidráulico usando seu smartphone. Nossa IA analisa a imagem instantaneamente.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">2. Diagnostique</h3>
              <p className="text-gray-600 leading-relaxed">
                Receba o diagnóstico preciso, lista de materiais necessários e tutorial personalizado para seu nível.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Trophy className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">3. Resolva</h3>
              <p className="text-gray-600 leading-relaxed">
                Siga o tutorial passo a passo, ganhe pontos e medalhas. Economize dinheiro e aprenda uma nova habilidade!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="depoimentos" className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              O Que Nossos Usuários Dizem
            </h2>
            <p className="text-xl text-gray-600">
              Mais de 15.000 pessoas já transformaram suas vidas com o HidroSoluciona
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center gap-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="precos" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-green-100 text-green-800 mb-4">
              💰 Oferta Especial
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Escolha Seu Plano
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comece com 7 dias grátis e veja como pode economizar milhares de reais por ano
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'border-2 border-blue-500 shadow-xl scale-105' : 'border shadow-lg'}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-blue-500 text-white px-6 py-2">
                      Mais Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-6">
                  <CardTitle className="text-2xl text-gray-900 mb-2">{plan.name}</CardTitle>
                  <div className="mb-4">
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-4xl font-bold text-gray-900">R$ {plan.price}</span>
                      <div className="text-left">
                        <span className="text-lg text-gray-500 line-through">R$ {plan.originalPrice}</span>
                        <p className="text-sm text-gray-600">{plan.period}</p>
                      </div>
                    </div>
                    <p className="text-sm text-green-600 font-semibold mt-2">
                      Economize {Math.round(((parseFloat(plan.originalPrice) - parseFloat(plan.price)) / parseFloat(plan.originalPrice)) * 100)}%
                    </p>
                  </div>
                </CardHeader>
                
                <CardContent className="px-6 pb-8">
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link href="/quiz">
                    <Button 
                      className={`w-full ${plan.popular 
                        ? 'bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600' 
                        : 'bg-gray-900 hover:bg-gray-800'
                      }`}
                      size="lg"
                    >
                      Começar Teste Grátis
                    </Button>
                  </Link>
                  
                  <p className="text-xs text-gray-600 text-center mt-4">
                    7 dias grátis • Cancele quando quiser
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Pronto para Economizar Milhares de Reais?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Junte-se a mais de 15.000 pessoas que já aprenderam a resolver problemas hidráulicos sozinhas. 
            Comece seu teste gratuito agora!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quiz">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4">
                <Brain className="w-5 h-5 mr-2" />
                Fazer Quiz Personalizado
              </Button>
            </Link>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-4"
            >
              <Download className="w-5 h-5 mr-2" />
              Baixar App Grátis
            </Button>
          </div>
          
          <p className="text-blue-100 mt-6">
            ✅ 7 dias grátis • ✅ Sem compromisso • ✅ Cancele quando quiser
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                  <Wrench className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">HidroSoluciona</h3>
                  <p className="text-sm text-gray-400">Seu assistente hidráulico</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">
                A primeira plataforma de IA para resolver problemas hidráulicos domésticos.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Produto</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#recursos" className="hover:text-white transition-colors">Recursos</a></li>
                <li><a href="#precos" className="hover:text-white transition-colors">Preços</a></li>
                <li><Link href="/quiz" className="hover:text-white transition-colors">Quiz Personalizado</Link></li>
                <li><a href="#" className="hover:text-white transition-colors">Download</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Suporte</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Central de Ajuda</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contato</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Comunidade</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Sobre</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Carreiras</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Imprensa</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 HidroSoluciona. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Video Modal */}
      {videoPlaying && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 max-w-4xl w-full">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">Demonstração do HidroSoluciona</h3>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => setVideoPlaying(false)}
              >
                ✕
              </Button>
            </div>
            <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <Play className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">Vídeo de demonstração será carregado aqui</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
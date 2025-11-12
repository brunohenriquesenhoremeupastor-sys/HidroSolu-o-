"use client"

import { useState } from 'react'
import { ArrowLeft, ArrowRight, CheckCircle, Brain, Trophy, Target, Wrench, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import Link from 'next/link'

export default function QuizPage() {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<string[]>([])
  const [completed, setCompleted] = useState(false)

  const questions = [
    {
      id: 1,
      title: "Qual sua experiência com reparos hidráulicos?",
      description: "Isso nos ajuda a personalizar o conteúdo para você",
      options: [
        { 
          value: "beginner", 
          label: "Iniciante", 
          description: "Nunca fiz reparos hidráulicos ou tenho muito pouco conhecimento",
          icon: "🌱"
        },
        { 
          value: "basic", 
          label: "Básico", 
          description: "Já fiz pequenos reparos como trocar torneira ou desentupir pia",
          icon: "🔧"
        },
        { 
          value: "intermediate", 
          label: "Intermediário", 
          description: "Consigo resolver a maioria dos problemas básicos sozinho",
          icon: "⚡"
        },
        { 
          value: "advanced", 
          label: "Avançado", 
          description: "Tenho bastante experiência e conhecimento técnico",
          icon: "🏆"
        }
      ]
    },
    {
      id: 2,
      title: "Com que frequência você tem problemas hidráulicos?",
      description: "Entender a frequência nos ajuda a recomendar o melhor plano",
      options: [
        { 
          value: "rarely", 
          label: "Raramente", 
          description: "1-2 vezes por ano ou menos",
          icon: "😌"
        },
        { 
          value: "occasionally", 
          label: "Ocasionalmente", 
          description: "3-5 vezes por ano",
          icon: "🤔"
        },
        { 
          value: "frequently", 
          label: "Frequentemente", 
          description: "6-10 vezes por ano",
          icon: "😰"
        },
        { 
          value: "constantly", 
          label: "Constantemente", 
          description: "Mais de 10 vezes por ano",
          icon: "🆘"
        }
      ]
    },
    {
      id: 3,
      title: "Quanto você gasta por ano com encanadores?",
      description: "Vamos calcular quanto você pode economizar",
      options: [
        { 
          value: "low", 
          label: "Até R$ 300", 
          description: "Gastos baixos com manutenção",
          icon: "💚"
        },
        { 
          value: "medium", 
          label: "R$ 300 - R$ 800", 
          description: "Gastos moderados",
          icon: "💛"
        },
        { 
          value: "high", 
          label: "R$ 800 - R$ 1.500", 
          description: "Gastos altos",
          icon: "🧡"
        },
        { 
          value: "very-high", 
          label: "Mais de R$ 1.500", 
          description: "Gastos muito altos",
          icon: "❤️"
        }
      ]
    },
    {
      id: 4,
      title: "Qual problema mais te incomoda?",
      description: "Vamos focar nas suas maiores dores",
      options: [
        { 
          value: "leaks", 
          label: "Vazamentos", 
          description: "Torneiras, registros, canos pingando",
          icon: "💧"
        },
        { 
          value: "clogs", 
          label: "Entupimentos", 
          description: "Pias, ralos, vasos sanitários entupidos",
          icon: "🚿"
        },
        { 
          value: "pressure", 
          label: "Pressão da água", 
          description: "Água fraca ou muito forte",
          icon: "🌊"
        },
        { 
          value: "toilet", 
          label: "Problemas no vaso", 
          description: "Descarga, vazamentos, entupimentos",
          icon: "🚽"
        }
      ]
    },
    {
      id: 5,
      title: "Qual seu principal objetivo?",
      description: "Isso define qual plano é ideal para você",
      options: [
        { 
          value: "save-money", 
          label: "Economizar dinheiro", 
          description: "Quero gastar menos com encanadores",
          icon: "💰"
        },
        { 
          value: "learn", 
          label: "Aprender habilidades", 
          description: "Quero me tornar independente em reparos",
          icon: "📚"
        },
        { 
          value: "emergency", 
          label: "Resolver emergências", 
          description: "Quero saber o que fazer em situações urgentes",
          icon: "🚨"
        },
        { 
          value: "prevention", 
          label: "Prevenção", 
          description: "Quero evitar problemas antes que aconteçam",
          icon: "🛡️"
        }
      ]
    }
  ]

  const handleAnswer = (value: string) => {
    const newAnswers = [...answers, value]
    setAnswers(newAnswers)
    
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      setCompleted(true)
    }
  }

  const goBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
      setAnswers(answers.slice(0, -1))
    }
  }

  const getPersonalizedResult = () => {
    const experience = answers[0]
    const frequency = answers[1]
    const spending = answers[2]
    const problem = answers[3]
    const goal = answers[4]

    // Lógica para determinar o plano ideal
    let recommendedPlan = "Básico"
    let discount = 30
    let price = "R$ 29,90"
    let originalPrice = "R$ 39,90"
    let savings = "R$ 500"
    let features = ["Diagnóstico por IA", "Tutoriais básicos", "Suporte por chat"]

    if (frequency === "frequently" || frequency === "constantly" || spending === "high" || spending === "very-high") {
      recommendedPlan = "Premium"
      discount = 50
      price = "R$ 49,90"
      originalPrice = "R$ 99,90"
      savings = "R$ 2.000"
      features = ["Tudo do app completo", "Consultoria personalizada", "Acesso prioritário", "Certificado profissional"]
    } else if (experience === "intermediate" || experience === "advanced" || goal === "learn") {
      recommendedPlan = "Intermediário"
      discount = 40
      price = "R$ 39,90"
      originalPrice = "R$ 69,90"
      savings = "R$ 1.200"
      features = ["Diagnóstico por IA", "200+ tutoriais", "Rede de profissionais", "Sistema de gamificação"]
    }

    return {
      plan: recommendedPlan,
      discount,
      price,
      originalPrice,
      savings,
      features,
      problem: questions[3].options.find(opt => opt.value === problem)?.label || "Problemas gerais",
      experience: questions[0].options.find(opt => opt.value === experience)?.label || "Iniciante"
    }
  }

  if (completed) {
    const result = getPersonalizedResult()
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-100">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                  <Wrench className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">HidroSoluciona</h1>
                  <p className="text-sm text-gray-600">Quiz Personalizado</p>
                </div>
              </Link>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            {/* Success Header */}
            <div className="text-center mb-12">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Trophy className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                🎉 Parabéns! Seu Plano Personalizado Está Pronto
              </h1>
              <p className="text-xl text-gray-600">
                Baseado nas suas respostas, encontramos a solução perfeita para você
              </p>
            </div>

            {/* Results Card */}
            <Card className="border-2 border-green-500 shadow-2xl mb-8">
              <CardHeader className="bg-gradient-to-r from-green-500 to-emerald-500 text-white text-center rounded-t-lg">
                <CardTitle className="text-3xl mb-2">Plano {result.plan}</CardTitle>
                <CardDescription className="text-green-100 text-lg">
                  Personalizado para seu perfil: {result.experience} • Foco em {result.problem}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Pricing */}
                  <div className="text-center">
                    <div className="mb-6">
                      <Badge className="bg-red-500 text-white text-lg px-4 py-2 mb-4">
                        -{result.discount}% DESCONTO ESPECIAL
                      </Badge>
                      <div className="flex items-center justify-center gap-4 mb-4">
                        <span className="text-5xl font-bold text-green-600">
                          {result.price}
                        </span>
                        <div className="text-left">
                          <span className="text-2xl text-gray-500 line-through">
                            {result.originalPrice}
                          </span>
                          <p className="text-sm text-gray-600">/mês</p>
                        </div>
                      </div>
                      <p className="text-lg text-green-700 font-semibold mb-2">
                        💰 Economia estimada: {result.savings}/ano
                      </p>
                      <p className="text-sm text-gray-600">
                        ⏰ Oferta válida por apenas 24 horas!
                      </p>
                    </div>
                    
                    <Button 
                      size="lg" 
                      className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-xl py-6"
                    >
                      Garantir Minha Oferta Agora
                      <ArrowRight className="w-6 h-6 ml-2" />
                    </Button>
                    
                    <p className="text-sm text-gray-600 mt-4">
                      🛡️ Garantia de 30 dias • Cancele quando quiser
                    </p>
                  </div>

                  {/* Features */}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">
                      O que você vai receber:
                    </h3>
                    <div className="space-y-4">
                      {result.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                          <span className="text-lg text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
                      <h4 className="font-bold text-blue-900 mb-3">🎯 Personalizado para você:</h4>
                      <ul className="space-y-2 text-blue-800">
                        <li>• Tutoriais focados em <strong>{result.problem.toLowerCase()}</strong></li>
                        <li>• Nível de dificuldade: <strong>{result.experience}</strong></li>
                        <li>• Economia estimada: <strong>{result.savings} por ano</strong></li>
                        <li>• Suporte especializado no seu perfil</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Proof */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-green-600 mb-2">15.000+</div>
                  <p className="text-gray-600">Usuários satisfeitos</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="flex items-center justify-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600">4.9/5 de avaliação</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-green-600 mb-2">R$ 1.200</div>
                  <p className="text-gray-600">Economia média/ano</p>
                </CardContent>
              </Card>
            </div>

            {/* CTA Final */}
            <div className="text-center">
              <p className="text-lg text-gray-700 mb-6">
                Junte-se a milhares de pessoas que já aprenderam a resolver problemas hidráulicos sozinhas
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-xl px-8 py-4"
                >
                  Começar Agora - {result.price}/mês
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="text-xl px-8 py-4"
                >
                  Ver Demonstração Grátis
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <Wrench className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">HidroSoluciona</h1>
                <p className="text-sm text-gray-600">Quiz Personalizado</p>
              </div>
            </Link>
            
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-sm text-gray-600">
                  Pergunta {currentStep + 1} de {questions.length}
                </p>
                <div className="w-32 bg-gray-200 rounded-full h-2 mt-1">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          {/* Progress */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm font-medium text-gray-600">
                Progresso do Quiz
              </h2>
              <span className="text-sm text-gray-600">
                {Math.round(((currentStep + 1) / questions.length) * 100)}% completo
              </span>
            </div>
            <Progress 
              value={((currentStep + 1) / questions.length) * 100} 
              className="h-3"
            />
          </div>

          {/* Question Card */}
          <Card className="shadow-xl border-0">
            <CardHeader className="text-center pb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl md:text-3xl text-gray-900 mb-3">
                {questions[currentStep].title}
              </CardTitle>
              <CardDescription className="text-lg text-gray-600">
                {questions[currentStep].description}
              </CardDescription>
            </CardHeader>
            
            <CardContent className="px-6 pb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {questions[currentStep].options.map((option, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="h-auto p-6 text-left justify-start hover:bg-blue-50 hover:border-blue-300 transition-all duration-200 group"
                    onClick={() => handleAnswer(option.value)}
                  >
                    <div className="flex items-start gap-4 w-full">
                      <div className="text-3xl flex-shrink-0">
                        {option.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg text-gray-900 mb-2 group-hover:text-blue-700">
                          {option.label}
                        </h3>
                        <p className="text-sm text-gray-600 group-hover:text-blue-600">
                          {option.description}
                        </p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-500 flex-shrink-0" />
                    </div>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-8">
            <Button
              variant="outline"
              onClick={goBack}
              disabled={currentStep === 0}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar
            </Button>
            
            <div className="text-center">
              <p className="text-sm text-gray-600">
                🎁 Ganhe até <strong>50% de desconto</strong> ao completar o quiz
              </p>
            </div>
            
            <div className="w-20"> {/* Spacer para centralizar o texto */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
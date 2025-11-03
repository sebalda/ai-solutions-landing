"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Check, Brain, Workflow, MessageSquare, BarChart3, Rocket, Zap, Shield, Phone, Mail, ArrowRight, Star, X, Bot, Cog, Settings, Wrench, MessageCircle, Menu } from "lucide-react";

// AI Solutions — Agency Landing Page
// Ready to paste into a Next.js/React + Tailwind + shadcn/ui project
// Replace links, social handles, and contact details as needed.

const features = [
  {
    icon: <MessageCircle className="w-6 h-6" aria-hidden />,
    title: "Agente IA Ventas WhatsApp",
    desc: "Responde consultas, genera cotizaciones y cierra ventas automáticamente. Nunca más pierdes una oportunidad por tardar en responder.",
  },
  {
    icon: <MessageSquare className="w-6 h-6" aria-hidden />,
    title: "Agente IA Soporte 24/7",
    desc: "Atención instantánea a tus clientes en WhatsApp. Resuelve dudas, gestiona pedidos y brinda soporte sin descanso.",
  },
  {
    icon: <Bot className="w-6 h-6" aria-hidden />,
    title: "Agentes Personalizados",
    desc: "Creamos agentes IA específicos para tu negocio: reservas, cotizaciones, seguimiento de pedidos y más.",
  },
];

const plans = [
  {
    name: "Starter",
    price: "$49.990 CLP",
    originalPrice: null,
    periodic: "mensual",
    bullets: [
      "1 Agente IA WhatsApp",
      "Respuestas automáticas 24/7",
      "Hasta 1.000 conversaciones/mes",
      "Configuración personalizada",
      "Soporte técnico incluido",
      "Panel de control básico",
    ],
    highlight: false,
  },
  {
    name: "Business",
    price: "$149.990 CLP",
    originalPrice: null,
    periodic: "mensual",
    bullets: [
      "2 Agentes IA WhatsApp",
      "1 Automatización personalizada",
      "Hasta 5.000 conversaciones/mes",
      "Integración con sistemas",
      "Soporte prioritario 24/7",
      "Panel de control avanzado",
      "Reportes y analytics",
    ],
    highlight: true,
  },
  {
    name: "Pro",
    price: "Desde $199.990 CLP",
    originalPrice: null,
    periodic: "mensual",
    bullets: [
      "3 Agentes IA WhatsApp",
      "Hasta 5 automatizaciones avanzadas",
      "Hasta 15.000 conversaciones/mes",
      "Integración con CRM y APIs",
      "Soporte dedicado 24/7",
      "Panel de control completo",
      "Reportes avanzados y métricas",
      "Entrenamiento personalizado",
      "Actualizaciones continuas",
    ],
    highlight: false,
  },
];

const testimonials = [
  {
    quote:
      "Reducimos 90% el tiempo en reportes. Ahora se generan automáticamente y llegan listos para presentar.",
    name: "TechFlow — Equipo de Insights",
    rating: 5,
  },
  {
    quote:
      "Nuestro proceso de cotización pasó de días a minutos. Los clientes reciben respuestas instantáneas.",
    name: "Pozinox — E‑commerce industrial",
    rating: 5,
  },
];

export default function AISolutionsLanding() {
  const year = useMemo(() => new Date().getFullYear(), []);
  const [notification, setNotification] = useState<{type: 'success' | 'error', message: string} | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Función para mostrar notificaciones profesionales
  const showNotification = (type: 'success' | 'error', message: string) => {
    setNotification({ type, message });
    setTimeout(() => {
      setNotification(null);
    }, 5000);
  };

  // Función para scroll suave con efecto de pulso
  const smoothScrollTo = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      
      // Scroll suave sin efectos adicionales para un diseño más profesional
    }
  };

  // Función para manejar el envío del formulario
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      company: formData.get('company') as string,
      message: formData.get('message') as string,
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        // Mostrar notificación de éxito profesional
        showNotification('success', 'Solicitud enviada exitosamente. Te contactaremos en 24hrs.');
        (e.target as HTMLFormElement).reset();
      } else {
        showNotification('error', 'Error al enviar la solicitud. Intenta nuevamente.');
      }
    } catch (error) {
      showNotification('error', 'Error de conexión. Intenta nuevamente.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-green-900 text-green-100 relative overflow-hidden">
      {/* Futuristic Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.05)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        
        {/* Subtle Accent Lines */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-green-500/20 to-transparent"></div>
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-emerald-500/15 to-transparent"></div>
      </div>

      {/* Nav */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/90 border-b border-green-500/30 relative">
        {/* Glowing border effect */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500 to-transparent"></div>
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex items-center justify-between relative">
          <div className="flex items-center gap-2">
            <div className="inline-flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-xl bg-gradient-to-r from-green-600 to-emerald-500 shadow-md">
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
            <span className="font-bold tracking-wider text-sm sm:text-lg bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              AI SOLUTIONS
            </span>
            <Badge variant="secondary" className="hidden sm:inline-flex ml-2 bg-green-950/50 text-green-300 border-green-500/30 text-xs">
              AGENTES IA WHATSAPP
            </Badge>
          </div>
          <nav className="hidden md:flex items-center gap-4 lg:gap-8 text-sm">
            <button 
              onClick={() => smoothScrollTo('servicios')} 
              className="text-green-300 hover:text-green-400 transition-colors duration-200 relative group cursor-pointer"
            >
              <span className="relative z-10">SERVICIOS</span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 group-hover:w-full transition-all duration-300"></div>
            </button>
            <button 
              onClick={() => smoothScrollTo('casos')} 
              className="text-green-300 hover:text-green-400 transition-all duration-300 hover:scale-105 relative group cursor-pointer hover:drop-shadow-[0_0_8px_rgba(34,197,94,0.5)]"
            >
              <span className="relative z-10">CASOS</span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-500 group-hover:w-full transition-all duration-300"></div>
            </button>
            <button 
              onClick={() => smoothScrollTo('proceso')} 
              className="text-green-300 hover:text-green-400 transition-all duration-300 hover:scale-105 relative group cursor-pointer hover:drop-shadow-[0_0_8px_rgba(34,197,94,0.5)]"
            >
              <span className="relative z-10">PROCESO</span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-500 group-hover:w-full transition-all duration-300"></div>
            </button>
            <button 
              onClick={() => smoothScrollTo('precios')} 
              className="text-green-300 hover:text-green-400 transition-all duration-300 hover:scale-105 relative group cursor-pointer hover:drop-shadow-[0_0_8px_rgba(34,197,94,0.5)]"
            >
              <span className="relative z-10">PRECIOS</span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-500 group-hover:w-full transition-all duration-300"></div>
            </button>
            <button 
              onClick={() => smoothScrollTo('contacto')} 
              className="text-green-300 hover:text-green-400 transition-all duration-300 hover:scale-105 relative group cursor-pointer hover:drop-shadow-[0_0_8px_rgba(34,197,94,0.5)]"
            >
              <span className="relative z-10">CONTACTO</span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-500 group-hover:w-full transition-all duration-300"></div>
            </button>
          </nav>
          <div className="flex items-center gap-2">
            <Button 
              onClick={() => smoothScrollTo('contacto')} 
              className="hidden lg:inline-flex bg-gradient-to-r from-green-600 to-emerald-500 hover:from-green-500 hover:to-emerald-400 text-white shadow-md hover:shadow-lg transition-all duration-200 font-semibold tracking-wider cursor-pointer text-xs sm:text-sm px-4 py-2 rounded-lg"
            >
              AGENDA DEMO
            </Button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-green-300 hover:text-green-400 transition-colors"
              aria-label="Menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-green-500/30 bg-black/95 backdrop-blur-sm">
            <nav className="px-4 py-4 space-y-3">
              <button 
                onClick={() => { smoothScrollTo('servicios'); setMobileMenuOpen(false); }}
                className="block w-full text-left text-green-300 hover:text-green-400 py-2 transition-colors"
              >
                SERVICIOS
              </button>
              <button 
                onClick={() => { smoothScrollTo('casos'); setMobileMenuOpen(false); }}
                className="block w-full text-left text-green-300 hover:text-green-400 py-2 transition-colors"
              >
                CASOS
              </button>
              <button 
                onClick={() => { smoothScrollTo('proceso'); setMobileMenuOpen(false); }}
                className="block w-full text-left text-green-300 hover:text-green-400 py-2 transition-colors"
              >
                PROCESO
              </button>
              <button 
                onClick={() => { smoothScrollTo('precios'); setMobileMenuOpen(false); }}
                className="block w-full text-left text-green-300 hover:text-green-400 py-2 transition-colors"
              >
                PRECIOS
              </button>
              <button 
                onClick={() => { smoothScrollTo('contacto'); setMobileMenuOpen(false); }}
                className="block w-full text-left text-green-300 hover:text-green-400 py-2 transition-colors"
              >
                CONTACTO
              </button>
              <Button 
                onClick={() => { smoothScrollTo('contacto'); setMobileMenuOpen(false); }}
                className="w-full mt-4 bg-gradient-to-r from-green-600 to-emerald-500 hover:from-green-500 hover:to-emerald-400 text-white border-green-500/50 shadow-lg shadow-green-500/25 hover:shadow-green-500/40 transition-all duration-300 font-bold tracking-wider"
              >
                AGENDA DEMO GRATUITA
              </Button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* Futuristic Background Effects */}
        <div className="pointer-events-none absolute inset-0">
          {/* Subtle Background Orbs */}
          <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-green-600/20 blur-3xl" />
          <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-emerald-500/15 blur-3xl" />
          
          {/* Subtle Accent Line */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/30 to-transparent"></div>
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">
            <div className="relative z-10 text-center lg:text-left">
              <Badge className="bg-green-950/40 text-green-300 border-green-500/30 mb-4 font-medium text-[10px] sm:text-xs tracking-widest">
                AUTOMATIZACIÓN · IA · 24/7
              </Badge>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider leading-tight">
                <span className="bg-gradient-to-r from-green-400 via-cyan-300 to-emerald-500 bg-clip-text text-transparent">
                  AGENTES IA
                </span>
                <br />
                <span className="text-white">PARA TU NEGOCIO</span>
                <br />
                <span className="bg-gradient-to-r from-green-500 via-emerald-400 to-green-500 bg-clip-text text-transparent">
                  VENTAS, SOPORTE Y MÁS
                </span>
          </h1>
              <p className="mt-4 sm:mt-6 text-green-200 text-base sm:text-lg leading-relaxed font-light px-2 sm:px-0">
                Agentes de inteligencia artificial que automatizan tu atención al cliente, ventas y soporte. Disponibles 24/7 en WhatsApp y otros canales. Nunca más pierdas una venta por tardar en responder.
              </p>
              <div className="mt-6 sm:mt-8 flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4">
                <Button 
                  onClick={() => smoothScrollTo('contacto')} 
                  size="lg" 
                  className="gap-2 sm:gap-3 bg-gradient-to-r from-green-600 to-emerald-500 hover:from-green-500 hover:to-emerald-400 text-white shadow-md hover:shadow-lg transition-all duration-200 font-semibold tracking-wider cursor-pointer text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 rounded-lg"
                >
                  <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" /> 
                  <span className="hidden sm:inline">AGENDA DEMO GRATUITA</span>
                  <span className="sm:hidden">AGENDA DEMO</span>
                </Button>
                <Button 
                  onClick={() => smoothScrollTo('servicios')} 
                  variant="secondary" 
                  size="lg" 
                  className="gap-2 sm:gap-3 bg-transparent border-2 border-green-500/40 text-green-300 hover:bg-green-500/10 hover:border-green-400 transition-all duration-200 font-semibold tracking-wider cursor-pointer text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 rounded-lg"
                >
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" /> 
                  VER AGENTES IA
                </Button>
              </div>
              <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-3 text-xs sm:text-sm text-green-300/90 font-medium px-2 sm:px-0">
                <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" /> 
                <span className="text-center lg:text-left">AGENTES PERSONALIZADOS · WHATSAPP 24/7 · RESPUESTA INSTANTÁNEA</span>
              </div>
            </div>
            <motion.div 
              initial={{ opacity: 0, y: 24 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center justify-center mt-8 lg:mt-0 pb-8 sm:pb-12"
            >
              {/* Mockup de Teléfono */}
              <div className="relative">
                {/* Teléfono Frame */}
                <div className="relative w-[240px] sm:w-[280px] md:w-[320px] mx-auto">
                  {/* Borde del teléfono con notch */}
                  <div className="relative bg-black rounded-[2.5rem] sm:rounded-[3rem] p-2.5 sm:p-3 shadow-2xl border-3 sm:border-4 border-gray-800">
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-28 sm:w-32 h-5 sm:h-6 bg-black rounded-b-xl sm:rounded-b-2xl z-20"></div>
                    
                    {/* Pantalla del teléfono */}
                    <div className="relative bg-[#0b141a] rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden border-2 border-gray-700 flex flex-col" style={{ minHeight: '520px' }}>
                      {/* Barra de estado */}
                      <div className="flex justify-between items-center px-4 sm:px-6 pt-10 sm:pt-12 pb-2 text-white text-xs flex-shrink-0">
                        <span>9:41</span>
                        <div className="flex gap-1">
                          <div className="w-1 h-1 bg-white rounded-full"></div>
                          <div className="w-1 h-1 bg-white rounded-full"></div>
                          <div className="w-1 h-1 bg-white rounded-full"></div>
                          <div className="w-6 h-3 border border-white rounded-sm">
                            <div className="w-4 h-full bg-white rounded-sm"></div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Header de WhatsApp */}
                      <div className="bg-[#075e54] px-4 py-3 flex items-center gap-3 text-white flex-shrink-0">
                        <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center">
                          <MessageCircle className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-sm">Agente IA Soporte</div>
                          <div className="text-xs opacity-90 flex items-center gap-1">
                            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                            En línea
                          </div>
                        </div>
                      </div>
                      
                      {/* Conversación de WhatsApp - contenido completo visible */}
                      <div className="bg-[#e5ddd5] bg-opacity-60 p-3 sm:p-4 flex-1 flex flex-col justify-end min-h-0">
                        <div className="space-y-2 sm:space-y-3">
                          {/* Mensaje del cliente */}
                          <div className="flex justify-end">
                            <div className="max-w-[75%] bg-[#dcf8c6] rounded-lg px-3 py-2 shadow-sm">
                              <p className="text-sm text-gray-800">Hola, necesito ayuda con mi pedido</p>
                              <p className="text-xs text-gray-500 mt-1 text-right">9:42 AM</p>
                            </div>
                          </div>
                          
                          {/* Respuesta del Agente IA */}
                          <div className="flex justify-start">
                            <div className="max-w-[75%] bg-white rounded-lg px-3 py-2 shadow-sm">
                              <p className="text-sm text-gray-800">¡Hola! 👋 Soy tu Agente IA de soporte. Con gusto te ayudo con tu pedido. ¿Puedes proporcionarme el número de tu pedido?</p>
                              <p className="text-xs text-gray-500 mt-1">9:42 AM</p>
                            </div>
                          </div>
                          
                          {/* Mensaje del cliente */}
                          <div className="flex justify-end">
                            <div className="max-w-[75%] bg-[#dcf8c6] rounded-lg px-3 py-2 shadow-sm">
                              <p className="text-sm text-gray-800">Es el #12345</p>
                              <p className="text-xs text-gray-500 mt-1 text-right">9:43 AM</p>
                            </div>
                          </div>
                          
                          {/* Respuesta del Agente IA con información */}
                          <div className="flex justify-start">
                            <div className="max-w-[75%] bg-white rounded-lg px-3 py-2 shadow-sm">
                              <p className="text-sm text-gray-800">Perfecto, encontré tu pedido. Está en proceso de envío y llegará mañana entre 10-14hrs. 📦</p>
                              <p className="text-xs text-gray-500 mt-1">9:43 AM</p>
                            </div>
                          </div>
                          
                          {/* Indicador de escritura */}
                          <div className="flex justify-start">
                            <div className="bg-white rounded-lg px-3 py-2 flex gap-1">
                              <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                              <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                              <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Input de WhatsApp */}
                      <div className="bg-[#f0f2f5] px-4 py-2 flex items-center gap-2 flex-shrink-0">
                        <div className="flex-1 bg-white rounded-full px-4 py-2 flex items-center gap-2">
                          <span className="text-gray-400 text-sm">Escribe un mensaje</span>
                        </div>
                        <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                          <MessageCircle className="w-5 h-5 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Subtle Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-transparent to-emerald-500/10 rounded-[2.5rem] sm:rounded-[3rem] pointer-events-none"></div>
                </div>
                
                {/* Badge flotante - posicionado fuera del teléfono para que no se corte */}
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-green-600 to-emerald-500 text-white px-4 py-2 rounded-full text-xs font-semibold shadow-md flex items-center gap-2 whitespace-nowrap z-10">
                  <MessageCircle className="w-4 h-4" />
                  AGENTE IA ACTIVO 24/7
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Logos strip (placeholders) */}
      <section aria-label="Clientes" className="py-8 sm:py-12 border-t border-green-500/30 relative">
        {/* Scanning line effect */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/40 to-transparent"></div>
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <p className="text-center text-xs uppercase tracking-widest text-green-400 mb-4 sm:mb-6 font-mono">RESULTADOS COMPROBADOS EN</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4 items-center">
            {["E-commerce", "Servicios", "Consultoría", "Ventas", "Marketing"].map((n, index) => (
              <div key={n} className="text-center text-green-300 py-4 rounded-xl border border-green-500/30 bg-black/30 hover:bg-green-900/20 hover:border-green-400/50 transition-all duration-300 hover:scale-105 font-mono text-sm tracking-wider relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10">{n}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="servicios" className="py-12 sm:py-16 lg:py-20 relative">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-900/5 to-transparent"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/40 to-transparent"></div>
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-8 sm:mb-12 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-wider bg-gradient-to-r from-green-400 via-cyan-300 to-emerald-500 bg-clip-text text-transparent">
              SERVICIOS
            </h2>
            <p className="mt-3 sm:mt-4 text-green-200 text-base sm:text-lg font-mono tracking-wider px-2">AGENTES IA WHATSAPP PARA VENTAS, SOPORTE Y ATENCIÓN AL CLIENTE</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((f, index) => (
              <Card key={f.title} className="bg-black/50 border-green-500/30 backdrop-blur-sm hover:border-green-400/50 transition-all duration-300 hover:scale-105 relative group overflow-hidden">
                {/* Glowing effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-transparent to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <CardHeader className="relative z-10">
                  <CardTitle className="flex items-center gap-4 text-green-200 font-mono">
                    <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r from-green-600 to-emerald-500 border border-green-400/40 shadow-md">
                      {f.icon}
                    </span>
                    <span className="text-lg font-bold tracking-wider">{f.title.toUpperCase()}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-green-300/90 font-medium text-sm leading-relaxed relative z-10">{f.desc}</CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-12 sm:mt-16 grid sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <Card className="bg-gradient-to-br from-green-900/30 to-emerald-800/20 border-green-500/30 hover:border-green-400/50 transition-all duration-300 hover:scale-105 relative group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardHeader className="relative z-10">
                <CardTitle className="flex items-center gap-3 text-green-200 font-semibold">
                  <Shield className="w-6 h-6 text-green-400" /> 
                  ENTREGA ASEGURADA
                </CardTitle>
              </CardHeader>
              <CardContent className="text-green-300/90 font-medium text-sm leading-relaxed relative z-10">
                DOCUMENTACIÓN, VERSIONADO Y TRASPASO CLARO AL EQUIPO. SOPORTE Y MONITOREO OPCIONAL.
              </CardContent>
            </Card>
            <Card className="bg-black/50 border-green-500/30 hover:border-green-400/50 transition-all duration-300 hover:scale-105 relative group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardHeader className="relative z-10">
                <CardTitle className="flex items-center gap-3 text-green-200 font-semibold">
                  <Zap className="w-6 h-6 text-green-400" /> 
                  QUICK WINS
                </CardTitle>
              </CardHeader>
              <CardContent className="text-green-300/90 font-medium text-sm leading-relaxed relative z-10">
                EMPEZAMOS POR AUTOMATIZACIONES DE ALTO IMPACTO Y BAJA FRICCIÓN PARA GENERAR VALOR INMEDIATO.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Cases */}
      <section id="casos" className="py-12 sm:py-16 lg:py-20 border-t border-green-500/30 relative">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-900/5 to-transparent"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/40 to-transparent"></div>
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-8 sm:mb-12 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-wider bg-gradient-to-r from-green-400 via-cyan-300 to-emerald-500 bg-clip-text text-transparent">
              CASOS DE ÉXITO
            </h2>
            <p className="mt-3 sm:mt-4 text-green-200 text-base sm:text-lg font-mono tracking-wider px-2">AGENTES IA WHATSAPP EN ACCIÓN - CASOS REALES</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <Card className="bg-black/50 border-green-500/30 hover:border-green-400/50 transition-all duration-300 hover:scale-105 relative group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardHeader className="relative z-10">
                <CardTitle className="flex items-center gap-3 text-green-200 font-mono text-lg font-bold tracking-wider">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-r from-green-600 to-emerald-500 border border-green-400/50 shadow-lg shadow-green-500/25">
                    <Settings className="w-5 h-5 text-white" />
                  </span>
                  TECHFLOW — INSIGHTS AUTOMATIZADOS
                </CardTitle>
              </CardHeader>
              <CardContent className="text-green-300 font-mono text-sm leading-relaxed space-y-3 relative z-10">
                <p>PROCESAMOS ENCUESTAS AUTOMÁTICAMENTE, GENERAMOS INSIGHTS CON IA Y CREAMOS PRESENTACIONES LISTAS PARA PRESENTAR.</p>
                <div className="flex items-center gap-3 text-green-400 text-sm font-bold bg-green-900/20 border border-green-500/30 rounded-lg p-3">
                  <Check className="w-5 h-5" /> 
                  90% MENOS TIEMPO EN REPORTES
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black/50 border-green-500/30 hover:border-green-400/50 transition-all duration-300 hover:scale-105 relative group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardHeader className="relative z-10">
                <CardTitle className="flex items-center gap-3 text-green-200 font-mono text-lg font-bold tracking-wider">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-r from-green-600 to-emerald-500 border border-green-400/50 shadow-lg shadow-green-500/25">
                    <Bot className="w-5 h-5 text-white" />
                  </span>
                  POZINOX — AGENTE IA WHATSAPP VENTAS
                </CardTitle>
              </CardHeader>
              <CardContent className="text-green-300 font-mono text-sm leading-relaxed space-y-3 relative z-10">
                <p>AGENTE IA EN WHATSAPP QUE RESPONDE CLIENTES 24/7, GENERA COTIZACIONES AUTOMÁTICAMENTE Y CIERRA VENTAS SIN INTERVENCIÓN HUMANA.</p>
                <div className="flex items-center gap-3 text-green-400 text-sm font-bold bg-green-900/20 border border-green-500/30 rounded-lg p-3">
                  <Check className="w-5 h-5" /> 
                  COTIZACIONES EN SEGUNDOS · VENTAS AUTOMÁTICAS
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black/50 border-green-500/30 hover:border-green-400/50 transition-all duration-300 hover:scale-105 relative group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardHeader className="relative z-10">
                <CardTitle className="flex items-center gap-3 text-green-200 font-mono text-lg font-bold tracking-wider">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-r from-green-600 to-emerald-500 border border-green-400/50 shadow-lg shadow-green-500/25">
                    <Bot className="w-5 h-5 text-white" />
                  </span>
                  FOODFLOW — AGENTE IA WHATSAPP
                </CardTitle>
              </CardHeader>
              <CardContent className="text-green-300 font-mono text-sm leading-relaxed space-y-3 relative z-10">
                <p>AGENTE INTELIGENTE QUE TOMA PEDIDOS, CONFIRMA RESERVAS, GESTIONA PAGOS Y ENVÍA UPDATES DE ENTREGA AUTOMÁTICAMENTE.</p>
                <div className="flex items-center gap-3 text-green-400 text-sm font-bold bg-green-900/20 border border-green-500/30 rounded-lg p-3">
                  <Check className="w-5 h-5" /> 
                  95% DE PEDIDOS AUTOMATIZADOS VÍA WHATSAPP
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black/50 border-green-500/30 hover:border-green-400/50 transition-all duration-300 hover:scale-105 relative group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardHeader className="relative z-10">
                <CardTitle className="flex items-center gap-3 text-green-200 font-mono text-lg font-bold tracking-wider">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-r from-green-600 to-emerald-500 border border-green-400/50 shadow-lg shadow-green-500/25">
                    <Cog className="w-5 h-5 text-white" />
                  </span>
                  LOGIMAX — INVENTARIO AUTOMATIZADO
                </CardTitle>
              </CardHeader>
              <CardContent className="text-green-300 font-mono text-sm leading-relaxed space-y-3 relative z-10">
                <p>SISTEMA INTELIGENTE QUE GESTIONA INVENTARIO, PREDICE DEMANDA Y OPTIMIZA RUTAS DE ENVÍO AUTOMÁTICAMENTE.</p>
                <div className="flex items-center gap-3 text-green-400 text-sm font-bold bg-green-900/20 border border-green-500/30 rounded-lg p-3">
                  <Check className="w-5 h-5" /> 
                  95% REDUCCIÓN EN ERRORES DE INVENTARIO
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="proceso" className="py-12 sm:py-16 lg:py-20 relative">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-900/5 to-transparent"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/40 to-transparent"></div>
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-8 sm:mb-12 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-wider bg-gradient-to-r from-green-400 via-cyan-300 to-emerald-500 bg-clip-text text-transparent">
              PROCESO DE TRABAJO
            </h2>
            <p className="mt-3 sm:mt-4 text-green-200 text-base sm:text-lg font-mono tracking-wider px-2">DE LA IDEA A LA AUTOMATIZACIÓN, EN SEMANAS — NO MESES</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {["Diagnóstico", "Diseño", "Implementación", "Soporte"].map((step, i) => (
              <Card key={step} className="bg-black/50 border-green-500/30 hover:border-green-400/50 transition-all duration-300 hover:scale-105 relative group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CardHeader className="relative z-10">
                  <CardTitle className="text-green-200 font-mono text-lg font-bold tracking-wider">{`${i + 1}. ${step.toUpperCase()}`}</CardTitle>
                </CardHeader>
                <CardContent className="text-green-300/90 font-medium text-sm leading-relaxed relative z-10">
                  {i === 0 && "DETECTAMOS OPORTUNIDADES DE AUTOMATIZACIÓN Y PRIORIZAMOS QUICK WINS."}
                  {i === 1 && "MAPA DE FLUJO, HERRAMIENTAS Y DEFINICIÓN DE ÉXITO/ROI."}
                  {i === 2 && "CONFIGURACIÓN DE AUTOMATIZACIONES, PRUEBAS, DOCUMENTACIÓN Y TRASPASO."}
                  {i === 3 && "MONITOREO, MEJORAS CONTINUAS Y NUEVAS INTEGRACIONES."}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="precios" className="py-12 sm:py-16 lg:py-20 border-t border-green-500/30 relative">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-900/5 to-transparent"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/40 to-transparent"></div>
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-8 sm:mb-12 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-wider bg-gradient-to-r from-green-400 via-cyan-300 to-emerald-500 bg-clip-text text-transparent">
              PLANES Y PRECIOS
            </h2>
            <p className="mt-3 sm:mt-4 text-green-200 text-base sm:text-lg font-mono tracking-wider px-2">ELIGE EL PLAN PERFECTO PARA TU NEGOCIO - WHATSAPP 24/7</p>
          </div>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {plans.map((p) => (
              <Card key={p.name} className={`border-green-500/30 hover:border-green-400/50 transition-all duration-300 hover:scale-105 relative group overflow-hidden flex flex-col ${p.highlight ? "bg-gradient-to-br from-green-900/30 to-emerald-800/20" : "bg-black/50"}`}>
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CardHeader className="relative z-10">
                  <CardTitle className="flex items-center justify-between text-green-200 font-mono">
                    <span className="text-xl font-bold tracking-wider">PLAN {p.name.toUpperCase()}</span>
                    {p.highlight && <Badge className="bg-green-600 text-white">MÁS ELEGIDO</Badge>}
                  </CardTitle>
                  <div className="mt-3 text-green-300 font-semibold text-sm sm:text-base">
                    {p.name === "Starter" && "1 AGENTE IA"}
                    {p.name === "Business" && "2 AGENTES IA + 1 AUTOMATIZACIÓN"}
                    {p.name === "Pro" && "3 AGENTES IA + AUTOMATIZACIONES AVANZADAS"}
                  </div>
                </CardHeader>
                <CardContent className="text-green-300 font-mono relative z-10 flex flex-col flex-grow">
                  <div className="mb-6">
                    <div className="text-4xl font-bold text-green-200 mb-2">{p.price}</div>
                    <div className="text-sm text-green-400">precio {p.periodic}</div>
                  </div>
                  <ul className="space-y-3 text-sm flex-grow">
                    {p.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3">
                        <Check className="w-5 h-5 mt-0.5 text-green-400 flex-shrink-0" /> 
                        <span className="text-green-300">{b}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    onClick={() => smoothScrollTo('contacto')} 
                    className="w-full mt-8 bg-gradient-to-r from-green-600 to-emerald-500 hover:from-green-500 hover:to-emerald-400 text-white shadow-md hover:shadow-lg transition-all duration-200 font-semibold tracking-wider cursor-pointer relative overflow-hidden rounded-lg py-3"
                  >
                    <span className="relative z-10">🚀 QUIERO ESTE PLAN</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-400/10"></div>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 sm:py-16 lg:py-20 relative">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-900/5 to-transparent"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/40 to-transparent"></div>
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-8 sm:mb-12 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-wider bg-gradient-to-r from-green-400 via-cyan-300 to-emerald-500 bg-clip-text text-transparent">
              LO QUE DICEN
            </h2>
            <p className="mt-3 sm:mt-4 text-green-200 text-base sm:text-lg font-mono tracking-wider px-2">RESULTADOS REALES DE EQUIPOS QUE YA AUTOMATIZAN CON IA</p>
          </div>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {testimonials.map((t) => (
              <Card key={t.name} className="bg-black/50 border-green-500/30 hover:border-green-400/50 transition-all duration-300 hover:scale-105 relative group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CardContent className="p-6 sm:p-8 relative z-10">
                  <p className="text-green-100 text-sm sm:text-base lg:text-lg leading-relaxed font-mono italic">"{t.quote.toUpperCase()}"</p>
                  <div className="mt-3 sm:mt-4 flex items-center gap-1">
                    {[...Array(t.rating || 5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-green-400 font-mono font-bold tracking-wider">{t.name.toUpperCase()}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contacto" className="py-12 sm:py-16 lg:py-20 border-t border-green-500/30 relative">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-900/5 to-transparent"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/40 to-transparent"></div>
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-8 sm:mb-12 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-wider bg-gradient-to-r from-green-400 via-cyan-300 to-emerald-500 bg-clip-text text-transparent">
              AGENDA UNA DEMO
            </h2>
            <p className="mt-3 sm:mt-4 text-green-200 text-base sm:text-lg font-mono tracking-wider px-2">CUÉNTANOS QUÉ TE GUSTARÍA AUTOMATIZAR. TE RESPONDEMOS EN 24H HÁBILES</p>
          </div>
          <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            <Card className="bg-black/50 border-green-500/30 hover:border-green-400/50 transition-all duration-300 relative group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <form onSubmit={handleSubmit} className="p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-6 relative z-10">
                <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
                  <Input 
                    name="name"
                    placeholder="NOMBRE" 
                    required
                    className="bg-green-900/20 border-green-500/50 text-green-200 placeholder-green-400 focus:border-green-400" 
                  />
                  <Input 
                    name="email"
                    type="email" 
                    placeholder="CORREO" 
                    required
                    className="bg-green-900/20 border-green-500/50 text-green-200 placeholder-green-400 focus:border-green-400" 
                  />
                </div>
                <Input 
                  name="company"
                  placeholder="EMPRESA (OPCIONAL)" 
                  className="bg-green-900/20 border-green-500/50 text-green-200 placeholder-green-400 focus:border-green-400" 
                />
                <Textarea 
                  name="message"
                  placeholder="¿QUÉ PROCESO QUIERES AUTOMATIZAR?" 
                  rows={5} 
                  required
                  className="bg-green-900/20 border-green-500/50 text-green-200 placeholder-green-400 focus:border-green-400" 
                />
                <div className="flex flex-wrap gap-3">
                  <Badge className="bg-green-900/30 border-green-500/50 text-green-300 font-mono text-xs tracking-wider">WHATSAPP</Badge>
                  <Badge className="bg-green-900/30 border-green-500/50 text-green-300 font-mono text-xs tracking-wider">AGENTES IA</Badge>
                  <Badge className="bg-green-900/30 border-green-500/50 text-green-300 font-mono text-xs tracking-wider">VENTAS 24/7</Badge>
                  <Badge className="bg-green-900/30 border-green-500/50 text-green-300 font-mono text-xs tracking-wider">SOPORTE</Badge>
                  <Badge className="bg-green-900/30 border-green-500/50 text-green-300 font-mono text-xs tracking-wider">AUTOMÁTICO</Badge>
                </div>
                <Button 
                  type="submit"
                  className="w-full gap-3 bg-gradient-to-r from-green-600 to-emerald-500 hover:from-green-500 hover:to-emerald-400 text-white border-green-500/50 shadow-lg shadow-green-500/25 hover:shadow-green-500/40 transition-all duration-300 hover:scale-105 font-bold tracking-wider"
                >
                  ENVIAR SOLICITUD <ArrowRight className="w-5 h-5" />
                </Button>
                <p className="text-xs text-green-400 font-mono">AL ENVIAR ACEPTAS NUESTRA POLÍTICA DE PRIVACIDAD</p>
              </form>
            </Card>
            <div className="space-y-6 sm:space-y-8">
              <Card className="bg-black/50 border-green-500/30 hover:border-green-400/50 transition-all duration-300 hover:scale-105 relative group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CardContent className="p-4 sm:p-6 lg:p-8 text-green-200 space-y-4 sm:space-y-6 relative z-10">
                  <p className="flex items-center gap-3 font-medium text-base sm:text-lg"><Phone className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" /> +56 9 4858 8388</p>
                  <p className="flex items-center gap-3 font-medium text-base sm:text-lg"><Mail className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" /> sebaceronu@gmail.com</p>
                  <div className="text-xs sm:text-sm text-green-300 font-mono">WHATSAPP Y CORREO RESPONDEN EN HORARIO HÁBIL DE 9:00HRS A 18:00HRS</div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-green-900/30 to-emerald-800/20 border-green-500/30 hover:border-green-400/50 transition-all duration-300 hover:scale-105 relative group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CardHeader className="relative z-10">
                  <CardTitle className="flex items-center gap-3 text-green-200 font-mono text-base sm:text-lg font-bold tracking-wider">
                    <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" /> 
                    ¿BUSCAS ALGO A MEDIDA?
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-green-300 font-mono text-xs sm:text-sm leading-relaxed relative z-10">
                  CUÉNTANOS TU CASO Y DISEÑAMOS UN FLUJO PERSONALIZADO CON MÉTRICAS DE ÉXITO Y ROI ESPERADO.
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 sm:py-12 border-t border-green-500/30 relative">
        {/* Scanning line effect */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/40 to-transparent"></div>
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 text-xs sm:text-sm relative z-10">
          <p className="text-green-300 font-mono tracking-wider text-center sm:text-left">© {year} AI SOLUTIONS — AGENCIA DE AUTOMATIZACIÓN CON INTELIGENCIA ARTIFICIAL</p>
          <div className="flex items-center gap-4 sm:gap-6 flex-wrap justify-center">
            <a href="#" className="text-green-400 hover:text-green-300 transition-colors duration-300 font-mono tracking-wider hover:scale-105">LINKEDIN</a>
            <a href="#" className="text-green-400 hover:text-green-300 transition-colors duration-300 font-mono tracking-wider hover:scale-105">INSTAGRAM</a>
            <a href="#" className="text-green-400 hover:text-green-300 transition-colors duration-300 font-mono tracking-wider hover:scale-105">GITHUB</a>
          </div>
        </div>
      </footer>

      {/* Notificación profesional */}
      {notification && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.9 }}
          className="fixed bottom-6 right-6 z-50 max-w-md"
        >
          <div className={`rounded-xl border-2 p-6 shadow-2xl backdrop-blur-sm ${
            notification.type === 'success' 
              ? 'bg-gradient-to-r from-green-900/90 to-green-800/90 border-green-500/50 shadow-green-500/25' 
              : 'bg-gradient-to-r from-green-900/90 to-emerald-800/90 border-green-500/50 shadow-green-500/25'
          }`}>
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                notification.type === 'success' 
                  ? 'bg-green-600 text-white' 
                  : 'bg-green-600 text-white'
              }`}>
                {notification.type === 'success' ? (
                  <Check className="w-6 h-6" />
                ) : (
                  <X className="w-6 h-6" />
                )}
              </div>
              <div className="flex-1">
                <h3 className={`font-bold text-lg ${
                  notification.type === 'success' ? 'text-green-200' : 'text-green-200'
                }`}>
                  {notification.type === 'success' ? '¡ÉXITO!' : 'ERROR'}
                </h3>
                <p className={`text-sm mt-1 ${
                  notification.type === 'success' ? 'text-green-300' : 'text-green-300'
                }`}>
                  {notification.message}
                </p>
              </div>
              <button
                onClick={() => setNotification(null)}
                className={`p-2 rounded-lg hover:bg-white/10 transition-colors ${
                  notification.type === 'success' ? 'text-green-300' : 'text-green-300'
                }`}
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}

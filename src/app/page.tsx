"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Check, Brain, Workflow, MessageSquare, BarChart3, Rocket, Zap, Shield, Phone, Mail, ArrowRight, Star } from "lucide-react";

// AI Solutions — Agency Landing Page
// Ready to paste into a Next.js/React + Tailwind + shadcn/ui project
// Replace links, social handles, and contact details as needed.

const features = [
  {
    icon: <Workflow className="w-6 h-6" aria-hidden />,
    title: "Automatización de procesos",
    desc: "Eliminamos tareas repetitivas y conectamos tus sistemas para reducir costos operativos hasta un 70%.",
  },
  {
    icon: <MessageSquare className="w-6 h-6" aria-hidden />,
    title: "Atención al cliente 24/7",
    desc: "Agentes inteligentes que responden a tus clientes instantáneamente, mejorando la experiencia y aumentando ventas.",
  },
  {
    icon: <BarChart3 className="w-6 h-6" aria-hidden />,
    title: "Reportes inteligentes",
    desc: "Dashboards y presentaciones que se generan automáticamente, ahorrando horas de trabajo manual.",
  },
];

const plans = [
  {
    name: "Starter",
    price: "$49.990 CLP",
    originalPrice: "$150.000 CLP",
    periodic: "único",
    bullets: [
      "1 automatización básica",
      "Ahorro de 5-10 horas/semana",
      "Entrega y soporte 15 días",
    ],
    highlight: false,
  },
  {
    name: "Business",
    price: "$149.990 CLP",
    originalPrice: "$400.000 CLP",
    periodic: "único",
    bullets: [
      "Hasta 3 automatizaciones",
      "Atención al cliente 24/7",
      "Integración con tus sistemas",
      "Soporte 30 días",
    ],
    highlight: true,
  },
  {
    name: "Pro",
    price: "Desde $299.990 CLP",
    originalPrice: "Desde $650.000 CLP",
    periodic: "+ mantención",
    bullets: [
      "Automatizaciones avanzadas",
      "Reportes automáticos",
      "Soporte continuo",
      "Mantenimiento mensual",
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

  // Función para scroll suave con efecto de pulso
  const smoothScrollTo = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      
      // Agregar efecto de pulso al elemento de destino
      element.classList.add('animate-pulse');
      setTimeout(() => {
        element.classList.remove('animate-pulse');
      }, 2000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-red-900 text-red-100 relative overflow-hidden">
      {/* Futuristic Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,0,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,0,0,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
        
        {/* Floating Particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-red-500 rounded-full animate-bounce opacity-60"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-red-400 rounded-full animate-ping opacity-40"></div>
        <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-red-600 rounded-full animate-pulse opacity-50"></div>
        
        {/* Neon Lines */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-red-500 to-transparent opacity-30"></div>
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-red-400 to-transparent opacity-20"></div>
      </div>

      {/* Nav */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/90 border-b border-red-500/30 relative">
        {/* Glowing border effect */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
        
        <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between relative">
          <div className="flex items-center gap-2">
            <div className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-r from-red-600 to-red-500 shadow-lg shadow-red-500/50 animate-pulse">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold tracking-wider text-lg bg-gradient-to-r from-red-400 to-red-300 bg-clip-text text-transparent">
              AI SOLUTIONS
            </span>
            <Badge variant="secondary" className="ml-2 bg-red-900/30 text-red-300 border-red-500/50 animate-pulse">
              AGENCIA IA
            </Badge>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <button 
              onClick={() => smoothScrollTo('servicios')} 
              className="text-red-300 hover:text-red-400 transition-all duration-300 hover:scale-105 relative group cursor-pointer hover:drop-shadow-[0_0_8px_rgba(239,68,68,0.5)]"
            >
              <span className="relative z-10">SERVICIOS</span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all duration-300"></div>
            </button>
            <button 
              onClick={() => smoothScrollTo('casos')} 
              className="text-red-300 hover:text-red-400 transition-all duration-300 hover:scale-105 relative group cursor-pointer hover:drop-shadow-[0_0_8px_rgba(239,68,68,0.5)]"
            >
              <span className="relative z-10">CASOS</span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all duration-300"></div>
            </button>
            <button 
              onClick={() => smoothScrollTo('proceso')} 
              className="text-red-300 hover:text-red-400 transition-all duration-300 hover:scale-105 relative group cursor-pointer hover:drop-shadow-[0_0_8px_rgba(239,68,68,0.5)]"
            >
              <span className="relative z-10">PROCESO</span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all duration-300"></div>
            </button>
            <button 
              onClick={() => smoothScrollTo('precios')} 
              className="text-red-300 hover:text-red-400 transition-all duration-300 hover:scale-105 relative group cursor-pointer hover:drop-shadow-[0_0_8px_rgba(239,68,68,0.5)]"
            >
              <span className="relative z-10">PRECIOS</span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all duration-300"></div>
            </button>
            <button 
              onClick={() => smoothScrollTo('contacto')} 
              className="text-red-300 hover:text-red-400 transition-all duration-300 hover:scale-105 relative group cursor-pointer hover:drop-shadow-[0_0_8px_rgba(239,68,68,0.5)]"
            >
              <span className="relative z-10">CONTACTO</span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all duration-300"></div>
            </button>
          </nav>
          <div className="flex items-center gap-2">
            <Button 
              onClick={() => smoothScrollTo('contacto')} 
              className="hidden md:inline-flex bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white border-red-500/50 shadow-lg shadow-red-500/25 hover:shadow-red-500/40 transition-all duration-300 hover:scale-105 font-bold tracking-wider cursor-pointer"
            >
              AGENDA DEMO GRATUITA
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* Futuristic Background Effects */}
        <div className="pointer-events-none absolute inset-0">
          {/* Animated Red Orbs */}
          <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-red-600/30 blur-3xl animate-pulse" />
          <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-red-500/20 blur-3xl animate-bounce" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-64 w-64 rounded-full bg-red-400/10 blur-2xl animate-spin" />
          
          {/* Scanning Lines */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent animate-pulse"></div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-400 to-transparent animate-pulse delay-1000"></div>
          
          {/* Matrix-style Rain */}
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-red-500/50 via-transparent to-red-500/50 animate-pulse"></div>
          <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-red-400/30 via-transparent to-red-400/30 animate-pulse delay-500"></div>
        </div>
        <div className="mx-auto max-w-7xl px-4 py-24">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="relative z-10">
              <Badge className="bg-red-900/30 text-red-300 border-red-500/50 mb-4 animate-pulse font-mono text-xs tracking-widest">
                AUTOMATIZACIÓN · IA · RESULTADOS
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold tracking-wider leading-tight">
                <span className="bg-gradient-to-r from-red-400 via-red-300 to-red-500 bg-clip-text text-transparent">
                  AUTOMATIZA
                </span>
                <br />
                <span className="text-white">TU NEGOCIO CON</span>
                <br />
                <span className="bg-gradient-to-r from-red-500 via-red-400 to-red-600 bg-clip-text text-transparent animate-pulse">
                  INTELIGENCIA ARTIFICIAL
                </span>
          </h1>
              <p className="mt-6 text-red-200 text-lg leading-relaxed font-light">
                Eliminamos tareas repetitivas, reducimos costos operativos y multiplicamos la productividad de tu equipo con soluciones de automatización inteligente.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button 
                  onClick={() => smoothScrollTo('contacto')} 
                  size="lg" 
                  className="gap-3 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white border-red-500/50 shadow-lg shadow-red-500/25 hover:shadow-red-500/40 transition-all duration-300 hover:scale-105 font-bold tracking-wider cursor-pointer"
                >
                  <Rocket className="w-5 h-5 animate-bounce" /> 
                  AGENDA DEMO GRATUITA
                </Button>
                <Button 
                  onClick={() => smoothScrollTo('servicios')} 
                  variant="secondary" 
                  size="lg" 
                  className="gap-3 bg-transparent border-2 border-red-500/50 text-red-300 hover:bg-red-500/10 hover:border-red-400 transition-all duration-300 hover:scale-105 font-bold tracking-wider cursor-pointer"
                >
                  <ArrowRight className="w-5 h-5" /> 
                  VER SERVICIOS
                </Button>
              </div>
              <div className="mt-8 flex items-center gap-3 text-sm text-red-300 font-mono">
                <Shield className="w-5 h-5 text-red-400 animate-pulse" /> 
                ENTREGA DOCUMENTADA · SOPORTE Y MANTENIMIENTO · ENFOQUE EN ROI
              </div>
            </div>
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
              <Card className="bg-black/50 border-red-500/30 backdrop-blur-sm relative overflow-hidden">
                {/* Glowing border effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 via-transparent to-red-500/20 opacity-50"></div>
                
                <CardHeader className="relative z-10">
                  <CardTitle className="flex items-center gap-3 text-red-300 font-mono">
                    <Zap className="w-6 h-6 text-red-400 animate-pulse" /> 
                    EJEMPLO DE RESULTADO
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 text-sm relative z-10">
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="rounded-xl p-4 bg-red-900/20 border border-red-500/30 hover:border-red-400/50 transition-all duration-300 hover:scale-105 relative group">
                      <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <p className="font-bold text-red-200 relative z-10">ENTRADA</p>
                      <p className="text-red-300 relative z-10">Cliente solicita información</p>
                    </div>
                    <div className="rounded-xl p-4 bg-red-900/20 border border-red-500/30 hover:border-red-400/50 transition-all duration-300 hover:scale-105 relative group">
                      <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <p className="font-bold text-red-200 relative z-10">PROCESO</p>
                      <p className="text-red-300 relative z-10">IA procesa automáticamente</p>
                    </div>
                    <div className="rounded-xl p-4 bg-red-900/20 border border-red-500/30 hover:border-red-400/50 transition-all duration-300 hover:scale-105 relative group">
                      <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <p className="font-bold text-red-200 relative z-10">ENTREGA</p>
                      <p className="text-red-300 relative z-10">Respuesta instantánea al cliente</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-red-400 font-mono bg-red-900/20 border border-red-500/30 rounded-lg p-3">
                    <Star className="w-5 h-5 animate-pulse" /> 
                    AHORRO ESTIMADO: 5–10 HORAS/SEMANA
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Logos strip (placeholders) */}
      <section aria-label="Clientes" className="py-12 border-t border-red-500/30 relative">
        {/* Scanning line effect */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent animate-pulse"></div>
        
        <div className="mx-auto max-w-7xl px-4 relative z-10">
          <p className="text-center text-xs uppercase tracking-widest text-red-400 mb-6 font-mono">RESULTADOS COMPROBADOS EN</p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 items-center">
            {["E-commerce", "Servicios", "Consultoría", "Ventas", "Marketing"].map((n, index) => (
              <div key={n} className="text-center text-red-300 py-4 rounded-xl border border-red-500/30 bg-black/30 hover:bg-red-900/20 hover:border-red-400/50 transition-all duration-300 hover:scale-105 font-mono text-sm tracking-wider relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10">{n}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="servicios" className="py-20 relative">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-900/5 to-transparent"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent animate-pulse"></div>
        
        <div className="mx-auto max-w-7xl px-4 relative z-10">
          <div className="mb-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold tracking-wider bg-gradient-to-r from-red-400 via-red-300 to-red-500 bg-clip-text text-transparent">
              SERVICIOS
            </h2>
            <p className="mt-4 text-red-200 text-lg font-mono tracking-wider">AUTOMATIZACIONES MEDIBLES, ENFOCADAS EN RESULTADOS Y ROI</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((f, index) => (
              <Card key={f.title} className="bg-black/50 border-red-500/30 backdrop-blur-sm hover:border-red-400/50 transition-all duration-300 hover:scale-105 relative group overflow-hidden">
                {/* Glowing effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-transparent to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <CardHeader className="relative z-10">
                  <CardTitle className="flex items-center gap-4 text-red-200 font-mono">
                    <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r from-red-600 to-red-500 border border-red-400/50 shadow-lg shadow-red-500/25 animate-pulse">
                      {f.icon}
                    </span>
                    <span className="text-lg font-bold tracking-wider">{f.title.toUpperCase()}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-red-300 font-mono text-sm leading-relaxed relative z-10">{f.desc}</CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-16 grid md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-red-900/30 to-red-800/20 border-red-500/30 hover:border-red-400/50 transition-all duration-300 hover:scale-105 relative group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardHeader className="relative z-10">
                <CardTitle className="flex items-center gap-3 text-red-200 font-mono">
                  <Shield className="w-6 h-6 text-red-400 animate-pulse" /> 
                  ENTREGA ASEGURADA
                </CardTitle>
              </CardHeader>
              <CardContent className="text-red-300 font-mono text-sm leading-relaxed relative z-10">
                DOCUMENTACIÓN, VERSIONADO Y TRASPASO CLARO AL EQUIPO. SOPORTE Y MONITOREO OPCIONAL.
              </CardContent>
            </Card>
            <Card className="bg-black/50 border-red-500/30 hover:border-red-400/50 transition-all duration-300 hover:scale-105 relative group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardHeader className="relative z-10">
                <CardTitle className="flex items-center gap-3 text-red-200 font-mono">
                  <Zap className="w-6 h-6 text-red-400 animate-pulse" /> 
                  QUICK WINS
                </CardTitle>
              </CardHeader>
              <CardContent className="text-red-300 font-mono text-sm leading-relaxed relative z-10">
                EMPEZAMOS POR AUTOMATIZACIONES DE ALTO IMPACTO Y BAJA FRICCIÓN PARA GENERAR VALOR INMEDIATO.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Cases */}
      <section id="casos" className="py-20 border-t border-red-500/30 relative">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-900/5 to-transparent"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent animate-pulse"></div>
        
        <div className="mx-auto max-w-7xl px-4 relative z-10">
          <div className="mb-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold tracking-wider bg-gradient-to-r from-red-400 via-red-300 to-red-500 bg-clip-text text-transparent">
              CASOS DE ÉXITO
            </h2>
            <p className="mt-4 text-red-200 text-lg font-mono tracking-wider">EJEMPLOS REALES DE AUTOMATIZACIÓN APLICADA AL NEGOCIO</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-black/50 border-red-500/30 hover:border-red-400/50 transition-all duration-300 hover:scale-105 relative group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardHeader className="relative z-10">
                <CardTitle className="text-red-200 font-mono text-lg font-bold tracking-wider">TECHFLOW — INSIGHTS AUTOMATIZADOS</CardTitle>
              </CardHeader>
              <CardContent className="text-red-300 font-mono text-sm leading-relaxed space-y-3 relative z-10">
                <p>PROCESAMOS ENCUESTAS AUTOMÁTICAMENTE, GENERAMOS INSIGHTS CON IA Y CREAMOS PRESENTACIONES LISTAS PARA PRESENTAR.</p>
                <div className="flex items-center gap-3 text-red-400 text-sm font-bold bg-red-900/20 border border-red-500/30 rounded-lg p-3">
                  <Check className="w-5 h-5 animate-pulse" /> 
                  90% MENOS TIEMPO EN REPORTES
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black/50 border-red-500/30 hover:border-red-400/50 transition-all duration-300 hover:scale-105 relative group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardHeader className="relative z-10">
                <CardTitle className="text-red-200 font-mono text-lg font-bold tracking-wider">POZINOX — VENTAS Y COTIZACIONES</CardTitle>
              </CardHeader>
              <CardContent className="text-red-300 font-mono text-sm leading-relaxed space-y-3 relative z-10">
                <p>AGENTE DE VENTAS INTELIGENTE QUE RESPONDE A CLIENTES, GENERA COTIZACIONES AUTOMÁTICAMENTE Y LAS ENVÍA INSTANTÁNEAMENTE.</p>
                <div className="flex items-center gap-3 text-red-400 text-sm font-bold bg-red-900/20 border border-red-500/30 rounded-lg p-3">
                  <Check className="w-5 h-5 animate-pulse" /> 
                  COTIZACIONES EN MINUTOS, NO DÍAS
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="proceso" className="py-20 relative">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-900/5 to-transparent"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent animate-pulse"></div>
        
        <div className="mx-auto max-w-7xl px-4 relative z-10">
          <div className="mb-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold tracking-wider bg-gradient-to-r from-red-400 via-red-300 to-red-500 bg-clip-text text-transparent">
              PROCESO DE TRABAJO
            </h2>
            <p className="mt-4 text-red-200 text-lg font-mono tracking-wider">DE LA IDEA A LA AUTOMATIZACIÓN, EN SEMANAS — NO MESES</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {["Diagnóstico", "Diseño", "Implementación", "Soporte"].map((step, i) => (
              <Card key={step} className="bg-black/50 border-red-500/30 hover:border-red-400/50 transition-all duration-300 hover:scale-105 relative group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CardHeader className="relative z-10">
                  <CardTitle className="text-red-200 font-mono text-lg font-bold tracking-wider">{`${i + 1}. ${step.toUpperCase()}`}</CardTitle>
                </CardHeader>
                <CardContent className="text-red-300 font-mono text-sm leading-relaxed relative z-10">
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
      <section id="precios" className="py-20 border-t border-red-500/30 relative">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-900/5 to-transparent"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent animate-pulse"></div>
        
        <div className="mx-auto max-w-7xl px-4 relative z-10">
          <div className="mb-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold tracking-wider bg-gradient-to-r from-red-400 via-red-300 to-red-500 bg-clip-text text-transparent">
              PLANES Y PRECIOS
            </h2>
            <div className="mt-6 mb-4">
              <Badge className="bg-red-600 text-white animate-pulse text-lg px-6 py-2 font-bold tracking-wider">
                🔥 MEGA DESCUENTO - HASTA 67% OFF
              </Badge>
            </div>
            <p className="mt-4 text-red-200 text-lg font-mono tracking-wider">COMBINA PROYECTOS ÚNICOS CON MANTENCIÓN MENSUAL PARA CRECIMIENTO SOSTENIDO</p>
            <p className="mt-2 text-red-400 text-sm font-mono tracking-wider animate-pulse">⚡ PRECIOS DE LANZAMIENTO - OFERTA LIMITADA</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((p) => (
              <Card key={p.name} className={`border-red-500/30 hover:border-red-400/50 transition-all duration-300 hover:scale-105 relative group overflow-hidden flex flex-col ${p.highlight ? "bg-gradient-to-br from-red-900/30 to-red-800/20" : "bg-black/50"}`}>
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CardHeader className="relative z-10">
                  <CardTitle className="flex items-center justify-between text-red-200 font-mono">
                    <span className="text-xl font-bold tracking-wider">{p.name.toUpperCase()}</span>
                    <div className="flex gap-2">
                      <Badge className="bg-red-600 text-white animate-pulse text-xs">
                        {p.name === "Starter" ? "67% OFF" : p.name === "Business" ? "62% OFF" : "54% OFF"}
                      </Badge>
                      {p.highlight && <Badge className="bg-red-600 text-white animate-pulse">MÁS ELEGIDO</Badge>}
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-red-300 font-mono relative z-10 flex flex-col flex-grow">
                  <div className="mb-6">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="text-4xl font-bold text-red-200">{p.price}</div>
                      <div className="text-lg text-red-400 line-through opacity-60">{p.originalPrice}</div>
                    </div>
                    <div className="text-sm text-red-400">PAGO {p.periodic.toUpperCase()}</div>
                    <div className="text-xs text-red-500 font-bold mt-1 animate-pulse">🔥 MEGA DESCUENTO - PRECIO DE LANZAMIENTO</div>
                  </div>
                  <ul className="space-y-3 text-sm flex-grow">
                    {p.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3">
                        <Check className="w-5 h-5 mt-0.5 text-red-400 animate-pulse" /> 
                        <span className="text-red-300">{b.toUpperCase()}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    onClick={() => smoothScrollTo('contacto')} 
                    className="w-full mt-8 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white border-red-500/50 shadow-lg shadow-red-500/25 hover:shadow-red-500/40 transition-all duration-300 hover:scale-105 font-bold tracking-wider cursor-pointer relative overflow-hidden"
                  >
                    <span className="relative z-10">🚀 QUIERO ESTE PLAN</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-red-400/20 animate-pulse"></div>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 relative">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-900/5 to-transparent"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent animate-pulse"></div>
        
        <div className="mx-auto max-w-7xl px-4 relative z-10">
          <div className="mb-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold tracking-wider bg-gradient-to-r from-red-400 via-red-300 to-red-500 bg-clip-text text-transparent">
              LO QUE DICEN
            </h2>
            <p className="mt-4 text-red-200 text-lg font-mono tracking-wider">RESULTADOS REALES DE EQUIPOS QUE YA AUTOMATIZAN CON IA</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t) => (
              <Card key={t.name} className="bg-black/50 border-red-500/30 hover:border-red-400/50 transition-all duration-300 hover:scale-105 relative group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CardContent className="p-8 relative z-10">
                  <p className="text-red-100 text-lg leading-relaxed font-mono italic">"{t.quote.toUpperCase()}"</p>
                  <div className="mt-4 flex items-center gap-1">
                    {[...Array(t.rating || 5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="mt-4 text-sm text-red-400 font-mono font-bold tracking-wider">{t.name.toUpperCase()}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contacto" className="py-20 border-t border-red-500/30 relative">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-900/5 to-transparent"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent animate-pulse"></div>
        
        <div className="mx-auto max-w-7xl px-4 relative z-10">
          <div className="mb-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold tracking-wider bg-gradient-to-r from-red-400 via-red-300 to-red-500 bg-clip-text text-transparent">
              AGENDA UNA DEMO
            </h2>
            <p className="mt-4 text-red-200 text-lg font-mono tracking-wider">CUÉNTANOS QUÉ TE GUSTARÍA AUTOMATIZAR. TE RESPONDEMOS EN 24H HÁBILES</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="bg-black/50 border-red-500/30 hover:border-red-400/50 transition-all duration-300 relative group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardContent className="p-8 space-y-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input placeholder="NOMBRE" className="bg-red-900/20 border-red-500/50 text-red-200 placeholder-red-400 focus:border-red-400" />
                  <Input type="email" placeholder="CORREO" className="bg-red-900/20 border-red-500/50 text-red-200 placeholder-red-400 focus:border-red-400" />
                </div>
                <Input placeholder="EMPRESA (OPCIONAL)" className="bg-red-900/20 border-red-500/50 text-red-200 placeholder-red-400 focus:border-red-400" />
                <Textarea placeholder="¿QUÉ PROCESO QUIERES AUTOMATIZAR?" rows={5} className="bg-red-900/20 border-red-500/50 text-red-200 placeholder-red-400 focus:border-red-400" />
                <div className="flex flex-wrap gap-3">
                  <Badge className="bg-red-900/30 border-red-500/50 text-red-300 font-mono text-xs tracking-wider">AUTOMATIZACIÓN</Badge>
                  <Badge className="bg-red-900/30 border-red-500/50 text-red-300 font-mono text-xs tracking-wider">ATENCIÓN 24/7</Badge>
                  <Badge className="bg-red-900/30 border-red-500/50 text-red-300 font-mono text-xs tracking-wider">REPORTES</Badge>
                  <Badge className="bg-red-900/30 border-red-500/50 text-red-300 font-mono text-xs tracking-wider">INTEGRACIÓN</Badge>
                  <Badge className="bg-red-900/30 border-red-500/50 text-red-300 font-mono text-xs tracking-wider">IA</Badge>
                </div>
                <Button className="w-full gap-3 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white border-red-500/50 shadow-lg shadow-red-500/25 hover:shadow-red-500/40 transition-all duration-300 hover:scale-105 font-bold tracking-wider">
                  ENVIAR SOLICITUD <ArrowRight className="w-5 h-5" />
                </Button>
                <p className="text-xs text-red-400 font-mono">AL ENVIAR ACEPTAS NUESTRA POLÍTICA DE PRIVACIDAD</p>
              </CardContent>
            </Card>
            <div className="space-y-8">
              <Card className="bg-black/50 border-red-500/30 hover:border-red-400/50 transition-all duration-300 hover:scale-105 relative group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CardContent className="p-8 text-red-200 space-y-6 relative z-10">
                  <p className="flex items-center gap-3 font-mono text-lg"><Phone className="w-6 h-6 text-red-400 animate-pulse" /> +56 9 4858 8388</p>
                  <p className="flex items-center gap-3 font-mono text-lg"><Mail className="w-6 h-6 text-red-400 animate-pulse" /> sebaceronu@gmail.com</p>
                  <div className="text-sm text-red-300 font-mono">WHATSAPP Y CORREO RESPONDEN EN HORARIO HÁBIL DE 9:00HRS A 18:00HRS</div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-red-900/30 to-red-800/20 border-red-500/30 hover:border-red-400/50 transition-all duration-300 hover:scale-105 relative group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CardHeader className="relative z-10">
                  <CardTitle className="flex items-center gap-3 text-red-200 font-mono text-lg font-bold tracking-wider">
                    <Zap className="w-6 h-6 text-red-400 animate-pulse" /> 
                    ¿BUSCAS ALGO A MEDIDA?
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-red-300 font-mono text-sm leading-relaxed relative z-10">
                  CUÉNTANOS TU CASO Y DISEÑAMOS UN FLUJO PERSONALIZADO CON MÉTRICAS DE ÉXITO Y ROI ESPERADO.
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-red-500/30 relative">
        {/* Scanning line effect */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent animate-pulse"></div>
        
        <div className="mx-auto max-w-7xl px-4 flex flex-col md:flex-row items-center justify-between gap-6 text-sm relative z-10">
          <p className="text-red-300 font-mono tracking-wider">© {year} AI SOLUTIONS — AGENCIA DE AUTOMATIZACIÓN CON INTELIGENCIA ARTIFICIAL</p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-red-400 hover:text-red-300 transition-colors duration-300 font-mono tracking-wider hover:scale-105">LINKEDIN</a>
            <a href="#" className="text-red-400 hover:text-red-300 transition-colors duration-300 font-mono tracking-wider hover:scale-105">INSTAGRAM</a>
            <a href="#" className="text-red-400 hover:text-red-300 transition-colors duration-300 font-mono tracking-wider hover:scale-105">GITHUB</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

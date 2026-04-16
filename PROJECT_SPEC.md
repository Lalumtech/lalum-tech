# PROJECT_SPEC.md — LaLum Tech

> Fonte de verdade visual. Gerado pelo Orquestrador. Nunca editar o CLAUDE.md.

---

## Análise da Referência (swiftrooter.framer.website)

### Layout e Estrutura extraídos da referência
- Navbar: logo à esquerda, links centralizados, CTA pill button à direita
- Hero: headline bold centralizado, subtítulo, prova social (número + label), imagem de fundo full-width
- Seção de formulário/conversão logo abaixo do hero (adaptar para CTA WhatsApp)
- Seção "Por que escolher" com grid de cards com ícone + título + texto
- Seção steps/processo numerados e centralizados
- Seção de contato com formulário
- Footer multi-coluna: logo, links de nav, endereços, contato

### Adaptação para LaLum Tech
O estilo do layout é seguido (estrutura, proporções, hierarquia), mas:
- **Dark mode** total — backgrounds escuros, tipografia clara
- Paleta **premium tech** com acentos dourados e azul elétrico
- Posicionamento **luxo + tecnologia** — nunca genérico ou corporativo

---

## Paleta de Cores

```css
--color-bg:           #080808;   /* fundo principal */
--color-surface:      #0F0F0F;   /* superfícies elevadas */
--color-surface-2:    #161616;   /* cards, painéis */
--color-surface-3:    #1E1E1E;   /* hover states, bordas */
--color-border:       rgba(255, 255, 255, 0.07);
--color-border-light: rgba(255, 255, 255, 0.12);

--color-gold:         #C8A96E;   /* acento dourado principal */
--color-gold-light:   #E2C88B;   /* gold mais claro (hover, destaque) */
--color-gold-dim:     rgba(200, 169, 110, 0.15); /* gold translúcido */

--color-blue:         #3B9EFF;   /* azul elétrico (links, interativos) */
--color-blue-dim:     rgba(59, 158, 255, 0.12);

--color-text-primary:   #F0EDE8; /* texto principal — branco quente */
--color-text-secondary: #8A8780; /* texto secundário */
--color-text-muted:     #555550; /* texto terciário */

--color-white: #FFFFFF;
--color-black: #000000;
```

---

## Tipografia

### Fontes (Google Fonts — NUNCA Inter/Roboto/Arial)
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Outfit:wght@300;400;500;600&display=swap" rel="stylesheet">
```

```css
--font-display: 'Syne', sans-serif;   /* headings — geométrica, premium, única */
--font-body:    'Outfit', sans-serif; /* body — elegante, limpa */
```

### Escala Tipográfica
```css
--text-xs:   0.75rem;    /* 12px — labels, badges */
--text-sm:   0.875rem;   /* 14px — small body */
--text-base: 1rem;       /* 16px — body padrão */
--text-lg:   1.125rem;   /* 18px — body grande */
--text-xl:   1.25rem;    /* 20px — subtítulos */
--text-2xl:  1.5rem;     /* 24px */
--text-3xl:  1.875rem;   /* 30px */
--text-4xl:  2.25rem;    /* 36px */
--text-5xl:  3rem;       /* 48px */
--text-6xl:  3.75rem;    /* 60px */
--text-7xl:  4.5rem;     /* 72px — hero headline desktop */
--text-8xl:  6rem;       /* 96px — statement headline */
```

### Pesos e estilos
- Heading principal: `font-family: var(--font-display); font-weight: 800; letter-spacing: -0.03em;`
- Heading seção: `font-family: var(--font-display); font-weight: 700; letter-spacing: -0.02em;`
- Body padrão: `font-family: var(--font-body); font-weight: 400; line-height: 1.6;`
- Labels/badges: `font-family: var(--font-display); font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase;`

---

## Espaçamentos e Grid

```css
--spacing-xs:  0.5rem;   /* 8px */
--spacing-sm:  1rem;     /* 16px */
--spacing-md:  1.5rem;   /* 24px */
--spacing-lg:  2rem;     /* 32px */
--spacing-xl:  3rem;     /* 48px */
--spacing-2xl: 4rem;     /* 64px */
--spacing-3xl: 6rem;     /* 96px */
--spacing-4xl: 8rem;     /* 128px */

--container-max: 1280px;
--container-padding: clamp(1.5rem, 5vw, 5rem);
--section-padding: clamp(5rem, 10vw, 10rem) 0;
```

### Breakpoints
```css
--bp-sm:  640px;
--bp-md:  768px;
--bp-lg:  1024px;
--bp-xl:  1280px;
--bp-2xl: 1536px;
```

---

## Bordas e Raios

```css
--radius-sm:   6px;
--radius-md:   12px;
--radius-lg:   20px;
--radius-xl:   32px;
--radius-full:  9999px;
```

---

## Sombras e Efeitos

```css
--shadow-sm:  0 1px 3px rgba(0,0,0,0.4);
--shadow-md:  0 4px 16px rgba(0,0,0,0.5);
--shadow-lg:  0 8px 32px rgba(0,0,0,0.6);
--shadow-gold: 0 0 40px rgba(200,169,110,0.2);
--shadow-blue: 0 0 40px rgba(59,158,255,0.2);

/* Glow de destaque em cards/botões */
--glow-gold: 0 0 20px rgba(200,169,110,0.3), 0 0 60px rgba(200,169,110,0.1);
--glow-blue: 0 0 20px rgba(59,158,255,0.3), 0 0 60px rgba(59,158,255,0.1);
```

---

## Componentes — Botões

### Botão Primário (CTA principal)
```css
/* Fundo dourado, texto escuro, pill shape */
background: var(--color-gold);
color: #080808;
font-family: var(--font-display);
font-weight: 700;
padding: 0.875rem 2rem;
border-radius: var(--radius-full);
letter-spacing: 0.02em;
transition: all 0.3s ease;
/* hover: */
background: var(--color-gold-light);
box-shadow: var(--glow-gold);
transform: translateY(-2px);
```

### Botão Secundário
```css
/* Outline, texto claro */
background: transparent;
color: var(--color-text-primary);
border: 1px solid var(--color-border-light);
padding: 0.875rem 2rem;
border-radius: var(--radius-full);
/* hover: */
border-color: var(--color-gold);
color: var(--color-gold);
```

### Botão WhatsApp (flutuante)
```css
/* Verde WhatsApp, ícone, pill */
background: #25D366;
color: white;
border-radius: var(--radius-full);
width: 60px; height: 60px;
position: fixed; bottom: 2rem; right: 2rem;
box-shadow: 0 4px 20px rgba(37,211,102,0.4);
```

---

## Cards de Serviço

```css
/* Fundo superfície, borda sutil, hover com glow */
background: var(--color-surface-2);
border: 1px solid var(--color-border);
border-radius: var(--radius-lg);
padding: 2rem;
/* hover: */
border-color: rgba(200,169,110,0.3);
box-shadow: var(--shadow-gold);
transform: translateY(-4px);
```

---

## Estrutura de Seções

### 1. Navbar
- Logo "LaLum Tech" em Syne 700, acento dourado no "Lum"
- Links: Serviços, Projetos, Diferenciais, Contato
- CTA pill: "Solicitar Orçamento" (dourado)
- Sticky: after scroll → `background: rgba(8,8,8,0.95); backdrop-filter: blur(12px);`

### 2. Hero
- Badge label acima do headline: "AUTOMAÇÃO RESIDENCIAL PREMIUM"
- Headline: "Sua casa mais inteligente. Sua vida mais simples."
- Subtítulo do briefing
- Dois CTAs: primário (dourado, WhatsApp) + secundário (outline)
- Prova social: "+50 projetos entregues • Caxias do Sul · Farroupilha · Nova Pádua"
- Imagem hero: foto de interior de alto padrão (placeholder Unsplash)
- Fundo: near-black com grain texture sutil

### 3. Serviços (7 cards)
- Grid 3 colunas desktop / 2 tablet / 1 mobile
- Cada card: ícone SVG em dourado, título, descrição, "A partir de consulta"
- Hover: border dourada + glow sutil

### 4. Sobre / Diferenciais
- Headline seção + lista visual de diferenciais com checkmarks dourados
- Menção às obras: Aggius, Porto Venere, Soho
- Layout 2 colunas: texto + imagem

### 5. Stats / Números
- Linha com 4 stats: "2+ anos" / "+50 projetos" / "3 cidades" / "+200 sistemas"
- Fundo surface-2, borda top dourada

### 6. Depoimentos
- 3 cards com avatar placeholder, nome, função, texto do depoimento
- Layout horizontal scroll ou grid 3 colunas

### 7. FAQ
- 6-8 perguntas com accordion
- Border-bottom em cada item, seta animada

### 8. Instagram Grid
- 6 placeholders (aspect-ratio 1:1) com hover overlay e ícone Instagram
- Título: "@lalumtech"

### 9. CTA Final
- Faixa escura com headline + botão WhatsApp
- Fundo: gradient do surface para near-black

### 10. Footer
- Logo, links, redes sociais, cidades, horário
- Copyright

---

## Animações Obrigatórias

```css
/* Scroll Reveal */
.reveal { opacity: 0; transform: translateY(30px); transition: opacity 0.7s ease, transform 0.7s ease; }
.reveal.visible { opacity: 1; transform: translateY(0); }

/* Stagger delay para grids */
.reveal:nth-child(2) { transition-delay: 0.1s; }
.reveal:nth-child(3) { transition-delay: 0.2s; }
/* ... */

/* Fade in (entrance) */
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(40px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* Grain texture (pseudo-element no body) */
body::before {
  content: '';
  position: fixed; inset: 0;
  background-image: url("data:image/svg+xml,..."); /* noise SVG */
  opacity: 0.03;
  pointer-events: none;
  z-index: 9999;
}
```

---

## Arquivos CSS por Seção

```
src/css/main.css        → variáveis, reset, base, tipografia, utilitários, animações
src/css/navbar.css      → header, nav, menu mobile
src/css/hero.css        → seção hero
src/css/services.css    → grid de serviços
src/css/about.css       → sobre e diferenciais
src/css/stats.css       → números e stats
src/css/testimonials.css → depoimentos
src/css/faq.css         → accordion FAQ
src/css/instagram.css   → grid instagram
src/css/cta.css         → faixa CTA final
src/css/footer.css      → rodapé
```

---

## Assets Placeholder (Unsplash — sem chave de API)

Usar URLs do Unsplash com tema de automação residencial / interiores premium:
```
https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80  → smart home interior
https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1920&q=80 → luxury living room
https://images.unsplash.com/photo-1554995207-c18c203602cb?w=1200&q=80  → modern interior
https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80   → automation panel
https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80 → modern lighting
https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80 → premium home
```

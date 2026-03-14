---
name: typography
description: 73 font pairings with Google Fonts URLs, CSS imports, Tailwind config, and mood keywords
---

# Typography Reference

73 curated font pairings organized by category, each with Google Fonts URLs, CSS imports, Tailwind configuration, and mood keywords for searchability.

## Categories

- [Serif + Sans](#serif-sans) (13 pairings)
- [Sans + Sans](#sans-sans) (25 pairings)
- [Serif + Serif](#serif-serif) (2 pairings)
- [Display + Sans](#display-sans) (10 pairings)
- [Mono + Sans](#mono-sans) (2 pairings)
- [Display + Serif](#display-serif) (1 pairings)
- [Script + Sans](#script-sans) (1 pairings)
- [Mono + Mono](#mono-mono) (2 pairings)
- [Script + Serif](#script-serif) (1 pairings)
- [Display + Mono](#display-mono) (1 pairings)
- [Serif + Serif + Mono (Triple Stack)](#serif-serif-mono-triple-stack) (1 pairings)
- [Sans + Mono](#sans-mono) (1 pairings)
- [Display Serif + Sans + Mono](#display-serif-sans-mono) (1 pairings)
- [Mono + Mono (Single Family)](#mono-mono-single-family) (1 pairings)
- [Geometric Sans (Single Dominant)](#geometric-sans-single-dominant) (1 pairings)
- [Sans (System Default)](#sans-system-default) (1 pairings)
- [Geometric Sans (Bold-Only)](#geometric-sans-bold-only) (1 pairings)
- [Sans + Serif (Display) + Mono](#sans-serif-display-mono) (1 pairings)
- [Serif + Book Serif + Engraved (Triple Stack)](#serif-book-serif-engraved-triple-stack) (1 pairings)
- [Tech Display + Mono](#tech-display-mono) (1 pairings)
- [Geometric Sans + Sans + Mono (Triple)](#geometric-sans-sans-mono-triple) (1 pairings)
- [Display Rounded + Geometric Sans](#display-rounded-geometric-sans) (1 pairings)
- [Geometric Sans (Single Family)](#geometric-sans-single-family) (1 pairings)
- [Handwritten + Handwritten (Dual)](#handwritten-handwritten-dual) (1 pairings)
- [Geometric Sans (System Fallback)](#geometric-sans-system-fallback) (1 pairings)

---

## Serif + Sans

### 1. Classic Elegant

- **Heading Font**: Playfair Display
- **Body Font**: Inter
- **Category**: Serif + Sans
- **Mood/Keywords**: elegant, luxury, sophisticated, timeless, premium, editorial
- **Best For**: Luxury brands, fashion, spa, beauty, editorial, magazines, high-end e-commerce
- **Google Fonts URL**: https://fonts.google.com/share?selection.family=Inter:wght@300;400;500;600;700|Playfair+Display:wght@400;500;600;700
- **CSS Import**:
  ```css
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap');
  ```
- **Tailwind Config**:
  ```js
  fontFamily: { serif: ['Playfair Display', 'serif'], sans: ['Inter', 'sans-serif'] }
  ```
- **Notes**: High contrast between elegant heading and clean body. Perfect for luxury/premium.

---

### 8. Wellness Calm

- **Heading Font**: Lora
- **Body Font**: Raleway
- **Category**: Serif + Sans
- **Mood/Keywords**: calm, wellness, health, relaxing, natural, organic
- **Best For**: Health apps, wellness, spa, meditation, yoga, organic brands
- **Google Fonts URL**: https://fonts.google.com/share?selection.family=Lora:wght@400;500;600;700|Raleway:wght@300;400;500;600;700
- **CSS Import**:
  ```css
  @import url('https://fonts.googleapis.com/css2?family=Lora:wght@400;500;600;700&family=Raleway:wght@300;400;500;600;700&display=swap');
  ```
- **Tailwind Config**:
  ```js
  fontFamily: { serif: ['Lora', 'serif'], sans: ['Raleway', 'sans-serif'] }
  ```
- **Notes**: Lora's organic curves with Raleway's elegant simplicity.

---

### 12. Luxury Serif

- **Heading Font**: Cormorant
- **Body Font**: Montserrat
- **Category**: Serif + Sans
- **Mood/Keywords**: luxury, high-end, fashion, elegant, refined, premium
- **Best For**: Fashion brands, luxury e-commerce, jewelry, high-end services
- **Google Fonts URL**: https://fonts.google.com/share?selection.family=Cormorant:wght@400;500;600;700|Montserrat:wght@300;400;500;600;700
- **CSS Import**:
  ```css
  @import url('https://fonts.googleapis.com/css2?family=Cormorant:wght@400;500;600;700&family=Montserrat:wght@300;400;500;600;700&display=swap');
  ```
- **Tailwind Config**:
  ```js
  fontFamily: { serif: ['Cormorant', 'serif'], sans: ['Montserrat', 'sans-serif'] }
  ```
- **Notes**: Cormorant's elegance with Montserrat's geometric precision.

---

### 14. News Editorial

- **Heading Font**: Newsreader
- **Body Font**: Roboto
- **Category**: Serif + Sans
- **Mood/Keywords**: news, editorial, journalism, trustworthy, readable, informative
- **Best For**: News sites, blogs, magazines, journalism, content-heavy sites
- **Google Fonts URL**: https://fonts.google.com/share?selection.family=Newsreader:wght@400;500;600;700|Roboto:wght@300;400;500;700
- **CSS Import**:
  ```css
  @import url('https://fonts.googleapis.com/css2?family=Newsreader:wght@400;500;600;700&family=Roboto:wght@300;400;500;700&display=swap');
  ```
- **Tailwind Config**:
  ```js
  fontFamily: { serif: ['Newsreader', 'serif'], sans: ['Roboto', 'sans-serif'] }
  ```
- **Notes**: Newsreader designed for long-form reading. Roboto for UI.

---

### 22. Japanese Elegant

- **Heading Font**: Noto Serif JP
- **Body Font**: Noto Sans JP
- **Category**: Serif + Sans
- **Mood/Keywords**: japanese, elegant, traditional, modern, multilingual, readable
- **Best For**: Japanese sites, Japanese restaurants, cultural sites, anime/manga
- **Google Fonts URL**: https://fonts.google.com/share?selection.family=Noto+Sans+JP:wght@300;400;500;700|Noto+Serif+JP:wght@400;500;600;700
- **CSS Import**:
  ```css
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700&family=Noto+Serif+JP:wght@400;500;600;700&display=swap');
  ```
- **Tailwind Config**:
  ```js
  fontFamily: { serif: ['Noto Serif JP', 'serif'], sans: ['Noto Sans JP', 'sans-serif'] }
  ```
- **Notes**: Noto fonts excellent Japanese support. Traditional + modern feel.

---

### 24. Chinese Traditional

- **Heading Font**: Noto Serif TC
- **Body Font**: Noto Sans TC
- **Category**: Serif + Sans
- **Mood/Keywords**: chinese, traditional, elegant, cultural, multilingual, readable
- **Best For**: Traditional Chinese sites, cultural content, Taiwan/Hong Kong markets
- **Google Fonts URL**: https://fonts.google.com/share?selection.family=Noto+Sans+TC:wght@300;400;500;700|Noto+Serif+TC:wght@400;500;600;700
- **CSS Import**:
  ```css
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300;400;500;700&family=Noto+Serif+TC:wght@400;500;600;700&display=swap');
  ```
- **Tailwind Config**:
  ```js
  fontFamily: { serif: ['Noto Serif TC', 'serif'], sans: ['Noto Sans TC', 'sans-serif'] }
  ```
- **Notes**: Traditional Chinese character support. Elegant pairing.

---

### 26. Arabic Elegant

- **Heading Font**: Noto Naskh Arabic
- **Body Font**: Noto Sans Arabic
- **Category**: Serif + Sans
- **Mood/Keywords**: arabic, elegant, traditional, cultural, RTL, readable
- **Best For**: Arabic sites, Middle East market, Islamic content, bilingual sites
- **Google Fonts URL**: https://fonts.google.com/share?selection.family=Noto+Naskh+Arabic:wght@400;500;600;700|Noto+Sans+Arabic:wght@300;400;500;700
- **CSS Import**:
  ```css
  @import url('https://fonts.googleapis.com/css2?family=Noto+Naskh+Arabic:wght@400;500;600;700&family=Noto+Sans+Arabic:wght@300;400;500;700&display=swap');
  ```
- **Tailwind Config**:
  ```js
  fontFamily: { serif: ['Noto Naskh Arabic', 'serif'], sans: ['Noto Sans Arabic', 'sans-serif'] }
  ```
- **Notes**: RTL support. Naskh for traditional, Sans for modern Arabic.

---

### 29. Legal Professional

- **Heading Font**: EB Garamond
- **Body Font**: Lato
- **Category**: Serif + Sans
- **Mood/Keywords**: legal, professional, traditional, trustworthy, formal, authoritative
- **Best For**: Law firms, legal services, contracts, formal documents, government
- **Google Fonts URL**: https://fonts.google.com/share?selection.family=EB+Garamond:wght@400;500;600;700|Lato:wght@300;400;700
- **CSS Import**:
  ```css
  @import url('https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;500;600;700&family=Lato:wght@300;400;700&display=swap');
  ```
- **Tailwind Config**:
  ```js
  fontFamily: { serif: ['EB Garamond', 'serif'], sans: ['Lato', 'sans-serif'] }
  ```
- **Notes**: EB Garamond for authority. Lato for clean body text.

---

### 32. Real Estate Luxury

- **Heading Font**: Cinzel
- **Body Font**: Josefin Sans
- **Category**: Serif + Sans
- **Mood/Keywords**: real estate, luxury, elegant, sophisticated, property, premium
- **Best For**: Real estate, luxury properties, architecture, interior design
- **Google Fonts URL**: https://fonts.google.com/share?selection.family=Cinzel:wght@400;500;600;700|Josefin+Sans:wght@300;400;500;600;700
- **CSS Import**:
  ```css
  @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Josefin+Sans:wght@300;400;500;600;700&display=swap');
  ```
- **Tailwind Config**:
  ```js
  fontFamily: { serif: ['Cinzel', 'serif'], sans: ['Josefin Sans', 'sans-serif'] }
  ```
- **Notes**: Cinzel's elegance for headlines. Josefin for modern body.

---

### 33. Restaurant Menu

- **Heading Font**: Playfair Display SC
- **Body Font**: Karla
- **Category**: Serif + Sans
- **Mood/Keywords**: restaurant, menu, culinary, elegant, foodie, hospitality
- **Best For**: Restaurants, cafes, food blogs, culinary, hospitality
- **Google Fonts URL**: https://fonts.google.com/share?selection.family=Karla:wght@300;400;500;600;700|Playfair+Display+SC:wght@400;700
- **CSS Import**:
  ```css
  @import url('https://fonts.googleapis.com/css2?family=Karla:wght@300;400;500;600;700&family=Playfair+Display+SC:wght@400;700&display=swap');
  ```
- **Tailwind Config**:
  ```js
  fontFamily: { display: ['Playfair Display SC', 'serif'], sans: ['Karla', 'sans-serif'] }
  ```
- **Notes**: Small caps Playfair for menu headers. Karla for descriptions.

---

### 35. Magazine Style

- **Heading Font**: Libre Bodoni
- **Body Font**: Public Sans
- **Category**: Serif + Sans
- **Mood/Keywords**: magazine, editorial, publishing, refined, journalism, print
- **Best For**: Magazines, online publications, editorial content, journalism
- **Google Fonts URL**: https://fonts.google.com/share?selection.family=Libre+Bodoni:wght@400;500;600;700|Public+Sans:wght@300;400;500;600;700
- **CSS Import**:
  ```css
  @import url('https://fonts.googleapis.com/css2?family=Libre+Bodoni:wght@400;500;600;700&family=Public+Sans:wght@300;400;500;600;700&display=swap');
  ```
- **Tailwind Config**:
  ```js
  fontFamily: { serif: ['Libre Bodoni', 'serif'], sans: ['Public Sans', 'sans-serif'] }
  ```
- **Notes**: Bodoni's editorial elegance. Public Sans for clean UI.

---

### 41. Academic/Research

- **Heading Font**: Crimson Pro
- **Body Font**: Atkinson Hyperlegible
- **Category**: Serif + Sans
- **Mood/Keywords**: academic, research, scholarly, accessible, readable, educational
- **Best For**: Universities, research papers, academic journals, educational
- **Google Fonts URL**: https://fonts.google.com/share?selection.family=Atkinson+Hyperlegible:wght@400;700|Crimson+Pro:wght@400;500;600;700
- **CSS Import**:
  ```css
  @import url('https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:wght@400;700&family=Crimson+Pro:wght@400;500;600;700&display=swap');
  ```
- **Tailwind Config**:
  ```js
  fontFamily: { serif: ['Crimson Pro', 'serif'], sans: ['Atkinson Hyperlegible', 'sans-serif'] }
  ```
- **Notes**: Crimson for scholarly headlines. Atkinson for accessibility.

---

### 50. Luxury Minimalist

- **Heading Font**: Bodoni Moda
- **Body Font**: Jost
- **Category**: Serif + Sans
- **Mood/Keywords**: luxury, minimalist, high-end, sophisticated, refined, premium
- **Best For**: Luxury minimalist brands, high-end fashion, premium products
- **Google Fonts URL**: https://fonts.google.com/share?selection.family=Bodoni+Moda:wght@400;500;600;700|Jost:wght@300;400;500;600;700
- **CSS Import**:
  ```css
  @import url('https://fonts.googleapis.com/css2?family=Bodoni+Moda:wght@400;500;600;700&family=Jost:wght@300;400;500;600;700&display=swap');
  ```
- **Tailwind Config**:
  ```js
  fontFamily: { serif: ['Bodoni Moda', 'serif'], sans: ['Jost', 'sans-serif'] }
  ```
- **Notes**: Bodoni's high contrast elegance. Jost for geometric body.

---

## Sans + Sans

### 2. Modern Professional

- **Heading Font**: Poppins
- **Body Font**: Open Sans
- **Category**: Sans + Sans
- **Mood/Keywords**: modern, professional, clean, corporate, friendly, approachable
- **Best For**: SaaS, corporate sites, business apps, startups, professional services
- **Google Fonts URL**: https://fonts.google.com/share?selection.family=Open+Sans:wght@300;400;500;600;700|Poppins:wght@400;500;600;700
- **CSS Import**:
  ```css
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&family=Poppins:wght@400;500;600;700&display=swap');
  ```
- **Tailwind Config**:
  ```js
  fontFamily: { heading: ['Poppins', 'sans-serif'], body: ['Open Sans', 'sans-serif'] }
  ```
- **Notes**: Geometric Poppins for headings, humanist Open Sans for readability.

---

### 3. Tech Startup

- **Heading Font**: Space Grotesk
- **Body Font**: DM Sans
- **Category**: Sans + Sans
- **Mood/Keywords**: tech, startup, modern, innovative, bold, futuristic
- **Best For**: Tech companies, startups, SaaS, developer tools, AI products
- **Google Fonts URL**: https://fonts.google.com/share?selection.family=DM+Sans:wght@400;500;700|Space+Grotesk:wght@400;500;600;700
- **CSS Import**:
  ```css
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Space+Grotesk:wght@400;500;600;700&display=swap');
  ```
- **Tailwind Config**:
  ```js
  fontFamily: { heading: ['Space Grotesk', 'sans-serif'], body: ['DM Sans', 'sans-serif'] }
  ```
- **Notes**: Space Grotesk has unique character, DM Sans is highly readable.

---

### 5. Minimal Swiss

- **Heading Font**: Inter
- **Body Font**: Inter
- **Category**: Sans + Sans
- **Mood/Keywords**: minimal, clean, swiss, functional, neutral, professional
- **Best For**: Dashboards, admin panels, documentation, enterprise apps, design systems
- **Google Fonts URL**: https://fonts.google.com/share?selection.family=Inter:wght@300;400;500;600;700
- **CSS Import**:
  ```css
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
  ```
- **Tailwind Config**:
  ```js
  fontFamily: { sans: ['Inter', 'sans-serif'] }
  ```
- **Notes**: Single font family with weight variations. Ultimate simplicity.

---

### 11. Geometric Modern

- **Heading Font**: Outfit
- **Body Font**: Work Sans
- **Category**: Sans + Sans
- **Mood/Keywords**: geometric, modern, clean, balanced, contemporary, versatile
- **Best For**: General purpose, portfolios, agencies, modern brands, landing pages
- **Google Fonts URL**: https://fonts.google.com/share?selection.family=Outfit:wght@300;400;500;600;700|Work+Sans:wght@300;400;500;600;700
- **CSS Import**:
  ```css
  @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=Work+Sans:wght@300;400;500;600;700&display=swap');
  ```
- **Tailwind Config**:
  ```js
  fontFamily: { heading: ['Outfit', 'sans-serif'], body: ['Work Sans', 'sans-serif'] }
  ```
- **Notes**: Both geometric but Outfit more distinctive for headings.

---

### 13. Friendly SaaS

- **Heading Font**: Plus Jakarta Sans
- **Body Font**: Plus Jakarta Sans
- **Category**: Sans + Sans
- **Mood/Keywords**: friendly, modern, saas, clean, approachable, professional
- **Best For**: SaaS products, web apps, dashboards, B2B, productivity tools
- **Google Fonts URL**: https://fonts.google.com/share?selection.family=Plus+Jakarta+Sans:wght@300;400;500;600;700
- **CSS Import**:
  ```css
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap');
  ```
- **Tailwind Config**:
  ```js
  fontFamily: { sans: ['Plus Jakarta Sans', 'sans-serif'] }
  ```
- **Notes**: Single versatile font. Modern alternative to Inter.

---

### 16. Corporate Trust

- **Heading Font**: Lexend
- **Body Font**: Source Sans 3
- **Category**: Sans + Sans
- **Mood/Keywords**: corporate, trustworthy, accessible, readable, professional, clean
- **Best For**: Enterprise, government, healthcare, finance, accessibility-focused
- **Google Fonts URL**: https://fonts.google.com/share?selection.family=Lexend:wght@300;400;500;600;700|Source+Sans+3:wght@300;400;500;600;700
- **CSS Import**:
  ```css
  @import url('https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;500;600;700&family=Source+Sans+3:wght@300;400;500;600;700&display=swap');
  ```
- **Tailwind Config**:
  ```js
  fontFamily: { heading: ['Lexend', 'sans-serif'], body: ['Source Sans 3', 'sans-serif'] }
  ```
- **Notes**: Lexend designed for readability. Excellent accessibility.

---

### 18. Fashion Forward

- **Heading Font**: Syne
- **Body Font**: Manrope
- **Category**: Sans + Sans
- **Mood/Keywords**: fashion, avant-garde, creative, bold, artistic, edgy
- **Best For**: Fashion brands, creative agencies, art galleries, design studios
- **Google Fonts URL**: https://fonts.google.com/share?selection.family=Manrope:wght@300;400;500;600;700|Syne:wght@400;500;600;700
- **CSS Import**:
  ```css
  @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700&family=Syne:wght@400;500;600;700&display=swap');
  ```
- **Tailwind Config**:
  ```js
  fontFamily: { heading: ['Syne', 'sans-serif'], body: ['Manrope', 'sans-serif'] }
  ```
- **Notes**: Syne's unique character for headlines. Manrope for readability.

---

### 19. Soft Rounded

- **Heading Font**: Varela Round
- **Body Font**: Nunito Sans
- **Category**: Sans + Sans
- **Mood/Keywords**: soft, rounded, friendly, approachable, warm, gentle
- **Best For**: Children's products, pet apps, friendly brands, wellness, soft UI
- **Google Fonts URL**: https://fonts.google.com/share?selection.family=Nunito+Sans:wght@300;400;500;600;700|Varela+Round
- **CSS Import**:
  ```css
  @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;500;600;700&family=Varela+Round&display=swap');
  ```
- **Tailwind Config**:
  ```js
  fontFamily: { heading: ['Varela Round', 'sans-serif'], body: ['Nunito Sans', 'sans-serif'] }
  ```
- **Notes**: Both rounded and friendly. Perfect for soft UI designs.

---

### 20. Premium Sans

- **Heading Font**: Satoshi
- **Body Font**: General Sans
- **Category**: Sans + Sans
- **Mood/Keywords**: premium, modern, clean, sophisticated, versatile, balanced
- **Best For**: Premium brands, modern agencies, SaaS, portfolios, startups
- **Google Fonts URL**: https://fonts.google.com/share?selection.family=DM+Sans:wght@400;500;700
- **CSS Import**:
  ```css
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap');
  ```
- **Tailwind Config**:
  ```js
  fontFamily: { sans: ['DM Sans', 'sans-serif'] }
  ```
- **Notes**: Note: Satoshi/General Sans on Fontshare. DM Sans as Google alternative.

---

### 21. Vietnamese Friendly

- **Heading Font**: Be Vietnam Pro
- **Body Font**: Noto Sans
- **Category**: Sans + Sans
- **Mood/Keywords**: vietnamese, international, readable, clean, multilingual, accessible
- **Best For**: Vietnamese sites, multilingual apps, international products
- **Google Fonts URL**: https://fonts.google.com/share?selection.family=Be+Vietnam+Pro:wght@300;400;500;600;700|Noto+Sans:wght@300;400;500;600;700
- **CSS Import**:
  ```css
  @import url('https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@300;400;500;600;700&family=Noto+Sans:wght@300;400;500;600;700&display=swap');
  ```
- **Tailwind Config**:
  ```js
  fontFamily: { sans: ['Be Vietnam Pro', 'Noto Sans', 'sans-serif'] }
  ```
- **Notes**: Be Vietnam Pro excellent Vietnamese support. Noto as fallback.

---

### 23. Korean Modern

- **Heading Font**: Noto Sans KR
- **Body Font**: Noto Sans KR
- **Category**: Sans + Sans
- **Mood/Keywords**: korean, modern, clean, professional, multilingual, readable
- **Best For**: Korean sites, K-beauty, K-pop, Korean businesses, multilingual
- **Google Fonts URL**: https://fonts.google.com/share?selection.family=Noto+Sans+KR:wght@300;400;500;700
- **CSS Import**:
  ```css
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap');
  ```
- **Tailwind Config**:
  ```js
  fontFamily: { sans: ['Noto Sans KR', 'sans-serif'] }
  ```
- **Notes**: Clean Korean typography. Single font with weight variations.

---

### 25. Chinese Simplified

- **Heading Font**: Noto Sans SC
- **Body Font**: Noto Sans SC
- **Category**: Sans + Sans
- **Mood/Keywords**: chinese, simplified, modern, professional, multilingual, readable
- **Best For**: Simplified Chinese sites, mainland China market, business apps
- **Google Fonts URL**: https://fonts.google.com/share?selection.family=Noto+Sans+SC:wght@300;400;500;700
- **CSS Import**:
  ```css
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@300;400;500;700&display=swap');
  ```
- **Tailwind Config**:
  ```js
  fontFamily: { sans: ['Noto Sans SC', 'sans-serif'] }
  ```
- **Notes**: Simplified Chinese support. Clean modern look.

---

### 27. Thai Modern

- **Heading Font**: Noto Sans Thai
- **Body Font**: Noto Sans Thai
- **Category**: Sans + Sans
- **Mood/Keywords**: thai, modern, readable, clean, multilingual, accessible
- **Best For**: Thai sites, Southeast Asia, tourism, Thai restaurants
- **Google Fonts URL**: https://fonts.google.com/share?selection.family=Noto+Sans+Thai:wght@300;400;500;700
- **CSS Import**:
  ```css
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Thai:wght@300;400;500;700&display=swap');
  ```
- **Tailwind Config**:
  ```js
  fontFamily: { sans: ['Noto Sans Thai', 'sans-serif'] }
  ```
- **Notes**: Clean Thai typography. Excellent readability.

---

### 28. Hebrew Modern

- **Heading Font**: Noto Sans Hebrew
- **Body Font**: Noto Sans Hebrew
- **Category**: Sans + Sans
- **Mood/Keywords**: hebrew, modern, RTL, clean, professional, readable
- **Best For**: Hebrew sites, Israeli market, Jewish content, bilingual sites
- **Google Fonts URL**: https://fonts.google.com/share?selection.family=Noto+Sans+Hebrew:wght@300;400;500;700
- **CSS Import**:
  ```css
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Hebrew:wght@300;400;500;700&display=swap');
  ```
- **Tailwind Config**:
  ```js
  fontFamily: { sans: ['Noto Sans Hebrew', 'sans-serif'] }
  ```
- **Notes**: RTL support. Clean modern Hebrew typography.

---

### 30. Medical Clean

- **Heading Font**: Figtree
- **Body Font**: Noto Sans
- **Category**: Sans + Sans
- **Mood/Keywords**: medical, clean, accessible, professional, healthcare, trustworthy
- **Best For**: Healthcare, medical clinics, pharma, health apps, accessibility
- **Google Fonts URL**: https://fonts.google.com/share?selection.family=Figtree:wght@300;400;500;600;700|Noto+Sans:wght@300;400;500;700
- **CSS Import**:
  ```css
  @import url('https://fonts.googleapis.com/css2?family=Figtree:wght@300;400;500;600;700&family=Noto+Sans:wght@300;400;500;700&display=swap');
  ```
- **Tailwind Config**:
  ```js
  fontFamily: { heading: ['Figtree', 'sans-serif'], body: ['Noto Sans', 'sans-serif'] }
  ```
- **Notes**: Clean, accessible fonts for medical contexts.

---

### 31. Financial Trust

- **Heading Font**: IBM Plex Sans
- **Body Font**: IBM Plex Sans
- **Category**: Sans + Sans
- **Mood/Keywords**: financial, trustworthy, professional, corporate, banking, serious
- **Best For**: Banks, finance, insurance, investment, fintech, enterprise
- **Google Fonts URL**: https://fonts.google.com/share?selection.family=IBM+Plex+Sans:wght@300;400;500;600;700
- **CSS Import**:
  ```css
  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500;600;700&display=swap');
  ```
- **Tailwind Config**:
  ```js
  fontFamily: { sans: ['IBM Plex Sans', 'sans-serif'] }
  ```
- **Notes**: IBM Plex conveys trust and professionalism. Excellent for data.

---

### 36. Crypto/Web3

- **Heading Font**: Orbitron
- **Body Font**: Exo 2
- **Category**: Sans + Sans
- **Mood/Keywords**: crypto, web3, futuristic, tech, blockchain, digital
- **Best For**: Crypto platforms, NFT, blockchain, web3, futuristic tech
- **Google Fonts URL**: https://fonts.google.com/share?selection.family=Exo+2:wght@300;400;500;600;700|Orbitron:wght@400;500;600;700
- **CSS Import**:
  ```css
  @import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@300;400;500;600;700&family=Orbitron:wght@400;500;600;700&display=swap');
  ```
- **Tailwind Config**:
  ```js
  fontFamily: { display: ['Orbitron', 'sans-serif'], body: ['Exo 2', 'sans-serif'] }
  ```
- **Notes**: Orbitron for futuristic headers. Exo 2 for readable body.

---

### 39. Startup Bold

- **Heading Font**: Clash Display
- **Body Font**: Satoshi
- **Category**: Sans + Sans
- **Mood/Keywords**: startup, bold, modern, innovative, confident, dynamic
- **Best For**: Startups, pitch decks, product launches, bold brands
- **Google Fonts URL**: https://fonts.google.com/share?selection.family=Outfit:wght@400;500;600;700|Rubik:wght@300;400;500;600;700
- **CSS Import**:
  ```css
  @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&family=Rubik:wght@300;400;500;600;700&display=swap');
  ```
- **Tailwind Config**:
  ```js
  fontFamily: { heading: ['Outfit', 'sans-serif'], body: ['Rubik', 'sans-serif'] }
  ```
- **Notes**: Note: Clash Display on Fontshare. Outfit as Google alternative.

---

### 40. E-commerce Clean

- **Heading Font**: Rubik
- **Body Font**: Nunito Sans
- **Category**: Sans + Sans
- **Mood/Keywords**: ecommerce, clean, shopping, product, retail, conversion
- **Best For**: E-commerce, online stores, product pages, retail, shopping
- **Google Fonts URL**: https://fonts.google.com/share?selection.family=Nunito+Sans:wght@300;400;500;600;700|Rubik:wght@300;400;500;600;700
- **CSS Import**:
  ```css
  @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;500;600;700&family=Rubik:wght@300;400;500;600;700&display=swap');
  ```
- **Tailwind Config**:
  ```js
  fontFamily: { heading: ['Rubik', 'sans-serif'], body: ['Nunito Sans', 'sans-serif'] }
  ```
- **Notes**: Clean readable fonts perfect for product descriptions.

---

### 44. Minimalist Portfolio

- **Heading Font**: Archivo
- **Body Font**: Space Grotesk
- **Category**: Sans + Sans
- **Mood/Keywords**: minimal, portfolio, designer, creative, clean, artistic
- **Best For**: Design portfolios, creative professionals, minimalist brands
- **Google Fonts URL**: https://fonts.google.com/share?selection.family=Archivo:wght@300;400;500;600;700|Space+Grotesk:wght@300;400;500;600;700
- **CSS Import**:
  ```css
  @import url('https://fonts.googleapis.com/css2?family=Archivo:wght@300;400;500;600;700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
  ```
- **Tailwind Config**:
  ```js
  fontFamily: { heading: ['Space Grotesk', 'sans-serif'], body: ['Archivo', 'sans-serif'] }
  ```
- **Notes**: Space Grotesk for distinctive headers. Archivo for clean body.

---

### 47. Science/Tech

- **Heading Font**: Exo
- **Body Font**: Roboto Mono
- **Category**: Sans + Sans
- **Mood/Keywords**: science, technology, research, data, futuristic, precise
- **Best For**: Science, research, tech documentation, data-heavy sites
- **Google Fonts URL**: https://fonts.google.com/share?selection.family=Exo:wght@300;400;500;600;700|Roboto+Mono:wght@300;400;500;700
- **CSS Import**:
  ```css
  @import url('https://fonts.googleapis.com/css2?family=Exo:wght@300;400;500;600;700&family=Roboto+Mono:wght@300;400;500;700&display=swap');
  ```
- **Tailwind Config**:
  ```js
  fontFamily: { sans: ['Exo', 'sans-serif'], mono: ['Roboto Mono', 'monospace'] }
  ```
- **Notes**: Exo for modern tech feel. Roboto Mono for code/data.

---

### 48. Accessibility First

- **Heading Font**: Atkinson Hyperlegible
- **Body Font**: Atkinson Hyperlegible
- **Category**: Sans + Sans
- **Mood/Keywords**: accessible, readable, inclusive, WCAG, dyslexia-friendly, clear
- **Best For**: Accessibility-critical sites, government, healthcare, inclusive design
- **Google Fonts URL**: https://fonts.google.com/share?selection.family=Atkinson+Hyperlegible:wght@400;700
- **CSS Import**:
  ```css
  @import url('https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:wght@400;700&display=swap');
  ```
- **Tailwind Config**:
  ```js
  fontFamily: { sans: ['Atkinson Hyperlegible', 'sans-serif'] }
  ```
- **Notes**: Designed for maximum legibility. Excellent for accessibility.

---

### 49. Sports/Fitness

- **Heading Font**: Barlow Condensed
- **Body Font**: Barlow
- **Category**: Sans + Sans
- **Mood/Keywords**: sports, fitness, athletic, energetic, condensed, action
- **Best For**: Sports, fitness, gyms, athletic brands, competition
- **Google Fonts URL**: https://fonts.google.com/share?selection.family=Barlow+Condensed:wght@400;500;600;700|Barlow:wght@300;400;500;600;700
- **CSS Import**:
  ```css
  @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;500;600;700&family=Barlow:wght@300;400;500;600;700&display=swap');
  ```
- **Tailwind Config**:
  ```js
  fontFamily: { display: ['Barlow Condensed', 'sans-serif'], body: ['Barlow', 'sans-serif'] }
  ```
- **Notes**: Condensed for impact headlines. Regular Barlow for body.

---

### 55. Spatial Clear

- **Heading Font**: Inter
- **Body Font**: Inter
- **Category**: Sans + Sans
- **Mood/Keywords**: spatial, legible, glass, system, clean, neutral
- **Best For**: Spatial computing, AR/VR, glassmorphism interfaces
- **Google Fonts URL**: https://fonts.google.com/share?selection.family=Inter:wght@300;400;500;600
- **CSS Import**:
  ```css
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap');
  ```
- **Tailwind Config**:
  ```js
  fontFamily: { sans: ['Inter', 'sans-serif'] }
  ```
- **Notes**: Optimized for readability on dynamic backgrounds.

---

### 63. Flat Design Mobile (System Bold)

- **Heading Font**: Inter
- **Body Font**: Inter
- **Category**: Sans + Sans
- **Mood/Keywords**: flat, clean, system, bold, geometric, cross-platform, icon, poster, minimal, functional, responsive
- **Best For**: Cross-platform apps, dashboards, system UI, onboarding, marketing pages, informational apps, icon-heavy interfaces
- **Google Fonts URL**: https://fonts.google.com/share?selection.family=Inter:wght@400;600;700;800
- **CSS Import**:
  ```css
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap');
  ```
- **Tailwind Config**:
  ```js
  fontFamily: { sans: ['Inter', 'sans-serif'] }
  ```
- **Notes**: System-first strategy: Inter as primary, falls back to system SF/Roboto on iOS/Android. Scale: Headlines fontWeight 800 letterSpacing -0.5; Subheadings fontWeight 600 fontSize 18; Body fontWeight 400 lineHeight 24; Labels fontWeight 700 uppercase letterSpacing 1. Thick weights carry all hierarchy since there are no shadows. Use aggressive size contrast (poster rule: body 16pt vs headline 40pt+). Avoid italic.

---

## Serif + Serif

### 4. Editorial Classic

- **Heading Font**: Cormorant Garamond
- **Body Font**: Libre Baskerville
- **Category**: Serif + Serif
- **Mood/Keywords**: editorial, classic, literary, traditional, refined, bookish
- **Best For**: Publishing, blogs, news sites, literary magazines, book covers
- **Google Fonts URL**: https://fonts.google.com/share?selection.family=Cormorant+Garamond:wght@400;500;600;700|Libre+Baskerville:wght@400;700
- **CSS Import**:
  ```css
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Libre+Baskerville:wght@400;700&display=swap');
  ```
- **Tailwind Config**:
  ```js
  fontFamily: { heading: ['Cormorant Garamond', 'serif'], body: ['Libre Baskerville', 'serif'] }
  ```
- **Notes**: All-serif pairing for traditional editorial feel.

---

### 54. Academic/Archival

- **Heading Font**: EB Garamond
- **Body Font**: Crimson Text
- **Category**: Serif + Serif
- **Mood/Keywords**: academic, old-school, university, research, serious, traditional
- **Best For**: University sites, archives, research papers, history
- **Google Fonts URL**: https://fonts.google.com/share?selection.family=Crimson+Text:wght@400;600;700|EB+Garamond:wght@400;500;600;700;800
- **CSS Import**:
  ```css
  @import url('https://fonts.googleapis.com/css2?family=Crimson+Text:wght@400;600;700&family=EB+Garamond:wght@400;500;600;700;800&display=swap');
  ```
- **Tailwind Config**:
  ```js
  fontFamily: { classic: ['EB Garamond', 'serif'], text: ['Crimson Text', 'serif'] }
  ```
- **Notes**: Classic academic aesthetic. Very legible.

---

## Display + Sans

### 6. Playful Creative

- **Heading Font**: Fredoka
- **Body Font**: Nunito
- **Category**: Display + Sans
- **Mood/Keywords**: playful, friendly, fun, creative, warm, approachable
- **Best For**: Children's apps, educational, gaming, creative tools, entertainment
- **Google Fonts URL**: https://fonts.google.com/share?selection.family=Fredoka:wght@400;500;600;700|Nunito:wght@300;400;500;600;700
- **CSS Import**:
  ```css
  @import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&family=Nunito:wght@300;400;500;600;700&display=swap');
  ```
- **Tailwind Config**:
  ```js
  fontFamily: { heading: ['Fredoka', 'sans-serif'], body: ['Nunito', 'sans-serif'] }
  ```
- **Notes**: Rounded, friendly fonts perfect for playful UIs.

---

### 7. Bold Statement

- **Heading Font**: Bebas Neue
- **Body Font**: Source Sans 3
- **Category**: Display + Sans
- **Mood/Keywords**: bold, impactful, strong, dramatic, modern, headlines
- **Best For**: Marketing sites, portfolios, agencies, event pages, sports
- **Google Fonts URL**: https://fonts.google.com/share?selection.family=Bebas+Neue|Source+Sans+3:wght@300;400;500;600;700
- **CSS Import**:
  ```css
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Source+Sans+3:wght@300;400;500;600;700&display=swap');
  ```
- **Tailwind Config**:
  ```js
  fontFamily: { display: ['Bebas Neue', 'sans-serif'], body: ['Source Sans 3', 'sans-serif'] }
  ```
- **Notes**: Bebas Neue for large headlines only. All-caps display font.

---

### 34. Art Deco

- **Heading Font**: Poiret One
- **Body Font**: Didact Gothic
- **Category**: Display + Sans
- **Mood/Keywords**: art deco, vintage, 1920s, elegant, decorative, gatsby
- **Best For**: Vintage events, art deco themes, luxury hotels, classic cocktails
- **Google Fonts URL**: https://fonts.google.com/share?selection.family=Didact+Gothic|Poiret+One
- **CSS Import**:
  ```css
  @import url('https://fonts.googleapis.com/css2?family=Didact+Gothic&family=Poiret+One&display=swap');
  ```
- **Tailwind Config**:
  ```js
  fontFamily: { display: ['Poiret One', 'sans-serif'], sans: ['Didact Gothic', 'sans-serif'] }
  ```
- **Notes**: Poiret One for art deco headlines only. Didact for body.

---

### 37. Gaming Bold

- **Heading Font**: Russo One
- **Body Font**: Chakra Petch
- **Category**: Display + Sans
- **Mood/Keywords**: gaming, bold, action, esports, competitive, energetic
- **Best For**: Gaming, esports, action games, competitive sports, entertainment
- **Google Fonts URL**: https://fonts.google.com/share?selection.family=Chakra+Petch:wght@300;400;500;600;700|Russo+One
- **CSS Import**:
  ```css
  @import url('https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@300;400;500;600;700&family=Russo+One&display=swap');
  ```
- **Tailwind Config**:
  ```js
  fontFamily: { display: ['Russo One', 'sans-serif'], body: ['Chakra Petch', 'sans-serif'] }
  ```
- **Notes**: Russo One for impact. Chakra Petch for techy body text.

---

### 38. Indie/Craft

- **Heading Font**: Amatic SC
- **Body Font**: Cabin
- **Category**: Display + Sans
- **Mood/Keywords**: indie, craft, handmade, artisan, organic, creative
- **Best For**: Craft brands, indie products, artisan, handmade, organic products
- **Google Fonts URL**: https://fonts.google.com/share?selection.family=Amatic+SC:wght@400;700|Cabin:wght@400;500;600;700
- **CSS Import**:
  ```css
  @import url('https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&family=Cabin:wght@400;500;600;700&display=swap');
  ```
- **Tailwind Config**:
  ```js
  fontFamily: { display: ['Amatic SC', 'sans-serif'], sans: ['Cabin', 'sans-serif'] }
  ```
- **Notes**: Amatic for handwritten feel. Cabin for readable body.

---

### 43. Music/Entertainment

- **Heading Font**: Righteous
- **Body Font**: Poppins
- **Category**: Display + Sans
- **Mood/Keywords**: music, entertainment, fun, energetic, bold, performance
- **Best For**: Music platforms, entertainment, events, festivals, performers
- **Google Fonts URL**: https://fonts.google.com/share?selection.family=Poppins:wght@300;400;500;600;700|Righteous
- **CSS Import**:
  ```css
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Righteous&display=swap');
  ```
- **Tailwind Config**:
  ```js
  fontFamily: { display: ['Righteous', 'sans-serif'], sans: ['Poppins', 'sans-serif'] }
  ```
- **Notes**: Righteous for bold entertainment headers. Poppins for body.

---

### 45. Kids/Education

- **Heading Font**: Baloo 2
- **Body Font**: Comic Neue
- **Category**: Display + Sans
- **Mood/Keywords**: kids, education, playful, friendly, colorful, learning
- **Best For**: Children's apps, educational games, kid-friendly content
- **Google Fonts URL**: https://fonts.google.com/share?selection.family=Baloo+2:wght@400;500;600;700|Comic+Neue:wght@300;400;700
- **CSS Import**:
  ```css
  @import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;500;600;700&family=Comic+Neue:wght@300;400;700&display=swap');
  ```
- **Tailwind Config**:
  ```js
  fontFamily: { display: ['Baloo 2', 'sans-serif'], sans: ['Comic Neue', 'sans-serif'] }
  ```
- **Notes**: Fun, playful fonts for children. Comic Neue is readable comic style.

---

### 52. Pixel Retro

- **Heading Font**: Press Start 2P
- **Body Font**: VT323
- **Category**: Display + Sans
- **Mood/Keywords**: pixel, retro, gaming, 8-bit, nostalgic, arcade
- **Best For**: Pixel art games, retro websites, creative portfolios
- **Google Fonts URL**: https://fonts.google.com/share?selection.family=Press+Start+2P|VT323
- **CSS Import**:
  ```css
  @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&family=VT323&display=swap');
  ```
- **Tailwind Config**:
  ```js
  fontFamily: { pixel: ['Press Start 2P', 'cursive'], terminal: ['VT323', 'monospace'] }
  ```
- **Notes**: Press Start 2P is very wide/large. VT323 is better for body text.

---

### 53. Neubrutalist Bold

- **Heading Font**: Lexend Mega
- **Body Font**: Public Sans
- **Category**: Display + Sans
- **Mood/Keywords**: bold, neubrutalist, loud, strong, geometric, quirky
- **Best For**: Neubrutalist designs, Gen Z brands, bold marketing
- **Google Fonts URL**: https://fonts.google.com/share?selection.family=Lexend+Mega:wght@100..900|Public+Sans:wght@100..900
- **CSS Import**:
  ```css
  @import url('https://fonts.googleapis.com/css2?family=Lexend+Mega:wght@100..900&family=Public+Sans:wght@100..900&display=swap');
  ```
- **Tailwind Config**:
  ```js
  fontFamily: { mega: ['Lexend Mega', 'sans-serif'], body: ['Public Sans', 'sans-serif'] }
  ```
- **Notes**: Lexend Mega has distinct character and variable weight.

---

### 57. Gen Z Brutal

- **Heading Font**: Anton
- **Body Font**: Epilogue
- **Category**: Display + Sans
- **Mood/Keywords**: brutal, loud, shouty, meme, internet, bold
- **Best For**: Gen Z marketing, streetwear, viral campaigns
- **Google Fonts URL**: https://fonts.google.com/share?selection.family=Anton|Epilogue:wght@400;500;600;700
- **CSS Import**:
  ```css
  @import url('https://fonts.googleapis.com/css2?family=Anton&family=Epilogue:wght@400;500;600;700&display=swap');
  ```
- **Tailwind Config**:
  ```js
  fontFamily: { display: ['Anton', 'sans-serif'], body: ['Epilogue', 'sans-serif'] }
  ```
- **Notes**: Anton is impactful and condensed. Good for stickers/badges.57

---

## Mono + Sans

### 9. Developer Mono

- **Heading Font**: JetBrains Mono
- **Body Font**: IBM Plex Sans
- **Category**: Mono + Sans
- **Mood/Keywords**: code, developer, technical, precise, functional, hacker
- **Best For**: Developer tools, documentation, code editors, tech blogs, CLI apps
- **Google Fonts URL**: https://fonts.google.com/share?selection.family=IBM+Plex+Sans:wght@300;400;500;600;700|JetBrains+Mono:wght@400;500;600;700
- **CSS Import**:
  ```css
  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&display=swap');
  ```
- **Tailwind Config**:
  ```js
  fontFamily: { mono: ['JetBrains Mono', 'monospace'], sans: ['IBM Plex Sans', 'sans-serif'] }
  ```
- **Notes**: JetBrains for code, IBM Plex for UI. Developer-focused.

---

### 42. Dashboard Data

- **Heading Font**: Fira Code
- **Body Font**: Fira Sans
- **Category**: Mono + Sans
- **Mood/Keywords**: dashboard, data, analytics, code, technical, precise
- **Best For**: Dashboards, analytics, data visualization, admin panels
- **Google Fonts URL**: https://fonts.google.com/share?selection.family=Fira+Code:wght@400;500;600;700|Fira+Sans:wght@300;400;500;600;700
- **CSS Import**:
  ```css
  @import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;600;700&family=Fira+Sans:wght@300;400;500;600;700&display=swap');
  ```
- **Tailwind Config**:
  ```js
  fontFamily: { mono: ['Fira Code', 'monospace'], sans: ['Fira Sans', 'sans-serif'] }
  ```
- **Notes**: Fira family cohesion. Code for data, Sans for labels.

---

## Display + Serif

### 10. Retro Vintage

- **Heading Font**: Abril Fatface
- **Body Font**: Merriweather
- **Category**: Display + Serif
- **Mood/Keywords**: retro, vintage, nostalgic, dramatic, decorative, bold
- **Best For**: Vintage brands, breweries, restaurants, creative portfolios, posters
- **Google Fonts URL**: https://fonts.google.com/share?selection.family=Abril+Fatface|Merriweather:wght@300;400;700
- **CSS Import**:
  ```css
  @import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Merriweather:wght@300;400;700&display=swap');
  ```
- **Tailwind Config**:
  ```js
  fontFamily: { display: ['Abril Fatface', 'serif'], body: ['Merriweather', 'serif'] }
  ```
- **Notes**: Abril Fatface for hero headlines only. High-impact vintage feel.

---

## Script + Sans

### 15. Handwritten Charm

- **Heading Font**: Caveat
- **Body Font**: Quicksand
- **Category**: Script + Sans
- **Mood/Keywords**: handwritten, personal, friendly, casual, warm, charming
- **Best For**: Personal blogs, invitations, creative portfolios, lifestyle brands
- **Google Fonts URL**: https://fonts.google.com/share?selection.family=Caveat:wght@400;500;600;700|Quicksand:wght@300;400;500;600;700
- **CSS Import**:
  ```css
  @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600;700&family=Quicksand:wght@300;400;500;600;700&display=swap');
  ```
- **Tailwind Config**:
  ```js
  fontFamily: { script: ['Caveat', 'cursive'], sans: ['Quicksand', 'sans-serif'] }
  ```
- **Notes**: Use Caveat sparingly for accents. Quicksand for body.

---

## Mono + Mono

### 17. Brutalist Raw

- **Heading Font**: Space Mono
- **Body Font**: Space Mono
- **Category**: Mono + Mono
- **Mood/Keywords**: brutalist, raw, technical, monospace, minimal, stark
- **Best For**: Brutalist designs, developer portfolios, experimental, tech art
- **Google Fonts URL**: https://fonts.google.com/share?selection.family=Space+Mono:wght@400;700
- **CSS Import**:
  ```css
  @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap');
  ```
- **Tailwind Config**:
  ```js
  fontFamily: { mono: ['Space Mono', 'monospace'] }
  ```
- **Notes**: All-mono for raw brutalist aesthetic. Limited weights.

---

### 51. Tech/HUD Mono

- **Heading Font**: Share Tech Mono
- **Body Font**: Fira Code
- **Category**: Mono + Mono
- **Mood/Keywords**: tech, futuristic, hud, sci-fi, data, monospaced, precise
- **Best For**: Sci-fi interfaces, developer tools, cybersecurity, dashboards
- **Google Fonts URL**: https://fonts.google.com/share?selection.family=Fira+Code:wght@300;400;500;600;700|Share+Tech+Mono
- **CSS Import**:
  ```css
  @import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&family=Share+Tech+Mono&display=swap');
  ```
- **Tailwind Config**:
  ```js
  fontFamily: { hud: ['Share Tech Mono', 'monospace'], code: ['Fira Code', 'monospace'] }
  ```
- **Notes**: Share Tech Mono has that classic sci-fi look.

---

## Script + Serif

### 46. Wedding/Romance

- **Heading Font**: Great Vibes
- **Body Font**: Cormorant Infant
- **Category**: Script + Serif
- **Mood/Keywords**: wedding, romance, elegant, script, invitation, feminine
- **Best For**: Wedding sites, invitations, romantic brands, bridal
- **Google Fonts URL**: https://fonts.google.com/share?selection.family=Cormorant+Infant:wght@300;400;500;600;700|Great+Vibes
- **CSS Import**:
  ```css
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Infant:wght@300;400;500;600;700&family=Great+Vibes&display=swap');
  ```
- **Tailwind Config**:
  ```js
  fontFamily: { script: ['Great Vibes', 'cursive'], serif: ['Cormorant Infant', 'serif'] }
  ```
- **Notes**: Great Vibes for elegant accents. Cormorant for readable text.

---

## Display + Mono

### 56. Kinetic Motion

- **Heading Font**: Syncopate
- **Body Font**: Space Mono
- **Category**: Display + Mono
- **Mood/Keywords**: kinetic, motion, futuristic, speed, wide, tech
- **Best For**: Music festivals, automotive, high-energy brands
- **Google Fonts URL**: https://fonts.google.com/share?selection.family=Space+Mono:wght@400;700|Syncopate:wght@400;700
- **CSS Import**:
  ```css
  @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Syncopate:wght@400;700&display=swap');
  ```
- **Tailwind Config**:
  ```js
  fontFamily: { display: ['Syncopate', 'sans-serif'], mono: ['Space Mono', 'monospace'] }
  ```
- **Notes**: Syncopate's wide stance works well with motion effects.

---

## Serif + Serif + Mono (Triple Stack)

### 58. Minimalist Monochrome Editorial

- **Heading Font**: Playfair Display
- **Body Font**: Source Serif 4
- **Category**: Serif + Serif + Mono (Triple Stack)
- **Mood/Keywords**: monochrome, editorial, austere, typographic, pocket manifesto, luxury, high contrast, brutalist mobile
- **Best For**: Luxury fashion mobile apps, editorial publications, digital exhibitions, portfolio apps, high-contrast e-reader aesthetics
- **Google Fonts URL**: https://fonts.google.com/share?selection.family=JetBrains+Mono:wght@400;500|Playfair+Display:ital,wght@0,400;0,700;0,900;1,400|Source+Serif+4:ital,wght@0,300;0,400;0,600;1,300
- **CSS Import**:
  ```css
  @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=Source+Serif+4:ital,wght@0,300;0,400;0,600;1,300&display=swap');
  ```
- **Tailwind Config**:
  ```js
  fontFamily: { display: ['Playfair Display', 'serif'], body: ['Source Serif 4', 'serif'], mono: ['JetBrains Mono', 'monospace'] }
  ```
- **Notes**: Triple stack: Playfair Display 900 tracking-tighter leading-[0.9] for heroes (text-5xl–text-6xl breaks words graphically). Source Serif 4 300–600 for body legibility. JetBrains Mono 400–500 uppercase tracking-widest for tags/dates/labels. NO UI sans-serif — 100% serif/mono.

---

## Sans + Mono

### 59. Modern Dark Cinema (Inter System)

- **Heading Font**: Inter
- **Body Font**: Inter
- **Category**: Sans + Mono
- **Mood/Keywords**: dark, cinematic, technical, precision, clean, premium, developer, professional, high-end utility
- **Best For**: Developer tools, fintech/trading, AI dashboards, streaming platforms, high-end productivity apps
- **Google Fonts URL**: https://fonts.google.com/share?selection.family=Inter:wght@300;400;500;600;700
- **CSS Import**:
  ```css
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
  ```
- **Tailwind Config**:
  ```js
  fontFamily: { sans: ['Inter', 'sans-serif'] }
  ```
- **Notes**: Single-family precision system: Inter 700 (-1.5 tracking) for Display 48pt; Inter 600 (-0.5 tracking) for H1 32pt / H2 24pt; Inter 400 for body 16pt; Inter 500 uppercase +1.2 tracking for labels/mono. Gradient text via mask-view + react-native-linear-gradient (#FFFFFF → rgba(255,255,255,0.7)) on major headers.

---

## Display Serif + Sans + Mono

### 60. SaaS Mobile Boutique (Calistoga + Inter)

- **Heading Font**: Calistoga
- **Body Font**: Inter
- **Category**: Display Serif + Sans + Mono
- **Mood/Keywords**: saas, boutique, electric, warm, editorial, bold, premium, fintech, business, dual font, human warmth
- **Best For**: B2B SaaS mobile, fintech apps, analytics dashboards, marketing tools, operations platforms
- **Google Fonts URL**: https://fonts.google.com/share?selection.family=Calistoga:ital@0;1|Inter:wght@300;400;500;600;700|JetBrains+Mono:wght@400;500
- **CSS Import**:
  ```css
  @import url('https://fonts.googleapis.com/css2?family=Calistoga:ital@0;1&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');
  ```
- **Tailwind Config**:
  ```js
  fontFamily: { display: ['Calistoga', 'serif'], body: ['Inter', 'sans-serif'], mono: ['JetBrains Mono', 'monospace'] }
  ```
- **Notes**: Tri-stack: Calistoga (adds human warmth) for heroes 36–42pt leading-1.1; Inter 400–600 for body/UI 16–18pt; JetBrains Mono 12pt uppercase tracking-[1.5] for data labels and section badges. Scale: Hero 36–42pt, Section H2 28–32pt, Body 16–18pt, Label 12pt. Avoid italic Calistoga except editorial callouts.

---

## Mono + Mono (Single Family)

### 61. Terminal CLI Monospace

- **Heading Font**: JetBrains Mono
- **Body Font**: JetBrains Mono
- **Category**: Mono + Mono (Single Family)
- **Mood/Keywords**: terminal, cli, hacker, monospace, matrix, developer, retro-future, command line, precision, OLED
- **Best For**: Developer tools, Web3/blockchain apps, hacker aesthetic, sci-fi games, ARG, security tools, geek-culture portfolios
- **Google Fonts URL**: https://fonts.google.com/share?selection.family=JetBrains+Mono:ital,wght@0,400;0,500;1,400
- **CSS Import**:
  ```css
  @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,400;0,500;1,400&display=swap');
  ```
- **Tailwind Config**:
  ```js
  fontFamily: { mono: ['JetBrains Mono', 'monospace'] }
  ```
- **Notes**: Single monospace system: use ONLY JetBrains Mono (or SpaceMono-Regular as system fallback). Strict sizes: 12pt / 14pt / 16pt only — no in-between. Weight: 400 normal (bold ruins mono character). Line height: 1.2x font size for information density. Letter spacing: normal (monospaced auto-spacing). All UI labels uppercase. ASCII borders and text-based progress bars.

---

## Geometric Sans (Single Dominant)

### 62. Kinetic Brutalism (Space Grotesk)

- **Heading Font**: Space Grotesk
- **Body Font**: Space Grotesk
- **Category**: Geometric Sans (Single Dominant)
- **Mood/Keywords**: kinetic, brutalist, aggressive, uppercase, oversized, display, motion, street, bold, high-energy, zine
- **Best For**: Music/culture apps, sports platforms, brand flagship mobile, performance dashboards, underground product drops
- **Google Fonts URL**: https://fonts.google.com/share?selection.family=Space+Grotesk:wght@400;500;600;700
- **CSS Import**:
  ```css
  @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap');
  ```
- **Tailwind Config**:
  ```js
  fontFamily: { display: ['Space Grotesk', 'sans-serif'], body: ['Space Grotesk', 'sans-serif'] }
  ```
- **Notes**: Dominant single-family system: Space Grotesk 700–900 for ALL display. Scale: Hero 60–120pt (windowWidth/375*size), Section 40–50pt, Card titles 28–32pt, Body 18–20pt, Labels 12pt. ALL display/buttons/nav: UPPERCASE, letterSpacing -1 (large) / +2 (labels), lineHeight 0.9–1.1x. Use Inter as fallback. Font scale must use PixelRatio helper for responsive sizing.

---

## Sans (System Default)

### 64. Material You MD3 (Roboto System)

- **Heading Font**: Roboto
- **Body Font**: Roboto
- **Category**: Sans (System Default)
- **Mood/Keywords**: material design 3, md3, android, google, tonal, friendly, rounded, accessible, adaptive
- **Best For**: Android apps, cross-platform tools, productivity software, data-heavy B2B dashboards, enterprise mobile
- **Google Fonts URL**: https://fonts.google.com/share?selection.family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,400
- **CSS Import**:
  ```css
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,400&display=swap');
  ```
- **Tailwind Config**:
  ```js
  fontFamily: { sans: ['Roboto', 'sans-serif'] }
  ```
- **Notes**: MD3 type scale: Display Large 56px/400/64px. Headline Large 32px/500/40px. Title Large 22px/500/28px. Body Large 16px/400/24px. Label Medium 12px/500/16px. Buttons and Labels: letterSpacing 0.1px. Use system Roboto on Android; load from Google Fonts for iOS parity. Never use custom weights beyond 300–700.

---

## Geometric Sans (Bold-Only)

### 65. Neo Brutalism Mobile (Space Grotesk Heavy)

- **Heading Font**: Space Grotesk
- **Body Font**: Space Grotesk
- **Category**: Geometric Sans (Bold-Only)
- **Mood/Keywords**: neo brutalism, pop art, loud, bold, heavy, stickers, mechanical, high contrast, cream, gen-z
- **Best For**: Creative tools, Gen-Z marketing, e-commerce for youth culture, content portfolios, collage-style apps
- **Google Fonts URL**: https://fonts.google.com/share?selection.family=Space+Grotesk:wght@700
- **CSS Import**:
  ```css
  @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@700&display=swap');
  ```
- **Tailwind Config**:
  ```js
  fontFamily: { display: ['Space Grotesk', 'sans-serif'], body: ['Space Grotesk', 'sans-serif'] }
  ```
- **Notes**: Strictly 700 (Bold) and 900 (Black/Heavy) ONLY — never Regular or Light. Display: 48–64px. Heading: 24–32px. Body: 18–20px (stays heavy for brutalist density). Labels: 14px ALL CAPS letterSpacing 2. All buttons and navigation: uppercase. System bold as fallback. No italic, no thin weights.

---

## Sans + Serif (Display) + Mono

### 66. Bold Typography Mobile (Inter-Tight Poster)

- **Heading Font**: Inter
- **Body Font**: Playfair Display
- **Category**: Sans + Serif (Display) + Mono
- **Mood/Keywords**: bold typography, editorial, poster, near-black, vermillion, luxury, type-as-hero, manifesto, high-contrast
- **Best For**: Creative brand flagships, reading platforms, event apps, flash pages, luxury mobile experiences
- **Google Fonts URL**: https://fonts.google.com/share?selection.family=Inter:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400|JetBrains+Mono:wght@400|Playfair+Display:ital@1
- **CSS Import**:
  ```css
  @import url('https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&family=JetBrains+Mono:wght@400&family=Playfair+Display:ital@1&display=swap');
  ```
- **Tailwind Config**:
  ```js
  fontFamily: { display: ['Inter', 'sans-serif'], quote: ['Playfair Display', 'serif'], mono: ['JetBrains Mono', 'monospace'] }
  ```
- **Notes**: Tri-stack: Inter 600–800 for all UI (letterSpacing -1.5px heroes, -0.5px subheads). Playfair Display Italic ONLY for pull quotes. JetBrains Mono for labels and stats. Scale: 12px labels, 16px body, 22px sub, 32px section, 40px H2, 56px H1, 72px Hero Statement. 5:1 ratio H1:Body is mandatory. lineHeight 1.1 headlines, 1.6 body. Underlines (2–3pt accent) replace buttons for interactions.

---

## Serif + Book Serif + Engraved (Triple Stack)

### 67. Academia Mobile (Cormorant + Crimson + Cinzel)

- **Heading Font**: Cormorant Garamond
- **Body Font**: Crimson Pro
- **Category**: Serif + Book Serif + Engraved (Triple Stack)
- **Mood/Keywords**: academia, library, mahogany, parchment, brass, scholarly, prestige, antique, victorian, leather
- **Best For**: Knowledge management apps, scholarly reading tools, personal brand portfolios, RPG games, cultural community platforms
- **Google Fonts URL**: https://fonts.google.com/share?selection.family=Cinzel:wght@400;500;600|Cormorant+Garamond:ital,wght@0,300;0,500;0,700;1,300;1,500|Crimson+Pro:ital,wght@0,300;0,400;0,600;1,300;1,400
- **CSS Import**:
  ```css
  @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600&family=Cormorant+Garamond:ital,wght@0,300;0,500;0,700;1,300;1,500&family=Crimson+Pro:ital,wght@0,300;0,400;0,600;1,300;1,400&display=swap');
  ```
- **Tailwind Config**:
  ```js
  fontFamily: { heading: ['Cormorant Garamond', 'serif'], body: ['Crimson Pro', 'serif'], display: ['Cinzel', 'serif'] }
  ```
- **Notes**: Triple-stack: Cormorant Garamond Medium for all headings (32–40px tight leading). Crimson Pro Regular for body reading text (16–18px, lineHeight 24–26px). Cinzel SemiBold for ALL-CAPS labels, overlines, section prefixes (10–12px, letterSpacing 2–3px). Drop caps: first letter 60px Cinzel in Brass #C9A962. Section prefix: VOLUME I/II/III in Cinzel 10px. NO sans-serif anywhere.

---

## Tech Display + Mono

### 68. Cyberpunk Mobile (Orbitron + JetBrains Mono)

- **Heading Font**: Orbitron
- **Body Font**: JetBrains Mono
- **Category**: Tech Display + Mono
- **Mood/Keywords**: cyberpunk, neon, glitch, hud, sci-fi, dark, matrix green, magenta, chamfered, tactical
- **Best For**: Gaming companion apps, fintech/crypto, data visualization, dark brand apps, cyberpunk narrative games
- **Google Fonts URL**: https://fonts.google.com/share?selection.family=JetBrains+Mono:wght@400;500|Orbitron:wght@700;900
- **CSS Import**:
  ```css
  @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&family=Orbitron:wght@700;900&display=swap');
  ```
- **Tailwind Config**:
  ```js
  fontFamily: { heading: ['Orbitron', 'sans-serif'], body: ['JetBrains Mono', 'monospace'] }
  ```
- **Notes**: Dual-stack: Orbitron 700–900 for H1 (42px uppercase letterSpacing 4, fontWeight 900). JetBrains Mono 400–500 for all body/data text (14px letterSpacing 1). Labels: 10px uppercase opacity 0.7. Heading scale aggressive: H1 42px, H2 28px, Section 20px. Body 14px monospace only. NO mixed sans-serif. Fallback: monospace system font. Orbitron requires loading — use NativeWind or useFonts hook.

---

## Geometric Sans + Sans + Mono (Triple)

### 69. Web3 Bitcoin DeFi (Space Grotesk + Inter + Mono)

- **Heading Font**: Space Grotesk
- **Body Font**: Inter
- **Category**: Geometric Sans + Sans + Mono (Triple)
- **Mood/Keywords**: web3, bitcoin, defi, digital gold, fintech, crypto, trustless, luminescent, precision, dark
- **Best For**: DeFi protocols and wallets, NFT platforms, metaverse social apps, high-tech brand landing pages
- **Google Fonts URL**: https://fonts.google.com/share?selection.family=Inter:wght@400;500;600;700|JetBrains+Mono:wght@400;500|Space+Grotesk:wght@500;600;700
- **CSS Import**:
  ```css
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&family=Space+Grotesk:wght@500;600;700&display=swap');
  ```
- **Tailwind Config**:
  ```js
  fontFamily: { heading: ['Space Grotesk', 'sans-serif'], body: ['Inter', 'sans-serif'], mono: ['JetBrains Mono', 'monospace'] }
  ```
- **Notes**: Tri-stack: Space Grotesk 600–700 for headings (geometric, technical character). Inter 400–600 for all body and UI text (high legibility). JetBrains Mono Medium for all data/stats/prices/hashes (technical accuracy). Buttons: Inter Bold uppercase letterSpacing 1.5. Balance figures use MaskedView gradient text (orange→gold). Heading scale: H1 36–42px, H2 24–28px, body 16–18px, mono labels 12–14px.

---

## Display Rounded + Geometric Sans

### 70. Claymorphism Mobile (Nunito + DM Sans)

- **Heading Font**: Nunito
- **Body Font**: DM Sans
- **Category**: Display Rounded + Geometric Sans
- **Mood/Keywords**: claymorphism, clay, rounded, playful, candy, bubbly, soft, 3d, children, education, tactile, spring, nunito, dm sans
- **Best For**: Children education apps, teen social, brand mascot apps, creative tools, fintech gamification
- **Google Fonts URL**: https://fonts.google.com/share?selection.family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400|Nunito:ital,wght@0,700;0,800;0,900;1,700
- **CSS Import**:
  ```css
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400&family=Nunito:ital,wght@0,700;0,800;0,900;1,700&display=swap');
  ```
- **Tailwind Config**:
  ```js
  fontFamily: { display: ['Nunito', 'sans-serif'], body: ['DM Sans', 'sans-serif'] }
  ```
- **Notes**: Dual-stack: Nunito Black (900) or ExtraBold (800) for ALL headings — rounded terminals are mandatory. DM Sans Medium (500) for body text — clean and geometric. Scale: Hero 48px lineHeight 52 letterSpacing -1. Section Title 32px lineHeight 38. Card Title 22px lineHeight 28. Body 16px lineHeight 24. Never use Nunito for body text (too decorative at small sizes). Never use weights below 700 for any heading. includeFontPadding: false on all Nunito Text components for vertical centering in rounded buttons.

---

## Geometric Sans (Single Family)

### 71. Enterprise SaaS Mobile (Plus Jakarta Sans)

- **Heading Font**: Plus Jakarta Sans
- **Body Font**: Plus Jakarta Sans
- **Category**: Geometric Sans (Single Family)
- **Mood/Keywords**: enterprise, saas, b2b, professional, indigo, modern, approachable, legible, ios dynamic type, android scaling
- **Best For**: B2B SaaS apps, productivity tools, government and finance mobile apps, admin dashboards, enterprise onboarding
- **Google Fonts URL**: https://fonts.google.com/share?selection.family=Plus+Jakarta+Sans:ital,wght@0,400;0,600;0,700;0,800;1,400
- **CSS Import**:
  ```css
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,400;0,600;0,700;0,800;1,400&display=swap');
  ```
- **Tailwind Config**:
  ```js
  fontFamily: { sans: ['Plus Jakarta Sans', 'sans-serif'] }
  ```
- **Notes**: Single-family system: Plus Jakarta Sans balances professional authority with mobile approachability. Weight scale: ExtraBold 800 for screen titles/hero (line height 1.1–1.2). Bold 700 for section headers. SemiBold 600 for card titles and buttons. Regular 400 for body text (line height 1.4–1.5). Must support iOS Dynamic Type and Android font scaling — never hardcode pixel sizes without respecting system font scale. Button text: uppercase, letterSpacing 0.5. Caption: 12px Regular. Muted: Slate 500 #64748B.

---

## Handwritten + Handwritten (Dual)

### 72. Sketch Hand-Drawn Mobile (Kalam + Patrick Hand)

- **Heading Font**: Kalam
- **Body Font**: Patrick Hand
- **Category**: Handwritten + Handwritten (Dual)
- **Mood/Keywords**: sketch, hand-drawn, handwriting, human, imperfect, organic, paper, kalam, patrick hand, education, journal, creative
- **Best For**: Journaling apps, prototype tools, children's picturebook apps, creative platforms, gamified puzzle apps
- **Google Fonts URL**: https://fonts.google.com/share?selection.family=Kalam:wght@400;700|Patrick+Hand
- **CSS Import**:
  ```css
  @import url('https://fonts.googleapis.com/css2?family=Kalam:wght@400;700&family=Patrick+Hand&display=swap');
  ```
- **Tailwind Config**:
  ```js
  fontFamily: { heading: ['Kalam', 'cursive'], body: ['Patrick Hand', 'cursive'] }
  ```
- **Notes**: Dual handwritten stack: Kalam Bold (700) for all headings — high visual weight, felt-tip marker aesthetic, conveys intentional messiness. Patrick Hand Regular for all body text — highly legible at mobile sizes while remaining distinctly human. Scale: Heading 28–36px with lineHeight adjusted for descenders. Body 16–18px lineHeight 1.5. Labels 14px. Vary font sizes slightly between adjacent elements for spontaneous feel. Avoid alignment: 'center' for long body text — left-aligned reads more naturally. Both fonts require useFonts loading in Expo. Never use these fonts for financial figures or legal text.

---

## Geometric Sans (System Fallback)

### 73. Neumorphism Mobile (Plus Jakarta Sans + System)

- **Heading Font**: Plus Jakarta Sans
- **Body Font**: Plus Jakarta Sans
- **Category**: Geometric Sans (System Fallback)
- **Mood/Keywords**: neumorphism, soft ui, monochromatic, cool grey, minimal, physical, depth, ceramic, system font, utility
- **Best For**: Smart home controls, minimal tools, aesthetic dashboards, health monitors, brand showcase pages
- **Google Fonts URL**: https://fonts.google.com/share?selection.family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,700;1,400
- **CSS Import**:
  ```css
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,700;1,400&display=swap');
  ```
- **Tailwind Config**:
  ```js
  fontFamily: { sans: ['Plus Jakarta Sans', 'sans-serif'] }
  ```
- **Notes**: Single-family or System fallback: Plus Jakarta Sans Bold/Medium pairs beautifully with the monochromatic #E0E5EC surface — subtle geometry without competing with the depth effect. Heading: 24–32px Bold (700), letterSpacing -0.5 for modern premium feel. Body: 16px Medium (500), lineHeight 1.4. Caption: 12px Regular (400). Use Text Primary #3D4852 (7.5:1 contrast against #E0E5EC) for all primary text. Use Text Muted #6B7280 (4.6:1 contrast) for secondary text. Accent color #6C63FF only on active labels or focus indicators. Never use italic or thin weights — they lose legibility against the embossed background. System (SF Pro / Roboto) is an acceptable fallback for performance-sensitive implementations.

---

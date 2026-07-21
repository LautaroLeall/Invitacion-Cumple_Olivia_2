# 🌺 Invitación Cumpleaños 6 - Olivia (Stitch & Angel)

Proyecto web interactivo y animado desarrollado en **React + Vite**, pensado como una invitación digital temática de **Stitch y Angel** para los **6 Añitos de Olivia**.

Incluye música de fondo hawaiana (*Hawaiian Roller Coaster Ride*), animaciones fluidas con **Framer Motion**, efectos de celebraición con **Canvas Confetti**, personajes interactivos y un modal RSVP con confirmación directa por **WhatsApp**.

---

## 🚀 Tecnologías principales

```
- ⚛️ React 19 (Vite 6)
- 🎯 HTML5 + CSS3 / Tailwind CSS + Bootstrap 5
- ⚙️ JavaScript (ES6+)
- 🌺 Stitch & Angel Theme
- 🎵 Audio HTML5 & Web Audio API (Hawaiian Roller Coaster.mp3)
- 🎬 Framer Motion & Canvas Confetti
- 🎨 Lucide React Icons
- 📲 Integración Directa con WhatsApp Web API
```

---

## 📂 Estructura del proyecto

```
2da-Tarjeta/
├── public/                     # Archivos estáticos e imágenes
│   ├── personajes-juntos.png   # Fondo de Stitch y Angel
│   ├── personajes-juntos_6.png # Personajes principales cumple 6
│   ├── stich-solo.png         # Stitch Azul interactivo
│   ├── stich_rosa-solo.png    # Angel Rosa interactiva
│   └── Hawaiian Roller Coaster.mp3 # Música oficial
├── src/
│   ├── components/             # Componentes modulares
│   │   ├── AudioToggle.jsx     # Reproductor flotante con ecualizador
│   │   ├── Background.jsx      # Fondo animado y partículas
│   │   ├── EventDetails.jsx    # Tarjetas de Fecha y Lugar
│   │   ├── FormPresencia.jsx   # Modal de confirmación RSVP (WhatsApp)
│   │   ├── HeroCharacter.jsx   # Personaje central con aura resplandeciente
│   │   ├── InteractiveCharacters.jsx # Personajes laterales interactivos
│   │   ├── InvitationCard.jsx  # Tarjeta principal integradora en 100vh
│   │   ├── OliviaBadge.jsx     # Banner del nombre e insignia de 6 añitos
│   │   └── RsvpButton.jsx      # Botón de confirmación con confetti
│   ├── pages/                  # Página principal
│   │   └── Home.jsx            # Integrador con spinner de carga
│   └── styles/                 # Hojas de estilo CSS modulares
│       ├── animations.css
│       ├── audioToggle.css
│       ├── formPresencia.css
│       ├── global.css
│       └── particles.css
├── index.html                  # HTML5 con CDN Bootstrap 5 y Google Fonts
├── package.json                # Dependencias del proyecto
├── vite.config.js              # Configuración de Vite
└── README.md
```

---

## ⚙️ Instalación y uso

```bash
# 1. Ingresar a la carpeta de la tarjeta 2:
cd 2da-Tarjeta

# 2. Instalar dependencias:
npm install

# 3. Iniciar el servidor de desarrollo:
npm run dev

# 4. Compilar para producción:
npm run build
```
# Invitacion-Cumple_Olivia_2

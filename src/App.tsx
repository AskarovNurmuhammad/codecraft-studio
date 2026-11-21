import React, { useState, useEffect, useRef, useMemo } from 'react';
import confetti from 'canvas-confetti';
import {
  Code2,
  Play,
  RotateCcw,
  Download,
  Copy,
  Check,
  Maximize2,
  Minimize2,
  Terminal,
  Sun,
  Moon,
  Sparkles,
  FileCode2,
  Palette,
  Braces,
  Settings,
  Share2,
  Layers,
  HelpCircle,
  X,
  ExternalLink,
  Sliders,
  CheckCircle2,
  Flame
} from 'lucide-react';
import type { CodeLanguage, CodeTemplate, ConsoleLogMessage } from './types';

const TEMPLATES: CodeTemplate[] = [
  {
    id: 'glass-card',
    name: '3D Glassmorphism Card',
    category: 'UI Components',
    description: 'Zamonaviy shaffof oynasimon 3D kartochka interaktiv hover effekti bilan.',
    html: `<div class="container">
  <div class="glass-card">
    <div class="avatar">👨‍💻</div>
    <h2>Sardor Aliyev</h2>
    <p class="role">Senior Full-Stack Engineer</p>
    <div class="stats">
      <div class="stat-item">
        <h3>120+</h3>
        <span>Loyihalar</span>
      </div>
      <div class="stat-item">
        <h3>5.0</h3>
        <span>Reyting</span>
      </div>
      <div class="stat-item">
        <h3>99%</h3>
        <span>Muvaffaqiyat</span>
      </div>
    </div>
    <button id="actionBtn" class="btn">Aloqaga Chiqish ✨</button>
  </div>
</div>`,
    css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: system-ui, sans-serif;
}

body {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: radial-gradient(circle at 10% 20%, #1e1b4b 0%, #090a0f 90%);
  color: #fff;
}

.glass-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 28px;
  padding: 36px 32px;
  text-align: center;
  max-width: 340px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
  transition: all 0.4s ease;
}

.glass-card:hover {
  transform: translateY(-8px) scale(1.02);
  border-color: rgba(99, 102, 241, 0.5);
  box-shadow: 0 25px 60px rgba(99, 102, 241, 0.25);
}

.avatar {
  font-size: 56px;
  margin-bottom: 12px;
}

h2 {
  font-size: 24px;
  font-weight: 800;
  margin-bottom: 4px;
}

.role {
  color: #a5b4fc;
  font-size: 13px;
  margin-bottom: 24px;
}

.stats {
  display: flex;
  justify-content: space-between;
  background: rgba(0, 0, 0, 0.25);
  border-radius: 18px;
  padding: 14px 18px;
  margin-bottom: 24px;
}

.stat-item h3 {
  font-size: 18px;
  color: #818cf8;
}

.stat-item span {
  font-size: 11px;
  color: #94a3b8;
}

.btn {
  width: 100%;
  padding: 14px;
  border-radius: 16px;
  border: none;
  background: linear-gradient(135deg, #6366f1, #a855f7);
  color: #fff;
  font-weight: 700;
  cursor: pointer;
  transition: opacity 0.2s, transform 0.2s;
}

.btn:hover {
  opacity: 0.9;
  transform: scale(0.98);
}`,
    js: `document.getElementById('actionBtn').addEventListener('click', () => {
  console.log('Tugma bosildi! Aloqa oynasi ochilmoqda...');
  alert('Xabar yuborildi! Tez orada siz bilan boglanamiz.');
});

console.log('3D Glassmorphism komponenti muvaffaqiyatli yuklandi!');`
  },
  {
    id: 'matrix-rain',
    name: 'Matrix Cyber Digital Rain',
    category: 'Canvas & Animation',
    description: 'HTML5 Canvas orqali klassik yashil raqamlar yomg\'iri animatsiyasi.',
    html: `<div class="matrix-wrapper">
  <canvas id="canvas"></canvas>
  <div class="overlay">
    <h1>CYBER MATRIX</h1>
    <p>HTML5 Canvas Real-Time Render</p>
  </div>
</div>`,
    css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  overflow: hidden;
  background: #000;
  font-family: 'Courier New', monospace;
}

.matrix-wrapper {
  position: relative;
  width: 100vw;
  height: 100vh;
}

#canvas {
  display: block;
}

.overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #00ff66;
  text-shadow: 0 0 20px #00ff66;
  pointer-events: none;
}

h1 {
  font-size: 42px;
  letter-spacing: 6px;
  margin-bottom: 8px;
}

p {
  font-size: 14px;
  color: #00aa44;
  letter-spacing: 2px;
}`,
    js: `const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
});

const characters = '0123456789ABCDEF$#@%&*+-=<>~';
const fontSize = 16;
const columns = Math.floor(width / fontSize);
const drops = Array(columns).fill(1);

function draw() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.06)';
  ctx.fillRect(0, 0, width, height);

  ctx.fillStyle = '#00ff66';
  ctx.font = fontSize + 'px monospace';

  for (let i = 0; i < drops.length; i++) {
    const text = characters.charAt(Math.floor(Math.random() * characters.length));
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}

setInterval(draw, 33);
console.log('Matrix Canvas render jarayoni boshlandi!');`
  },
  {
    id: 'snake-game',
    name: 'Interactive Mini Snake Game',
    category: 'Games',
    description: 'Klassik ilon o\'yini: klaviatura strelkalari bilan boshqariladi.',
    html: `<div class="game-container">
  <div class="score-board">
    <span>Hisob: <b id="score">0</b></span>
    <span>Eng yaxshi: <b id="highScore">0</b></span>
  </div>
  <canvas id="gameCanvas" width="360" height="360"></canvas>
  <p class="controls-hint">Boshqarish: ⬅️ ⬆️ ⬇️ ➡️ strelkalar yoki W,A,S,D</p>
  <button id="restartBtn" class="restart-btn">Qaytadan Boshlash</button>
</div>`,
    css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: system-ui, sans-serif;
}

body {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #0f172a;
  color: #fff;
}

.game-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #1e293b;
  padding: 24px;
  border-radius: 24px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.4);
  border: 1px solid #334155;
}

.score-board {
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 16px;
  margin-bottom: 16px;
  color: #38bdf8;
}

#gameCanvas {
  background: #090d16;
  border-radius: 16px;
  border: 2px solid #38bdf8;
}

.controls-hint {
  font-size: 12px;
  color: #94a3b8;
  margin-top: 14px;
  margin-bottom: 12px;
}

.restart-btn {
  padding: 8px 20px;
  border-radius: 12px;
  border: none;
  background: #38bdf8;
  color: #0f172a;
  font-weight: 700;
  cursor: pointer;
}`,
    js: `const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const scoreEl = document.getElementById('score');

const grid = 20;
let count = 0;
let score = 0;

let snake = {
  x: 160,
  y: 160,
  dx: grid,
  dy: 0,
  cells: [],
  maxCells: 4
};

let apple = { x: 80, y: 80 };

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function loop() {
  requestAnimationFrame(loop);
  if (++count < 6) return;
  count = 0;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  snake.x += snake.dx;
  snake.y += snake.dy;

  if (snake.x < 0) snake.x = canvas.width - grid;
  else if (snake.x >= canvas.width) snake.x = 0;
  if (snake.y < 0) snake.y = canvas.height - grid;
  else if (snake.y >= canvas.height) snake.y = 0;

  snake.cells.unshift({ x: snake.x, y: snake.y });
  if (snake.cells.length > snake.maxCells) snake.cells.pop();

  // Olma chizish
  ctx.fillStyle = '#ef4444';
  ctx.fillRect(apple.x, apple.y, grid - 1, grid - 1);

  // Ilon chizish
  ctx.fillStyle = '#22c55e';
  snake.cells.forEach((cell, index) => {
    ctx.fillRect(cell.x, cell.y, grid - 1, grid - 1);

    if (cell.x === apple.x && cell.y === apple.y) {
      snake.maxCells++;
      score += 10;
      scoreEl.textContent = score;
      console.log('Olma yeyildi! Yangi hisob:', score);
      apple.x = getRandomInt(0, 18) * grid;
      apple.y = getRandomInt(0, 18) * grid;
    }

    for (let i = index + 1; i < snake.cells.length; i++) {
      if (cell.x === snake.cells[i].x && cell.y === snake.cells[i].y) {
        snake.x = 160;
        snake.y = 160;
        snake.cells = [];
        snake.maxCells = 4;
        snake.dx = grid;
        snake.dy = 0;
        score = 0;
        scoreEl.textContent = 0;
        console.warn('Oyin tugadi (Game Over)!');
      }
    }
  });
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft' && snake.dx === 0) { snake.dx = -grid; snake.dy = 0; }
  else if (e.key === 'ArrowUp' && snake.dy === 0) { snake.dy = -grid; snake.dx = 0; }
  else if (e.key === 'ArrowRight' && snake.dx === 0) { snake.dx = grid; snake.dy = 0; }
  else if (e.key === 'ArrowDown' && snake.dy === 0) { snake.dy = grid; snake.dx = 0; }
});

document.getElementById('restartBtn').addEventListener('click', () => {
  snake.x = 160; snake.y = 160; snake.cells = []; snake.maxCells = 4; score = 0; scoreEl.textContent = 0;
});

requestAnimationFrame(loop);
console.log('Ilon oyini muvaffaqiyatli yuklandi!');`
  }
];

export default function App() {
  const [activeTab, setActiveTab] = useState<CodeLanguage>('html');
  const [htmlCode, setHtmlCode] = useState<string>(() => {
    return localStorage.getItem('cc_html') || TEMPLATES[0].html;
  });
  const [cssCode, setCssCode] = useState<string>(() => {
    return localStorage.getItem('cc_css') || TEMPLATES[0].css;
  });
  const [jsCode, setJsCode] = useState<string>(() => {
    return localStorage.getItem('cc_js') || TEMPLATES[0].js;
  });

  const [activeTemplate, setActiveTemplate] = useState<string>(TEMPLATES[0].id);
  const [consoleLogs, setConsoleLogs] = useState<ConsoleLogMessage[]>([]);
  const [isConsoleOpen, setIsConsoleOpen] = useState<boolean>(false);
  const [fontSize, setFontSize] = useState<number>(14);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [copied, setCopied] = useState<boolean>(false);
  const [templatesModalOpen, setTemplatesModalOpen] = useState<boolean>(false);

  // iframe ga yuboriladigan to'liq HTML kodi
  const [srcDoc, setSrcDoc] = useState<string>('');

  const iframeRef = useRef<HTMLIFrameElement>(null);

  const isDark = theme === 'dark';

  // Kodni generatsiya qilish
  const generateOutput = () => {
    const combined = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>${cssCode}</style>
        </head>
        <body>
          ${htmlCode}
          <script>
            // Console logger interception
            (function() {
              const origLog = console.log;
              const origWarn = console.warn;
              const origError = console.error;

              console.log = function(...args) {
                window.parent.postMessage({ type: 'CONSOLE_LOG', level: 'log', data: args.join(' ') }, '*');
                origLog.apply(console, args);
              };
              console.warn = function(...args) {
                window.parent.postMessage({ type: 'CONSOLE_LOG', level: 'warn', data: args.join(' ') }, '*');
                origWarn.apply(console, args);
              };
              console.error = function(...args) {
                window.parent.postMessage({ type: 'CONSOLE_LOG', level: 'error', data: args.join(' ') }, '*');
                origError.apply(console, args);
              };
            })();

            try {
              ${jsCode}
            } catch (err) {
              console.error(err.message);
            }
          </script>
        </body>
      </html>
    `;
    setSrcDoc(combined);
  };

  // Har safar kod o'zgarganda xotirada saqlash va outputni yangilash
  useEffect(() => {
    const timer = setTimeout(() => {
      generateOutput();
      localStorage.setItem('cc_html', htmlCode);
      localStorage.setItem('cc_css', cssCode);
      localStorage.setItem('cc_js', jsCode);
    }, 400);

    return () => clearTimeout(timer);
  }, [htmlCode, cssCode, jsCode]);

  // Console xabarlarini qabul qilish
  useEffect(() => {
    const handleMessage = (e: MessageEvent) => {
      if (e.data && e.data.type === 'CONSOLE_LOG') {
        const newMsg: ConsoleLogMessage = {
          id: `msg-${Date.now()}-${Math.random()}`,
          type: e.data.level,
          content: e.data.data,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })
        };
        setConsoleLogs(prev => [newMsg, ...prev.slice(0, 40)]);
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  // Shablon yuklash
  const handleLoadTemplate = (tpl: CodeTemplate) => {
    setHtmlCode(tpl.html);
    setCssCode(tpl.css);
    setJsCode(tpl.js);
    setActiveTemplate(tpl.id);
    setConsoleLogs([]);
    setTemplatesModalOpen(false);
    confetti({ particleCount: 50, spread: 60 });
  };

  // Fayl sifatida yuklab olish
  const handleDownload = () => {
    const blob = new Blob([srcDoc], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${activeTemplate}-codecraft.html`;
    a.click();
    URL.revokeObjectURL(url);
    confetti({ particleCount: 40, spread: 50 });
  };

  // Nusxa olish
  const handleCopyCode = () => {
    const currentCode = activeTab === 'html' ? htmlCode : activeTab === 'css' ? cssCode : jsCode;
    navigator.clipboard.writeText(currentCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Tozalash
  const handleResetCode = () => {
    if (confirm('Joriy kodni tozalab boshlang\'ich holatga qaytarasizmi?')) {
      const tpl = TEMPLATES.find(t => t.id === activeTemplate) || TEMPLATES[0];
      setHtmlCode(tpl.html);
      setCssCode(tpl.css);
      setJsCode(tpl.js);
      setConsoleLogs([]);
    }
  };

  const themeClasses = {
    appBg: isDark ? 'bg-[#090d16] text-slate-100' : 'bg-[#f8fafc] text-slate-900',
    headerBg: isDark ? 'bg-[#0e1424] border-slate-800' : 'bg-white border-slate-200 shadow-xs',
    editorBg: isDark ? 'bg-[#0b101d] text-slate-100' : 'bg-white text-slate-900',
    panelBg: isDark ? 'bg-[#111827] border-slate-800' : 'bg-slate-100 border-slate-200',
    activeTab: 'bg-indigo-600 text-white shadow-sm',
    inactiveTab: isDark ? 'text-slate-400 hover:text-white hover:bg-slate-800/60' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200',
    border: isDark ? 'border-slate-800' : 'border-slate-200'
  };

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-200 ${themeClasses.appBg}`}>

      {/* HEADER */}
      <header className={`px-4 lg:px-6 py-3 border-b flex items-center justify-between gap-4 transition-colors ${themeClasses.headerBg}`}>
        {/* Logo & Shablonlar tugmasi */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center text-white shadow-lg shadow-indigo-500/25">
            <Code2 className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-lg font-extrabold tracking-tight bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                CodeCraft Studio
              </span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-500 border border-indigo-500/20 uppercase">
                v2.5 Web IDE
              </span>
            </div>
            <p className="text-[11px] text-slate-400 hidden sm:block">Real-Time Interactive Code Playground</p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          {/* Shablonlar ochish */}
          <button
            onClick={() => setTemplatesModalOpen(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-bold transition-all bg-indigo-500/10 text-indigo-500 border-indigo-500/20 hover:bg-indigo-500/20"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Shablonlar ({TEMPLATES.length})</span>
          </button>

          {/* Qayta ishga tushirish */}
          <button
            onClick={() => { generateOutput(); confetti({ particleCount: 25, spread: 45 }); }}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-transform active:scale-95 shadow-sm"
            title="Qayta yuklash"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span className="hidden md:inline">Ishga tushirish</span>
          </button>

          {/* Nusxa olish */}
          <button
            onClick={handleCopyCode}
            className={`p-2 rounded-xl border text-xs font-bold transition-all ${
              copied ? 'bg-emerald-500/15 text-emerald-500 border-emerald-500/30' : 'text-slate-400 hover:text-white border-inherit'
            }`}
            title="Kodni nusxalash"
          >
            {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
          </button>

          {/* HTML qilib yuklab olish */}
          <button
            onClick={handleDownload}
            className="p-2 rounded-xl border text-slate-400 hover:text-white border-inherit transition-all"
            title="To'liq HTML fayl sifatida yuklab olish"
          >
            <Download className="w-4 h-4" />
          </button>

          {/* Shrift o'lchami */}
          <select
            value={fontSize}
            onChange={(e) => setFontSize(Number(e.target.value))}
            className="hidden sm:block text-xs font-bold py-1.5 px-2 rounded-xl border border-inherit bg-transparent outline-none cursor-pointer"
          >
            <option value={12}>12px</option>
            <option value={14}>14px</option>
            <option value={16}>16px</option>
          </select>

          {/* Tema almashtirish */}
          <button
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            className="p-2 rounded-xl border border-inherit text-amber-400 transition-all"
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4 text-slate-700" />}
          </button>
        </div>
      </header>

      {/* ASOSIY MAYDON: SPLIT PANELS */}
      <div className="flex-1 flex flex-col md:flex-row overflow-hidden" style={{ minHeight: 'calc(100vh - 110px)' }}>

        {/* CHAP / TEPADA: KOD MUHARRIRI */}
        <div className={`w-full md:w-1/2 flex flex-col border-b md:border-b-0 md:border-r ${themeClasses.border}`}>

          {/* Tablar satri */}
          <div className={`flex items-center justify-between px-3 py-2 border-b ${themeClasses.panelBg}`}>
            <div className="flex items-center gap-1 text-xs font-bold">
              <button
                onClick={() => setActiveTab('html')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                  activeTab === 'html' ? themeClasses.activeTab : themeClasses.inactiveTab
                }`}
              >
                <FileCode2 className="w-3.5 h-3.5 text-orange-400" />
                <span>HTML</span>
              </button>

              <button
                onClick={() => setActiveTab('css')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                  activeTab === 'css' ? themeClasses.activeTab : themeClasses.inactiveTab
                }`}
              >
                <Palette className="w-3.5 h-3.5 text-sky-400" />
                <span>CSS</span>
              </button>

              <button
                onClick={() => setActiveTab('javascript')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                  activeTab === 'javascript' ? themeClasses.activeTab : themeClasses.inactiveTab
                }`}
              >
                <Braces className="w-3.5 h-3.5 text-amber-400" />
                <span>JavaScript</span>
              </button>
            </div>

            <button
              onClick={handleResetCode}
              className="p-1.5 text-slate-400 hover:text-rose-500 rounded-lg transition-colors"
              title="Kodni qayta tiklash"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Kod maydoni (Textarea Editor) */}
          <div className="flex-1 relative">
            <textarea
              value={activeTab === 'html' ? htmlCode : activeTab === 'css' ? cssCode : jsCode}
              onChange={(e) => {
                if (activeTab === 'html') setHtmlCode(e.target.value);
                else if (activeTab === 'css') setCssCode(e.target.value);
                else setJsCode(e.target.value);
              }}
              spellCheck={false}
              className={`w-full h-full p-4 resize-none outline-none border-none code-font transition-all ${themeClasses.editorBg}`}
              style={{ fontSize: `${fontSize}px`, lineHeight: 1.6 }}
              placeholder={`${activeTab.toUpperCase()} kodini shu yerga yozing...`}
            />
          </div>
        </div>

        {/* O'NG / PASTDA: JONLI PREVIEW (SANDBOX IFRAME) */}
        <div className="w-full md:w-1/2 flex flex-col relative bg-white">

          {/* Preview boshqaruv satri */}
          <div className={`flex items-center justify-between px-3 py-2 border-b text-xs font-bold ${themeClasses.panelBg}`}>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-slate-400">Jonli Natija (Live Preview)</span>
            </div>

            <div className="flex items-center gap-2">
              {/* Konsol tortmasi ochish */}
              <button
                onClick={() => setIsConsoleOpen(!isConsoleOpen)}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-lg border text-xs transition-all ${
                  isConsoleOpen
                    ? 'bg-amber-500 text-slate-900 border-amber-400 font-extrabold'
                    : 'text-slate-400 hover:text-white border-inherit'
                }`}
              >
                <Terminal className="w-3 h-3" />
                <span>Konsol ({consoleLogs.length})</span>
              </button>

              <button
                onClick={() => setIsFullscreen(!isFullscreen)}
                className="p-1 text-slate-400 hover:text-white transition-colors"
                title={isFullscreen ? 'Kichik ekran' : 'Katta ekran'}
              >
                {isFullscreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>

          {/* Iframe */}
          <div className="flex-1 relative bg-white">
            <iframe
              ref={iframeRef}
              srcDoc={srcDoc}
              title="CodeCraft Sandbox Output"
              sandbox="allow-scripts allow-modals allow-same-origin"
              className="w-full h-full border-none"
            />
          </div>

          {/* KONSOL QUTISI (DRAWER) */}
          {isConsoleOpen && (
            <div className="h-44 bg-[#090d16] border-t border-slate-800 text-xs flex flex-col font-mono">
              <div className="px-3 py-1.5 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
                <span className="text-slate-400 font-bold flex items-center gap-1.5">
                  <Terminal className="w-3 h-3 text-amber-400" />
                  JavaScript Konsoli
                </span>
                <button
                  onClick={() => setConsoleLogs([])}
                  className="text-[10px] text-slate-500 hover:text-rose-400 font-sans"
                >
                  Tozalash
                </button>
              </div>

              <div className="flex-1 p-2.5 overflow-y-auto space-y-1">
                {consoleLogs.length === 0 ? (
                  <p className="text-slate-600 italic">Hozircha konsolda xabarlar yo'q...</p>
                ) : (
                  consoleLogs.map(log => (
                    <div
                      key={log.id}
                      className={`py-0.5 px-1.5 rounded flex items-start gap-2 ${
                        log.type === 'error' ? 'bg-rose-500/10 text-rose-400' :
                        log.type === 'warn' ? 'bg-amber-500/10 text-amber-400' :
                        'text-emerald-400'
                      }`}
                    >
                      <span className="text-[10px] text-slate-500 shrink-0">{log.time}</span>
                      <span className="break-all">{log.content}</span>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* SHABLONLAR MODALI */}
      {templatesModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
          <div className={`rounded-3xl max-w-2xl w-full p-6 sm:p-8 relative border ${isDark ? 'bg-[#0f172a] border-slate-700 text-white' : 'bg-white border-slate-200 text-slate-900 shadow-2xl'}`}>
            <button
              onClick={() => setTemplatesModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-full bg-slate-800/40"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-5 h-5 text-indigo-400" />
              <h3 className="text-xl font-extrabold">Tayyor Loyiha Shablonlari</h3>
            </div>
            <p className="text-xs text-slate-400 mb-6">
              O'zingizga yoqqan shablonni tanlang va bir zumda jonli kod ustida ishlang:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {TEMPLATES.map(tpl => (
                <div
                  key={tpl.id}
                  onClick={() => handleLoadTemplate(tpl)}
                  className={`p-4 rounded-2xl border cursor-pointer transition-all hover:scale-[1.02] flex flex-col justify-between ${
                    activeTemplate === tpl.id
                      ? 'border-indigo-500 bg-indigo-500/10'
                      : isDark ? 'bg-slate-900/60 border-slate-800 hover:border-slate-700' : 'bg-slate-50 border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-indigo-500/15 text-indigo-400 uppercase">
                      {tpl.category}
                    </span>
                    <h4 className="font-bold text-sm mt-2 mb-1">{tpl.name}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed mb-4">{tpl.description}</p>
                  </div>

                  <button className="w-full py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl text-xs flex items-center justify-center gap-1.5 shadow">
                    <span>Yuklash va Sinash</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className={`border-t py-2 px-4 text-xs flex items-center justify-between ${themeClasses.headerBg}`}>
        <div className="flex items-center gap-2 text-slate-400">
          <Code2 className="w-3.5 h-3.5 text-indigo-500" />
          <span>CodeCraft Studio • HTML5 / CSS3 / ES2024 Sandbox</span>
        </div>
        <div className="flex items-center gap-4 text-slate-400 text-[11px]">
          <span>Auto-Save: <b>Yoqilgan</b></span>
          <span>FPS: <b>60</b></span>
        </div>
      </footer>
    </div>
  );
}

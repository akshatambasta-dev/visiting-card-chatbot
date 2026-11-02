/**
 * =========================================================
 * BUDDHI AI CHATBOT ENGINE — ADVANCED STRATEGY ADVISOR
 * Name: "Buddhi"
 * Client: Deepak Jain (The Master Strategy Hub & Buddhi Framework)
 * Features:
 *   - Custom SVG Avatar for "Buddhi"
 *   - Time-Aware Proactive Welcome Toast
 *   - Semantic Knowledge Engine & Fuzzy Intent Classifier
 *   - Typewriter Streaming Response Animation
 *   - Interactive In-Chat Consultation Booking Wizard
 *   - Speech Synthesis (Listen) & Web Speech Voice Input (Mic)
 *   - Smooth In-Page Section Scroll Triggers
 * =========================================================
 */

(function () {
  'use strict';

  // High-Resolution SVG Avatar of "Buddhi"
  const BUDDHI_AVATAR_SVG = `
    <svg class="buddhi-avatar-svg" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="buddhiAura" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#1E3A61"/>
          <stop offset="100%" stop-color="#0F1D33"/>
        </radialGradient>
      </defs>
      <!-- Base Circle with Gold Border -->
      <circle cx="50" cy="50" r="48" fill="url(#buddhiAura)" stroke="#C79B44" stroke-width="2.5"/>
      <circle cx="50" cy="50" r="43" fill="none" stroke="#E4C784" stroke-width="0.8" stroke-dasharray="3 3"/>
      
      <!-- Suit Shoulders & Lapel -->
      <path d="M22 86 C22 70 36 64 50 64 C64 64 78 70 78 86" fill="#0A1322"/>
      <path d="M41 64 L50 80 L59 64 Z" fill="#F7F1E4"/>
      <!-- Gold Tie -->
      <path d="M48 68 L52 68 L53 82 L50 85 L47 82 Z" fill="#C79B44"/>
      
      <!-- Neck -->
      <rect x="44" y="55" width="12" height="12" rx="3" fill="#E8B888"/>
      
      <!-- Head -->
      <ellipse cx="50" cy="42" rx="18" ry="20" fill="#F3CA9E"/>
      
      <!-- Refined Silver-Grey Trim Hair -->
      <path d="M30 38 C30 24 38 18 50 18 C62 18 70 24 70 38 C68 28 60 22 50 22 C40 22 32 28 30 38 Z" fill="#D8CBAA"/>
      
      <!-- Gold Wireframe Glasses -->
      <rect x="36" y="38" width="11" height="8" rx="2" fill="none" stroke="#C79B44" stroke-width="1.8"/>
      <rect x="53" y="38" width="11" height="8" rx="2" fill="none" stroke="#C79B44" stroke-width="1.8"/>
      <line x1="47" y1="42" x2="53" y2="42" stroke="#C79B44" stroke-width="1.8"/>
      <line x1="32" y1="40" x2="36" y2="41" stroke="#C79B44" stroke-width="1.5"/>
      <line x1="64" y1="41" x2="68" y2="40" stroke="#C79B44" stroke-width="1.5"/>
      
      <!-- Eyes & Brows -->
      <circle cx="41.5" cy="42" r="1.5" fill="#201C16"/>
      <circle cx="58.5" cy="42" r="1.5" fill="#201C16"/>
      <path d="M36 35 Q41.5 33 46 35" fill="none" stroke="#4D473C" stroke-width="1.2" stroke-linecap="round"/>
      <path d="M54 35 Q58.5 33 64 35" fill="none" stroke="#4D473C" stroke-width="1.2" stroke-linecap="round"/>
      
      <!-- Friendly Smirk / Smile -->
      <path d="M44 52 Q50 56 56 52" fill="none" stroke="#8C3D2E" stroke-width="1.8" stroke-linecap="round"/>
      
      <!-- Wisdom Mark (B Badge) on Lapel -->
      <circle cx="34" cy="74" r="3" fill="#C79B44"/>
      <text x="34" y="76" font-size="4" font-weight="bold" fill="#0F1D33" text-anchor="middle" font-family="serif">B</text>
    </svg>
  `;

  // Comprehensive Knowledge Engine with Synonyms, Actions, and Dynamic Chips
  const KNOWLEDGE_BASE = {
    greetings: {
      triggers: ['hi', 'hello', 'hey', 'greetings', 'namaste', 'morning', 'afternoon', 'evening', 'welcome', 'start'],
      handler: () => {
        const hour = new Date().getHours();
        let timeGreeting = 'Namaste';
        if (hour < 12) timeGreeting = 'Good morning';
        else if (hour < 17) timeGreeting = 'Good afternoon';
        else timeGreeting = 'Good evening';

        return {
          reply: `${timeGreeting}! I am **Buddhi**, the official AI business advisor for **Deepak Jain**.\n\nWith over **40 years of hands-on business experience**, we help small and medium enterprises turn tough problems into measurable results.\n\nHow can I advise you today?\n- 💼 **Consulting Services** (Finance, Debt, Marketing, IT/AI, Solar)\n- 📜 **Buddhi Framework Rules & Case Studies**\n- 🤝 **Book a Strategy Session** (Nominal ₹501/- fee)\n- ⚡ **8 MW Agrivoltaics Solar Plant**\n- 📖 **The Upcoming Book**: *Breaking Walls, Building Legacy*\n- 🎓 **Gen Z Mentoring Cohort**`,
          chips: ['💼 Services', '📜 Buddhi Rules', '🤝 Book Session (₹501)', '⚡ 8 MW Solar', '📖 The Book']
        };
      }
    },

    about_deepak: {
      triggers: ['who is deepak', 'deepak jain', 'background', 'bio', 'experience', 'credentials', 'founder', 'history', 'ceo'],
      reply: `**Deepak Jain** (writing under the pen name *Buddhi*) is a veteran entrepreneur, consultant, mentor, and author with **40+ years of multi-sector leadership**.\n\n**Key Milestones**:\n- **1968**: Family founded **Hindustan Instruments**, supplying precision equipment to BHEL, Grasim, and Government Space/Atomic Energy departments.\n- **1986**: Deepak joined the family business, co-pioneering **Computer Components** during India's early computing dawn.\n- **2009**: Took over as CEO to restructure operations: cleared debt, solved cash-flow gridlocks, and launched the consultancy wing.\n- **2030 Roadmap**: Preparing for an institutional **IPO (Stock Market Listing)** focusing on IT, AI, and Solar.\n- Regular columnist and business thinker (featured in *Mint*, *Financial Times*, and *Free Press Journal*).`,
      sectionId: 'journey',
      sectionLabel: 'View Deepak\'s 4-Decade Journey',
      chips: ['📜 Buddhi Rules', '💼 Services', '⚡ 2030 IPO Goal', '🤝 Book Session']
    },

    buddhi_framework: {
      triggers: ['buddhi', 'buddhi framework', 'methodology', 'rules', 'philosophy', 'how you work', 'rules we work by', 'strategy'],
      reply: `The **Buddhi Framework** is an in-house consulting methodology engineered to replace endless theoretical reports with **accountability and immediate execution**.\n\nTwo core rules we work by:\n- **Rule No. 78**: *"Overthinking kills deals. Simple execution closes them."*\n- **Rule No. 80**: *"Look after everyone, from the junior teammate to the biggest client. That is how you grow a company and your career."*\n\nWe start from what your business actually needs, not just what's in a preliminary brief, delivering progress you can measure from week one.`,
      sectionId: 'buddhi',
      sectionLabel: 'Explore the Buddhi Framework',
      chips: ['Case Study 001', 'Rule No. 78', 'Rule No. 80', '💼 Consulting Services']
    },

    case_study: {
      triggers: ['case study', 'tanuj', 'film', 'product placement', '60 lakh', 'example', 'results', 'real example'],
      reply: `**Case Study 001 · The Buddhi Approach in Practice**\n\n- **The Challenge**: Tanuj, an independent filmmaker, needed **₹60 lakh**. Traditional investor negotiations were stalling, and debt strain was mounting.\n- **The Diagnosis**: Applying **Rule No. 78** (*Simple execution closes deals*), we reviewed the script, production roadmap, and commercial viability.\n- **The Breakthrough**: Shifted the funding structure to **in-film product placement**. The movie began generating commercial revenue before release, sharply decreasing dependence on private debt.`,
      sectionId: 'results',
      sectionLabel: 'Read Case Study on Site',
      chips: ['📜 Rule No. 78', '💰 Finance Advisory', '📈 Marketing Services', '🤝 Book ₹501 Session']
    },

    services: {
      triggers: ['services', 'what do you do', 'consulting', 'pillars', 'areas', 'help', 'offer', 'expertise'],
      reply: `We deliver hands-on consulting across **Four Core Pillars**:\n\n1. 💰 **Finance**: Restructuring bank debt, cash-flow stabilization, strategic pricing, and working capital optimization.\n2. 📈 **Marketing**: Brand positioning, lead acquisition, commercial partnerships, and innovative funding routes (e.g., in-film placement).\n3. ☀️ **Renewables**: Commercial solar adoption, captive energy generation, and dual-use **Agrivoltaics** (solar power + farming).\n4. 💻 **Information Technology & AI**: Modern system architecture, AI implementation, workflow automation, and custom IT delivery.\n\nWhich area would you like to explore for your enterprise?`,
      sectionId: 'buddhi',
      sectionLabel: 'View the 4 Pillars',
      chips: ['💰 Debt Restructuring', '☀️ Solar & Agrivoltaics', '💻 IT & AI Systems', '🤝 Schedule Consultation']
    },

    finance_debt: {
      triggers: ['finance', 'debt', 'restructuring', 'cash flow', 'working capital', 'loan', 'bank', 'funds', 'pricing'],
      reply: `**Finance & Debt Advisory with Buddhi**:\n\n- **Debt Restructuring**: Relief strategies for stressed loans, renegotiation frameworks, and lender realignment.\n- **Cash Flow Re-engineering**: Eliminating capital blockages to keep working capital fluid.\n- **Pricing & Margin Strategy**: Protecting bottom-line margins against rising operational costs.\n\n*\"Decisions you can act on, not reports to file away.\"*`,
      sectionId: 'contact',
      sectionLabel: 'Discuss a Finance Challenge',
      showBookingForm: true,
      chips: ['🤝 Book ₹501 Session', '📈 Marketing Services', 'Case Study 001']
    },

    solar_agrivoltaics: {
      triggers: ['solar', 'agrivoltaics', '8 mw', 'power plant', 'renewables', 'green energy', 'clean energy', 'dream project'],
      reply: `**Flagship Venture: The 8 MW Agrivoltaics Power Plant**\n\n- **Dual-Purpose Land**: Agrivoltaics integrates high-efficiency solar panels above agricultural farming land, allowing the ground to harvest **both clean energy and food crops simultaneously**.\n- **Status**: Land secured, final funding sign-off currently in progress.\n- **Capacity**: Scalable up to **8 MW**.\n- **Turnkey Delivery**: Designed for Indian enterprises and industrial partners seeking captive, cost-effective green energy anywhere in India.`,
      sectionId: 'dream',
      sectionLabel: 'View 8 MW Dream Project',
      chips: ['Ask About Solar Plant', '🤝 Book ₹501 Session', '📜 Buddhi Rules']
    },

    booking_contact: {
      triggers: ['book', 'consultation', 'fee', 'charge', 'cost', 'price', '501', 'contact', 'email', 'phone', 'whatsapp', 'hire', 'appointment', 'meeting'],
      reply: `Booking a 1-on-1 strategy session with **Deepak Jain** is direct and transparent:\n\n**The 3-Step Process**:\n1. **Share your challenge**: Let us know your name, company, and primary bottleneck (Finance, Marketing, IT, or Solar).\n2. **Specialist Alignment**: We route the engagement to our dedicated subject specialist.\n3. **1-on-1 Strategy Session**: The initial consultation is priced at a nominal **₹501/-**.\n\nYou can use the interactive booking card below, or reach out instantly via WhatsApp:`,
      showBookingForm: true,
      showCTA: true,
      chips: ['Send on WhatsApp', 'Email ceo4wisdom@gmail.com', 'What happens next?']
    },

    book_publishing: {
      triggers: ['book', 'author', 'breaking walls', 'writing', 'women', 'legacy', 'mint', 'read', 'publishing'],
      reply: `**Upcoming Book: *Breaking Walls, Building Legacy***\n\n- **Author**: Written under the pen name **Buddhi**.\n- **Focus**: Chronicles the untold grit, spirit, and timeless business lessons of **10 legendary Indian women born in the 20th century**.\n- **Purpose**: Translating their historic *kaam* (work) into actionable playbooks for contemporary entrepreneurs, leaders, and founders.\n\nDeepak also regularly publishes business commentary in *Mint*, *Financial Times*, and *Free Press Journal*.`,
      sectionId: 'book',
      sectionLabel: 'Explore the Book Section',
      chips: ['👤 About Deepak Jain', '🎓 Gen Z Mentoring', '🤝 Book Consultation']
    },

    coming_soon: {
      triggers: ['coming soon', 'gen z', 'cohort', 'webinar', 'podcast', 'mentoring', 'classes', 'students', 'learning'],
      reply: `**Launching by the End of the Month**:\n\n1. 🎓 **Gen Z Online Mentoring Cohort**: Monthly interactive masterclasses focusing on practical business acumen, zero-BS entrepreneurship, and hands-on execution.\n2. 🎙️ **Webinars & Executive Podcasts**: Direct sessions with seasoned veterans sharing unvarnished career lessons.\n\nSlots for the inaugural Gen Z cohort are limited. You can reserve your spot directly via WhatsApp!`,
      sectionId: 'coming-soon',
      sectionLabel: 'View Coming Soon Initiatives',
      showCTA: true,
      chips: ['Join Gen Z Cohort', '👥 Careers & Internships', '🤝 Book Session']
    },

    careers_internships: {
      triggers: ['intern', 'internship', 'careers', 'job', 'part time', 'work with us', 'subject expert', 'collaborate', 'hiring'],
      reply: `We actively invite two types of collaborators to join the Buddhi network:\n\n- 👨‍💼 **Subject Experts (10+ Years Experience)**: Seasoned specialists in Legal, Corporate Finance, Solar, or Deep-Tech.\n- 🚀 **Interns & Aspiring Tech Minds**: High-curiosity individuals and professionals looking to earn and learn alongside veteran executives.\n\nReach out to **ceo4wisdom@gmail.com** or send a message via WhatsApp with your background.`,
      sectionId: 'contact',
      sectionLabel: 'View Collaboration Paths',
      showCTA: true,
      chips: ['Apply on WhatsApp', 'Email Resume', '🤝 Book Strategy Session']
    },

    hindustan_instruments: {
      triggers: ['hindustan instruments', 'computer components', '1968', '1986', 'bhel', 'grasim', 'atomic energy', 'space'],
      reply: `**Roots of Excellence: Hindustan Instruments & Computer Components**\n\n- **1968**: Founded by Deepak Jain's family, supplying specialized industrial instrumentation to BHEL, Grasim, and Atomic Energy/Space establishments.\n- **1986**: Deepak's father K.C. Jain established **Computer Components**, spearheading early computing solutions across corporate India before expanding into solar and executive consulting.\n- **2030**: Moving toward a public stock market listing (**IPO**).`,
      sectionId: 'journey',
      sectionLabel: 'Explore Hindustan Instruments Timeline',
      chips: ['👤 About Deepak Jain', '⚡ 8 MW Agrivoltaics', '💼 Consulting Services']
    },

    testimonials: {
      triggers: ['testimonial', 'clients', 'review', 'feedback', 'athreya', 'kamlesh', 'proof', 'reputation'],
      reply: `**What Industry Leaders Say About Deepak Jain**:\n\n> *\"Deepak ji brings clarity, execution, and practical wisdom. His guidance helped us focus on actions that produced measurable business results.\"*\n> — **Athreya Jaishankar**, Managing Director, HR Shop International\n\n> *\"Instead of complicated reports, we received practical direction and accountability. The visibility in our business performance improvement was immediate.\"*\n> — **Kamlesh Padhiyar**, CEO, Bharat Technologies and Supplies`,
      sectionId: 'testimonials',
      sectionLabel: 'Read All Testimonials',
      chips: ['Case Study 001', '🤝 Book ₹501 Session', '📜 Buddhi Rules']
    }
  };

  class BuddhiChatbot {
    constructor() {
      this.soundEnabled = true;
      this.isTyping = false;
      this.recognition = null;
      this.initSpeechRecognition();
      this.initUI();
      this.bindEvents();
      this.loadHistory();
      this.initProactiveWelcome();
    }

    initSpeechRecognition() {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (SpeechRecognition) {
        this.recognition = new SpeechRecognition();
        this.recognition.continuous = false;
        this.recognition.interimResults = false;
        this.recognition.lang = 'en-IN';
      }
    }

    initUI() {
      // 1. Proactive Welcome Toast (Floating above launcher)
      const toast = document.createElement('div');
      toast.id = 'buddhi-welcome-toast';
      toast.className = 'is-hidden';
      toast.innerHTML = `
        <div class="toast-avatar-box">
          ${BUDDHI_AVATAR_SVG}
          <span class="toast-online-dot"></span>
        </div>
        <div class="toast-content">
          <div class="toast-header-row">
            <span class="toast-name">Buddhi <span class="toast-badge">AI Advisor</span></span>
            <button type="button" class="toast-close-btn" id="buddhi-toast-close" title="Dismiss">✕</button>
          </div>
          <div class="toast-body" id="buddhi-toast-text">
            👋 Welcome! Need guidance on Debt, Marketing, or our ₹501 strategy session?
          </div>
          <button type="button" class="toast-action-btn" id="buddhi-toast-open">
            💬 Chat with Buddhi
          </button>
        </div>
      `;
      document.body.appendChild(toast);

      // 2. Floating Launcher Button
      const launcher = document.createElement('button');
      launcher.id = 'buddhi-chat-launcher';
      launcher.type = 'button';
      launcher.setAttribute('aria-label', 'Open Buddhi AI Assistant');
      launcher.innerHTML = `
        <span class="chat-badge-pulse"></span>
        <div class="launcher-avatar-svg">
          ${BUDDHI_AVATAR_SVG}
        </div>
        <div class="launcher-close-icon">✕</div>
        <span class="launcher-tooltip">Ask Buddhi · AI Advisor</span>
      `;
      document.body.appendChild(launcher);

      // 3. Chat Window
      const windowEl = document.createElement('div');
      windowEl.id = 'buddhi-chat-window';
      windowEl.setAttribute('aria-hidden', 'true');
      windowEl.innerHTML = `
        <div class="chat-header">
          <div class="chat-header-info">
            <div class="chat-avatar-frame">
              ${BUDDHI_AVATAR_SVG}
              <span class="chat-avatar-status"></span>
            </div>
            <div class="chat-header-text">
              <h3>Buddhi <span style="font-size:0.75rem; color:#E4C784;">AI</span></h3>
              <p>Deepak Jain Strategy Hub · ₹501 Advisory</p>
            </div>
          </div>
          <div class="chat-header-actions">
            <button class="chat-header-btn" id="buddhi-chat-sound" title="Toggle audio chime">🔔</button>
            <button class="chat-header-btn" id="buddhi-chat-clear" title="Clear chat history">🗑️</button>
            <button class="chat-header-btn" id="buddhi-chat-close" title="Close chat">✕</button>
          </div>
        </div>

        <div class="chat-messages" id="buddhi-chat-messages">
          <!-- Dynamic conversation rows -->
        </div>

        <div class="chat-suggestions" id="buddhi-chat-suggestions">
          <button type="button" class="suggestion-pill" data-prompt="What consulting services do you offer?">💼 Services</button>
          <button type="button" class="suggestion-pill" data-prompt="Tell me about Deepak Jain and his experience">👤 Deepak Jain</button>
          <button type="button" class="suggestion-pill" data-prompt="What are the Buddhi Framework rules?">📜 Buddhi Rules</button>
          <button type="button" class="suggestion-pill" data-prompt="How do I book a consultation? What is the fee?">🤝 Book Session (₹501)</button>
          <button type="button" class="suggestion-pill" data-prompt="Tell me about the 8 MW Agrivoltaics power plant">⚡ 8 MW Solar</button>
          <button type="button" class="suggestion-pill" data-prompt="What is the new book in the works?">📖 Breaking Walls</button>
          <button type="button" class="suggestion-pill" data-prompt="Tell me about Case Study 001 with Tanuj">🎬 Film Case Study</button>
        </div>

        <form class="chat-input-area" id="buddhi-chat-form">
          <button type="button" class="chat-mic-btn" id="buddhi-mic-btn" title="Speak to Buddhi (Voice Input)">
            🎤
          </button>
          <input type="text" class="chat-input" id="buddhi-chat-input" placeholder="Ask Buddhi about finance, rules, booking..." autocomplete="off" required />
          <button type="submit" class="chat-send-btn" id="buddhi-chat-send" aria-label="Send message">
            <svg viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
          </button>
        </form>
        <div class="chat-footer-note">Buddhi Strategy Framework · Powered by 40+ Years of Business Experience</div>
      `;
      document.body.appendChild(windowEl);

      this.toast = toast;
      this.toastClose = toast.querySelector('#buddhi-toast-close');
      this.toastOpen = toast.querySelector('#buddhi-toast-open');
      this.toastText = toast.querySelector('#buddhi-toast-text');

      this.launcher = launcher;
      this.window = windowEl;
      this.messagesContainer = windowEl.querySelector('#buddhi-chat-messages');
      this.suggestionsContainer = windowEl.querySelector('#buddhi-chat-suggestions');
      this.input = windowEl.querySelector('#buddhi-chat-input');
      this.form = windowEl.querySelector('#buddhi-chat-form');
      this.soundBtn = windowEl.querySelector('#buddhi-chat-sound');
      this.clearBtn = windowEl.querySelector('#buddhi-chat-clear');
      this.closeBtn = windowEl.querySelector('#buddhi-chat-close');
      this.micBtn = windowEl.querySelector('#buddhi-mic-btn');
    }

    initProactiveWelcome() {
      // Don't show toast if user has previously dismissed it this session or opened chat
      const dismissed = sessionStorage.getItem('buddhi_toast_dismissed');
      const chatOpened = sessionStorage.getItem('buddhi_chat_opened');

      if (!dismissed && !chatOpened) {
        setTimeout(() => {
          if (!this.window.classList.contains('is-open') && sessionStorage.getItem('buddhi_toast_dismissed') !== 'true') {
            const hour = new Date().getHours();
            let salutation = 'Good day';
            if (hour < 12) salutation = 'Good morning';
            else if (hour < 17) salutation = 'Good afternoon';
            else salutation = 'Good evening';

            this.toastText.innerHTML = `👋 <strong>${salutation}!</strong> I'm <strong>Buddhi</strong>, Deepak Jain's strategy advisor. Exploring debt relief, marketing, or our ₹501 consultation?`;
            this.toast.classList.remove('is-hidden');
            this.toast.classList.add('is-visible');
            this.toast.style.display = 'flex';
            this.playChime();
          }
        }, 2600);
      }
    }

    bindEvents() {
      // Toast triggers
      this.toastOpen.addEventListener('click', (e) => {
        this.dismissToast(e);
        this.toggleChat(true);
      });
      this.toastClose.addEventListener('click', (e) => this.dismissToast(e));
      this.toastClose.addEventListener('touchend', (e) => this.dismissToast(e));

      // Toggle chat
      this.launcher.addEventListener('click', () => {
        this.dismissToast();
        this.toggleChat();
      });
      this.closeBtn.addEventListener('click', (e) => {
        if (e) {
          e.preventDefault();
          e.stopPropagation();
        }
        this.toggleChat(false);
      });
      this.closeBtn.addEventListener('touchend', (e) => {
        if (e) {
          e.preventDefault();
          e.stopPropagation();
        }
        this.toggleChat(false);
      });

      // Sound toggle
      this.soundBtn.addEventListener('click', () => {
        this.soundEnabled = !this.soundEnabled;
        this.soundBtn.textContent = this.soundEnabled ? '🔔' : '🔕';
        this.soundBtn.title = this.soundEnabled ? 'Sound enabled' : 'Sound muted';
      });

      // Clear history
      this.clearBtn.addEventListener('click', () => {
        if (confirm('Clear chat history with Buddhi?')) {
          sessionStorage.removeItem('buddhi_chat_history');
          this.messagesContainer.innerHTML = '';
          this.sendGreeting();
        }
      });

      // Form submission
      this.form.addEventListener('submit', (e) => {
        e.preventDefault();
        const text = this.input.value.trim();
        if (!text || this.isTyping) return;
        this.handleUserMessage(text);
        this.input.value = '';
      });

      // Voice Input (Microphone)
      if (this.recognition && this.micBtn) {
        this.recognition.onstart = () => {
          this.micBtn.classList.add('is-listening');
          this.input.placeholder = 'Listening to you...';
        };
        this.recognition.onend = () => {
          this.micBtn.classList.remove('is-listening');
          this.input.placeholder = 'Ask Buddhi about finance, rules, booking...';
        };
        this.recognition.onresult = (event) => {
          const transcript = event.results[0][0].transcript;
          if (transcript) {
            this.input.value = transcript;
            this.handleUserMessage(transcript);
            this.input.value = '';
          }
        };
        this.recognition.onerror = () => {
          this.micBtn.classList.remove('is-listening');
          this.input.placeholder = 'Ask Buddhi about finance, rules, booking...';
        };

        this.micBtn.addEventListener('click', () => {
          try {
            if (this.micBtn.classList.contains('is-listening')) {
              this.recognition.stop();
            } else {
              this.recognition.start();
            }
          } catch (e) {
            console.error('Speech recognition error:', e);
          }
        });
      } else if (this.micBtn) {
        this.micBtn.style.display = 'none';
      }

      // Dynamic suggestion pills delegation
      this.suggestionsContainer.addEventListener('click', (e) => {
        const pill = e.target.closest('.suggestion-pill');
        if (pill && !this.isTyping) {
          const prompt = pill.getAttribute('data-prompt') || pill.textContent.trim();
          this.handleUserMessage(prompt);
        }
      });

      // Escape key to close
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && this.window.classList.contains('is-open')) {
          this.toggleChat(false);
        }
      });
    }

    dismissToast(e) {
      if (e) {
        e.preventDefault();
        e.stopPropagation();
      }
      if (!this.toast) return;
      this.toast.classList.remove('is-visible');
      this.toast.classList.add('is-hidden');
      this.toast.style.display = 'none';
      sessionStorage.setItem('buddhi_toast_dismissed', 'true');
    }

    toggleChat(forceState) {
      const isOpen = forceState !== undefined ? forceState : !this.window.classList.contains('is-open');
      if (isOpen) {
        this.dismissToast();
        this.window.classList.add('is-open');
        this.launcher.classList.add('is-active');
        this.window.setAttribute('aria-hidden', 'false');
        sessionStorage.setItem('buddhi_chat_opened', 'true');
        setTimeout(() => this.input.focus(), 150);
      } else {
        this.window.classList.remove('is-open');
        this.launcher.classList.remove('is-active');
        this.window.setAttribute('aria-hidden', 'true');
      }
    }

    playChime() {
      if (!this.soundEnabled) return;
      try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (!AudioContext) return;
        const ctx = new AudioContext();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(659.25, ctx.currentTime); // E5
        osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.12); // A5
        gain.gain.setValueAtTime(0.08, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.25);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.26);
      } catch (e) {}
    }

    speakText(rawText) {
      if (!('speechSynthesis' in window)) return;
      window.speechSynthesis.cancel();
      const plain = rawText.replace(/[*_#`[\]()]/g, '');
      const utterance = new SpeechSynthesisUtterance(plain);
      utterance.lang = 'en-IN';
      utterance.rate = 1.0;
      window.speechSynthesis.speak(utterance);
    }

    loadHistory() {
      const saved = sessionStorage.getItem('buddhi_chat_history');
      if (saved) {
        try {
          const msgs = JSON.parse(saved);
          if (msgs.length === 0) {
            this.sendGreeting();
          } else {
            msgs.forEach((m) => this.renderMessage(m.sender, m.text, m.meta, false));
          }
        } catch (e) {
          this.sendGreeting();
        }
      } else {
        this.sendGreeting();
      }
    }

    saveHistory(sender, text, meta = {}) {
      try {
        const saved = sessionStorage.getItem('buddhi_chat_history');
        const msgs = saved ? JSON.parse(saved) : [];
        msgs.push({ sender, text, meta, time: new Date().toISOString() });
        sessionStorage.setItem('buddhi_chat_history', JSON.stringify(msgs));
      } catch (e) {}
    }

    sendGreeting() {
      const { reply, chips } = KNOWLEDGE_BASE.greetings.handler();
      this.renderMessage('bot', reply, { chips }, true);
    }

    handleUserMessage(text) {
      this.renderMessage('user', text, {}, true);
      this.saveHistory('user', text);

      // Typing animation
      const typingEl = this.showTyping();
      this.isTyping = true;

      setTimeout(() => {
        typingEl.remove();
        const response = this.generateResponse(text);
        this.isTyping = false;
        this.renderTypewriterBotMessage(response.reply, response);
        this.saveHistory('bot', response.reply, response);
        this.playChime();

        if (response.chips) {
          this.updateSuggestions(response.chips);
        }
      }, 550);
    }

    updateSuggestions(chips) {
      if (!chips || !chips.length) return;
      this.suggestionsContainer.innerHTML = chips
        .map((chip) => `<button type="button" class="suggestion-pill" data-prompt="${chip}">${chip}</button>`)
        .join('');
    }

    generateResponse(rawQuery) {
      const q = rawQuery.toLowerCase().trim();

      // Check special interactive booking triggers
      if (q.includes('book') || q.includes('501') || q.includes('appointment') || q.includes('schedule') || q.includes('hire')) {
        return {
          reply: KNOWLEDGE_BASE.booking_contact.reply,
          showBookingForm: true,
          showCTA: true,
          chips: ['Send on WhatsApp', 'Email ceo4wisdom@gmail.com', '💼 View Services']
        };
      }

      // Check keyword triggers across knowledge base with scoring
      let bestMatch = null;
      let maxScore = 0;

      for (const [key, category] of Object.entries(KNOWLEDGE_BASE)) {
        if (!category.triggers) continue;
        let score = 0;
        for (const trigger of category.triggers) {
          if (q === trigger) {
            score += 15;
          } else if (q.includes(trigger)) {
            score += trigger.split(' ').length * 3;
          }
        }
        if (score > maxScore) {
          maxScore = score;
          bestMatch = category;
        }
      }

      if (bestMatch && maxScore > 0) {
        const reply = typeof bestMatch.reply === 'function' ? bestMatch.reply() : (bestMatch.reply || (bestMatch.handler && bestMatch.handler().reply));
        return {
          reply,
          sectionId: bestMatch.sectionId,
          sectionLabel: bestMatch.sectionLabel,
          showBookingForm: bestMatch.showBookingForm,
          showCTA: bestMatch.showCTA,
          chips: bestMatch.chips || ['💼 Services', '📜 Buddhi Rules', '🤝 Book Session (₹501)']
        };
      }

      // Smart dynamic fallback
      return {
        reply: `Thank you for asking. Deepak Jain and the **Buddhi Framework** specialize in practical, results-driven solutions across **Finance & Debt Restructuring**, **Marketing**, **Renewables (Solar)**, and **IT/AI**.\n\nEvery engagement starts with understanding your exact numbers and bottleneck. Would you like to:\n- Discuss your business challenge directly in a **₹501/- strategy session**?\n- Explore our **Buddhi Framework Rules**?\n- Or review **Case Study 001**?`,
        showBookingForm: true,
        showCTA: true,
        chips: ['🤝 Book ₹501 Session', '📜 Buddhi Rules', 'Case Study 001', '☀️ 8 MW Solar Plant']
      };
    }

    renderTypewriterBotMessage(fullText, meta = {}) {
      const row = document.createElement('div');
      row.className = 'msg-row bot';

      row.innerHTML = `
        <div class="msg-avatar">
          ${BUDDHI_AVATAR_SVG}
        </div>
        <div class="msg-bubble-container">
          <div class="msg-sender-name">Buddhi · Strategy Advisor</div>
          <div class="msg-bubble"></div>
          <div class="msg-meta-row">
            <span class="msg-time"></span>
            <button type="button" class="msg-listen-btn" title="Listen to Buddhi">🔊 Listen</button>
          </div>
        </div>
      `;

      this.messagesContainer.appendChild(row);
      const bubble = row.querySelector('.msg-bubble');
      const timeEl = row.querySelector('.msg-time');
      const listenBtn = row.querySelector('.msg-listen-btn');

      const now = new Date();
      timeEl.textContent = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;

      listenBtn.addEventListener('click', () => this.speakText(fullText));

      // Fast, smooth typing effect
      let idx = 0;
      const speed = fullText.length > 250 ? 4 : 8;
      const timer = setInterval(() => {
        idx += 3;
        if (idx >= fullText.length) {
          idx = fullText.length;
          clearInterval(timer);
          bubble.innerHTML = this.formatMarkdown(fullText);
          this.appendMetaElements(bubble, meta);
        } else {
          bubble.innerHTML = this.formatMarkdown(fullText.substring(0, idx)) + '<span style="border-right: 2px solid var(--accent-strong); margin-left: 2px;"></span>';
        }
        this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
      }, speed);
    }

    renderMessage(sender, text, meta = {}, scroll = true) {
      const row = document.createElement('div');
      row.className = `msg-row ${sender}`;

      const avatarHtml = sender === 'bot' 
        ? `<div class="msg-avatar">${BUDDHI_AVATAR_SVG}</div>` 
        : '';

      const senderTitle = sender === 'bot' ? 'Buddhi · Strategy Advisor' : 'You';

      row.innerHTML = `
        ${avatarHtml}
        <div class="msg-bubble-container">
          <div class="msg-sender-name">${senderTitle}</div>
          <div class="msg-bubble">${this.formatMarkdown(text)}</div>
          <div class="msg-meta-row">
            <span class="msg-time"></span>
            ${sender === 'bot' ? '<button type="button" class="msg-listen-btn" title="Listen to Buddhi">🔊 Listen</button>' : ''}
          </div>
        </div>
      `;

      const bubble = row.querySelector('.msg-bubble');
      const timeEl = row.querySelector('.msg-time');
      const listenBtn = row.querySelector('.msg-listen-btn');

      const now = new Date();
      timeEl.textContent = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;

      if (listenBtn) {
        listenBtn.addEventListener('click', () => this.speakText(text));
      }

      if (sender === 'bot') {
        this.appendMetaElements(bubble, meta);
      }

      this.messagesContainer.appendChild(row);
      if (scroll) {
        this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
      }
    }

    appendMetaElements(bubble, meta) {
      // 1. Jump to in-page section link
      if (meta.sectionId) {
        const link = document.createElement('a');
        link.className = 'jump-section-btn';
        link.href = `#${meta.sectionId}`;
        link.innerHTML = `📍 ${meta.sectionLabel || 'Jump to Section on Page'} ↗`;
        link.addEventListener('click', (e) => {
          e.preventDefault();
          const target = document.getElementById(meta.sectionId);
          if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
            if (window.innerWidth <= 600) {
              this.toggleChat(false);
            }
          }
        });
        bubble.appendChild(link);
      }

      // 2. Interactive Lead Capture Booking Card
      if (meta.showBookingForm) {
        const bookingCard = document.createElement('div');
        bookingCard.className = 'chat-booking-card';
        bookingCard.innerHTML = `
          <div class="booking-card-title">🤝 Schedule ₹501 Strategy Session with Deepak Jain</div>
          <div class="booking-input-row">
            <label>Your Name *</label>
            <input type="text" class="booking-field b-name" placeholder="e.g. Rahul Sharma" required />
          </div>
          <div class="booking-input-row">
            <label>Company / Challenge *</label>
            <input type="text" class="booking-field b-challenge" placeholder="e.g. Debt Restructuring / Solar Advisory" required />
          </div>
          <div class="booking-input-row">
            <label>Phone / WhatsApp *</label>
            <input type="tel" class="booking-field b-phone" placeholder="e.g. +91 98765 43210" required />
          </div>
          <button type="button" class="booking-submit-btn">Send Details via WhatsApp</button>
        `;

        const submitBtn = bookingCard.querySelector('.booking-submit-btn');
        submitBtn.addEventListener('click', () => {
          const name = bookingCard.querySelector('.b-name').value.trim();
          const challenge = bookingCard.querySelector('.b-challenge').value.trim();
          const phone = bookingCard.querySelector('.b-phone').value.trim();

          if (!name || !challenge || !phone) {
            alert('Please fill in your Name, Challenge, and Phone number.');
            return;
          }

          const msg = `Hello Deepak ji, I am ${name}. My company/challenge: ${challenge}. Contact: ${phone}. I would like to schedule the ₹501 consultation session via Buddhi Framework.`;
          const waUrl = `https://wa.me/918591250348?text=${encodeURIComponent(msg)}`;
          window.open(waUrl, '_blank');

          bookingCard.innerHTML = `
            <div style="color:#22c55e; font-weight:700; font-size:0.85rem;">
              ✅ Details ready! Redirecting to WhatsApp desk...
            </div>
            <p style="margin:4px 0 0; font-size:0.78rem; color:var(--text-soft);">
              Deepak Jain's team will confirm your ₹501 slot shortly.
            </p>
          `;
        });

        bubble.appendChild(bookingCard);
      }

      // 3. Direct Contact CTAs
      if (meta.showCTA) {
        const ctaBox = document.createElement('div');
        ctaBox.className = 'msg-cta-box';
        ctaBox.innerHTML = `
          <div class="cta-title">Direct Contact Channels</div>
          <div style="display:flex; gap:8px; flex-wrap:wrap;">
            <a href="https://wa.me/918591250348?text=Hello%20Deepak%20ji,%20I%20would%20like%20to%20discuss%20a%20business%20challenge." target="_blank" rel="noopener noreferrer" class="chat-action-btn wa-btn">
              💬 WhatsApp Desk
            </a>
            <a href="mailto:ceo4wisdom@gmail.com?subject=Consulting%20Inquiry%20via%20Buddhi%20Framework" class="chat-action-btn email-btn">
              ✉️ ceo4wisdom@gmail.com
            </a>
          </div>
        `;
        bubble.appendChild(ctaBox);
      }
    }

    showTyping() {
      const typing = document.createElement('div');
      typing.className = 'msg-row bot';
      typing.innerHTML = `
        <div class="msg-avatar">${BUDDHI_AVATAR_SVG}</div>
        <div class="msg-bubble-container">
          <div class="msg-sender-name">Buddhi · Strategy Advisor</div>
          <div class="typing-indicator">
            <div class="typing-dot"></div>
            <div class="typing-dot"></div>
            <div class="typing-dot"></div>
          </div>
        </div>
      `;
      this.messagesContainer.appendChild(typing);
      this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
      return typing;
    }

    formatMarkdown(text) {
      let html = text
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
        .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');

      const lines = html.split('\n');
      let inList = false;
      let result = [];

      for (let line of lines) {
        const trimmed = line.trim();
        if (trimmed.startsWith('- ')) {
          if (!inList) {
            result.push('<ul>');
            inList = true;
          }
          result.push(`<li>${trimmed.substring(2)}</li>`);
        } else {
          if (inList) {
            result.push('</ul>');
            inList = false;
          }
          if (trimmed.length > 0) {
            result.push(`<p style="margin: 0 0 6px 0;">${trimmed}</p>`);
          }
        }
      }
      if (inList) result.push('</ul>');

      return result.join('');
    }
  }

  // Initialize once DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => new BuddhiChatbot());
  } else {
    new BuddhiChatbot();
  }
})();

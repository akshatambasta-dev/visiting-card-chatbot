/**
 * BUDDHI AI CHATBOT ENGINE
 * Deepak Jain Consulting & Buddhi Framework
 * Self-contained knowledge engine with dynamic semantic retrieval
 */

(function () {
  'use strict';

  // Comprehensive Knowledge Base
  const KB = {
    greetings: {
      triggers: ['hi', 'hello', 'hey', 'greetings', 'namaste', 'morning', 'afternoon', 'evening'],
      reply: `Namaste! Welcome to **Deepak Jain's Strategy Hub** & the **Buddhi Framework**.\n\nI can answer questions regarding:\n- 💼 **Consulting Services** (Finance, Marketing, IT/AI, Renewables)\n- 📜 **Buddhi Framework Rules & Case Studies**\n- 🤝 **Consultation Booking** (First session: ₹501/-)\n- ⚡ **8 MW Agrivoltaics Power Plant** (Dream Project)\n- 📖 **The Book**: *Breaking Walls, Building Legacy*\n- 👥 **Careers & Internships**\n\nHow can I help you today?`
    },
    about_deepak: {
      triggers: ['who is deepak', 'about deepak', 'background', 'experience', 'credentials', 'who are you', 'profile'],
      reply: `**Deepak Jain** brings **40+ years of hands-on business experience** across multiple sectors.\n\nKey Highlights:\n- **1968**: Family founded **Hindustan Instruments**, supplying equipment to BHEL, Grasim, and Space/Atomic Energy departments.\n- **1986**: Deepak joined the family business, and his father K.C. Jain established **Computer Components**.\n- **2009**: Stepped into the CEO role, clearing debt, fixing cash flow, and building the consultancy practice.\n- **2030 Target**: Leading the company toward a stock market listing (**IPO**).\n- Author, observer, and local journalist (featured in *Mint*, *Financial Times*, and *Free Press Journal*).`
    },
    buddhi_framework: {
      triggers: ['buddhi', 'buddhi framework', 'methodology', 'rules', 'philosophy', 'how do you work'],
      reply: `The **Buddhi Framework** combines 40+ years of seasoned business experience with modern technology and execution.\n\nTwo core rules we work by:\n- **Rule No. 78**: *"Overthinking kills deals. Simple execution closes them."*\n- **Rule No. 80**: *"Look after everyone, from the junior teammate to the biggest client. That is how you grow a company and your career."*\n\nUnlike traditional consulting that leaves you with bulky theoretical reports, Buddhi delivers **practical direction, real accountability, and measurable results**.`
    },
    case_study: {
      triggers: ['case study', 'tanuj', 'film', 'product placement', '60 lakh', 'example', 'results'],
      reply: `**Case Study 001 · The Buddhi Approach**\n\n- **Problem**: Tanuj, an independent filmmaker, needed **₹60 lakh**. Traditional investor talks were slow, and strain on private debt was mounting.\n- **Process**: We reviewed the script and financials, applying Buddhi Framework Rule No. 78 (*Simple execution closes deals*).\n- **Solution**: Shifted the strategy to **in-film product placement**, allowing the screen itself to generate revenue before release and drastically lowering debt reliance.`
    },
    services: {
      triggers: ['services', 'what do you do', 'consulting', 'areas', 'pillars', 'help'],
      reply: `We provide hands-on consulting across **Four Core Pillars**:\n\n1. 💰 **Finance**: Restructuring debt, cash flow clarity, pricing strategies, and actionable financial planning.\n2. 📈 **Marketing**: Brand positioning, visibility, lead generation, and creative deal structuring (e.g. in-film placement).\n3. ☀️ **Renewables**: Practical solar energy advisory, green transitions, and agrivoltaics (farming + solar).\n4. 💻 **Information Technology & AI**: Modern system architecture, AI implementation, and practical IT delivery.\n\nWhich area is your business currently facing challenges in?`
    },
    booking_contact: {
      triggers: ['book', 'consultation', 'fee', 'charge', 'cost', 'meeting', 'price', '501', 'contact', 'email', 'phone', 'whatsapp', 'hire'],
      reply: `Starting an engagement with Deepak Jain is straightforward:\n\n**The 3-Step Process**:\n1. **Send your challenge**: Share your name, company, and key obstacle (Finance, Marketing, or Tech).\n2. **Expert Match**: We route your inquiry to the ideal subject specialist.\n3. **1-on-1 Session**: The first meeting with the consultant is charged at a nominal **₹501/-**.\n\n**Get in touch directly:**\n- WhatsApp: Direct chat available\n- Email: **ceo4wisdom@gmail.com**`,
      showCTA: true
    },
    dream_project: {
      triggers: ['dream project', 'solar', 'agrivoltaics', '8 mw', 'power plant', 'clean energy', 'green energy'],
      reply: `**The Dream Project: 8 MW Agrivoltaics Power Plant**\n\n- **Concept**: Agrivoltaics combines solar panels with agricultural farming on the same land — so the land performs two productive jobs at once.\n- **Current Status**: Land secured, final funding sign-off currently in progress.\n- **Capacity**: Scalable up to **8 MW**.\n- **Availability**: Turnkey development for businesses wanting their own captive solar plants anywhere in India.`
    },
    book_author: {
      triggers: ['book', 'author', 'breaking walls', 'writing', 'women', 'legacy', 'mint', 'read'],
      reply: `**Book in the Works**: *Breaking Walls, Building Legacy*\n- **Author**: Written under the pen name **Buddhi**.\n- **Theme**: Explores the untold stories and timeless business/life lessons of **10 legendary Indian women born in the 20th century**.\n- **Objective**: Turning their resilience and *kaam* (work) into practical inspiration for modern entrepreneurs.\n\nDeepak also regularly publishes business commentary in *Mint*, *Financial Times*, and *Free Press Journal*.`
    },
    coming_soon: {
      triggers: ['coming soon', 'gen z', 'cohort', 'webinar', 'podcast', 'mentoring', 'classes'],
      reply: `**Coming by the End of the Month**:\n\n1. 🎓 **Gen Z Online Mentoring Cohort**: Monthly online classes focused on business, entrepreneurship, marketing, and real-world execution.\n2. 🎙️ **Webinars & Podcasts**: Interactive sessions where experienced industry veterans share raw lessons and insights from their careers.\n\nWant to join the first cohort? Connect with us via WhatsApp to reserve an early slot!`
    },
    careers_internships: {
      triggers: ['intern', 'internship', 'careers', 'job', 'part time', 'work with us', 'subject expert', 'collaborate'],
      reply: `We offer two dynamic ways to collaborate:\n\n- 👨‍💼 **Subject Experts**: 10+ years of proven domain experience in legal, finance, marketing, or technology.\n- 🚀 **Interns & Part-Time Professionals**: Opportunities for young talent and professionals looking to learn and earn alongside seasoned veterans.\n\nApply directly via WhatsApp or email **ceo4wisdom@gmail.com** with your background.`
    },
    hindustan_instruments: {
      triggers: ['hindustan instruments', 'history', '1968', '1986', 'computer components', 'bhel', 'grasim'],
      reply: `**Hindustan Instruments** was founded in **1968** by Deepak Jain's family, supplying high-precision equipment to BHEL, Grasim, and Indian government departments including Space and Atomic Energy.\n\nIn **1986**, Deepak joined and his father K.C. Jain launched **Computer Components**, navigating India's early computing revolution before expanding into solar and corporate consulting.`
    }
  };

  class BuddhiChatbot {
    constructor() {
      this.soundEnabled = true;
      this.initUI();
      this.bindEvents();
      this.loadHistory();
    }

    initUI() {
      // 1. Launcher button
      const launcher = document.createElement('button');
      launcher.id = 'buddhi-chat-launcher';
      launcher.type = 'button';
      launcher.setAttribute('aria-label', 'Open Buddhi AI Assistant');
      launcher.innerHTML = `
        <span class="chat-badge-pulse"></span>
        <div class="launcher-icon launcher-chat-icon">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        </div>
        <div class="launcher-icon launcher-close-icon">✕</div>
        <span class="launcher-tooltip">Ask Buddhi AI</span>
      `;
      document.body.appendChild(launcher);

      // 2. Chat Window
      const windowEl = document.createElement('div');
      windowEl.id = 'buddhi-chat-window';
      windowEl.setAttribute('aria-hidden', 'true');
      windowEl.innerHTML = `
        <div class="chat-header">
          <div class="chat-header-info">
            <div class="chat-avatar">B</div>
            <div class="chat-header-text">
              <h3>Buddhi Assistant</h3>
              <p>Deepak Jain · Strategy, Finance & IT</p>
            </div>
          </div>
          <div class="chat-header-actions">
            <button class="chat-header-btn" id="buddhi-chat-sound" title="Toggle audio chime">🔔</button>
            <button class="chat-header-btn" id="buddhi-chat-clear" title="Clear conversation">🗑️</button>
            <button class="chat-header-btn" id="buddhi-chat-close" title="Close chat">✕</button>
          </div>
        </div>

        <div class="chat-messages" id="buddhi-chat-messages">
          <!-- Messages will be injected here -->
        </div>

        <div class="chat-suggestions" id="buddhi-chat-suggestions">
          <button type="button" class="suggestion-pill" data-prompt="Tell me about Deepak Jain and his experience">👤 Deepak Jain</button>
          <button type="button" class="suggestion-pill" data-prompt="What consulting services do you offer?">💼 Services</button>
          <button type="button" class="suggestion-pill" data-prompt="What are the Buddhi Framework rules?">📜 Buddhi Rules</button>
          <button type="button" class="suggestion-pill" data-prompt="How do I book a consultation? What is the fee?">🤝 Book (₹501)</button>
          <button type="button" class="suggestion-pill" data-prompt="Tell me about the 8 MW Agrivoltaics power plant">⚡ 8 MW Solar</button>
          <button type="button" class="suggestion-pill" data-prompt="What is the new book in the works?">📖 Breaking Walls</button>
          <button type="button" class="suggestion-pill" data-prompt="How can I apply as an intern or subject expert?">👥 Work With Us</button>
        </div>

        <form class="chat-input-area" id="buddhi-chat-form">
          <input type="text" class="chat-input" id="buddhi-chat-input" placeholder="Ask about consulting, Buddhi rules, fees..." autocomplete="off" required />
          <button type="submit" class="chat-send-btn" id="buddhi-chat-send" aria-label="Send message">
            <svg viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
          </button>
        </form>
        <div class="chat-footer-note">Buddhi Intelligence Framework · Actionable Business Results</div>
      `;
      document.body.appendChild(windowEl);

      this.launcher = launcher;
      this.window = windowEl;
      this.messagesContainer = windowEl.querySelector('#buddhi-chat-messages');
      this.input = windowEl.querySelector('#buddhi-chat-input');
      this.form = windowEl.querySelector('#buddhi-chat-form');
      this.soundBtn = windowEl.querySelector('#buddhi-chat-sound');
      this.clearBtn = windowEl.querySelector('#buddhi-chat-clear');
      this.closeBtn = windowEl.querySelector('#buddhi-chat-close');
    }

    bindEvents() {
      // Toggle chat
      this.launcher.addEventListener('click', () => this.toggleChat());
      this.closeBtn.addEventListener('click', () => this.toggleChat(false));

      // Sound toggle
      this.soundBtn.addEventListener('click', () => {
        this.soundEnabled = !this.soundEnabled;
        this.soundBtn.textContent = this.soundEnabled ? '🔔' : '🔕';
        this.soundBtn.title = this.soundEnabled ? 'Sound enabled' : 'Sound muted';
      });

      // Clear conversation
      this.clearBtn.addEventListener('click', () => {
        if (confirm('Clear chat history?')) {
          sessionStorage.removeItem('buddhi_chat_history');
          this.messagesContainer.innerHTML = '';
          this.sendGreeting();
        }
      });

      // Form submission
      this.form.addEventListener('submit', (e) => {
        e.preventDefault();
        const text = this.input.value.trim();
        if (!text) return;
        this.handleUserMessage(text);
        this.input.value = '';
      });

      // Suggestion pills
      this.window.querySelectorAll('.suggestion-pill').forEach((pill) => {
        pill.addEventListener('click', () => {
          const prompt = pill.getAttribute('data-prompt');
          if (prompt) {
            this.handleUserMessage(prompt);
          }
        });
      });

      // Escape key to close
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && this.window.classList.contains('is-open')) {
          this.toggleChat(false);
        }
      });
    }

    toggleChat(forceState) {
      const isOpen = forceState !== undefined ? forceState : !this.window.classList.contains('is-open');
      if (isOpen) {
        this.window.classList.add('is-open');
        this.launcher.classList.add('is-active');
        this.window.setAttribute('aria-hidden', 'false');
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
        osc.frequency.setValueAtTime(587.33, ctx.currentTime); // D5
        osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.12); // A5
        gain.gain.setValueAtTime(0.08, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.22);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.24);
      } catch (e) {
        // AudioContext not allowed before user gesture
      }
    }

    loadHistory() {
      const saved = sessionStorage.getItem('buddhi_chat_history');
      if (saved) {
        try {
          const msgs = JSON.parse(saved);
          msgs.forEach((m) => this.renderMessage(m.sender, m.text, m.showCTA, false));
        } catch (e) {
          this.sendGreeting();
        }
      } else {
        this.sendGreeting();
      }
    }

    saveHistory(sender, text, showCTA) {
      try {
        const saved = sessionStorage.getItem('buddhi_chat_history');
        const msgs = saved ? JSON.parse(saved) : [];
        msgs.push({ sender, text, showCTA, time: new Date().toISOString() });
        sessionStorage.setItem('buddhi_chat_history', JSON.stringify(msgs));
      } catch (e) {}
    }

    sendGreeting() {
      this.renderMessage('bot', KB.greetings.reply, false, true);
    }

    handleUserMessage(text) {
      this.renderMessage('user', text, false, true);
      this.saveHistory('user', text, false);

      // Typing animation
      const typingEl = this.showTyping();

      setTimeout(() => {
        typingEl.remove();
        const { reply, showCTA } = this.generateResponse(text);
        this.renderMessage('bot', reply, showCTA, true);
        this.saveHistory('bot', reply, showCTA);
        this.playChime();
      }, 550);
    }

    generateResponse(rawQuery) {
      const q = rawQuery.toLowerCase().trim();

      // Check keyword triggers across knowledge base
      let bestMatch = null;
      let maxScore = 0;

      for (const [key, category] of Object.entries(KB)) {
        let score = 0;
        for (const trigger of category.triggers) {
          if (q === trigger) {
            score += 10;
          } else if (q.includes(trigger)) {
            score += trigger.split(' ').length * 2;
          }
        }
        if (score > maxScore) {
          maxScore = score;
          bestMatch = category;
        }
      }

      if (bestMatch && maxScore > 0) {
        return { reply: bestMatch.reply, showCTA: bestMatch.showCTA || false };
      }

      // Default smart fallback
      return {
        reply: `Thank you for asking. Deepak Jain and the **Buddhi Framework** specialize in practical, results-driven solutions across **Finance**, **Marketing**, **IT & AI**, and **Renewables**.\n\nFor specific guidance or customized strategy for your company, we recommend discussing your situation directly with Deepak Jain.\n\n- The first consultation is charged at **₹501/-**.\n- You can send your challenge directly via WhatsApp or email.`,
        showCTA: true
      };
    }

    renderMessage(sender, text, showCTA, scroll) {
      const row = document.createElement('div');
      row.className = `msg-row ${sender}`;

      const bubble = document.createElement('div');
      bubble.className = 'msg-bubble';
      bubble.innerHTML = this.formatMarkdown(text);

      if (showCTA) {
        const ctaBox = document.createElement('div');
        ctaBox.className = 'msg-cta-box';
        ctaBox.innerHTML = `
          <div class="cta-title">Direct Connection</div>
          <div style="display:flex; gap:8px; flex-wrap:wrap;">
            <a href="https://wa.me/919999999999?text=Hello%20Deepak%20ji,%20I%20would%20like%20to%20discuss%20a%20business%20challenge." target="_blank" rel="noopener noreferrer" class="chat-action-btn wa-btn">
              💬 WhatsApp
            </a>
            <a href="mailto:ceo4wisdom@gmail.com?subject=Consulting%20Inquiry%20via%20Buddhi%20Framework" class="chat-action-btn email-btn">
              ✉️ Email (ceo4wisdom@gmail.com)
            </a>
          </div>
        `;
        bubble.appendChild(ctaBox);
      }

      const time = document.createElement('div');
      time.className = 'msg-time';
      const now = new Date();
      time.textContent = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;

      row.appendChild(bubble);
      row.appendChild(time);
      this.messagesContainer.appendChild(row);

      if (scroll) {
        this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
      }
    }

    showTyping() {
      const typing = document.createElement('div');
      typing.className = 'msg-row bot';
      typing.innerHTML = `
        <div class="typing-indicator">
          <div class="typing-dot"></div>
          <div class="typing-dot"></div>
          <div class="typing-dot"></div>
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

      // Process lists and paragraphs
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

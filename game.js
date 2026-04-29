// ============================================
// BUBBLE WRAP GAME - ENHANCED VERSION 2.0
// ============================================

class BubbleWrapGame {
    constructor() {
        // Language translations
        this.translations = {
            en: {
                title: '🫧 Bubble Wrap',
                popped: 'Popped',
                allTime: 'All Time',
                time: 'Time',
                reset: '🔄 Reset',
                sound: '🔊 Sound',
                soundOff: '🔇 Sound',
                vibration: '📳 Vibration',
                vibrationOff: '📴 Vibration',
                theme: '🎨 Theme',
                settings: '⚙️ Settings',
                language: '🌐 EN',
                share: '📤 Share',
                footerClassic: 'Tap bubbles to pop them! 🎉',
                footerEndless: 'Endless mode - Bubbles regenerate! 🔄',
                footerTimed: 'Pop all bubbles before time runs out! ⏱️',
                settingsTitle: '⚙️ Settings',
                themeSection: '🎨 Theme',
                themePurple: 'Purple',
                themeOcean: 'Ocean',
                themeSunset: 'Sunset',
                themeForest: 'Forest',
                themeDark: 'Dark',
                sizeSection: '📏 Bubble Size',
                sizeSmall: 'Small',
                sizeMedium: 'Medium',
                sizeLarge: 'Large',
                modeSection: '🎮 Game Mode',
                modeClassic: 'Classic',
                modeTimed: 'Timed (30s)',
                modeEndless: 'Endless',
                statsSection: '📊 Statistics',
                totalPops: 'Total Pops',
                gamesCompleted: 'Games Completed',
                bestTime: 'Best Time',
                clearStats: 'Clear Stats',
                prefsSection: '🔊 Preferences',
                soundEffects: 'Sound Effects',
                vibrationPref: 'Vibration',
                comboMessages: 'Combo Messages',
                installTitle: 'Install Bubble Wrap',
                installDesc: 'Add to home screen for the best experience!',
                installBtn: 'Install',
                celebration: '🎉 All Popped! 🎉',
                completedIn: 'Completed in',
                timesUp: "Time's up! You popped",
                perfect: 'Perfect! You popped all',
                bubbles: 'bubbles',
                combo5: '🔥 5x Combo!',
                combo10: '⚡ 10x COMBO! ⚡',
                combo20: '💥 MEGA COMBO! 💥',
                shareText: 'I just popped {count} bubbles in Bubble Wrap! 🎉 Can you beat my score?'
            },
            zh: {
                title: '🫧 泡泡膜',
                popped: '已捏破',
                allTime: '总计',
                time: '时间',
                reset: '🔄 重置',
                sound: '🔊 声音',
                soundOff: '🔇 声音',
                vibration: '📳 震动',
                vibrationOff: '📴 震动',
                theme: '🎨 主题',
                settings: '⚙️ 设置',
                language: '🌐 中文',
                share: '📤 分享',
                footerClassic: '点击泡泡来捏破它们！🎉',
                footerEndless: '无尽模式 - 泡泡会重新生成！🔄',
                footerTimed: '在时间用完之前捏破所有泡泡！⏱️',
                settingsTitle: '⚙️ 设置',
                themeSection: '🎨 主题',
                themePurple: '紫色',
                themeOcean: '海洋',
                themeSunset: '日落',
                themeForest: '森林',
                themeDark: '暗色',
                sizeSection: '📏 泡泡大小',
                sizeSmall: '小',
                sizeMedium: '中',
                sizeLarge: '大',
                modeSection: '🎮 游戏模式',
                modeClassic: '经典',
                modeTimed: '计时 (30秒)',
                modeEndless: '无尽',
                statsSection: '📊 统计',
                totalPops: '总捏破数',
                gamesCompleted: '完成游戏数',
                bestTime: '最佳时间',
                clearStats: '清除统计',
                prefsSection: '🔊 偏好设置',
                soundEffects: '声音效果',
                vibrationPref: '震动',
                comboMessages: '连击消息',
                installTitle: '安装泡泡膜',
                installDesc: '添加到主屏幕以获得最佳体验！',
                installBtn: '安装',
                celebration: '🎉 全部捏破了！🎉',
                completedIn: '完成时间',
                timesUp: '时间到！你捏破了',
                perfect: '完美！你捏破了所有',
                bubbles: '个泡泡',
                combo5: '🔥 5连击！',
                combo10: '⚡ 10连击！⚡',
                combo20: '💥 超级连击！💥',
                shareText: '我在泡泡膜游戏中捏破了{count}个泡泡！🎉 你能打败我的分数吗？'
            }
        };

        this.currentLang = 'en';

        // DOM Elements
        this.bubbleGrid = document.getElementById('bubbleGrid');
        this.popCountElement = document.getElementById('popCount');
        this.totalCountElement = document.getElementById('totalCount');
        this.lifetimeCountElement = document.getElementById('lifetimeCount');
        this.progressBar = document.getElementById('progressBar');
        this.timerDisplay = document.getElementById('timerDisplay');
        this.timerValue = document.getElementById('timerValue');
        this.footerText = document.getElementById('footerText');

        // Buttons
        this.resetBtn = document.getElementById('resetBtn');
        this.soundToggle = document.getElementById('soundToggle');
        this.vibrationToggle = document.getElementById('vibrationToggle');
        this.themeBtn = document.getElementById('themeBtn');
        this.languageBtn = document.getElementById('languageBtn');
        this.settingsBtn = document.getElementById('settingsBtn');
        this.shareBtn = document.getElementById('shareBtn');

        // Modal Elements
        this.settingsModal = document.getElementById('settingsModal');
        this.closeSettings = document.getElementById('closeSettings');

        // Settings
        this.soundEnabled = document.getElementById('soundEnabled');
        this.vibrationEnabled = document.getElementById('vibrationEnabled');
        this.comboEnabled = document.getElementById('comboEnabled');
        this.clearStatsBtn = document.getElementById('clearStats');

        // PWA Install
        this.installPrompt = document.getElementById('installPrompt');
        this.installBtn = document.getElementById('installBtn');
        this.dismissInstall = document.getElementById('dismissInstall');
        this.deferredPrompt = null;

        // Confetti
        this.confettiCanvas = document.getElementById('confettiCanvas');
        this.confettiCtx = this.confettiCanvas.getContext('2d');

        // Game State
        this.popCount = 0;
        this.totalBubbles = 0;
        this.gameMode = 'classic'; // classic, timed, endless
        this.bubbleSize = 'medium'; // small, medium, large
        this.theme = 'purple';

        // Grid dimensions (initialized in calculateTotalBubbles)
        this.gridColumns = 10;
        this.gridRows = 6;
        this.bubbleSize_px = 55;
        this.gridGap = 8;

        // Audio Context (reused for all sounds)
        this.audioContext = null;

        // Timer
        this.timer = null;
        this.timeLeft = 30;
        this.startTime = null;

        // Combo System
        this.lastPopTime = 0;
        this.comboCount = 0;
        this.comboTimeout = null;

        // Statistics
        this.stats = this.loadStats();

        this.init();
    }

    // ============================================
    // INITIALIZATION
    // ============================================

    init() {
        this.loadSettings();
        this.calculateTotalBubbles();
        this.createBubbles();
        this.attachEventListeners();
        this.updateAllDisplays();
        this.setupPWA();
        this.updateTheme();
        this.resizeConfettiCanvas();
        this.initAds();
    }

    loadSettings() {
        const settings = JSON.parse(localStorage.getItem('bubbleWrapSettings')) || {};

        this.gameMode = settings.gameMode || 'classic';
        this.bubbleSize = settings.bubbleSize || 'medium';
        this.theme = settings.theme || 'purple';
        this.currentLang = settings.language || 'en';

        const soundEnabled = settings.soundEnabled !== undefined ? settings.soundEnabled : true;
        const vibrationEnabled = settings.vibrationEnabled !== undefined ? settings.vibrationEnabled : true;
        const comboEnabled = settings.comboEnabled !== undefined ? settings.comboEnabled : true;

        this.soundEnabled.checked = soundEnabled;
        this.vibrationEnabled.checked = vibrationEnabled;
        this.comboEnabled.checked = comboEnabled;

        // Update UI
        document.body.setAttribute('data-theme', this.theme);
        document.body.setAttribute('data-size', this.bubbleSize);

        this.updateControlButtons();
        this.updateSettingButtons();
        this.updateLanguage();
    }

    saveSettings() {
        const settings = {
            gameMode: this.gameMode,
            bubbleSize: this.bubbleSize,
            theme: this.theme,
            language: this.currentLang,
            soundEnabled: this.soundEnabled.checked,
            vibrationEnabled: this.vibrationEnabled.checked,
            comboEnabled: this.comboEnabled.checked
        };
        localStorage.setItem('bubbleWrapSettings', JSON.stringify(settings));
    }

    loadStats() {
        const stats = JSON.parse(localStorage.getItem('bubbleWrapStats')) || {
            totalPops: 0,
            gamesCompleted: 0,
            bestTime: null
        };
        return stats;
    }

    saveStats() {
        localStorage.setItem('bubbleWrapStats', JSON.stringify(this.stats));
        this.updateStatsDisplay();
    }

    // ============================================
    // BUBBLE CREATION & MANAGEMENT
    // ============================================

    calculateTotalBubbles() {
        const width = window.innerWidth;
        const height = window.innerHeight;

        // Measure actual UI element heights dynamically
        const header = document.querySelector('.header');
        const controls = document.querySelector('.controls');
        const footer = document.querySelector('.footer');

        const headerHeight = header ? header.offsetHeight : 180;
        const controlsHeight = controls ? controls.offsetHeight : 100;
        const footerHeight = footer ? footer.offsetHeight : 80;
        const containerPadding = 30; // Container top/bottom padding

        const reservedHeight = headerHeight + controlsHeight + footerHeight + containerPadding;
        const availableHeight = height - reservedHeight;

        let columns, bubbleSize, gap, gridPadding;

        // Determine bubble size and gap based on settings
        if (this.bubbleSize === 'small') {
            if (width <= 480) {
                bubbleSize = 38; gap = 4; columns = 6; gridPadding = 12;
            } else if (width <= 768) {
                bubbleSize = 40; gap = 5; columns = 7; gridPadding = 12;
            } else {
                bubbleSize = 42; gap = 6; columns = 12; gridPadding = 12;
            }
        } else if (this.bubbleSize === 'large') {
            if (width <= 480) {
                bubbleSize = 55; gap = 6; columns = 4; gridPadding = 15;
            } else if (width <= 768) {
                bubbleSize = 58; gap = 7; columns = 5; gridPadding = 15;
            } else {
                bubbleSize = 65; gap = 10; columns = 8; gridPadding = 15;
            }
        } else { // medium (default)
            if (width <= 480) {
                bubbleSize = 48; gap = 5; columns = 5; gridPadding = 10;
            } else if (width <= 768) {
                bubbleSize = 50; gap = 6; columns = 6; gridPadding = 12;
            } else if (width <= 1024) {
                bubbleSize = 54; gap = 7; columns = 8; gridPadding = 15;
            } else {
                bubbleSize = 55; gap = 8; columns = 10; gridPadding = 15;
            }
        }

        // Calculate maximum rows that fit without cutting off
        const effectiveHeight = availableHeight - (gridPadding * 2);
        const maxRows = Math.floor(effectiveHeight / (bubbleSize + gap));

        // Ensure at least 5 rows, but cap based on available space
        const rows = Math.max(5, Math.min(maxRows, 12));

        this.totalBubbles = columns * rows;
        this.totalCountElement.textContent = this.totalBubbles;

        // Store for CSS updates
        this.gridColumns = columns;
        this.gridRows = rows;
        this.bubbleSize_px = bubbleSize;
        this.gridGap = gap;
    }

    createBubbles() {
        // Update grid layout dynamically with exact pixel values
        this.bubbleGrid.style.gridTemplateColumns = `repeat(${this.gridColumns}, ${this.bubbleSize_px}px)`;
        this.bubbleGrid.style.gridTemplateRows = `repeat(${this.gridRows}, ${this.bubbleSize_px}px)`;
        this.bubbleGrid.style.gap = `${this.gridGap}px`;

        // Clear existing bubbles
        this.bubbleGrid.innerHTML = '';

        // Create new bubbles with staggered animation
        for (let i = 0; i < this.totalBubbles; i++) {
            const bubble = document.createElement('div');
            bubble.className = 'bubble';
            bubble.dataset.index = i;
            bubble.style.animationDelay = `${i * 0.01}s`;

            // Event listeners
            bubble.addEventListener('click', (e) => this.popBubble(e.target));
            bubble.addEventListener('touchstart', (e) => {
                e.preventDefault();
                this.popBubble(e.target);
            }, { passive: false });

            this.bubbleGrid.appendChild(bubble);
        }
    }

    // ============================================
    // POP BUBBLE LOGIC
    // ============================================

    popBubble(bubble) {
        if (!bubble.classList.contains('popped')) {
            // Mark as popped
            bubble.classList.add('popped');
            this.popCount++;

            // Update displays
            this.updateAllDisplays();

            // Play effects
            if (this.soundEnabled.checked) {
                this.playPopSound();
            }
            if (this.vibrationEnabled.checked) {
                this.vibrate(10);
            }

            // Combo system
            this.handleCombo();

            // Update stats
            this.stats.totalPops++;
            this.lifetimeCountElement.textContent = this.stats.totalPops;

            // Check completion
            if (this.gameMode === 'classic' || this.gameMode === 'timed') {
                if (this.popCount === this.totalBubbles) {
                    setTimeout(() => this.handleCompletion(), 300);
                }
            } else if (this.gameMode === 'endless') {
                // In endless mode, regenerate popped bubble after delay
                setTimeout(() => {
                    bubble.classList.remove('popped');
                    bubble.style.animation = 'bubbleInflate 0.4s ease-out';
                }, 2000);
            }
        }
    }

    // ============================================
    // COMBO SYSTEM
    // ============================================

    handleCombo() {
        const now = Date.now();
        const timeSinceLastPop = now - this.lastPopTime;
        const t = this.translations[this.currentLang];

        if (timeSinceLastPop < 500) { // 500ms window for combos
            this.comboCount++;

            if (this.comboCount === 5 && this.comboEnabled.checked) {
                this.showComboMessage(t.combo5);
            } else if (this.comboCount === 10 && this.comboEnabled.checked) {
                this.showComboMessage(t.combo10);
            } else if (this.comboCount === 20 && this.comboEnabled.checked) {
                this.showComboMessage(t.combo20);
            }
        } else {
            this.comboCount = 1;
        }

        this.lastPopTime = now;

        // Reset combo after inactivity
        clearTimeout(this.comboTimeout);
        this.comboTimeout = setTimeout(() => {
            this.comboCount = 0;
        }, 500);
    }

    showComboMessage(text) {
        const comboMsg = document.createElement('div');
        comboMsg.className = 'combo-message';
        comboMsg.textContent = text;
        document.body.appendChild(comboMsg);

        setTimeout(() => {
            comboMsg.remove();
        }, 1000);
    }

    // ============================================
    // AUDIO & HAPTICS
    // ============================================

    getAudioContext() {
        if (!this.audioContext) {
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
        }
        return this.audioContext;
    }

    playPopSound() {
        try {
            const ctx = this.getAudioContext();
            const oscillator = ctx.createOscillator();
            const gainNode = ctx.createGain();

            oscillator.connect(gainNode);
            gainNode.connect(ctx.destination);

            // Vary pitch slightly for variety
            const basePitch = 800;
            const variation = Math.random() * 200 - 100;
            oscillator.frequency.value = basePitch + variation;
            oscillator.type = 'sine';

            gainNode.gain.setValueAtTime(0.2, ctx.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);

            oscillator.start(ctx.currentTime);
            oscillator.stop(ctx.currentTime + 0.1);
        } catch (e) {
            console.log('Audio not available');
        }
    }

    vibrate(duration) {
        if (navigator.vibrate) {
            navigator.vibrate(duration);
        }
    }

    // ============================================
    // TIMER (for Timed Mode)
    // ============================================

    startTimer() {
        if (this.gameMode !== 'timed') return;

        this.startTime = Date.now();
        this.timeLeft = 30;
        this.timerDisplay.classList.remove('hidden');

        this.timer = setInterval(() => {
            this.timeLeft--;
            this.timerValue.textContent = this.timeLeft;

            if (this.timeLeft <= 10) {
                this.timerDisplay.classList.add('warning');
            }

            if (this.timeLeft <= 0) {
                this.endTimedMode();
            }
        }, 1000);
    }

    stopTimer() {
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }
    }

    endTimedMode() {
        this.stopTimer();

        const t = this.translations[this.currentLang];
        const score = this.popCount;
        const message = score === this.totalBubbles
            ? `🎉 ${t.perfect} ${score} ${t.bubbles}!`
            : `${t.timesUp} ${score}/${this.totalBubbles} ${t.bubbles}!`;

        this.showCelebration(message);

        setTimeout(() => {
            this.reset();
        }, 3000);
    }

    // ============================================
    // COMPLETION & CELEBRATION
    // ============================================

    handleCompletion() {
        this.stopTimer();

        // Calculate time
        const completionTime = this.gameMode === 'timed' && this.startTime
            ? ((Date.now() - this.startTime) / 1000).toFixed(1)
            : null;

        // Update stats
        this.stats.gamesCompleted++;
        if (completionTime && (!this.stats.bestTime || completionTime < this.stats.bestTime)) {
            this.stats.bestTime = completionTime;
        }
        this.saveStats();

        // Show celebration with translation
        const t = this.translations[this.currentLang];
        let message = t.celebration;
        if (completionTime) {
            message = `🎉 ${t.completedIn} ${completionTime}s! 🎉`;
        }

        this.showCelebration(message);
        this.launchConfetti();

        // Show interstitial ad every few completions
        this.gamesPlayed++;
        if (this.gamesPlayed % this.interstitialFrequency === 0) {
            this.showInterstitialAd();
        }
    }

    showCelebration(text) {
        const celebration = document.createElement('div');
        celebration.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: rgba(255, 255, 255, 0.95);
            padding: 30px 50px;
            border-radius: 20px;
            font-size: 1.8em;
            font-weight: bold;
            color: var(--primary-color);
            z-index: 1000;
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
            animation: celebration 0.5s ease-out;
            text-align: center;
        `;
        celebration.textContent = text;
        document.body.appendChild(celebration);

        setTimeout(() => {
            celebration.remove();
        }, 3000);
    }

    // ============================================
    // CONFETTI ANIMATION
    // ============================================

    resizeConfettiCanvas() {
        this.confettiCanvas.width = window.innerWidth;
        this.confettiCanvas.height = window.innerHeight;
    }

    launchConfetti() {
        const confetti = [];
        const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#6c5ce7', '#a29bfe'];

        // Create confetti pieces
        for (let i = 0; i < 100; i++) {
            confetti.push({
                x: Math.random() * this.confettiCanvas.width,
                y: -20,
                color: colors[Math.floor(Math.random() * colors.length)],
                radius: Math.random() * 6 + 2,
                velocity: {
                    x: (Math.random() - 0.5) * 4,
                    y: Math.random() * 5 + 2
                },
                rotation: Math.random() * 360,
                rotationSpeed: (Math.random() - 0.5) * 10
            });
        }

        // Animate confetti
        const animate = () => {
            this.confettiCtx.clearRect(0, 0, this.confettiCanvas.width, this.confettiCanvas.height);

            let stillFalling = false;

            confetti.forEach(piece => {
                piece.y += piece.velocity.y;
                piece.x += piece.velocity.x;
                piece.rotation += piece.rotationSpeed;
                piece.velocity.y += 0.1; // Gravity

                if (piece.y < this.confettiCanvas.height) {
                    stillFalling = true;
                }

                this.confettiCtx.save();
                this.confettiCtx.translate(piece.x, piece.y);
                this.confettiCtx.rotate(piece.rotation * Math.PI / 180);
                this.confettiCtx.fillStyle = piece.color;
                this.confettiCtx.fillRect(-piece.radius, -piece.radius, piece.radius * 2, piece.radius * 2);
                this.confettiCtx.restore();
            });

            if (stillFalling) {
                requestAnimationFrame(animate);
            } else {
                this.confettiCtx.clearRect(0, 0, this.confettiCanvas.width, this.confettiCanvas.height);
            }
        };

        animate();
    }

    // ============================================
    // RESET & UPDATE
    // ============================================

    reset() {
        this.popCount = 0;
        this.comboCount = 0;
        this.stopTimer();
        this.calculateTotalBubbles();
        this.createBubbles();
        this.updateAllDisplays();

        if (this.gameMode === 'timed') {
            this.startTimer();
        }

        this.saveStats();
    }

    updateAllDisplays() {
        this.popCountElement.textContent = this.popCount;
        this.totalCountElement.textContent = this.totalBubbles;
        this.lifetimeCountElement.textContent = this.stats.totalPops;

        // Progress bar
        const progress = (this.popCount / this.totalBubbles) * 100;
        this.progressBar.style.width = `${progress}%`;

        // Footer text with translation
        const t = this.translations[this.currentLang];
        if (this.gameMode === 'endless') {
            this.footerText.textContent = t.footerEndless;
        } else if (this.gameMode === 'timed') {
            this.footerText.textContent = t.footerTimed;
        } else {
            this.footerText.textContent = t.footerClassic;
        }
    }

    updateStatsDisplay() {
        document.getElementById('totalPops').textContent = this.stats.totalPops;
        document.getElementById('gamesCompleted').textContent = this.stats.gamesCompleted;
        document.getElementById('bestTime').textContent = this.stats.bestTime
            ? `${this.stats.bestTime}s`
            : '--';
    }

    updateControlButtons() {
        const t = this.translations[this.currentLang];

        // Update sound/vibration button states
        this.soundToggle.classList.toggle('disabled', !this.soundEnabled.checked);
        this.soundToggle.textContent = this.soundEnabled.checked ? t.sound : t.soundOff;

        this.vibrationToggle.classList.toggle('disabled', !this.vibrationEnabled.checked);
        this.vibrationToggle.textContent = this.vibrationEnabled.checked ? t.vibration : t.vibrationOff;
    }

    updateSettingButtons() {
        // Update theme buttons
        document.querySelectorAll('.theme-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.theme === this.theme);
        });

        // Update size buttons
        document.querySelectorAll('.size-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.size === this.bubbleSize);
        });

        // Update mode buttons
        document.querySelectorAll('.mode-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.mode === this.gameMode);
        });
    }

    // ============================================
    // THEME MANAGEMENT
    // ============================================

    updateTheme() {
        document.body.setAttribute('data-theme', this.theme);
    }

    changeTheme(newTheme) {
        this.theme = newTheme;
        this.updateTheme();
        this.updateSettingButtons();
        this.saveSettings();
    }

    changeBubbleSize(newSize) {
        this.bubbleSize = newSize;
        document.body.setAttribute('data-size', newSize);
        this.updateSettingButtons();
        this.reset();
        this.saveSettings();
    }

    changeGameMode(newMode) {
        this.gameMode = newMode;
        this.updateSettingButtons();
        this.reset();
        this.saveSettings();

        if (newMode === 'timed') {
            this.startTimer();
        } else {
            this.timerDisplay.classList.add('hidden');
        }
    }

    // ============================================
    // LANGUAGE MANAGEMENT
    // ============================================

    updateLanguage() {
        const t = this.translations[this.currentLang];

        // Update all elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (t[key]) {
                element.textContent = t[key];
            }
        });

        // Update language button text
        this.languageBtn.textContent = t.language;

        // Update footer text based on game mode
        this.updateAllDisplays();
    }

    toggleLanguage() {
        this.currentLang = this.currentLang === 'en' ? 'zh' : 'en';
        this.updateLanguage();
        this.saveSettings();
    }

    // ============================================
    // SHARE FUNCTIONALITY
    // ============================================

    async share() {
        const t = this.translations[this.currentLang];
        const shareText = t.shareText.replace('{count}', this.stats.totalPops);

        const shareData = {
            title: t.title,
            text: shareText,
            url: window.location.href
        };

        if (navigator.share) {
            try {
                await navigator.share(shareData);
            } catch (err) {
                console.log('Share cancelled');
            }
        } else {
            // Fallback: copy to clipboard
            const text = `${shareData.text} ${shareData.url}`;
            navigator.clipboard.writeText(text).then(() => {
                alert('Link copied to clipboard!');
            });
        }
    }

    // ============================================
    // AD MONETIZATION (AdMob/AdSense)
    // ============================================

    initAds() {
        // Initialize AdSense/AdMob ads
        // Wait a bit for the page to load
        setTimeout(() => {
            try {
                // Load top banner ad
                const topAd = document.querySelector('#topBannerAd .adsbygoogle');
                if (topAd && !topAd.hasAttribute('data-adsbygoogle-status')) {
                    (adsbygoogle = window.adsbygoogle || []).push({});
                }

                // Load bottom banner ad
                const bottomAd = document.querySelector('#bottomBannerAd .adsbygoogle');
                if (bottomAd && !bottomAd.hasAttribute('data-adsbygoogle-status')) {
                    (adsbygoogle = window.adsbygoogle || []).push({});
                }
            } catch (e) {
                console.log('Ads not loaded:', e);
            }
        }, 1000);

        // Track ad impressions for completion
        this.gamesPlayed = 0;
        this.interstitialFrequency = 3; // Show interstitial every 3 game completions
    }

    showInterstitialAd() {
        // This will show an interstitial ad after certain game completions
        // For now, this is a placeholder for future interstitial implementation
        console.log('Interstitial ad trigger point');

        // TODO: Implement actual interstitial ad when using AdMob for Android
        // or when using Google Ad Manager for web
    }

    // ============================================
    // PWA INSTALLATION
    // ============================================

    setupPWA() {
        // Show install prompt
        window.addEventListener('beforeinstallprompt', (e) => {
            e.preventDefault();
            this.deferredPrompt = e;

            // Show install prompt after 10 seconds
            setTimeout(() => {
                if (!window.matchMedia('(display-mode: standalone)').matches) {
                    this.installPrompt.classList.remove('hidden');
                }
            }, 10000);
        });

        // Handle app installed
        window.addEventListener('appinstalled', () => {
            this.installPrompt.classList.add('hidden');
            this.deferredPrompt = null;
        });
    }

    async installApp() {
        if (!this.deferredPrompt) return;

        this.deferredPrompt.prompt();
        const { outcome } = await this.deferredPrompt.userChoice;

        if (outcome === 'accepted') {
            this.installPrompt.classList.add('hidden');
        }

        this.deferredPrompt = null;
    }

    // ============================================
    // EVENT LISTENERS
    // ============================================

    attachEventListeners() {
        // Reset button
        this.resetBtn.addEventListener('click', () => this.reset());

        // Sound toggle
        this.soundToggle.addEventListener('click', () => {
            this.soundEnabled.checked = !this.soundEnabled.checked;
            this.updateControlButtons();
            this.saveSettings();
        });

        // Vibration toggle
        this.vibrationToggle.addEventListener('click', () => {
            this.vibrationEnabled.checked = !this.vibrationEnabled.checked;
            this.updateControlButtons();
            this.saveSettings();
        });

        // Theme button (quick cycle)
        this.themeBtn.addEventListener('click', () => {
            const themes = ['purple', 'ocean', 'sunset', 'forest', 'dark'];
            const currentIndex = themes.indexOf(this.theme);
            const nextIndex = (currentIndex + 1) % themes.length;
            this.changeTheme(themes[nextIndex]);
        });

        // Language button
        this.languageBtn.addEventListener('click', () => {
            this.toggleLanguage();
        });

        // Settings button
        this.settingsBtn.addEventListener('click', () => {
            this.settingsModal.classList.remove('hidden');
            this.updateStatsDisplay();
        });

        // Close settings
        this.closeSettings.addEventListener('click', () => {
            this.settingsModal.classList.add('hidden');
        });

        // Click outside modal to close
        this.settingsModal.addEventListener('click', (e) => {
            if (e.target === this.settingsModal) {
                this.settingsModal.classList.add('hidden');
            }
        });

        // Share button
        this.shareBtn.addEventListener('click', () => this.share());

        // Theme buttons in settings
        document.querySelectorAll('.theme-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                this.changeTheme(btn.dataset.theme);
            });
        });

        // Size buttons
        document.querySelectorAll('.size-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                this.changeBubbleSize(btn.dataset.size);
            });
        });

        // Mode buttons
        document.querySelectorAll('.mode-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                this.changeGameMode(btn.dataset.mode);
            });
        });

        // Clear stats
        this.clearStatsBtn.addEventListener('click', () => {
            if (confirm('Clear all statistics? This cannot be undone.')) {
                this.stats = {
                    totalPops: 0,
                    gamesCompleted: 0,
                    bestTime: null
                };
                this.saveStats();
                this.lifetimeCountElement.textContent = '0';
                this.updateStatsDisplay();
            }
        });

        // Settings checkboxes
        [this.soundEnabled, this.vibrationEnabled, this.comboEnabled].forEach(checkbox => {
            checkbox.addEventListener('change', () => {
                this.saveSettings();
                this.updateControlButtons();
            });
        });

        // PWA Install
        this.installBtn.addEventListener('click', () => this.installApp());
        this.dismissInstall.addEventListener('click', () => {
            this.installPrompt.classList.add('hidden');
        });

        // Window resize
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                this.reset();
                this.resizeConfettiCanvas();
            }, 500);
        });
    }
}

// ============================================
// SERVICE WORKER REGISTRATION (PWA)
// ============================================

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js').then(registration => {
            console.log('SW registered:', registration);
        }).catch(error => {
            console.log('SW registration failed:', error);
        });
    });
}

// ============================================
// INITIALIZE GAME
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    new BubbleWrapGame();
});

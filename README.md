# 🫧 Bubble Wrap Game - Enhanced Version 2.0

A fully-featured, relaxing bubble wrap popping game optimized for iPhone and all devices!

## ✨ Features

### Core Gameplay
- 🫧 **Realistic bubble popping** - 3D bubbles with satisfying animations
- 🔊 **Pop sound effects** - Varied pitch for each pop
- 📳 **Haptic feedback** - iPhone vibration on pop (iOS devices)
- 📊 **Progress tracking** - Visual progress bar
- 🎯 **Pop counter** - Track current and lifetime pops

### 🎮 Game Modes
1. **Classic Mode** - Pop all bubbles at your own pace
2. **Timed Mode** - Beat the clock! Pop all bubbles in 30 seconds
3. **Endless Mode** - Bubbles regenerate for infinite popping

### 🎨 Themes
- **Purple** (Default) - Calming purple gradient
- **Ocean** - Blue/teal ocean vibes
- **Sunset** - Warm orange and pink
- **Forest** - Fresh green tones
- **Dark Mode** - Easy on the eyes at night

### 📏 Bubble Sizes
- **Small** - 120-160 tiny bubbles
- **Medium** (Default) - 80-100 standard bubbles
- **Large** - 48-64 giant bubbles

### 🎉 Advanced Features
- **Combo System** - Pop bubbles rapidly for combo messages!
  - 5x Combo 🔥
  - 10x Combo ⚡
  - 20x Mega Combo 💥
- **Confetti Animation** - Celebration when all bubbles are popped
- **Statistics Tracking** - Lifetime stats saved in localStorage
  - Total pops
  - Games completed
  - Best time (for timed mode)
- **Share Function** - Share your achievements
- **Progressive Web App** - Install as a native-like app on iPhone

### ⚙️ Settings
- Sound on/off toggle
- Vibration on/off toggle
- Combo messages on/off
- Multiple themes
- Bubble size selection
- Game mode selection
- Statistics viewer
- Clear stats option

## 📱 How to Install on iPhone

### Method 1: Install as PWA (Progressive Web App)
1. Deploy the game online (see deployment options below)
2. Open the URL in iPhone Safari
3. Tap the **Share** button (square with arrow)
4. Select **"Add to Home Screen"**
5. Name it "Bubble Wrap" and tap Add
6. Now it works like a native iPhone app!

### Method 2: PWA Auto-Install Prompt
- After opening the game for 10 seconds, an install prompt will appear
- Tap "Install" for one-click installation
- Works on supported browsers (Chrome, Edge, Safari 16.4+)

## 🚀 Deployment Options

### Option 1: GitHub Pages (Recommended - Free)
1. Create GitHub account
2. Create new repository "bubble-wrap-game"
3. Upload all files:
   - index.html
   - style.css
   - game.js
   - manifest.json
   - sw.js
4. Go to Settings > Pages
5. Select branch: main, folder: root
6. Save and get your URL: `https://yourusername.github.io/bubble-wrap-game`

### Option 2: Netlify (Easiest - Free)
1. Go to [netlify.com](https://netlify.com)
2. Drag the entire `bubble-wrap-game` folder onto the page
3. Get instant URL (e.g., `https://random-name.netlify.app`)
4. Works immediately on iPhone!

### Option 3: Vercel (Free)
1. Go to [vercel.com](https://vercel.com)
2. Import project or drag folder
3. Deploy with one click
4. Get URL instantly

### Option 4: Local Testing
```bash
# Using Python
cd bubble-wrap-game
python -m http.server 8000

# Using Node.js
npx http-server

# Then access at http://localhost:8000
```

## 📂 Project Structure

```
bubble-wrap-game/
├── index.html      # Main HTML structure
├── style.css       # All styling and themes
├── game.js         # Complete game logic (750+ lines)
├── manifest.json   # PWA manifest for installation
├── sw.js           # Service worker for offline support
└── README.md       # This file
```

## 🎯 How to Play

### Classic Mode
1. Tap/click bubbles to pop them
2. Pop all bubbles to complete the game
3. See confetti celebration!
4. Click Reset for a new sheet

### Timed Mode
1. Pop all bubbles within 30 seconds
2. Watch the timer count down
3. See your completion time
4. Beat your best time!

### Endless Mode
1. Pop bubbles continuously
2. Bubbles regenerate after 2 seconds
3. Perfect for stress relief
4. No end goal - just relax!

## ⚡ Quick Feature Guide

### Keyboard Shortcuts
- Click bubbles to pop
- Touch/tap for mobile

### Control Buttons
- 🔄 **Reset** - Start fresh with new bubbles
- 🔊 **Sound** - Toggle sound effects on/off
- 📳 **Vibration** - Toggle haptic feedback (iPhone)
- 🎨 **Theme** - Quick cycle through themes
- ⚙️ **Settings** - Open full settings modal

### Settings Modal
Access all customization options:
- Choose from 5 themes
- Select bubble size (small/medium/large)
- Switch game modes (classic/timed/endless)
- View detailed statistics
- Clear saved stats
- Toggle sound, vibration, combo messages

## 📊 Statistics Tracked

All stats are saved locally and persist across sessions:
- **Total Pops** - Lifetime bubble pops
- **Games Completed** - Number of completed games
- **Best Time** - Fastest completion time (timed mode)

## 🔧 Technical Details

### Technologies Used
- Pure **HTML5** - Semantic structure
- **CSS3** - Advanced animations, flexbox, grid
- **Vanilla JavaScript** - ES6 classes, modern APIs
- **Web Audio API** - Dynamic pop sounds
- **Canvas API** - Confetti animation
- **Vibration API** - Haptic feedback
- **LocalStorage** - Settings & statistics persistence
- **Service Worker** - PWA offline support
- **Web Share API** - Native sharing

### Browser Support
- ✅ iPhone Safari (iOS 12+)
- ✅ Chrome (desktop & mobile)
- ✅ Firefox
- ✅ Edge
- ✅ Samsung Internet
- ✅ Any modern browser

### Performance
- **File Size**: ~20KB total (all files)
- **Load Time**: < 1 second
- **No Dependencies**: Zero external libraries
- **Memory Efficient**: Reuses AudioContext
- **60 FPS animations**: Smooth on all devices

## 🎨 Customization

### Change Number of Bubbles
Edit `game.js` line 143-149:
```javascript
if (this.bubbleSize === 'small') {
    baseCount = 160; // Change this number
}
```

### Add New Themes
1. Add CSS in `style.css`:
```css
body[data-theme="mytheme"] {
    --primary-color: #ff0000;
    --secondary-color: #00ff00;
}
```

2. Add button in `index.html`:
```html
<button class="theme-btn" data-theme="mytheme">My Theme</button>
```

### Change Pop Sound
Edit `game.js` line 283-285:
```javascript
const basePitch = 800; // Change frequency (200-2000)
const variation = 200; // Change variation range
```

### Modify Combo Thresholds
Edit `game.js` line 231-236:
```javascript
if (this.comboCount === 5) { // Change to 3, 10, etc.
    this.showComboMessage('🔥 5x Combo!');
}
```

## 🐛 Troubleshooting

### Sound Not Working
- Check if sound is enabled in settings
- Try clicking a bubble first (browsers require user interaction)
- Check device volume

### Vibration Not Working
- Only works on devices with vibration motor (iPhone, Android)
- Check if vibration is enabled in settings
- Some browsers don't support Vibration API

### PWA Install Not Showing
- Must be served over HTTPS (or localhost)
- Only works on supported browsers
- May require user interaction first

### Bubbles Not Popping
- Refresh the page
- Check browser console for errors
- Make sure JavaScript is enabled

## 🔄 Updates & Changelog

### Version 2.0 (Current)
- ✅ Added 3 game modes (Classic, Timed, Endless)
- ✅ Added 5 color themes
- ✅ Added 3 bubble sizes
- ✅ Added combo system
- ✅ Added confetti animation
- ✅ Added statistics tracking
- ✅ Added PWA support
- ✅ Added share functionality
- ✅ Added haptic feedback
- ✅ Fixed AudioContext memory leak
- ✅ Added progress bar
- ✅ Added settings modal
- ✅ Added sound/vibration toggles
- ✅ Improved animations
- ✅ Better mobile optimization

### Version 1.0
- Basic bubble popping
- Simple sound effects
- Reset functionality

## 📝 License

This project is free to use, modify, and distribute. No attribution required!

## 💡 Future Ideas

Potential enhancements for v3.0:
- Multiplayer mode
- Daily challenges
- Achievement system
- Bubble skins (different textures)
- Sound packs (different pop sounds)
- Leaderboards
- Social features
- More game modes (zen, arcade, puzzle)

## 🙏 Credits

Made with ❤️ for relaxation and stress relief!

Special thanks to:
- Web Audio API for dynamic sounds
- Canvas API for confetti
- All the stressed-out people who need virtual bubble wrap

## 📧 Support

Having issues or want to suggest features?
- Check the Troubleshooting section above
- Make sure you're using a modern browser
- Try refreshing the page

---

**Enjoy popping! 🎉**

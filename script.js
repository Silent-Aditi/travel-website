// ---------- Translations Dictionary ----------
const TRANSLATIONS = {
  english: {
    // Brand
    brandName: "Hum<span>safar</span>",
    // Stations
    station0: "01 LOGIN",
    station1: "02 PREFERENCES",
    station2: "03 MATCHES",
    station3: "04 NEARBY",
    // Screen 0
    s0Eyebrow: "Start Journey",
    s0Headline: "Travel solo, a companion<br>will find you.",
    s0Sub: "Login, share your preferences, and Humsafar will connect you with solo travellers heading to the same place on the same dates.",
    labelName: "Name",
    placeholderName: "Write your name",
    labelEmail: "Email",
    placeholderEmail: "you@example.com",
    btnLogin: "Login →",
    circleStamp: "SOLO<br>PASS",
    
    // Screen 1
    s1Eyebrow: "Step 02",
    s1Headline: "Tell us, what kind of<br>journey do you want?",
    s1Sub: "The more honest you are, the better match you will get. This will help us find matches later.",
    labelDestination: "Where to go?",
    placeholderDestination: "Write the name of the place... (any location)",
    labelStyle: "Travel style",
    placeholderStyle: "Write your style and press Enter (e.g. Trekking, Solo food trip...)",
    labelBudget: "Budget (per day)",
    budgetChip0: "Under ₹1000",
    budgetChip1: "₹1000–3000",
    budgetChip2: "₹3000+",
    labelDate: "When to go?",
    calendarNoDate: "No date selected",
    switchSoloTitle: "I am traveling solo",
    switchSoloSub: "Keep this on to match only with solo travelers",
    btnFindMatches: "Find companions →",

    // Screen 2
    s2Eyebrow: "Step 03",
    s2Headline: "People planning a<br>similar trip as yours",
    s2SubDefault: "These travelers have chosen the same destination, dates, and solo traveler settings. Send a connect request to chat.",
    btnConnect: "Send Connect Request",
    btnConnectSent: "✓ Request Sent",
    btnMatchesNext: "Go ahead, explore nearby →",

    // Screen 3
    s3Eyebrow: "Step 04",
    s3Headline: "Now tell us,<br>where are you?",
    s3Sub: "Enter your current location — we'll show you nearby stays, attractions, and food spots, with distance and contact numbers.",
    placeholderCurrentLoc: "e.g. Old Manali Bus Stand, Manali",
    btnLocate: "📍 Find",
    nearbyStays: "Nearby Stays",
    nearbyAttractions: "Attractions to Visit",
    nearbyFood: "Food & Café Spots",

    // Toasts & Dialogs
    valLoginFields: "Please enter both your name and email.",
    valLoginEmail: "Please enter a valid email address.",
    loginSuccess: "Welcome {name}! Your journey has begun.",
    toastPehleLogin: "Please login on step 01 first!",
    styleDuplicate: "This style has already been added.",
    searchDbText: "Searching matching travellers from our database...",
    matchSubCustom: "They have also selected {dest} with a matching budget and travel dates.",
    connectSuccess: "Connection request sent to {user}!",
    locInvalid: "Location \"{loc}\" not found. Please try a different name.",
    spotsFetchError: "Data fetch failed. Please check your connection and try again.",
    mapSearching: "Searching spots live...",
    mapLabel: "Map representation near location...",
    noNearbySpots: "No nearby {category} found.",
    sameAsHome: "same as home"
  },
  hindi: {
    // Brand
    brandName: "हम<span>सफ़र</span>",
    // Stations
    station0: "01 लॉगिन",
    station1: "02 पसंद",
    station2: "03 साथी",
    station3: "04 आस-पास",
    // Screen 0
    s0Eyebrow: "शुरुआत",
    s0Headline: "अकेला चल, साथी<br>खुद मिल जाएगा।",
    s0Sub: "लॉगिन करो, अपनी पसंद बताओ, और हमसफर तुम्हें वैसे ही सोलो ट्रैवलर्स से मिलाएगा जो तुम्हारे जैसी ही जगह, तुम्हारे जैसी ही तारीख पे घूमने निकल रहे हैं।",
    labelName: "नाम",
    placeholderName: "अपना नाम लिखो",
    labelEmail: "ईमेल",
    placeholderEmail: "tum@example.com",
    btnLogin: "लॉगिन करो →",
    circleStamp: "सोलो<br>पास",

    // Screen 1
    s1Eyebrow: "कदम 02",
    s1Headline: "बताओ, तुम्हें कैसा<br>सफर चाहिए?",
    s1Sub: "जितना सच-सच बताओ, उतना ही अच्छा मैच मिलेगा। ये सब बाद में मैचिंग के काम आएगा।",
    labelDestination: "कहाँ जाना है?",
    placeholderDestination: "जहाँ जाना है वहाँ का नाम लिखो... (कोई भी जगह)",
    labelStyle: "यात्रा का स्टाइल",
    placeholderStyle: "अपना स्टाइल लिखो और एंटर दबाओ (जैसे: ट्रेकिंग, सोलो फूड ट्रिप...)",
    labelBudget: "बजट (प्रति दिन)",
    budgetChip0: "₹1000 से कम",
    budgetChip1: "₹1000–3000",
    budgetChip2: "₹3000+",
    labelDate: "कब जाना है?",
    calendarNoDate: "कोई तारीख चुनी नहीं गई",
    switchSoloTitle: "मैं अकेले यात्रा कर रहा/रही हूँ",
    switchSoloSub: "इसे ऑन रखो ताकि सिर्फ सोलो ट्रैवलर्स से ही मैच हो",
    btnFindMatches: "साथी ढूँढो →",

    // Screen 2
    s2Eyebrow: "कदम 03",
    s2Headline: "तुम्हारे जैसी ही<br>ट्रिप प्लान कर रहे लोग",
    s2SubDefault: "इन सब ने भी वही जगह, वैसी ही डेट और सोलो ट्रैवल चुना है। जिससे बात करनी हो, कनेक्ट भेज दो।",
    btnConnect: "कनेक्ट रिक्वेस्ट भेजें",
    btnConnectSent: "✓ रिक्वेस्ट भेजी गई",
    btnMatchesNext: "आगे बढ़ो, आस-पास देखो →",

    // Screen 3
    s3Eyebrow: "कदम 04",
    s3Headline: "अब बताओ, अभी<br>कहाँ हो तुम?",
    s3Sub: "अपना करंट लोकेशन डालो — हम तुम्हें आस-पास के स्टे, घूमने की जगह और खाने के ठिकाने दिखाएंगे, दूरी और कांटेक्ट नंबर के साथ।",
    placeholderCurrentLoc: "जैसे: ओल्ड मनाली बस स्टैंड, मनाली",
    btnLocate: "📍 ढूँढो",
    nearbyStays: "आस-पास के स्टे",
    nearbyAttractions: "घूमने की जगह",
    nearbyFood: "खाने के ठिकाने",

    // Toasts & Dialogs
    valLoginFields: "कृपया अपना नाम और ईमेल दोनों दर्ज करें।",
    valLoginEmail: "कृपया एक वैध ईमेल आईडी दर्ज करें।",
    loginSuccess: "नमस्ते {name}! सफर की शुरुआत हो गई है।",
    toastPehleLogin: "कृपया पहले स्क्रीन 01 पर लॉगिन करें!",
    styleDuplicate: "यह स्टाइल पहले ही जोड़ा जा चुका है।",
    searchDbText: "हमारे डेटाबेस से मैचिंग यात्रियों की तलाश की जा रही है...",
    matchSubCustom: "इन्होंने भी मेल खाते बजट और तारीखों के साथ {dest} को चुना है।",
    connectSuccess: "{user} को कनेक्शन रिक्वेस्ट भेज दी गई है!",
    locInvalid: "लोकेशन \"{loc}\" नहीं मिली। कृपया कोई दूसरा नाम आज़माएं।",
    spotsFetchError: "डेटा फ़ेच विफल रहा। कृपया अपना कनेक्शन जांचें और फिर से प्रयास करें।",
    mapSearching: "आस-पास के ठिकानों की तलाश जारी है...",
    mapLabel: "लोकेशन के पास मैप प्रदर्शन...",
    noNearbySpots: "आस-पास कोई {category} नहीं मिला।",
    sameAsHome: "घर जैसा ही"
  },
  hinglish: {
    // Brand
    brandName: "Hum<span>safar</span>",
    // Stations
    station0: "01 LOGIN",
    station1: "02 PASAND",
    station2: "03 SAATHI",
    station3: "04 AAS-PAAS",
    // Screen 0
    s0Eyebrow: "Shuruaat",
    s0Headline: "Akela chal, saathi<br>khud mil jayega.",
    s0Sub: "Login karo, apni pasand batao, aur Humsafar tumhe waise hi solo travellers se milayega jo tumhare jaisi hi jagah, tumhare jaisi hi tareekh pe ghumne nikal rahe hain.",
    labelName: "Naam",
    placeholderName: "Apna naam likho",
    labelEmail: "Email",
    placeholderEmail: "tum@example.com",
    btnLogin: "Login karo →",
    circleStamp: "SOLO<br>PASS",

    // Screen 1
    s1Eyebrow: "Step 02",
    s1Headline: "Batao, tumhe kaisa<br>safar chahiye?",
    s1Sub: "Jitna sach-sach batao, utna hi accha match milega. Ye sab baad me matching ke kaam aayega.",
    labelDestination: "Kahan jana hai?",
    placeholderDestination: "Jahan jana hai wahan ka naam likho... (koi bhi jagah)",
    labelStyle: "Travel style",
    placeholderStyle: "Apna style likho aur Enter dabao (jaise: Trekking, Solo food trip...)",
    labelBudget: "Budget (per din)",
    budgetChip0: "₹1000 se kam",
    budgetChip1: "₹1000–3000",
    budgetChip2: "₹3000+",
    labelDate: "Kab jaana hai?",
    calendarNoDate: "Koi date select nahi ki",
    switchSoloTitle: "Main solo travel kar raha/rahi hoon",
    switchSoloSub: "Isse on rakho taaki sirf solo travellers se hi match ho",
    btnFindMatches: "Saathi dhoondo →",

    // Screen 2
    s2Eyebrow: "Step 03",
    s2Headline: "Tumhare jaisi hi<br>trip plan kar rahe log",
    s2SubDefault: "In sab ne bhi wahi jagah, waisi hi date aur solo travel choose kiya hai. Jisse baat karni ho, connect bhej do.",
    btnConnect: "Connect Request Bhejo",
    btnConnectSent: "✓ Request Bheji Gayi",
    btnMatchesNext: "Aage badho, aas-paas dekho →",

    // Screen 3
    s3Eyebrow: "Step 04",
    s3Headline: "Ab batao, abhi<br>kahan ho tum?",
    s3Sub: "Apna current location daalo — hum tumhe aas-paas ke stay, ghumne ki jagah aur khaane ke thikane dikhayenge, duri aur contact number ke saath.",
    placeholderCurrentLoc: "Jaise: Old Manali Bus Stand, Manali",
    btnLocate: "📍 Dhoondo",
    nearbyStays: "Aas-paas ke Stay",
    nearbyAttractions: "Ghumne ki jagah",
    nearbyFood: "Khaane ke thikane",

    // Toasts & Dialogs
    valLoginFields: "Kripya apna naam aur email dono likhein.",
    valLoginEmail: "Kripya ek valid email ID enter karein.",
    loginSuccess: "Namaste {name}! Safar ki shuruaat ho gayi hai.",
    toastPehleLogin: "Pehle screen 01 par login karein!",
    styleDuplicate: "Ye style pehle se added hai.",
    searchDbText: "Hamare database se matching travellers dhoond rahe hain...",
    matchSubCustom: "In sab ne bhi {dest} ghumne ke liye matching budget aur dates select ki hain.",
    connectSuccess: "{user} ko connection request bhej di gayi hai!",
    locInvalid: "Location \"{loc}\" nahi mili. Dusra naam enter karein.",
    spotsFetchError: "Data fetch failed. Connection check karein.",
    mapSearching: "Searching spots live...",
    mapLabel: "Map coordinate search coordinates...",
    noNearbySpots: "Aas-paas koi aur {category} nahi mila.",
    sameAsHome: "same as home"
  }
};

// ---------- DOM Refs & Global State ----------
let currentStep = 0;
let isLoggedIn = false;
let userStyles = [];
let selectedBudget = "";
let selectedDate = null;
let currentLanguage = 'hinglish';

// Calendar state
let calYear = new Date().getFullYear();
let calMonth = new Date().getMonth();

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

// Autocomplete debounce timer
let suggestTimer = null;

// Initialize when page loads
window.addEventListener('DOMContentLoaded', () => {
  // Setup click listeners for Stations (navbar)
  document.querySelectorAll('.station').forEach(station => {
    station.addEventListener('click', () => {
      const step = parseInt(station.dataset.step);
      if (isLoggedIn || step === 0) {
        goToStep(step);
      } else {
        const t = TRANSLATIONS[currentLanguage];
        showToast(t.toastPehleLogin);
      }
    });
  });

  // Setup preference style tag input Enter key listener
  const styleInput = document.getElementById('style-input');
  if (styleInput) {
    styleInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        const val = styleInput.value.trim();
        if (val) {
          addStyleTag(val);
          styleInput.value = "";
        }
      }
    });
  }

  // Setup suggestion chip clicks for travel style
  setupStyleChips();

  // Setup budget chip group toggles
  document.querySelectorAll('.chip-group[data-group="budget"] .chip').forEach(chip => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('.chip-group[data-group="budget"] .chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      selectedBudget = chip.textContent.trim();
    });
  });

  // Setup live search autocomplete for destination-input
  const destInput = document.getElementById('destination-input');
  const destSuggest = document.getElementById('destination-suggest');
  if (destInput && destSuggest) {
    destInput.addEventListener('input', () => {
      clearTimeout(suggestTimer);
      const q = destInput.value.trim();
      if (q.length < 3) {
        destSuggest.innerHTML = '';
        return;
      }
      suggestTimer = setTimeout(async () => {
        try {
          const res = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(q)}&count=5&language=en&format=json`);
          const data = await res.json();
          destSuggest.innerHTML = '';
          if (data.results && data.results.length > 0) {
            data.results.forEach(place => {
              const div = document.createElement('div');
              div.className = 'dropdown-item';
              div.textContent = [place.name, place.admin1, place.country].filter(Boolean).join(', ');
              div.addEventListener('click', () => {
                destInput.value = div.textContent;
                destSuggest.innerHTML = '';
              });
              destSuggest.appendChild(div);
            });
          }
        } catch (e) {
          console.warn("Live geocoding search failed. Using mock autocomplete dropdown fallback.", e);
          destSuggest.innerHTML = '';
          const queryLower = q.toLowerCase();
          const mockPlaces = [
            { name: "Manali", region: "Himachal Pradesh", country: "India" },
            { name: "Goa (Anjuna Beach)", region: "Goa", country: "India" },
            { name: "Goa (Panaji)", region: "Goa", country: "India" },
            { name: "Lisbon", region: "Lisbon District", country: "Portugal" },
            { name: "Kyoto", region: "Kyoto Prefecture", country: "Japan" }
          ];
          const filtered = mockPlaces.filter(p => p.name.toLowerCase().includes(queryLower));
          const listToUse = filtered.length > 0 ? filtered : mockPlaces.slice(0, 3);
          
          listToUse.forEach(place => {
            const div = document.createElement('div');
            div.className = 'dropdown-item';
            div.textContent = `${place.name}, ${place.region}, ${place.country}`;
            div.addEventListener('click', () => {
              destInput.value = div.textContent;
              destSuggest.innerHTML = '';
            });
            destSuggest.appendChild(div);
          });
        }
      }, 350);
    });

    // Close suggestion list on clicking outside
    document.addEventListener('click', (e) => {
      if (!destInput.contains(e.target) && !destSuggest.contains(e.target)) {
        destSuggest.innerHTML = '';
      }
    });
  }

  // Initialize Calendar
  buildCalendar();
});

// Setup travel style chip click listeners
function setupStyleChips() {
  document.querySelectorAll('.suggest-chip').forEach(chip => {
    // Remove existing event listener by cloning node
    const newChip = chip.cloneNode(true);
    chip.parentNode.replaceChild(newChip, chip);
    newChip.addEventListener('click', () => {
      addStyleTag(newChip.textContent.trim());
    });
  });
}

// ---------- Toast Notification ----------
function showToast(message) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

// ---------- Language Selector Trigger ----------
window.changeLanguage = function(lang) {
  currentLanguage = lang;
  
  // Update active button state in Lang Panel
  document.querySelectorAll('.lang-btn').forEach(btn => {
    if (btn.dataset.lang === lang) btn.classList.add('active');
    else btn.classList.remove('active');
  });

  const t = TRANSLATIONS[lang];
  if (!t) return;

  // 1. Brand Navbar Title
  const brandTitle = document.querySelector('.brand h1');
  if (brandTitle) brandTitle.innerHTML = t.brandName;

  // 2. Navbar Stations
  const stationNodes = document.querySelectorAll('.stations .station');
  if (stationNodes.length >= 4) {
    stationNodes[0].textContent = t.station0;
    stationNodes[1].textContent = t.station1;
    stationNodes[2].textContent = t.station2;
    stationNodes[3].textContent = t.station3;
  }

  // 3. Screen 0: Login page
  const s0 = document.getElementById('screen-0');
  if (s0) {
    s0.querySelector('.eyebrow').textContent = t.s0Eyebrow;
    s0.querySelector('.headline').innerHTML = t.s0Headline;
    s0.querySelector('.sub').textContent = t.s0Sub;
    s0.querySelector('.circle-stamp').innerHTML = t.circleStamp;
    
    const labels = s0.querySelectorAll('.field-label');
    if (labels.length >= 2) {
      labels[0].textContent = t.labelName;
      labels[1].textContent = t.labelEmail;
    }
    
    const loginNameInput = document.getElementById('login-name');
    if (loginNameInput) loginNameInput.placeholder = t.placeholderName;
    
    const loginEmailInput = document.getElementById('login-email');
    if (loginEmailInput) loginEmailInput.placeholder = t.placeholderEmail;
    
    const loginBtn = s0.querySelector('.btn-primary');
    if (loginBtn) loginBtn.innerHTML = t.btnLogin;
  }

  // 4. Screen 1: Preferences page
  const s1 = document.getElementById('screen-1');
  if (s1) {
    s1.querySelector('.eyebrow').textContent = t.s1Eyebrow;
    s1.querySelector('.headline').innerHTML = t.s1Headline;
    s1.querySelector('.sub').textContent = t.s1Sub;
    
    const blockHeads = s1.querySelectorAll('.pref-block h4');
    if (blockHeads.length >= 4) {
      blockHeads[0].textContent = t.labelDestination;
      blockHeads[1].textContent = t.labelStyle;
      blockHeads[2].textContent = t.labelBudget;
      blockHeads[3].textContent = t.labelDate;
    }

    const destInput = document.getElementById('destination-input');
    if (destInput) destInput.placeholder = t.placeholderDestination;

    const styleInput = document.getElementById('style-input');
    if (styleInput) styleInput.placeholder = t.placeholderStyle;

    const budgetChips = s1.querySelectorAll('.chip-group[data-group="budget"] .chip');
    if (budgetChips.length >= 3) {
      // Check active state, keep text
      const selectedIndex = selectedBudget ? 
        (selectedBudget.includes("kam") || selectedBudget.includes("Under") ? 0 : 
         selectedBudget.includes("3000+") ? 2 : 1) : -1;

      budgetChips[0].textContent = t.budgetChip0;
      budgetChips[1].textContent = t.budgetChip1;
      budgetChips[2].textContent = t.budgetChip2;

      // sync global selected budget name in correct language
      if (selectedIndex !== -1) {
        selectedBudget = budgetChips[selectedIndex].textContent;
      }
    }

    const calSelected = document.getElementById('cal-selected-label');
    if (calSelected && (!selectedDate)) {
      calSelected.textContent = t.calendarNoDate;
    } else if (calSelected && selectedDate) {
      calSelected.textContent = `Selected: ${selectedDate.getDate()} ${MONTHS[selectedDate.getMonth()]} ${selectedDate.getFullYear()}`;
    }

    const toggleRow = s1.querySelector('.toggle-row');
    if (toggleRow) {
      toggleRow.querySelector('.t-title').textContent = t.switchSoloTitle;
      toggleRow.querySelector('.t-sub').textContent = t.switchSoloSub;
    }

    const findBtn = s1.querySelector('button.btn-primary');
    if (findBtn) findBtn.innerHTML = t.btnFindMatches;
  }

  // 5. Screen 2: Matches
  const s2 = document.getElementById('screen-2');
  if (s2) {
    s2.querySelector('.eyebrow').textContent = t.s2Eyebrow;
    s2.querySelector('.headline').innerHTML = t.s2Headline;
    
    const matchSub = document.getElementById('match-sub');
    const destInput = document.getElementById('destination-input');
    const destination = destInput ? destInput.value.trim() : "Goa";
    const displayDest = destination.split(',')[0] || "Apni pasand ki jagah";
    
    if (matchSub) {
      matchSub.textContent = t.matchSubCustom.replace("{dest}", displayDest);
    }
    const nextBtn = s2.querySelector('.btn-outline');
    if (nextBtn) nextBtn.innerHTML = t.btnMatchesNext;
  }

  // 6. Screen 3: Nearby explore page
  const s3 = document.getElementById('screen-3');
  if (s3) {
    s3.querySelector('.eyebrow').textContent = t.s3Eyebrow;
    s3.querySelector('.headline').innerHTML = t.s3Headline;
    s3.querySelector('.sub').textContent = t.s3Sub;

    const currentLoc = document.getElementById('current-location');
    if (currentLoc) currentLoc.placeholder = t.placeholderCurrentLoc;

    const locateBtn = s3.querySelector('.locate-row button');
    if (locateBtn) locateBtn.innerHTML = t.btnLocate;

    const sectionTitles = s3.querySelectorAll('.section-title');
    if (sectionTitles.length >= 3) {
      // Preserve first child (dot span) and swap label index
      sectionTitles[0].childNodes[1].nodeValue = t.nearbyStays;
      sectionTitles[1].childNodes[1].nodeValue = t.nearbyAttractions;
      sectionTitles[2].childNodes[1].nodeValue = t.nearbyFood;
    }
  }

  // Reload matching profiles if we're on matches screen
  if (currentStep === 2) {
    findMatches();
  }
};

// ---------- Screen/Step Navigation ----------
function goToStep(stepIndex) {
  currentStep = stepIndex;

  // Update navbar station active states
  const stations = document.querySelectorAll('.station');
  stations.forEach((st, idx) => {
    if (idx === stepIndex) st.classList.add('active');
    else st.classList.remove('active');
  });

  // Show/Hide screens
  const screens = document.querySelectorAll('.screen');
  screens.forEach((scr, idx) => {
    if (idx === stepIndex) {
      scr.classList.add('active');
      scr.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      scr.classList.remove('active');
    }
  });
}

// ---------- Step 0: Login Logic ----------
window.doLogin = function() {
  const nameInput = document.getElementById('login-name');
  const emailInput = document.getElementById('login-email');
  const t = TRANSLATIONS[currentLanguage];

  const name = nameInput ? nameInput.value.trim() : "";
  const email = emailInput ? emailInput.value.trim() : "";

  if (!name || !email) {
    showToast(t.valLoginFields);
    return;
  }

  // Simple validation check
  if (!email.includes('@') || email.length < 5) {
    showToast(t.valLoginEmail);
    return;
  }

  isLoggedIn = true;
  showToast(t.loginSuccess.replace("{name}", name));
  goToStep(1);
};

// ---------- Step 1: Preference Tags & Calendar ----------

// Add a style preference tag
function addStyleTag(val) {
  val = val.trim();
  if (!val) return;
  const t = TRANSLATIONS[currentLanguage];
  
  // Prevent duplicate
  if (userStyles.includes(val)) {
    showToast(t.styleDuplicate);
    return;
  }

  userStyles.push(val);
  renderStylePills();
}

// Remove style preference tag
window.removeStyle = function(val) {
  userStyles = userStyles.filter(s => s !== val);
  renderStylePills();
};

// Render tag pills inside container
function renderStylePills() {
  const container = document.getElementById('style-pills');
  if (!container) return;
  container.innerHTML = "";
  userStyles.forEach(style => {
    const pill = document.createElement('span');
    pill.className = 'tag-pill';
    pill.innerHTML = `${escapeHtml(style)} <span class="remove" onclick="removeStyle('${escapeHtml(style)}')">&times;</span>`;
    container.appendChild(pill);
  });
}

// Generate Calendar GUI
function buildCalendar() {
  const monthLabel = document.getElementById('cal-month-label');
  const calGrid = document.getElementById('cal-grid');
  if (!monthLabel || !calGrid) return;

  monthLabel.textContent = `${MONTHS[calMonth]} ${calYear}`;
  calGrid.innerHTML = "";

  // Get first day of current month and total days
  const firstDayIndex = new Date(calYear, calMonth, 1).getDay();
  const totalDays = new Date(calYear, calMonth + 1, 0).getDate();

  // Draw empty cells for padding days from previous month
  for (let i = 0; i < firstDayIndex; i++) {
    const emptySpan = document.createElement('span');
    emptySpan.className = 'cal-day empty';
    calGrid.appendChild(emptySpan);
  }

  // Draw actual days
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  for (let day = 1; day <= totalDays; day++) {
    const dayDate = new Date(calYear, calMonth, day);
    const daySpan = document.createElement('span');
    daySpan.className = 'cal-day';
    daySpan.textContent = day;

    // Check if past day
    if (dayDate < today) {
      daySpan.classList.add('past');
    } else {
      // Add click handler for selection
      daySpan.addEventListener('click', () => {
        // Clear active states
        document.querySelectorAll('.cal-day').forEach(d => d.classList.remove('active'));
        daySpan.classList.add('active');
        selectedDate = dayDate;
        
        // Update label
        const selLabel = document.getElementById('cal-selected-label');
        if (selLabel) {
          selLabel.textContent = `Selected: ${day} ${MONTHS[calMonth]} ${calYear}`;
        }
      });
    }

    // Highlight if selectedDate matches
    if (selectedDate && 
        selectedDate.getDate() === day && 
        selectedDate.getMonth() === calMonth && 
        selectedDate.getFullYear() === calYear) {
      daySpan.classList.add('active');
    }

    calGrid.appendChild(daySpan);
  }
}

// Shift Calendar month left/right
window.calShift = function(dir) {
  calMonth += dir;
  if (calMonth > 11) {
    calMonth = 0;
    calYear += 1;
  } else if (calMonth < 0) {
    calMonth = 11;
    calYear -= 1;
  }
  buildCalendar();
};

// ---------- Step 2: Match Engine (Mocking) ----------
window.findMatches = function() {
  const matchList = document.getElementById('match-list');
  const matchSub = document.getElementById('match-sub');
  const t = TRANSLATIONS[currentLanguage];
  if (!matchList) return;

  // Read preferences
  const destInput = document.getElementById('destination-input');
  const destination = destInput ? destInput.value.trim() : "Goa";
  const displayDest = destination.split(',')[0] || "Apni pasand ki jagah";
  const dateStr = selectedDate 
    ? `${selectedDate.getDate()} ${MONTHS[selectedDate.getMonth()]} ${selectedDate.getFullYear()}`
    : "Kisi bhi date pe";

  matchList.innerHTML = `<div class="loading-matches"><div class="spinner"></div><p>${t.searchDbText}</p></div>`;

  if (matchSub) {
    matchSub.textContent = t.matchSubCustom.replace("{dest}", displayDest);
  }

  // Simulate server response matching delay
  setTimeout(() => {
    matchList.innerHTML = "";

    // Generate matched profiles based on some default sets
    const mockTravellers = [
      {
        name: "Rahul Verma",
        age: 26,
        city: "Delhi",
        avatar: "🏕️",
        matchScore: 94,
        date: dateStr,
        styles: userStyles.length > 0 ? [...userStyles, "Trekking"] : ["Adventure / Trekking", "Backpacking"],
        budget: selectedBudget || "₹1000–3000",
        bio: "Mountains are calling! Main Himachal side jaane ka plan kar raha hoon, matches milenge toh safe and fun rahega."
      },
      {
        name: "Sneha Iyer",
        age: 24,
        city: "Mumbai",
        avatar: "📸",
        matchScore: 89,
        date: dateStr,
        styles: userStyles.length > 0 ? [userStyles[0] || "Photography", "Food explorer"] : ["Photography", "Café hopping"],
        budget: selectedBudget || "₹1000–3000",
        bio: "Love shooting landscapes and tasting local street food. Looking for a buddy to explore visual spots."
      },
      {
        name: "Amit Patel",
        age: 29,
        city: "Ahmedabad",
        avatar: "🏄",
        matchScore: 85,
        date: dateStr,
        styles: ["Chill & Relax", "Beach bumming", "Budget backpacking"],
        budget: selectedBudget || "₹1000 se kam",
        bio: "Life is short, travel cheap. Main beaches and historical temples explore karta hoon. Keep it simple."
      },
      {
        name: "Priyanka Sen",
        age: 27,
        city: "Kolkata",
        avatar: "☕",
        matchScore: 81,
        date: dateStr,
        styles: ["Food explorer", "Museum visits", "Slow travel"],
        budget: "₹3000+",
        bio: "Heritage architecture aur local cafés meri kamzori hain. Safar shanti aur sukoon bhara hona chahiye."
      }
    ];

    mockTravellers.forEach((profile, idx) => {
      const card = document.createElement('div');
      card.className = 'match-card';
      
      const tagBadges = profile.styles.map(s => `<span class="chip-mini">${escapeHtml(s)}</span>`).join('');

      card.innerHTML = `
        <div class="match-score">${profile.matchScore}%<span>Match</span></div>
        <div class="match-header">
          <div class="match-avatar">${profile.avatar}</div>
          <div class="match-user-details">
            <h3>${escapeHtml(profile.name)}, ${profile.age}</h3>
            <span class="match-from">${escapeHtml(profile.city)}, India</span>
          </div>
        </div>
        <p class="match-bio">"${escapeHtml(profile.bio)}"</p>
        <div class="match-meta">
          <div class="meta-item"><strong>Date:</strong> <span>${escapeHtml(profile.date)}</span></div>
          <div class="meta-item"><strong>Budget:</strong> <span>${escapeHtml(profile.budget)}</span></div>
        </div>
        <div class="match-tags">${tagBadges}</div>
        <div class="match-footer">
          <button class="btn btn-primary" onclick="connectUser(this, '${escapeHtml(profile.name)}')">${t.btnConnect}</button>
        </div>
      `;
      matchList.appendChild(card);
    });
  }, 1500);
};

// Request connection event listener
window.connectUser = function(btn, username) {
  const t = TRANSLATIONS[currentLanguage];
  btn.textContent = t.btnConnectSent;
  btn.className = "btn btn-success";
  btn.disabled = true;
  showToast(t.connectSuccess.replace("{user}", username));
};

// ---------- Offline Fallback Database ----------
const MOCK_NEARBY_SPOTS = {
  manali: {
    lat: 32.2476,
    lon: 77.1887,
    stays: [
      { name: "The Zostel Manali Hostel", dist: 0.35, phone: "+91 88824 56888" },
      { name: "Old Manali Backpackers Home", dist: 0.62, phone: "+91 98160 12345" },
      { name: "Apple Orchard View Cottages", dist: 1.15, phone: "+91 94180 67890" },
      { name: "La Ri Sa Luxury Resort", dist: 2.30, phone: "+91 1902 250123" }
    ],
    attractions: [
      { name: "Hadimba Temple", dist: 0.85, phone: "Public Monument" },
      { name: "Manu Temple Old Manali", dist: 0.45, phone: "Public Monument" },
      { name: "Jogini Waterfalls Trail", dist: 3.20, phone: "Nature Scenic Walk" },
      { name: "Solang Valley adventure point", dist: 9.50, phone: "+91 98165 43210" }
    ],
    food: [
      { name: "Dylan's Toasted Roaster Café", dist: 0.28, phone: "+91 98052 00555" },
      { name: "Cafe 1947 Pizza & Pasta", dist: 0.58, phone: "+91 98160 48447" },
      { name: "Johnson's Cafe & Bar", dist: 1.50, phone: "+91 1902 251523" },
      { name: "Lazy Dog Alfresco Bistro", dist: 0.42, phone: "+91 1902 254272" }
    ]
  },
  goa: {
    lat: 15.5414,
    lon: 73.7628,
    stays: [
      { name: "Anjuna Beach Backpacker Hostel", dist: 0.28, phone: "+91 832 2273456" },
      { name: "The Red Door Beach Hostel", dist: 0.65, phone: "+91 832 2274567" },
      { name: "Curlies Sea View Cottages", dist: 0.92, phone: "+91 98221 68888" }
    ],
    attractions: [
      { name: "Anjuna Flea Market Grounds", dist: 0.48, phone: "Shopping District" },
      { name: "Chapora Fort Sunrise Point", dist: 3.42, phone: "Historic Landmark" },
      { name: "Baga Beach Water Sports", dist: 2.80, phone: "Beach Activities" }
    ],
    food: [
      { name: "Curlies Beach Shack Anjuna", dist: 0.92, phone: "+91 832 2273289" },
      { name: "German Bakery Anjuna Cafe", dist: 0.38, phone: "+91 832 2273111" },
      { name: "Sublime Fine Dining Goa", dist: 1.82, phone: "+91 98221 00022" }
    ]
  },
  default: {
    lat: 28.6139,
    lon: 77.2090,
    stays: [
      { name: "Humsafar Backpacker Haven", dist: 0.45, phone: "+91 99999 12345" },
      { name: "Safar Lodge & Budget Stay", dist: 1.20, phone: "+91 99999 67890" },
      { name: "The Soloist Guest House", dist: 2.15, phone: "+91 88888 12345" }
    ],
    attractions: [
      { name: "Central City Park & Lake Walk", dist: 0.95, phone: "Nature Sights" },
      { name: "Old Heritage Town Market", dist: 2.45, phone: "Historical Tour" },
      { name: "Sunset Hill View Point", dist: 4.30, phone: "Scenic Landscape" }
    ],
    food: [
      { name: "The Safe House Café", dist: 0.38, phone: "+91 99999 44444" },
      { name: "Indie Local Flavors Diner", dist: 1.10, phone: "+91 99999 55555" },
      { name: "Humsafar Tea & Snack Stall", dist: 0.22, phone: "+91 99999 66666" }
    ]
  }
};

// ---------- Step 3: Nearby Spots Finder (OSM Overpass API with local Mock Fallback) ----------
window.loadNearby = async function() {
  const stayList = document.getElementById('stay-list');
  const attractionList = document.getElementById('attraction-list');
  const foodList = document.getElementById('food-list');
  const locInput = document.getElementById('current-location');
  const mapSvg = document.getElementById('map-svg');
  const t = TRANSLATIONS[currentLanguage];

  if (!stayList || !attractionList || !foodList || !locInput) return;

  const locName = locInput.value.trim();
  if (!locName) {
    showToast(t.valLoginFields);
    return;
  }

  // Set loading states
  const loaderHtml = `<div class="loading-spinner"><div class="spinner"></div><p>${t.mapSearching}</p></div>`;
  stayList.innerHTML = loaderHtml;
  attractionList.innerHTML = loaderHtml;
  foodList.innerHTML = loaderHtml;
  mapSvg.innerHTML = `<text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" fill="#7a8d9a" font-size="14" font-family="Space Grotesk">${t.mapSearching}</text>`;

  let lat, lon;
  let stays = [], attractions = [], food = [];

  try {
    // 1. Geocode current location
    const geocodeUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(locName)}&count=1&language=en&format=json`;
    const geoRes = await fetch(geocodeUrl);
    const geoData = await geoRes.json();

    if (geoData.results && geoData.results.length > 0) {
      const locObj = geoData.results[0];
      lat = locObj.latitude;
      lon = locObj.longitude;

      // 2. Fetch tourism and amenity spots near coords using Overpass API
      const radius = 2500; // 2.5km search radius
      const overpassQuery = `
        [out:json][timeout:25];
        (
          node["tourism"~"hotel|guest_house|hostel|apartment"](around:${radius},${lat},${lon});
          node["tourism"~"attraction|sightseeing|viewpoint|museum"](around:${radius},${lat},${lon});
          node["amenity"~"restaurant|cafe|fast_food"](around:${radius},${lat},${lon});
        );
        out body 30;
      `;

      const overpassUrl = 'https://overpass-api.de/api/interpreter';
      const opRes = await fetch(overpassUrl, {
        method: 'POST',
        body: 'data=' + encodeURIComponent(overpassQuery)
      });
      const opData = await opRes.json();

      const elements = opData.elements || [];

      elements.forEach(el => {
        const name = el.tags?.name;
        if (!name) return;

        const dist = haversineDistance(lat, lon, el.lat, el.lon);
        const spot = {
          name,
          lat: el.lat,
          lon: el.lon,
          dist,
          tags: el.tags,
          phone: el.tags?.phone || el.tags?.["contact:phone"] || "Contact details not listed"
        };

        if (el.tags.tourism && ["hotel", "guest_house", "hostel", "apartment"].includes(el.tags.tourism)) {
          stays.push(spot);
        } else if (el.tags.tourism) {
          attractions.push(spot);
        } else if (el.tags.amenity) {
          food.push(spot);
        }
      });
    } else {
      throw new Error("Location not found");
    }
  } catch (err) {
    console.warn("Live Overpass fetch failed. Triggering offline mock database fallback...", err);
    // Determine fallback center coords and mock datasets
    const queryLower = locName.toLowerCase();
    let mockData = MOCK_NEARBY_SPOTS.default;
    if (queryLower.includes("manali")) {
      mockData = MOCK_NEARBY_SPOTS.manali;
    } else if (queryLower.includes("goa")) {
      mockData = MOCK_NEARBY_SPOTS.goa;
    }
    lat = mockData.lat;
    lon = mockData.lon;

    // Convert flat mock spots to geolocation mapped spots
    const mapMockSpot = (item, typeKey, typeVal) => {
      const angle = Math.random() * Math.PI * 2;
      const offsetRadius = 0.001 + (item.dist * 0.0035);
      const spotLat = lat + Math.sin(angle) * offsetRadius;
      const spotLon = lon + Math.cos(angle) * offsetRadius;
      return {
        name: item.name,
        lat: spotLat,
        lon: spotLon,
        dist: item.dist,
        tags: { [typeKey]: typeVal },
        phone: item.phone
      };
    };

    stays = mockData.stays.map(s => mapMockSpot(s, "tourism", "hostel"));
    attractions = mockData.attractions.map(a => mapMockSpot(a, "tourism", "attraction"));
    food = mockData.food.map(f => mapMockSpot(f, "amenity", "cafe"));
  }

  // Sort by distance
  stays.sort((a, b) => a.dist - b.dist);
  attractions.sort((a, b) => a.dist - b.dist);
  food.sort((a, b) => a.dist - b.dist);

  // Limit counts
  const finalStays = stays.slice(0, 5);
  const finalAttractions = attractions.slice(0, 5);
  const finalFood = food.slice(0, 5);

  // Render HTML lists
  renderSpotGrid(stayList, finalStays, "🏨", t.nearbyStays);
  renderSpotGrid(attractionList, finalAttractions, "🌅", t.nearbyAttractions);
  renderSpotGrid(foodList, finalFood, "🍽️", t.nearbyFood);

  // Draw custom interactive SVG Map
  drawSVGMap(mapSvg, lat, lon, [...finalStays, ...finalAttractions, ...finalFood]);
};

// Render spot cards inside target grids
function renderSpotGrid(container, list, defaultEmoji, categoryLabel) {
  container.innerHTML = "";
  const t = TRANSLATIONS[currentLanguage];
  if (list.length === 0) {
    container.innerHTML = `<div class="empty-state">${t.noNearbySpots.replace("{category}", categoryLabel)}</div>`;
    return;
  }

  list.forEach(spot => {
    const card = document.createElement('div');
    card.className = 'spot-card';
    card.innerHTML = `
      <div class="spot-icon">${defaultEmoji}</div>
      <div class="spot-details">
        <h4>${escapeHtml(spot.name)}</h4>
        <p class="spot-dist">📍 ${spot.dist.toFixed(2)} km door</p>
        <p class="spot-contact">📞 Phone: ${escapeHtml(spot.phone)}</p>
      </div>
    `;
    container.appendChild(card);
  });
}

// Draw a stylized representation of spots on an SVG map container
function drawSVGMap(svg, centerLat, centerLon, spots) {
  svg.innerHTML = "";
  const t = TRANSLATIONS[currentLanguage];
  
  const width = svg.viewBox.baseVal.width || 600;
  const height = svg.viewBox.baseVal.height || 260;
  const centerX = width / 2;
  const centerY = height / 2;

  // Background map grid grids
  const grid = document.createElementNS("http://www.w3.org/2000/svg", "g");
  grid.setAttribute("stroke", "#eaeaea");
  grid.setAttribute("stroke-width", "1");
  for (let x = 40; x < width; x += 40) {
    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", x);
    line.setAttribute("y1", 0);
    line.setAttribute("x2", x);
    line.setAttribute("y2", height);
    grid.appendChild(line);
  }
  for (let y = 30; y < height; y += 30) {
    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", 0);
    line.setAttribute("y1", y);
    line.setAttribute("x2", width);
    line.setAttribute("y2", y);
    grid.appendChild(line);
  }
  svg.appendChild(grid);

  // Draw some representation roads (intersecting lines through center)
  const roads = document.createElementNS("http://www.w3.org/2000/svg", "g");
  roads.setAttribute("stroke", "#dde4e8");
  roads.setAttribute("stroke-width", "6");
  roads.setAttribute("stroke-linecap", "round");
  
  const mainRoad = document.createElementNS("http://www.w3.org/2000/svg", "path");
  mainRoad.setAttribute("d", `M 50 ${centerY - 20} Q ${centerX - 50} ${centerY + 30} ${width - 50} ${centerY - 10}`);
  mainRoad.setAttribute("fill", "none");
  roads.appendChild(mainRoad);

  const crossRoad = document.createElementNS("http://www.w3.org/2000/svg", "path");
  crossRoad.setAttribute("d", `M ${centerX - 100} 20 Q ${centerX + 10} ${centerY} ${centerX + 50} ${height - 20}`);
  crossRoad.setAttribute("fill", "none");
  roads.appendChild(crossRoad);
  svg.appendChild(roads);

  // Draw central location pin (User position)
  const centerPinGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
  
  const pulseCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  pulseCircle.setAttribute("cx", centerX);
  pulseCircle.setAttribute("cy", centerY);
  pulseCircle.setAttribute("r", "16");
  pulseCircle.setAttribute("fill", "rgba(0, 108, 116, 0.15)");
  pulseCircle.innerHTML = `<animate attributeName="r" values="8;20;8" dur="2s" repeatCount="indefinite"/>`;
  centerPinGroup.appendChild(pulseCircle);

  const centerCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  centerCircle.setAttribute("cx", centerX);
  centerCircle.setAttribute("cy", centerY);
  centerCircle.setAttribute("r", "6");
  centerCircle.setAttribute("fill", "var(--teal, #006c74)");
  centerCircle.setAttribute("stroke", "#ffffff");
  centerCircle.setAttribute("stroke-width", "2");
  centerPinGroup.appendChild(centerCircle);
  svg.appendChild(centerPinGroup);

  // Find max coordinate offsets to scale map positions
  let maxLatDiff = 0.005;
  let maxLonDiff = 0.008;
  spots.forEach(s => {
    const latD = Math.abs(s.lat - centerLat);
    const lonD = Math.abs(s.lon - centerLon);
    if (latD > maxLatDiff) maxLatDiff = latD;
    if (lonD > maxLonDiff) maxLonDiff = lonD;
  });

  // Calculate coordinates and draw spot pins
  spots.forEach(spot => {
    const latDiff = spot.lat - centerLat;
    const lonDiff = spot.lon - centerLon;

    // Map offset diff to pixel space (lon maps to X, lat maps to Y inverted)
    // Scale appropriately (using 80% boundaries of viewport)
    const scaleX = (width * 0.4) / maxLonDiff;
    const scaleY = (height * 0.4) / maxLatDiff;

    const x = centerX + lonDiff * scaleX;
    const y = centerY - latDiff * scaleY;

    // Check bounds
    if (x < 15 || x > width - 15 || y < 15 || y > height - 15) return;

    // Create Pin marker group
    const pinGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
    pinGroup.setAttribute("class", "map-pin-group");
    pinGroup.setAttribute("cursor", "pointer");

    // Color code pins based on category
    let pinColor = "var(--marigold, #ffa801)"; // stays
    if (spot.tags.amenity) pinColor = "var(--rust, #d35400)"; // food
    else if (spot.tags.tourism && !["hotel", "guest_house", "hostel", "apartment"].includes(spot.tags.tourism)) pinColor = "var(--teal, #008080)"; // attractions

    const pin = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    pin.setAttribute("cx", x);
    pin.setAttribute("cy", y);
    pin.setAttribute("r", "5");
    pin.setAttribute("fill", pinColor);
    pin.setAttribute("stroke", "#ffffff");
    pin.setAttribute("stroke-width", "1.5");
    pinGroup.appendChild(pin);

    // Label tooltip (hidden by default)
    const labelGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
    labelGroup.setAttribute("class", "pin-tooltip");
    labelGroup.setAttribute("opacity", "0");

    const labelBg = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    labelBg.setAttribute("x", x - 60);
    labelBg.setAttribute("y", y - 28);
    labelBg.setAttribute("width", "120");
    labelBg.setAttribute("height", "20");
    labelBg.setAttribute("rx", "4");
    labelBg.setAttribute("fill", "#1e272e");
    labelGroup.appendChild(labelBg);

    const labelText = document.createElementNS("http://www.w3.org/2000/svg", "text");
    labelText.setAttribute("x", x);
    labelText.setAttribute("y", y - 14);
    labelText.setAttribute("text-anchor", "middle");
    labelText.setAttribute("fill", "#ffffff");
    labelText.setAttribute("font-size", "9");
    labelText.setAttribute("font-family", "Space Grotesk");
    labelText.textContent = spot.name.length > 20 ? spot.name.substring(0, 18) + "..." : spot.name;
    labelGroup.appendChild(labelText);

    pinGroup.appendChild(labelGroup);

    // Hover effect
    pinGroup.addEventListener('mouseenter', () => {
      labelGroup.setAttribute("opacity", "1");
      pin.setAttribute("r", "8");
    });
    pinGroup.addEventListener('mouseleave', () => {
      labelGroup.setAttribute("opacity", "0");
      pin.setAttribute("r", "5");
    });

    svg.appendChild(pinGroup);
  });
}

// ---------- Helper: Haversine distance in km ----------
function haversineDistance(lat1, lon1, lat2, lon2) {
  const R = 6371; // Earth radius in km
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

// ---------- Helper: Escape HTML strings ----------
function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, m => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  }[m]));
}
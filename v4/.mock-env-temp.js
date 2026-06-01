const fs = require('fs');
const path = require('path');
const { log } = require('console');

// Define global mock variables to simulate browser environment
global.window = global;
global.navigator = {
  userAgent: "Mozilla/5.0",
  vibrate: () => {},
  serviceWorker: {
    register: () => Promise.resolve({ scope: '/' })
  }
};
global.localStorage = {
  getItem: (key) => null,
  setItem: (key, val) => {}
};

// Mock element class
class MockElement {
  constructor(id, tagName = 'div') {
    this.id = id;
    this.tagName = tagName.toUpperCase();
    this.classList = {
      list: new Set(),
      add: (cls) => this.classList.list.add(cls),
      remove: (cls) => this.classList.list.delete(cls),
      contains: (cls) => this.classList.list.has(cls)
    };
    this.style = {};
    this.listeners = {};
    this.textContent = "";
    this.innerHTML = "";
  }
  
  addEventListener(event, callback) {
    if (!this.listeners[event]) this.listeners[event] = [];
    this.listeners[event].push(callback);
  }
  
  getAttribute(name) {
    if (name === 'data-rakahs') return '2';
    if (name === 'data-name') return 'rakah-2';
    return null;
  }
  
  setAttribute(name, value) {}
}

const mockElements = {};

global.document = {
  documentElement: {
    setAttribute: (name, val) => {}
  },
  
  addEventListener(event, callback) {
    if (event === 'DOMContentLoaded') {
      // Run immediately in mock
      setTimeout(callback, 0);
    }
  },
  
  getElementById(id) {
    if (!mockElements[id]) {
      mockElements[id] = new MockElement(id);
    }
    return mockElements[id];
  },
  
  querySelector(selector) {
    // Return a mock element
    return new MockElement('selector-' + selector);
  },
  
  querySelectorAll(selector) {
    // Return array of mock elements
    if (selector === '.btn-prayer') {
      return [new MockElement('btn-1'), new MockElement('btn-2')];
    }
    return [new MockElement('el')];
  },
  
  createElement(tag) {
    return new MockElement('created-' + Math.random(), tag);
  }
};

// Read app.js code with exact absolute path
const code = fs.readFileSync('c:\\Users\\Khaled El_Saadany\\Desktop\\webDevelopment\\antigravity\\عداد الركعات v2\\app.js', 'utf8');

log("Evaluating app.js in mock environment...");
try {
  eval(code);
  log("Success! No immediate syntax or execution errors on script load.");
  
  // Wait a bit to let DOMContentLoaded run
  setTimeout(() => {
    log("DOMContentLoaded event completed successfully.");
    process.exit(0);
  }, 100);
} catch (err) {
  log("CRITICAL ERROR during app.js load:", err);
  process.exit(1);
}

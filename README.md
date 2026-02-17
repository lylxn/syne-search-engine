# 🔍 Syne | Ask Anything, Get Answers Instantly (NOT AI CHATBOT)

Syne is a lightweight, modern search engine interface designed for speed, clarity, and elegance.  
It provides a clean input bar, responsive design, and seamless backend integration so you can connect your own API and deliver results in real time.

---

## 📋 Overview
Syne is built to be simple yet powerful. The interface keeps your query visible after submission, making it easy to refine searches.  
The goal: create a fast, distraction‑free search experience that feels polished and professional.

---

## 💡 The Idea
Syne is a foundation for a **meta‑search engine**.  
The vision is to:
- Deliver consensus‑ranked results in competitive times (0.2–0.45 seconds).  
- Prioritize **privacy, accessibility, and reliability**.  
- Provide a user‑centric experience with a sleek, minimal UI.  
- Allow developers to plug in their own backend logic via API calls.  

Syne is designed as the **front‑end shell** for that bigger idea: a search engine that feels fast, and trustworthy.

---

## 🛠️ How I Built This
Syne was designed with simplicity and extensibility in mind:

- **HTML5 Structure** → Clean, semantic markup for the search form and footer.  
- **CSS3 Styling** → Gradient background, rounded search bar, hover effects.  
- **Query Persistence** → PHP integration ensures the search term stays visible after submission.  
- **Backend Ready** → Form submits queries via `GET`, ready to connect to your API endpoint.  

Development workflow:
1. **Prototype** → Minimal HTML form with input + button.  
2. **Styling** → Added external CSS for polished design.  
3. **Persistence** → Integrated PHP to keep queries visible.  
4. **Integration** → Prepared form for backend API calls.  

---

## 🌐 Tech Stack
| Layer              | Technology Used |
|--------------------|-----------------|
| UI                 | HTML5, CSS3 (Flexbox) |
| Query Persistence  | PHP (for `$_GET` handling) |
| Backend Integration| API endpoint (customizable) |
| Fonts              | Google Fonts (Syne) |
| Version Control    | Git + GitHub |

---

## 🚀 Getting Started
1. Clone or download the repository.  
2. Place the files in your web server directory (Apache, Nginx, etc.).  
3. Ensure PHP is enabled for query persistence.  
4. Open `index.html` in your browser.  
5. Type a query and hit **Enter** or click the 🔍 button.  

---

## 🌟 Features
- **Minimal UI** → Clean, centered search bar with modern styling.  
- **Query Persistence** → Your search stays visible after submission.  
- **Backend Ready** → Easily connect to your API for real results.  
- **Responsive Design** → Works across devices and screen sizes.  

---

## 🎯 How It Works
1. User enters a query.  
2. Form submits via `GET`.  
3. Query stays in the input field after submission.  
4. Backend API can process the query and return results.
5. (Side note: im planning to use a plethera of engines and use the results from them and rank the websites based off of how many times it appeared across all of them and some engines like google or bing have a heavier weight because they are built better and are used more often)

---

## 📈 Project Status
Syne is evolving into a **meta‑search engine** concept.  
Future iterations will focus on:
- Consensus‑ranked results.  
- Speed optimization.  
- Privacy‑first architecture.  

---

## 📞 Support
Found a bug or have a suggestion? Open an issue on the [GitHub Issues](https://github.com/lyxln/syne/issues) page.  

---

## 📄 License
© 2026 Lylxn. All rights reserved.  
This project is proprietary and protected under copyright.

---

## ✅ Conclusion
Syne is the starting point for a new kind of search engine.  
Fast and elegant. Syne sets the stage for a **user‑centric meta‑search experience**.


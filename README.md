# Wewantwaste Frontend Coding Challenge

## 🧠 My Approach

The original version (blue theme) was visually clean and functional — it got the job done.  
However, I saw an opportunity to enhance the user experience by:

- Displaying more useful information at a glance (like transport/per tonne cost and restrictions)
- Making selected skips stand out more clearly
- Adding a visual "language" to reinforce what's allowed (using icons and color indicators)


The green redesign isn’t just about color. Here’s what changed and why:

- ✅ **More structured information**: Pricing, availability, and hire period are clearly separated
- ✅ **Better selection feedback**: The selected card visually “pops” with an outline and green “Selected” button
- ✅ **Eco-aligned color palette**: The vibrant green fits the theme of waste management and sustainability
- ✅ **Accessibility**: Statuses like “Not Allowed On The Road” are clearly marked with warnings/icons
- ✅ **Responsive layout**: All components adapt cleanly to mobile, tablet, and desktop



## 💻 Tech Stack

- **React** (Vite)
- **TypeScript**
- **Tailwind CSS** with custom theming
- **react-icons** for status and UI icons
- **Custom CSS classes** for reusable components

## 📱 Features

- Dynamic skip data from live API
- Click-to-select skip cards with clear visual feedback
- Responsive footer that updates based on selection
- Conditional rendering for transport/per tonne costs
- Full mobile/tablet/desktop support

## 🚀 How to Run

```bash
npm install
npm run dev


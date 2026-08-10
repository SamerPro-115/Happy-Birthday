# 🎂 Happy Birthday

A simple interactive birthday gift built with **React, TypeScript, Tailwind CSS, and GSAP**.

The idea is to turn a birthday message into a small interactive story where the recipient explores a few scenes before reaching the final birthday surprise.

> 🇸🇦 **This is the Arabic version of the project.**
>
> You can use the project as a starting point and create your own **English version** or customize it however you like.

## Features

- Interactive story
- GSAP animations
- Personalized name through the URL
- Birthday celebration scene
- Sound effects and music
- Responsive design

## Built With

- React
- TypeScript
- Vite
- Tailwind CSS
- GSAP

## Getting Started

Clone the repository:

```bash
git clone https://github.com/SamerPro-115/Happy-Birthday.git
cd happy-birthday
```

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

## Personalizing the Gift

You can personalize the birthday message using the `name` query parameter.

For example:

```text
https://domain.com?name=samer
```

Names are stored in:

```text
src/utils/names.ts
```

You can add your own names there:

```ts
export const names = {
  mohammed: "محمد",
  ahmed: "أحمد",
  samer: "سامر",

  // Add your own
  newname: "الاسم",
} as const;
```

Then use the name as the URL parameter:

```text
https://domain.com?name=newname
```

## Make It Your Own

The project is easy to customize.

You can change:

- The story and scenes
- Text and names
- Images and animations
- Music and sound effects
- The final celebration design
- The language

The current project contains the **Arabic version only**. If you want to use it for an English-speaking recipient, you can modify the text and create your own English version.

---

## 📄 License

The source code of this project is licensed under the MIT License.

Some visual and audio assets may have separate copyrights and licenses.
Please check the respective assets before reusing them.

---

Made with passion & GSAP

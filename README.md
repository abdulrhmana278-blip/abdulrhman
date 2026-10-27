# Abdulrhman Amr — Portfolio

موقع شخصي (React + TypeScript + Vite + Tailwind CSS) منشور على GitHub Pages.

## التشغيل المحلي

```bash
npm install
npm run dev
```

ثم افتح: <http://localhost:5173/abdulrhman/>

## البناء

```bash
npm run build
```

الناتج في مجلد `dist/`.

## النشر على GitHub Pages

يتم النشر تلقائيًا عبر GitHub Actions عند كل Push إلى فرع `main`
(انظر `.github/workflows/deploy.yml`).

- رابط الموقع: <https://abdulrhmana278-blip.github.io/abdulrhman/>
- يجب أن يكون **Settings → Pages → Source** مضبوطًا على **GitHub Actions**.

> ملاحظة: `base` في `vite.config.ts` يجب أن يطابق اسم المستودع (`/abdulrhman/`).

<h1 align="center">
Umi.js + TinaCMS
</h1>

![image](/_img/tina-umi.png)

<br>

This repository demonstrates how to integrate Umi.js with TinaCMS for a dynamic blog-like application.

## Features

- **Dynamic Routing**: Supports dynamic routes for blog posts `/posts` & `/posts/:filename`.
- **Data Pre-loading**: Utilizes Umi.js's `clientLoader` for pre-loading data.
- **Inline Editing**: Integrates TinaCMS Visual Editor with the `useTina` hook.

## Getting Started

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/umi-tinacms.git
   ```

2. **Install dependencies**:

   ```bash
   pnpm install
   ```

3. **Start the development server**:

   ```bash
   pnpm dev
   ```

4. **Open your browser** and navigate to `http://localhost:8000`.
5. **Checkout Tinacms:** navigate to `http://localhost:8000/admin`.

## Documentation

- [Umi.js Documentation](https://umijs.org/)
- [TinaCMS Documentation](https://tina.io/docs/)

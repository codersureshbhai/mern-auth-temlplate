cd C:\Users\tk231\OneDrive\Desktop\web-boilerplates\mern-boilerplate

@"
# MERN Boilerplate
## 🌐 Live Demo

👉 [Visit Live Demo](https://mern-auth-temlplate-96bvllt67-suresh-kumars-projects-b051ab5c.vercel.app/)
Reusable MERN stack starter template.

## Stack

- React + Vite
- Node.js + Express
- MongoDB + Mongoose
- JWT Authentication
- Axios
- React Router

## Setup

### 1. Clone

``````bash
git clone YOUR_REPOSITORY_URL
cd mern-boilerplate
License

MIT
"@ | Set-Content README.md


⚠️ `YOUR_REPOSITORY_URL` ko abhi actual URL se replace karne ki zarurat nahi hai; GitHub repo banne ke baad karenge.

### Part 2 — Check

Run:

```powershell
Get-Content README.md

README properly dikh raha ho to Done bol dena. Phir next part mein GitHub ke liye final cleanup karenge
Haan bro 😄 ekdum **short deployment notes**, sirf jo actual mein kiya:

# MERN Deployment — Short Steps

1. **GitHub** → Project push kiya.

2. **Backend → Render**

   * Root Directory: `server`
   * Build: `npm install`
   * Start: `npm start`
   * Environment Variables:

   ```env
   MONGO_URI=...
   JWT_SECRET=...
   CLIENT_URL=https://mern-auth-temlplate.vercel.app
   ```

3. **Frontend → Vercel**

   * Root Directory: `client`
   * Build: `npm run build`
   * Output: `dist`
   * Environment Variable:

   ```env
   VITE_API_URL=https://mern-auth-temlplate.onrender.com/api
   ```

4. **Deployment ke baad**

   * Vercel ka frontend URL Render ke `CLIENT_URL` mein add/change kiya.
   * Local `localhost` URLs ko production Vercel/Render URLs se replace kiya.
   * CORS error aaya kyunki `CLIENT_URL` mein `https://` missing tha.
   * Correct kiya:

   ```text
   https://mern-auth-temlplate.vercel.app
   ```

   * Uske baad Render ko **redeploy** kiya.

5. **Final Test**

   * Register
   * Login
   * JWT
   * Protected route
   * Refresh
   * Logout
   * CORS/API connection

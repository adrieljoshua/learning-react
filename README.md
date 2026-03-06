# Setup Instructions

Follow these steps to run the project on your computer.

---

## 1. Install Node.js

Download and install Node.js from the official website:

https://nodejs.org

After installing, verify the installation by running:

```
node -v
```

You should see something like:

```
v18.x.x
```

Also verify npm:

```
npm -v
```

---

## 2. Install Git

Download Git:

https://git-scm.com/downloads

Verify installation:

```
git --version
```

---

## 3. Clone the Repository

Open a terminal and run:

```
git clone https://github.com/adrieljoshua/learning-react.git
```

---

## 4. Go Into the Project Folder

```
cd learning-react
```

---

## 5. Install Project Dependencies

Run:

```
npm install
```

This installs all required packages for the project.

---

## 6. Start the Development Server

Run the following command:

```
npm run dev
```

You should see something similar to:

```
Ready on http://localhost:3000
```

---

## 7. Open the Application

Open your browser and go to:

```
http://localhost:3000
```

The React application should now be running.

---

# Project Structure

```
learning-react
│
├── app/ or pages/      Application pages
├── components/         Reusable UI components
├── public/             Static assets
├── styles/             CSS files
├── package.json        Project dependencies
```

---

# Editing the Project

Open the project in **Visual Studio Code**.

From the project folder run:

```
code .
```

Edit any file and save it.
The browser will automatically reload thanks to **Hot Reloading**.

---

# Stopping the Development Server

To stop the server press:

```
CTRL + C
```

in the terminal.

---

# Troubleshooting

If you face dependency issues:

Delete the `node_modules` folder and reinstall.

Mac/Linux:

```
rm -rf node_modules
npm install
```

Windows:

```
rmdir /s node_modules
npm install
```

---

# Recommended Tools

Recommended code editor:

Visual Studio Code
https://code.visualstudio.com

Useful extensions:

* ES7+ React Snippets
* Prettier
* ESLint

---

# Resources

React Documentation
https://react.dev

Next.js Documentation
https://nextjs.org/docs

---

Happy coding!

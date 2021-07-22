# Authentication App

-   Frontend made with

    -   React
    -   Tailwindcss

-   Backend made with
    -   Nodejs
    -   Express

## How to get started locally

```bash
# To clone the repo
git clone https://github.com/K-Kelvin/authentication-app

# Navigate to client and install dependencies
cd ./client && npm install

### build the frontend and copy the build folder to the server folder
npm run build && xcopy ./build ../server /e /i /y

# Navigate to server and install dependencies
cd ../server && npm install

### run the development server
npm dev-start
```

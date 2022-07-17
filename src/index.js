import app from "./app.js"

// nodejs server execution
const main = () => {
    app.listen(app.get("port"));
    console.log(`Server on port ${app.get("port")}`);
};

main();
// Create web server
// 1. Import express
const express = require('express');
// 2. Create web server
const app = express();
// 3. Create router
const router = express.Router();
// 4. Create route
router.get('/', (req, res) => {
    res.send('Hello World');
});
// 5. Register router
app.use('/', router);
// 6. Start server
app.listen(3000, () => {
    console.log('Server started');
}); 
// Run server
// node comments.js
// Open browser and access to http://localhost:3000/ 
// You will see 'Hello World'
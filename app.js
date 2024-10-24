const express = require('express');
const app = express();
const slotRoutes = require('./routes/slotRoutes');

// Middleware
app.use(express.json());

// Slot machine routes
app.use('/api', slotRoutes);

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

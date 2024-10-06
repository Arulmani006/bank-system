import express from 'express';
import BankController from './controllers/bankController.js';

const app = express();
app.use(express.json());

app.post('/customer', async (req, res) => {
  try {
    const { name, email, phoneNumber } = req.body;
    const customer = await BankController.createCustomer(name, email, phoneNumber);
    res.status(201).json(customer);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

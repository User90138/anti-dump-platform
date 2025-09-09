import express from 'express';
import { ClaimController } from './controllers/ClaimController';
import { TWAPJob } from './jobs/TWAPJob';

const app = express();
const controller = new ClaimController();
const twapJob = new TWAPJob();

app.use(express.json());

app.post('/api/claim', async (req, res) => {
  const { user, amount, chain, signature } = req.body;
  try {
    const result = await controller.handleClaim(user, amount, chain, signature);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'Ошибка заявки' });
  }
});

app.get('/api/stats', async (req, res) => {
  const stats = await controller.getStats();
  res.json(stats);
});

app.get('/api/preview/:amount', async (req, res) => {
  const preview = await controller.getPreview(Number(req.params.amount));
  res.json(preview);
});

app.listen(3000, () => {
  console.log('Бэкенд запущен на порту 3000');
  // TODO: Запустить TWAPJob по расписанию
});

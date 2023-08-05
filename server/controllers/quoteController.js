const { PrismaClient } = require('@prisma/client');
const { validationResult } = require('express-validator');
const prisma = new PrismaClient();

const getAllQuotes = async (req, res) => {
  const quotes = await prisma.quote.findMany();
  res.json(quotes);
};

const getQuoteById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const quote = await prisma.quote.findUnique({ where: { id: Number(id) } });
    if (!quote) return next();
    res.json(quote);
  } catch (error) {
    next(error);
  }
};

const createQuote = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, phoneNumber, date } = req.body;
  const quote = await prisma.quote.create({
    data: {
      email,
      phoneNumber,
      date: new Date(date),
    },
  });
  res.json(quote);
};

const updateQuote = async (req, res, next) => {
  const { id } = req.params;
  const data = req.body;
  try {
    const quote = await prisma.quote.update({
      where: { id: Number(id) },
      data,
    });
    if (!quote) return next();
    res.json(quote);
  } catch (error) {
    next(error);
  }
};

const deleteQuote = async (req, res, next) => {
  const { id } = req.params;
  try {
    const quote = await prisma.quote.delete({ where: { id: Number(id) } });
    if (!quote) return next();
    res.json({ message: 'Quote deleted successfully.' });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllQuotes,
  getQuoteById,
  createQuote,
  updateQuote,
  deleteQuote,
};

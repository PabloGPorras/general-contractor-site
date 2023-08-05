const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.getUserAccount = async (req, res) => {
  const { userId } = req.params;

  const user = await prisma.user.findUnique({
    where: {
      id: Number(userId),
    },
    include: {
      invoices: true,
    },
  });

  res.json(user);
};

exports.updateUserAccount = async (req, res) => {
  const { userId } = req.params;
  const { email, phoneNumber, password } = req.body;

  const updatedUser = await prisma.user.update({
    where: {
      id: Number(userId),
    },
    data: {
      email,
      phoneNumber,
      password,
    },
  });

  res.json(updatedUser);
};

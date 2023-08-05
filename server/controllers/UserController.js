const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();



exports.getUser = async (req, res) => {
    try {
        const user = await prisma.user.findUnique({
            where: { id: parseInt(req.params.id) },
        });
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateUser = async (req, res) => {
    try {
        const user = await prisma.user.update({
            where: { id: parseInt(req.params.id) },
            data: req.body,
        });
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteUser = async (req, res) => {
    try {
        const user = await prisma.user.delete({
            where: { id: parseInt(req.params.id) },
        });
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updatePassword = async (req, res) => {
    try {
        // For simplicity, we're not handling password hashing or validation here.
        // In a real-world app, you would want to securely hash and verify passwords.
        const user = await prisma.user.update({
            where: { id: parseInt(req.params.id) },
            data: { password: req.body.password },
        });
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

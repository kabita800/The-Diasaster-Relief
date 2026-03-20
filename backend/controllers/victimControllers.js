import prisma from "../DB/prisma.js";

export const getVictims = async (req, res) => {
  try {
    const victims = await prisma.victim.findMany({ orderBy: { id: "desc" } });
    res.json(victims);
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};

export const createVictim = async (req, res) => {
  try {
    const victim = await prisma.victim.create({
      data: req.body
    });
    res.json(victim);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
};

export const deleteVictim = async (req, res) => {
  try {
    await prisma.victim.delete({ where: { id: Number(req.params.id) } });
    res.json({ msg: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};

export const updateVictim = async (req, res) => {
  try {
    const updated = await prisma.victim.update({
      where: { id: Number(req.params.id) },
      data: req.body
    });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};

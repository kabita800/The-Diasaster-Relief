import prisma from "../DB/prisma.js";

// Fetch all disasters
export const getDisasters = async (req, res) => {
  try {
    const disasters = await prisma.disaster.findMany({
      orderBy: { id: "desc" },
    });
    res.json(disasters);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error while fetching disasters" });
  }
};

export const deleteDisaster = async (req, res) => {
  try {
    await prisma.disaster.delete({ where: { id: Number(req.params.id) } });
    res.json({ msg: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};

export const updateDisaster = async (req, res) => {
  try {
    const updated = await prisma.disaster.update({
      where: { id: Number(req.params.id) },
      data: req.body
    });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};

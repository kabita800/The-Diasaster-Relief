import prisma from "../DB/prisma.js";

export const getDonors = async (req, res) => {
  try {
    const donors = await prisma.donor.findMany({ orderBy: { id: "desc" } });
    res.json(donors);
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};

export const createDonor = async (req, res) => {
  try {
    const donor = await prisma.donor.create({
      data: req.body
    });
    res.json(donor);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
};

export const deleteDonor = async (req, res) => {
  try {
    await prisma.donor.delete({ where: { id: Number(req.params.id) } });
    res.json({ msg: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};

export const updateDonor = async (req, res) => {
  try {
    const updated = await prisma.donor.update({
      where: { id: Number(req.params.id) },
      data: req.body
    });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};

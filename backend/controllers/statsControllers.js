import prisma from "../DB/prisma.js";

export const getStats = async (req, res) => {
  try {
    const disasters = await prisma.disaster.findMany();
    const victimsCount = await prisma.user.count({ where: { role: 'VICTIM' } });
    const donorsCount = await prisma.user.count({ where: { role: 'DONOR' } });
    
    // Group disasters by type
    const disasterCounts = {};
    disasters.forEach(d => {
      disasterCounts[d.disasterType] = (disasterCounts[d.disasterType] || 0) + 1;
    });

    const chartData = Object.keys(disasterCounts).map(key => ({
      name: key,
      cases: disasterCounts[key]
    }));

    res.json({
      chartData,
      totals: {
        disasters: disasters.length,
        victims: victimsCount,
        donors: donorsCount,
      }
    });
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};

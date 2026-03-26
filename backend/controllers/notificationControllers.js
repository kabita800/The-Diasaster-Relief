import prisma from "../DB/prisma.js";

export const getNotifications = async (req, res) => {
  try {
    const { userId, role } = req.query;

    let whereClause = {};
    if (role === 'admin') {
      whereClause = {
        OR: [{ targetRole: 'ADMIN' }, { targetRole: 'admin' }]
      };
    } else if (userId && userId !== 'undefined') {
      whereClause = { userId: Number(userId) };
    } else {
      return res.status(400).json({ msg: "User ID or role required" });
    }

    const notifications = await prisma.notification.findMany({
      where: whereClause,
      orderBy: { createdAt: "desc" }
    });
    
    res.json(notifications);
  } catch (err) {
    console.error("Error fetching notifications:", err);
    res.status(500).json({ msg: "Server error" });
  }
};

export const markAsRead = async (req, res) => {
  try {
    const { id } = req.params;
    const notification = await prisma.notification.update({
      where: { id: Number(id) },
      data: { isRead: true }
    });
    res.json(notification);
  } catch (err) {
    console.error("Error updating notification:", err);
    res.status(500).json({ msg: "Server error" });
  }
};

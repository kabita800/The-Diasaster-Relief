import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  // Create admin user
  const hashedPassword = await bcrypt.hash('admin123', 10);
  const adminUser = await prisma.user.upsert({
    where: { email: 'admin@example.com' },
    update: {},
    create: {
      email: 'admin@example.com',
      name: 'Site Admin',
      password: hashedPassword,
      role: 'ADMIN',
    },
  });
  console.log(`Admin user created: ${adminUser.email}`);

  // Create random worldwide disasters
  const disasters = [
    {
      disasterType: 'Earthquake',
      province: 'Osh Region',
      district: 'Alay District',
      city: 'Gulcha',
      date: '2026-02-14',
      time: '04:12 AM',
    },
    {
      disasterType: 'Hurricane',
      province: 'Florida',
      district: 'Miami-Dade',
      city: 'Miami',
      date: '2026-01-22',
      time: '14:30 PM',
    },
    {
      disasterType: 'Flood',
      province: 'Dhaka Division',
      district: 'Sylhet',
      city: 'Sylhet',
      date: '2026-03-01',
      time: '08:00 AM',
    },
    {
      disasterType: 'Wildfire',
      province: 'New South Wales',
      district: 'Blue Mountains',
      city: 'Katoomba',
      date: '2026-01-10',
      time: '16:45 PM',
    },
    {
      disasterType: 'Tsunami',
      province: 'Hokkaido',
      district: 'Nemuro Subprefecture',
      city: 'Nemuro',
      date: '2025-12-05',
      time: '03:20 AM',
    }
  ];

  for (const disaster of disasters) {
    // Basic deduplication based on city and date
    const existing = await prisma.disaster.findFirst({
      where: { city: disaster.city, date: disaster.date }
    });
    
    if (!existing) {
      await prisma.disaster.create({
        data: disaster
      });
      console.log(`Disaster created: ${disaster.disasterType} in ${disaster.city}`);
    }
  }

  // Create random victims
  const victims = [
    { fullName: 'John Doe', email: 'john@example.com', province: 'Florida', district: 'Miami-Dade', city: 'Miami', date: '2026-01-22', time: '14:30 PM' },
    { fullName: 'Jane Smith', email: 'jane@example.com', province: 'New South Wales', district: 'Blue Mountains', city: 'Katoomba', date: '2026-01-10', time: '16:45 PM' },
    { fullName: 'Ali Khan', email: 'ali@example.com', province: 'Dhaka Division', district: 'Sylhet', city: 'Sylhet', date: '2026-03-01', time: '08:00 AM' },
  ];

  for (const v of victims) {
    const existing = await prisma.victim.findFirst({ where: { email: v.email } });
    if (!existing) {
      await prisma.victim.create({ data: v });
      console.log(`Victim created: ${v.fullName}`);
    }
  }

  // Create random donors
  const donors = [
    { fullName: 'Alice Parker', email: 'alice@example.com', province: 'California', district: 'Los Angeles', city: 'LA', date: '2026-02-01', time: '10:00 AM' },
    { fullName: 'Bob Builder', email: 'bob@example.com', province: 'Texas', district: 'Austin', city: 'Austin', date: '2026-03-05', time: '11:15 AM' },
    { fullName: 'Carlos Ray', email: 'carlos@example.com', province: 'Ontario', district: 'Toronto', city: 'Toronto', date: '2026-03-10', time: '09:20 AM' },
  ];

  for (const d of donors) {
    const existing = await prisma.donor.findFirst({ where: { email: d.email } });
    if (!existing) {
      await prisma.donor.create({ data: d });
      console.log(`Donor created: ${d.fullName}`);
    }
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

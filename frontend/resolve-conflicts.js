import fs from "fs";
import path from "path";

const files = [
  "src/App.jsx",
  "src/components/Bar.jsx",
  "src/components/Footer.jsx",
  "src/components/Sidebar.jsx",
  "src/pages/dashboard/Dashboard.jsx",
  "src/pages/dashboard/Disasters.jsx",
  "src/pages/dashboard/Donor.jsx",
  "src/pages/dashboard/Victim.jsx",
  "src/pages/public/DonationForm.jsx",
  "src/pages/Victim.jsx/HelpForm.jsx"
];

for (let f of files) {
  try {
    let p = path.join(process.cwd(), f);
    let content = fs.readFileSync(p, "utf-8");
    let changed = false;
    content = content.replace(/<<<<<<< HEAD\r?\n([\s\S]*?)\r?\n=======\r?\n([\s\S]*?)\r?\n>>>>>>>.*?\r?\n/g, (match, p1, p2) => {
      changed = true;
      if (p2.trim() === "" && p1.includes("/*")) {
        return p1 + "\n";
      }
      return p2 + "\n";
    });
    if (changed) {
      fs.writeFileSync(p, content);
      console.log("Fixed " + f);
    }
  } catch(e) { console.error(e) }
}

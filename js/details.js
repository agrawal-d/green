const apps = [
  {
    name: "discord",
  },
];

const el = (name) => document.getElementById(name);

const appList = el("apps-list");

for (const app of apps) {
  console.log(app);
  alert(app.name);
}

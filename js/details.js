const apps = [
  { name: "Jio", icon: "jio.png", high: 1, spy: 1 },
  { name: "Superset", icon: "superset.png", high: 1 },
  { name: "Discord", icon: "discord.png", high: 1 },
  { name: "Soundcore", icon: "soundcore.png", medium: 1 },
  { name: "Soundcore", icon: "soundcore.png", medium: 1 },
  { name: "Smart Campus BPHC", icon: "smart-campus.png", medium: 1 },
  { name: "CMS BPHC", icon: "cms-bphc.png", low: 1 },
  { name: "Spotify", icon: "spotify.png", low: 1 },
  { name: "NYTimes", icon: "times.png", low: 1 },
];

const el = (name) => document.getElementById(name);

const appsList = el("apps-list");
let listString = "";

for (const app of apps) {
  listString += `
  <li class="list-group-item" onclick="t('${app.name}.html')">
  <div class="row">
  <div class="col-3 text-center">
      <img src="img/${app.icon}" alt="${app.name} Icon" class="app">
  </div>
  <div class="col-9"><h6>${app.name}</h6>
  ${
    app.high
      ? '<span class="badge badge-pill badge-danger"><span class="icon-warning-sign"></span> High power use</span>'
      : ""
  }
  ${
    app.spy
      ? '<span class="badge badge-pill badge-primary">Possible spyware</span>'
      : ""
  }
  ${
    app.medium
      ? '<span class="badge badge-pill badge-warning">Medium power use</span>'
      : ""
  }
  ${
    app.low
      ? '<span class="badge badge-pill badge-success">Low power use</span>'
      : ""
  }
  </div>
</div></li>
  `;
}

appsList.innerHTML = listString;

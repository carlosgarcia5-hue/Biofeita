const links = [
  {
    text: "MOD MENU P2077KNG V7.5",
    url: "https://www.mediafire.com/file/ofj0rxuyyu6vqhb/ROHAN_MODS_SAFE_VERSION_FIX.apk/file",
    icon: "🔥"
  },
  {
    text: "GRUPO TELEGRAM",
    url: "https://t.me/+4HPmiuUApC5hMzBh",
    icon: "✈️"
  },
  {
    text: "VPN (TESTE)",
    url: "https://www.mediafire.com/file/efgh5678/VPN.apk/file",
    icon: "🔒"
  },
  {
    text: "TUTORIAL DE COMO USAR A VPN",
    url: "https://www.youtube.com/watch?v=XXXXX",
    icon: "▶️"
  },
  {
    text: "OBB DO MOD MENU",
    url: "https://www.mediafire.com/file/ijkl9012/OBB.zip/file",
    icon: "📦"
  }
];

const container = document.getElementById("links");

links.forEach(link => {
  const btn = document.createElement("button");
  btn.textContent = `${link.icon}  ${link.text}`;
  btn.onclick = () => {
    window.open(link.url, "_blank"); // ← esto abre el enlace
  };
  container.appendChild(btn);
});


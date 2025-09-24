
  const template = document.getElementById("card-template");
  const contenedor = document.getElementById("contenedor");

  const productos = [
    {titulo: "Laptop", desc: "16GB RAM", price: "1500 dls",img: "https://cdn.thewirecutter.com/wp-content/media/2025/09/BEST-WINDOWS-LAPTOPS-8852.jpg"},
    {titulo: "Mouse", desc: "Inalámbrico", price: "100 dls",img: "https://images-cdn.ubuy.co.in/6667778eb14d6615d853c452-hp-wired-gaming-mouse-led-rgb-backlit.jpg"},
      {titulo: "cpu", desc: "ryzen 9 9900x", price: "1000 dls",img: "https://www.janus.com.co/cdn/shop/files/Ryzen-9-9900X_720x.png?v=1725032270"},
    {titulo: "grafica", desc: "rtx 5090", price: "700 dls",img : "https://www.gigabyte.com/FileUpload/Global/KeyFeature/3847/innergigabyte/images/cooling-card1.png"},
      {titulo: "monitor", desc: "365 hz", price: "300 dls",img : "https://www.nvidia.com/content/dam/en-zz/Solutions/GeForce/technologies/360-hz/aoc-360hz-g-sync-monitor-3c33-d.png"},

  ];

  productos.forEach(p => {
    const clon = template.content.cloneNode(true);
    clon.querySelector(".title").textContent = p.titulo;
    clon.querySelector(".desc").textContent = p.desc;
      clon.querySelector(".price").textContent = p.price;
       clon.querySelector("img").src = p.img;
         clon.querySelector("img").title = p.desc;

    contenedor.appendChild(clon);
  });



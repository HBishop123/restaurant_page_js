(()=>{"use strict";!function(){const e=document.getElementById("content");(()=>{const t=document.querySelectorAll("*"),n=document.querySelector("body");for(let e=0;e<t.length;e++){const n=t[e];n.style.boxSizing="border-box",n.style.margin="0px",n.style.padding="0px"}n.style.height="100%",n.style.width="100%",document.body.appendChild(e)})(),function(){const t=document.createElement("header");t.style.display="flex",t.style.flexDirection="column",t.style.alignItems="center",t.style.backgroundColor="white",t.style.position="sticky",t.style.top="0",e.appendChild(t)}(),function(){const e=document.querySelector("header"),t=document.createElement("div");t.className="logo",e.appendChild(t);const n=document.createElement("img");n.alt="Restaurant Logo",n.src="../src/images/red-kitchen-chef-design-logo-template-chef-restaurant-logo-stock-illustrations-free-vector.web",n.style.height="100px",n.style.width="auto",e.appendChild(n);const l=document.createElement("nav");l.style.display="flex",l.style.flexDirection="row",l.style.justifyContent="center",l.style.alignItems="center",l.style.width="100%",l.style.height="30px",l.style.gap="50px",l.style.backgroundColor="#b0171f",l.style.color="white",l.style.fontWeight="bold",l.style.fontFamily="'Roboto,' sans-serif",e.appendChild(l);const s=document.createElement("p"),i=document.createElement("p"),o=document.createElement("p");s.textContent="Menu",i.textContent="Company",o.textContent="Jobs",l.appendChild(s),l.appendChild(i),l.appendChild(o)}(),function(){const t=document.createElement("main");t.style.width="100%",t.style.height="100%",t.style.backgroundColor="rgb(240, 240, 240)",e.appendChild(t);const n=document.createElement("div");n.className="main-container",n.style.maxWidth="1500px",n.style.margin="auto",n.style.display="grid",n.style.gridTemplateColumns="repeat(2, 1fr)",n.style.gridTemplateRows="300px 100px 450px 450px 450px",t.appendChild(n);const l=document.createElement("div");l.style.display="flex",l.style.justifyContent="center",l.style.width="100%",l.style.backgroundColor="white",n.appendChild(l);const s=document.createElement("img");s.src="../src/images/burger.png",s.alt="A Beautiful Burger",s.style.height="300px",s.style.width="auto",s.style.paddingTop="10px",s.style.justifySelf="center",l.appendChild(s);const i=document.createElement("div");i.style.display="flex",i.style.justifyContent="center",i.style.flexDirection="column",i.style.width="100%",i.style.backgroundColor="white",i.style.gap="10px",n.appendChild(i);const o=document.createElement("p");o.innerText="It's time for us to show you the perfect burger.",o.style.color="red",o.style.fontWeight="bold",o.style.fontSize="50px",o.style.width="70%",o.style.fontFamily="'Asap', sans-serif",o.style.margin="0px",i.appendChild(o);const a=document.createElement("p");a.innerText="It's official, we've arrived...with hot, fresh, juicy burgers that are served FRESH off the grill, NOT the warming tray...",a.style.width="60%",a.style.fontSize="16px",a.style.fontFamily="'Roboto', sans-serif",a.style.margin="0px",i.appendChild(a)}(),function(){const e=document.querySelector(".main-container"),t=document.createElement("div");t.style.gridColumn="1/3",t.style.display="flex",t.style.flexDirection="row",t.style.gap="20px",t.style.alignItems="center",t.style.justifyContent="space-around",e.appendChild(t);const n=document.createElement("div");n.style.display="flex",n.style.flexDirection="column",n.style.alignItems="center",n.style.justifyContent="center",t.appendChild(n);const l=document.createElement("img");l.src="../src/images/veggie.png",l.alt="Veggie Burger",l.style.width="80px",l.style.height="80px",n.appendChild(l);const s=document.createElement("p");s.innerText="Veggie Options",s.style.fontSize="16px",s.style.fontFamily="'Roboto', sans-serif",s.style.margin="0px",n.appendChild(s);const i=document.createElement("div");i.style.display="flex",i.style.flexDirection="column",i.style.alignItems="center",i.style.justifyContent="center",t.appendChild(i);const o=document.createElement("img");o.src="../src/images/brekfast.png",o.alt="Breakfast Burger Options",o.style.width="80px",o.style.height="80px",i.appendChild(o);const a=document.createElement("p");a.innerText="Breakfast Combos",a.style.fontSize="16px",a.style.fontFamily="'Roboto', sans-serif",a.style.margin="0px",i.appendChild(a);const r=document.createElement("div");r.style.display="flex",r.style.flexDirection="column",r.style.alignItems="center",r.style.justifyContent="center",t.appendChild(r);const d=document.createElement("img");d.src="../src/images/salad.png",d.alt="Salad Options",d.style.width="80px",d.style.height="80px",r.appendChild(d);const c=document.createElement("p");c.innerText="Fresh-Made Salads",c.style.fontSize="16px",c.style.fontFamily="'Roboto', sans-serif",c.style.margin="0px",r.appendChild(c);const y=document.createElement("div");y.style.display="flex",y.style.flexDirection="column",y.style.alignItems="center",y.style.justifyContent="center",t.appendChild(y);const p=document.createElement("img");p.src="../src/images/sandwich.png",p.alt="Sandwich Options",p.style.width="80px",p.style.height="80px",y.appendChild(p);const m=document.createElement("p");m.innerText="Sandwiches",m.style.fontSize="16px",m.style.fontFamily="'Roboto', sans-serif",m.style.margin="0px",y.appendChild(m);const h=document.createElement("div");h.style.display="flex",h.style.flexDirection="column",h.style.alignItems="center",h.style.justifyContent="center",t.appendChild(h);const g=document.createElement("img");g.src="../src/images/fries.png",g.alt="Side Options",g.style.width="80px",g.style.height="80px",h.appendChild(g);const u=document.createElement("p");u.innerText="Fries & Sides",u.style.fontSize="16px",u.style.fontFamily="'Roboto', sans-serif",u.style.margin="0px",h.appendChild(u);const f=document.createElement("div");f.style.display="flex",f.style.flexDirection="column",f.style.alignItems="center",f.style.justifyContent="center",t.appendChild(f);const x=document.createElement("img");x.src="../src/images/drink.png",x.alt="Drink Options",x.style.width="100px",x.style.height="80px",f.appendChild(x);const C=document.createElement("p");C.innerText="Beverages",C.style.fontSize="16px",C.style.fontFamily="'Roboto', sans-serif",C.style.margin="0px",f.appendChild(C)}(),function(){const e=document.querySelector(".main-container"),t=document.createElement("div");t.style.height="100%",t.style.width="100%",t.style.gridColumn="1/2",t.style.gridRow="3/4",t.style.backgroundColor="white",t.style.display="flex",t.style.justifyContent="center",t.style.flexDirection="column",t.style.gap="10px",t.style.paddingLeft="13%",e.appendChild(t);const n=document.createElement("p");n.innerText="Proper Spicy Nuggs! All Fillet. No Filler",n.style.color="red",n.style.fontWeight="bold",n.style.fontSize="50px",n.style.width="70%",n.style.fontFamily="'Asap', sans-serif",n.style.margin="0px",t.appendChild(n);const l=document.createElement("p");l.innerText="Our Spicy Chicken Nuggets are the standard bu which all other spicy nuggets are judged against. Many have tried and failed, but there's nothing like our verified, original Spicy Chicken Nuggets. They're legit!",l.style.width="60%",l.style.fontSize="16px",l.style.fontFamily="'Roboto', sans-serif",l.style.margin="0px",t.appendChild(l);const s=document.createElement("div");s.style.height="100%",s.style.width="100%",s.style.gridColumn="2/3",s.style.gridRow="3/4",s.style.backgroundColor="white",e.appendChild(s);const i=document.createElement("img");i.src="../src/images/chicken.png",i.alt="Spicy Chicken Nuggets",i.style.width="100%",i.style.height="450px",s.appendChild(i)}(),function(){const e=document.querySelector(".main-container"),t=document.createElement("div");t.style.height="100%",t.style.width="100%",t.style.backgroundColor="white",e.appendChild(t);const n=document.createElement("img");n.src="../src/images/red-restaurant.png",n.alt="Image of our red restaurant",n.style.width="100%",n.style.height="450px",t.appendChild(n);const l=document.createElement("div");l.style.height="100%",l.style.width="100%",l.style.backgroundColor="white",l.style.display="flex",l.style.justifyContent="center",l.style.flexDirection="column",l.style.gap="10px",e.appendChild(l);const s=document.createElement("p");s.innerText="We're bringing the heat to the streets.",s.style.color="red",s.style.fontWeight="bold",s.style.fontSize="50px",s.style.width="70%",s.style.fontFamily="'Asap', sans-serif",s.style.paddingLeft="13%",s.style.margin="0px",l.appendChild(s);const i=document.createElement("p");i.innerText="Fancy a burger that's freshly made, not pre-made? That was rehtorical... of course you do! We're now open! Find us all across the globe!",i.style.width="60%",i.style.fontSize="16px",i.style.fontFamily="'Roboto', sans-serif",i.style.paddingLeft="13%",i.style.margin="0px",l.appendChild(i)}(),function(){const e=document.querySelector(".main-container"),t=document.createElement("div");t.style.height="100%",t.style.width="100%",t.style.backgroundColor="white",t.style.display="flex",t.style.justifyContent="center",t.style.flexDirection="column",t.style.paddingLeft="13%",t.style.gap="30px",e.appendChild(t);const n=document.createElement("p");n.innerText="Real Food. Real Careers.",n.style.color="red",n.style.fontWeight="bold",n.style.fontSize="50px",n.style.width="70%",n.style.fontFamily="'Asap', sans-serif",n.style.margin="0px",t.appendChild(n);const l=document.createElement("p");l.innerText="Come and work for us!",l.style.width="60%",l.style.fontSize="16px",l.style.fontFamily="'Roboto', sans-serif",l.style.margin="0px",t.appendChild(l);const s=document.createElement("p");s.innerText="For 50 years we've been serving up our world class burgers and have remained devoted to treating our employees fair and square. We offer flexibility. Fun. The feeling that you can just be you.",s.style.width="60%",s.style.fontSize="16px",s.style.fontFamily="'Roboto', sans-serif",s.style.margin="0px",t.appendChild(s);const i=document.createElement("p");i.innerText="No zero-contract. No nonsense. Jobs and careers done right.",i.style.width="60%",i.style.fontSize="16px",i.style.fontFamily="'Roboto', sans-serif",i.style.margin="0px",t.appendChild(i);const o=document.createElement("p");o.innerHTML="Discover how we can help you grow your career here.",o.style.width="60%",o.style.fontSize="16px",o.style.fontFamily="'Roboto', sans-serif",o.style.margin="0px",t.appendChild(o);const a=document.createElement("div");a.style.height="100%",a.style.width="100%",a.style.backgroundColor="white",e.appendChild(a);const r=document.createElement("img");r.src="../src/images/happy-staff.png",r.alt="picture of happy staff",r.style.width="100%",r.style.height="450px",a.appendChild(r)}(),function(){const e=document.querySelector("body"),t=document.createElement("footer");t.style.height="50px",t.style.backgroundColor="#b0171f",t.style.margin="0px",t.style.padding="0px",t.style.display="flex",t.style.flexDirection="column",e.appendChild(t);const n=document.createElement("p");n.innerText="Contact Us",n.style.fontFamily="Roboto, sans-serif",n.style.paddingLeft="5px",n.style.margin="0px",n.style.alignSelf="center",n.style.margin="2.5px 0px 2.5px 0px",n.style.fontWeight="bold",n.style.fontSize="1.1rem",t.appendChild(n);const l=document.createElement("ul");l.style.display="flex",l.style.flexDirection="row",l.style.gap="50px",l.style.listStyle="none",l.style.justifyContent="center",l.style.alignItems="center",l.style.paddingLeft="5px",l.style.margin="0px",t.appendChild(l);const s=document.createElement("li");s.innerText="Cookies and Tracking",s.style.fontFamily="'Roboto', sans-serif",s.style.fontWeight="bold",l.appendChild(s);const i=document.createElement("li");i.innerText="Privacy Policy",i.style.fontFamily="'Roboto', sans-serif",i.style.fontWeight="bold",l.appendChild(i);const o=document.createElement("li");o.innerText="Manage Privacy Preferences",o.style.fontFamily="'Roboto', sans-serif",o.style.fontWeight="bold",l.appendChild(o);const a=document.createElement("li");a.innerText="Tax Strategy",a.style.fontFamily="'Roboto', sans-serif",a.style.fontWeight="bold",l.appendChild(a)}()}()})();
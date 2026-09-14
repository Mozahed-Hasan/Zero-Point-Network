// src/lib/data.ts  –  ZPN website data

export interface Package {
  id: string; emoji: string; name: string; speed: number; price: number;
  color: string; popular?: boolean; best?: boolean;
}
export interface FTPLink { id: string; icon: string; name: string; url: string; server: string; }
export interface FTPCategory { id: string; label: string; links: FTPLink[]; }
export interface Area { id: string; name: string; active: boolean; }

export const packages: { personal: Package[]; premium: Package[] } = {
  personal: [
    { id:"bachelor", emoji:"🎓", name:"ব্যাচেলর",     speed:30,  price:500,  color:"#6B7280" },
    { id:"bhai",     emoji:"👥", name:"ভাই-বন্ধু",    speed:50,  price:600,  color:"#059669" },
    { id:"friends",  emoji:"🤝", name:"জাস্ট ফ্রেন্ডস",speed:60, price:700,  color:"#0284C7" },
    { id:"modhu",    emoji:"🍯", name:"মধু",           speed:80,  price:800,  color:"#7C3AED", popular:true },
    { id:"mama",     emoji:"👨", name:"মামা",          speed:100, price:1000, color:"#D97706" },
    { id:"ustad",    emoji:"🎯", name:"ওস্তাদ",        speed:130, price:1200, color:"#DB2777" },
  ],
  premium: [
    { id:"posh",   emoji:"🔥", name:"পশ",    speed:150, price:1500, color:"#92400E" },
    { id:"star",   emoji:"⭐", name:"স্টার",  speed:200, price:2000, color:"#1D4ED8" },
    { id:"master", emoji:"🏆", name:"মাস্টার",speed:250, price:2500, color:"#065F46" },
    { id:"king",   emoji:"👑", name:"কিং",   speed:300, price:3000, color:"#B91C1C", best:true },
  ],
};

export const ftpCategories: FTPCategory[] = [
  { id:"movies", label:"Movies", links:[
    { id:"eng-m",    icon:"🎬", name:"English Movies",           url:"http://index.circleftp.net/FILE/English%20Movies/",                     server:"index.circleftp.net" },
    { id:"hindi-m",  icon:"🎥", name:"Hindi Movies",             url:"http://index1.circleftp.net/FILE/Hindi%20Movies/",                      server:"index1.circleftp.net" },
    { id:"tamil-m",  icon:"🎞️", name:"Tamil, Telugu & Others",   url:"http://ftp13.circleftp.net/FILE/Tamil%20Telugu%20%26%20Others/",        server:"ftp13.circleftp.net" },
    { id:"anim-m",   icon:"🐭", name:"Animated Movies",          url:"http://ftp5.circleftp.net/FILE/Animation%20Movies/",                    server:"ftp5.circleftp.net" },
    { id:"dub-m",    icon:"🎭", name:"Dubbed Animated Movies",   url:"http://ftp5.circleftp.net/FILE/Animation%20Dubbed%20Movies/",           server:"ftp5.circleftp.net" },
    { id:"for-m",    icon:"🌍", name:"Foreign Language Movies",  url:"http://ftp5.circleftp.net/FILE/Foreign%20Language%20Movies/",           server:"ftp5.circleftp.net" },
  ]},
  { id:"series", label:"TV Shows & Series", links:[
    { id:"hindi-s",  icon:"📺", name:"Hindi TV Series",               url:"http://ftp8.circleftp.net/FILE/Hindi%20TV%20Series/",                          server:"ftp8.circleftp.net" },
    { id:"indian-s", icon:"📡", name:"Indian TV Shows",               url:"http://ftp8.circleftp.net/FILE/Indian%20TV%20Shows/",                          server:"ftp8.circleftp.net" },
    { id:"awards",   icon:"🏆", name:"Indian Awards Shows",           url:"http://ftp8.circleftp.net/FILE/Hindi%20Awards%20Shows/",                       server:"ftp8.circleftp.net" },
    { id:"eng-s1",   icon:"🎬", name:"English & Foreign Series 1",   url:"http://ftp4.circleftp.net/FILE/English%20%26%20Foreign%20TV%20Series/",         server:"ftp4.circleftp.net" },
    { id:"eng-s2",   icon:"🎬", name:"English & Foreign Series 2",   url:"http://ftp9.circleftp.net/FILE/English%20%26%20Foreign%20TV%20Series/",         server:"ftp9.circleftp.net" },
    { id:"eng-s3",   icon:"🎬", name:"English & Foreign Series 3",   url:"http://ftp10.circleftp.net/FILE/File/English%20%26%20Foreign%20TV%20Series/",   server:"ftp10.circleftp.net" },
    { id:"eng-s4",   icon:"🎬", name:"English & Foreign Series 4",   url:"http://ftp12.circleftp.net/FILE/English%20%26%20Foreign%20TV%20Series/",        server:"ftp12.circleftp.net" },
    { id:"eng-s5",   icon:"🎬", name:"English & Foreign Series 5",   url:"http://ftp11.circleftp.net/FILE/English%20%26%20Foreign%20TV%20Series/",        server:"ftp11.circleftp.net" },
    { id:"eng-s6",   icon:"🎬", name:"English & Foreign Series 6",   url:"http://ftp7.circleftp.net/FILE/English%20%26%20Foreign%20TV%20Series/",         server:"ftp7.circleftp.net" },
    { id:"anime",    icon:"⛩️", name:"English & Foreign Anime",      url:"http://ftp15.circleftp.net/FILE/English%20%26%20Foreign%20Anime%20Series/",     server:"ftp15.circleftp.net" },
    { id:"dub-s",    icon:"🗣️", name:"Dubbed TV Series & Shows",    url:"http://ftp16.circleftp.net/FILE/Dubbed%20TV%20Series%20%26%20Shows/",           server:"ftp16.circleftp.net" },
  ]},
  { id:"games", label:"Software & Games", links:[
    { id:"console",  icon:"🕹️", name:"Console Games",        url:"http://ftp14.circleftp.net/FILE/Consoles%20Game/",              server:"ftp14.circleftp.net" },
    { id:"pc-bk",    icon:"💿", name:"PC Games Backup",      url:"http://ftp14.circleftp.net/FILE/PC%20Game%20Backup/",           server:"ftp14.circleftp.net" },
    { id:"pc-g",     icon:"🎮", name:"PC Games",             url:"http://ftp2.circleftp.net/FILE/GAMES%20-%20PC/",               server:"ftp2.circleftp.net" },
    { id:"pc-g2",    icon:"🎮", name:"PC Games 2",           url:"http://ftp14.circleftp.net/FILE/GAMES%20-%20PC%202/",          server:"ftp14.circleftp.net" },
    { id:"pc-sw",    icon:"💻", name:"PC Software",          url:"http://ftp3.circleftp.net/FILE/Software/PC%20Software/",       server:"ftp3.circleftp.net" },
    { id:"mac-sw",   icon:"🍎", name:"Mac Software",         url:"http://ftp3.circleftp.net/FILE/Software/Mac%20Software/",      server:"ftp3.circleftp.net" },
    { id:"android",  icon:"📱", name:"Android Apps & Games", url:"http://ftp3.circleftp.net/FILE/Android%20Apps%20%26%20Games/", server:"ftp3.circleftp.net" },
  ]},
  { id:"partners", label:"FTP Partners", links:[
    { id:"circle-m", icon:"🌐", name:"Circle FTP (Main)", url:"https://circleftp.net/",        server:"circleftp.net" },
    { id:"circle-n", icon:"✨", name:"New Circle FTP",    url:"http://new.circleftp.net/",     server:"new.circleftp.net" },
    { id:"circle-o", icon:"📂", name:"Old Circle FTP",    url:"http://ftp4.circleftp.net/",   server:"ftp4.circleftp.net" },
  ]},
];

export const coverageAreas: Area[] = [
  { id:"khilbari", name:"খিলবাড়িটেক",      active:true },
  { id:"nurer",    name:"নূরেরচালা",         active:true },
  { id:"bou",      name:"বউবাজার",           active:true },
  { id:"shah",     name:"শাহজাহাদপুর",       active:true },
  { id:"vatara",   name:"বাঁশতলা",            active:true },
  { id:"jblock",   name:"জে-ব্লক",           active:true },
  { id:"abdullah", name:"আব্দুল্লাহবাগ",    active:true },
  { id:"more",     name:"আরও এলাকা শীঘ্রই...",active:false },
];

export const contactInfo = {
  phone1:   "01841663718",
  phone2:   "01790110625",
  facebook: "https://www.facebook.com/profile.php?id=100063848813839",
  maps:     "https://maps.app.goo.gl/65iJ7SuXr3GaqyQs6",
  address:  "1087, Khilbarirtek, Vatara, Dhaka-1212",
};

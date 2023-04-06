// Assets
import avatar1 from "assets/img/avatars/poster1.png";
import avatar2 from "assets/img/avatars/poster2.png";
import avatar3 from "assets/img/avatars/poster3.png";
import avatar4 from "assets/img/avatars/poster4.png";
import avatar5 from "assets/img/avatars/poster5.png";
import avatar7 from "assets/img/avatars/poster6.png";
import avatar8 from "assets/img/avatars/avatar8.png";
import avatar9 from "assets/img/avatars/avatar9.png";
import avatar10 from "assets/img/avatars/avatar10.png";
// Custom icons
import {
  AdobexdLogo,
  AtlassianLogo,
  InvisionLogo,
  JiraLogo,
  SlackLogo,
  SpotifyLogo,
} from "components/Icons/Icons.js";
import { AiOutlineExclamation } from "react-icons/ai";
import {
  FaArrowDown,
  FaArrowUp,
  FaBell,
  FaCreditCard,
  FaFilePdf,
  FaHtml5,
  FaShoppingCart,
} from "react-icons/fa";
import { SiDropbox } from "react-icons/si";

export const dashboardTableData = [
  {
    logo: AdobexdLogo,
    name: "Purity UI Version",
    members: [avatar1, avatar2, avatar3, avatar4, avatar5],
    budget: "$14,000",
    progression: 60,
  },
  {
    logo: AtlassianLogo,
    name: "Add Progress Track",
    members: [avatar3, avatar2],
    budget: "$3,000",
    progression: 10,
  },
  {
    logo: SlackLogo,
    name: "Fix Platform Errors",
    members: [avatar10, avatar4],
    budget: "Not set",
    progression: 100,
  },
  {
    logo: SpotifyLogo,
    name: "Launch our Mobile App",
    members: [avatar2, avatar3, avatar7, avatar8],
    budget: "$32,000",
    progression: 100,
  },
  {
    logo: JiraLogo,
    name: "Add the New Pricing Page",
    members: [avatar10, avatar3, avatar7, avatar2, avatar8],
    budget: "$400",
    progression: 25,
  },
  {
    logo: InvisionLogo,
    name: "Redesign New Online Shop",
    members: [avatar9, avatar3, avatar2],
    budget: "$7,600",
    progression: 40,
  },
];

export const timelineData = [
  {
    logo: FaBell,
    title: "$2400, Design changes",
    date: "22 DEC 7:20 PM",
    color: "teal.300",
  },
  {
    logo: FaHtml5,
    title: "New order #4219423",
    date: "21 DEC 11:21 PM",
    color: "orange",
  },
  {
    logo: FaShoppingCart,
    title: "Server Payments for April",
    date: "21 DEC 9:28 PM",
    color: "blue.400",
  },
  {
    logo: FaCreditCard,
    title: "New card added for order #3210145",
    date: "20 DEC 3:52 PM",
    color: "orange.300",
  },
  {
    logo: SiDropbox,
    title: "Unlock packages for Development",
    date: "19 DEC 11:35 PM",
    color: "purple",
  },
  {
    logo: AdobexdLogo,
    title: "New order #9851258",
    date: "18 DEC 4:41 PM",
  },
];
export const rtlDashboardTableData = [
  {
    logo: AdobexdLogo,
    name: "نسخة Purity UI",
    members: [avatar1, avatar2, avatar3, avatar4, avatar5],
    budget: "$14,000",
    progression: 60,
  },
  {
    logo: AtlassianLogo,
    name: "إضافة مسار التقدم",
    members: [avatar3, avatar2],
    budget: "$3,000",
    progression: 10,
  },
  {
    logo: SlackLogo,
    name: "إصلاح أخطاء النظام الأساسي",
    members: [avatar10, avatar4],
    budget: "غير مضبوط",
    progression: 100,
  },
  {
    logo: SpotifyLogo,
    name: "إطلاق تطبيق الهاتف المحمول الخاص بنا",
    members: [avatar2, avatar3, avatar7, avatar8],
    budget: "$32,000",
    progression: 100,
  },
  {
    logo: JiraLogo,
    name: "أضف صفحة التسعير الجديدة",
    members: [avatar10, avatar3, avatar7, avatar2, avatar8],
    budget: "$400",
    progression: 25,
  },
  {
    logo: InvisionLogo,
    name: "إعادة تصميم متجر جديد على الإنترنت",
    members: [avatar9, avatar3, avatar2],
    budget: "$7,600",
    progression: 40,
  },
];

export const rtlTimelineData = [
  {
    logo: FaBell,
    title: "$2400, تغييرات في التصميم",
    date: "22 DEC 7:20 PM",
    color: "teal.300",
  },
  {
    logo: FaHtml5,
    title: "طلب جديد #4219423",
    date: "21 DEC 11:21 PM",
    color: "orange",
  },
  {
    logo: FaShoppingCart,
    title: "مدفوعات الخادم لشهر أبريل",
    date: "21 DEC 9:28 PM",
    color: "blue.400",
  },
  {
    logo: FaCreditCard,
    title: "تمت إضافة بطاقة جديدة للطلب #3210145",
    date: "20 DEC 3:52 PM",
    color: "orange.300",
  },
  {
    logo: SiDropbox,
    title: "فتح الحزم من أجل التنمية",
    date: "19 DEC 11:35 PM",
    color: "purple",
  },
  {
    logo: AdobexdLogo,
    title: "طلب جديد #9851258",
    date: "18 DEC 4:41 PM",
  },
];

export const tablesTableData = [
  {
    logo: avatar1,
    name: "Esthera Jackson",
    email: "alexa@simmmple.com",
    subdomain: "Manager",
    domain: "Organization",
    status: "Online",
    date: "14/06/21",
  },
  {
    logo: avatar2,
    name: "Alexa Liras",
    email: "laurent@simmmple.com",
    subdomain: "Programmer",
    domain: "Developer",
    status: "Offline",
    date: "12/05/21",
  },
  {
    logo: avatar3,
    name: "Laurent Michael",
    email: "laurent@simmmple.com",
    subdomain: "Executive",
    domain: "Projects",
    status: "Online",
    date: "07/06/21",
  },
  {
    logo: avatar4,
    name: "Freduardo Hill",
    email: "freduardo@simmmple.com",
    subdomain: "Manager",
    domain: "Organization",
    status: "Online",
    date: "14/11/21",
  },
  {
    logo: avatar5,
    name: "Daniel Thomas",
    email: "daniel@simmmple.com",
    subdomain: "Programmer",
    domain: "Developer",
    status: "Offline",
    date: "21/01/21",
  },
  {
    logo: avatar7,
    name: "Mark Wilson",
    email: "mark@simmmple.com",
    subdomain: "Designer",
    domain: "UI/UX Design",
    status: "Offline",
    date: "04/09/20",
  },
];

export const tablesProjectData = [
  {
    logo: AdobexdLogo,
    name: "Purity UI Version",
    budget: "$14,000",
    status: "Working",
    progression: 60,
  },
  {
    logo: AtlassianLogo,
    name: "Add Progress Track",
    budget: "$3,000",
    status: "Canceled",
    progression: 10,
  },
  {
    logo: SlackLogo,
    name: "Fix Platform Errors",
    budget: "Not set",
    status: "Done",
    progression: 100,
  },
  {
    logo: SpotifyLogo,
    name: "Launch our Mobile App",
    budget: "$32,000",
    status: "Done",
    progression: 100,
  },
  {
    logo: JiraLogo,
    name: "Add the New Pricing Page",
    budget: "$400",
    status: "Working",
    progression: 25,
  },
];


export const invoicesData = [
  {
    date: "March, 01, 2020",
    code: "#MS-415646",
    price: "$180",
    logo: FaFilePdf,
    format: "PDF",
  },
  {
    date: "February, 10, 2020",
    code: "#RV-126749",
    price: "$250",
    logo: FaFilePdf,
    format: "PDF",
  },
  {
    date: "April, 05, 2020",
    code: "#FB-212562",
    price: "$560",
    logo: FaFilePdf,
    format: "PDF",
  },
  {
    date: "June, 25, 2019",
    code: "#QW-103578",
    price: "$120",
    logo: FaFilePdf,
    format: "PDF",
  },
  {
    date: "March, 01, 2019",
    code: "#AR-803481",
    price: "$300",
    logo: FaFilePdf,
    format: "PDF",
  },
];

export const billingData = [
  {
    name: "Oliver Liam",
    company: "Viking Burrito",
    email: "oliver@burrito.com",
    number: "FRB1235476",
  },
  {
    name: "Lucas Harper",
    company: "Stone Tech Zone",
    email: "lucas@stone-tech.com",
    number: "FRB1235476",
  },
  {
    name: "Ethan James",
    company: "Fiber Notion",
    email: "ethan@fiber.com",
    number: "FRB1235476",
  },
];

export const newestTransactions = [
  {
    name: "Netflix",
    date: "27 March 2021, at 12:30 PM",
    price: "- $2,500",
    logo: FaArrowDown,
  },
  {
    name: "Apple",
    date: "27 March 2021, at 12:30 PM",
    price: "+ $2,500",
    logo: FaArrowUp,
  },
];

export const olderTransactions = [
  {
    name: "Stripe",
    date: "26 March 2021, at 13:45 PM",
    price: "+ $800",
    logo: FaArrowUp,
  },
  {
    name: "HubSpot",
    date: "26 March 2021, at 12:30 PM",
    price: "+ $1,700",
    logo: FaArrowUp,
  },
  {
    name: "Webflow",
    date: "26 March 2021, at 05:00 PM",
    price: "Pending",
    logo: AiOutlineExclamation,
  },
  {
    name: "Microsoft",
    date: "25 March 2021, at 16:30 PM",
    price: "- $987",
    logo: FaArrowDown,
  },
];

export const movies = [
  {
    name: "AVENGERS: ENDGAME",
    logo: avatar1,

    info: "Adrift in space with no food or water, Tony Stark sends a message to Pepper Potts as his oxygen supply starts to dwindle. Meanwhile, the remaining Avengers -- Thor, Black Widow, Captain America and Bruce Banner -- must figure out a way to bring back their vanquished allies for an epic showdown with Thanos -- the evil demigod who decimated the planet and the universe.",
    Rating: "PG-13",
    Genre: "Action, Adventure, Fantasy, Sci-fi",
    OriginalLanguage: "English",
    Director: "Anthony Russo, Joe Russo",
    Producer: "Kevin Feige",
    Writer: "Christopher Markus, Stephen Mcfeely",
    TheatersDate: "Apr 26, 2019",
    StreamingDate: "Jul 30, 2019",
    BoxOfficeUSA: "$858.4M",
    Runtime: "3h 1m",
    Distributor: "Walt Disney",
    SoundMix: "Dolby Atmos, DTS, SSDS, Dolby Digital",
    AspectRatio: "Scope (2.35:1)",
    collection: "Marvel Cinematic Universe",
  },
  {
    name: "AVATAR: THE WAY OF WATER",
    logo: avatar2,

    info: "Set more than a decade after the events of the first film, Avatar: The Way of Water begins to tell the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.",
    Rating: "PG-13",
    Genre: "Sci-fi, Adventure,Action, Fantasy",
    OriginalLanguage: "English",
    Director: "James Cameron",
    Producer: "James Cameron, Jon Landau",
    Writer: "James Cameron, Rick Jaffa, Amanda Silver",
    TheatersDate: "Dec 16, 2022",
    StreamingDate: "Mar 28, 2023",
    BoxOfficeUSA: "$680.4M",
    Runtime: "3h 12m",
    Distributor: "20th Century Studios",
    SoundMix: "Dolby Atmos",
    AspectRatio: "N/A",
    collection: "N/A",
  },
  {
    name: "JOHN WICK: CHAPTER 4",
    logo: avatar3,

    info: "John Wick (Keanu Reeves) uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes.",
    Rating: "R",
    Genre: "Action",
    OriginalLanguage: "English",
    Director: "Chad Stahelski",
    Producer: "Basil Iwanyk, Erica Lee, Chad Stahelski",
    Writer: "Shay Hatten, Michael Finch",
    TheatersDate: "Mar 24, 2023",
    StreamingDate: "N/A",
    BoxOfficeUSA: "$73.8M",
    Runtime: "2h 49m",
    Distributor: "Lionsgate",
    SoundMix: "Dolby Atmos",
    AspectRatio: "Digital 2.39:1",
    collection: "N/A",
  },
  {
    name: "PREY",
    logo: avatar4,

    info: "Set in the Comanche Nation 300 years ago, Prey is the story of a young woman, Naru, a fierce and highly skilled warrior. She has been raised in the shadow of some of the most legendary hunters who roam the Great Plains, so when danger threatens her camp, she sets out to protect her people. The prey she stalks, and ultimately confronts, turns out to be a highly evolved alien predator with a technically advanced arsenal, resulting in a vicious and terrifying showdown between the two adversaries.",
    Rating: "R",
    Genre: "Action, Adventure, Sci-fi",
    OriginalLanguage: "English",
    Director: "Dan Trachtenberg",
    Producer: "John Davis, John Fox, Jhane Myers",
    Writer: "Patrick Aison",
    TheatersDate: "N/A",
    StreamingDate: "Aug 5, 2022",
    BoxOfficeUSA: "N/A",
    Runtime: "1h 39m",
    Distributor: "N/A",
    SoundMix: "Dolby Atmos",
    AspectRatio: "Scope (2.35:1)",
    collection: "Predator",
  },
  {
    name: "THE LORD OF THE RINGS: THE TWO TOWERS",
    logo: avatar5,

    info: "The sequel to the Golden Globe-nominated and AFI Award-winning The Lord of the Rings: The Fellowship of the Ring, The Two Towers follows the continuing quest of Frodo (Elijah Wood) and the Fellowship to destroy the One Ring. Frodo and Sam (Sean Astin) discover they are being followed by the mysterious Gollum. Aragorn (Viggo Mortensen), the Elf archer Legolas and Gimli the Dwarf encounter the besieged Rohan kingdom, whose once great King Theoden has fallen under Saruman's deadly spell.",
    Rating: "PG-13",
    Genre: "Fantasy, Adventure",
    OriginalLanguage: "English",
    Director: "Peter Jackson",
    Producer: "Peter Jackson, Barrie M. Osborne, Fran Walsh, Eric Monette",
    Writer: "Peter Jackson, Phillippa Boyens, Fran Walsh, Stephen Sinclair, J.R.R. Tolkien",
    TheatersDate: "Dec 18, 2002",
    StreamingDate: "Aug 26, 2003",
    BoxOfficeUSA: "$342.6M",
    Runtime: "2h 59m",
    Distributor: "New Line Cinema",
    SoundMix: "Dolby EX, Dolby SR, Dolby Stereo, Dolby Digital, Surround, DTS, Dolby A, SSDS",
    AspectRatio: "Scope (2.35:1)",
    collection: "Lord of The Rings",
  },
  {
    name: "PUSS IN BOOTS: THE LAST WISH",
    logo: avatar7,

    info: "This fall, everyone's favorite leche-loving, swashbuckling, fear-defying feline returns. For the first time in more than a decade, DreamWorks Animation presents a new adventure in the Shrek universe as daring outlaw Puss in Boots discovers that his passion for peril and disregard for safety have taken their toll. Puss has burned through eight of his nine lives, though he lost count along the way. Getting those lives back will send Puss in Boots on his grandest quest yet. Academy Award® nominee Antonio Banderas returns as the voice of the notorious PiB as he embarks on an epic journey into the Black Forest to find the mythical Wishing Star and restore his lost lives. But with only one life left, Puss will have to humble himself and ask for help from his former partner and nemesis: the captivating Kitty Soft Paws (Oscar® nominee Salma Hayek). In their quest, Puss and Kitty will be aided--against their better judgment--by a ratty, chatty, relentlessly cheerful mutt, Perro (Harvey Guillén, What We Do in the Shadows). Together, our trio of heroes will have to stay one step ahead of Goldilocks (Oscar® nominee Florence Pugh, Black Widow) and the Three Bears Crime Family, Big Jack Horner (Emmy winner John Mulaney, Big Mouth) and terrifying bounty hunter, The Big Bad Wolf (Wagner Moura, Narcos).",
    Rating: "PG",
    Genre: "Kids & family, Comedy, Adventure, Animation",
    OriginalLanguage: "English",
    Director: "Joel Crawford",
    Producer: "Mark Swift",
    Writer: "Paul Fisher, Tommy Swerdlow",
    TheatersDate: "Dec 21, 2022",
    StreamingDate: "Jan 6, 2023",
    BoxOfficeUSA: "$184.0M",
    Runtime: "1h 42m",
    Distributor: "Universal Pictures",
    SoundMix: "Dolby Atmos, Dolby Digital",
    AspectRatio: "Digital (2.39:1)",
    collection: "N/A",
  },
];


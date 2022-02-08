import "./App.css";
import { Routes, Route } from "react-router-dom";
import PrizesPage from "./PrizesPage";
import PaymentPage from "./PaymentPage";
import RafflesPage from "./RafflesPage";

const prizes = [
  {
    PrizeID: "1",
    prizeName: "חדר ילדים",
    prizeImage: "../../images/childrenRoom.png",
    prizeDescription: "ארון, מיטה, שידה",
    prizePrice: "20",
    isSelected: false,
  },
  {
    PrizeID: "2",
    prizeName: "חופשה זוגית",
    prizeImage: "../../images/hotel.png",
    prizeDescription: "חופשה זוגית בניר עציון resort",
    prizePrice: "20",
    isSelected: false,
  },
  {
    PrizeID: "3",
    prizeName: "מייבש כביסה",
    prizeImage: "../../images/dryer.png",
    prizeDescription: " מייבש כביסה של חברת ZANUSSI",
    prizePrice: "20",
    isSelected: false,
  },
  {
    PrizeID: "4",
    prizeName: "עגלת תינוק",
    prizeImage: "../../images/babyStroller.png",
    prizeDescription: "עגלת שכיבה לתינוק",
    prizePrice: "20",
    isSelected: false,
  },
  {
    PrizeID: "5",
    prizeName: "מצלמה",
    prizeImage: "../../images/camera.png",
    prizeDescription: "מצלמת קנון יוקרתית",
    prizePrice: "10",
    isSelected: false,
  },
  {
    PrizeID: "6",
    prizeName: "1000₪ ביש",
    prizeImage: "../../images/yesh.png",
    prizeDescription: "שובר כספי לרשת יש",
    prizePrice: "10",
    isSelected: false,
  },
  {
    PrizeID: "7",
    prizeName: "1000₪ בקידישיק",
    prizeImage: "../../images/kidishik.png",
    prizeDescription: "שובר כספי לרשת קידישיק",
    prizePrice: "10",
    isSelected: false,
  },
  {
    PrizeID: "8",
    prizeName: "1000₪ בבת של מלך",
    prizeImage: "../../images/batMelech.png",
    prizeDescription: "שובר כספי לרשת בת מלך",
    prizePrice: "10",
    isSelected: false,
  },
  {
    PrizeID: "9",
    prizeName: "ערכת פליימוביל",
    prizeImage: "../../images/dollsHouse.png",
    prizeDescription: "בית בובות ענק",
    prizePrice: "5",
    isSelected: false,
  },
  {
    PrizeID: "10",
    prizeName: "סט מצעים",
    prizeImage: "../../images/matzaim.png",
    prizeDescription: "זוג מצעים מפואר",
    prizePrice: "5",
    isSelected: false,
  },
  {
    PrizeID: "11",
    prizeName: "אורגית",
    prizeImage: "../../images/organit.png",
    prizeDescription: "אורגנית איכותית",
    prizePrice: "5",
    isSelected: false,
  },
  {
    PrizeID: "12",
    prizeName: "מחשב נייד",
    prizeImage: "../../images/laptop.png",
    prizeDescription: "מחשב נייד קומפקטי",
    prizePrice: "5",
    isSelected: false,
  },
];

export default function App() {
  return (
    <Routes>
      <Route path="Prizes" element={<PrizesPage prizes={prizes} />} />
      <Route path="PaymentPage" element={<PaymentPage prizes={prizes} />} />
      <Route path="RafflesPage" element={<RafflesPage prizes={prizes} />} />
      <Route path="" element={<PrizesPage prizes={prizes} />} />
    </Routes>
  );
}

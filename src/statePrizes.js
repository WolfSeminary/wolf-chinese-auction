import { useState } from "react";

const Prizes = () => {
    const [prizes, setPrizes] = useState();
    const prizesInfoArray = [

        {
            "PrizeID": "1",
            "prizeName": "חדר ילדים",
            "prizeImage": "../../images/childrenRoom.png",
            "prizeDescription": "ארון, מיטה, שידה",
            "prizePrice": "20"
        },
        {
            "PrizeID": "2",
            "prizeName": "פאה",
            "prizeImage": "<Image URL here>",
            "prizeDescription": "פאת קסטם",
            "prizePrice": "20"
        },
        {
            "PrizeID": "3",
            "prizeName": "מייבש כביסה",
            "prizeImage": "../../images/dryer.png",
            "prizeDescription": " מייבש כביסה של חברת ZANUSSI",
            "prizePrice": "20"
        },
        {
            "PrizeID": "4",
            "prizeName": "עגלת תינוק",
            "prizeImage": "../../images/babyStroller.png",
            "prizeDescription": "עגלת שכיבה לתינוק",
            "prizePrice": "20"
        },
        {
            "PrizeID": "5",
            "prizeName": "נעליים לכל המשפחה",
            "prizeImage": "<Image URL here>",
            "prizeDescription": "10 זוגות נעליים לכל המשפחה",
            "prizePrice": "10"
        },
        {
            "PrizeID": "6",
            "prizeName": "1000₪ ביש",
            "prizeImage": "../../images/yesh.png",
            "prizeDescription": "שובר כספי לרשת יש",
            "prizePrice": "10"
        },
        {
            "PrizeID": "7",
            "prizeName": "1000₪ בקידישיק",
            "prizeImage": "../../images/kidishik.png",
            "prizeDescription": "שובר כספי לרשת קידישיק",
            "prizePrice": "10"
        },
        {
            "PrizeID": "8",
            "prizeName": "1000₪ בבת של מלך",
            "prizeImage": "../../images/batMelech.png",
            "prizeDescription": "שובר כספי לרשת בת מלך",
            "prizePrice": "10"
        },
        {
            "PrizeID": "9",
            "prizeName": "ערכת פליימוביל",
            "prizeImage": "../../images/dollsHouse.png",
            "prizeDescription": "בית בובות ענק",
            "prizePrice": "5"
        },
        {
            "PrizeID": "10",
            "prizeName": "סט מצעים",
            "prizeImage": "../../images/matzaim.png",
            "prizeDescription": "זוג מצעים מפואר",
            "prizePrice": "5"
        },
        {
            "PrizeID": "11",
            "prizeName": "אורגית",
            "prizeImage": "../../images/organit.png",
            "prizeDescription": "אורגנית איכותית",
            "prizePrice": "5"
        },
        {
            "PrizeID": "12",
            "prizeName": "מחשב נייד",
            "prizeImage": "../../images/laptop.png",
            "prizeDescription": "מחשב נייד קומפקטי",
            "prizePrice": "5"
        }
    ]
    setPrizes(prizes = prizesInfoArray)
}
export default Prizes;
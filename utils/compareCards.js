

export default function compareCards(p1Card, p2Card){

    if (p1Card > p2Card){
        return "p1";
    } else if(p2Card > p1Card){
        return "p2";
    } else {
        return "WAR";
    };

};
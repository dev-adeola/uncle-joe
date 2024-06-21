import { useEffect, useState } from "react";
import axios from "axios";


const useDecider = (id, item) => {
    const [decided, setDecided] = useState();

    useEffect(() => {
        const getDecider = async () => {
            const response = item === "sell" ? await axios.get(`https://p2p.ratefy.co/api/single-seller-term/${id}`, { headers: { 'User-Agents': 'Ratefy' } }) : await axios.get(`https://p2p.ratefy.co/api/single-buyer-term/${id}`, { headers: { 'User-Agents': 'Ratefy' } })
            setDecided(response);
        }

        getDecider();

    }, [decided])
    
    return { decided }
}

export default useDecider;
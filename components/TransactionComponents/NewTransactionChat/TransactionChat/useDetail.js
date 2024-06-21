import { useEffect, useState } from "react";
import axios from "axios";

const useDetail = (uuid) => {

    const [detail, setDetail] = useState();

    useEffect(() => {
        const getDetail = async () => {
            const response = await axios.get(`https://p2p.ratefy.co/api/get-users-details/${uuid}`, { headers: { 'User-Agents': 'Ratefy' } });
            setDetail(response);
        }

        getDetail();
    }, [detail]);

    return { detail }
}

export default useDetail;
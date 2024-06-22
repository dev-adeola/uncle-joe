import { useEffect, useState } from "react";
import axios from "axios";

const useDetail = (uuid) => {

    const [detail, setDetail] = useState();

    useEffect(() => {
        if (uuid !== null && uuid !== undefined) {
            const getDetail = async () => {
                const response = await axios.get(`https://p2p.ratefy.co/api/get-users-details/${uuid}`, { headers: { 'User-Agents': 'Ratefy' } });
                console.log(response);

                setDetail(response);
            }
            getDetail();
        }

    }, []);

    return { detail }
}

export default useDetail;
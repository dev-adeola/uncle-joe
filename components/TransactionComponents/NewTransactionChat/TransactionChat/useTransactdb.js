import axios from "axios";
import { useEffect, useState } from "react";


const useTransactdb = (accepted, session) => {
    const [transactionDb, setTransactionData] = useState();
    const [chatDb, setChatData] = useState();

    useEffect(() => {
        if ((accepted !== null && accepted !== undefined) && (session !== null && session !== undefined)) {
            const getTransactionData = async () => {
                const response = await axios.get(`https://transactionbased.ratefy.co/api/get-session/${accepted}/${session}`);
                setTransactionData(response);
            }

            const getChatData = async () => {
                const response = await axios.post(`https://transactionbased.ratefy.co/api/get-chat`, {
                    session: session,
                    acceptance: accepted,
                });
                setChatData(response.data);
            }


            getTransactionData();
            getChatData();
        }


    }, []);

    return { transactionDb, chatDb }
}

export default useTransactdb;
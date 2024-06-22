import axios from "axios";
import { useEffect, useState } from "react";

const useTransactdb = (accepted, session) => {

    const [transactionDb, setTransactionData] = useState();
    const [chatDb, setChatData] = useState();
    const [buyerDetail, setBuyerDetail] = useState();
    const [sellerDetail, setSellerDetail] = useState();

    useEffect(() => {
        if ((accepted !== null && accepted !== undefined) && (session !== null && session !== undefined)) {
            const getTransactionData = async () => {
                const response = await axios.get(`https://transactionbased.ratefy.co/api/get-session/${accepted}/${session}`);

                if (response.data.data.owner === "seller") {
                    getSellerDetails(response.data.data.owner_id);
                    getBuyerDetails(response.data.data.recipient_id);
                } else {
                    getSellerDetails(response.data.data.recipient_id);
                    getBuyerDetails(response.data.data.owner_id);
                }

                setTransactionData(response);
            }

            const getChatData = async () => {
                const response = await axios.post(`https://transactionbased.ratefy.co/api/get-chat`, {
                    session: session,
                    acceptance: accepted,
                });
                setChatData(response.data);
            }

            const getBuyerDetails = async (uuid) => {
                if (uuid !== null && uuid !== undefined) {
                    const response = await axios.get(`https://p2p.ratefy.co/api/get-users-details/${uuid}`, { headers: { 'User-Agents': 'Ratefy' } });
                    setBuyerDetail(response);
                }


            }

            const getSellerDetails = async (uuid) => {
                if (uuid !== null && uuid !== undefined) {
                    const response = await axios.get(`https://p2p.ratefy.co/api/get-users-details/${uuid}`, { headers: { 'User-Agents': 'Ratefy' } });
                    setSellerDetail(response);
                }

            }

            getTransactionData();
            getChatData();


        }


    }, []);

    return { transactionDb, chatDb, buyerDetail, sellerDetail }
}

export default useTransactdb;
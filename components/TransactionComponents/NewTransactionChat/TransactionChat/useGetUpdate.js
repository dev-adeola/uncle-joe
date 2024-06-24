import { useEffect, useState, useMemo, useRef } from "react";
import pusher from "../../../../utils/chatconfig/index.js"
import { useGetUserIdQuery } from "@/services/apiSlice";


const useGetUpdate = (authSession) => {

    const { data, error, isError, isSuccess, isFetching, isLoading } = useGetUserIdQuery();
    const [getUpdate, setGetUpdate] = useState();

    if (authSession !== null) {
        const channel = pusher.subscribe(`transUpdate.` + authSession);
        const handleMessage = function (myData) {
            setGetUpdate(myData);
        }

        const handleError = function (err) {
            if (err.data.code === 404) {
                log('Over limit!');
            }
        }

        useEffect(() => {

            channel.bind('App\\Events\\TransactionUpdate', handleMessage);
            pusher.connection.bind('error', handleError);


            // Cleanup function
            return () => {
                channel.unbind('App\\Events\\TransactionUpdate', handleMessage);
                pusher.connection.unbind('error', handleError);

            };
        }, []);
    }

    return { getUpdate }

}

export default useGetUpdate;
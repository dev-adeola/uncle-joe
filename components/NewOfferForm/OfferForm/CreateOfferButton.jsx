"use client"

import { resetOfferStore } from '@/redux'
import { useCreateNewOfferMutation } from '@/services/apiSlice'
import { convertOfferRequirement, formatTermsAndConditions } from '@/utils'
import { useRouter } from 'next/navigation'
import React, { useCallback, useEffect, useState } from 'react'
import { ThreeDots } from 'react-loader-spinner'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'

function CreateOfferButton({ currentMarketRate, userId, isDisable }) {
    const createdOfferData = useSelector(state => state.createOffer)
    const router = useRouter();

    console.log({ createdOfferData })

    const [
        createNewOffer,
        {
            data,
            isError,
            isLoading,
            error,
        },
    ] = useCreateNewOfferMutation()

    console.log({ error, data })

    const handleCreateOffer = useCallback(async () => {
        convertOfferRequirement(createdOfferData?.offerPaymentInfo?.offerTags)
        try {
            await createNewOffer({
                uuid: userId,
                ewallet_id: createdOfferData?.offerPaymentInfo?.eWallet?.id,
                option_id: createdOfferData?.offerPaymentInfo?.paymentOption?.id,
                percentage: createdOfferData?.exchangeRateInfo?.rateType === 'market' ? createdOfferData?.exchangeRateInfo.rateInPercentage : null,
                fixed_rate: createdOfferData?.exchangeRateInfo?.rateType === 'fixed' ? createdOfferData?.exchangeRateInfo?.fixedRate : null,
                min_amount: createdOfferData?.exchangeRateInfo.minAmount,
                max_amount: createdOfferData?.exchangeRateInfo.maxAmount,
                duration: createdOfferData?.offerInstructionAndDuration.durationInMins,
                guide: createdOfferData?.offerTermsAndConditions[0]?.content,
                seller_terms_and_conditions: createdOfferData?.offerPaymentInfo?.offerType === 'sell' ? formatTermsAndConditions(createdOfferData?.offerTermsAndConditions) : undefined,
                buyer_terms_and_conditions: createdOfferData?.offerPaymentInfo?.offerType === 'buy' ? formatTermsAndConditions(createdOfferData?.offerTermsAndConditions) : undefined,
                seller_offer_requiremnet: createdOfferData?.offerPaymentInfo?.offerType === 'sell' ? convertOfferRequirement(createdOfferData?.offerPaymentInfo?.offerTags) : undefined,
                buyer_offer_requiremnet: createdOfferData?.offerPaymentInfo?.offerType === 'buy' ? convertOfferRequirement(createdOfferData?.offerPaymentInfo?.offerTags) : undefined,
                endpoint: createdOfferData?.offerPaymentInfo?.offerType === 'sell' ? 'api/create-seller-offer' : 'api/create-buyer-offer',
            }).unwrap();
            toast.success("New offer created");
            // dispatch(resetOfferStore())
            // router.push("/dashboard/overview");
        } catch (error) {
            console.log({ error });
            toast.error(error?.message || "An error occurred");
        }
    }, [createdOfferData])

    return (
        <div className="w-full">
            <div onClick={() => handleCreateOffer()} className={`${(isLoading ?? isDisable) && 'disabled-trade-btn'} flex items-center justify-center h-12 bg-primary cursor-pointer rounded-[3px] text-lightGray space-x-2`}>
                {isLoading ? <ThreeDots
                    height="24"
                    width="30"
                    radius="12"
                    color="#f9f9f9"
                    ariaLabel="loading"
                    wrapperStyle={{}}
                    wrapperClassName=""
                    visible={!isError}
                /> :
                    <p className="font-rubik font-medium text-[20px] capitalize">
                        Create Offer
                    </p>
                }
            </div>
        </div>
    )
}

export default CreateOfferButton
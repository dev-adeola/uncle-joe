import React from 'react'

function kycPurpose() {
    return (

        <div className="items-center flex">
            <div
                id="purpose-1-button"
                aria-controls="purpose-1-menu"
                aria-haspopup="true"
                aria-expanded={openPurpose1}
                onClick={(e) => handleSelect(e, 1)}
                className="rounded border border-border p-2 w-full flex items-center justify-start cursor-pointer"
            >
                {purpose1 ? (
                    <p className="font-karla font-bold text-xs md:text-sm xl:text-[16px] text-right flex-wrap whitespace-pre-wrap">
                        {purpose1}
                    </p>
                ) : (
                    <div className="flex items-items justify-between">
                        <p className="font-karla font-bold text-xs md:text-sm xl:text-[16px] text-right flex-wrap whitespace-pre-wrap">
                            Please select purpose
                        </p>
                        <span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="7"
                                height="12"
                                viewBox="0 0 7 12"
                                fill="none"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M0.246407 10.4901L4.51772 6.11535L0.246406 1.74061C0.169317 1.66437 0.107828 1.57317 0.0655277 1.47233C0.0232269 1.37149 0.000961297 1.26304 3.00158e-05 1.15329C-0.000901266 1.04355 0.0195203 0.934713 0.0601033 0.833138C0.100686 0.731562 0.160618 0.63928 0.236401 0.561677C0.312185 0.484073 0.402302 0.422702 0.501495 0.381144C0.600688 0.339586 0.706971 0.318673 0.81414 0.319627C0.92131 0.32058 1.02722 0.343381 1.12569 0.386698C1.22417 0.430015 1.31323 0.492981 1.38768 0.571921L6.23045 5.53101C6.34703 5.65013 6.42508 5.80304 6.45402 5.96906L6.46532 6.06659L6.46532 6.16412C6.45412 6.36601 6.37081 6.55663 6.23126 6.6997L1.38849 11.6588C1.23715 11.8139 1.03184 11.901 0.817734 11.9011C0.603628 11.9012 0.39826 11.8142 0.24681 11.6592C0.09536 11.5042 0.0102339 11.294 0.0101582 11.0747C0.0100826 10.8555 0.0950637 10.6452 0.246407 10.4901Z"
                                    fill="#EAEAEA"
                                />
                            </svg>
                        </span>
                    </div>
                )}
            </div>
            <div className="">
                <Menu
                    className="w-full"
                    id="kyc-basic-menu"
                    anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left",
                    }}
                    anchorEl={anchor1}
                    open={openPurpose1}
                    onClose={handleCloseSelect}
                    MenuListProps={{
                        "arioffer-a-labelledby": "basic-button",
                    }}
                >
                    <Stack
                        direction={"column"}
                        divider={<Divider color="#272727" orientation="horizontal" />}
                        className="h-fit w-full cursor-pointer overflow-y-auto rounded-[5px] bg-black p-1 "
                    >
                        {purposeList.map((option) => (
                            <MenuItem
                                onClick={() => {
                                    setPurpose1(option);
                                    setAnchor1(null);
                                }}
                                key={option}
                            >
                                <div>
                                    <p className="font-rubik capitalize text-sm font-medium text-secondary ">
                                        {option}
                                    </p>
                                </div>
                            </MenuItem>
                        ))}
                    </Stack>
                </Menu>
            </div>
        </div>
    )
}

export default kycPurpose
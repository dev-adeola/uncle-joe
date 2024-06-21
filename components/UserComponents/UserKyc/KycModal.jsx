import React, { useRef, useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import SelectInputField from "../SelectInputField";
import CustomCheckButton from "../UserWorkInformation/CustomCheckButton";
import { buyerWorkCategories, idCard } from "@/utils/data";
import TextInputField from "../TextInputField";
import Webcam from "react-webcam";
import DeleteIcon from "@mui/icons-material/Delete";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import LocalSeeIcon from "@mui/icons-material/LocalSee";
import { toast } from "react-toastify";
import { formatDateOfBirth } from "@/utils/dateFormatter";
import { useCreateUserKYCMutation } from "@/services/apiSlice";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

// const WebcamCapture = () => {
//   const webcamRef = useRef(null);
//   const [imageSrc, setImageSrc] = useState(null);
//   const [uploadedImage, setUploadedImage] = useState(null);
//   const [showWebcam, setShowWebcam] = useState(true);

//   const capture = () => {
//     const imageSrc = webcamRef.current.getScreenshot();
//     setImageSrc(imageSrc);
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     const reader = new FileReader();
//     reader.onloadend = () => {
//       setUploadedImage(reader.result);
//     };
//     if (file) {
//       reader.readAsDataURL(file);
//     }
//   };

//   const toggleView = () => {
//     setShowWebcam((prev) => !prev);
//   };

//   return (
//     <div className="flex flex-col items-center justify-center">
//       <div className="relative w-full max-w-md">
//         {showWebcam ? (
//           <>
//             <Webcam
//               audio={false}
//               ref={webcamRef}
//               screenshotFormat="image/jpeg"
//               className="w-full rounded-lg"
//             />
//             <button
//               onClick={capture}
//               className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
//             >
//               Capture
//             </button>
//           </>
//         ) : (
//           <div className="max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden items-center">
//             <div className="px-4 py-6">
//               <div
//                 id="image-preview"
//                 className="max-w-sm p-6 mb-4 bg-gray-100 border-dashed border-2 border-gray-400 rounded-lg items-center mx-auto text-center cursor-pointer"
//               >
//                 <input
//                   id="upload"
//                   max={"2mb"}
//                   type="file"
//                   className="hidden"
//                   onChange={handleFileChange}
//                   accept="image/*"
//                 />
//                 <label for="upload" className="cursor-pointer">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke-width="1.5"
//                     stroke="currentColor"
//                     className="w-8 h-8 text-gray-700 mx-auto mb-4"
//                   >
//                     <path
//                       stroke-linecap="round"
//                       stroke-linejoin="round"
//                       d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
//                     />
//                   </svg>
//                   <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-700">
//                     Upload picture
//                   </h5>
//                   <p className="font-normal text-sm text-gray-400 md:px-6">
//                     Choose photo size should be less than{" "}
//                     <b className="text-gray-600">2mb</b>
//                   </p>
//                   <p className="font-normal text-sm text-gray-400 md:px-6">
//                     and should be in{" "}
//                     <b className="text-gray-600">JPG, PNG, or GIF</b> format.
//                   </p>
//                   <span
//                     id="filename"
//                     className="text-gray-500 bg-gray-200 z-50"
//                   ></span>
//                 </label>
//               </div>
//               <div className="flex items-center justify-center">
//                 <div className="w-full">
//                   <label className="w-full text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 flex items-center justify-center mr-2 mb-2 cursor-pointer">
//                     <span className="text-center ml-2">Upload</span>
//                   </label>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//         {uploadedImage && (
//           <img
//             src={uploadedImage}
//             alt="Uploaded"
//             className="w-full rounded-lg"
//           />
//         )}
//         {imageSrc && (
//           <img
//             src={imageSrc}
//             alt="Captured"
//             className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
//           />
//         )}
//       </div>
//       <div className="mt-4">
//         {/* <input
//           type="file"
//           accept="image/*"
//           onChange={handleFileChange}
//           classNameName="hidden"
//           id="file-input"
//         />
//         <label
//           htmlFor="file-input"
//           className="px-4 py-2 mr-2 bg-gray-200 text-gray-800 rounded-md cursor-pointer hover:bg-gray-300"
//         >
//           Upload Image
//         </label> */}

//         <button
//           onClick={toggleView}
//           className="px-4 py-2 ml-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
//         >
//           {showWebcam ? "Choose from File" : "Use Webcam"}
//         </button>
//       </div>
//     </div>
//   );
// };

const WebcamCapture = ({ setSelectedImage }) => {
  const [showWebcam, setShowWebcam] = useState(false);
  const [imageSrc, setImageSrc] = useState(null);
  const [uploadedImage, setUploadedImage] = useState(null);

  const webcamRef = React.useRef(null);
  console.log({ imageSrc, uploadedImage });
  const toggleView = () => {
    setShowWebcam((prev) => !prev);
    setImageSrc(null);
    setUploadedImage(null);
  };

  const capture = () => {
    const imageSrcs = webcamRef.current.getScreenshot();
    // console.log({ imageSrcs });
    setSelectedImage(imageSrcs);
    setImageSrc(imageSrcs);
    setShowWebcam(false);
    setUploadedImage(null);
  };

  //   const handleFileChange = (event) => {
  //     const file = event.target.files[0];

  //       const maxSize = 2 * 1024 * 1024; // 2MB in bytes

  //       if (file && file.size > maxSize) {
  //         // File exceeds maximum size
  //         alert("Please upload an image smaller than 2MB.");
  //         event.target.value = null; // Clear the file input
  //       } else {
  //         // File is within size limit, proceed with handling
  //         // Your handling code here
  //       }
  //     const reader = new FileReader();
  //     reader.onloadend = () => {
  //       setImageSrc(reader.result);
  //       setUploadedImage(reader.result);
  //       setShowWebcam(false);
  //     };
  //     if (file) {
  //       reader.readAsDataURL(file);
  //     }
  //   };
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    console.log({ file });
    const maxSize = 2 * 1024 * 1024; // 2MB in bytes

    if (file && file.size > maxSize) {
      // File exceeds maximum size
      toast.error("Please upload an image smaller than 2MB.");
      event.target.value = null; // Clear the file input
      return; // Stop further execution
    }
    setSelectedImage(file);
    // File is within size limit, proceed with handling
    const reader = new FileReader();
    reader.onloadend = () => {
      setImageSrc(reader.result);
      setUploadedImage(reader.result);
      setShowWebcam(false);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const deleteImage = () => {
    setImageSrc(null);
    setUploadedImage(null);
  };

  return (
    <div className="flex flex-col   items-center justify-center">
      <div className="relative  w-full max-w-md">
        {showWebcam ? (
          <>
            <Webcam
              audio={false}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              className="w-full mb-3 rounded-lg"
              name="selfieimage"
            />
            <button
              onClick={capture}
              className="px-4 py-2  bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              Capture
            </button>
          </>
        ) : (
          <div className="max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden items-center">
            <div className="px-4 py-6">
              <div
                id="image-preview"
                className="max-w-sm p-6 mb-4 bg-gray-100 border-dashed border-2 border-gray-400 rounded-lg items-center mx-auto text-center cursor-pointer"
              >
                <input
                  id="upload"
                  max={"2mb"}
                  name="selfieimage"
                  type="file"
                  className="hidden"
                  onChange={handleFileChange}
                  accept="image/*"
                />
                <label for="upload" className="cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-3 h-3 text-gray-700 mx-auto mb-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                    />
                  </svg>
                  <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-700">
                    Upload picture
                  </h5>
                  <p className="font-normal text-sm text-gray-400 md:px-6">
                    Choose photo size should be less than{" "}
                    <b className="text-gray-600">2mb</b>
                  </p>
                  <p className="font-normal text-sm text-gray-400 md:px-6">
                    and should be in{" "}
                    <b className="text-gray-600">JPG, PNG, or GIF</b> format.
                  </p>
                  <span
                    id="filename"
                    className="text-gray-500 bg-gray-200 z-50"
                  ></span>
                </label>
              </div>
              <div className="flex items-center justify-center">
                <div className="w-full">
                  <label className="w-full text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 flex items-center justify-center mr-2 mb-2 cursor-pointer">
                    <span className="text-center ml-2">Upload</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        )}
        {uploadedImage && (
          <img
            src={uploadedImage}
            alt="Uploaded"
            className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
          />
        )}
        {imageSrc && (
          <img
            src={imageSrc}
            alt="Captured"
            className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
          />
        )}
      </div>
      <div className="mt-4 flex">
        {imageSrc && (
          <button
            onClick={deleteImage}
            className="px-4 py-2 mr-2  text-red-700 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600"
          >
            <DeleteIcon fontSize="large" />
          </button>
        )}
        <button
          onClick={toggleView}
          className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
        >
          {showWebcam ? (
            <UploadFileIcon fontSize="large" />
          ) : (
            <LocalSeeIcon fontSize="large" />
          )}
        </button>
      </div>
    </div>
  );
};

export default function TransitionsModal({ userProfileResponse }) {
  // let stateName = "Osun State";

  // // Remove " State" from the string
  // stateName = stateName.split(" ").slice(0, -1).join(" ");

  // // Print modified string
  // console.log(stateName);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [additonalId, setAdditonalId] = useState("");
  const [experienceLevel, setExperienceLevel] = useState("");
  const [formValues, setFormValues] = useState({});
  const [errors, setErrors] = useState("");

  const [selectedImage, setSelectedImage] = useState(null);
  console.log({ selectedImage });
  const [
    createUserKYC,
    { data: dataRes, isError, isLoading, error, isSuccess },
  ] = useCreateUserKYCMutation();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  console.log({ userProfileResponse, dataRes });
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!formValues["bvn"] || !formValues["idNumber"]) {
        setErrors("All fields is required");
        // toast.error("All fields is required");
      } else if (formValues["bvn"].length < 11) {
        // toast.error("Please BVN number must be 11 digits");
        setErrors("Please BVN number must be 11 digits");
      } else if (formValues["idNumber"].length < 11) {
        // toast.error("Id number must atleast 11 number");
        setErrors("Id number must atleast 11 number");
      } else if (!additonalId?.value) {
        // toast.error("Please choose your id type");
        setErrors("Please choose your id type");
      } else if (!selectedImage) {
        // toast.error("Please upload your image or take selfie with webcam");
        setErrors("Please upload your image or take selfie with webcam");
      } else {
        formValues.selfieimage = selectedImage;
        formValues.idType = additonalId?.value;

        formValues.dateOfBirth = formatDateOfBirth(
          userProfileResponse?.status?.data?.dob
        );
        formValues.gender = userProfileResponse?.status?.data?.sex;
        // formValues.uuid = userId;
        console.log({ formValues });
        const formData = new FormData();
        formData.append("dateOfBirth", formValues?.dateOfBirth);
        formData.append("gender", formValues.gender);
        formData.append("idType", formValues.idType);
        formData.append("selfieimage", formValues.selfieimage);
        formData.append("bvn", formValues.bvn);
        formData.append("idNumber", formValues.idNumber);
        formData.append("expiryDate", formValues.expiryDate);
        const response = await createUserKYC(formData).unwrap();
        console.log({ isSuccess, response }, response?.status?.status, dataRes);
        if (isSuccess || response?.status?.status == 200) {
          // router.refresh();
          handleClose();
          toast.success(
            `${response?.status?.status_1} and ${response?.status?.status_1}` ||
              response?.message ||
              "Request successful"
          );
        } else if (
          (isSuccess == false && response?.status?.status == 400) ||
          (isSuccess == false &&
            response?.status?.data?.errors[0]?.status == 400)
        ) {
          console.log(
            "dataRes?.status?.detail?.errors[0]?.detail",
            response?.status?.data?.errors[0]?.detail
          );
          toast.error(
            response?.status?.data?.errors[0]?.detail ||
              response?.status?.error ||
              dataRes?.message ||
              "Request successful"
          );
        } else {
          toast.error(
            response?.status?.message ||
              response?.status?.data?.errors[0]?.detail ||
              dataRes?.message ||
              "Request successful"
          );
        }
      }
    } catch (error) {
      console.log({ error });
      if (isError) {
        toast.error(error?.data?.message);
      } else {
        toast.error(error?.data?.message);
      }
    }
  };

  return (
    <div>
      {/* <Button sx={{ color: "#00B172" }} onClick={handleOpen}>
        Submit Now
      </Button> */}

      <div
        //   onClick={() => handleKycAction(kycValue.action)}
        onClick={handleOpen}
        style={{ backgroundColor: "#00B172" }}
        className={`w-fit rounded-md p-2 md:px-4 md:py-2 cursor-pointer`}
      >
        <p className="text-[8px] md:text-sm xl:text-xl text-white uppercase font-semibold font-jost">
          Submit Now
        </p>
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
        className=" overflow-y-auto"
      >
        <Fade in={open}>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full bg-zinc-800 z-100 max-w-lg md:max-w-2xl lg:max-w-3xl  border-1 overflow-y-auto h-screen lg:h-fit  border-black shadow-md p-2 lg:p-4">
            <Box className=" py-4 md:py-6 bg-secondary shadow-sm xl:shadow-md rounded-sm space-y-4 text-secondary">
              <form
                onSubmit={handleSubmit}
                className="flex flex-col items-center"
              >
                <Typography
                  className="text-center text-white font-semibold text-lg"
                  id="transition-modal-title"
                  variant="h3"
                  component="h2"
                >
                  Let's Verify your Identity
                </Typography>

                <div className="text-red-600 py-3">{errors}</div>
                <div className="flex flex-col w-full md:w-2/3 lg:w-[50%] mb-4">
                  <label
                    htmlFor="bvn"
                    className="font-karla font-normal text-xs md:text-sm xl:text-[16px] text-subText text-left capitalize py-2"
                  >
                    BVN
                  </label>
                  <input
                    required
                    id="bvn"
                    className="text-white bg-transparent w-full  px-6 py-2 rounded-md focus:outline-none placeholder:text-white border border-border"
                    type="text"
                    placeholder=""
                    value={formValues["service_offer"]}
                    name="bvn"
                    onChange={handleChange}
                  />
                </div>
                <div className="md:w-2/3 lg:w-[50%]">
                  <WebcamCapture setSelectedImage={setSelectedImage} />
                </div>
                <div className="flex flex-col w-full md:w-2/3 lg:w-[50%] mb-4">
                  <label
                    htmlFor="idType"
                    className="font-karla font-normal text-xs md:text-sm xl:text-[16px] text-subText text-left capitalize py-2"
                  >
                    Additional ID
                  </label>
                  <SelectInputField
                    value={additonalId}
                    verify
                    id="idType"
                    name="idType"
                    data={idCard}
                    placeholder="Select additional Id card"
                    setSelectedValue={setAdditonalId}
                  />
                </div>
                <div className="flex flex-col w-full md:w-2/3 lg:w-[50%] mb-4">
                  <label
                    htmlFor="idNumber"
                    className="font-karla font-normal text-xs md:text-sm xl:text-[16px] text-subText text-left capitalize py-2"
                  >
                    ID Number
                  </label>
                  <input
                    required
                    id="idNumber"
                    className="text-white bg-transparent w-full  px-3 py-2 rounded-md focus:outline-none placeholder:text-white border border-border"
                    type="text"
                    placeholder="234455666787"
                    value={formValues["service_offer"]}
                    name="idNumber"
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col w-full md:w-2/3 lg:w-[50%] mb-4">
                  <label
                    htmlFor="expireDate"
                    className="font-karla font-normal text-xs md:text-sm xl:text-[16px] text-subText text-left capitalize py-2"
                  >
                    Expire Date (If applicable)
                  </label>
                  <input
                    id="expireDate"
                    className="text-white px-2 bg-transparent w-full  py-2 rounded-md focus:outline-none placeholder:text-white border border-border"
                    type="date"
                    placeholder=""
                    value={formValues["service_offer"]}
                    name="expireDate"
                    onChange={handleChange}
                  />
                </div>
                <button
                  type="submit"
                  className="px-4 py-2 bg-primary text-white rounded-md mt-4"
                >
                  Submit
                </button>
              </form>
            </Box>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

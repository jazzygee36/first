import AccountTier from "../components/account-tier";
import More from "../assets/more.svg";
import Seal from "../assets/SealCheck.svg";
import { useState } from "react";
import SideDrawer from "../components/side-drawer";
import Upload from "../assets/upload.svg";

const Benefits = [
  { description: " Max transaction limit: ₦10,0000,000.00" },
  { description: " Max account balance: Unlimited" },
  {
    description:
      " Default transaction limit is N 1,000,000. You can increase it (up to N 10,000,000) via Set Limit, based on your turnover and acceptance of our limit indemnity",
  },
  { description: " Zero Minimum Opening Balance" },
  { description: " Attractive Interest Rates" },
  { description: " Cheque Withdrawal Available" },
  {
    description: " Access to convenient Online/Digital Banking Servicesand ATM",
  },
];
const Requirement = [
  { description: " National Identity Slip" },
  { description: " Utility Bill (not more than 3 months)" },
];

const UploadDoc = [
  {
    title: "National Identity Slip",
    description: "Upload a clear National Identity slip.",
  },
  { title: "Utility Bill", description: "Upload a clear Utility Bill" },
  {
    title: "Signature",
    description: "Sign on a clear whitepaper and upload here",
  },
];
const FirstBank = () => {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [uploadedFiles, setUploadedFiles] = useState<
    Record<number, File | null>
  >({});

  const handleFileChange = (index: number, file: File | null) => {
    setUploadedFiles((prev) => ({
      ...prev,
      [index]: file,
    }));
  };

  const isDisabled =
    Object.keys(uploadedFiles).length !== UploadDoc.length ||
    Object.values(uploadedFiles).some((file) => !file);
  return (
    <div>
      <div className="flex flex-col space-y-1.5 mb-16">
        <h1 className="text-[24px] leading-6 font-medium tracking-[0.5px] text-[#3E4652] font-inter ">
          Select your Preferred Account Type
        </h1>

        <p className="text-[13px] font-[400px] text-[#002855] font-regular font-inter">
          {" "}
          Choose the tier that best fits your needs
        </p>
      </div>

      <div className="flex flex-col space-y-7.5">
        <AccountTier
          title={"Savings Account Tier 2"}
          description={"Everyday with zero opening balance"}
          transactionLimit={"Max transaction limit:"}
          transactionAmount={"250,000.00"}
          accountBalance={"Max account balance:"}
          accountBalanceAmount={"1,000,000.00"}
          btnText={"Your Current Tier"}
          seal={Seal}
          onClick={() => setOpen(true)}
        />

        <AccountTier
          title={"Savings Account Tier 3"}
          description={"Enhanced limits and better rates"}
          transactionLimit={"Max transaction limit:"}
          transactionAmount={"10,0000,000.00"}
          accountBalance={"Max account balance:"}
          accountBalanceAmount={"Unlimited"}
          btnText={"Most Popular "}
          defaultLimit="Default transaction limit is N 1,000,000. You can increase it (up to N
          10,000,000) via Set Limit, based on your turnover and acceptance of
          our limit indemnity"
          icon={More}
        />
      </div>

      <SideDrawer
        isOpen={open}
        onClose={() => {
          setOpen(false);
          setStep(1);
        }}
        title="Savings Account Tier 3"
      >
        {step === 1 && (
          <>
            <div className="p-5">
              <h2 className="text-[20px] font-medium text-[#3E4652] font-inter">
                Benefits
              </h2>
              <ul className="list-disc pl-5 space-y-2.5 mt-4">
                {Benefits.map((benefit, index) => (
                  <li
                    key={index}
                    className="text-[14px] font-inter text-[#3E4652] font-normal"
                  >
                    {benefit.description}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-5">
              <h2 className="text-[20px] font-medium text-[#3E4652] font-inter">
                Required Documents
              </h2>
              <ul className="list-disc pl-5 space-y-2.5 mt-4">
                {Requirement.map((benefit, index) => (
                  <li
                    key={index}
                    className="text-[14px] font-inter text-[#3E4652] font-normal"
                  >
                    {benefit.description}
                  </li>
                ))}
              </ul>

              <div className="flex items-center justify-end gap-4 mt-14">
                <button
                  className="bg-transparent  w-50  cursor-pointer px-4 py-2 rounded-[10px] border border-[#012E63] text-[#012E63] font-inter font-bold text-[20px]"
                  onClick={() => {
                    setOpen(false);
                    setStep(1);
                  }}
                >
                  Cancel
                </button>
                <button
                  className="bg-[#012E63] w-50 cursor-pointer text-white px-4 py-2 rounded-[10px] font-inter font-bold text-[20px] "
                  onClick={() => setStep(2)}
                >
                  Upgrade Now
                </button>
              </div>
            </div>
          </>
        )}
        {step === 2 && (
          <div className="px-12">
            <h2 className="text-[20px] font-medium text-[#3E4652] font-inter">
              Account Details
            </h2>

            <div className="mt-14">
              <h2 className="text-[20px] font-medium  text-[#3E4652] font-inter">
                Upload Documents
              </h2>

              {UploadDoc.map((doc, index) => (
                <div
                  key={index}
                  className="bg-[#EFF3FE] p-3 rounded-lg my-7 border border-[#9CA7B8]"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-5">
                      <img src={Upload} />
                      <div>
                        <h3 className="text-[16px] font-medium text-[#3E4652] font-inter">
                          {doc.title}
                        </h3>
                        <p className="text-[12px] font-light text-[#3E4652] font-inter">
                          {doc.description}
                        </p>

                        {uploadedFiles[index] && (
                          <p className="text-[12px] mt-1 text-green-600">
                            {uploadedFiles[index]?.name}
                          </p>
                        )}
                      </div>
                    </div>
                    <input
                      type="file"
                      id={`upload-${index}`}
                      className="hidden"
                      onChange={(e) =>
                        handleFileChange(index, e.target.files?.[0] || null)
                      }
                    />

                    <button
                      type="button"
                      onClick={() =>
                        document.getElementById(`upload-${index}`)?.click()
                      }
                      className="bg-[#002855] text-white px-4 py-2 rounded-[5px] font-inter font-bold text-[16px] cursor-pointer"
                    >
                      Click to Upload
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <button
              type="button"
              disabled={isDisabled}
              className={`${
                isDisabled ? "bg-[#C1C8D2] cursor-not-allowed" : "bg-[#002855]"
              } text-[#556070] px-4 py-2 w-full rounded-[10px] font-inter font-bold text-[20px]`}
            >
              Submit
            </button>
          </div>
        )}
      </SideDrawer>
    </div>
  );
};

export default FirstBank;

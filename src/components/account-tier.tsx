interface AccountTierProps {
  title: string;
  description: string;
  transactionLimit: string;
  transactionAmount: string;
  accountBalance: string;
  accountBalanceAmount: string;
  btnText: string;
  defaultLimit?: string;
  icon?: string;
  seal?: string;
  onClick?: () => void;
}

const AccountTier = ({
  title,
  description,
  accountBalanceAmount,
  transactionLimit,
  transactionAmount,
  accountBalance,
  btnText,
  defaultLimit,
  icon,
  seal,
  onClick,
}: AccountTierProps) => {
  return (
    <div className="bg-[#EFF3FE] border-[0.5px] border-[#9CA7B8] rounded-[5px] p-5  w-153.25 flex items-start ">
      <div className="w-[46%]">
        <div className="flex gap-4 items-start">
          <img src={seal} />
          <div className="flex flex-col space-y-1.25">
            <h3 className="font-inter text-[16px] font-medium text-[#3E4652]">
              {title}
            </h3>
            <p className="font-inter text-[12px] font-[300px] text-[#3E4652]">
              {description}
            </p>
          </div>
        </div>
        <ul className="list-disc pl-5 mt-5 space-y-1.25 mb-2.5">
          <li className="font-inter text-[14px] font-[400px] text-[#3E4652]">
            {transactionLimit}
            <span className="font-medium"> ₦{transactionAmount}</span>
          </li>
          <li className="font-inter text-[14px] font-[400px] text-[#3E4652]">
            {accountBalance}
            <span className="font-medium"> ₦{accountBalanceAmount}</span>
          </li>
        </ul>

        <span className="font-inter font-normal text-[12px] text-[#3E4652] ">
          {defaultLimit}
        </span>
      </div>
      <div className="w-[50%] flex items-center justify-end gap-[24.38px]">
        <div
          className="bg-[#FFFFFF] rounded-lg border-[0.5px] font-inter font-medium cursor-pointer  border-[#9CA7B8] px-2 py-1.5 text-[#3E4652]"
          onClick={onClick}
        >
          {btnText}
        </div>
        <img src={icon} className="cursor-pointer" />
      </div>
    </div>
  );
};

export default AccountTier;

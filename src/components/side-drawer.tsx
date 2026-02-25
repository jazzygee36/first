interface SideDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
}

const SideDrawer = ({ isOpen, onClose, children, title }: SideDrawerProps) => {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div onClick={onClose} className="fixed inset-0 bg-black/50 z-40" />
      )}

      {/* Drawer */}
      <div
        className={`
          fixed top-0 right-0 h-full w-[50%] bg-white z-50
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "translate-x-full"}
          flex flex-col
        `}
      >
        {/* Header (fixed) */}
        <div className="flex items-center justify-between p-4">
          <h2 className="font-medium text-2xl font-inter text-[#3E4652]">
            {title}
          </h2>
          <button
            onClick={onClose}
            aria-label="Close drawer"
            className="rounded-full p-2.5 border border-[#002855] cursor-pointer hover:text-red-500 transition-colors"
          >
            ✕
          </button>
        </div>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto">{children}</div>
      </div>
    </>
  );
};

export default SideDrawer;

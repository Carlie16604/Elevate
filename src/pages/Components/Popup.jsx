import { useEffect } from "react";

const Popup = ({ isOpen, onClose, children }) => {
    useEffect(() => {
        if (!isOpen) return;

        const handleEscape = (event) => {
            if (event.key === "Escape") {
                onClose();
            }
        };

        document.addEventListener("keydown", handleEscape);
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown", handleEscape);
            document.body.style.overflow = previousOverflow;
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div
            className="popup-overlay"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
        >
            <div
                className="popup-card"
                onClick={(event) => event.stopPropagation()}
            >
                <button
                    type="button"
                    className="popup-close"
                    onClick={onClose}
                    aria-label="Close"
                >
                    ×
                </button>
                {children}
            </div>
        </div>
    );
};

export default Popup;

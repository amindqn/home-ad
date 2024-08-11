import React, { createContext, useState, ReactNode } from "react";

export interface Toast {
    id: string;
    message: string;
    type: "success" | "error" | "info";
    duration: number;
}


interface ToastContextType {
    toasts: Toast[];
    addToast: (message: string, type: "success" | "error" | "info") => void;
    removeToast: (id: string) => void;
}

export const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    const [toasts, setToasts] = useState<Toast[]>([]);

    const addToast = (message: string, type: "success" | "error" | "info", duration: number = 3000) => {
        const date = new Date();
        const id = String(date.valueOf());
        setToasts([...toasts, { id, message, type, duration }]);
        setTimeout(() => removeToast(id), duration); 
    };

    const removeToast = (id: string) => {
        setToasts(toasts.filter((toast) => toast.id !== id));
    };

    return (
        <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
            {children}
        </ToastContext.Provider>
    );
};



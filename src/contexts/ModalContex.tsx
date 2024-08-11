import React, { createContext, useContext, useState, ReactNode } from "react";

interface ModalContent {
    title: string;
    body: ReactNode;
}

export interface ModalContextProps {
    show: boolean;
    content: ModalContent | null;
    setShow: (show: boolean) => void;
    setContent: (content: ModalContent) => void;
}

export const ModalContext = createContext<ModalContextProps | undefined>(undefined);

export const ModalProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    const [show, setShow] = useState(false);
    const [content, setContent] = useState<ModalContent | null>(null);

    return (
        <ModalContext.Provider value={{ show, setShow, setContent, content }}>
            {children}
        </ModalContext.Provider>
    );
};

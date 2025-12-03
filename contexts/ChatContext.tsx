'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface ChatContextType {
  messages: Message[];
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  addMessage: (message: Message) => void;
  clearMessages: () => void;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export function ChatProvider({ children }: { children: ReactNode }) {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: '¡Hola! Soy tu asistente virtual de Multiplica Bank. ¿En qué puedo ayudarte hoy?',
    },
  ]);
  const [isOpen, setIsOpen] = useState(false);

  const addMessage = (message: Message) => {
    setMessages((prev) => [...prev, message]);
  };

  const clearMessages = () => {
    setMessages([
      {
        role: 'assistant',
        content: '¡Hola! Soy tu asistente virtual de Multiplica Bank. ¿En qué puedo ayudarte hoy?',
      },
    ]);
  };

  return (
    <ChatContext.Provider
      value={{
        messages,
        isOpen,
        setIsOpen,
        addMessage,
        clearMessages,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
}

export function useChat() {
  const context = useContext(ChatContext);
  if (context === undefined) {
    throw new Error('useChat must be used within a ChatProvider');
  }
  return context;
}

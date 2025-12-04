'use client';

import { ChatProvider } from '@/contexts/ChatContext';
import FloatingChat from '@/components/FloatingChat';
import { ReactNode } from 'react';

export default function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <ChatProvider>
      {children}
      <FloatingChat />
    </ChatProvider>
  );
}

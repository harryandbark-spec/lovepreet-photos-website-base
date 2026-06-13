import { createContext, useContext, useState, type ReactNode } from 'react'

interface InquiryContextType {
  isOpen: boolean
  open: () => void
  close: () => void
}

const InquiryContext = createContext<InquiryContextType | null>(null)

export function InquiryProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <InquiryContext.Provider
      value={{
        isOpen,
        open: () => setIsOpen(true),
        close: () => setIsOpen(false),
      }}
    >
      {children}
    </InquiryContext.Provider>
  )
}

export function useInquiry() {
  const ctx = useContext(InquiryContext)
  if (!ctx) throw new Error('useInquiry must be used within InquiryProvider')
  return ctx
}

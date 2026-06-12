import { createContext, useContext, useState, useCallback, ReactNode } from "react";
import { CheckCircle2, AlertCircle, Info, X, Sparkles } from "lucide-react";

export type ToastType = "success" | "error" | "info" | "gold";

export interface ToastItem {
  id: string;
  message: string;
  type: ToastType;
  duration?: number;
}

interface ToastContextType {
  showToast: (message: string, type?: ToastType, duration?: number) => void;
  success: (message: string, duration?: number) => void;
  error: (message: string, duration?: number) => void;
  info: (message: string, duration?: number) => void;
  gold: (message: string, duration?: number) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
}

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const showToast = useCallback((message: string, type: ToastType = "info", duration = 4000) => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, message, type, duration }]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, duration);
  }, []);

  const success = useCallback((message: string, duration?: number) => {
    showToast(message, "success", duration);
  }, [showToast]);

  const error = useCallback((message: string, duration?: number) => {
    showToast(message, "error", duration);
  }, [showToast]);

  const info = useCallback((message: string, duration?: number) => {
    showToast(message, "info", duration);
  }, [showToast]);

  const gold = useCallback((message: string, duration?: number) => {
    showToast(message, "gold", duration);
  }, [showToast]);

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <ToastContext.Provider value={{ showToast, success, error, info, gold }}>
      {children}
      
      {/* Toast Render Portal-like fixed container */}
      <div 
        id="toast-container" 
        className="fixed bottom-4 right-4 z-[9999] flex flex-col gap-3 max-w-sm w-full px-4 sm:px-0"
      >
        {toasts.map((toast) => {
          let bgClass = "bg-white text-purple-950 border-purple-900/10";
          let Icon = Info;
          let iconClass = "text-purple-600";

          if (toast.type === "success") {
            bgClass = "bg-emerald-50 text-emerald-950 border-emerald-500/20";
            Icon = CheckCircle2;
            iconClass = "text-emerald-600";
          } else if (toast.type === "error") {
            bgClass = "bg-rose-50 text-rose-950 border-rose-500/20";
            Icon = AlertCircle;
            iconClass = "text-rose-600";
          } else if (toast.type === "gold") {
            bgClass = "bg-[#300C32] text-cream-50 border-gold-500/40";
            Icon = Sparkles;
            iconClass = "text-gold-400";
          }

          return (
            <div
              key={toast.id}
              className={`flex items-start gap-3 p-4 rounded-xl border-2 shadow-2xl transition-all duration-300 animate-slide-in-right ${bgClass}`}
              style={{
                animation: "slideIn 0.3s ease-out forwards",
              }}
            >
              <Icon className={`w-5 h-5 flex-shrink-0 mt-0.5 ${iconClass}`} />
              <div className="flex-grow">
                <p className="font-sans text-xs sm:text-sm font-bold leading-relaxed">
                  {toast.message}
                </p>
              </div>
              <button
                onClick={() => removeToast(toast.id)}
                className="text-gray-400 hover:text-gray-600 p-0.5 rounded transition flex-shrink-0"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          );
        })}
      </div>

      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(1rem) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </ToastContext.Provider>
  );
}

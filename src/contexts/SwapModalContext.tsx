import React, { createContext, useContext, useState, useEffect } from "react";
import SwapModal from "components/sections/SwapModal";

interface PriceData {
  priceUsd: string;
  priceChange24h: number;
  marketCap: number;
  fdv: number;
  volume24h: number;
  liquidity: number;
}

interface SwapModalContextType {
  showSwap: boolean;
  openSwap: () => void;
  closeSwap: () => void;
  priceData: PriceData | null;
  isLoadingPrice: boolean;
}

const SwapModalContext = createContext<SwapModalContextType | undefined>(undefined);

export const useSwapModal = () => {
  const context = useContext(SwapModalContext);
  if (!context) {
    throw new Error("useSwapModal must be used within a SwapModalProvider");
  }
  return context;
};

export const SwapModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [showSwap, setShowSwap] = useState(false);
  const [priceData, setPriceData] = useState<PriceData | null>(null);
  const [isLoadingPrice, setIsLoadingPrice] = useState(false);

  const fetchNKPPrice = async () => {
    setIsLoadingPrice(true);
    try {
      const res = await fetch(
        "https://api.dexscreener.com/latest/dex/pairs/ethereum/0xBA123E7caD737B7F8D4580d04E525724c3C80f1A"
      );
      if (res.ok) {
        const { pair } = await res.json();
        setPriceData({
          priceUsd: parseFloat(pair.priceUsd).toFixed(6),
          priceChange24h: parseFloat(pair.priceChange?.h24) || 0,
          marketCap: pair.marketCap || 0,
          fdv: pair.fdv || 0,
          volume24h: pair.volume?.h24 || 0,
          liquidity: pair.liquidity?.usd || 0,
        });
      }
    } catch (err) {
      console.error("Failed to fetch NKP price:", err);
    } finally {
      setIsLoadingPrice(false);
    }
  };

  useEffect(() => {
    const nav = document.querySelector("nav");
    if (showSwap && nav) nav.style.display = "none";
    else if (nav) nav.style.display = "block";
    return () => {
      if (nav) nav.style.display = "block";
    };
  }, [showSwap]);

  useEffect(() => {
    if (showSwap) {
      fetchNKPPrice();
      const interval = setInterval(fetchNKPPrice, 30000);
      return () => clearInterval(interval);
    }
  }, [showSwap]);

  const openSwap = () => setShowSwap(true);
  const closeSwap = () => setShowSwap(false);

  return (
    <SwapModalContext.Provider
      value={{ showSwap, openSwap, closeSwap, priceData, isLoadingPrice }}
    >
      {children}
      <SwapModal />
    </SwapModalContext.Provider>
  );
};

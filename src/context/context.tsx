import React, { createContext, useContext, useState, ReactNode } from "react";

interface SearchContextType {
  searchInput: string;
  searchCategory: string;
  setSearchInput: (input: string) => void;
  setSearchCategory: (category: string) => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useSearch must be used within a SearchProvider");
  }
  return context;
};

export const SearchProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [searchInput, setSearchInput] = useState<string>("");
  const [searchCategory, setSearchCategory] =
    useState<string>("All Categories");

  return (
    <SearchContext.Provider
      value={{ searchInput, searchCategory, setSearchInput, setSearchCategory }}
    >
      {children}
    </SearchContext.Provider>
  );
};

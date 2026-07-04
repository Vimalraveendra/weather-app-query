import { useLocalStorage } from "../../../hooks/useLocalStorage";
import type { SearchHistoryItem } from "../../../types/global.types";



const KEY = "location_history";
const MAX_ITEMS = 10;

export const useSearchHistory = () => {
  const[history,setHistory]=useLocalStorage<SearchHistoryItem[]>(KEY,[])

    const addLocationToHistory = (item: Omit<SearchHistoryItem , "id" | "timestamp">) => {
      const newItem: SearchHistoryItem = {
        ...item,
        id: `${item.name}-${item.lat}-${item.lon}`,
        timestamp: Date.now(),
      };

      const filteredHistory = history.filter((h) => h.id !== newItem.id);

      const updatedHistory = [newItem, ...filteredHistory].slice(0, MAX_ITEMS);

       setHistory(updatedHistory);
    };

   const clearHistory = () => {
        setHistory([]);
      }
      
  return{ history, addLocationToHistory,clearHistory}
};

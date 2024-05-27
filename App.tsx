import { SafeAreaView, ScrollView } from "react-native";
import SearchBox from "./components/SearchBox";
import User from "./components/User";
import { useState, useCallback } from "react";
import CardList from "./components/CardList";

export type SearchData = {
  avatar_url: string;
  followers: string | number;
  following: string | number;
  login: string;
  public_repos: string | number;
};

export default function App() {
  const [searchData, setSearchData] = useState<SearchData | null>(null);

  const search = useCallback((searchTerm: string) => {
    if (searchTerm == "") {
      alert("Please enter a search term");
      return;
    }
    const fetchApiRequest = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${searchTerm}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        return data;
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
        throw error;
      }
    };
    fetchApiRequest().then((response) => setSearchData(response));
  }, []);

  return (
    <SafeAreaView className='flex-1 bg-black'>
      <ScrollView
        keyboardShouldPersistTaps='handled'
        className='h-screen p-4 mx-auto'>
        <SearchBox onSearch={search} />
        {searchData && (
          <>
            <User src={searchData.avatar_url} userName={searchData.login} />
            <CardList searchData={searchData} />
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

import { SafeAreaView, ScrollView } from "react-native";
import SearchBox from "./components/SearchBox";

export default function App() {
  const search: Function = (searchTerm: string) => {
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
    fetchApiRequest().then((response) => console.log(response));
  };
  return (
    <SafeAreaView className='flex-1 bg-black'>
      <ScrollView keyboardShouldPersistTaps='handled' className='h-screen'>
        <SearchBox onSearch={search} />
      </ScrollView>
    </SafeAreaView>
  );
}

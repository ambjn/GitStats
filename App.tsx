import { SafeAreaView, ScrollView } from "react-native";
import SearchBox from "./components/SearchBox";

export default function App() {
  return (
    <SafeAreaView className='flex-1 bg-black'>
      <ScrollView keyboardShouldPersistTaps='handled' className='h-screen'>
        <SearchBox />
      </ScrollView>
    </SafeAreaView>
  );
}

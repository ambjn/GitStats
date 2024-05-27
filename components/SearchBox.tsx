import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";

type Props = {
  onSearch: Function;
};

const SearchBox = (props: Props) => {
  const [userName, setUserName] = useState<String>("");
  return (
    <View className='flex flex-row items-center space-x-4 mx-auto mt-5'>
      <TextInput
        placeholder='Enter Your Username Here'
        placeholderTextColor='#FFFFFF'
        className='border border-gray-200 p-2 w-2/3 text-gray-100'
        onChangeText={(text: String) => setUserName(text)}
      />
      <TouchableOpacity
        className='bg-sky-600 px-4 py-2 rounded'
        onPress={() => props.onSearch(userName)}>
        <Text className='text-gray-50'>Search</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SearchBox;

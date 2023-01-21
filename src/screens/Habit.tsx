import { View, ScrollView, Text } from "react-native";
import { useRoute } from "@react-navigation/native";
import { BackButton } from "../components/BackButton";
import dayjs from "dayjs";
import { ProgressBar } from "../components/ProgressBar";
import { Checkbox } from "../components/Checkbox";

interface Params {
  date: string;
}

export function Habit(){
  const route = useRoute();
  const { date } = route.params as Params;

  const parsedDate = dayjs(date);
  const dayOfWeek = parsedDate.format("dddd");
  const dayOfMonth = parsedDate.format("DD/MM");

  return (
    <View className='flex-1 bg-background px-8 pt-16'>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <BackButton />
        <Text className='mt-6 text-zinc-400 font-semibold text-base lowercase'>
          {dayOfWeek}
          </Text>
          <Text className='text-white font-extrabold text-3xl'>
          {dayOfMonth}
          </Text>

          <ProgressBar progress={40}/>
          <Checkbox
            title="Fazer exercícios"
            checked={true}
            />

          <Checkbox
            title="Fazer exercícios"
            checked={false}
            />
      </ScrollView>
    </View>
  );
}
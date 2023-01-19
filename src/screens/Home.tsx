import { View, Text } from "react-native";

const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"];

import { Header, DAY_SYZE } from "../components/Header";
import { HabitDay } from "../components/HabitDay";

export function Home() {
  return (
    <View className="flex-1 bg-background px-8 pt-16">
      <Header />
      <View className="flex-row mt-6 mb-2">
        {weekDays.map((weekDay, i) => (
          <Text 
          className="text-zinc-400 text-xl font-bold text-center mx-1"
          key={`${weekDay}-${i}`}
          style={{ width: DAY_SYZE }}
          >{weekDay}</Text>
        ))}
      </View>
      <HabitDay />
    </View>
  );
}

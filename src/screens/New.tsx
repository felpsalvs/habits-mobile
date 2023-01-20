import { View, ScrollView, Text, TextInput } from "react-native";

import { BackButton } from "../components/BackButton";
import { Checkbox } from "../components/Checkbox";

const availableWeekDays = [
  "Domingo",
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado",
];

export function New() {
  return (
    <View className="flex-1 bg-background px-8 pt-16">
      <ScrollView showsVerticalScrollIndicator={false}>
        <BackButton />

        <Text className="mt-6 font-extrabold text-white text-3xl">
          Criar hábito
        </Text>

        <View className="mt-6 text-white font-semibold text-base">
          Qual seu comprometimento?
        </View>

        <TextInput className="h-12 pl-4 rounded-lg mt-3 bg-zinc-800 text-white focus:border-2 focus:border-green-600" />
        {availableWeekDays.map((weekDay, index) => (
          <Checkbox 
          key={weekDay}
          title={weekDay} />
        ))}
      </ScrollView>
    </View>
  );
}

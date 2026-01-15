import React from 'react';
import { ScrollView } from 'react-native';
import { cssInterop } from 'nativewind';
import { DemoShowcase } from "@acme/ui/components/demo-showcase"

cssInterop(ScrollView, { className: 'style', contentContainerClassName: 'contentContainerStyle' });

export default function Home() {
  return (
    <ScrollView className="flex-1 bg-background">
      <DemoShowcase />
    </ScrollView>
  );
}

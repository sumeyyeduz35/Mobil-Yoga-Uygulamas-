import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const chartConfig = {
  backgroundGradientFrom: '#f5f5dc',
  backgroundGradientTo: '#f5f5dc',
  color: (opacity = 1) => `rgba(51, 51, 51, ${opacity})`,
  strokeWidth: 2,
};

const MyWorkoutsScreen = () => {
  const [dailyData, setDailyData] = useState([0, 0, 0, 0, 0, 0, 0]);
  const [weeklyData, setWeeklyData] = useState([0, 0, 0, 0]);
  const [monthlyData, setMonthlyData] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

  const handleCompleteGoal = (type) => {
    
    const updatedData = [...dailyData];
    const index = new Date().getDay(); 
    updatedData[index] += 1;
    setDailyData(updatedData);

    
    const updatedWeeklyData = [...weeklyData];
    updatedWeeklyData[index] += 1;
    setWeeklyData(updatedWeeklyData);

   
    const updatedMonthlyData = [...monthlyData];
    const month = new Date().getMonth(); 
    updatedMonthlyData[month] += 1;
    setMonthlyData(updatedMonthlyData);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Yaptığım Egzersizler</Text>
      
      {/* Günlük Çizgi Grafiği */}
      <Text style={styles.chartTitle}>Günlük İlerleme</Text>
      <LineChart
        data={{
          labels: ['Paz', 'Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt'],
          datasets: [{ data: dailyData }]
        }}
        width={screenWidth - 40}
        height={200}
        chartConfig={chartConfig}
        bezier
      />

      {/* Haftalık Çizgi Grafiği */}
      <Text style={styles.chartTitle}>Haftalık İlerleme</Text>
      <LineChart
        data={{
          labels: ['Hafta 1', 'Hafta 2', 'Hafta 3', 'Hafta 4'],
          datasets: [{ data: weeklyData }]
        }}
        width={screenWidth - 40}
        height={200}
        chartConfig={chartConfig}
        bezier
      />

      {/* Aylık Çizgi Grafiği */}
      <Text style={styles.chartTitle}>Aylık İlerleme</Text>
      <LineChart
        data={{
          labels: ['Ock', 'Şub', 'Mart', 'Nis', 'May', 'Haz', 'Tem', 'Ağs', 'Eyl', 'Ek', 'Kas', 'Ar'],
          datasets: [{ data: monthlyData }]
        }}
        width={screenWidth - 10}
        height={200}
        chartConfig={chartConfig}
        bezier
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f5f5dc', 
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333333',
  },
  chartTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    color: '#333333',
  },
});

export default MyWorkoutsScreen;

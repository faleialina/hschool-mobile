import { Text, ScrollView, StyleSheet } from 'react-native';
import React from 'react';

export function CodeComponent({ code }) {
  const styles = StyleSheet.create({
    container: {
      marginTop: 16,
      marginLeft: 5,
      marginRight: 5,
      padding: 16,
      backgroundColor: '#f1f0f0ae',
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
    },
    code: {
      fontFamily: 'Courier New',
      color: '#2768ca', 
    },
    comment: {
      fontFamily: 'Courier New',
      color: '#666', 
    },
  });

  const splitCodeWithComments = (code) => {
    const commentRegex = /(\/\*.*?\*\/|\/\/.*)/g; // Регулярное выражение для поиска комментариев
    const parts = code.split(commentRegex); // Разделение строки на части до и после комментариев
    return parts.map((part, index) =>
      <Text key={index} style={index % 2 === 0 ? styles.code : styles.comment}>
        {part}
      </Text>
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {splitCodeWithComments(code)}
    </ScrollView>
  );
}

import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Image, Platform } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function ExpoInterviewPrepScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={<Ionicons size={310} name="information-circle" style={styles.headerImage} />}
    >
      <ThemedView>
        <ThemedText type="title">Project Description:</ThemedText>
      </ThemedView>
      <ThemedText>HSchool Educational School is an online learning platform designed to prepare individuals for interviews in web development. Our application focuses on providing comprehensive training and resources to help users excel in their interviews.</ThemedText>

      <ThemedView>
        <ThemedText type="subtitle">How it Works:</ThemedText>
      </ThemedView>
      <ThemedText>Upon logging in, users are greeted with the homepage where they can access a curated list of topics relevant to web development interviews. The interface offers three primary buttons:</ThemedText>

      <ThemedView>
        <ThemedText type="defaultSemiBold">1. Recommended Study Material:</ThemedText>
        <ThemedText>Users can explore a selection of recommended study materials tailored to enhance their understanding of key concepts in web development, including HTML, CSS, JavaScript, and more.</ThemedText>
      </ThemedView>

      <ThemedView>
        <ThemedText type="defaultSemiBold">2. Practice Exercises:</ThemedText>
        <ThemedText>Access a variety of coding challenges and exercises aimed at sharpening technical skills and problem-solving abilities required for web development interviews.</ThemedText>
      </ThemedView>

      <ThemedView>
        <ThemedText type="defaultSemiBold">3. Custom Filters:</ThemedText>
        <ThemedText>Utilize customizable filters to narrow down study materials and exercises based on specific criteria such as difficulty level, topic, or technology stack.</ThemedText>
      </ThemedView>

      <ThemedView>
        <ThemedText type="subtitle">Additional Features:</ThemedText>
      </ThemedView>

      <ThemedView>
        <ThemedText>• Detailed Insights: Clicking on a particular topic or exercise provides users with in-depth information, including explanations, sample code, and suggested resources for further learning.</ThemedText>
      </ThemedView>
      <ThemedView>
        <ThemedText>• Progress Tracking: Monitor your progress and track your performance across various topics and exercises to identify areas for improvement.</ThemedText>
      </ThemedView>
      <ThemedView>
        <ThemedText>• Technical Support: If you encounter any difficulties or have questions, our support team is readily available to assist you. Simply reach out to us via email at support@hschool.com.</ThemedText>
      </ThemedView>

      <ThemedView>
        <ThemedText type="subtitle">Having any troubles?</ThemedText>
      </ThemedView>

      <ThemedView>
        <ThemedText>Send us a text message anytime, and we're happy to help: support@hschool.com.</ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});

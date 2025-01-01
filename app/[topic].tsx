import { Image, ScrollView, StyleSheet, Text } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import storage from '../storage/index.json';
import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import { CodeComponent } from '@/components/CodeComponent';

import htmlImage from '@/assets/images/html.png';
import cssImage from '@/assets/images/css.png';
import javascriptImage from '@/assets/images/javascript.png';
import typescriptImage from '@/assets/images/typescript.png';
import nodejsImage from '@/assets/images/nodejs.png';
import nosqlImage from '@/assets/images/mongo-db.png';
import sqlImage from '@/assets/images/sql.png';
import reactImage from '@/assets/images/react.png';

interface iDescription {
  readonly id: number;
  readonly code: string;
  readonly link: string[];
  readonly question: string;
  readonly answer: string;
}

interface iTopic {
  readonly assets: string;
  readonly description: iDescription[];
}

const topicImageMap: Record<string, any> = {
  HTML: htmlImage,
  CSS: cssImage,
  JavaScript: javascriptImage,
  TypeScript: typescriptImage,
  React: reactImage,
  SQL: sqlImage,
  noSQL: nosqlImage,
  'Node.js': nodejsImage,
};

export default function DescriptionScreen() {
  const { topic } = useLocalSearchParams();

  const [activeTopic, setActiveTopic] = useState<iTopic>();

  useEffect(() => {
    setActiveTopic(storage[topic]);
  }, [topic]);

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#bde1eb', dark: '#473c1d' }}
      headerImage={<Image source={topicImageMap[topic]} style={styles.topicImage} />}
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">{topic}</ThemedText>
      </ThemedView>

      {activeTopic?.description &&
        activeTopic?.description.map((el, index: number) => (
          <Collapsible key={index} title={el.question}>
            <ThemedText>{el.answer}</ThemedText>

            {el.code &&   <CodeComponent code={el.code} />
          }

            {el.link && el.link.map((el, index) => el && <ExternalLink key={index} href={el}>
              <ThemedText type="link">Узнать больше #{index + 1}</ThemedText>
            </ExternalLink>)}

          </Collapsible>
        ))}
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  topicImage: {
    height: 250,
    width: 250,
    position: 'absolute',
    left: '20%',
  },
});

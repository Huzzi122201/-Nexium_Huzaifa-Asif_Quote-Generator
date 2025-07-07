export interface Quote {
  id: number;
  text: string;
  author: string;
  topic: string;
}

export const quotes: Quote[] = [
  // Motivation quotes
  {
    id: 1,
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
    topic: "motivation"
  },
  {
    id: 2,
    text: "Innovation distinguishes between a leader and a follower.",
    author: "Steve Jobs",
    topic: "motivation"
  },
  {
    id: 3,
    text: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
    topic: "motivation"
  },
  {
    id: 4,
    text: "It is during our darkest moments that we must focus to see the light.",
    author: "Aristotle",
    topic: "motivation"
  },
  {
    id: 5,
    text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill",
    topic: "motivation"
  },

  // Success quotes
  {
    id: 6,
    text: "Success is not the key to happiness. Happiness is the key to success.",
    author: "Albert Schweitzer",
    topic: "success"
  },
  {
    id: 7,
    text: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
    topic: "success"
  },
  {
    id: 8,
    text: "Don't be afraid to give up the good to go for the great.",
    author: "John D. Rockefeller",
    topic: "success"
  },
  {
    id: 9,
    text: "The successful warrior is the average man with laser-like focus.",
    author: "Bruce Lee",
    topic: "success"
  },
  {
    id: 10,
    text: "Success is walking from failure to failure with no loss of enthusiasm.",
    author: "Winston Churchill",
    topic: "success"
  },

  // Wisdom quotes
  {
    id: 11,
    text: "The only true wisdom is in knowing you know nothing.",
    author: "Socrates",
    topic: "wisdom"
  },
  {
    id: 12,
    text: "In the middle of difficulty lies opportunity.",
    author: "Albert Einstein",
    topic: "wisdom"
  },
  {
    id: 13,
    text: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius",
    topic: "wisdom"
  },
  {
    id: 14,
    text: "The journey of a thousand miles begins with one step.",
    author: "Lao Tzu",
    topic: "wisdom"
  },
  {
    id: 15,
    text: "Yesterday is history, tomorrow is a mystery, today is a gift.",
    author: "Eleanor Roosevelt",
    topic: "wisdom"
  },

  // Life quotes
  {
    id: 16,
    text: "Life is what happens to you while you're busy making other plans.",
    author: "John Lennon",
    topic: "life"
  },
  {
    id: 17,
    text: "The purpose of our lives is to be happy.",
    author: "Dalai Lama",
    topic: "life"
  },
  {
    id: 18,
    text: "Life is really simple, but we insist on making it complicated.",
    author: "Confucius",
    topic: "life"
  },
  {
    id: 19,
    text: "In the end, we will remember not the words of our enemies, but the silence of our friends.",
    author: "Martin Luther King Jr.",
    topic: "life"
  },
  {
    id: 20,
    text: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde",
    topic: "life"
  },

  // Technology quotes
  {
    id: 21,
    text: "Technology is best when it brings people together.",
    author: "Matt Mullenweg",
    topic: "technology"
  },
  {
    id: 22,
    text: "The advance of technology is based on making it fit in so that you don't really even notice it.",
    author: "Bill Gates",
    topic: "technology"
  },
  {
    id: 23,
    text: "Any sufficiently advanced technology is indistinguishable from magic.",
    author: "Arthur C. Clarke",
    topic: "technology"
  },
  {
    id: 24,
    text: "The real problem is not whether machines think but whether men do.",
    author: "B.F. Skinner",
    topic: "technology"
  },
  {
    id: 25,
    text: "First we shape our tools, then they shape us.",
    author: "Marshall McLuhan",
    topic: "technology"
  }
];

export const getQuotesByTopic = (topic: string): Quote[] => {
  const filteredQuotes = quotes.filter(quote => 
    quote.topic.toLowerCase().includes(topic.toLowerCase())
  );
  
  // Shuffle and return 3 random quotes
  const shuffled = filteredQuotes.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 3);
};

export const getRandomQuotes = (): Quote[] => {
  const shuffled = quotes.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 3);
};

export const getAllTopics = (): string[] => {
  const topics = [...new Set(quotes.map(quote => quote.topic))];
  return topics.sort();
}; 
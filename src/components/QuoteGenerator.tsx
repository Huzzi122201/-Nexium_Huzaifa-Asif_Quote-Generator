"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Quote, getQuotesByTopic, getRandomQuotes, getAllTopics } from "@/data/quotes";

export default function QuoteGenerator() {
  const [topic, setTopic] = useState("");
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate loading delay for better UX
    setTimeout(() => {
      if (topic.trim()) {
        const topicQuotes = getQuotesByTopic(topic.trim());
        if (topicQuotes.length > 0) {
          setQuotes(topicQuotes);
        } else {
          // If no quotes found for the topic, show random quotes
          setQuotes(getRandomQuotes());
        }
      } else {
        setQuotes(getRandomQuotes());
      }
      setIsLoading(false);
    }, 500);
  };

  const handleRandomQuotes = () => {
    setIsLoading(true);
    setTimeout(() => {
      setQuotes(getRandomQuotes());
      setIsLoading(false);
    }, 500);
  };

  const availableTopics = getAllTopics();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Quote Generator
          </h1>
          <p className="text-xl text-gray-600">
            Discover inspiring quotes by topic or get random wisdom
          </p>
        </div>

        {/* Search Form */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Find Quotes by Topic</CardTitle>
            <CardDescription>
              Enter a topic to find related quotes, or leave blank for random quotes
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="topic">Topic</Label>
                <Input
                  id="topic"
                  type="text"
                  placeholder="e.g., motivation, success, wisdom, life, technology"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  className="w-full"
                />
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-sm text-gray-600">Popular topics:</span>
                {availableTopics.map((availableTopic) => (
                  <button
                    key={availableTopic}
                    type="button"
                    onClick={() => setTopic(availableTopic)}
                    className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded-full hover:bg-blue-200 transition-colors"
                  >
                    {availableTopic}
                  </button>
                ))}
              </div>
              <div className="flex gap-3">
                <Button type="submit" disabled={isLoading} className="flex-1">
                  {isLoading ? "Finding Quotes..." : "Get Quotes"}
                </Button>
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={handleRandomQuotes}
                  disabled={isLoading}
                >
                  Random Quotes
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Quotes Display */}
        {quotes.length > 0 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-900 text-center">
              {topic ? (
                <>Quotes about &ldquo;{topic}&rdquo;</>
              ) : (
                "Random Quotes"
              )}
            </h2>
            <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-1">
              {quotes.map((quote) => (
                <Card key={quote.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <blockquote className="text-lg text-gray-700 mb-4 italic">
                      &ldquo;{quote.text}&rdquo;
                    </blockquote>
                    <div className="flex justify-between items-center">
                      <cite className="text-sm font-medium text-blue-600">
                        — {quote.author}
                      </cite>
                      <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full">
                        {quote.topic}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Instructions */}
        {quotes.length === 0 && !isLoading && (
          <Card className="text-center">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                Ready to Find Some Inspiration?
              </h3>
              <p className="text-gray-600">
                Enter a topic above or click &ldquo;Random Quotes&rdquo; to get started!
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
} 
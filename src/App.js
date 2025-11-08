import React, { useState } from "react";
import { Heart, Calendar, Sparkles, Camera, Award } from "lucide-react";

export default function AnniversaryWebsite() {
  const [currentSection, setCurrentSection] = useState("home");
  const [quizScore, setQuizScore] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [hasEntered, setHasEntered] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [showPetals, setShowPetals] = useState(false);

  // CUSTOMIZE: Add your photos/videos here (use image/video URLs)
  const photos = [
    {
      url: "https://files.catbox.moe/wd3pfj.jpg",
      caption: "Our first date 💕",
      type: "image",
    },
    {
      url: "https://files.catbox.moe/fhkow8.png",
      caption: "That perfect day",
      type: "image",
    },
    {
      url: "https://files.catbox.moe/c3qxih.jpeg",
      caption: "Making memories",
      type: "image",
    },
    {
      url: "https://files.catbox.moe/yagsgm.png",
      caption: "Together forever",
      type: "image",
    },
    {
      url: "https://files.catbox.moe/1vnhoa.jpeg",
      caption: "Adventures with you",
      type: "image",
    },
    {
      url: "https://files.catbox.moe/da1yhi.jpeg",
      caption: "You & me",
      type: "image",
    },
  ];

  // CUSTOMIZE: Add your memories here with photos
  const memories = [
    {
      month: "November 2024",
      title: "The Beginning",
      description: "The day we met and my world changed forever",
      color: "from-pink-400 to-rose-500",
      image: "https://files.catbox.moe/dk17vg.png",
    },
    {
      month: "December 2024",
      title: "He fell in love",
      description: "you swept me off my feet and it felt amazing",
      color: "from-purple-400 to-pink-500",
      image: "https://files.catbox.moe/4dkc1a.jpeg",
    },
    {
      month: "February 2025",
      title: "Valentine's Day",
      description: "The most romantic day of my life",
      color: "from-red-400 to-pink-500",
      image: "https://files.catbox.moe/7qo1oz.jpeg",
    },
    {
      month: "May 2025",
      title: "Flowers for My Lady",
      description:
        "Every flower a reminder that you deserve all the beauty in the world",
      color: "from-orange-400 to-rose-500",
      image: "https://files.catbox.moe/h3piqb.PNG",
    },
    {
      month: "August 2025",
      title: "Our Song",
      description: "Found the song that describes us perfectly",
      color: "from-fuchsia-400 to-purple-500",
      image: "https://files.catbox.moe/ebeebz.PNG",
    },
    {
      month: "November 2025",
      title: "One Year",
      description: "Here's to forever with you",
      color: "from-pink-500 to-rose-600",
      image: "https://files.catbox.moe/r25kau.JPG",
    },
  ];

  // CUSTOMIZE: Add your quiz questions here
  const quizQuestions = [
    {
      question: "Where was our first date?",
      options: ["Coffee shop", "Restaurant", "Park", "Movies"],
      correct: 0,
    },
    {
      question: "What's my favorite thing about you?",
      options: ["Your smile", "Your laugh", "Your kindness", "Everything"],
      correct: 3,
    },
    {
      question: "What song reminds me of us?",
      options: [
        "Perfect by Ed Sheeran",
        "A Thousand Years",
        "All of Me",
        "Cremes' Interlude",
      ],
      correct: 3,
    },
    {
      question: "What's our favorite thing to do together?",
      options: [
        "Cook together",
        "Watch movies",
        "Take walks",
        "Everything together",
      ],
      correct: 3,
    },
  ];

  const handleQuizAnswer = (selectedIndex) => {
    if (selectedIndex === quizQuestions[currentQuestion].correct) {
      setQuizScore(quizScore + 1);
    }

    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizComplete(true);
    }
  };

  const resetQuiz = () => {
    setQuizScore(0);
    setCurrentQuestion(0);
    setQuizComplete(false);
  };

  const handleNoButton = () => {
    const randomX = Math.random() * (window.innerWidth - 200);
    const randomY = Math.random() * (window.innerHeight - 100);
    setNoButtonPosition({ x: randomX, y: randomY });
  };

  const handleYesClick = () => {
    setShowPetals(true);
    setTimeout(() => {
      setHasEntered(true);
    }, 1000);
  };

  const Petal = ({ delay, duration, startX }) => (
    <div
      className="absolute animate-fall"
      style={{
        left: `${startX}%`,
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
        top: "-20px",
      }}
    >
      <div
        className="text-6xl opacity-90"
        style={{
          animation: `spin ${duration}s linear infinite`,
          filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.2))",
        }}
      >
        🌺
      </div>
    </div>
  );

  const BorderFlower = ({ position, delay }) => {
    const positions = {
      "top-left": "top-4 left-4",
      "top-right": "top-4 right-4",
      "bottom-left": "bottom-4 left-4",
      "bottom-right": "bottom-4 right-4",
      "top-center": "top-4 left-1/2 -translate-x-1/2",
      "bottom-center": "bottom-4 left-1/2 -translate-x-1/2",
      "left-center": "top-1/2 left-4 -translate-y-1/2",
      "right-center": "top-1/2 right-4 -translate-y-1/2",
    };

    const flowers = ["🌼", "🌻", "🌸", "💐", "🏵️"];
    const randomFlower = flowers[Math.floor(Math.random() * flowers.length)];

    return (
      <div
        className={`fixed ${positions[position]} pointer-events-none z-20 text-4xl opacity-60`}
        style={{
          animation: `fullSpin 4s linear infinite`,
          animationDelay: `${delay}s`,
        }}
      >
        {randomFlower}
      </div>
    );
  };

  const FloatingHeart = ({ delay }) => (
    <div
      className="absolute animate-pulse"
      style={{
        left: `${Math.random() * 100}%`,
        animationDelay: `${delay}s`,
        animationDuration: "3s",
      }}
    >
      <Heart
        className="text-pink-300 opacity-20"
        size={20}
        fill="currentColor"
      />
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 relative overflow-hidden">
      {/* Floating hearts background */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <FloatingHeart key={i} delay={i * 0.5} />
        ))}
      </div>

      {/* Lily petals animation - LOGIN PAGE ONLY */}
      {showPetals && !hasEntered && (
        <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
          {[...Array(40)].map((_, i) => (
            <Petal
              key={i}
              delay={i * 0.05}
              duration={2.5 + Math.random() * 2}
              startX={Math.random() * 100}
            />
          ))}
        </div>
      )}

      {/* Wildflower border decorations - ALL OTHER PAGES */}
      {hasEntered && (
        <>
          {[
            "top-left",
            "top-right",
            "bottom-left",
            "bottom-right",
            "top-center",
            "bottom-center",
            "left-center",
            "right-center",
          ].map((pos, i) => (
            <BorderFlower key={pos} position={pos} delay={i * 0.5} />
          ))}
        </>
      )}

      {/* Add keyframes for animations */}
      <style>{`
        @keyframes fall {
          to {
            transform: translateY(100vh);
          }
        }
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes fullSpin {
          to {
            transform: rotate(360deg);
          }
        }
        .animate-fall {
          animation: fall linear forwards;
        }
      `}</style>

      {/* Login Page */}
      {!hasEntered ? (
        <div className="min-h-screen flex items-center justify-center p-4 relative z-10">
          <div className="max-w-md w-full bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl text-center">
            <Heart
              className="mx-auto mb-6 text-rose-500 animate-pulse"
              size={64}
              fill="currentColor"
            />
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              Happy Anniversary, Nonny! 💕
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Would you like to see what I made for you?
            </p>

            <div className="flex gap-4 justify-center relative">
              <button
                onClick={handleYesClick}
                className="px-8 py-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
              >
                Yes! 💖
              </button>

              <button
                onMouseEnter={handleNoButton}
                onTouchStart={handleNoButton}
                style={{
                  position: noButtonPosition.x !== 0 ? "fixed" : "relative",
                  left:
                    noButtonPosition.x !== 0
                      ? `${noButtonPosition.x}px`
                      : "auto",
                  top:
                    noButtonPosition.y !== 0
                      ? `${noButtonPosition.y}px`
                      : "auto",
                  transition: "all 0.3s ease",
                }}
                className="px-8 py-3 bg-gray-300 text-gray-700 rounded-full font-medium shadow-lg hover:shadow-xl"
              >
                No 😢
              </button>
            </div>

            <p className="text-sm text-gray-500 mt-6 italic">
              (Try clicking "No" if you dare... 😏)
            </p>
          </div>
        </div>
      ) : (
        <>
          {/* Navigation */}
          <nav className="relative z-10 bg-white/80 backdrop-blur-sm shadow-sm sticky top-0">
            <div className="container mx-auto px-4 py-4 flex justify-center gap-6 flex-wrap">
              {[
                { id: "home", icon: Heart, label: "Home" },
                { id: "gallery", icon: Camera, label: "Gallery" },
                { id: "memories", icon: Calendar, label: "Memories" },
                { id: "quiz", icon: Award, label: "Quiz" },
              ].map(({ id, icon: Icon, label }) => (
                <button
                  key={id}
                  onClick={() => setCurrentSection(id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
                    currentSection === id
                      ? "bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg"
                      : "bg-white text-gray-700 hover:bg-pink-50"
                  }`}
                >
                  <Icon size={18} />
                  <span className="font-medium">{label}</span>
                </button>
              ))}
            </div>
          </nav>

          <div className="container mx-auto px-4 py-12 relative z-10">
            {/* Home Section */}
            {currentSection === "home" && (
              <div className="max-w-3xl mx-auto text-center animate-fade-in">
                <Sparkles className="mx-auto mb-6 text-pink-500" size={48} />
                <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-pink-500 via-rose-500 to-purple-500 bg-clip-text text-transparent">
                  Happy 1st Anniversary
                </h1>
                <p className="text-2xl text-gray-700 mb-8">
                  To the love of my life
                </p>
                <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-xl mb-8">
                  <Heart
                    className="mx-auto mb-4 text-rose-500"
                    size={40}
                    fill="currentColor"
                  />
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Hey Nonny
                  </h3>
                  <div className="text-lg text-gray-700 leading-relaxed space-y-4 text-left">
                    <p>
                      Love is more than words; it's more than a sentence on a
                      piece of paper, and my love for you is more than love.
                      From the day I've met you I never wanted to spend another
                      day without you.
                    </p>
                    <p>
                      You motivate me to be better, to be more of me, to not
                      feel worried about the small things, and to experience
                      life to its fullest. I am a better man because of you, I
                      am a better friend because of you, and one day a great
                      father because of you.
                    </p>
                    <p>
                      You are my other half, my partner in crime (not real
                      crimes of course), my best friend, and my soul mate. I
                      love you with every drum beat of my heart, and it
                      continues to grow every single day. As amazing as this
                      day, our wedding day will be, the part I'm most excited
                      for is every day following. The days we get to spend
                      together, the life we'll get to build, the adventures
                      we'll create, and the lifetime of happiness that we will
                      share with one another.
                    </p>
                    <p>
                      I promise to always try, to always experience new and
                      exciting things together, to go on explorations, to never
                      stop impressing you, to always be faithful to you, and to
                      always be there for you. I promise to inspire you the way
                      you have always inspired me, to lift you up when you fall,
                      to kiss your cheeks when they are stained with the tears
                      of hardship and the tears of happiness.
                    </p>
                  </div>
                </div>
                <div className="flex justify-center gap-4 flex-wrap">
                  <div className="bg-gradient-to-br from-pink-400 to-rose-500 rounded-2xl p-6 text-white shadow-lg">
                    <div className="text-4xl font-bold">365</div>
                    <div className="text-sm">Days Together</div>
                  </div>
                  <div className="bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl p-6 text-white shadow-lg">
                    <div className="text-4xl font-bold">∞</div>
                    <div className="text-sm">Memories Made</div>
                  </div>
                  <div className="bg-gradient-to-br from-rose-400 to-red-500 rounded-2xl p-6 text-white shadow-lg">
                    <div className="text-4xl font-bold">1</div>
                    <div className="text-sm">Amazing You</div>
                  </div>
                </div>
              </div>
            )}

            {/* Gallery Section */}
            {currentSection === "gallery" && (
              <div className="max-w-5xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                  Our Beautiful Moments
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {photos.map((photo, index) => (
                    <div
                      key={index}
                      className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                    >
                      {photo.type === "video" ? (
                        <video
                          src={photo.url}
                          className="w-full h-64 object-cover"
                          controls
                          loop
                          muted
                          playsInline
                          onError={(e) =>
                            console.log("Video error:", photo.url)
                          }
                        />
                      ) : (
                        <img
                          src={photo.url}
                          alt={photo.caption}
                          className="w-full h-64 object-cover"
                          loading="lazy"
                          onError={(e) => {
                            console.error("Failed to load image:", photo.url);
                            e.target.src =
                              'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23f0f0f0" width="400" height="300"/%3E%3Ctext fill="%23999" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3EImage%3C/text%3E%3C/svg%3E';
                          }}
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end pointer-events-none">
                        <p className="text-white p-4 font-medium">
                          {photo.caption}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Memories Timeline */}
            {currentSection === "memories" && (
              <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                  Our Journey Together
                </h2>
                <div className="space-y-6">
                  {memories.map((memory, index) => (
                    <div
                      key={index}
                      className="bg-white/60 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
                    >
                      <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/3">
                          <img
                            src={memory.image}
                            alt={memory.title}
                            className="w-full h-48 md:h-full object-cover"
                          />
                        </div>
                        <div className="md:w-2/3 p-6">
                          <div className="flex items-start gap-4">
                            <div
                              className={`flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br ${memory.color} flex items-center justify-center text-white font-bold shadow-lg`}
                            >
                              {index + 1}
                            </div>
                            <div className="flex-grow">
                              <div className="text-sm text-gray-500 mb-1">
                                {memory.month}
                              </div>
                              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                                {memory.title}
                              </h3>
                              <p className="text-gray-700">
                                {memory.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Quiz Section */}
            {currentSection === "quiz" && (
              <div className="max-w-2xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                  How Well Do You Know Us?
                </h2>

                {!quizComplete ? (
                  <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
                    <div className="mb-6">
                      <div className="flex justify-between text-sm text-gray-600 mb-2">
                        <span>
                          Question {currentQuestion + 1} of{" "}
                          {quizQuestions.length}
                        </span>
                        <span>Score: {quizScore}</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-pink-500 to-purple-500 transition-all"
                          style={{
                            width: `${
                              ((currentQuestion + 1) / quizQuestions.length) *
                              100
                            }%`,
                          }}
                        />
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-800 mb-6">
                      {quizQuestions[currentQuestion].question}
                    </h3>

                    <div className="space-y-3">
                      {quizQuestions[currentQuestion].options.map(
                        (option, index) => (
                          <button
                            key={index}
                            onClick={() => handleQuizAnswer(index)}
                            className="w-full p-4 bg-white rounded-xl text-left hover:bg-gradient-to-r hover:from-pink-50 hover:to-purple-50 transition-all shadow-sm hover:shadow-md"
                          >
                            {option}
                          </button>
                        )
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-xl text-center">
                    <Heart
                      className="mx-auto mb-4 text-rose-500"
                      size={64}
                      fill="currentColor"
                    />
                    <h3 className="text-3xl font-bold mb-4 text-gray-800">
                      You scored {quizScore} out of {quizQuestions.length}!
                    </h3>
                    <p className="text-xl text-gray-700 mb-6">
                      {quizScore === quizQuestions.length
                        ? "Perfect! You know us so well! 💕"
                        : quizScore >= quizQuestions.length / 2
                        ? "Not bad! But there's always more to learn about us! 💝"
                        : "We have so many more memories to make together! 💗"}
                    </p>
                    <button
                      onClick={resetQuiz}
                      className="px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all"
                    >
                      Try Again
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}

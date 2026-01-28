"use client";

import { useEffect, useRef, useState } from "react";

const Banner = () => {
  const textRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const sentence = "Connecting Texas, One Dish at a Time";

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);

  return (
    <section className="py-20 bg-white scroll-section">
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative rounded-[3rem] overflow-hidden shadow-2xl group">
          {/* Animated Text Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent z-10 flex items-center justify-center">
            <div
              ref={textRef}
              className="text-center px-4 transform transition-all duration-1000 ease-out"
            >
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                <span className="flex justify-center flex-wrap gap-2 md:gap-3">
                  {sentence.split(" ").map((word, wordIndex) => (
                    <span
                      key={wordIndex}
                      className="inline-flex overflow-hidden"
                      style={{
                        animationDelay: `${wordIndex * 200}ms`,
                      }}
                    >
                      {word.split("").map((char, charIndex) => (
                        <span
                          key={charIndex}
                          className={`
                            inline-block transform transition-all duration-700 ease-out
                            ${
                              isVisible
                                ? "translate-y-0 opacity-100"
                                : "translate-y-full opacity-0"
                            }
                          `}
                          style={{
                            animationDelay: `${
                              wordIndex * 200 + charIndex * 50
                            }ms`,
                            transitionDelay: `${
                              wordIndex * 200 + charIndex * 50
                            }ms`,
                          }}
                        >
                          {char === " " ? "\u00A0" : char}
                        </span>
                      ))}
                    </span>
                  ))}
                </span>
              </h2>

              {/* Subtitle with delay */}
              <p
                className={`
                  text-lg md:text-xl text-white/90 max-w-2xl mx-auto 
                  transition-all duration-1000 delay-1000
                  ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  }
                `}
              >
                Professional satellite installations across Houston and beyond
              </p>

              {/* Decorative line */}
              <div
                className={`
                  w-32 h-1 bg-gradient-to-r from-transparent via-white to-transparent 
                  mx-auto mt-8 transition-all duration-1000 delay-1200
                  ${
                    isVisible
                      ? "scale-x-100 opacity-100"
                      : "scale-x-0 opacity-0"
                  }
                `}
              />
            </div>
          </div>

          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-50 z-5" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30 z-5" />

          {/* Image */}
          <img
            src="/images/about_us_banner.webp"
            alt="Satellite Connect professional team"
            className="w-full h-[500px] md:h-[600px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />

          {/* Floating badges */}
          <div className="absolute top-8 left-8 bg-gradient-primary text-white px-6 py-3 rounded-2xl shadow-xl z-20 animate-smooth-float">
            <p className="text-sm font-black tracking-wider">SINCE 2008</p>
          </div>
          <div className="absolute bottom-8 right-8 bg-white/90 text-primary px-6 py-3 rounded-2xl shadow-xl z-20 animate-smooth-float-delay backdrop-blur-sm">
            <p className="text-sm font-black tracking-wider">TEXAS TRUSTED</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;

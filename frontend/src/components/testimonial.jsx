import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque felis vitae tortor augue. Velit nascetur Consequat faucibus porttitor enim et.",
    author: "John Doe"
  },
  {
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
    author: "Jane Smith"
  },
  {
    text: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born.",
    author: "Alice Johnson"
  }
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const goToIndex = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="testimonial-container">
      <div className="testimonial-quote-icon">“</div>
      {testimonials.map((testimonial, index) => (
        <p
          key={index}
          className={`testimonial-text ${index === currentIndex ? 'active' : 'inactive'}`}
          style={{ display: index === currentIndex ? 'block' : 'none' }}
        >
          {testimonial.text}
        </p>
      ))}
      <div className="testimonial-divider"></div>
      <div className="testimonial-name">{testimonials[currentIndex].author}</div>
      <div className="testimonial-indicators">
        {testimonials.map((_, index) => (
          <div
            key={index}
            className={`testimonial-indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToIndex(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;

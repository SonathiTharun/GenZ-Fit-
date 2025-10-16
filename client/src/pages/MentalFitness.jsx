import React, { useState } from "react";

const MentalFitness = () => {
  const [formData, setFormData] = useState({
    mood: "",
    stressLevel: "",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const suggestions = [
    "🧘‍♀️ Try a 10-minute yoga session",
    "🌿 Practice deep breathing for 5 minutes",
    "📓 Write 3 things you’re grateful for",
    "🎧 Listen to calming music",
    "🚶‍♂️ Take a mindful walk outdoors",
  ];

  const wellnessImages = [
    {
      src: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Fyoga&psig=AOvVaw2LxEcu2aELvgR2aQAwNcvj&ust=1760713121987000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCIjagdT9qJADFQAAAAAdAAAAABAEhttps://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fyoga%2F&psig=AOvVaw2LxEcu2aELvgR2aQAwNcvj&ust=1760713121987000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCIjagdT9qJADFQAAAAAdAAAAABAT",
      alt: "Yoga session",
    },
    {
      src: "https://images.unsplash.com/photo-1519181245277-cffeb31da2fb?auto=format&fit=crop&w=600&q=80",
      alt: "Meditation outdoors",
    },
    {
      src: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80",
      alt: "Journaling",
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
     setSubmitted(true);
    try {
      const response = await fetch("/api/mental", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Mental resource created:", result);
        setSubmitted(true);
      } else {
        console.error("Failed to submit entry");
      }
    } catch (error) {
      console.error("Error submitting entry:", error);
    }
  };

  const styles = {
    container: {
      maxWidth: "700px",
      margin: "3rem auto",
      padding: "2rem",
      background: "linear-gradient(to right, #e0f7fa, #fce4ec)",
      borderRadius: "16px",
      boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
      fontFamily: "Segoe UI, sans-serif",
      color: "#333",
    },
    heading: {
      textAlign: "center",
      marginBottom: "2rem",
      fontSize: "2rem",
      fontWeight: "600",
      color: "#00796b",
    },
    label: {
      display: "block",
      marginBottom: "1.2rem",
      fontWeight: "500",
      fontSize: "1rem",
    },
    input: {
      width: "100%",
      padding: "0.8rem",
      marginTop: "0.4rem",
      border: "1px solid #bbb",
      borderRadius: "8px",
      fontSize: "1rem",
    },
    textarea: {
      width: "100%",
      padding: "0.8rem",
      marginTop: "0.4rem",
      border: "1px solid #bbb",
      borderRadius: "8px",
      fontSize: "1rem",
    },
    button: {
      marginTop: "1.5rem",
      padding: "0.8rem 1.8rem",
      backgroundColor: "#00796b",
      color: "white",
      border: "none",
      borderRadius: "8px",
      fontSize: "1rem",
      cursor: "pointer",
      transition: "background-color 0.3s ease",
    },
    thankYou: {
      textAlign: "center",
    },
    list: {
      marginTop: "1.5rem",
      paddingLeft: "0",
      listStyle: "none",
      display: "grid",
      gap: "0.8rem",
    },
    listItem: {
      backgroundColor: "#ffffff",
      padding: "0.8rem 1rem",
      borderRadius: "8px",
      boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
      fontWeight: "500",
      textAlign: "left",
    },
    streakMessage: {
      marginTop: "2rem",
      backgroundColor: "#fff3cd",
      padding: "1rem",
      borderLeft: "6px solid #ffc107",
      borderRadius: "8px",
      fontWeight: "500",
      fontSize: "1rem",
    },
    imageGallery: {
      display: "flex",
      justifyContent: "center",
      marginTop: "2rem",
      gap: "1rem",
      flexWrap: "wrap",
    },
    imageItem: {
      width: "200px",
      height: "140px",
      objectFit: "cover",
      borderRadius: "10px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
      transition: "transform 0.3s ease",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Mental Fitness Tracker 🧠</h2>

      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <label style={styles.label}>
            How are you feeling today?
            <input
              type="text"
              name="mood"
              value={formData.mood}
              onChange={handleChange}
              placeholder="e.g., Anxious, Calm, Happy"
              required
              style={styles.input}
            />
          </label>

          <label style={styles.label}>
            Stress Level (1-10)
            <input
              type="number"
              name="stressLevel"
              value={formData.stressLevel}
              onChange={handleChange}
              min="1"
              max="10"
              required
              style={styles.input}
            />
          </label>

          <label style={styles.label}>
            Any notes you'd like to share?
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              placeholder="Write anything on your mind..."
              rows="4"
              style={styles.textarea}
            />
          </label>

          <button type="submit" style={styles.button}>
            Submit
          </button>
        </form>
      ) : (
        <div style={styles.thankYou}>
          <h3>Thanks for sharing 💬</h3>
          <p>Here are some suggestions to boost your mental wellness today:</p>
          <ul style={styles.list}>
            {suggestions.map((tip, index) => (
              <li key={index}>{tip}</li>
            ))}
          </ul>

          <div style={styles.imageGallery}>
            {wellnessImages.map((img, index) => (
              <img
                key={index}
                src={img.src}
                alt={img.alt}
                style={styles.imageItem}
              />
            ))}
          </div>

          <div style={styles.streakMessage}>
            🌟 Keep it up! Earn extra credits by completing your mental fitness
            tasks daily. Build your streak and unlock rewards!
          </div>
        </div>
      )}
    </div>
  );
};

export default MentalFitness;

import ContactMessage from "../models/ContactMessage.js";

export const getContactMessages = async (req, res) => {
  try {
    const messages = await ContactMessage.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const submitContactForm = async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    
    const contactMessage = new ContactMessage({
      name,
      email,
      subject,
      message,
    });
    await contactMessage.save();

    res.status(200).json({ message: "Contact form submitted successfully." });
  } catch (error) {
    console.error("Error submitting contact form:", error);
    res.status(500).json({ error: "Server error. Please try again later." });
  }
};

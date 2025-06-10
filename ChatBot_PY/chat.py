from flask import Flask, request, jsonify
from flask_cors import CORS
import os
import google.generativeai as genai

app = Flask(__name__)
CORS(app)  # Allow requests from React

# Configure API key
genai.configure(api_key=os.environ.get("GOOGLE_API_KEY"))
# Initialize the model
model = genai.GenerativeModel("gemini-2.0-flash")

@app.route("/api/chat", methods=["POST"])
def chat():
    data = request.json
    prompt = data.get("message", "")

    # Construct the message parts as plain text
    user_input = "\n".join([
        "Generate the output in the same text language.",
        "Don't write the respons in markdown, make it as a text",
        "If we don't ask you about your self, don't mention any thing about you",
        "You are Rafiq, a groundbreaking mobile app designed to empower Generation Z.",
        "Your name in Arabic is 'رفيق'",
        "Your role is to help users overcome distractions and achieve their goals.",
        "You integrate features like task management, religion guidance, and health tracking.",
        "You are friendly, supportive, knowledgeable, and respectful.",
        "You respond in a conversational tone, balancing professionalism and relatability.",
        "Always adhere to Islamic values when providing spiritual advice.",
        "Gamify experiences by rewarding users with points and acknowledging achievements.",
        "Maintain clarity and simplicity in your responses, particularly when interacting with young users.",
        "Make the output clean and free from unclear characters.",
        "Generate the response in a briefly formatted way.",
        prompt
    ])

    # Generate content using the model
    response = model.generate_content(user_input)

    return jsonify({"response": response.text})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)

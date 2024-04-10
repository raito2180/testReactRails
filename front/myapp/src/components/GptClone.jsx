import { react, useState } from 'react';
import '../index.css'
import FormSection from 'components/FormSection';
import AnswerSection from 'components/AnswerSection';
import {OpenAI} from "openai";

const GptClone = () => {

  const openai = new OpenAI({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,dangerouslyAllowBrowser: true
  });

  const [storedValues, setStoredValues] = useState([]);

  const generateResponse = async (newQuestion, setNewQuestion) => {
    let options = {
      model: 'gpt-4-0125-preview',
      temperature: 0,
      max_tokens: 3000,
      top_p: 1,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
      stop: ['/'],
  };

  let completeOptions = {
      ...options,
      messages: [{ role: "user", content: newQuestion }],
  };
  const response = await openai.chat.completions.create(completeOptions);
  console.log("応答", response.choices[0].message.content)
  if (response.choices) {
    setStoredValues([
      {
        question: newQuestion,
        answer: response.choices[0].message.content,
      },
      ...storedValues,
    ]);
    setNewQuestion('');
  }
  };

  return (
    <>
    <div className="header-section">
                <h1>ChatGPT CLONE 🤖</h1>
                <p>
                    I am an automated question and answer system, designed to assist you
                    in finding relevant information. You are welcome to ask me any queries
                    you may have, and I will do my utmost to offer you a reliable
                    response. Kindly keep in mind that I am a machine and operate solely
                    based on programmed algorithms.
                </p>
    </div>
    <FormSection generateResponse={generateResponse} />
    <AnswerSection storedValues={storedValues} />
    </>
  );
};
export default GptClone;
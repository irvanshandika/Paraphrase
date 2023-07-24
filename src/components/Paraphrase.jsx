// src/Paraphrase.js
import React, { useState } from "react";
import axios from "axios";

const Paraphrase = () => {
  const [originalText, setOriginalText] = useState("");
  const [paraphrasedText, setParaphrasedText] = useState("");

  const handleChange = (e) => {
    setOriginalText(e.target.value);
  };

  const getSynonyms = async (word) => {
    try {
      const response = await axios.get(`https://api.datamuse.com/words?rel_syn=${word}`);
      return response.data.map((item) => item.word);
    } catch (error) {
      console.error("Error fetching synonyms:", error);
      return [];
    }
  };

  const handleParaphrase = async () => {
    // Pisahkan teks menjadi array kata-kata
    const words = originalText.split(" ");

    // Untuk setiap kata dalam teks, ganti dengan sinonim jika tersedia
    const paraphrasedWords = await Promise.all(
      words.map(async (word) => {
        const synonyms = await getSynonyms(word);
        if (synonyms && synonyms.length > 0) {
          // Pilih secara acak sinonim dari array sinonim
          const randomIndex = Math.floor(Math.random() * synonyms.length);
          return synonyms[randomIndex];
        } else {
          return word; // Jika tidak ada sinonim, gunakan kata aslinya
        }
      })
    );

    // Gabungkan kata-kata menjadi teks hasil parafrase
    const paraphrasedResult = paraphrasedWords.join(" ");
    setParaphrasedText(paraphrasedResult);
  };

  return (
    <div>
      <textarea className="w-full h-40 p-2 border border-gray-400 resize-none" placeholder="Masukkan teks yang ingin diparafrase..." value={originalText} onChange={handleChange}></textarea>
      <button className="mt-2 px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600" onClick={handleParaphrase}>
        Parafrasekan
      </button>
      <div className="mt-4">
        <h2 className="text-xl font-bold">Hasil Parafrase:</h2>
        <p className="mt-2 p-2 border border-gray-400 bg-gray-100 rounded">{paraphrasedText}</p>
      </div>
    </div>
  );
};

export default Paraphrase;

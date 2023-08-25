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
    <section className="mt-10">
      <div className="container mx-auto px-5 py-5">
        <div className="py-1 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="flex flex-col justify-center order-1 lg:order-1">
            <h1 className="text-black dark:text-white mb-4 text-center bg-indigo-500 p-4 rounded-lg">Masukkin Text</h1>
            <textarea
              rows="10"
              cols="80"
              value={originalText}
              onChange={handleChange}
              placeholder="Masukkan teks yang ingin diparafrase..."
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></textarea>
          </div>
          <div className="order-3 lg:order-3 flex flex-col justify-center">
            <h1 className="text-black dark:text-white mb-4 text-center bg-indigo-500 p-4 rounded-lg">Hasil</h1>
            <textarea
              rows="10"
              cols="80"
              disabled
              value={paraphrasedText}
              placeholder="Hasil Parafrase"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></textarea>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="bg-indigo-600 hover:bg-indigo-900 px-10 py-4 mt-4 rounded-md text-white" onClick={handleParaphrase}>
            Parafrase
          </button>
        </div>
      </div>
    </section>
  );
};

export default Paraphrase;

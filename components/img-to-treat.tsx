"use client"

import Image from "next/image";
import { ChangeEvent, useState, FormEvent } from "react";

export default function ImgToTreatComponent() {
  const [image, setImage] = useState<string>("");
  const [openAIResponse, setOpenAIResponse] = useState<string>("");

  // Handle file change
  function handleFileChange(event: ChangeEvent<HTMLInputElement>) {
    if (event.target.files === null) {
      window.alert("No file selected. Choose a file.");
      return;
    }
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      if (typeof reader.result === "string") {
        setImage(reader.result);
      }
    };

    reader.onerror = (error) => {
      console.error("Error: ", error);
    };
  }

  // Handle form submission
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  
    if (image === "") {
      alert("Upload an image.");
      return;
    }
  
    await fetch("api/analyzeImage", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        image: image // Base64 image
      })
    })
    .then(async (response) => {
      const reader = response.body?.getReader();
      setOpenAIResponse("");
      
      while (true) {
        const result = await reader?.read();
        if (result?.done) break; // Check if 'result' and 'result.done' are defined
        var currentChunk = new TextDecoder().decode(result?.value); // Check if 'result.value' is defined
        setOpenAIResponse((prev) => prev + currentChunk);
      }
    })
    .catch((error) => {
      console.error("Error: ", error);
    });
  }
  

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
    <div className='bg-slate-200 w-full max-w-4xl rounded-lg shadow-lg p-6 md:p-8'>
      <h2 className='text-2xl font-bold mb-6 text-center'>Uploaded Image</h2>
      
      {image !== "" ? (
        <div className="mb-6 overflow-hidden rounded-lg shadow-sm">
          <Image
            src={image}
            alt="Uploaded Image"
            width={640}
            height={360}
            sizes="(max-width: 640px) 100vw, 640px"
            className="rounded-lg"
          />
        </div>
      ) : (
        <div className="mb-6 p-8 text-center bg-white rounded-lg shadow-sm">
          <p className="text-lg">Once your Dog, you will see them here.</p>
        </div>
      )}
  
      <form onSubmit={handleSubmit} className="mb-6">
        <div className='flex flex-col'>
          <label className='mb-2 text-lg font-medium'>Upload Image</label>
          <input
            type="file"
            className="text-lg p-2 border border-gray-300 rounded-lg cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-lg file:font-semibold file:bg-sky-500 file:text-white hover:file:bg-sky-600"
            onChange={handleFileChange}
          />
        </div>
  
        <div className='flex justify-center mt-6'>
          <button type="submit" className='px-6 py-2 bg-sky-600 text-white rounded-md hover:bg-sky-700 transition duration-200'>
            Analyze Pup!
          </button>
        </div>
      </form>
  
      {openAIResponse !== "" && (
        <div className="border-t border-gray-300 pt-4">
          <h2 className="text-2xl font-bold mb-2">AI Response</h2>
          <p className="text-lg">{openAIResponse}</p>
        </div>
      )}
    </div>
  </div>
  
  );
}

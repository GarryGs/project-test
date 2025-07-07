import './App.css';
import axios from "axios";
import { useEffect, useState } from 'react';
import { EmailComp } from './Email';

function App() {
  const [queryData, setQueryData] = useState([]);
  const [openIndex, setOpenIndex] = useState(null);
  const [loading, setLoading] = useState(false);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect( () => {
    axios.get("https://project-test-a26q.onrender.com").then(
      response => {
        setQueryData(response.data)
    })
  }, []);

  const handleSubmit = async (event) => {
      event.preventDefault();
      setLoading(true);

      const target = event.target;

      const formData = {
          fullName: target.fullname.value,
          phoneNo: target.phone.value,
          email: target.email.value,
          department: target.departments.value,
          message: target.message.value,
      };

      const response = await fetch('https://project-test-a26q.onrender.com/api/contact', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
      });

      setLoading(false);

      if (response.ok) {
          alert('Message sent successfully!');
      } else {
          alert('Failed to send message.');
      }
  };
  
  return (
    <>
      <header className="bg-white dark:bg-[#213448] text-black dark:text-white text-center py-8">
        <h1 className="text-4xl font-bold"> SONALIKA </h1>
        <p className="text-lg mt-2">Smart Solutions for IT Infrastructure Challenges</p>
      </header>
      
      <hr className="border-gray-200 dark:border-gray-700" />
  
      <section className="bg-white dark:bg-[#213448]">
        <div className="container px-50 py-15 mx-auto">
          <h1 className="text-2xl font-semibold text-gray-800 lg:text-3xl dark:text-white">FAQ&apos;s</h1>

          <hr className="my-6 border-gray-200 dark:border-gray-700" />

          <div>
            
            {queryData.map( (queryDataSingle, index) => 
              <div key={index}>
                <button
                  className="flex items-center focus:outline-none"
                  onClick={() => toggle(index)}
                >
                  <svg
                    className={`flex-shrink-0 w-6 h-6 text-blue-500 transition-transform duration-200 ${
                      openIndex === index ? 'rotate-90' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
                  </svg>

                  <h1 className="mx-4 text-xl text-gray-700 dark:text-white">
                    {queryDataSingle.questions}
                  </h1>
                </button>

                {openIndex == index && (
                  <div className="flex mt-8 md:mx-10">
                    <span className="border border-blue-500" />
                    <p className="max-w-3xl px-4 text-gray-500 dark:text-gray-300">
                      {queryDataSingle.solutions}
                    </p>
                  </div>
                )}
                
                <hr className="my-6 border-gray-200 dark:border-gray-700" />
              </div>
            )}

            
          </div>
        </div>
      </section>
      
      <hr className="border-gray-200 dark:border-gray-700" />

      <EmailComp isLoading={loading} onSubmitHandler={handleSubmit}></EmailComp>

      <footer className="bg-white dark:bg-[#22223b] text-black dark:text-white text-center py-8">© 2025 [SONALIKA GROUPS]. All rights reserved.</footer>
    </>
  )
}

export default App

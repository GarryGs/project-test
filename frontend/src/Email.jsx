export const EmailComp = ({isLoading, onSubmitHandler}) => {
    return <>
        <div className="m-8 grid md:grid-cols-2 gap-16 items-center relative overflow-hidden p-8 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-3xl max-w-6xl mx-auto bg-white mt-4 font-[sans-serif] before:absolute before:right-0 before:w-[300px] before:bg-blue-400 before:h-full max-md:before:hidden">
            <div>
                <h2 className="text-gray-800 text-3xl font-extrabold">Get In Touch</h2>
                <p className="text-sm text-gray-500 mt-4 leading-relaxed">Have a specific inquiry or looking to explore new opportunities? Our
                    experienced team is ready to engage with you.</p>

                <form onSubmit={onSubmitHandler}>
                    <div className="space-y-4 mt-8">
                        <input type="text" placeholder="Full Name" name="fullname"
                            className="px-2 py-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 outline-none" />
                        
                        <input type="tel" placeholder="Phone No." name="phone"
                            className="px-2 py-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 outline-none" />

                        <input type="email" placeholder="Email" name="email"
                            className="px-2 py-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 outline-none" />

                        <label htmlFor="departments" className="px-2 py-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 outline-none">Select Department Related to Your Query</label>
                        <select name="departments" id="departments" className="px-2 py-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 outline-none">
                            <option value="MA">Manager: Vikrant Rana</option>
                            <option value="NS">Network + Security: Jasveer Singh</option>
                            <option value="HE">Hardware Expert: Bahadur Singh</option>
                            <option value="NG">Network + General Issue: Jaskaran Bhatti</option>
                            <option value="AG">Assets & General Issue: Manpreet Mal</option>
                            <option value="T1">TEST 1</option>
                            <option value="T2">TEST 2</option>
                        </select>
                        
                        <textarea placeholder="Write Message" name="message"
                            className="px-2 pt-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 outline-none"></textarea>
                    </div>

                    <button type="submit"
                        disabled={isLoading}
                        className="mt-8 flex items-center justify-center text-sm w-full rounded-md px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white">
                        {isLoading ? (
                            <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill='#fff' className="mr-2 animate-spin" viewBox="0 0 16 16">
                                <circle cx="8" cy="8" r="7" stroke="#fff" strokeWidth="1" fill="none"></circle>
                                <path d="M8 1a7 7 0 1 1 0 14 7 7 0 0 1 0-14z" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                        ) : (
                            <div className="flex">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill='#fff' className="mr-2"
                                    viewBox="0 0 548.244 548.244">
                                    <path fillRule="evenodd"
                                        d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z"
                                        clipRule="evenodd" data-original="#000000" />
                                </svg>
                                Send Message
                            </div>
                            
                        )}
                    </button>
                </form>

                <ul className="mt-4 flex flex-wrap justify-center gap-6">
                    <li className="flex items-center text-blue-600">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill='currentColor'
                            viewBox="0 0 479.058 479.058">
                            <path
                                d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                                data-original="#000000" />
                        </svg>
                        <div className="text-sm ml-4">
                            <strong>sonalika@sonalika.com</strong>
                        </div>
                    </li>
                    <li className="flex items-center text-blue-600">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill='currentColor'
                            viewBox="0 0 482.6 482.6">
                            <path
                                d="M98.339 320.8c47.6 56.9 104.9 101.7 170.3 133.4 24.9 11.8 58.2 25.8 95.3 28.2 2.3.1 4.5.2 6.8.2 24.9 0 44.9-8.6 61.2-26.3.1-.1.3-.3.4-.5 5.8-7 12.4-13.3 19.3-20 4.7-4.5 9.5-9.2 14.1-14 21.3-22.2 21.3-50.4-.2-71.9l-60.1-60.1c-10.2-10.6-22.4-16.2-35.2-16.2-12.8 0-25.1 5.6-35.6 16.1l-35.8 35.8c-3.3-1.9-6.7-3.6-9.9-5.2-4-2-7.7-3.9-11-6-32.6-20.7-62.2-47.7-90.5-82.4-14.3-18.1-23.9-33.3-30.6-48.8 9.4-8.5 18.2-17.4 26.7-26.1 3-3.1 6.1-6.2 9.2-9.3 10.8-10.8 16.6-23.3 16.6-36s-5.7-25.2-16.6-36l-29.8-29.8c-3.5-3.5-6.8-6.9-10.2-10.4-6.6-6.8-13.5-13.8-20.3-20.1-10.3-10.1-22.4-15.4-35.2-15.4-12.7 0-24.9 5.3-35.6 15.5l-37.4 37.4c-13.6 13.6-21.3 30.1-22.9 49.2-1.9 23.9 2.5 49.3 13.9 80 17.5 47.5 43.9 91.6 83.1 138.7zm-72.6-216.6c1.2-13.3 6.3-24.4 15.9-34l37.2-37.2c5.8-5.6 12.2-8.5 18.4-8.5 6.1 0 12.3 2.9 18 8.7 6.7 6.2 13 12.7 19.8 19.6 3.4 3.5 6.9 7 10.4 10.6l29.8 29.8c6.2 6.2 9.4 12.5 9.4 18.7s-3.2 12.5-9.4 18.7c-3.1 3.1-6.2 6.3-9.3 9.4-9.3 9.4-18 18.3-27.6 26.8l-.5.5c-8.3 8.3-7 16.2-5 22.2.1.3.2.5.3.8 7.7 18.5 18.4 36.1 35.1 57.1 30 37 61.6 65.7 96.4 87.8 4.3 2.8 8.9 5 13.2 7.2 4 2 7.7 3.9 11 6 .4.2.7.4 1.1.6 3.3 1.7 6.5 2.5 9.7 2.5 8 0 13.2-5.1 14.9-6.8l37.4-37.4c5.8-5.8 12.1-8.9 18.3-8.9 7.6 0 13.8 4.7 17.7 8.9l60.3 60.2c12 12 11.9 25-.3 37.7-4.2 4.5-8.6 8.8-13.3 13.3-7 6.8-14.3 13.8-20.9 21.7-11.5 12.4-25.2 18.2-42.9 18.2-1.7 0-3.5-.1-5.2-.2-32.8-2.1-63.3-14.9-86.2-25.8-62.2-30.1-116.8-72.8-162.1-127-37.3-44.9-62.4-86.7-79-131.5-10.3-27.5-14.2-49.6-12.6-69.7z"
                                data-original="#000000"></path>
                        </svg>
                        <div className="flex flex-col text-sm ml-4">
                            <strong>Missed Call: 1800 102 1011</strong>
                            <strong>Whatsapp: +91 7717308282</strong>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="z-10 relative h-full max-md:min-h-[350px]">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27214.95022943497!2d75.80472707431639!3d31.50029049999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391afc5f25660273%3A0xdbcd3646fe7f4fd0!2sSonalika%20International%20Tractors%20Ltd.!5e0!3m2!1sen!2sin!4v1751606868007!5m2!1sen!2sin"
                    className="left-0 top-0 h-full w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg" frameBorder="0"
                    allowFullScreen></iframe>
            </div>
        </div>
    </>
}
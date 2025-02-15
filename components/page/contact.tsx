'use client';

import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        notes: ''
    });

    const [message, setMessage] = useState('');
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

    useEffect(() => {
        if (message) {
            const timer = setTimeout(() => {
                setMessage('');
            }, 5000);

            return () => clearTimeout(timer);
        }
    }, [message]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.phone) {
            setMessage('Vui lòng điền đầy đủ thông tin bắt buộc');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setMessage('Email không hợp lệ');
            return;
        }

        const phoneRegex = /^\d{10}$/;
        if (!phoneRegex.test(formData.phone)) {
            setMessage('Số điện thoại phải đúng có 10 chữ số');
            return;
        }

        console.log('Form data:', formData);
        setMessage('Gửi thành công!');

        setFormData({
            name: '',
            email: '',
            phone: '',
            notes: ''
        });
    };

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <h2 className="text-2xl font-bold mb-4 ml-5 text-black"> Contact Me</h2>
            <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Liên hệ với chúng tôi</h2>

                {message && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className={`p-4 mb-4 rounded ${message.includes('thành công') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}
                    >
                        {message}
                    </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                    {["name", "email", "phone", "notes"].map((field, index) => (
                        <motion.div
                            key={field}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <label htmlFor={field} className="block text-sm font-medium text-gray-700">
                                {field === "name" ? "Họ và tên *" : field === "email" ? "Email *" : field === "phone" ? "Số điện thoại *" : "Ghi chú"}
                            </label>
                            {field !== "notes" ? (
                                <motion.input
                                    type={field === "email" ? "email" : "text"}
                                    id={field}
                                    name={field}
                                    value={formData[field as keyof typeof formData]}
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                    required={field !== "notes"}
                                    whileFocus={{ scale: 1.02 }}
                                />
                            ) : (
                                <motion.textarea
                                    id={field}
                                    name={field}
                                    value={formData[field as keyof typeof formData]}
                                    onChange={handleChange}
                                    rows={4}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                    whileFocus={{ scale: 1.02 }}
                                />
                            )}
                        </motion.div>
                    ))}

                    <motion.button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Gửi
                    </motion.button>
                </form>
            </div>
        </motion.div>
    );
};

export default Contact;

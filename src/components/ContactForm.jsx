import { useState } from 'react';
import Swal from 'sweetalert2';

import { postContact } from '../api/formSpree';
import { contactValidation } from '../utils/contactValidation';


export default function ContactForm() {
    const [contactData, setContactData] = useState({
        name: '',
        email: '',
        telephone: '',
        location: '',
        message: '',
    });

    // handler for input validation
    const handleInputValidation = (e) => {
        setContactData({
            ...contactData,
            [e.target.name]: e.target.value,
        });
    };

    // handler for submit contact form with sweetalert
    const handleContactSubmit = async (e) => {
        e.preventDefault();

        const validationError = contactValidation(contactData);
        if (validationError) {
            Swal.fire({
                icon: 'error',
                title: 'Gagal',
                text: validationError,
                allowOutsideClick: false,
                confirmButtonText: 'Coba lagi',
                confirmButtonColor: '#AC1207',
                customClass: {
                    confirmButton: 'sweetalert-button',
                },
            });
            return;
        }

        const result = await postContact(contactData);
        if (result.success) {
            Swal.fire({
                icon: 'success',
                title: 'Sukses',
                text: 'Pesan Anda telah berhasil dikirim. Kami akan segera menghubungi Anda.',
                allowOutsideClick: false,
                confirmButtonText: 'Oke',
                confirmButtonColor: '#181B68',
                customClass: {
                    confirmButton: 'sweetalert-button',
                },
            });
            setContactData({
                name: '',
                email: '',
                telephone: '',
                location: '',
                message: '',
            });
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Gagal',
                text: result.message,
                allowOutsideClick: false,
                confirmButtonText: 'Coba lagi',
                confirmButtonColor: '#AC1207',
                customClass: {
                    confirmButton: 'sweetalert-button',
                },
            });
        }
    };

    return (
        <form onSubmit={handleContactSubmit} className="flex flex-col w-full h-auto gap-5 mt-3 sm:mt-8">
            <div className="flex flex-wrap w-full h-auto gap-5 sm:flex-nowrap">
                <div className="flex flex-col h-auto gap-5 basis-full sm:basis-1/2">
                    <div id="name-input" className="flex flex-col w-full gap-2">
                        <label htmlFor="name" className="w-full text-sm font-normal text-left text-fourly sm:text-lg md:text-xl xl:text-3xl">Nama Lengkap</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            value={contactData.name}
                            onChange={handleInputValidation}
                            placeholder=""
                            className="w-full h-auto px-3 py-3 font-semibold text-black border-2 border-gray-300 text-md sm:text-lg sm:py-4 rounded-xl focus:border-primary focus:outline-none"
                        />
                    </div>
                    <div id="email-input" className="flex flex-col w-full gap-2">
                        <label htmlFor="email" className="w-full text-sm font-normal text-left text-fourly sm:text-lg md:text-xl xl:text-3xl">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={contactData.email}
                            onChange={handleInputValidation}
                            placeholder=""
                            className="w-full h-auto px-3 py-3 font-semibold text-black border-2 border-gray-300 text-md sm:text-lg sm:py-4 rounded-xl focus:border-primary focus:outline-none"
                        />
                    </div>
                    <div id="telephone-input" className="flex flex-col w-full gap-2">
                        <label htmlFor="telephone" className="w-full text-sm font-normal text-left text-fourly sm:text-lg md:text-xl xl:text-3xl">Telepon</label>
                        <input
                            type="tel"
                            name="telephone"
                            id="telephone"
                            value={contactData.telephone}
                            onChange={handleInputValidation}
                            placeholder=""
                            className="text-md sm:text-lg w-full h-auto px-3 py-3 sm:py-4 font-semibold text-black border-2 border-[#D9D9D9] rounded-xl focus:border-primary focus:outline-none"
                        />
                    </div>
                </div>
                <div className="flex flex-col h-auto gap-6 basis-full sm:basis-1/2">
                    <div id="location-input" className="flex flex-col w-full gap-2">
                        <label htmlFor="location" className="w-full text-sm font-normal text-left text-fourly sm:text-lg md:text-xl xl:text-3xl">Lokasi</label>
                        <input
                            type="text"
                            name="location"
                            id="location"
                            value={contactData.location}
                            onChange={handleInputValidation}
                            placeholder=""
                            className="w-full h-auto px-3 py-3 font-semibold text-black border-2 border-gray-300 text-md sm:text-lg sm:py-4 rounded-xl focus:border-primary focus:outline-none"
                        />
                    </div>
                    <div id="message-input" className="flex flex-col w-full gap-2">
                        <label htmlFor="message" className="w-full text-sm font-normal text-left text-fourly sm:text-lg md:text-xl xl:text-3xl">Apa yang Anda pikirkan?</label>
                        <textarea
                            name="message"
                            id="message"
                            value={contactData.message}
                            onChange={handleInputValidation}
                            placeholder=""
                            rows={6}
                            className="w-full h-auto px-3 py-4 font-semibold text-black border-2 border-gray-300 text-md sm:text-lg rounded-xl focus:border-primary focus:outline-none"
                        ></textarea>
                    </div>
                </div>
            </div>
            <button type="submit" className="h-auto px-[34px] sm:px-[30px] lg:px-[60px] py-3 text-lg sm:text-xl lg:text-2xl xl:text-3xl font-normal mt-1 sm:mt-5 text-white rounded-full w-fit bg-primary">Kirim</button>
        </form>
    );
}
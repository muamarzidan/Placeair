import { useState } from 'react';
import Swal from 'sweetalert2';

import { postNewsletter } from '../api/formSpree';
import { emailValidation } from '../utils/emailValidation';
import "../assets/css/components/newsletter.css";

export default function NewsletterForm() {
    const [email, setEmail] = useState('');

    const handleSubmit = async () => {
        const validationError = emailValidation(email);
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

        const result = await postNewsletter(email);
        if (result.success) {
            Swal.fire({
                icon: 'success',
                title: 'Sukses',
                text: 'Terimakasih. Email Anda berhasil terdaftar pada langganan newsletter Placeir kami',
                allowOutsideClick: false,
                confirmButtonText: 'Oke',
                confirmButtonColor: '#181B68',
                customClass: {
                    confirmButton: 'sweetalert-button',
                },
            });
            setEmail('');
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
        <div id="newsletter-input" className="relative flex justify-between w-[270px] h-[43px] sm:h-[40px] sm:w-[280px] lg:w-[422px] xl:w-[482px] lg:h-[55px] xl:h-[61px] gap-2 sm:gap-5 pl-5 pr-1 py-1 bg-white rounded-full">
            <input
                type="email"
                placeholder="Masukkan email anda"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-auto p-1 text-sm border-none rounded-full outline-none lg:p-2 lg:text-lg text-thridly"
            />
            <button onClick={handleSubmit} className="w-auto h-auto px-5 py-1 text-sm text-white rounded-full lg:px-8 sm:text-md lg:text-lg bg-primary">
                Kirim
            </button>
        </div>
    );
}
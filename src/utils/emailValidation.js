export const emailValidation = (email) => {
    if (!email) return 'Form email tidak boleh kosong, mohon isi email Anda dengan lengkap';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return 'Format email yang Anda isi tidak valid, silahkan isi kembali';
    return null;
};
export const contactValidation = (formData) => {
    const { name, email, telephone, location, message } = formData;
    if (!name || !email || !telephone || !location || !message) {
        return 'Form contact tidak boleh kosong, mohon lengkapi semua input contact dengan lengkap';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return 'Format email tidak valid';
    const phoneRegex = /^[0-9]*$/;
    if (!phoneRegex.test(telephone)) return 'Nomor telepon tidak valid';
    return null;
};
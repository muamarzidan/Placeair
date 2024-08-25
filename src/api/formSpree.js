const FORMSPREE_URL = 'https://formspree.io/f/kepoyahbangggg';

export const postNewsletter = async (email) => {
    try {
        const res = await fetch(FORMSPREE_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }),
        });

        if (res.ok) {
            return { success: true };
        } else {
            return { 
                success: false, 
                message: 'Gagal mengirim email, mohon coba lagi nanti' 
            };
        }
    } catch (error) {
        return { 
            success: false, 
            message: 'Sepertinya ada kesalahan, mohon coba lagi nanti' 
        };
    }
};
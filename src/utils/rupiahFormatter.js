const formatRupiah = (number) => {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(number).replace('IDR', 'Rp.');
}

export default formatRupiah;

// const formatRupiah = (number) => {
//     return 'Rp.' + new Intl.NumberFormat('id-ID', {
//         minimumFractionDigits: 0
//     }).format(number);
// }

// export default formatRupiah;
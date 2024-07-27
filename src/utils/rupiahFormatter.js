const formatRupiah = (number) => {
    return 'Rp.' + new Intl.NumberFormat('id-ID', {
        minimumFractionDigits: 0
    }).format(number);
}

export default formatRupiah;